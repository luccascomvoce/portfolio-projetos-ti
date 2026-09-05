---

# 📘 Estudo de Caso Completo e Atualizado: **Quantoebot** — Bot de Calculadora Inline para Telegram

**Versão:** `2.0.0` | **Commits analisados:** `ac46a6c` (HEAD) + `341d128` | **Branch:** `main`

---

## 1. Sumário Executivo

O **Quantoebot** é um bot Telegram para cálculos matemáticos **inline** que opera 100% no modo inline do Telegram — o usuário digita `@bot 2+2` em **qualquer chat** e obtém o resultado instantaneamente, sem sair da conversa. 

O projeto passou por duas correções significativas desde a análise anterior:

| Commit | Descrição |
|---|---|
| `341d128` | **Refatoração do subsistema de configurações**: substituição das funções `_env()` avulsas por uma classe `Settings` tipada com `pydantic-settings` + validadores |
| `ac46a6c` | **Rate Limiting**: implementação de algoritmo de *Sliding Window* em memória com *bounded cache* e middleware de *silent drop* para proteção contra flood/DoS |

---

## 2. Stack Tecnológico

| Componente | Tecnologia | Versão | Papel |
|---|---|---|---|
| **Linguagem** | Python | ≥ 3.12 | Runtime |
| **Bot Framework** | aiogram | ≥ 3.15, < 4 | Telegram Bot API assíncrona |
| **Validação de Config** | pydantic-settings | ≥ 2.0 | `BaseSettings` com validadores e coerção de tipos |
| **Validação de Dados** | Pydantic | ≥ 2.0 | Schemas e validação |
| **Web Server** | FastAPI | ≥ 0.115 | Healthcheck endpoint |
| **ASGI Server** | Uvicorn | ≥ 0.30 | Servidor HTTP assíncrono |
| **.env Loader** | python-dotenv | ≥ 1.0 | Carregamento de variáveis de ambiente |
| **Linter** | Ruff | ≥ 0.8 | `flake8`+`isort`+`black` em Rust |
| **Testes** | pytest + pytest-asyncio | ≥ 8.0 | Framework de testes |
| **Cobertura** | pytest-cov | ≥ 6.0 | Relatório de cobertura |
| **Containerização** | Docker (multi-stage) | — | Build e runtime |
| **IaC** | Terraform (OCI) | ≥ 1.5 | Provisionamento Oracle Cloud |
| **Config Management** | Ansible | — | Deploy automatizado |

### 2.1 Bibliotecas Exclusivas do Projeto (sem contar stdlib)

```
aiogram, pydantic, pydantic-settings, python-dotenv, fastapi, uvicorn
```

Todo o motor de cálculo usa **apenas `decimal.Decimal` e `math.factorial` da stdlib** — zero dependências externas para matemática.

---

## 3. Arquitetura do Sistema

### 3.1 Estrutura de Diretórios (Atualizada)

```
quantoebot/
├── src/
│   ├── __init__.py
│   ├── config.py              # ★ REFATORADO: Settings com pydantic-settings
│   ├── main.py                # Entry point (agora com RateLimitMiddleware)
│   ├── bot/
│   │   ├── handlers/
│   │   │   ├── commands.py    # /start, /help
│   │   │   └── inline.py      # Handler inline (@bot expressão)
│   │   ├── keyboards.py       # Teclados inline
│   │   ├── thumbnails.py      # Thumbnails com fallback em cadeia
│   │   └── middlewares/
│   │       ├── logging_middleware.py      # Trace ID + timing
│   │       └── rate_limit_middleware.py   # ★ NOVO: Rate Limiting Sliding Window
│   ├── calculator/
│   │   ├── parser.py          # Tokenização + Shunting-yard → RPN
│   │   ├── evaluator.py       # Avaliador RPN com Decimal
│   │   ├── validator.py       # Validação sintática
│   │   ├── formatter.py       # Formatação vertical ("conta armada")
│   │   └── percent.py         # Desambiguação % (módulo vs. porcentagem)
│   ├── monitoring/
│   │   ├── logger.py          # Logger estruturado JSON + throttle
│   │   └── admin_notifier.py  # Notificação: Monitor Bot → Bot → fallback
│   └── web/
│       └── healthcheck.py     # FastAPI: /health e /
├── tests/
│   ├── test_config.py         # ★ NOVO: 127 linhas, validação do Settings
│   ├── test_rate_limit.py     # ★ NOVO: 232 linhas, testes exaustivos do limiter
│   ├── test_calculator_reliability.py
│   ├── test_evaluator.py / test_parser.py / test_validator.py
│   ├── test_formatter.py / test_inline.py / test_thumbnails.py
│   ├── test_percent.py / test_factorial.py / test_power_root.py
│   └── conftest.py
├── terraform/                 # IaC OCI Always Free
├── ansible/                   # Playbook Ansible
├── Dockerfile + docker-compose.yml
├── pyproject.toml
└── .env.example               # ★ ATUALIZADO: inclui rate limit settings
```

