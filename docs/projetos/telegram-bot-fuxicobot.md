Agora tenho todos os dados necessários. Apresento abaixo o **estudo de caso exaustivo** do projeto **fuxicobot**.

---

# 📋 Estudo de Caso Exaustivo — fuxicobot

## 🧾 1. Identificação e Propósito

| Atributo | Descrição |
|---|---|
| **Nome** | fuxicobot |
| **Versão** | 0.1.0 |
| **Descrição** | Bot Telegram para envio de **mensagens privadas e confidenciais** dentro de grupos, usando **modo inline** (`@fuxicobot @usuario mensagem`) |
| **Linguagem** | Python 3.12+ (strictamente tipado via Mypy) |
| **Gerenciador de pacotes** | `uv` (Astral) — moderno, rápido, com lockfile `uv.lock` |
| **Licença** | MIT |
| **Repositório** | `https://github.com/luccascomvoce/fuxicobot.git` (branch `master`) |

---

## 🏗️ 2. Arquitetura Geral — Design e Organização

### 2.1. Estrutura de Camadas (Layered Architecture)

O projeto adota uma **arquitetura hexagonal/ports-and-adapters** simplificada, com 4 camadas bem definidas:

```
┌──────────────────────────────────────────────────────────┐
│                    INTERFACE (bot/)                       │
│  Handlers, Keyboards, Middlewares (aiogram 3.x)           │
│  ─── Ponto de contato com Telegram API                    │
├──────────────────────────────────────────────────────────┤
│                    SERVICES (services/)                    │
│  SecretService, AuditService, MentionParserService,        │
│  SuggestionService, AdminNotifier                         │
│  ─── Regras de negócio e orquestração                     │
├──────────────────────────────────────────────────────────┤
│             DOMAIN (domain/)                               │
│  Models (SecretMessage, TargetUser, ParseResult),          │
│  Enums (AuditAction, AuditStatus, TargetType, ParseStatus)│
│  Exceptions (FuxicoBotError hierárquica)                   │
│  ─── Entidades e regras de domínio puras (Pydantic)       │
├──────────────────────────────────────────────────────────┤
│           INFRASTRUCTURE (infrastructure/)                 │
│  Database (SQLAlchemy assíncrono), Repositories            │
│  (RedisSecretRepository, MemorySecretRepository,           │
│   SQLAlchemyAuditRepository, RedisRecentContactsRepository)│
│  ─── Adaptadores de infraestrutura (I/O externo)          │
├──────────────────────────────────────────────────────────┤
│                    CORE (core/)                            │
│  Config (Pydantic-Settings), Security (CryptoManager),     │
│  Logger (structlog), I18n (LocaleManager + arquivos JSON)  │
│  ─── Cross-cutting concerns                                │
└──────────────────────────────────────────────────────────┘
```

### 2.2. Padrões Arquiteturais Empregados

| Padrão | Aplicação |
|---|---|
| **Injeção de Dependência** | Manual via construtor — `SecretService(repository, crypto, audit, ...)`. Tudo injetado em `create_bot_and_dispatcher()` |
| **Repository Pattern** | Interfaces abstratas (`SecretRepository`, `AuditRepository`, `RecentContactsRepository`, `UserPreferencesRepository`) com implementações concretas em Redis e Memória |
| **Strategy Pattern** | Troca de implementações de repositório via configuração (`REDIS_URL` presente → Redis, senão → Memória) |
| **Singleton** | `get_settings()` com `@lru_cache`; `locale_manager` como instância global |
| **Observer/Callback** | `_telegram_notify_processor` no structlog + `set_notify_callback()` para notificações Telegram |
| **Fire-and-Forget** | Tarefas assíncronas em background para auditoria e notificações, sem bloquear resposta ao usuário |
| **Template Method** | `BaseMiddleware.__call__()` do aiogram com hooks transversais |
| **Facade** | `AuditService` abstrai complexidade de logging estruturado + persistência SQL |

### 2.3. Diagrama de Dependências do Bootstrap

O ponto de entrada `create_bot_and_dispatcher()` em `bot/bot_instance.py` orquestra toda a injeção:

