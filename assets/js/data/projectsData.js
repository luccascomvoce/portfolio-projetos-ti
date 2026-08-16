/**
 * Projects Dataset — Portfólio de Tecnologia Luccas
 * Rich metadata, categorization and case study contents
 */

export const PROJECTS_DATA = [
  {
    id: "engenharia-reversa",
    title: "Engenharia Reversa, Remoção de Adware & Modificação de UI em App Android IoT",
    category: "re",
    categoryLabel: "Engenharia Reversa",
    status: "Concluído & Auditado",
    highlight: true,
    summary: "Engenharia reversa em aplicativo Android IoT (V380/Cloudbirds) sob Split APKs: erradicação total de mediação de anúncios autônomos (TradPlus/Mintegral) via amputação Smali (return-void), supressão geométrica de upsell via ViewBinding (0.0dip) e fusão para APK Universal versionável.",
    tags: ["Bytecode Smali", "Apktool / JADX", "Wireless ADB", "Anti-Split APK", "ViewBinding Patch", "Uber APK Signer"],
    docPath: "docs/projetos/engenharia-reversa.md",
    metrics: [
      { label: "Supressão de Adware", value: "100% (Smali return-void)" },
      { label: "Preservação ViewBinding", value: "Refatoração 0.0dip" },
      { label: "Arquitetura", value: "Merge APK Universal" }
    ],
    overview: "Estudo de caso real de engenharia reversa em aplicativo Android IoT de monitoramento de câmeras (V380/Cloudbirds). O projeto consistiu na erradicação completa de anúncios de terceiros e ocultação de elementos intrusivos de monetização primária (upsell de nuvem), preservando a estabilidade do ViewBinding e a integridade de comunicação com os servidores de vídeo.",
    architecture: `
      <ul>
        <li><strong>Fase 1 (Bypass de Configuração):</strong> Análise de regras em <code>AppSettingSp</code> e comprovação de falha por inicialização autônoma de SDKs de mediação (TradPlus, Pangle, Mintegral, AppLovin).</li>
        <li><strong>Fase 2 (Interceptação Dinâmica via Logcat):</strong> Telemetria via Wireless ADB para isolar o handshake do <code>YdSDK</code> e mapear chamadas a <code>medproad.com</code>.</li>
        <li><strong>Fase 3 (Amputação no Smali):</strong> Esvaziamento e injeção de <code>return-void</code> nos despachantes <code>AdManager.smali</code> (<code>initAd</code> e <code>setAdConfig</code>), cessando alocação de memória e acessos de rede dos SDKs.</li>
        <li><strong>Fase 4 (Manipulação de UI Nativa & 0.0dip):</strong> Mapeamento de Hex IDs no <code>public.xml</code> e refatoração dos contêineres de ViewBinding para <code>0.0dip</code> e <code>gone</code>, prevenindo <code>NullPointerException</code> e eliminando pop-ups de upsell.</li>
        <li><strong>Fase 5 (Anti-Split & Controle de Versão):</strong> Fusão dos Split APKs (Base, ARM64, PT, XXHDPI) em APK Universal com Apktool M e versionamento Git para mapeamento contínuo de diffs.</li>
      </ul>
    `,
    techTable: [
      { category: "Descompilação & Smali", tech: "Apktool, JADX (Decompiler Java/Kotlin), VS Code" },
      { category: "Depuração & Logs", tech: "Android Debug Bridge (Wireless ADB), Logcat Filtering" },
      { category: "Assinatura & Pacotes", tech: "Uber APK Signer (V1/V2/V3), Apktool M (Merge Anti-Split)" },
      { category: "Técnicas Aplicadas", tech: "Smali return-void Hook, ViewBinding Zero-Dimension (0.0dip), Git Versioning" }
    ]
  },
  {
    id: "script-minecraft-server-java",
    title: "Automação de Servidor Minecraft Java & Telegram Cloud",
    category: "scripts",
    categoryLabel: "Scripts & OS",
    status: "Produção Ativa",
    highlight: false,
    summary: "Orquestrador em PowerShell e Python com graceful shutdown de JVM, consolidação de logs de auditoria, compactação temporal e sincronização de backups em nuvem via MTProto Telegram.",
    tags: ["PowerShell 7+", "Python Asyncio", "Telethon", "Disaster Recovery", "Win32 CLI"],
    docPath: "docs/projetos/script-minecraft-server-java.md",
    metrics: [
      { label: "Protocolo Nuvem", value: "MTProto API" },
      { label: "Shutdown", value: "Graceful JVM" },
      { label: "Ambiente", value: "Self-Bootstrapping" }
    ],
    overview: "Solução completa de orquestração para servidores dedicados Java, prevenindo perda de dados por corrupção de mundo através de rotinas automáticas de backup e sincronização offsite criptografada.",
    architecture: `
      <ul>
        <li><strong>Orquestrador PowerShell CLI:</strong> Gestão de processos do Java, consolidação de logs e compactação em arquivo ZIP com timestamp.</li>
        <li><strong>Módulo Python Telethon:</strong> Auto-criação de virtualenv e envio assíncrono do arquivo de backup para armazenamento em nuvem Telegram.</li>
        <li><strong>Disaster Recovery:</strong> Procedimento automatizado de rollback com restauração limpa do diretório de mundo.</li>
      </ul>
    `,
    techTable: [
      { category: "Linguagens", tech: "PowerShell 7+, Python 3.10+ (Asyncio)" },
      { category: "Cloud & API", tech: "Telethon (Telegram MTProto Cloud)" },
      { category: "Infraestrutura", tech: "Disaster Recovery, JVM Process Control, UTF-8 CLI" },
      { category: "Arquitetura", tech: "Self-Bootstrapping Virtualenv, Zero Dependency" }
    ]
  },
  {
    id: "pagina-loja-piscinas",
    title: "Landing Page Comercial & Showcase com Redundância Multi-Nuvem",
    category: "web",
    categoryLabel: "Web & Dashboards",
    status: "Produção Ativa",
    highlight: false,
    summary: "Plataforma web de alta performance com catálogo JSON desacoplado, fontes WOFF2 locais (Zero External Dependency) e pipeline CI/CD com failover automático Vercel + GitHub Pages.",
    tags: ["HTML5 / CSS3", "Vanilla JS", "Multi-Cloud Failover", "Vercel Edge", "SEO Técnico"],
    docPath: "docs/projetos/pagina-loja-piscinas.md",
    metrics: [
      { label: "Custo Operacional", value: "Zero (R$ 0,00)" },
      { label: "Redundância", value: "Vercel + GitHub Pages" },
      { label: "Tipografia", value: "100% WOFF2 Local" }
    ],
    overview: "Landing page e catálogo interativo de produtos com arquitetura resiliente de alta disponibilidade, zero custo operacional de hospedagem e conformidade de privacidade.",
    liveUrl: "https://splashhortolandia.vercel.app/",
    liveLabel: "Acessar o Site",
    liveType: "web",
    architecture: `
      <ul>
        <li><strong>Redundância Multi-Nuvem:</strong> Deploy automatizado via GitHub Actions simultaneamente na borda Vercel e no GitHub Pages com failover de DNS.</li>
        <li><strong>Zero Dependência Externa:</strong> Subsets WOFF2 locais eliminam chamadas de fontes de terceiros prevenindo FOIT/FOUT.</li>
        <li><strong>Data-Driven Showcase:</strong> Separação limpa entre estrutura HTML e dados de produtos em formato JSON manipulados via script Python de manutenção.</li>
      </ul>
    `,
    techTable: [
      { category: "Front-End", tech: "HTML5 Semântico, CSS3 Moderno, JavaScript ES6+" },
      { category: "Infraestrutura", tech: "Vercel Edge Network, GitHub Pages, Multi-Cloud Failover" },
      { category: "SEO & Otimização", tech: "Sitemap dinâmico, Robots.txt, WebP, Fontes WOFF2" },
      { category: "Automação", tech: "Python Script de Atualização de Catálogo" }
    ]
  },
  {
    id: "dashboard-gastos",
    title: "Pipeline de Dados, AppSheet & Dashboard Financeiro",
    category: "web",
    categoryLabel: "Web & Dashboards",
    status: "Concluído",
    highlight: false,
    summary: "Arquitetura de dados em camadas (Input > ETL > Relational Core > Output): aplicativo mobile no-code via Google AppSheet, validação estrita de domínio, segurança em nível de linha (RLS) e telemetria de limites de crédito em tempo real.",
    tags: ["Google AppSheet", "Data Pipeline (ETL)", "Row-Level Security (RLS)", "Google Sheets Relacional", "Data Validation", "Looker Studio / BI"],
    docPath: "docs/projetos/dashboard-gastos.md",
    metrics: [
      { label: "Arquitetura", value: "Pipeline em 4 Camadas" },
      { label: "Segurança de Acesso", value: "Row-Level Security (RLS)" },
      { label: "Ingestão Mobile", value: "Google AppSheet UUIDs" }
    ],
    overview: "Sistema estruturado de gestão financeira e telemetria de gastos com cartões de crédito construído sob o paradigma desacoplado de Pipeline de Dados (Input Mobile > Banco de Dados Transacional > Camada de ETL > Painel Visual de KPIs).",
    architecture: `
      <ul>
        <li><strong>1. Ingestão Mobile (Google AppSheet):</strong> Coleta transacional no smartphone no momento da compra com geração de chaves primárias (<code>ID-Transacao</code>) e validação estrita de categorias.</li>
        <li><strong>2. Camada Transacional (Raw Storage):</strong> Tabelas relacionais que armazenam os registros brutos e os parâmetros de limite de crédito por cartão.</li>
        <li><strong>3. Camada de ETL (DADOS TRATADOS):</strong> Agregação e enriquecimento automatizado via funções relacionais (<code>QUERY</code>, <code>FILTER</code>, <code>SUMIF</code>), calculando o percentual de comprometimento de limite em tempo real sem onerar a visualização.</li>
        <li><strong>4. Segurança em Nível de Linha (RLS):</strong> Filtragem dinâmica baseada no e-mail do usuário autenticado e parâmetros temporais selecionados.</li>
        <li><strong>5. Painel Executivo (DASHBOARD):</strong> Visualização interativa de KPIs com evolução de gastos, distribuição por centro de custo e saúde financeira.</li>
      </ul>
    `,
    techTable: [
      { category: "Mobile & Input", tech: "Google AppSheet (No-Code Mobile App), Data Validation Dropdowns" },
      { category: "Armazenamento & Relacional", tech: "Google Sheets Relacional, AppSheet Tables, UUID Primary Keys" },
      { category: "ETL & Processamento", tech: "Funções Relacionais (QUERY, FILTER, ARRAYFORMULA, SUMIF)" },
      { category: "Segurança & BI", tech: "Row-Level Security (RLS), Looker Studio / Dashboard de KPIs" }
    ]
  },
  {
    id: "contratos-assinaturas",
    title: "Automação de Ciclo de Vida de Contratos (CLM) & Assinatura Digital",
    category: "bots",
    categoryLabel: "Bots & Automação",
    status: "Concluído",
    highlight: false,
    summary: "Pipeline end-to-end de onboarding de clientes, validação cadastral (BrasilAPI / OTP de 6 dígitos), aprovação com quarentena, fusão dinâmica de minutas no Google Docs e integração com a API GraphQL da Autentique.",
    tags: ["Google Apps Script (V8)", "Autentique GraphQL API", "BrasilAPI (CNPJ)", "OTP (Two-Factor)", "Google Docs API", "Google Sheets Relacional", "Google AppSheet"],
    docPath: "docs/projetos/contratos-assinaturas.md",
    metrics: [
      { label: "Ciclo de Fechamento", value: "De 3 dias para 15min" },
      { label: "Segurança de Acesso", value: "Single-Use Tokens + OTP" },
      { label: "Assinatura Eletrônica", value: "Autentique GraphQL API" }
    ],
    overview: "Solução completa de Contract Lifecycle Management (CLM) com Web App responsivo de onboarding, validação cadastral de CNPJ e CPF em tempo real, camada de quarentena para aprovação humana, geração dinâmica de PDFs e disparo de cópias autenticadas via Webhook.",
    architecture: `
      <ul>
        <li><strong>1. Gatekeeper & Tokens de Uso Único:</strong> Acesso restrito a links com tokens de sessão (<code>?token=XYZ</code>) invalidados atomicamente após o envio dos dados, impedindo replay attacks.</li>
        <li><strong>2. Validação Cadastral & OTP:</strong> Autocompletar de dados da empresa via <code>BrasilAPI</code>, validação matemática de CPF (Módulo 11) e envio de código OTP de 6 dígitos via e-mail antes de liberar a submissão.</li>
        <li><strong>3. Quarentena & Defesa em Profundidade:</strong> Sanitização contra injeção de fórmulas (CSV Injection), preservação de zeros à esquerda em CNPJs/CPFs e retenção em quarentena até aprovação no Google Sheets ou AppSheet.</li>
        <li><strong>4. Fusão Dinâmica & Conversão em PDF:</strong> Clonagem automática de templates do Google Docs, substituição de variáveis (<code>&lt;&lt;Tag&gt;&gt;</code>) e exportação em PDF.</li>
        <li><strong>5. Autentique GraphQL & Webhook de Retorno:</strong> Criação de documentos na Autentique com posicionamento visual de rubricas/assinaturas ($X, Y, Z$) e webhook (<code>doPost</code>) que arquiva o PDF assinado no Drive e notifica os signatários.</li>
      </ul>
    `,
    techTable: [
      { category: "Frontend & Validação", tech: "HTML5, Bootstrap 5, JavaScript Vanilla, BrasilAPI REST, Validação Módulo 11 (CPF)" },
      { category: "Backend & Orquestrador", tech: "Google Apps Script (V8 Engine), doGet (Gatekeeper), doPost (Webhook)" },
      { category: "Geração de Documentos", tech: "Google Docs API, Google Drive API, Conversão Automatizada para PDF" },
      { category: "Assinatura & Segurança", tech: "Autentique GraphQL API v2, Tokens Descartáveis, Sistema OTP, AppSheet" }
    ]
  },
  {
    id: "mods-7dtd",
    title: "Engenharia de Software e Modding Avançado em C# — 7 Days to Die",
    category: "mods",
    categoryLabel: "Game Mods",
    status: "Produção Ativa",
    highlight: false,
    summary: "Suíte de 7 modificações de alta performance em C# (.NET / Unity Engine): injeção dinâmica de bytecode via Harmony, I/O assíncrono multithread para backup de saves, algoritmo O(1) de anti-repetição de POIs, renderizador gráfico de pré-visualização, telemetria cartográfica e hotfix de deadlock no HUD.",
    tags: ["C# (.NET 4.8)", "Harmony (Bytecode Detour)", "Unity Engine / Mono", "XUi / NGUI", "Multithreading I/O", "Reflection / AccessTools", "Reverse Engineering"],
    docPath: "docs/projetos/mods-7dtd.md",
    metrics: [
      { label: "Injeção de Bytecode", value: "Harmony Runtime Detours" },
      { label: "Performance I/O", value: "Async Task.Run + Queue" },
      { label: "Complexidade POI", value: "O(1) HashSet Lookup" }
    ],
    overview: "Estudo de caso de engenharia de software aplicada a modding de jogos em Unity Engine (7 Days to Die / The Fun Pimps). Desenvolvimento de uma suíte modular de 7 modificações em C# para solucionar gargalos de usabilidade (QoL), eliminar repetições no ciclo procedural de missões com complexidade O(1), prover I/O assíncrono não-bloqueante para saves volumosos e corrigir deadlocks de interface nativos via reflexão em tempo de execução.",
    architecture: `
      <ul>
        <li><strong>1. Backup &amp; Restauração Assíncrona (BackupSaves):</strong> Compactação Zip I/O em <code>Task.Run</code> desacoplada da Main Thread da Unity com despacho thread-safe via <code>ConcurrentQueue&lt;Action&gt;</code> consumida no hook de <code>Update()</code>.</li>
        <li><strong>2. Algoritmo Anti-Repetição Global O(1) (POIsNaoSeRepetem):</strong> Interceptação cirúrgica com Prefix Patch em <code>DynamicPrefabDecorator.ValidPrefabForQuest</code> consultando <code>HashSet&lt;string&gt;</code> global e de sessão, poupando processamento de pathfinding.</li>
        <li><strong>3. Renderizador de Pré-Visualização (POIPreviaMissao):</strong> Raycasting de interface com <code>UICamera.hoveredObject</code> e carregamento não-bloqueante de texturas de alta resolução via Coroutines da Unity e <code>SdFile</code>.</li>
        <li><strong>4. Telemetria Cartográfica Espacial (MapaPOIsCompletados):</strong> Cálculo de centroide vetorial de Bounding Box e injeção de marcadores persistentes no <code>NavObjectManager</code> sincronizados no <code>EntityPlayerLocal.Awake()</code>.</li>
        <li><strong>5. Hub Cartográfico MVC de Missões (MapaDeMissoes):</strong> Redirecionamento de diálogos legados para janela cartográfica interativa (<code>XUiC_MM_QuestMapWindow</code>) com injeção dinâmica de waypoints.</li>
        <li><strong>6. Sandbox em Zonas Comerciais (ProtecaoTrader):</strong> Sobrescrita atômica pós-fixada cobrindo todas as sobrecargas de validação física e AABB da classe <code>World</code>.</li>
        <li><strong>7. Hotfix de Deadlock no HUD (ResetaNotifBugada):</strong> Máquina de estados temporal (debounced) com inspeção reflexiva via <code>AccessTools</code> em campos privados da <code>XUiC_CollectedItemList</code> e drenagem reversa da fila.</li>
      </ul>
    `,
    techTable: [
      { category: "Linguagem & Runtime", tech: "C# / .NET Framework 4.8, Mono Runtime, Unity Scripting Backend" },
      { category: "Injeção & Engenharia Reversa", tech: "Harmony (0Harmony.dll), dnSpy, JetBrains dotPeek, ILSpy" },
      { category: "Framework de UI & Engine", tech: "XUi (NGUI-based 7DTD), UICamera Raycasting, Texture2D, NavObjectManager" },
      { category: "Concorrência & I/O", tech: "Task.Run Multithreading, ConcurrentQueue (Thread-Safe), System.IO.Compression" }
    ]
  },
  {
    id: "telegram-bot-precos",
    title: "ADA Prices Bot — Agregação de Preços, Análise Técnica & Alertas em Tempo Real",
    category: "bots",
    categoryLabel: "Bots & Automação",
    status: "Produção Ativa",
    highlight: false,
    summary: "Sistema assíncrono em Python 3.11/aiogram 3 para agregação de cotações em tempo real de 8 exchanges (CEXs/DEXs), detecção estatística de anomalias (Z-Score), cálculo de 24+ indicadores técnicos (pandas-ta), geração de velas OHLCV e alertas customizados com suporte a 9 idiomas (incluindo RTL).",
    tags: ["Python 3.11", "aiogram 3 (asyncio)", "WebSockets / REST", "pandas-ta / numpy", "PostgreSQL / SQLAlchemy", "Docker Hardening", "Oracle Cloud (OCI)"],
    docPath: "docs/projetos/telegram-bot-precos.md",
    metrics: [
      { label: "Fontes de Dados", value: "8 CEXs / DEXs" },
      { label: "Indicadores Técnicos", value: "24+ Indicadores" },
      { label: "Internacionalização", value: "9 Idiomas (com RTL)" }
    ],
    overview: "Solução completa de engenharia de software desenvolvida para fornecer cotações em tempo real, detecção estatística de anomalias, análise técnica automatizada e disparo de alertas customizados para o ecossistema de criptoativos da Cardano (ADA).",
    liveUrl: "https://t.me/adapricesbot",
    liveLabel: "Acessar o Bot no Telegram",
    liveType: "telegram",
    architecture: `
      <ul>
        <li><strong>Ingestão Híbrida de Dados:</strong> Conexões WebSockets de baixa latência (Binance, Bybit, Coinbase) combinadas com polling REST resiliente (Kraken, KuCoin, CoinGecko, CoinMarketCap, DexHunter).</li>
        <li><strong>Filtro Estatístico de Outliers (Z-Score):</strong> Algoritmo estatístico que descarta cotações anômalas e armazena registros para auditoria em tempo real.</li>
        <li><strong>Agregação OHLCV & Análise Técnica:</strong> Geração de séries temporais multi-timeframe e cálculo vetorizado de mais de 24 indicadores com <code>pandas-ta</code>.</li>
        <li><strong>Motor de Alertas & FSM Telegram:</strong> Construtor interativo de alertas multi-condicionais no Telegram com suporte nativo a 9 idiomas e tratamento de caracteres bidirecionais (RTL).</li>
        <li><strong>Hardening & Zero Custo:</strong> Container Docker em sistema de arquivos somente leitura (<code>read_only: true</code>), limites estritos de memória e deploy automatizado via GitHub Actions na Oracle Cloud Infrastructure.</li>
      </ul>
    `,
    techTable: [
      { category: "Linguagem & Framework", tech: "Python 3.11, aiogram 3.25 (asyncio), aiohttp, websockets" },
      { category: "Data Engine & Análise", tech: "pandas 2.2, pandas-ta, numpy 1.26, Tenacity" },
      { category: "Banco de Dados & ORM", tech: "PostgreSQL 15 (Alpine), SQLite, SQLAlchemy 2.0 Async, Alembic" },
      { category: "Infraestrutura & DevOps", tech: "Docker Hardening (read-only, tmpfs, cap_drop), GitHub Actions CI/CD, Oracle Cloud (OCI)" }
    ]
  },
  {
    id: "telegram-bot-noticias-blumenau",
    title: "Automação Serverless de Notícias & Pipeline RSS — Blumenau News",
    category: "bots",
    categoryLabel: "Bots & Automação",
    status: "Produção Ativa",
    highlight: false,
    summary: "Pipeline serverless em dois subsistemas: gerador GitOps de feeds RSS 2.0 e catálogos JSON (Python / GitHub Actions / GitHub Pages) e consumidor edge na Cloudflare Workers com deduplicação atômica via Workers KV e broadcast no Telegram.",
    tags: ["Cloudflare Workers", "Workers KV (Edge)", "Python 3.12 (Scraping)", "GitHub Actions GitOps", "Telegram Bot API", "feedgen / RSS 2.0"],
    docPath: "docs/projetos/telegram-bot-noticias-blumenau.md",
    metrics: [
      { label: "Arquitetura", value: "GitOps + Edge Serverless" },
      { label: "Deduplicação", value: "Workers KV Atômico" },
      { label: "Custo Operacional", value: "Zero (R$ 0,00)" }
    ],
    overview: "Solução completa de engenharia para agregação e distribuição automatizada de notícias regionais e comunicados de órgãos públicos em tempo real no Telegram, operando 100% serverless com custo zero de infraestrutura.",
    liveUrl: "https://t.me/blumenaunews",
    liveLabel: "Acessar Canal no Telegram",
    liveType: "telegram",
    architecture: `
      <ul>
        <li><strong>Subsistema 1 (rss-generator / Python):</strong> Scraping polimórfico de portais governamentais e de notícias com extração de metatags OpenGraph, normalização de datas em português, deduplicação em JSON e publicação de feeds RSS 2.0 via GitHub Actions e GitHub Pages.</li>
        <li><strong>Subsistema 2 (cf-telegram-rss-worker / Cloudflare):</strong> Worker serverless executado a cada 15 minutos na borda da Cloudflare, com consumo dinâmico de catálogo, deduplicação atômica no Workers KV (<code>sent:link</code>), cascata de extração de imagens e despacho ao Telegram.</li>
        <li><strong>Resiliência e Fallbacks:</strong> Tratamento de falhas de imagem com fallback transparente de <code>sendPhoto</code> para <code>sendMessage</code> e controle de throttling (máximo de 3 itens por execução).</li>
      </ul>
    `,
    techTable: [
      { category: "Edge & Serverless", tech: "Cloudflare Workers (ES Modules), Workers KV, Cloudflare Cron Triggers" },
      { category: "Ingestão & Scraping", tech: "Python 3.12, BeautifulSoup4, Requests, lxml, feedgen, python-dateutil" },
      { category: "Orquestração & CDN", tech: "GitHub Actions (Cron 1h), Git-as-Database, GitHub Pages CDN" },
      { category: "Mensageria", tech: "Telegram Bot API (sendPhoto / sendMessage com HTML escape)" }
    ]
  },
  {
    id: "telegram-bot-games-hub",
    title: "Telegram Games Hub — Plataforma Multiplayer em Tempo Real (TMA)",
    category: "bots",
    categoryLabel: "Bots & Automação",
    status: "Produção Ativa",
    highlight: false,
    summary: "Plataforma distribuída de jogos multiplayer (Pôquer Texas Hold'em & UNO) em Telegram Mini Apps (TMA): backend reativo orientado a eventos em Python 3.12 / FastAPI / WebSockets, autoridade estrita do servidor (Anti-Cheat), autenticação criptográfica HMAC-SHA256 e renderização Canvas a 60 FPS.",
    tags: ["Telegram Mini Apps (TMA)", "Python 3.12 (FastAPI)", "WebSockets (Real-Time)", "HTML5 Canvas (60 FPS)", "HMAC-SHA256 Auth", "PokerKit / FSM", "SQLite WAL", "Docker / Cloudflare Tunnels"],
    docPath: "docs/projetos/telegram-bot-games-hub.md",
    metrics: [
      { label: "Sincronização", value: "WebSockets Real-Time" },
      { label: "Renderização", value: "Canvas 60 FPS" },
      { label: "Segurança", value: "HMAC-SHA256 + Anti-Cheat" }
    ],
    overview: "Plataforma de entretenimento multiplayer de alta performance no ecossistema Telegram. Combina a praticidade dos Telegram Mini Apps (TMA) com um backend assíncrono orientado a eventos via WebSockets para partidas síncronas de Pôquer e UNO sem downloads externos.",
    liveUrl: "https://t.me/vamojogarbot",
    liveLabel: "Acessar o Hub no Telegram",
    liveType: "telegram",
    architecture: `
      <ul>
        <li><strong>1. Telegram Mini Apps & Canvas 60 FPS:</strong> Interface leve em HTML5 Canvas e Vanilla JS com renderização procedural de feltro, cartas e feedback tátil, eliminando frameworks pesados.</li>
        <li><strong>2. Núcleo Reativo & WebSockets (FastAPI):</strong> Roteador de salas com heartbeat, desconexão graciosa e inicialização sob demanda (lazy initialization) alocada apenas com jogadores conectados.</li>
        <li><strong>3. Autoridade do Servidor & Anti-Cheat:</strong> Máscara de segurança que oculta cartas de adversários até o Showdown e validação do invariante físico de 108 cartas no UNO.</li>
        <li><strong>4. Game Registry & Máquinas de Estado:</strong> Arquitetura desacoplada (Registry & Factory Patterns) permitindo plugar novos jogos e IAs heurísticas concorrentes sem refatorar o núcleo de rede.</li>
        <li><strong>5. Segurança Criptográfica & Observabilidade:</strong> Validação de identidade com HMAC-SHA256, sanitização LGPD/GDPR em logs JSON estruturados e 73 testes automatizados (pytest).</li>
      </ul>
    `,
    techTable: [
      { category: "Backend & Conexões", tech: "Python 3.12, FastAPI (ASGI), Uvicorn, WebSockets Nativos, Pydantic v2, uv" },
      { category: "Telegram & Mini Apps", tech: "aiogram v3, Telegram Mini Apps SDK, HMAC-SHA256 initData Auth, Inline Queries" },
      { category: "Lógica de Jogos & IA", tech: "PokerKit (Hold'em FSM), Motor de UNO (108 cartas, regra estrita +4), Bots Heurísticos" },
      { category: "Frontend & Infra", tech: "HTML5 Canvas API, Web Audio API, Haptic Feedback, SQLite WAL, Docker, Cloudflare Tunnels" }
    ]
  },
  {
    id: "listar-estrutura-diretorios",
    title: "Gerador de Estrutura de Pastas — Extensão Shell Windows & CI/CD",
    category: "scripts",
    categoryLabel: "Scripts & OS",
    status: "Produção Ativa",
    highlight: false,
    summary: "Utilitário de sistema e extensão do Windows Explorer para extração instantânea de topologias de diretórios com filtragem inteligente de ruídos (.git, node_modules, .venv), persistência UTF-8 em disco, fallback duplo na área de transferência (Set-Clipboard / clip.exe), compilação nativa em binário (ps2exe) e empacotador Inno Setup.",
    tags: ["PowerShell 5.1/pwsh", "Windows Shell API", "ps2exe Compiler", "Inno Setup (Pascal)", "GitHub Actions", "Tree DFS Algorithm"],
    docPath: "docs/projetos/listar-estrutura-diretorios.md",
    metrics: [
      { label: "Tempo de Execução", value: "< 1s (1 Clique)" },
      { label: "Privilégios", value: "User-Scope (Sem UAC)" },
      { label: "Entrega Contínua", value: "GitHub Actions CI/CD" }
    ],
    overview: "Utilitário de produtividade integrado diretamente ao menu de contexto do Windows Explorer (Directory e Directory\\Background). Elimina o atrito de documentação de repositórios e geração de prompts para LLMs mapeando diretórios de forma recursiva, aplicando blacklisting de dependências e alimentando a área de transferência do Windows de forma instantânea.",
    liveUrl: "https://github.com/luccascomvoce/retorna_nomes_arquivos_pastas",
    liveLabel: "Ver Repositório no GitHub",
    liveType: "web",
    architecture: `
      <ul>
        <li><strong>1. Integração Shell sem UAC:</strong> Registro na colmeia <code>HKEY_CURRENT_USER\\Software\\Classes</code> para acionamento com <code>%1</code> (pasta selecionada) e <code>%V</code> (fundo do Explorer aberto).</li>
        <li><strong>2. Algoritmo Get-Tree (DFS):</strong> Varredura recursiva com <code>-LiteralPath</code> para suporte a caracteres especiais, ordenação de diretórios antes de arquivos e renderização determinística de conectores (<code>|-- </code> e <code>\\-- </code>).</li>
        <li><strong>3. Filtragem de Ruído em Memória:</strong> Supressão automática de pastas volumosas (<code>.git</code>, <code>node_modules</code>, <code>.venv</code>) e auto-exclusão do script em execução.</li>
        <li><strong>4. Saída Dupla com Fallback:</strong> Gravação direta em disco no arquivo <code>estrutura-da-pasta.txt</code> (UTF-8) e injeção no Clipboard com fallback automático para <code>clip.exe</code>.</li>
        <li><strong>5. Pipeline DevOps & Inno Setup:</strong> Transpilação do script para executável autônomo (<code>ps2exe -noConsole</code>), instalador Pascal e publicação contínua de releases no GitHub Actions.</li>
      </ul>
    `,
    techTable: [
      { category: "Scripting & Engine", tech: "PowerShell (5.1 / pwsh), Windows Batch (.cmd), Pascal Scripting" },
      { category: "Sistema & Shell", tech: "Windows Registry API (HKCU), Context Menu Extensions (%1 e %V), Set-Clipboard, clip.exe" },
      { category: "Compilação & Packaging", tech: "ps2exe (PowerShell to Win32 EXE), Inno Setup 6 (ISCC Compiler)" },
      { category: "DevOps & CI/CD", tech: "GitHub Actions (windows-latest), Versionamento Cronológico de Release" }
    ]
  }
];