---

## 4. Principais Correções (Análise Detalhada)

### 4.1 Refatoração do Subsistema de Configurações (`341d128`)

#### 🔴 Antes (ad-hoc com funções soltas):

```python
# config.py — versão anterior
import os
from dotenv import load_dotenv

load_dotenv()

def _env(key: str, default: str = "") -> str:
    return os.getenv(key, default).strip()

def _env_int(key: str, default: int = 0) -> int:
    val = _env(key)
    return int(val) if val else default

def _env_ints(key: str, default: str = "") -> list[int]:
    raw = _env(key, default)
    return [int(x.strip()) for x in raw.split(",") if x.strip()] if raw else []
```

**Problemas:**
- Sem validação de tipos em tempo de carregamento
- `SUPER_ADMIN_IDS="abc"` silenciosamente viraria `ValueError` em runtime
- Sem defaults tipados claros
- Sem documentação inline
- Sem suporte a hierarquia de fontes (variável de ambiente > .env > default)

#### 🟢 Depois (classe Pydantic com validadores):

```python
# config.py — versão atual
from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    BOT_TOKEN: str = Field(default="", description="Token do bot Telegram principal")
    BOT_NAME: str = Field(default="Bot", description="Nome de exibição do bot")
    SUPER_ADMIN_IDS: list[int] = Field(default_factory=list, ...)
    RATE_LIMIT_ENABLED: bool = Field(default=True, ...)
    RATE_LIMIT_MAX_REQUESTS: int = Field(default=15, ge=1, ...)
    # ... +15 campos com validadores e properties

settings = Settings()  # singleton
```

**Benefícios conquistados:**
- ✅ Validação automática na inicialização (antes o erro aparecia apenas em runtime)
- ✅ Coerção de tipos: `"123"` → `123`, `"[1,2,3]"` → `[1,2,3]`, `""` → `None`
- ✅ Hierarquia de fontes: env vars > `.env` > defaults
- ✅ Propriedades derivadas: `TELEGRAM_LOG_LEVEL_NUM`, `LOG_LEVEL_NUM`
- ✅ String stripping automático via `field_validator`
- ✅ Testabilidade: `Settings(_env_file=None, ...)` para criar instâncias isoladas
- ✅ 127 linhas de teste dedicadas (`test_config.py`)

#### Validadors e Transformações

| Validador | Campos | Comportamento |
|---|---|---|
| `_strip_string` | `BOT_TOKEN`, `BOT_NAME`, `BOT_USERNAME`, `SERVICE_NAME`, `APP_VERSION`, `QUICKCHART_*` | Remove espaços nas bordas |
| `_empty_str_to_none_str` | `MONITOR_BOT_TOKEN` | `""` → `None` |
| `_parse_monitor_chat_id` | `MONITOR_CHAT_ID` | `""` → `None`; string → int |
| `_parse_super_admin_ids` | `SUPER_ADMIN_IDS` | Suporta CSV, JSON, lista, vazio |
| `_upper_log_level` | `TELEGRAM_LOG_LEVEL`, `LOG_LEVEL` | `"warning"` → `"WARNING"` |
| `_resolve_service_name` | `SERVICE_NAME` | Fallback para `BOT_USERNAME` → `"bot"` |

### 4.2 Rate Limiting — Sliding Window (`ac46a6c`)

#### Algoritmo: Sliding Window com Bounded Cache

```python
class SlidingWindowLimiter:
    def __init__(self, max_requests=15, window_seconds=10.0, max_users=10000, ...):
        self._user_requests: dict[int, deque[float]] = {}

    def is_allowed(self, user_id: int) -> bool:
        now = time.monotonic()
        cutoff = now - self.window_seconds
        
        dq = self._user_requests.get(user_id)
        if dq is not None:
            while dq and dq[0] <= cutoff:
                dq.popleft()           # Expurga timestamps expirados
        else:
            # Evicção se cache estiver cheio
            if len(self._user_requests) >= self.max_users:
                self._evict_stale(now)  # Limpa inativos primeiro
                if len(self._user_requests) >= self.max_users:
                    oldest = next(iter(self._user_requests))
                    del self._user_requests[oldest]  # Força evicção LRU-like
            self._user_requests[user_id] = deque()
        
        if len(dq) < self.max_requests:
            dq.append(now)
            return True
        return False
```

**Características do algoritmo:**