```
Settings (Pydantic)
  ├── Bot + Dispatcher (aiogram)
  ├── DatabaseManager (SQLAlchemy)
  │     └── SQLAlchemyAuditRepository
  │           └── AuditService
  ├── CryptoManager (Fernet)
  ├── SecretRepository (Redis ou Memória)
  ├── RecentContactsRepository (Redis ou Memória)
  ├── UserPreferencesRepository (Redis ou Memória)
  ├── SecretService(repo, crypto, audit, recent)
  ├── SuggestionService(recent_repo)
  └── I18nService(preferences_repo)
       └── LocaleManager (JSON)
```

---

## 🔐 3. Estratégias de Segurança e Proteções

### 3.1. Criptografia (`security.py`)

| Aspecto | Detalhe |
|---|---|
| **Algoritmo** | **Fernet** (AES-128-CBC + HMAC-SHA256) da biblioteca `cryptography` — criptografia simétrica autenticada |
| **Derivação de chave** | Se a string fornecida não for uma chave Fernet nativa (32 bytes url-safe base64), deriva via **SHA-256** da passphrase |
| **Geração de IDs** | `secrets.token_urlsafe(12)` — 16 caracteres alfanuméricos seguros criptograficamente |
| **Hash para auditoria** | `hashlib.sha256(...).hexdigest()[:16]` — apenas 16 chars armazenados, sem expor o secret_id real |

### 3.2. Sanitização de HTML — SEC-01 (`locales/__init__.py`)

- `get_html()` aplica **`html.escape()`** rigoroso em **todos** os parâmetros dinâmicos antes da formatação do template
- Previne **XSS**, **Entity Parsing DoS** e injeção de tags maliciosas em mensagens HTML do Telegram
- `get_text()` retorna texto puro sem escape (apropriado para pop-ups e botões)

### 3.3. Ciclo de Vida de Rascunho vs Confirmação — SEC-02 (`secret_service.py`)

```
Digitação (Inline Query)           Escolha (ChosenInlineResult)
         │                                    │
         ▼                                    ▼
  create_secret_draft() ───────────► confirm_secret()
  • TTL efêmero: 600s (10min)       • Estende TTL para 24h
  • SEM auditoria no SQLite          • Grava auditoria + recentes
  • SEM escrita em disco             • Promove o segredo
  • Apenas cache em Redis/memória
```

Este padrão **elimina 100% da amplificação de escrita** durante a digitação caractere a caractere.

### 3.4. Anti-Flood / Throttling — `throttling.py`

| Mecanismo | Descrição |
|---|---|
| **Sliding Window** | Janela temporal deslizante por usuário |
| **Dual Mode** | Redis (distribuído) ou Memória LRU (fallback) |
| **LRU Eviction** | `OrderedDict` limitado a `max_users=10000` — previne **Memory Leak** (SEC-03) |
| **Auto-Pruning** | Chaves inativas (timestamps fora da janela) são removidas automaticamente |
| **Audit Debouncer** | Máximo de 1 log de auditoria a cada 30s por usuário — protege SQLite contra **DoS de I/O** (SEC-04) |

### 3.5. Proteções no Docker

```
┌─────────────────────────────────────────────┐
│              docker-compose.yml              │
├─────────────────────────────────────────────┤
│ read_only: true                              │
│ tmpfs: /tmp (32mb, noexec, nosuid, nodev)    │
│ cap_drop: ALL                                │
│ security_opt: no-new-privileges:true         │
│ user: appuser (UID 10001, non-root)          │
│ recursos limitados (CPU 1.0, RAM 512M)       │
│ redes: internal (Redis) + external (Telegram) │
│ rede Redis é "internal: true" (isolada)      │
└─────────────────────────────────────────────┘
```

- **Multi-stage Dockerfile**: builder com ferramentas de compilação → runner leve com apenas runtime
- **Healthcheck**: valida interpretador Python a cada 30s
- **Rotação de logs Docker**: max 50MB por arquivo, 3 backups

### 3.6. Firewall e Hardening (Ansible + Terraform)

| Camada | Proteção |
|---|---|
| **AWS Security Group** | Apenas SSH (porta 22) de IPs autorizados; Egress total para API Telegram |
| **UFW** | Firewall no host: deny incoming, allow outgoing |
| **Fail2ban** | Proteção contra força bruta SSH |
| **Unattended-upgrades** | Atualizações automáticas de segurança |
| **Usuário deployer** | Não-root, chave SSH pública, grupo docker |
| **Disco EBS** | Criptografado (gp3, encrypted=true) |

