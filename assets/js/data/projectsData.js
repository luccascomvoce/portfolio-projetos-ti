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
    title: "Dashboard Financeiro & Gestão de Despesas em Tempo Real",
    category: "web",
    categoryLabel: "Web & Dashboards",
    status: "Concluído",
    highlight: false,
    summary: "Painel analítico modular de baixa latência para controle financeiro, classificação preditiva de despesas, virtualização de dados e visualização gráfica responsiva sem dependências pesadas.",
    tags: ["Vanilla ES6+", "Data Virtualization", "Chart.js / SVG", "IndexedDB", "Analytics"],
    docPath: "docs/projetos/dashboard-gastos.md",
    metrics: [
      { label: "Latência", value: "< 16ms (60 FPS)" },
      { label: "Privacidade", value: "Client-Side Only" },
      { label: "Armazenamento", value: "IndexedDB / Local" }
    ],
    overview: "Plataforma para consolidação de despesas e telemetria financeira em tempo real com categorização heurística e exportação de relatórios analíticos.",
    architecture: `
      <ul>
        <li><strong>Data Engine & IndexedDB:</strong> Armazenamento e indexação de milhares de lançamentos com busca instantânea.</li>
        <li><strong>Visualização Dinâmica:</strong> Gráficos interativos em tempo real para análise de fluxo de caixa e projeções.</li>
        <li><strong>Privacidade por Design:</strong> Zero tráfego de dados sensíveis para servidores externos.</li>
      </ul>
    `,
    techTable: [
      { category: "Front-End", tech: "Vanilla JS ES6+, CSS Grid, Design Tokens M3" },
      { category: "Visualização", tech: "SVG Charts, Data Analytics Engine" },
      { category: "Dados", tech: "IndexedDB, LocalStorage, CSV ETL Parser" },
      { category: "Exportação", tech: "Exportação XLSX / PDF, Geração de Relatórios" }
    ]
  },
  {
    id: "contratos-assinaturas",
    title: "Sistema de Gestão de Contratos & Assinaturas Digitais",
    category: "bots",
    categoryLabel: "Bots & Automação",
    status: "Concluído",
    highlight: false,
    summary: "Automação do ciclo de vida contratual (CLM) com renderização dinâmica de minutas em PDF, checksum criptográfico SHA-256 e integração via Webhooks com plataformas de assinatura eletrônica.",
    tags: ["Python", "FastAPI / Node", "SHA-256", "Webhook Handlers", "Telegram Bot API"],
    docPath: "docs/projetos/contratos-assinaturas.md",
    metrics: [
      { label: "Integridade", value: "SHA-256 Hash" },
      { label: "Tempo de Emissão", value: "< 2 minutos" },
      { label: "Notificações", value: "Instantâneas" }
    ],
    overview: "Orquestrador de contratos e documentos jurídicos que elimina etapas manuais através de geração de templates parametrizáveis e trilha de auditoria completa.",
    architecture: `
      <ul>
        <li><strong>Geração Dinâmica de PDF:</strong> Renderização de minutas a partir de templates com preenchimento automatizado de variáveis e cláusulas condicionais.</li>
        <li><strong>Trilha Criptográfica de Auditoria:</strong> Criação de hashes SHA-256 para garantia de imutabilidade dos documentos assinados.</li>
        <li><strong>Webhooks & Bots:</strong> Notificação em tempo real dos signatários via Telegram/WhatsApp ao alterar o status do documento.</li>
      </ul>
    `,
    techTable: [
      { category: "Back-End", tech: "Python, FastAPI, Node.js, Jinja2 / Puppeteer" },
      { category: "Criptografia", tech: "SHA-256 Checksum, Validação ICP-Brasil, X.509" },
      { category: "Integrações", tech: "Webhooks REST, Telegram Bot API, WhatsApp API" },
      { category: "Banco de Dados", tech: "SQLite / PostgreSQL, S3 Encrypted Storage" }
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
  }
];