| Propriedade | Detalhe |
|---|---|
| **Precisão** | Janela deslizante contínua (não buckets fixos) |
| **Memória** | `O(n)` onde n = número de usuários ativos na janela |
| **Teto** | `max_users = 10.000` (cache limitado) |
| **Evicção** | Duas camadas: (1) purge de inativos, (2) LRU-like se ainda cheio |
| **Bypass** | Admins (`SUPER_ADMIN_IDS`) não têm limite |
| **Desligamento** | `enabled=False` desativa completamente |
| **Reset** | `limiter.reset()` limpa todo o cache |

#### Middleware: Silent Drop

```python
class RateLimitMiddleware(BaseMiddleware):
    async def __call__(self, handler, event, data):
        user_id = _extract_user_id(event)
        if user_id is not None and not self.limiter.is_allowed(user_id):
            log.debug("Rate limit excedido para user_id=%s — silent drop", user_id)
            return None  # ← Não chama o handler, não responde ao usuário
        return await handler(event, data)
```

**Decisão arquitetural — Silent Drop vs. Error Response:**
- **Silent Drop** → o bot simplesmente ignora a requisição. O Telegram não recebe resposta, e o usuário vê um "loading" que nunca completa.
- **Vantagem:** não revela a existência do rate limit (segurança) e não gera tráfego extra de resposta.
- **Trade-off:** usuário legítimo não recebe feedback — mas como o limite é 15 requisições em 10 segundos, é um cenário improvável.

#### Extração Robusta de User ID

```python
def _extract_user_id(event: TelegramObject) -> int | None:
    from_user = getattr(event, "from_user", None)
    if from_user is not None: return from_user.id
    
    inner_event = getattr(event, "event", None)       # Update → InlineQuery
    if inner_event is not None: ...
    
    event_type = getattr(event, "event_type", None)    # fallback profundo
    if event_type:
        typed_event = getattr(event, event_type, None)  # Update.inline_query
        if typed_event is not None: ...
    
    return None  # Sem usuário identificável
```

A função lida com a estrutura complexa de eventos do aiogram: `Update` encapsula `InlineQuery`/`Message`, que por sua vez têm `from_user`. A extração em 3 níveis garante cobertura para qualquer tipo de atualização.

#### Configurações de Rate Limiting

| Variável | Default | Descrição |
|---|---|---|
| `RATE_LIMIT_ENABLED` | `true` | Liga/desliga o rate limiting |
| `RATE_LIMIT_MAX_REQUESTS` | 15 | Máx. requisições por janela |
| `RATE_LIMIT_WINDOW_SECONDS` | 10.0 | Tamanho da janela deslizante (s) |
| `RATE_LIMIT_MAX_USERS` | 10000 | Teto do cache em memória |

---

## 5. Pipeline de Cálculo (Fluxo Completo Atual)

```
@bot 25 * 4
   │
   ▼
[1] _normalize_query_text()
    ├── sqrt(...) → √(...), cbrt(...) → ∛(...), raiz(...) → √(...)
    ├── ** → ^
    └── 2² → 2^2, 2¹⁰ → 2^(10), 10⁻³ → 10^(-3), (2+3)² → (2+3)^2
   │
   ▼
[2] _validate_query_chars()
    └── Rejeita qualquer caractere fora de _ALLOWED_QUERY_CHARS
   │
   ▼
[3] _tokenize_detailed()
    ├── Regex tokenizer
    ├── parse_number(): normaliza 1.234,56 → 1234.56
    └── Detecta convenção (decimal, milhar) do primeiro número
   │
   ▼
[4] _parse_tokens()
    ├── Multiplicação implícita: 2(3+4) → 2*(3+4), 2√4 → 2*√4
    ├── Unários: 5--2 → 5+2, -3! → 0-(3!), -2^2 → 0-2^2
    └── Descarte de + unário: +5 → 5
   │
   ▼
[5] desugar_percent()
    ├── Constrói AST de precedência
    ├── Regra humana: a ± X% = a ± a*(X/100)
    ├── a * X% = a*(X/100), a / X% = a/(X/100)
    └── Módulo: 15%2 inalterado
   │
   ▼
[6] validate_expression()
    ├── Parênteses balanceados e não vazios
    ├── Operadores em posições válidas
    ├── ! após número ou )
    ├── Dois operandos/operadores seguidos
    └── Caracteres permitidos
   │
   ▼
[7] infix_to_rpn() — Shunting-yard
    ├── Precedência de operadores (^=3, √∛∜=4)
    ├── Associatividade à direita (^, √, ∛, ∜)
    └── ! tratado como pós-fixo
   │
   ▼
[8] evaluate_rpn() — Decimal
    ├── Pilha de Decimal
    ├── + - * / % ^ √ ∛ ∜ !
    ├── Limites: fatorial ≤ 1000, expoente ≤ 10000
    └── Proteções: divisão por zero, raiz par de negativo, base negativa ^ fracionário
   │
   ▼
[9] format_number()
    └── Agrupamento de milhar + separador decimal (convenção detectada)
   │
   ▼
[10] Resposta (3 artigos inline):
     ├── Cálculo completo (HTML <pre><code class="language-latex">)
     ├── Apenas resultado
     └── Conta armada (formatação vertical)
```