### 3.7. Tratamento de Exceções Hierárquico

```
FuxicoBotError (base)
  ├── SecretNotFoundError
  ├── SecretExpiredError
  ├── UnauthorizedAccessError
  ├── CryptoError
  └── RateLimitExceededError
```

---

## 📦 4. Recursos Suportados (Features)

### 4.1. Comandos do Bot

| Comando | Descrição | Handler |
|---|---|---|
| `/start` | Boas-vindas adaptativas (privado vs grupo) | `commands.py` |
| `/help`, `/ajuda`, `/ayuda` | Guia de uso traduzido | `commands.py` |
| `/language`, `/idioma` | Seletor de idioma (PT/EN/ES) | `language.py` |

### 4.2. Modo Inline

| Funcionalidade | Comportamento |
|---|---|
| **Parser inteligente** | Detecta `@username`, IDs numéricos, múltiplos destinatários **sem exigir aspas** |
| **Sugestões de contato** | Exibe contatos recentes e membros ativos do grupo quando a query está vazia |
| **Feedback visual** | Cards dinâmicos: guia vazio → digitando → pronto → muito longo |
| **Limite de 200 chars** | Trunca mensagens que excedem o limite do pop-up do Telegram |
| **Avatar personalizado** | Gera avatar com iniciais via `ui-avatars.com` |

### 4.3. Revelação do Segredo (Callback)

- `handle_reveal_secret_callback()` processa clique no botão `sec:{secret_id}`
- **Pop-up modal** (`show_alert=True`) com o conteúdo descriptografado
- **Controle de autorização**: apenas remetente + destinatários listados
- **Mensagens educadas para curiosos**: "Deixe de ser curioso(a)! Esse assunto não é com você."
- **Truncamento seguro**: respeita o limite absoluto de 200 caracteres da API Telegram

### 4.4. Internacionalização (I18n)

- **3 idiomas**: 🇧🇷 Português (padrão), 🇺🇸 English, 🇪🇸 Español
- **Resolução hierárquica**: Preferência salva > language_code do Telegram > fallback `pt`
- **Catálogo JSON**: 4 seções (`commands`, `keyboards`, `inline`, `popups`), dezenas de chaves
- **Normalização**: `pt-BR` → `pt`, `en_US` → `en`, `es-ES` → `es`

### 4.5. Auditoria Completa

| Ação Auditada | Tipo de Evento |
|---|---|
| Criação de segredo | `SECRET_CREATED` |
| Leitura autorizada | `SECRET_READ_AUTHORIZED` |
| Leitura não autorizada | `SECRET_READ_UNAUTHORIZED` |
| Segredo expirado | `SECRET_EXPIRED` |
| Rate limit atingido | `RATE_LIMITED` |
| Comando /start | `COMMAND_START` |
| Comando /help | `COMMAND_HELP` |

### 4.6. Monitor Bot e Notificações

- **Monitor Bot**: bot Telegram secundário para centralizar alertas (configurado via `MONITOR_BOT_TOKEN`)
- **Fallback**: se Monitor não configurado, envia via bot principal para `SUPER_ADMIN_IDS`
- **Throttle anti-spam**: `ALERT_THROTTLE_SECONDS=10s` entre notificações do mesmo tipo
- **Níveis**: threshold configurável (`TELEGRAM_LOG_LEVEL=ERROR`)
- **Formatação HTML**: emojis por nível (🔴 CRITICAL, 🚨 ERROR, 🟡 WARNING, 🔵 INFO, ⚪ DEBUG)

---

## 🧠 5. Estratégias de Cálculo e Algoritmos

### 5.1. Parser de Menções (`parser_service.py`)

```python
# Tokenização sem quotes: "tokens = raw.split()"
# Consome tokens iniciais enquanto forem destinatários:
#   - @username (regex: ^@[a-zA-Z0-9_]{3,32}$)
#   - numeric ID (regex: ^\d{5,16}$)
# O primeiro token que não corresponde a nenhum dos padrões
# marca o início da mensagem
```

**5 estados de ParseStatus**:
```
EMPTY → TARGETS_ONLY → READY (válido)
                      → INVALID (sem alvos)
```