---

## 6. Sistema de Thumbnails — Fallback em Cadeia

### 6.1 Arquitetura de Provedores

```
monitor_loop() (a cada 60s)
  └── _refresh()
       ├── QuickChart Self-hosted? (QUICKCHART_PUBLIC_URL definida?)
       │    └── HTTP GET /healthcheck → {"success": true}
       ├── QuickChart API pública?
       │    └── https://quickchart.io/healthcheck
       ├── placehold.co?
       │    └── https://placehold.co/10x10/png (check image/ content-type)
       └── Nenhum → _active_provider = None
```

Cada provedor é modelado como um `_Provider` dataclass imutável:

```python
@dataclass(frozen=True)
class _Provider:
    name: str
    check: Callable[[], Awaitable[bool]]
    build_url: Callable[[str], str]
```

### 6.2 Renderização de Imagens

Usa **Chart.js** via QuickChart para gerar imagens 512×512:

```python
font_size = max(28, min(220, int((THUMB_SIZE * 0.9) / (len(text) * 0.55))))
padding_top = max(0, int((THUMB_SIZE - font_size * 1.4) / 2))
```

A thumbnail mostra o resultado em fundo escuro (`#1c1c1e`) com texto branco, tamanho adaptativo.

---

## 7. Motor Matemático — Estratégias

### 7.1 Precisão Decimal (28 dígitos)

| Operação | Comportamento |
|---|---|
| Adição/Subtração | Exata (Decimal) |
| Multiplicação/Divisão | Arredondamento ROUND_HALF_EVEN em 28 dígitos |
| Fatorial | Exato via `math.factorial()` (inteiro) |
| Potência inteira | Exata dentro dos limites |
| Potência fracionária | Aproximada via `Decimal.__pow__` |
| Raiz quadrada | `a.sqrt()` (algoritmo de Newton-Raphson em C) |

### 7.2 Tabela de Precedência e Associatividade

| Operadores | Prec. | Assoc. | Exemplo |
|---|---|---|---|
| `+` `-` | 1 | Esquerda | `2+3+4` = `(2+3)+4` |
| `*` `/` `%` | 2 | Esquerda | `2*3/4` = `(2*3)/4` |
| `^` | 3 | **Direita** | `2^3^2` = `2^(3^2)` = 512 |
| `√` `∛` `∜` | 4 | **Direita** | `√√16` = `√(√16)` = 2 |

### 7.3 Porcentagem — Regra Humana (AST)

Operador `%` é **sobrecarregado**:

| Contexto | Exemplo | Resultado | Regra |
|---|---|---|---|
| Módulo (operando à direita) | `15%2` | `1` | `15 mod 2` |
| Porcentagem pura | `10%` | `0,1` | `10/100` |
| `a + X%` | `100+10%` | `110` | `a + a*(X/100)` |
| `a - X%` | `100-10%` | `90` | `a - a*(X/100)` |
| `a * X%` | `100*10%` | `10` | `a*(X/100)` |
| `a / X%` | `100/10%` | `1000` | `a/(X/100)` |

### 7.4 Potenciação — Três Formas

1. **Circunflexo:** `2^3`, `(2+3)^2`
2. **Python `**`:** `2**3`
3. **Sobrescritos Unicode:** `2²`, `3³`, `2¹⁰`, `10⁻³`, `(2+3)²`

Mapeamento Unicode completo (14 caracteres):

```
⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁽⁾ → 0 1 2 3 4 5 6 7 8 9 + - ( )
```

### 7.5 Fatorial — Precedência Correta

```python
-3! → 0-(3!) = -6    # Fatorial calculado ANTES da negação
3!! → Erro            # Fatorial duplo rejeitado
(2+3)! → 120          # Parênteses preservam precedência
```

### 7.6 Proteções e Limites

| Limite | Valor | Mensagem de Erro |
|---|---|---|
| Fatorial máximo | 1000 | `"Fatorial muito grande (máximo: 1000)."` |
| Expoente máximo | ±10000 | `"Expoente muito grande (máximo: 10000)."` |
| Divisão por zero | — | `"Divisão por zero não é permitida."` |
| Raiz par de negativo | — | `"Raiz quadrada [...] não é permitida."` |
| Base negativa ^ fracionário | — | `"[...] não é um número real."` |
| Precisão | 28 dígitos sig. | Documentado, não bloqueado |

---

## 8. Sistema de Monitoramento e Notificações

### 8.1 Logger Estruturado (StructuredLogger)

```python
class StructuredLogger(logging.Logger):
    def _log(self, level, msg, args, extra=None, ...):
        super()._log(...)  # Log normal em JSON lines
        
        if level >= TELEGRAM_LOG_LEVEL_NUM:
            # Throttle: máximo 1 alerta a cada ALERT_THROTTLE_SECONDS
            if time.monotonic() - _throttle_cache.get(event_type, 0) >= ALERT_THROTTLE_SECONDS:
                _throttle_cache[event_type] = now
                _error_notify_callback(...)  # → admin_notifier
```

### 8.2 Cadeia de Notificação (Fallback)

```
StructuredLogger._log()
  └── _notify_callback_sync()
       └── loop.create_task(notify_admin())
            ├── Monitor Bot configurado?  → MONITOR_CHAT_ID
            ├── Senão, Bot Principal?     → SUPER_ADMIN_IDS
            └── Nenhum canal?             → log.debug() silencioso
```

### 8.3 Formatação de Alertas HTML

```
🔴 [ERROR] RATE_LIMIT_EXCEEDED
<b>Service:</b> meubot
<b>Trace:</b> <code>a1b2c3d4</code>
<b>User:</b> 123456789
<b>Context:</b> elapsed_ms=0.5

<i>Rate limit excedido para user_id=123456789</i>
```

Emojis por nível: `DEBUG` ⚪, `INFO` 🔵, `WARNING` 🟡, `ERROR` 🔴, `CRITICAL` 💀

---

## 9. Middleware Pipeline

### 9.1 Ordem de Execução

```
Update recebido do Telegram
  │
  ├── [1] LoggingMiddleware (UPDATE_RECEIVED → trace_id)
  │
  ├── [2] Dispatcher → roteamento
  │    │
  │    ├── inline_query.outer_middleware → RateLimitMiddleware ← ★ NOVO
  │    │    └── Silent Drop se excedido, senão passa
  │    │
  │    └── message.outer_middleware → RateLimitMiddleware ← ★ NOVO
  │         └── Silent Drop se excedido, senão passa
  │
  ├── Handler (inline_calculator ou cmd_start)
  │
  └── LoggingMiddleware (UPDATE_PROCESSED ou UPDATE_ERROR + elapsed)
```

### 9.2 Configuração no main.py

```python
rate_limiter = RateLimitMiddleware()
dp.inline_query.outer_middleware(rate_limiter)
dp.message.outer_middleware(rate_limiter)
dp.update.middleware(LoggingMiddleware())
```

---

## 10. Validação de Expressões (validator.py)

### 10.1 Regras de Validação

| Regra | Exemplo Inválido | Mensagem |
|---|---|---|
| Expressão vazia | `""` | `"não pode ser vazia"` |
| Parênteses desbalanceados | `(2+3` | `"parênteses '(' e ')' não corresponde"` |
| Parênteses vazios | `()` | `"não são permitidos"` |
| Operador antes de `)` | `(2+)` | `"Operador inválido '+' antes de ')'"` |
| `!` no início | `!5` | `"não pode iniciar"` |
| `!` após operador | `5+!` | `"deve vir após um número ou ')'"` |
| Número termina com separador | `2,` | `"terminar com separador decimal"` |
| Expressão começa com `*/%^` | `*2` | `"não pode começar com '*'"` |
| Expressão termina com operador | `2+` | `"não pode terminar com um operador"` |
| Dois operandos seguidos | `2 3` | `"Dois operandos seguidos sem operador"` |
| Dois operadores seguidos | `2++3` | `"Dois operadores seguidos: '+' e '+'."` |
| Operador após raiz | `√*4` | `"Operador inválido '*' após '√'."` |
| Caractere inválido | `2a3` | `"Caractere inválido na expressão"` |

---

## 11. Testes — Cobertura Atualizada

### 11.1 Arquivos de Teste

| Arquivo | Linhas | Escopo |
|---|---|---|
| `test_config.py` | **127** ★ NOVO | Settings: defaults, parsing, validação, singleton |
| `test_rate_limit.py` | **232** ★ NOVO | SlidingWindowLimiter, _extract_user_id, middleware, config |
| `test_calculator_reliability.py` | ~200 | Pipeline completo, precisão, sintaxe |
| `test_evaluator.py` | ~100 | Avaliador RPN puro |
| `test_parser.py` | ~130 | Tokenização, parse_number, infix_to_rpn |
| `test_validator.py` | ~100 | Validação sintática |
| `test_formatter.py` | ~100 | Formatação vertical |
| `test_percent.py` | ~100 | Módulo e porcentagem |
| `test_factorial.py` | ~70 | Fatorial |
| `test_power_root.py` | ~180 | Potência, sobrescritos, radiciação |
| `test_inline.py` | ~130 | Handler inline mockado |
| `test_thumbnails.py` | ~80 | Provedores, URLs, seleção |