### 5.2. Algoritmo de Sugestões (`suggestion_service.py`)

1. **Destinatários recentes** do usuário (MRU — Most Recently Used)
2. **Membros ativos** do último grupo onde o usuário interagiu
3. **Deduplicação**: `seen_values: set[str]`
4. **Auto-exclusão**: o próprio remetente nunca é sugerido

### 5.3. Rate Limiting — Sliding Window

```python
# Em memória:
#   user_requests[user_id] = [timestamp1, timestamp2, ...]
#   Filtra timestamps fora da janela: now - ts < window_seconds
#   Se len >= max_requests → bloqueia
#   LRU eviction quando > max_users

# No Redis:
#   INCR fuxico:throttle:{user_id}
#   EXPIRE fuxico:throttle:{user_id} window_seconds
#   Se count > max_requests → bloqueia
```

### 5.4. Contador de Leituras Atômico (`secret_repo.py`)

```python
# Redis: INCR na chave separada "fuxico:secret:{id}:reads"
#   → não reseta o TTL do segredo principal (MED-03)
# Memória: dicionário paralelo {secret_id: count}
#   → não serializa o SecretMessage inteiro
```

### 5.5. Auditoria em Background com Debounce

```
log_event() ──► structlog.info() (imediato, síncrono)
             ──► asyncio.create_task(_persist()) (SQL, background)
                 └── gerenciado por set() de tasks com callback discard
```

---

## 🗄️ 6. Armazenamento e Persistência

### 6.1. Redis (Cache Primário)

| Entidade | Key Pattern | TTL |
|---|---|---|
| Segredos | `fuxico:secret:{secret_id}` | Configurável (padrão 24h) |
| Contagem de leituras | `fuxico:secret:{secret_id}:reads` | Same TTL |
| Throttle | `fuxico:throttle:{user_id}` | Janela (5s) |
| Preferências de idioma | `user:pref:lang:{user_id}` | 1 ano |
| Contatos recentes | `user:recent_targets:{user_id}` | 7 dias |
| Último grupo | `user:last_group:{user_id}` | 7 dias |
| Membros ativos do grupo | `group:recent_users:{chat_id}` | 7 dias |

### 6.2. SQLite/PostgreSQL (Auditoria)

- Tabela `audit_logs` com colunas: `id`, `event_type`, `user_id`, `username`, `chat_type`, `action`, `status`, `secret_id_hash` (hash SHA-256[:16]), `metadata_json`, `created_at`
- Apenas **hash anônimo** do segredo é armazenado — **zero vazamento de conteúdo**
- SQLite local via `aiosqlite`; suporte a PostgreSQL via `asyncpg`

### 6.3. Logs Estruturados (structlog)

| Destino | Formato | Rotação |
|---|---|---|
| `stdout` (Docker logs) | JSON ou Console (cores) | N/A |
| Arquivo `logs/fuxicobot.json` | JSON | 10MB por arquivo, 5 backups |

---

## 🔄 7. Fluxo Completo de uma Mensagem Secreta

```
1. Usuário digita no grupo: @fuxicobot @maria senha123
       │
       ▼
2. Inline Query → handle_inline_query()
       │
       ▼
3. MentionParserService.parse_inline_query(" @maria senha123")
   → ParseResult(status=READY, targets=[@maria], message="senha123")
       │
       ▼
4. SecretService.create_secret_draft()
   → Criptografa com CryptoManager.encrypt()
   → Gera ID seguro com secrets.token_urlsafe(12)
   → Salva no Redis com TTL=600s
   → NÃO audita, NÃO grava recentes
       │
       ▼
5. Retorna card inline com botão "🔒 Revelar Fuxico" (callback_data="sec:{id}")
       │
       ▼
6. Usuário toca no card → chosen_inline_result()
   → SecretService.confirm_secret()
   → Estende TTL para 24h
   → Grava auditoria SECRET_CREATED
   → Salva destinatários recentes
       │
       ▼
7. Mensagem aparece no grupo com botão 🤫 Revelar Fuxico
       │
       ▼
8. Maria (ou remetente) clica no botão → handle_reveal_secret_callback()
   → SecretService.read_secret()
   → Verifica autorização (is_user_authorized)
   → Descriptografa CryptoManager.decrypt()
   → Incrementa contagem de leituras (background)
   → Audita SECRET_READ_AUTHORIZED
   → Exibe pop-up modal com a mensagem
       │
       ▼
9. Curioso tenta clicar → UnauthorizedAccessError
   → "👀 Deixe de ser curioso(a)! Esse assunto não é com você."
```