### 11.2 Testes Destacados do Rate Limiting

| Teste | O que verifica |
|---|---|
| `test_allows_requests_under_limit` | Requisições abaixo do limite passam |
| `test_blocks_request_exceeding_limit` | Requisição extra é bloqueada |
| `test_different_users_have_independent_quotas` | Cotas independentes por user_id |
| `test_sliding_window_recovery_after_time_elapsed` | Recuperação após expiração da janela |
| `test_partial_window_slide` | Expiração parcial (apenas timestamps antigos) |
| `test_super_admin_bypass` | Admin não sofre rate limit |
| `test_disabled_limiter_allows_all` | Desligado = tudo permitido |
| `test_bounded_cache_evicts_oldest` | Evicção LRU quando cache atinge teto |
| `test_reset_clears_all_history` | Reset limpa estado |
| `test_middleware_silent_drops_when_rate_limited` | Silent Drop não chama handler |
| `test_middleware_passes_when_no_user_identified` | Eventos sem user_id passam |

### 11.3 Testes do Config

| Teste | O que verifica |
|---|---|
| `test_default_values` | Todos os defaults estão corretos |
| `test_env_overrides` | Sobrescrita via kwargs funciona |
| `test_super_admin_ids_formats` | CSV, JSON, lista, vazio |
| `test_service_name_fallback` | `SERVICE_NAME` → `BOT_USERNAME` → `"bot"` |
| `test_empty_strings_normalization` | `""` → `None`, stripping |
| `test_monitor_chat_id_parsing` | Strings positivas e negativas |
| `test_log_level_properties` | `TELEGRAM_LOG_LEVEL_NUM` numérico |
| `test_invalid_log_level_raises` | `ValidationError` em valor inválido |
| `test_invalid_port_raises` | Porta 0, 70000, string |

---

## 12. Segurança — Camadas de Proteção

### 12.1 Análise de Superfície de Ataque

| Ameaça | Mitigação |
|---|---|
| **Injeção de código** | `eval()`/`exec()` jamais usado; pipeline puramente baseado em `Decimal` |
| **Flood/DoS** | ★ NOVO: `SlidingWindowLimiter` com silent drop (15 req/10s por user) |
| **Memory DoS** | Bounded cache de 10.000 usuários com evicção LRU |
| **Caracteres maliciosos** | `frozenset` de caracteres permitidos rejeita qualquer entrada inválida |
| **Secrets no código** | 100% via `.env` (nunca commitado) + `mode 0600` no Ansible |
| **Overflow computacional** | Limites de fatorial (1000) e expoente (10000) |
| **Exceções vazando** | Todo `ValueError` é capturado e retornado como mensagem amigável |
| **Admin bypass** | `SUPER_ADMIN_IDS` ignoram rate limit |

### 12.2 Segurança Docker

- Usuário `botuser` não-root
- Imagem multi-stage (apenas runtime, sem build tools)
- Healthcheck via `curl` (não expõe shell)
- Logs com rotação (`max-size=10m`, `max-file=3`)

---

## 13. Configurações — Catálogo Completo

### 13.1 Variáveis de Ambiente

| Variável | Tipo | Default | Obrigatório | Descrição |
|---|---|---|---|---|
| **BOT_TOKEN** | `str` | `""` | ✅ | Token do bot Telegram |
| **BOT_NAME** | `str` | `"Bot"` | ❌ | Nome de exibição |
| **BOT_USERNAME** | `str` | `""` | ❌ | Username sem @ |
| **SERVICE_NAME** | `str` | `BOT_USERNAME` ou `"bot"` | ❌ | Slug do serviço |
| **APP_VERSION** | `str` | `"2.0.0"` | ❌ | Versão |
| **SUPER_ADMIN_IDS** | `list[int]` | `[]` | ❌ | Admins (bypass rate limit) |
| **MONITOR_BOT_TOKEN** | `str\|None` | `None` | ❌ | Token do monitor bot |
| **MONITOR_CHAT_ID** | `int\|None` | `None` | ❌ | Chat de alertas |
| **LOG_LEVEL** | `enum` | `"INFO"` | ❌ | Nível de log |
| **TELEGRAM_LOG_LEVEL** | `enum` | `"ERROR"` | ❌ | Mínimo para notificar |
| **ALERT_THROTTLE_SECONDS** | `int` | `10` | ❌ | Anti-spam de alertas |
| **HEALTHCHECK_PORT** | `int` | `8080` | ❌ | Porta do healthcheck |
| **RATE_LIMIT_ENABLED** | `bool` | `true` | ❌ | ★ NOVO |
| **RATE_LIMIT_MAX_REQUESTS** | `int` | `15` | ❌ | ★ NOVO |
| **RATE_LIMIT_WINDOW_SECONDS** | `float` | `10.0` | ❌ | ★ NOVO |
| **RATE_LIMIT_MAX_USERS** | `int` | `10000` | ❌ | ★ NOVO |
| **QUICKCHART_PUBLIC_URL** | `str` | `""` | ❌ | URL pública do QuickChart |
| **QUICKCHART_INTERNAL_URL** | `str` | `"http://quickchart:3400"` | ❌ | URL interna para probe |
| **THUMBNAIL_HEALTHCHECK_INTERVAL** | `int` | `60` | ❌ | Intervalo de checagem |
| **THUMBNAIL_PROBE_TIMEOUT** | `float` | `2.0` | ❌ | Timeout do probe |

---

## 14. Infraestrutura

### 14.1 Docker Multi-Stage

```
Stage 1: ghcr.io/astral-sh/uv:python3.12-bookworm-slim
  └── uv sync --frozen --no-dev --no-install-project → .venv/

Stage 2: python:3.12-slim-bookworm
  ├── COPY --from=builder /app/.venv
  ├── COPY src/ + pyproject.toml
  ├── curl (para HEALTHCHECK)
  ├── USER botuser
  └── CMD ["python", "-m", "src.main"]
```

### 14.2 Docker Compose

```yaml
services:
  bot:
    build: .
    restart: unless-stopped
    environment:
      - RATE_LIMIT_ENABLED=true      # ← NOVO
      - RATE_LIMIT_MAX_REQUESTS=15   # ← NOVO
    ports: ["8080:8080"]
    volumes: ["./logs:/app/logs"]

  quickchart:    # Opcional
    image: ianw/quickchart:v1.8.1
```

### 14.3 Pipeline de Deploy (Ansible)

```
1. Instala dependências (apt-transport-https, curl, git, Docker)
2. Adiciona repositório Docker + instala docker-ce + docker-compose-plugin
3. Cria /opt/{app_name}
4. Copia arquivos do projeto
5. Gera .env via template Jinja2 (credenciais do Ansible Vault)
6. docker compose up --build
7. Verifica status via docker compose ps
```

### 14.4 Terraform (OCI Always Free)

```
Região: sa-saopaulo-1 (padrão)
Shape: VM.Standard.E2.1.Micro (1 OCPU, 1 GB RAM)
VCN: 10.0.0.0/16
Subnet: 10.0.1.0/24
Security List: SSH (22) + Healthcheck (8080)
Bootstap: Docker + uv
```

---

## 15. Padrões de Design no Código

| Padrão | Localização | Descrição |
|---|---|---|
| **Singleton** | `config.settings` | Instância global única de `Settings` |
| **Strategy** | `thumbnails._Provider` | Algoritmo de geração de URL encapsulado por provedor |
| **Chain of Responsibility** | `thumbnails._refresh()` | Cadeia de provedores: self-host → API → placehold → None |
| **Pipeline** | Fluxo de cálculo | Etapas sequenciais: tokenize → parse → desugar → validate → RPN → evaluate → format |
| **AST com Visitor** | `percent._Parser` + `_flatten()` | Árvore sintática com achatamento |
| **Middleware** | `LoggingMiddleware` + `RateLimitMiddleware` | Interceptação de eventos do aiogram |
| **Callback Registration** | `logger.set_notify_callback()` + `admin_notifier` | Injeção de dependência para notificação |
| **Sliding Window** | `SlidingWindowLimiter` | Algoritmo de rate limiting contínuo |
| **Bounded Cache** | `SlidingWindowLimiter._user_requests` | Cache com teto e evicção LRU |
| **Multi-stage Build** | `Dockerfile` | Separação de build e runtime |
| **IaC** | Terraform + Ansible | Provisionamento + configuração |

---

## 16. Métricas do Projeto

### 16.1 Métricas de Código

| Métrica | Valor |
|---|---|
| Total de arquivos fonte (src/) | 16 |
| Total de arquivos de teste | 13 (12 + conftest) |
| Linhas de código fonte | ~1.200 |
| Linhas de teste | ~1.600 |
| Dependências externas | 6 (aiogram, pydantic, pydantic-settings, dotenv, fastapi, uvicorn) |
| Commits no histórico | 9 |