---

## 🛠️ 8. Ferramentas e Stack Tecnológica

| Categoria | Tecnologia | Versão |
|---|---|---|
| **Runtime** | Python | 3.12+ |
| **Bot Framework** | aiogram | ≥3.17.0 |
| **ORM** | SQLAlchemy | ≥2.0.0 (assíncrono) |
| **Driver SQLite** | aiosqlite | ≥0.20.0 |
| **Cache** | Redis (redis-py) | ≥5.2.0 |
| **Criptografia** | cryptography (Fernet) | ≥44.0.0 |
| **Config** | Pydantic-Settings | ≥2.7.0 |
| **Logging** | structlog | ≥24.4.0 |
| **Linter** | Ruff (astral) | ≥0.9.0 |
| **Type Checker** | Mypy | ≥1.14.0 |
| **Testes** | Pytest | ≥8.0.0 |
| **Gerenciador** | uv (astral) | — |
| **Container** | Docker + Docker Compose | — |
| **IaC** | Terraform (AWS) | ≥1.5.0 |
| **Config Mgmt** | Ansible | — |
| **CI/CD** | GitHub Actions | — |
| **Security Scan** | Trivy (aquasecurity) | — |

---

## 🧪 9. Garantia de Qualidade

### 9.1. Testes Automatizados (8 suites)

| Arquivo | Cobertura |
|---|---|
| `test_parser.py` | 7 testes: queries vazias, @usernames, IDs numéricos, multialvos, inválidos, emojis |
| `test_security.py` | 4 testes: criptografia/decriptografia, ciphertext corrompido, geração de IDs, hash |
| `test_secret_service.py` | 7 testes: criar/ler, remetente autorizado, curioso bloqueado, expirado, rascunho+confirma, ataque de confirmação, contagem de leituras |
| `test_audit.py` | 1 teste: persistência SQLite real |
| `test_throttling.py` | 5 testes: abaixo do limite, bloqueio, memory leak (SEC-03), LRU capacity, debouncer (SEC-04), callback alert |
| `test_i18n.py` | 4 testes: integridade dos catálogos, resolução hierárquica, comandos/callbacks, sanitização SEC-01 |
| `test_handlers.py` | 6 testes: keyboards, /start privado/grupo, limite de 200 chars, inline com sugestões, XSS SEC-01, chosen_inline_result SEC-02 |
| `test_recent_and_suggestions.py` | 4 testes: MRU/deduplicação, auto-exclusão, GroupActivityMiddleware, display_name |

### 9.2. Pipelines CI/CD

| Etapa | Ação |
|---|---|
| **test-and-lint** | Ruff lint → Mypy type check → Pytest |
| **build-and-publish** | Docker Buildx → Push para GHCR (latest + sha tag) |
| **deploy** | SSH na VM → docker compose pull → up -d → prune |
| **security-scan** (semanal) | Trivy scan na imagem (CRITICAL + HIGH) |

---

## 🌐 10. Infraestrutura como Código

### 10.1. Terraform (AWS)

| Recurso | Configuração |
|---|---|
| **Key Pair** | `fuxicobot-deployer-{env}` com chave pública do usuário |
| **Security Group** | Ingress: SSH apenas de IPs autorizados; Egress: total |
| **AMI** | Ubuntu 24.04 LTS (noble) |
| **Instância** | t3.micro (ou configurável), disco gp3 criptografado de 20GB |

### 10.2. Ansible (3 Roles)

| Role | Função |
|---|---|
| **hardening** | UFW, Fail2ban, unattended-upgrades, usuário deployer |
| **docker** | Instala Docker CE + Compose plugin, configura rotação de logs |
| **fuxicobot** | Gera `.env` (modo 0600) e `docker-compose.yml` a partir de templates, faz pull e up |

---

## ⚙️ 11. Configuração (Settings — Pydantic)