### 16.2 Métricas de Cobertura de Testes

| Subsistema | Cobertura |
|---|---|
| Config (Settings) | 127 linhas, 10 testes |
| Rate Limiter | 232 linhas, ~20 testes |
| Avaliador RPN | ~100 linhas, ~25 testes |
| Parser | ~130 linhas, ~25 testes |
| Validador | ~100 linhas, ~20 testes |
| Formatador | ~100 linhas, ~15 testes |
| Porcentagem | ~100 linhas, ~35 testes |
| Fatorial | ~70 linhas, ~15 testes |
| Potência/Raiz | ~180 linhas, ~55 testes |
| Handler inline | ~130 linhas, ~5 testes |
| Thumbnails | ~80 linhas, ~10 testes |

---

## 17. Histórico de Evolução (Git)

```
ac46a6c (HEAD) fix: adiciona rate limit silencioso
341d128 fix: refatoracao do subsistema de configuracoes
074bec6 fix: melhora descricao dos resultados inline e usa formatacao como codigo
26de0c6 fix: permite calculo de expressoes curtas
1bb1381 feat: adiciona suporte a potencia e raiz
479ce3d feat: adiciona suporte a fatorial !
40c501c feat: adiciona suporta a porcentagem e resto
b23350f fix: correcoes no motor de calculos para melhorar a precisao
54a3e9a fix: atualiza o .env.example para descomentar as variaveis
```

**Trajetória clara:** base → precisão → porcentagem → fatorial → potência/raiz → expressões curtas → formatação → **config refactoring** → **rate limiting**

---

## 18. Análise Crítica Atualizada

### 18.1 O que foi resolvido nas correções

| Problema anterior | Status agora |
|---|---|
| Config ad-hoc sem validação de tipos | ✅ `pydantic-settings` com validadores |
| Sem rate limiting (DoS por usuário) | ✅ `SlidingWindowLimiter` com silent drop |
| `SUPER_ADMIN_IDS` sem parser flexível | ✅ Aceita CSV, JSON, lista, vazio |
| Sem testes de configuração | ✅ `test_config.py` (127 linhas) |
| Sem testes de rate limiting | ✅ `test_rate_limit.py` (232 linhas) |
| `.env.example` incompleto | ✅ Agora documenta todas as 20+ variáveis |

### 18.2 Oportunidades de melhoria remanescentes

1. **Cache de resultados**: expressões idênticas poderiam ser cacheadas em memória (LRU cache) para evitar recomputação — especialmente fatoriais como `100!`.

2. **Métricas Prometheus**: expor contadores (`requests_total`, `rate_limited_total`, `errors_total`) em um endpoint `/metrics`.

3. **Internacionalização (i18n)**: todas as mensagens estão em português. Um sistema de locale permitiria suporte multilíngue.

4. **Modo síncrono do Healthcheck**: o Uvicorn roda em `TaskGroup` com `handle_signals=False` — se o healthcheck travar, pode afetar o polling.

5. **Testes de integração end-to-end**: todos os testes mockam o aiogram; não há testes contra uma instância real do Telegram.

6. **Documentação de arquitetura**: o README cobre funcionalidades e deploy, mas não tem diagramas de sequência ou arquiteturais.

7. **Persistência**: não há banco de dados — o rate limit e thumbnails são estado em memória que se perde no restart.

---

## 19. Conclusão

O **Quantoebot** evoluiu de um bot funcional mas com configuração frágil para um **sistema profissional** com:

- **Configuração robusta e tipada** via `pydantic-settings`, com validação em tempo de inicialização, 20+ variáveis documentadas e fallbacks inteligentes
- **Proteção contra abuso** com algoritmo de *Sliding Window* em memória, cache limitado a 10.000 usuários, silent drop e bypass para admins
- **Arquitetura modular** com 6 camadas independentes no pipeline de cálculo, 2 middlewares, sistema de notificação com fallback em 2 níveis e thumbnails com fallback em 3 provedores
- **Testes abrangentes** com 13 arquivos de teste cobrindo desde a validacão de configuração até casos-limite de precisão matemática

O projeto demonstra **maturidade de engenharia**: trata edge cases (separadores numéricos ambíguos, precedência de operadores, porcentagem com regra humana), implementa segurança em profundidade (sanitização multi-camada, silent drop, limites computacionais) e segue boas práticas de DevOps (Docker multi-stage, Terraform, Ansible, logs estruturados JSON).

---

> **Este estudo de caso foi gerado automaticamente com base na análise exaustiva de todos os arquivos-fonte do repositório `calcubobot` (branch `main`, commits `341d128` e `ac46a6c`).**