| Variável | Padrão | Intervalo | Descrição |
|---|---|---|---|
| `BOT_TOKEN` | `mock_token_for_testing` | — | Token do bot Telegram |
| `BOT_USERNAME` | `fuxicobot` | — | Username do bot |
| `SECRET_KEY` | `default_insecure_...` | — | Chave mestra de criptografia |
| `SECRET_TTL_SECONDS` | `86400` | 60–2592000 (30 dias) | TTL dos segredos |
| `REDIS_URL` | `None` | — | URL Redis (opcional) |
| `DATABASE_URL` | `sqlite+aiosqlite:///...` | — | URL banco de auditoria |
| `ENVIRONMENT` | `development` | development/staging/production | Ambiente |
| `LOG_LEVEL` | `INFO` | DEBUG/INFO/WARNING/ERROR/CRITICAL | Nível de log |
| `LOG_FORMAT` | `json` | json/text | Formato de log |
| `LOG_DIR` | `./logs` | — | Diretório de logs |
| `LOG_MAX_BYTES` | `10_485_760` | ≥ 1MB | Tamanho máximo por arquivo |
| `LOG_BACKUP_COUNT` | `5` | ≥ 1 | Backups de log |
| `MONITOR_BOT_TOKEN` | `None` | — | Token do Monitor Bot |
| `MONITOR_CHAT_ID` | `None` | ≥ 1 | Chat ID do Monitor |
| `TELEGRAM_LOG_LEVEL` | `ERROR` | DEBUG/INFO/WARNING/ERROR/CRITICAL | Threshold para notificações |
| `SUPER_ADMIN_IDS` | `""` | CSV de ints | Admin fallback |
| `ALERT_THROTTLE_SECONDS` | `10` | ≥ 1 | Anti-spam de alertas |
| `RATE_LIMIT_MAX_REQUESTS` | `10` | ≥ 1 | Máx requisições/janela |
| `RATE_LIMIT_WINDOW_SECONDS` | `5` | ≥ 1 | Janela de rate limit |

---

## ✅ 12. Pontos Fortes e Diferenciais

1. **Zero `print()` statements**: todo logging é estruturado via structlog (JSON)
2. **Zero vazamento de conteúdo**: auditoria armazena apenas hash do secret_id
3. **Rascunhos efêmeros SEC-02**: elimina amplificação de escrita no inline mode
4. **Memory leak prevention SEC-03**: LRU bounded dictionary com auto-pruning
5. **Audit debouncer SEC-04**: protege SQLite contra saturação de I/O
6. **Defense in depth**: criptografia + autorização + rate limiting + hardening + non-root
7. **LGPD-ready**: dados minimizados, anonimizados, com expiração automática
8. **Multi-idioma nativo**: PT/EN/ES com fallback inteligente
9. **DevSecOps completo**: CI/CD, IaC, security scanning, multi-stage Docker
10. **Código 100% assíncrono**: desde o banco até o bot, tudo async/await

---

## ⚠️ 13. Observações e Potenciais Melhorias

- **Testes de integração com Redis real**: atualmente apenas memória mockada
- **Monitoramento e métricas**: poderia adicionar Prometheus + exportador
- **Logs centralizados**: sugerir integração com Loki/ELK para ambiente de produção
- **Criptografia pós-quântica**: para futuro, considerar algoritmos resistentes a quantum
- **Testes de carga**: avaliar comportamento do throttling sob alta concorrência
- **Gestão de segredos**: Ansible vault ou HashiCorp Vault para secrets em produção
- **WAF/Cloudflare**: proteção adicional contra DDoS na API do Telegram não é aplicável diretamente, mas poderia considerar proxy

---

## 📊 14. Conclusão

O **fuxicobot** é um exemplo maduro e profissional de **bot Telegram com arquitetura de software em camadas**, seguindo **boas práticas de DevSecOps**, **design patterns modernos** e **princípios de segurança por design**. A combinação de criptografia simétrica autenticada, TTL configurável, auditoria persistente com hash anônimo, rate limiting com debounce, e infraestrutura completa como código (Terraform + Ansible + Docker + CI/CD) o coloca em um patamar **muito acima do typical Telegram bot tutorial**.

O projeto demonstra preocupações reais de produção: **privacidade de dados (LGPD)**, **proteção contra ataques (XSS, flooding, memory leak, força bruta)**, **observabilidade (logging estruturado)** e **manutenibilidade (tipagem estática, testes abrangentes, clean architecture)**.