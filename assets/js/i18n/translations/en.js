/**
 * English (en) override dictionary.
 * Only keys that differ from the pt-BR defaults need to exist here.
 */
export default {
  meta: {
    title: `Luccas — Software Engineering, Automation & DevOps Portfolio`,
    description: `Luccas' technical portfolio: Reverse Engineering, Process Automation, Telegram Bots, Multi-Cloud Web & Infrastructure and Game Modding projects.`,
    ogTitle: `Luccas — Software Engineering, Automation & DevOps Portfolio`,
    ogDescription: `Real case studies in Android Reverse Engineering, Telegram Bots, Cloud Automation and Full-Stack Development.`,
    ogImageAlt: `Luccas Portfolio Emblem`,
    twitterTitle: `Luccas — Software Engineering, Automation & DevOps Portfolio`,
    twitterDescription: `Real case studies in Android Reverse Engineering, Telegram Bots, Cloud Automation and Full-Stack Development.`,
  },

  skipLink: `Skip to main content`,

  nav: {
    mainLabel: `Main Navigation`,
    projects: `Projects`,
    articles: `Articles`,
    brandTitle: `Luccas — Home`,
    brandAria: `Luccas — Home page`,
    audio: {
      toggle: `Turn Interface Sounds On/Off`,
      on: `Turn Interface Sounds Off`,
      off: `Turn Interface Sounds On`,
      label: `Toggle sound effects`,
    },
    theme: {
      toLight: `Switch to light theme`,
      toDark: `Switch to dark theme`,
    },
  },

  lang: {
    label: `Change language`,
  },

  hero: {
    avatarWrapperTitle: `Available for Automation & Dev`,
    avatarAlt: `Luccas Profile Photo`,
    statusLabel: `Status: Available for Automation & Dev`,
    presenceTooltip: `Available for Automation & Dev`,
    description: `Software engineering focused on high performance, resilient infrastructure, protocol decompilation, critical routine automation and tailor-made solutions with optimized operational cost.`,
    scrollLabel: `Explore Technical Cases`,
    scrollAria: `Explore technical cases`,
    typewriter: [
      `Process Automation & DevOps`,
      `Reverse Engineering & Protocol Analysis`,
      `Telegram Bots & Async Integrations`,
      `Web Apps & Multi-Cloud Architectures`,
      `Game Modding & Server Optimization`,
      `PowerShell & Python Automation`,
    ],
    social: {
      email: `Email`,
      phone: `Phone`,
      emailTitle: `Email (luccascomvoce@gmail.com)`,
      phoneTitle: `Phone (+55 47 98852-6046)`,
    },
  },

  categories: {
    all: `All`,
    scripts: `Scripts & OS`,
    bots: `Bots & Automation`,
    web: `Web & Dashboards`,
    re: `Reverse Engineering`,
    mods: `Game Mods`,
  },

showcase: {
    tag: `Technical Showcase`,
    title: `Projects & Case Studies`,
    subtitle: `Structured solutions for automation, resilient infrastructure, APIs and software engineering.`,
    searchPlaceholder: `Search by technology, name or keyword...`,
    searchAria: `Search projects by technology, name or keyword`,
    searchClear: `Clear search`,
    tabsLabel: `Filter projects by category`,
    gridLabel: `List of case studies`,
    liveNone: `No projects found for the current filters.`,
    liveFoundSingular: `1 project found.`,
    liveFoundPlural: `{n} projects found.`,
    emptyTitle: `No projects found`,
    emptyText: `Try adjusting your search terms or select another category.`,
    caseButton: `View Case Study`,
    caseAria: `View full case study: {title}`,
  },

  modal: {
    overviewTitle: `Overview & Case Study`,
    architectureTitle: `Architecture & Technical Flow`,
    specsTitle: `Specifications & Technologies`,
    colLayer: `Layer`,
    colTech: `Technology / Tools`,
    defaultCta: `View in Production`,
    close: `Close modal`,
    closeTitle: `Close (Esc)`,
    articleClose: `Close article`,
    articleCloseTitle: `Close (Esc)`,
  },

  articles: {
    sectionTag: `Articles & Publications`,
    sectionTitle: `Technical Reads & Insights`,
    sectionSubtitle: `In-depth analyses, software engineering tutorials, messaging and open-source ecosystems.`,
    carouselLabel: `Technical articles and insights carousel`,
    prevLabel: `Previous article`,
    prevTitle: `Previous`,
    nextLabel: `Next article`,
    nextTitle: `Next`,
    readTimeSuffix: `min read`,
    readArticle: `Read Full Article`,
    goToArticle: `Go to article {n}`,
  },

  footer: {
    brandDesc: `Automation engineering, interoperability and highly resilient architectures for modern servers and web applications.`,
    navTitle: `Navigation`,
    home: `Home`,
    projectsLink: `Projects Showcase`,
    articlesLink: `Articles & Publications`,
    copyright: `© 2026 Luccas. All rights reserved.`,
  },

  projects: {
'engenharia-reversa': {
      title: `Reverse Engineering, Adware Removal & UI Modification in an Android IoT App`,
      status: `Completed & Audited`,
      summary: `Reverse engineering of an Android IoT app (V380/Cloudbirds) distributed as Split APKs: complete eradication of autonomous ad mediation (TradPlus/Mintegral) via Smali amputation (return-void), geometric suppression of upsell via ViewBinding (0.0dip) and merge into a versionable Universal APK.`,
      tags: [`Smali Bytecode`, `Apktool / JADX`, `Wireless ADB`, `Anti-Split APK`, `ViewBinding Patch`, `Uber APK Signer`],
      metrics: [
        { label: `Adware Suppression`, value: `100% (Smali return-void)` },
        { label: `ViewBinding Preservation`, value: `0.0dip Refactor` },
        { label: `Architecture`, value: `Universal APK Merge` },
      ],
      overview: `Real-world case study of reverse engineering on an Android IoT camera-monitoring app (V380/Cloudbirds). The project consisted of completely eradicating third-party ads and hiding intrusive primary-monetization elements (cloud upsell), while preserving ViewBinding stability and communication integrity with the video servers.`,
      architecture: `<ul>
        <li><strong>Phase 1 (Configuration Bypass):</strong> Rule analysis in <code>AppSettingSp</code> and proof of failure through autonomous initialization of mediation SDKs (TradPlus, Pangle, Mintegral, AppLovin).</li>
        <li><strong>Phase 2 (Dynamic Interception via Logcat):</strong> Telemetry via Wireless ADB to isolate the <code>YdSDK</code> handshake and map calls to <code>medproad.com</code>.</li>
        <li><strong>Phase 3 (Smali Amputation):</strong> Emptied and injected <code>return-void</code> into the <code>AdManager.smali</code> dispatchers (<code>initAd</code> and <code>setAdConfig</code>), stopping the SDKs' memory allocation and network access.</li>
        <li><strong>Phase 4 (Native UI Manipulation & 0.0dip):</strong> Mapping of Hex IDs in <code>public.xml</code> and refactoring ViewBinding containers to <code>0.0dip</code> and <code>gone</code>, preventing <code>NullPointerException</code> and eliminating upsell pop-ups.</li>
        <li><strong>Phase 5 (Anti-Split & Version Control):</strong> Merging the Split APKs (Base, ARM64, PT, XXHDPI) into a Universal APK with Apktool M and Git versioning for continuous diff mapping.</li>
      </ul>`,
      techTable: [
        { category: `Decompilation & Smali`, tech: `Apktool, JADX (Java/Kotlin Decompiler), VS Code` },
        { category: `Debugging & Logs`, tech: `Android Debug Bridge (Wireless ADB), Logcat Filtering` },
        { category: `Signing & Packages`, tech: `Uber APK Signer (V1/V2/V3), Apktool M (Anti-Split Merge)` },
        { category: `Applied Techniques`, tech: `Smali return-void Hook, ViewBinding Zero-Dimension (0.0dip), Git Versioning` },
      ],
    },

    'script-minecraft-server-java': {
      title: `Minecraft Java Server Automation & Telegram Cloud Backup`,
      status: `In Production`,
      summary: `PowerShell and Python orchestrator with graceful JVM shutdown, audit log consolidation, time-based compression and offsite cloud backup sync via Telegram MTProto.`,
      tags: [`PowerShell 7+`, `Python Asyncio`, `Telethon`, `Disaster Recovery`, `Win32 CLI`],
      metrics: [
        { label: `Cloud Protocol`, value: `MTProto API` },
        { label: `Shutdown`, value: `Graceful JVM` },
        { label: `Environment`, value: `Self-Bootstrapping` },
      ],
      overview: `Complete orchestration solution for dedicated Java servers, preventing data loss from world corruption through automatic backup routines and encrypted offsite synchronization.`,
      architecture: `<ul>
        <li><strong>PowerShell CLI Orchestrator:</strong> Java process management, log consolidation and compression into a timestamped ZIP file.</li>
        <li><strong>Python Telethon Module:</strong> Self-created virtualenv and asynchronous upload of the backup file to Telegram cloud storage.</li>
        <li><strong>Disaster Recovery:</strong> Automated rollback procedure with clean restoration of the world directory.</li>
      </ul>`,
      techTable: [
        { category: `Languages`, tech: `PowerShell 7+, Python 3.10+ (Asyncio)` },
        { category: `Cloud & API`, tech: `Telethon (Telegram MTProto Cloud)` },
        { category: `Infrastructure`, tech: `Disaster Recovery, JVM Process Control, UTF-8 CLI` },
        { category: `Architecture`, tech: `Self-Bootstrapping Virtualenv, Zero Dependency` },
      ],
    },

'pagina-loja-piscinas': {
      title: `Commercial Landing Page & Showcase with Multi-Cloud Redundancy`,
      status: `In Production`,
      summary: `High-performance web platform with a decoupled JSON catalog, local WOFF2 fonts (Zero External Dependency) and a CI/CD pipeline with automatic Vercel + GitHub Pages failover.`,
      tags: [`HTML5 / CSS3`, `Vanilla JS`, `Multi-Cloud Failover`, `Vercel Edge`, `Technical SEO`],
      metrics: [
        { label: `Operational Cost`, value: `Zero (BRL 0.00)` },
        { label: `Redundancy`, value: `Vercel + GitHub Pages` },
        { label: `Typography`, value: `100% Local WOFF2` },
      ],
      overview: `Landing page and interactive product catalog with a resilient high-availability architecture, zero hosting operational cost and privacy compliance.`,
      liveLabel: `Visit the Site`,
      architecture: `<ul>
        <li><strong>Multi-Cloud Redundancy:</strong> Automated deploy via GitHub Actions simultaneously to the Vercel edge and GitHub Pages with DNS failover.</li>
        <li><strong>Zero External Dependency:</strong> Local WOFF2 subsets eliminate third-party font requests, preventing FOIT/FOUT.</li>
        <li><strong>Data-Driven Showcase:</strong> Clean separation between HTML structure and product data in JSON, managed by a maintenance Python script.</li>
      </ul>`,
      techTable: [
        { category: `Front-End`, tech: `Semantic HTML5, Modern CSS3, JavaScript ES6+` },
        { category: `Infrastructure`, tech: `Vercel Edge Network, GitHub Pages, Multi-Cloud Failover` },
        { category: `SEO & Optimization`, tech: `Dynamic sitemap, Robots.txt, WebP, WOFF2 Fonts` },
        { category: `Automation`, tech: `Python Catalog Update Script` },
      ],
    },

    'dashboard-gastos': {
      title: `Data Pipeline, AppSheet & Financial Dashboard`,
      status: `Completed`,
      summary: `Layered data architecture (Input > ETL > Relational Core > Output): no-code mobile app via Google AppSheet, strict domain validation, row-level security (RLS) and real-time credit limit telemetry.`,
      tags: [`Google AppSheet`, `Data Pipeline (ETL)`, `Row-Level Security (RLS)`, `Relational Google Sheets`, `Data Validation`, `Looker Studio / BI`],
      metrics: [
        { label: `Architecture`, value: `4-Layer Pipeline` },
        { label: `Access Security`, value: `Row-Level Security (RLS)` },
        { label: `Mobile Ingestion`, value: `Google AppSheet UUIDs` },
      ],
      overview: `Structured financial management and credit-card spending telemetry system built under the decoupled Data Pipeline paradigm (Mobile Input > Transactional Database > ETL Layer > Visual KPI Panel).`,
      architecture: `<ul>
        <li><strong>1. Mobile Ingestion (Google AppSheet):</strong> Transactional capture on the smartphone at purchase time with primary key generation (<code>ID-Transacao</code>) and strict category validation.</li>
        <li><strong>2. Transactional Layer (Raw Storage):</strong> Relational tables storing raw records and credit limit parameters per card.</li>
        <li><strong>3. ETL Layer (TREATED DATA):</strong> Automated aggregation and enrichment via relational functions (<code>QUERY</code>, <code>FILTER</code>, <code>SUMIF</code>), calculating the limit commitment percentage in real time.</li>
        <li><strong>4. Row-Level Security (RLS):</strong> Dynamic filtering based on the authenticated user's e-mail and selected temporal parameters.</li>
        <li><strong>5. Executive Panel (DASHBOARD):</strong> Interactive KPI visualization with expense evolution, cost-center distribution and financial health.</li>
      </ul>`,
      techTable: [
        { category: `Mobile & Input`, tech: `Google AppSheet (No-Code Mobile App), Data Validation Dropdowns` },
        { category: `Storage & Relational`, tech: `Relational Google Sheets, AppSheet Tables, UUID Primary Keys` },
        { category: `ETL & Processing`, tech: `Relational Functions (QUERY, FILTER, ARRAYFORMULA, SUMIF)` },
        { category: `Security & BI`, tech: `Row-Level Security (RLS), Looker Studio / KPI Dashboard` },
      ],
    },

'contratos-assinaturas': {
      title: `Contract Lifecycle Automation (CLM) & Digital Signature`,
      status: `Completed`,
      summary: `End-to-end pipeline for client onboarding, registration validation (BrasilAPI / 6-digit OTP), approval with quarantine, dynamic template merge in Google Docs and integration with the Autentique GraphQL API.`,
      tags: [`Google Apps Script (V8)`, `Autentique GraphQL API`, `BrasilAPI (CNPJ)`, `OTP (Two-Factor)`, `Google Docs API`, `Relational Google Sheets`, `Google AppSheet`],
      metrics: [
        { label: `Closing Cycle`, value: `From 3 days to 15 min` },
        { label: `Access Security`, value: `Single-Use Tokens + OTP` },
        { label: `Electronic Signature`, value: `Autentique GraphQL API` },
      ],
      overview: `Complete Contract Lifecycle Management (CLM) solution with a responsive onboarding Web App, real-time CNPJ and CPF registration validation, a quarantine layer for human approval, dynamic PDF generation and dispatch of authenticated copies via Webhook.`,
      architecture: `<ul>
        <li><strong>1. Gatekeeper & Single-Use Tokens:</strong> Access restricted to links with session tokens (<code>?token=XYZ</code>) atomically invalidated after data submission, preventing replay attacks.</li>
        <li><strong>2. Registration Validation & OTP:</strong> Auto-fill of company data via <code>BrasilAPI</code>, mathematical CPF validation (Modulo 11) and 6-digit OTP delivery by e-mail before releasing submission.</li>
        <li><strong>3. Quarantine & Defense in Depth:</strong> Sanitization against CSV formula injection, preservation of leading zeros in CNPJs/CPFs and retention in quarantine until approval in Google Sheets or AppSheet.</li>
        <li><strong>4. Dynamic Merge & PDF Conversion:</strong> Automatic cloning of Google Docs templates, variable substitution (<code>&lt;&lt;Tag&gt;&gt;</code>) and PDF export.</li>
        <li><strong>5. Autentique GraphQL & Return Webhook:</strong> Document creation on Autentique with visual positioning of initials/signatures ($X, Y, Z$) and a webhook (<code>doPost</code>) archiving the signed PDF on Drive and notifying signers.</li>
      </ul>`,
      techTable: [
        { category: `Frontend & Validation`, tech: `HTML5, Bootstrap 5, Vanilla JavaScript, BrasilAPI REST, Modulo 11 Validation (CPF)` },
        { category: `Backend & Orchestrator`, tech: `Google Apps Script (V8 Engine), doGet (Gatekeeper), doPost (Webhook)` },
        { category: `Document Generation`, tech: `Google Docs API, Google Drive API, Automated PDF Conversion` },
        { category: `Signature & Security`, tech: `Autentique GraphQL API v2, Disposable Tokens, OTP System, AppSheet` },
      ],
    },

'mods-7dtd': {
      title: `Advanced C# Software Engineering & Game Modding — 7 Days to Die`,
      status: `In Production`,
      summary: `Suite of 7 high-performance C# modifications (.NET / Unity Engine): dynamic bytecode injection via Harmony, asynchronous multithreaded I/O for save backups, O(1) anti-repeat algorithm for POIs, graphical preview renderer, cartographic telemetry and a HUD deadlock hotfix.`,
      tags: [`C# (.NET 4.8)`, `Harmony (Bytecode Detour)`, `Unity Engine / Mono`, `XUi / NGUI`, `Multithreading I/O`, `Reflection / AccessTools`, `Reverse Engineering`],
      metrics: [
        { label: `Bytecode Injection`, value: `Harmony Runtime Detours` },
        { label: `I/O Performance`, value: `Async Task.Run + Queue` },
        { label: `POI Complexity`, value: `O(1) HashSet Lookup` },
      ],
      overview: `Software engineering case study applied to game modding on the Unity Engine (7 Days to Die / The Fun Pimps). Development of a modular suite of 7 C# modifications to solve usability bottlenecks (QoL), eliminate repetitions in the procedural quest cycle with O(1) complexity, provide non-blocking asynchronous I/O for large saves and fix native UI deadlocks via runtime reflection.`,
      architecture: `<ul>
        <li><strong>1. Asynchronous Backup & Restore (BackupSaves):</strong> Zip I/O compression in <code>Task.Run</code> decoupled from the Unity Main Thread with thread-safe dispatch via <code>ConcurrentQueue&lt;Action&gt;</code> consumed in the <code>Update()</code> hook.</li>
        <li><strong>2. Global Anti-Repeat Algorithm O(1) (POIsNaoSeRepetem):</strong> Surgical interception with Prefix Patch on <code>DynamicPrefabDecorator.ValidPrefabForQuest</code> consulting a global and session <code>HashSet&lt;string&gt;</code>, saving pathfinding processing.</li>
        <li><strong>3. Preview Renderer (POIPreviaMissao):</strong> UI raycasting with <code>UICamera.hoveredObject</code> and non-blocking loading of high-resolution textures via Unity Coroutines and <code>SdFile</code>.</li>
        <li><strong>4. Spatial Cartographic Telemetry (MapaPOIsCompletados):</strong> Bounding Box vector centroid calculation and injection of persistent markers into <code>NavObjectManager</code> synchronized in <code>EntityPlayerLocal.Awake()</code>.</li>
        <li><strong>5. MVC Cartographic Quest Hub (MapaDeMissoes):</strong> Redirecting legacy dialogs to an interactive cartographic window (<code>XUiC_MM_QuestMapWindow</code>) with dynamic waypoint injection.</li>
        <li><strong>6. Sandbox in Commercial Zones (ProtecaoTrader):</strong> Atomic postfixed override covering all physical and AABB validation overloads of the <code>World</code> class.</li>
        <li><strong>7. HUD Deadlock Hotfix (ResetaNotifBugada):</strong> Debounced temporal state machine with reflective inspection via <code>AccessTools</code> into private fields of <code>XUiC_CollectedItemList</code> and reverse queue draining.</li>
      </ul>`,
      techTable: [
        { category: `Language & Runtime`, tech: `C# / .NET Framework 4.8, Mono Runtime, Unity Scripting Backend` },
        { category: `Injection & Reverse Engineering`, tech: `Harmony (0Harmony.dll), dnSpy, JetBrains dotPeek, ILSpy` },
        { category: `UI Framework & Engine`, tech: `XUi (NGUI-based 7DTD), UICamera Raycasting, Texture2D, NavObjectManager` },
        { category: `Concurrency & I/O`, tech: `Task.Run Multithreading, ConcurrentQueue (Thread-Safe), System.IO.Compression` },
      ],
    },

'telegram-bot-precos': {
      title: `ADA Prices Bot — Price Aggregation, Technical Analysis & Real-Time Alerts`,
      status: `In Production`,
      summary: `Asynchronous Python 3.11/aiogram 3 system for real-time price aggregation from 8 exchanges (CEXs/DEXs), statistical anomaly detection (Z-Score), calculation of 24+ technical indicators (pandas-ta), OHLCV candle generation and custom alerts with support for 9 languages (including RTL).`,
      tags: [`Python 3.11`, `aiogram 3 (asyncio)`, `WebSockets / REST`, `pandas-ta / numpy`, `PostgreSQL / SQLAlchemy`, `Docker Hardening`, `Oracle Cloud (OCI)`],
      metrics: [
        { label: `Data Sources`, value: `8 CEXs / DEXs` },
        { label: `Technical Indicators`, value: `24+ Indicators` },
        { label: `Internationalization`, value: `9 Languages (with RTL)` },
      ],
      overview: `Complete software engineering solution built to provide real-time quotes, statistical anomaly detection, automated technical analysis and custom alert dispatch for the Cardano (ADA) cryptocurrency ecosystem.`,
      liveLabel: `Open the Bot on Telegram`,
      architecture: `<ul>
        <li><strong>Hybrid Data Ingestion:</strong> Low-latency WebSocket connections (Binance, Bybit, Coinbase) combined with resilient REST polling (Kraken, KuCoin, CoinGecko, CoinMarketCap, DexHunter).</li>
        <li><strong>Statistical Outlier Filter (Z-Score):</strong> Statistical algorithm that discards anomalous quotes and stores records for real-time auditing.</li>
        <li><strong>OHLCV Aggregation & Technical Analysis:</strong> Multi-timeframe time-series generation and vectorized calculation of more than 24 indicators with <code>pandas-ta</code>.</li>
        <li><strong>Alert Engine & Telegram FSM:</strong> Interactive multi-condition alert builder on Telegram with native support for 9 languages and bidirectional (RTL) character handling.</li>
        <li><strong>Hardening & Zero Cost:</strong> Docker container on a read-only filesystem (<code>read_only: true</code>), strict memory limits and automated deploy via GitHub Actions on Oracle Cloud Infrastructure.</li>
      </ul>`,
      techTable: [
        { category: `Language & Framework`, tech: `Python 3.11, aiogram 3.25 (asyncio), aiohttp, websockets` },
        { category: `Data Engine & Analysis`, tech: `pandas 2.2, pandas-ta, numpy 1.26, Tenacity` },
        { category: `Database & ORM`, tech: `PostgreSQL 15 (Alpine), SQLite, SQLAlchemy 2.0 Async, Alembic` },
        { category: `Infrastructure & DevOps`, tech: `Docker Hardening (read-only, tmpfs, cap_drop), GitHub Actions CI/CD, Oracle Cloud (OCI)` },
      ],
    },

    'telegram-bot-noticias-blumenau': {
      title: `Serverless News Automation & RSS Pipeline — Blumenau News`,
      status: `In Production`,
      summary: `Serverless pipeline with two subsystems: a GitOps RSS 2.0 feed and JSON catalog generator (Python / GitHub Actions / GitHub Pages) and an edge consumer on Cloudflare Workers with atomic deduplication via Workers KV and Telegram broadcasting.`,
      tags: [`Cloudflare Workers`, `Workers KV (Edge)`, `Python 3.12 (Scraping)`, `GitHub Actions GitOps`, `Telegram Bot API`, `feedgen / RSS 2.0`],
      metrics: [
        { label: `Architecture`, value: `GitOps + Edge Serverless` },
        { label: `Deduplication`, value: `Atomic Workers KV` },
        { label: `Operational Cost`, value: `Zero (BRL 0.00)` },
      ],
      overview: `Complete engineering solution for aggregating and automatically distributing regional news and public agency communications in real time on Telegram, operating 100% serverless with zero infrastructure cost.`,
      liveLabel: `Open the Channel on Telegram`,
      architecture: `<ul>
        <li><strong>Subsystem 1 (rss-generator / Python):</strong> Polymorphic scraping of government and news portals with OpenGraph metatag extraction, Portuguese date normalization, JSON deduplication and RSS 2.0 feed publishing via GitHub Actions and GitHub Pages.</li>
        <li><strong>Subsystem 2 (cf-telegram-rss-worker / Cloudflare):</strong> Serverless Worker running every 15 minutes on the Cloudflare edge, with dynamic catalog consumption, atomic deduplication on Workers KV (<code>sent:link</code>), image-extraction cascade and Telegram dispatch.</li>
        <li><strong>Resilience and Fallbacks:</strong> Image failure handling with transparent fallback from <code>sendPhoto</code> to <code>sendMessage</code> and throttling control (max 3 items per run).</li>
      </ul>`,
      techTable: [
        { category: `Edge & Serverless`, tech: `Cloudflare Workers (ES Modules), Workers KV, Cloudflare Cron Triggers` },
        { category: `Ingestion & Scraping`, tech: `Python 3.12, BeautifulSoup4, Requests, lxml, feedgen, python-dateutil` },
        { category: `Orchestration & CDN`, tech: `GitHub Actions (1h Cron), Git-as-Database, GitHub Pages CDN` },
        { category: `Messaging`, tech: `Telegram Bot API (sendPhoto / sendMessage with HTML escape)` },
      ],
    },

'telegram-bot-games-hub': {
      title: `Telegram Games Hub — Real-Time Multiplayer Platform (TMA)`,
      status: `In Production`,
      summary: `Distributed multiplayer gaming platform (Texas Hold'em Poker & UNO) on Telegram Mini Apps (TMA): event-driven reactive backend in Python 3.12 / FastAPI / WebSockets, strict server authority (Anti-Cheat), HMAC-SHA256 cryptographic authentication and 60 FPS Canvas rendering.`,
      tags: [`Telegram Mini Apps (TMA)`, `Python 3.12 (FastAPI)`, `WebSockets (Real-Time)`, `HTML5 Canvas (60 FPS)`, `HMAC-SHA256 Auth`, `PokerKit / FSM`, `SQLite WAL`, `Docker / Cloudflare Tunnels`],
      metrics: [
        { label: `Synchronization`, value: `Real-Time WebSockets` },
        { label: `Rendering`, value: `60 FPS Canvas` },
        { label: `Security`, value: `HMAC-SHA256 + Anti-Cheat` },
      ],
      overview: `High-performance multiplayer entertainment platform in the Telegram ecosystem. Combines the convenience of Telegram Mini Apps (TMA) with an asynchronous event-driven WebSocket backend for synchronous Poker and UNO matches without external downloads.`,
      liveLabel: `Open the Hub on Telegram`,
      architecture: `<ul>
        <li><strong>1. Telegram Mini Apps & 60 FPS Canvas:</strong> Lightweight interface in HTML5 Canvas and Vanilla JS with procedural rendering of felt, cards and haptic feedback, eliminating heavy frameworks.</li>
        <li><strong>2. Reactive Core & WebSockets (FastAPI):</strong> Room router with heartbeat, graceful disconnection and lazy initialization allocated only with connected players.</li>
        <li><strong>3. Server Authority & Anti-Cheat:</strong> Security mask hiding opponents' cards until Showdown and validation of the physical invariant of 108 cards in UNO.</li>
        <li><strong>4. Game Registry & State Machines:</strong> Decoupled architecture (Registry & Factory Patterns) allowing new games and concurrent heuristic AIs to be plugged in without refactoring the network core.</li>
        <li><strong>5. Cryptographic Security & Observability:</strong> Identity validation with HMAC-SHA256, LGPD/GDPR sanitization in structured JSON logs and 73 automated tests (pytest).</li>
      </ul>`,
      techTable: [
        { category: `Backend & Connections`, tech: `Python 3.12, FastAPI (ASGI), Uvicorn, Native WebSockets, Pydantic v2, uv` },
        { category: `Telegram & Mini Apps`, tech: `aiogram v3, Telegram Mini Apps SDK, HMAC-SHA256 initData Auth, Inline Queries` },
        { category: `Game Logic & AI`, tech: `PokerKit (Hold'em FSM), UNO Engine (108 cards, strict +4 rule), Heuristic Bots` },
        { category: `Frontend & Infra`, tech: `HTML5 Canvas API, Web Audio API, Haptic Feedback, SQLite WAL, Docker, Cloudflare Tunnels` },
      ],
    },

    'telegram-bot-calculadora': {
      title: `Quantoebot — Inline Calculator Bot, RPN Engine & Rate Limiting`,
      status: `In Production`,
      summary: `100% inline Telegram bot (@quantoebot expression) for high-precision math evaluation (28-digit Decimal), RPN parsing (Shunting-yard), human percentage desugaring, DoS protection with Sliding Window Rate Limiting and asynchronous observability.`,
      tags: [`Python 3.12 (aiogram 3)`, `Shunting-Yard / RPN`, `Sliding Window Rate Limit`, `Pydantic Settings`, `FastAPI / Uvicorn`, `Docker Multi-Stage`, `Terraform / Ansible`],
      metrics: [
        { label: `Numerical Precision`, value: `28 Digits (Decimal)` },
        { label: `DoS Protection`, value: `Sliding Window + Drop` },
        { label: `Operation`, value: `100% Inline Query` },
      ],
      overview: `High-performance Telegram bot for instant mathematical calculations operating 100% in inline mode (<code>@quantoebot expression</code>) in any chat without requiring group membership. Developed in asynchronous Python with aiogram 3, featuring a custom parsing and evaluation engine with zero external math dependencies (using <code>decimal.Decimal</code> with 28-digit precision), support for strict precedence and right-associativity, chained root extraction, factorials, and AST-contextualized human percentage. Includes a typed configuration subsystem validated at bootstrap via Pydantic Settings, edge flood/DoS protection with an in-memory Sliding Window algorithm (silent drop), and structured JSON log telemetry.`,
      liveLabel: `Try the Bot on Telegram`,
      architecture: `<ul>
        <li><strong>1. Lexical Parsing & Percentage AST:</strong> Operator normalization and Unicode superscripts (<code>2²</code>, <code>10⁻³</code>), tokenization with automatic numeric convention detection (dot/comma decimal separator), and percentage desugaring based on human arithmetic rules (<code>a ± X% = a ± a*(X/100)</code> vs. modulo <code>15%2</code>).</li>
        <li><strong>2. RPN Engine & Asynchronous Shunting-yard:</strong> Infix to Reverse Polish Notation conversion with strict precedence and right-associativity for powers/roots (<code>2^3^2 = 512</code>), evaluated under 28-digit financial precision with <code>decimal.Decimal</code> and safety limits (factorial ≤ 1000, exponent ≤ 10000).</li>
        <li><strong>3. DoS Protection with Sliding Window Limiter:</strong> Edge middleware on aiogram with an in-memory sliding window algorithm (15 req/10s per user), bounded cache for 10,000 active users with two-tier LRU eviction, admin bypass, and <em>silent drop</em> without response traffic consumption.</li>
        <li><strong>4. Typed Configuration Subsystem (Pydantic Settings):</strong> Singleton centralization via <code>BaseSettings</code> with 20+ variables, strict bootstrap validation, type coercion for lists and integers, and automatic string/log-level normalization.</li>
        <li><strong>5. Observability & Dynamic Thumbnails:</strong> Structured JSON logs with Trace IDs, throttled administrator alert dispatching, FastAPI/Uvicorn healthcheck endpoints, and adaptive thumbnail rendering with chained fallbacks (local QuickChart &gt; public QuickChart API &gt; placehold.co).</li>
      </ul>`,
      techTable: [
        { category: `Language & Framework`, tech: `Python 3.12+, aiogram 3.15+ (asyncio), FastAPI, Uvicorn, uv` },
        { category: `Parsing & Mathematics`, tech: `Shunting-yard (RPN), Percentage AST, decimal.Decimal (28 digits), Unicode Normalizer` },
        { category: `Security & Config`, tech: `Sliding Window Rate Limiter, Bounded Cache LRU, Pydantic Settings, .env Validation` },
        { category: `DevOps & Monitoring`, tech: `Docker Multi-stage, Terraform (OCI Always Free), Ansible Vault, Structured JSON Logger` },
      ],
    },

    'telegram-bot-fuxicobot': {
      title: `Fuxicobot — Inline Confidential Messaging on Telegram & End-to-End Encryption`,
      status: `In Production`,
      summary: `100% inline Telegram bot (@fuxicobot @user secret) for confidential and self-destructing messages within groups: authenticated symmetric encryption via Fernet (AES-128-CBC + HMAC-SHA256), ephemeral draft lifecycle (write amplification prevention), Sliding Window Rate Limiting, tri-language i18n (PT/EN/ES) and asynchronous audit trail with anonymous hashing.`,
      tags: [`Python 3.12 (aiogram 3)`, `Fernet Encryption (AES-128)`, `Telegram Inline Mode`, `Redis / SQLAlchemy Async`, `Sliding Window Rate Limit`, `Tri-Language I18n (PT/EN/ES)`, `Docker Hardening`],
      metrics: [
        { label: `Encryption`, value: `Fernet AES-128 + HMAC` },
        { label: `Draft Lifecycle`, value: `Anti-Amplification (TTL 600s)` },
        { label: `Internationalization`, value: `3 Languages (PT / EN / ES)` },
      ],
      overview: `High-security Telegram bot designed for sending private and confidential messages ('fuxicos') within public groups or private chats using inline mode (<code>@fuxicobot @user message</code>). Built in Python 3.12 with strict typing (Mypy) and a hexagonal architecture over aiogram 3, the system guarantees secrecy through authenticated symmetric encryption via Fernet (AES-128-CBC + HMAC-SHA256), where only the sender and authorized recipients can decrypt the content via a modal pop-up. Features an ephemeral draft pipeline to neutralize write amplification during inline typing, DoS protection with Sliding Window Rate Limiting, recent contact suggestion heuristics, and a relational database audit log storing anonymous hashes (zero plaintext or secret leakage).`,
      liveLabel: `Test the Bot on Telegram`,
      architecture: `<ul>
        <li><strong>1. Inline Mode & Quoteless Smart Parser:</strong> Real-time lexical tokenization capable of detecting multiple recipients (<code>@username</code> and numeric IDs) without requiring delimiter quotes, paired with a suggestion engine based on recently used contacts (MRU) and active group members.</li>
        <li><strong>2. Fernet Cryptography & Ephemeral Draft Lifecycle:</strong> Symmetric encryption using <code>cryptography.fernet</code> (AES-128-CBC with HMAC-SHA256) and 16-character cryptographic tokens (<code>secrets.token_urlsafe</code>). Initial drafts reside exclusively in memory/Redis with a 600s TTL and are only promoted to 24h upon send confirmation (<code>ChosenInlineResult</code>), eliminating 100% of disk write amplification.</li>
        <li><strong>3. Secure Revelation & Authorization Control:</strong> On-demand decryption via callback query opened in a modal pop-up (<code>show_alert=True</code>) truncated at the native 200-character limit, blocking unauthorized users and delivering humorous fallback responses to eavesdroppers.</li>
        <li><strong>4. Perimeter Protection & Anti-Flood (Sliding Window):</strong> Throttling middleware featuring a continuous sliding window algorithm (Redis or LRU Memory capped at 10,000 active users), auto-pruning, and audit debouncing (max 1 log / 30s per user) to repel I/O exhaustion attacks.</li>
        <li><strong>5. Cryptographic Audit & Layered Hardening:</strong> Decoupled asynchronous persistence (SQLAlchemy / aiosqlite / asyncpg) storing only partial SHA-256 hashes of secret IDs, structured JSON logging via <code>structlog</code>, hardened Docker container with <code>read_only: true</code>, <code>cap_drop: ALL</code>, and real-time alerts dispatched through a dedicated Monitor Bot.</li>
      </ul>`,
      techTable: [
        { category: `Language & Framework`, tech: `Python 3.12+ (Mypy Strict), aiogram 3.17+ (asyncio), Pydantic Settings, uv` },
        { category: `Cryptography & Security`, tech: `Fernet (AES-128-CBC + HMAC-SHA256), secrets, Anonymous SHA-256 Hash, HTML Sanitization` },
        { category: `Storage & Cache`, tech: `Redis (Cache & TTL), SQLAlchemy 2.0 Async, aiosqlite / asyncpg (SQL Audit)` },
        { category: `DevOps & Hardening`, tech: `Docker (read_only, cap_drop, tmpfs), Ansible, Terraform (AWS), structlog, Pytest (8 suites)` },
      ],
    },

    'listar-estrutura-diretorios': {
      title: `Folder Structure Generator — Windows Shell Extension & CI/CD`,
      status: `In Production`,
      summary: `The art of over-engineering so you never type long commands again: does the same as '$txt = tree /f /a; $txt | Out-File ...; $txt | Set-Clipboard', but with 1 click on the Windows context menu, recursive DFS, smart dependency blacklist, ps2exe binary and Inno Setup installer.`,
      tags: [`PowerShell 5.1/pwsh`, `Windows Shell API`, `ps2exe Compiler`, `Inno Setup (Pascal)`, `GitHub Actions`, `Tree DFS Algorithm`],
      metrics: [
        { label: `Execution Time`, value: `< 1s (1 Click)` },
        { label: `Privileges`, value: `User-Scope (No UAC)` },
        { label: `Continuous Delivery`, value: `GitHub Actions CI/CD` },
      ],
      overview: `<div class="modal-callout">
        💡 <strong>TL;DR &amp; Engineering Humor:</strong><br>
        <em>"Does exactly the same as <code>$txt = tree /f /a; $txt | Out-File -Encoding utf8 .\\estrutura-da-pasta.txt; $txt | Set-Clipboard</code>, but with the pinnacle of over-engineering via the Windows Explorer context menu with 1 click — because remembering terminal commands with encoding flags is optional."</em>
      </div>
      Productivity utility natively integrated into the Windows Explorer context menu (<code>Directory</code> and <code>Directory\\Background</code> nodes). Removes the friction of documenting repositories and generating prompts for LLMs by recursively mapping directories, applying dependency blacklisting and instantly feeding the Windows clipboard.`,
      liveLabel: `View the Repository on GitHub`,
      architecture: `<ul>
        <li><strong>1. Shell Integration without UAC:</strong> Registration in the <code>HKEY_CURRENT_USER\\Software\\Classes</code> hive for triggering with <code>%1</code> (selected folder) and <code>%V</code> (open Explorer background).</li>
        <li><strong>2. Get-Tree Algorithm (DFS):</strong> Recursive scan with <code>-LiteralPath</code> to support special characters, directory-before-file ordering and deterministic connector rendering (<code>|-- </code> and <code>\\-- </code>).</li>
        <li><strong>3. In-Memory Noise Filtering:</strong> Automatic suppression of bulky folders (<code>.git</code>, <code>node_modules</code>, <code>.venv</code>) and self-exclusion of the running script.</li>
        <li><strong>4. Dual Output with Fallback:</strong> Direct disk write to the <code>estrutura-da-pasta.txt</code> file (UTF-8) and Clipboard injection with automatic fallback to <code>clip.exe</code>.</li>
        <li><strong>5. DevOps Pipeline & Inno Setup:</strong> Transpilation of the script into a standalone executable (<code>ps2exe -noConsole</code>), Pascal installer and continuous release publishing on GitHub Actions.</li>
      </ul>`,
      techTable: [
        { category: `Scripting & Engine`, tech: `PowerShell (5.1 / pwsh), Windows Batch (.cmd), Pascal Scripting` },
        { category: `System & Shell`, tech: `Windows Registry API (HKCU), Context Menu Extensions (%1 and %V), Set-Clipboard, clip.exe` },
        { category: `Compilation & Packaging`, tech: `ps2exe (PowerShell to Win32 EXE), Inno Setup 6 (ISCC Compiler)` },
        { category: `DevOps & CI/CD`, tech: `GitHub Actions (windows-latest), Chronological Release Versioning` },
      ],
    },
  },

  articleContents: {
'telegram-ou-telegrams': {
      title: `Telegram or Telegrams?`,
      category: `Open Source Ecosystem`,
      summary: `Discover the ecosystem of official and alternative Telegram clients, what actually defines a client and the best options for Android, iOS and Desktop.`,
      tags: [`Telegram`, `Open Source`, `TDLib`, `Clients`],
      date: `July 11, 2020`,
      body: `
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/02b5ea31d0d4110b32fcb.jpg" alt="Telegram or Telegrams?" loading="lazy">
    </figure>

    <p>You've probably heard of Telegram: a multipurpose messenger focused on speed and security, already used by more than <a href="https://www.mobiletime.com.br/noticias/14/08/2023/telegram-chega-a-800-milhoes-de-usuarios-e-lanca-o-seu-stories/" target="_blank" rel="noopener noreferrer">800 million people</a>.</p>

    <p>But what you may not know is that there are actually several "Telegrams" on the market. And no, they aren't <strong>mods</strong> or <strong>pirated</strong> copies out to steal your data! They're legitimate alternative apps whose creation and development are approved and even encouraged by the "original" Telegram.</p>

    <h3>What are clients?</h3>

    <p>If you look closely at your app store, you'll notice that some applications have a "lite" version, more economical than the main app. Examples include Facebook and Facebook Lite, Uber and Uber Lite, and others.</p>

    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/cff7ed4926d90ab6a3d44.jpg" alt="Google Maps and Go" loading="lazy">
      <figcaption>Google Maps is one of the apps that has smaller versions, focused on devices with limited hardware</figcaption>
    </figure>

    <p>This alternative app (and the main one too) is what we call a "client" and it can be official or not. X/Twitter, for example, displays the client the user was using when they posted something.</p>

    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/19feb7889de52594e9674.png" alt="Twitter clients" loading="lazy">
      <figcaption>X/Twitter has several clients for several platforms</figcaption>
    </figure>

    <p>They are several applications with the same function: connecting to Twitter's services. Therefore, they are Twitter clients.</p>

    <blockquote>A client is an application, official or not, that can access a server.</blockquote>

    <p>Did you get it? An application is a client. And it doesn't necessarily have to be the only one or the best one for you. Many people who use WhatsApp, for example, prefer to install modified versions of it (like GB WhatsApp) to enjoy extra features that official WhatsApp doesn't have. But that's a topic for later...</p>

    <h3>When should you use an alternative client?</h3>

    <p>Well, the most coherent answer is: when there's a need. If you're using the official app and don't miss anything, then everything is fine. Stay where you are. Now, it might be a good idea to try alternative solutions if you need:</p>

    <ol>
      <li>A lighter app;</li>
      <li>More functions and settings;</li>
      <li>To use another platform.</li>
    </ol>

    <h3>Telegram's clients</h3>

    <p>On the messenger's <a href="https://telegram.org/apps" target="_blank" rel="noopener noreferrer">official website</a> we can find official clients for several platforms, such as Android smartphones, iPhones and iPads, Windows, Linux, web clients, among others.</p>

    <p>However, the clients listed there aren't the only ones. Telegram encourages the creation of alternative apps based on its code, and even <a href="https://www.sammobile.com/2015/09/15/samsung-launches-socializer-messenger-app-for-android-that-is-based-on-telegram/amp/" target="_blank" rel="noopener noreferrer">Samsung</a> has already made its own "telegram".</p>

    <p>The great advantage of this model is that many interesting features can be added. You could decide to make a "telegram" inspired by colorful unicorns for your company's internal communication, customizing it with dedicated features and automated actions. In appearance, it will be unique. But behind the scenes it will be using Telegram's infrastructure to work.</p>

    <h4>Telegram (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/cec55a45c45bfee33fc0c.jpg" alt="Telegram Android" loading="lazy">
    </figure>
    <p>It is certainly the most famous of them all, together with the iOS Telegram. It might just be less famous than the old ZapZap (<em>yes, ZapZap was a Brazilian "telegram"</em>), very popular a while ago. It's the top search result and what everyone installs the first time.</p>
    <blockquote>Is it official? <strong>Yes</strong> | Is it open source? <a href="https://github.com/DrKLO/Telegram" target="_blank" rel="noopener noreferrer">Yes</a></blockquote>

    <h4>Telegram (iOS)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/232eac324eed8536d6c35.jpg" alt="Telegram iOS" loading="lazy">
    </figure>
    <p>The Telegram for iOS we have today is a recent creation, Challegram, the result of a developer contest. For a while both apps were available for download, until the original's code was replaced by Challegram's.</p>
    <blockquote>Is it official? <strong>Yes</strong> | Is it open source? <a href="https://github.com/TelegramMessenger/Telegram-iOS" target="_blank" rel="noopener noreferrer">Yes</a></blockquote>
<h4>Telegram X (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/805e96e38c7bb6a05af48.jpg" alt="Telegram X" loading="lazy">
    </figure>
    <p>It was the winner of a developer contest, written from scratch (using the newly released TDLib) with the goal of being faster and more efficient, a kind of "Telegram Lite". In fact, it's the Android app with the highest download and upload speeds.</p>
    <blockquote>Is it official? <strong>Yes</strong> | Is it open source? <a href="https://github.com/TGX-Android/Telegram-X" target="_blank" rel="noopener noreferrer">Yes</a></blockquote>

    <h4>Plus Messenger (Android)</h4>
    <p>The first unofficial client on our list, it's one of the most popular on Android, with its own themes and a good set of settings. It's usually the best choice for first-timers in alternative clients.</p>
    <blockquote>Is it official? <strong>No</strong> | Is it open source? <strong>No</strong> | <a href="https://play.google.com/store/apps/details?id=org.telegram.plus" target="_blank" rel="noopener noreferrer">See on Play Store</a></blockquote>

    <h4>Nicegram (iOS and Android)</h4>
    <p>Today it's one of the only unofficial clients working on iPhones, with dedicated tools and a refined interface.</p>
    <blockquote>Is it official? <strong>No</strong> | Is it open source? <strong>No</strong> | <a href="https://apps.apple.com/br/app/nicegram/id1457369322" target="_blank" rel="noopener noreferrer">See on App Store</a></blockquote>

    <h4>Vidogram (iOS and Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/ef672783ffa4210522268.jpg" alt="Vidogram" loading="lazy">
    </figure>
    <p>The first client to offer IPTV, live streams and group video calls (even before official Telegram). It has its own games and streaming features.</p>
    <blockquote>Is it official? <strong>No</strong> | Is it open source? <strong>No</strong> | <a href="https://play.google.com/store/apps/details?id=org.vidogram.messenger" target="_blank" rel="noopener noreferrer">See on Play Store</a></blockquote>

    <h4>Unigram (Windows 10/11, Xbox)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/8dea2522e8c95b840f33a.jpg" alt="Unigram" loading="lazy">
      <figcaption>Unigram brings to the desktop all the main features of mobile Telegram, like secret chats.</figcaption>
    </figure>
    <p>Based on TDLib, the experience is designed to fit perfectly into Windows 11, and it was even chosen by Windows Center as the best social app in the Microsoft Store.</p>
    <blockquote>Is it official? <strong>(Still) No</strong> | Is it open source? <a href="https://github.com/UnigramDev/Unigram" target="_blank" rel="noopener noreferrer">Yes</a> | <a href="https://www.microsoft.com/store/apps/9n97zckpd60q" target="_blank" rel="noopener noreferrer">See on Microsoft Store</a></blockquote>

    <h4>iMe Messenger (Android, iOS and Desktop)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/ad127aa20f60f4359636e.jpg" alt="iMe Messenger" loading="lazy">
    </figure>
    <p>A powerful cross-platform client with tools focused on Artificial Intelligence, real-time translation and integrated digital wallet features, available for Android, iOS and Desktop.</p>
    <blockquote>Is it official? <strong>No</strong> | Is it open source? <a href="https://github.com/imemessenger/" target="_blank" rel="noopener noreferrer">Yes</a> | <a href="https://imem.app/" target="_blank" rel="noopener noreferrer">Official website</a></blockquote>
<h4>TurboTel (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/c736375f4c681b6bf062a.jpg" alt="TurboTel" loading="lazy">
      <figcaption>TurboTel screenshots</figcaption>
    </figure>
    <p>One of the most advanced clients on Android in terms of granular settings, turbocharged downloads and tab management.</p>
    <blockquote>Is it official? <strong>No</strong> | Is it open source? <strong>No</strong> | <a href="https://play.google.com/store/apps/details?id=ellipi.messenger" target="_blank" rel="noopener noreferrer">See on Play Store</a></blockquote>

    <h4>Nanogram (watchOS)</h4>
    <p>Telegram has an official version for Apple Watch, but it needs the iPhone nearby. Nanogram is an independent client that solves that problem and works autonomously on the watch!</p>
    <blockquote>Is it official? <strong>No</strong> | Is it open source? <strong>No</strong> | <a href="https://apps.apple.com/br/app/nanogram-messenger-for-watch/id1574130405" target="_blank" rel="noopener noreferrer">See on App Store</a></blockquote>

    <hr>

    <h3>Quick List of the Main Clients</h3>
    <ul>
      <li><strong>Desktop:</strong> <a href="https://desktop.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram Desktop (Official)</a>, <a href="https://macos.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram macOS (Official)</a>, <a href="https://github.com/UnigramDev/Unigram" target="_blank" rel="noopener noreferrer">Unigram</a>, <a href="http://imem.app/desktop" target="_blank" rel="noopener noreferrer">iMe Desktop</a>, <a href="https://t.me/kotatogram" target="_blank" rel="noopener noreferrer">Kotatogram</a>.</li>
      <li><strong>Android:</strong> <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger" target="_blank" rel="noopener noreferrer">Telegram (Official)</a>, <a href="https://play.google.com/store/apps/details?id=org.thunderdog.challegram" target="_blank" rel="noopener noreferrer">Telegram X (Official)</a>, <a href="https://play.google.com/store/apps/details?id=org.telegram.plus" target="_blank" rel="noopener noreferrer">Plus Messenger</a>, <a href="https://play.google.com/store/apps/details?id=tw.nekomimi.nekogram" target="_blank" rel="noopener noreferrer">Nekogram</a>, <a href="https://play.google.com/store/apps/details?id=ellipi.messenger" target="_blank" rel="noopener noreferrer">TurboTel</a>, <a href="https://play.google.com/store/apps/details?id=org.vidogram.messenger" target="_blank" rel="noopener noreferrer">Vidogram</a>.</li>
      <li><strong>iOS:</strong> <a href="https://apps.apple.com/br/app/telegram-messenger/id686449807" target="_blank" rel="noopener noreferrer">Telegram iOS (Official)</a>, <a href="https://apps.apple.com/br/app/nicegram/id1457369322" target="_blank" rel="noopener noreferrer">Nicegram</a>, <a href="https://apps.apple.com/us/app/ime-messenger-crypto-wallet/id1450480822" target="_blank" rel="noopener noreferrer">iMe iOS</a>, <a href="https://apps.apple.com/ae/app/vidogram/id1528004676" target="_blank" rel="noopener noreferrer">Vidogram iOS</a>.</li>
      <li><strong>Web:</strong> <a href="https://web.telegram.org/k" target="_blank" rel="noopener noreferrer">Telegram Web K</a>, <a href="https://web.telegram.org/z" target="_blank" rel="noopener noreferrer">Telegram Web Z</a>.</li>
    </ul>

    <h3>Notes and Security</h3>
    <p>Even though the vast majority of Telegram clients are mature and respectable, never trust apps of unknown origin. Always prefer auditable open-source clients or the official options available on the messenger's website.</p>
  `,
    },

'apps-torrent': {
      title: `Best and worst apps for downloading torrents`,
      category: `Software & Protocols`,
      summary: `A critical analysis of security and performance among P2P clients.`,
      tags: [`BitTorrent`, `qBittorrent`, `Open Source`, `P2P`, `Security`],
      date: `December 27, 2022`,
      body: `<figure><img src="assets/images/artigos/apps-torrent/f9997ce24f0075e56374b.jpg" alt="Image" loading="lazy"></figure><p>Torrents have been part of many people's daily lives for decades. Created in 2001, the BitTorrent protocol is still used today to download and upload the most varied types of files. Get to know some applications to take advantage of the benefits of this technology.</p><blockquote>A torrent is a file that holds the metadata used by the BitTorrent protocol to enable decentralized file sharing. </blockquote><hr><p><br></p><h3>uTorrent, the worst possible option</h3><figure><img src="assets/images/artigos/apps-torrent/80536c017dc3aa0651a3e.jpg" alt="uTorrent's main interface in version 3.4.9 on Windows, with ads in the bottom-left corner and at the top" loading="lazy"><figcaption>uTorrent's main interface in version 3.4.9 on Windows, with ads in the bottom-left corner and at the top</figcaption></figure><blockquote>🟢 It's free
🔴 Closed source
🔴 Has ads
🌐 Available <a href="https://www.utorrent.com/" target="_blank" rel="noopener noreferrer">here</a> for Windows, macOS, GNU/Linux and Android</blockquote><p>Released in 2005, it's possibly the most famous on this list, thanks to its glorious past as one of the best BitTorrent clients. Today, it's far from being the best option. A few years ago, it was caught taking advantage of users' hardware to mine cryptocurrencies.</p><blockquote><a href="https://www.tecmundo.com.br/torrent/76100-malandragem-utorrent-usando-pc-minerar-bitcoins.htm" target="_blank" rel="noopener noreferrer">Sneaky! uTorrent takes advantage of users' hardware to mine cryptocurrency</a></blockquote><p>Already during installation, uTorrent doesn't hide that it's an abusive app, luring the user into installing unwanted software. So, if you want to try the app, pay close attention to the fine print so you don't install anything you don't want. Once the installation finishes, uTorrent opens two browser tabs to show advertising, kicking off an experience full of annoying ads. In fact, this trait has already been exploited to install viruses on users' computers.</p><blockquote><a href="https://www.tecmundo.com.br/torrent/116787-alerta-voce-precisa-desinstalar-utorrent-computador.htm" target="_blank" rel="noopener noreferrer">uTorrent is using a Flash exploit via ads to install malware on computers</a></blockquote><p>Therefore, uTorrent doesn't have a good track record when it comes to transparency and respect for the user, since it has been used to hack users' computers and has even taken advantage of users' hardware to mine cryptocurrency. </p><blockquote><a href="https://www.techtudo.com.br/noticias/2018/02/utorrent-tem-falha-grave-e-permite-que-hacker-assuma-o-controle-do-pc.ghtml" target="_blank" rel="noopener noreferrer">uTorrent has a critical flaw that allows a hacker to take over the PC</a></blockquote><p>Furthermore, since it's a closed-source app of dubious intent, it's not recommended on this list.</p><p></p><hr><p><br></p><h3>BitTorrent, the uTorrent 2</h3><figure><img src="assets/images/artigos/apps-torrent/f39862098d55fb3b44817.jpg" alt="BitTorrent 7.10.5's main interface on Windows. It's the same uTorrent, but with another name." loading="lazy"><figcaption>BitTorrent 7.10.5's main interface on Windows. It's the same uTorrent, but with another name.</figcaption></figure><blockquote>🟢 It's free
🔴 Closed source
🔴 Has ads
🌐 Available here for Windows, macOS, GNU/Linux and Android</blockquote><p></p><p>Created in 2001 by the protocol's own creator (<a href="https://en.m.wikipedia.org/wiki/BitTorrent_(software)" target="_blank" rel="noopener noreferrer">Bram Cohen</a>), BitTorrent was naturally the first application to implement this technology. Until version 5.30, it was known as BitTorrent Mainline because it remained an open-source project. In 2004 Bram Cohen created the company Bit Torrent Inc. In 2006, that company bought uTorrent for an undisclosed price. And in 2007, the original BitTorrent app was effectively abandoned and became just a renamed version of uTorrent. With that, it became closed source. </p><figure><img src="assets/images/artigos/apps-torrent/76a882d3236eb035ceb60.jpg" alt="The same company maintains both applications" loading="lazy"><figcaption>The same company maintains both applications</figcaption></figure><p>Today, BitTorrent has a utility token (BTT) based on the Tron blockchain. This token is the foundation of a collaborative marketplace that aims to expand the usage possibilities of the protocol. However, the workings of this ecosystem are obscure and not very transparent, recommended only for the most nosy and compulsively curious.</p><blockquote>BitTorrent, today, is the same uTorrent, but with another name. In practice, they're the same thing, controlled by the same company.</blockquote><p><br></p><hr><p><br></p><h3>BitComet, the veteran </h3><figure><img src="assets/images/artigos/apps-torrent/f3a7f3be75452cda24670.jpg" alt="BitComet 1.98's main interface on Windows" loading="lazy"><figcaption>BitComet 1.98's main interface on Windows</figcaption></figure><blockquote>🟢 It's free
🔴 Closed source
🟢 No ads
🌐 Available <a href="https://www.bitcomet.com/en/downloads" target="_blank" rel="noopener noreferrer">here</a> for Windows, macOS and Android.</blockquote><p></p><p>With its first version released in 2003, it's on the list out of respect for being one of the oldest BitTorrent clients on the market. Unfortunately, similarly to uTorrent, during installation BitComet lures the user into installing unwanted software. Maintained by a Chinese group of developers, the positive point is that it has no ads inside the app and offers a large set of tools. </p><p>It's definitely NOT our best recommendation. BitComet has never had a very good reputation due to certain problems found in the application. Certain actions by the developer team also made the app lose the community's respect.</p><p></p><hr><p><br></p><h3>Deluge, the grandpa </h3><figure><img src="assets/images/artigos/apps-torrent/fac9cdfb86e767fce8801.jpg" alt="Deluge's main interface on Windows" loading="lazy"><figcaption>Deluge's main interface on Windows</figcaption></figure><blockquote>🟢 It's free
🟢 Open source
🟢 No ads
🌐 Available <a href="https://www.deluge-torrent.org/" target="_blank" rel="noopener noreferrer">here</a> for Windows, macOS and GNU/Linux</blockquote><p></p><p>This is another veteran in the field, which is already evident when you access the website. It wouldn't be a surprise if the site were the same one from 2007, the year Deluge was released. But, if you can get past the trauma caused by that first impression, the app's design is impressively clean. Even so, it has a good set of settings. It's a shame it doesn't support the Portuguese language. It should appeal to hardcore users who like terminals and command lines.</p><p></p><hr><p><br></p><h3>Vuze, the apple smell </h3><figure><img src="assets/images/artigos/apps-torrent/df13dd36b4cd164ceb575.jpg" alt="Vuze's main interface on Windows" loading="lazy"><figcaption>Vuze's main interface on Windows</figcaption></figure><blockquote>🟢 It's free
🔴 Closed source
🔴 Has ads
🌐 Available <a href="https://www.vuze.com/download.php" target="_blank" rel="noopener noreferrer">here</a> for Windows, macOS, GNU/Linux and Android</blockquote><p></p><p>Free and with a macOS-inspired interface, during installation Vuze offers some components, like integration with iTunes. All the add-ons come pre-checked by default, but with a bit of attention and a few clicks it's possible to avoid installing them. The application also shows ads, although in a much more subtle way than uTorrent and BitTorrent.</p><p>The standout feature here seems to be the ability to discover content within the app itself, which shouldn't convince the large majority of users who already know what they want to download.</p><p></p><hr><p><br></p><h3>Web Torrent, the minimalist</h3><figure><img src="assets/images/artigos/apps-torrent/e173081a7a048d4331016.jpg" alt="Web Torrent 0.24.0's main interface on Windows" loading="lazy"><figcaption>Web Torrent 0.24.0's main interface on Windows</figcaption></figure><blockquote>🟢 It's free
🟢 Open source
🟢 No ads
🌐 Available <a href="https://webtorrent.io/desktop/" target="_blank" rel="noopener noreferrer">here</a> for Windows, macOS and GNU/Linux</blockquote><p></p><p>It's the simplest and most minimalist app possible, without ads, open source, and it even comes already built into certain browsers, such as Brave, which dispenses with any installation or worry. It's an application focused on regular users and takes a radically minimalist approach: just drag and drop a torrent into the app window and that's it. It's already downloading. And if that's too hard, a CTRL + C and CTRL + V also does the job. There are no advanced settings, no fancy possibilities and no technical tweaks. It's simple, gets straight to the point and does what it has to do. For that reason, it's very easy to use and the most recommended for laypeople.</p><p></p><hr><p><br></p><h3>Transmission, the no-fuss one</h3><figure><img src="assets/images/artigos/apps-torrent/3817592cef0cff324996c.jpg" alt="Transmission 4.0.0's main interface on Windows" loading="lazy"><figcaption>Transmission 4.0.0's main interface on Windows</figcaption></figure><blockquote>🟢 It's free
🟢 Open source
🟢 No ads
🌐 Available <a href="https://transmissionbt.com/download" target="_blank" rel="noopener noreferrer">here</a> for Windows, macOS and GNU/Linux</blockquote><p></p><p>Transmission is a modest application and, as they say themselves, fast and uncomplicated. It has a simple interface with a few adjustment possibilities. Even far from being a powerful BitTorrent client, it's competent for regular users. The interface was thought out especially for each compatible operating system, to provide the best possible experience. So much so that it's the default BitTorrent client of several operating systems.</p><p></p><hr><p><br></p><h3>LibreTorrent, in the palm of your hand</h3><figure><img src="assets/images/artigos/apps-torrent/8c3911a614455de0a3b8d.jpg" alt="LibreTorrent 3.4 screenshots on Android 12" loading="lazy"><figcaption>LibreTorrent 3.4 screenshots on Android 12</figcaption></figure><blockquote>🟢 It's free
🟢 Open source
🟢 No ads
🌐 Available <a href="https://play.google.com/store/apps/details?id=org.proninyaroslav.libretorrent" target="_blank" rel="noopener noreferrer">here</a> for Android</blockquote><p></p><p>Here's a nice app for downloading torrents on your Android. With a Portuguese interface, based on Material Design and with a good set of settings, LibreTorrent keeps itself open source and ad-free.</p><p></p><hr><p><br></p><h3>qBittorrent, the best</h3><figure><img src="assets/images/artigos/apps-torrent/cf494567e9edd74e633ed.jpg" alt="qBittorrent's main interface on Windows" loading="lazy"><figcaption>qBittorrent's main interface on Windows</figcaption></figure><blockquote>🟢 It's free
🟢 Open source
🟢 No ads
🌐 Available <a href="https://www.qbittorrent.org/download.php" target="_blank" rel="noopener noreferrer">here</a> for Windows, macOS, GNU/Linux, and FreeBSD</blockquote><p></p><p>Here we have the best recommendation on our list: one of the most powerful applications on the market, which began its history in 2006. The look here has no secret and is already familiar because it's very similar to uTorrent. Like every good open-source application, qBittorrent is free, safe and ad-free. And unlike uTorrent, BitTorrent and BitComet, it doesn't try to trick the user into installing junkware. </p><p>qBittorrent gets straight to the point during installation and is incredibly powerful to use. And if everything it offers isn't enough, it still supports plugins that add even more possibilities. </p><p></p><hr><p><br></p><h3>CONCLUSION</h3><ul><li><li>Best app for experienced users: qBittorrent</li></li><li><li>Best app for regular users who just want to download a specific file every now and then: Web Torrent or Transmission</li></li><li><li>Best app to download torrents on Android: LibreTorrent</li></li></ul><p></p><hr><p></p><h4>Other articles that may interest you</h4><p><a href="/Telegram-caiu-foi-banido-ou-bloqueado-Fure-a-censura-sem-precisar-instalar-nada-a-menos-que-voc%C3%AA-queira-01-20" target="_blank" rel="noopener noreferrer">Telegram down, banned or blocked? Break through censorship without installing anything (unless you want to)</a></p><p><a href="/Telegram-ou-Telegrams-07-11" target="_blank" rel="noopener noreferrer">Telegram clients: what they are, where they live, what they feed on?</a></p><p><a href="/Relembre-a-hist%C3%B3ria-do-WhatsApp-03-27" target="_blank" rel="noopener noreferrer">Timeline: remember the (untold) history of WhatsApp</a></p><p><a href="/Principais-obras-e-autores-de-cada-estado-do-Brasil-05-20" target="_blank" rel="noopener noreferrer">Reading guide: national literature</a></p><p></p><hr><p><br></p><p>Updated on 27/12/2022. This article is being drafted and expanded little by little. To report an error or send suggestions, join the <a href="https://t.me/blumenaunews" target="_blank" rel="noopener noreferrer">Blumenau News</a> channel and comment on the pinned post.</p><p><br></p>`,
    },

'historia-whatsapp': {
      title: `Timeline: remember the (untold) history of WhatsApp`,
      category: `History & Security`,
      summary: `A retrospective on acquisition, privacy and security.`,
      tags: [`WhatsApp`, `Security`, `Privacy`, `Timeline`, `Meta`],
      date: `March 27, 2020`,
      body: `<figure><img src="assets/images/artigos/historia-whatsapp/f9a3b1fb6ce076f059cfa.jpg" alt="Image" loading="lazy"></figure><p>WhatsApp has always had an interesting history. If you don't know it, see the best moments below.</p><h4>2009</h4><p>🎉 WhatsApp is launched by Jan Koum and Brian Acton. 🎉</p><h4>2012</h4><p>Until 2012 the messages exchanged by the app did NOT receive any kind of encryption. <a href="https://web.archive.org/web/20150108072201/http://fileperms.org/whatsapp-is-broken-really-broken.html" target="_blank" rel="noopener noreferrer">See here</a>.</p><h4>2013</h4><p>A game was removed from the Play Store because it collected the WhatsApp message history. <a href="https://www.techtudo.com.br/noticias/noticia/2013/12/jogo-para-android-esta-roubando-historico-de-conversas-no-whatsapp.html" target="_blank" rel="noopener noreferrer">See here</a>. </p><h4>2014</h4><p>A flaw allows crashing the app with just 1 message. <a href="https://www.techtudo.com.br/noticias/noticia/2014/12/whatsapp-tem-falha-que-trava-app-com-uma-unica-mensagem-saiba-fugir.amp" target="_blank" rel="noopener noreferrer">See here</a>.</p><figure><img src="assets/images/artigos/historia-whatsapp/88a18f0eef01e2a3a0f52.jpg" alt="Image" loading="lazy"></figure><p>Facebook buys WhatsApp for US$22 billion. <a href="http://g1.globo.com/economia/negocios/noticia/2014/10/preco-de-compra-do-whatsapp-pelo-facebook-sobe-us-22-bilhoes.html" target="_blank" rel="noopener noreferrer">See here</a>.</p><h4>2015</h4><p>A way to hack WhatsApp just by sending a contact leaks. <a href="https://www.bbc.com/news/technology-34192117" target="_blank" rel="noopener noreferrer">See here</a>.</p><p>Belgium takes Facebook to court over privacy violations. <a href="https://www.theguardian.com/technology/2015/jun/15/belgium-facebook-court-privacy-breaches-ads" target="_blank" rel="noopener noreferrer">See here</a>. </p><h4>2016</h4><p>End-to-end encryption is definitively and completely implemented, but full of bugs... <a href="http://www.h-online.com/security/news/item/Sniffer-tool-displays-other-people-s-WhatsApp-messages-1574382.html" target="_blank" rel="noopener noreferrer">See here</a>.</p><p>Facebook works on a censorship tool to try to operate in the Chinese market. <a href="https://www.nytimes.com/2016/11/22/technology/facebook-censorship-tool-china.html?_r=0" target="_blank" rel="noopener noreferrer">See here</a>.</p><p>The European Union asks WhatsApp to stop sending its users' personal information to Facebook's services. <a href="https://www.theguardian.com/technology/2016/oct/28/whatsapp-pause-sharing-user-data-facebook-european-privacy-regulators-yahoo" target="_blank" rel="noopener noreferrer">See here</a>.</p><p>Germany orders Facebook to stop collecting WhatsApp user data. <a href="https://www.theguardian.com/technology/2016/sep/27/germany-orders-facebook-stop-collecting-whatsapp-phone-numbers-user-data" target="_blank" rel="noopener noreferrer">See here</a>. </p><h4>2017</h4><p>A way to hack WhatsApp with just 1 photo leaks. <a href="https://www.forbes.com/sites/thomasbrewster/2017/03/15/whatsapp-telegram-hacked-with-single-image-check-point-research/#41fd78a23be2" target="_blank" rel="noopener noreferrer">See here</a>.</p><p>WhatsApp's end-to-end encryption doesn't work as it should and has a flaw that lets third parties receive and read messages. <a href="https://www.theguardian.com/technology/2017/jan/13/whatsapp-design-feature-encrypted-messages" target="_blank" rel="noopener noreferrer">See here</a>.</p><p>Facebook may officially not hand over your WhatsApp data to authorities, but it hands over the metadata easily and doesn't deny it. <a href="https://www.forbes.com/sites/thomasbrewster/2017/01/22/whatsapp-facebook-backdoor-government-data-request/#5951a9ce1030" target="_blank" rel="noopener noreferrer">See here</a> and <a href="https://iphone.appleinsider.com/articles/17/01/13/whatsapp-backdoor-defeats-end-to-end-encryption-potentially-allows-facebook-to-read-messages" target="_blank" rel="noopener noreferrer">here too</a>.</p><p>Brian Acton, WhatsApp co-founder, leaves Facebook. <a href="https://www.vox.com/2017/9/12/16298092/whatsapp-founder-brian-acton-leaving-facebook-foundation" target="_blank" rel="noopener noreferrer">See here</a>.</p><p>Facebook is fined by France for privacy violations. <a href="https://www.theguardian.com/technology/2017/may/16/facebook-facing-privacy-actions-across-europe-as-france-fines-firm-150k" target="_blank" rel="noopener noreferrer">See here</a>.</p><h4>2018</h4><p>Brian Acton, WhatsApp co-founder, vents that he "sold users' privacy" and runs the <a href="#deleteFacebook" target="_blank" rel="noopener noreferrer">#deleteFacebook</a> campaign. <a href="https://www.cnet.com/news/whatsapp-cofounder-i-sold-my-users-privacy-with-facebook-acquisition/" target="_blank" rel="noopener noreferrer">See here</a>.</p><figure><img src="assets/images/artigos/historia-whatsapp/21b85da9823605b6e29ef.jpg" alt="Image" loading="lazy"></figure><p>Jan Koum, WhatsApp's other co-founder, also leaves Facebook, after diverging over users' privacy and the app's encryption. <a href="https://www.theverge.com/2018/4/30/17304792/whatsapp-jan-koum-facebook-data-privacy-encryption" target="_blank" rel="noopener noreferrer">See here</a>.</p><h4>2019</h4><p><em>May</em></p><p>A way to hack WhatsApp leaks using just an audio call (and the victim doesn't even need to answer to be hacked). <a href="https://noticias.uol.com.br/tecnologia/noticias/redacao/2019/05/14/falha-de-seguranca-no-whatsapp-e-gravissima-dizem-especialistas.htm" target="_blank" rel="noopener noreferrer">See here</a>. <a href="https://olhardigital.com.br/fique_seguro/noticia/whatsapp-foi-usado-para-espionar-jornalistas-e-ativistas-indianos/92355" target="_blank" rel="noopener noreferrer">Here too</a>. <a href="https://olhardigital.com.br/fique_seguro/noticia/entenda-tudo-sobre-a-grave-brecha-no-whatsapp-e-saiba-se-proteger/85776" target="_blank" rel="noopener noreferrer">Here too</a>.</p><p><em>June</em></p><p>A way to hack WhatsApp leaks using just 1 video call. See <a href="/Falha-no-WhatsApp-permitiu-invas%C3%A3o-de-hackers-a-contas-por-chamada-de-v%C3%ADdeo-diz-m%C3%ADdia-06-12" target="_blank" rel="noopener noreferrer">here</a>.</p><p><em>August</em></p><p>Messages can be read and even altered by hackers. <a href="https://olhardigital.com.br/video/novas-falhas-de-seguranca-no-whatsapp/89127" target="_blank" rel="noopener noreferrer">See here</a>.</p><p><em>October</em></p><p>A way to hack WhatsApp leaks using just 1 gif. <a href="https://tecnoblog.net/309879/vulnerabilidade-whatsapp-android-gif/" target="_blank" rel="noopener noreferrer">See here</a>.</p><p><em>November</em></p><p>A way to hack WhatsApp leaks using just 1 video. <a href="https://olhardigital.com.br/noticia/falha-no-whatsapp-permite-invasao-do-celular-com-videos-mp4/93090" target="_blank" rel="noopener noreferrer">See here</a>.</p><p><em>December</em></p><p>A flaw can render the app unusable for all members of a group and make it inaccessible forever. <a href="https://olhardigital.com.br/fique_seguro/noticia/novo-bug-pode-travar-whatsapp-e-destruir-grupos-de-conversa/94467" target="_blank" rel="noopener noreferrer">See here</a>.</p><h4>2020</h4><p><em>February</em></p><p>A way to hack WhatsApp leaks using just a link. <a href="https://tecnoblog.net/323843/whatsapp-desktop-falha-permite-acessar-arquivos-windows-macos/" target="_blank" rel="noopener noreferrer">See here</a>, <a href="https://www.perimeterx.com/tech-blog/2020/whatsapp-fs-read-vuln-disclosure/" target="_blank" rel="noopener noreferrer">here too</a> and <a href="https://www.metrojornal.com.br/estilo-vida/2020/02/20/atualizacao-recente-whatsapp-corrige-grave-vulnerabilidade-de-seguranca.html" target="_blank" rel="noopener noreferrer">here too</a>.</p><h4>2022</h4><p><em>October</em></p><p>A way to gain access to all the device's data leaks using just a call via WhatsApp or a video sent via WhatsApp. See <a href="https://thehackernews.com/2022/09/critical-whatsapp-bugs-could-have-let.html?m=1" target="_blank" rel="noopener noreferrer">here</a> for the news in English and <a href="https://www.whatsapp.com/security/advisories/2022/" target="_blank" rel="noopener noreferrer">here</a> for WhatsApp's own announcement.</p><h4>2024</h4><p><em>September</em></p><p>A WhatsApp bug allows capturing the screen of view-once messages. <a href="https://macmagazine.com.br/post/2024/09/10/bug-no-whatsapp-permite-capturar-a-tela-de-mensagens-de-visualizacao-unica/" target="_blank" rel="noopener noreferrer">See here</a>.</p><h4>2025</h4><p><em>January</em></p><p>A WhatsApp bug allows bypassing the view-once feature on iOS. <a href="https://macmagazine.com.br/post/2025/01/15/bug-no-whatsapp-permite-burlar-recurso-de-visualizacao-unica-no-ios/" target="_blank" rel="noopener noreferrer">See here</a>.</p><p><em>April</em></p><p>A WhatsApp for Windows bug allows arbitrary code execution instead of just opening the attachment. <a href="https://www.tecmundo.com.br/seguranca/403859-atualize-ja-falha-no-whatsapp-para-windows-facilita-o-envio-de-anexos-maliciosos.htm" target="_blank" rel="noopener noreferrer">See here.</a></p><p><em>August</em></p><p>A WhatsApp bug on iOS and macOS allows stealing data from the device without any user interaction, just by receiving an infected image. The bug has been exploited since at least May. <a href="https://pplware.sapo.pt/apple/hora-de-atualizar-o-iphone-e-o-mac-falha-perigosa-no-whatsapp-foi-explorada/" target="_blank" rel="noopener noreferrer">See here</a>.</p><p></p><h4>Conclusion</h4><p>As you can see, flaws, vulnerabilities and a purposeful disregard for user privacy are part of WhatsApp's history. And, to close with a flourish, even if it had no flaws, the fact that it depends on third-party apps makes it more vulnerable. For example:</p><p>1. To create and add stickers to WhatsApp you have to use a third-party app, which can compromise WhatsApp and the entire phone;</p><p>2. To use proxy and/or VPN services to get around a possible block in the country you have to use a third-party app because WhatsApp itself doesn't have that function, which can compromise WhatsApp and the entire phone;</p><p>3. To avoid losing your conversations you have to back up to a third-party cloud.</p>`,
    },

'vagas-blumenau': {
      title: `Jobs and opportunities in Blumenau, SC`,
      category: `Market & Opportunities`,
      summary: `A complete guide with the best HR agencies, recruitment platforms, job portals and local companies that hire directly in Blumenau and the Itajaí Valley.`,
      tags: [`Blumenau`, `Jobs`, `HR`, `Technology`, `Jobs SC`],
      date: `August 10, 2020`,
      body: `<figure><img src="assets/images/artigos/vagas-blumenau/fcc857feee1c48e9ce760.jpg" alt="Image" loading="lazy"></figure><p>This is the job list maintained by the <a href="http://t.me/vilagermanica" target="_blank" rel="noopener noreferrer">@vilagermanica</a> group on Telegram! The best companies, contacts and agencies in the city are here. One-off or temporary jobs are posted directly in the group. </p><blockquote>By following this list it's practically IMPOSSIBLE not to land a job. Good luck!</blockquote><h3><a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">RH Genial</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/1f16d8aab1ba412e0653e.jpg" alt="Image" loading="lazy"></figure><p>The purpose of <a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">RH Genial</a> is to help talents and companies from Blumenau and the region connect through digital recruitment. It's my favorite job site and you can follow it on <a href="https://www.linkedin.com/company/rh-genial/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/rhgenial/" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://www.instagram.com/rhgenial/" target="_blank" rel="noopener noreferrer">Instagram</a>. It's almost a job agency, but it isn't. For me, it's much better.</p><blockquote>Is it from Blumenau? Yes.
Access: <a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">Job portal</a>, <a href="https://www.linkedin.com/company/rh-genial/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/rhgenial/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/rhgenial/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Selecionar Talentos</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/866a6a645b3df59e866b6.png" alt="Image" loading="lazy"></figure><p><a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Selecionar Talentos</a> has partnerships with big companies in the city, such as Serasa and Viacredi, and a really nice structure. You can follow it on <a href="https://www.facebook.com/selecionartalentos" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://www.instagram.com/gruposelecionar/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>Is it from Blumenau? Yes.
Access: <a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Job portal</a>, <a href="https://www.linkedin.com/company/grupo-selecionar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.instagram.com/gruposelecionar/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.facebook.com/selecionartalentos" target="_blank" rel="noopener noreferrer">Facebook</a> </blockquote><p><br></p><h3><a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Recrutar RH</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/2b5950b3065490fc46dcf.png" alt="Image" loading="lazy"></figure><p>I didn't have a good experience with <a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Recrutar RH</a>, but there are always many open positions. I was told that the companies advertising with them only call candidates who already have at least 1 year of formally signed work in the city. If you recently arrived from elsewhere, don't even bother trying... They're on <a href="http://instagram.com/Recrutar_rh" target="_blank" rel="noopener noreferrer">Instagram</a>, on <a href="https://twitter.com/RhRecrutar" target="_blank" rel="noopener noreferrer">Twitter</a> (which hasn't been updated since 2016, but the profile is official...) and on <a href="http://br.linkedin.com/pub/recrutar-recursos-humanos/33/915/6a5" target="_blank" rel="noopener noreferrer">LinkedIn</a> (the link is invalid, but it's correct, it's official...). </p><blockquote>Is it from Blumenau? Yes.
Access: <a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Job portal</a>, <a href="https://twitter.com/RhRecrutar" target="_blank" rel="noopener noreferrer">Twitter</a> (it's official but hasn't been updated since 2016), <a href="http://instagram.com/Recrutar_rh" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://br.linkedin.com/pub/recrutar-recursos-humanos/33/915/6a5" target="_blank" rel="noopener noreferrer">LinkedIn</a> (the link is official but doesn't work)</blockquote><p><br></p><h3><a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">DPRH</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/75393e45ebc7b57400b0f.png" alt="Image" loading="lazy"></figure><p><a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">DPRH</a> is a very strong agency too; there are several openings and they also have big partnerships, like Oktoberfest. It has a presence on <a href="https://www.facebook.com/DPRHempregos" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.linkedin.com/company/dprh-empregos/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://www.instagram.com/dprhempregos/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>Is it from Blumenau? Yes.
Access: <a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">Job portal</a>, <a href="https://www.linkedin.com/company/dprh-empregos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/DPRHempregos" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/dprhempregos/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Degrau do Sucesso</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/33ff50195d13836cd23ad.png" alt="Image" loading="lazy"></figure><p><a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Degrau do Sucesso</a> has several openings and seems like a good agency. The website is weak, but people personally say it's better. So it's better to go there in person to have any chance. It has an active profile on <a href="https://www.facebook.com/degraudosucesso/" target="_blank" rel="noopener noreferrer">Facebook</a> and on <a href="https://www.instagram.com/degrauempregos/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>Is it from Blumenau? Yes.
Access: <a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Job portal</a>, <a href="https://www.facebook.com/degraudosucesso/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/degrauempregos/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Link</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/4168473c45487bfcd9933.png" alt="Image" loading="lazy"></figure><p><a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Link</a> is very well regarded and well rated by the community. It seems to specialize in technology-related opportunities and, perhaps because of that, has a very large social media presence (the largest on this list), and can be found on <a href="https://www.periscope.tv/linktalentos" target="_blank" rel="noopener noreferrer">Periscope</a>, <a href="https://www.facebook.com/pages/Link-Talentos/106641139394311?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/linktalentos/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://www.linkedin.com/company/link-talentos" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://www.youtube.com/channel/UCUluAqk0kaw1qEhk-5seoDQ" target="_blank" rel="noopener noreferrer">Youtube</a>. </p><blockquote>Is it from Blumenau? Yes.
Access: <a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Job portal</a>, <a href="https://www.periscope.tv/linktalentos" target="_blank" rel="noopener noreferrer">Periscope</a>, <a href="https://www.facebook.com/pages/Link-Talentos/106641139394311?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/linktalentos/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://www.linkedin.com/company/link-talentos" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.youtube.com/channel/UCUluAqk0kaw1qEhk-5seoDQ" target="_blank" rel="noopener noreferrer">Youtube</a></blockquote><h3><br></h3><h3><a href="https://vagas.keeptalent.com.br/vaga/lista/inicio" target="_blank" rel="noopener noreferrer">Keep Talent</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/317a22199a082358ecc32.jpg" alt="Image" loading="lazy"></figure><p>Since 2008, with jobs for Blumenau and the region, it's a solid agency with a good reputation and a lot of activity on LinkedIn.</p><blockquote>Is it from Blumenau? Yes.
Access: <a href="https://vagas.keeptalent.com.br/vaga/lista/inicio" target="_blank" rel="noopener noreferrer">Job portal</a>, <a href="https://www.instagram.com/keeptalent/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.linkedin.com/company/keeptalent" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/keeptalentrh" target="_blank" rel="noopener noreferrer">Facebook</a> </blockquote><p><br></p><h3><a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Vagas</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/78107df6adb2b5952ac69.jpg" alt="Image" loading="lazy"></figure><p><a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Vagas</a> isn't from Blumenau, but a nationwide job portal, therefore more generic. Even so, there's always some opening for Blumenau. It even has its own app and, on the blog, there are several useful articles that help a lot when building a resume or with interview posture.</p><blockquote>Is it from Blumenau? No.
Access: <a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Job portal</a></blockquote><p><br></p><h3><a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Trabalha Brasil</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/78e4b1804ce9d50268f77.png" alt="Image" loading="lazy"></figure><p><a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Trabalha Brasil</a> also isn't specialized in jobs for Blumenau, but is a nationwide job portal. It also picks up jobs that were created on other portals and has no kind of curation over the jobs posted on it. Anyone can create an account on the platform and advertise whatever job they want. That's why it's good to pay attention because there are misleading jobs. Always be very careful not to fall for scams.</p><blockquote>Is it from Blumenau? No.
Access: <a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Job portal</a></blockquote><p><br></p><h3><a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Emprega Brasil</a> (Ministry of Labor)</h3><figure><img src="assets/images/artigos/vagas-blumenau/e842cd26081dc2fd448bc.png" alt="Image" loading="lazy"></figure><p><a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Emprega Brasil</a> is the official portal of the Federal Government's Ministry of Labor, with jobs for the whole country. In the search, you can filter by city and there are many openings for Blumenau in several areas.</p><blockquote>Is it from Blumenau? No.
Access: <a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Job portal</a></blockquote><p><br></p><h3><a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Sistema S</a> (FIESC, CIESC, SESI, SENAI, IEL)</h3><figure><img src="assets/images/artigos/vagas-blumenau/76aa178f76e657ca3a6f4.png" alt="Image" loading="lazy"></figure><p>Also spread across the country, the <a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Sistema S</a> units have several openings for the city of Blumenau, namely at Sesi and Senai. Worth checking out.</p><blockquote>Is it from Blumenau? No.
Access: <a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Job portal</a></blockquote><p><br></p><h3>Companies that may interest you</h3><p>In addition to the agencies, which make life easier by aggregating several opportunities in one place, you can contact directly the companies that have their own job channel. </p><p><br></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=cecred&tenantdomain=cecred.coop.br#!/vacancies/list?hq=19932CB6AAE647EDB621AD2B576DB697" target="_blank" rel="noopener noreferrer">Ailos</a></p><p><a href="https://altenburgtextilltda.pandape.com.br/" target="_blank" rel="noopener noreferrer">Altenburg</a></p><p><a href="http://www.altona.com.br/web/trabalhe-com-a-altona/vagas" target="_blank" rel="noopener noreferrer">Altona</a></p><p><a href="https://www.arber.com.br/trabalhe_conosco" target="_blank" rel="noopener noreferrer">Arber Parafusos</a></p><p><a href="https://www.bludata.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Bludata</a></p><p><a href="https://www.blukit.com.br/trabalhe" target="_blank" rel="noopener noreferrer">Blukit</a></p><p><a href="http://blutextil.natela.com.br/pt_br/rh.cadastro.php" target="_blank" rel="noopener noreferrer">Blutextil</a></p><p><a href="https://www.bluware.com.br/site2/trabalhe-conosco.php" target="_blank" rel="noopener noreferrer">Bluware Sistemas</a></p><p><a href="https://www.grupoboticario.com.br/vagas/" target="_blank" rel="noopener noreferrer">Boticário</a> </p><p><a href="https://jobs.bunge.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">Bunge</a></p><p><a href="https://www.cicblumenau.com.br/trabalhe-conosco" target="_blank" rel="noopener noreferrer">CIC Blumenau</a></p><p><a href="https://www.cooper.coop.br/contato/trabalhe-com-a-gente" target="_blank" rel="noopener noreferrer">Cooper</a></p><p><a href="https://www.coteminas.com.br/scripts11/cgiip.exe/WService=coteminas/cot/vis/cadcurriculo.htm" target="_blank" rel="noopener noreferrer">Coteminas</a></p><p><a href="https://portalrh.cremer.com.br/curriculoweb/conector?ACAO=ANUNCIOS&STATUS=LISTAR&SIS=RS&ORIGEM=AP&PERFILPADRAO=1&IDIOMA=0&PERFILLOGIN=1" target="_blank" rel="noopener noreferrer">Cremer</a></p><p><a href="http://gpssa.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Grupo GPS (and other companies)</a></p><p><a href="http://grupohennings.gupy.io/" target="_blank" rel="noopener noreferrer">Grupo Hennings</a> </p><p><a href="https://grupokhronos.enlizt.me/" target="_blank" rel="noopener noreferrer">Grupo Khronos</a></p><p><a href="https://gruposegura.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Grupo Segura</a></p><p><a href="http://hemmer.natela.com.br/" target="_blank" rel="noopener noreferrer">Hemmer</a></p><p><a href="https://hob.med.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Hospital de Olhos de Blumenau</a></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=hsc&tenantdomain=hsc.com.br#!/vacancies/list" target="_blank" rel="noopener noreferrer">Hospital Santa Catarina</a></p><p><a href="http://www.santaisabel.com.br/vagas" target="_blank" rel="noopener noreferrer">Hospital Santa Isabel</a></p><p><a href="https://www.ipelpapel.com.br/faca-parte" target="_blank" rel="noopener noreferrer">IPEL - Indaial Papel</a></p><p><a href="https://jobs.kenoby.com/jamef/" target="_blank" rel="noopener noreferrer">Jamef Encomendas Urgentes</a></p><p><a href="https://karsten.gupy.io/" target="_blank" rel="noopener noreferrer">Karsten</a></p><p><a href="https://grupokyly.compleo.com.br/" target="_blank" rel="noopener noreferrer">Kyly</a></p><p><a href="http://lancaster.natela.com.br/pt_br/rh.cadastro.php" target="_blank" rel="noopener noreferrer">Lancaster</a> </p><p><a href="http://www.cristina.com.br/br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Malharia Cristina</a></p><p><a href="https://marisa.gupy.io/" target="_blank" rel="noopener noreferrer">Marisa</a></p><p><a href="http://www.marp.com.br/trabalheConosco.php" target="_blank" rel="noopener noreferrer">MARP Indústria Têxtil</a></p><p><a href="https://pamplonailuminacao.pandape.com.br/" target="_blank" rel="noopener noreferrer">Pamplona Iluminação</a></p><p><a href="https://www.plazahoteis.com.br/pt-br/fale-conosco/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Plaza Hoteis (Blumenau)</a></p><p><a href="https://www.protecbrasil.com/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Protec Brasil</a></p><p><a href="http://www.provolt.com.br/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Provolt Tecnologia Eletrônica</a></p><p><a href="https://sci.com.br/envie-seu-curriculo/?fbclid=PAAabn9PKz4jSdmFIye9dByXbezI3cCugN0ZSWFhVZ336XAbACPnH9njKC0UY" target="_blank" rel="noopener noreferrer">SCI Sistemas Contábeis</a></p><p><a href="https://segalas.com.br/trabalhe.php" target="_blank" rel="noopener noreferrer">Segala's Alimentos</a></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=senior&tenantdomain=senior.com.br&fromRecruitment=false#!/vacancies/list" target="_blank" rel="noopener noreferrer">Senior Sistemas</a></p><p><a href="http://www.redetop.com.br/vagas/" target="_blank" rel="noopener noreferrer">Supermercados Rede TOP</a></p><p><a href="http://www.teka.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Teka</a></p><p><a href="https://portal.uniasselvi.com.br/institucional/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Uniasselvi</a></p><p><a href="http://weg.net/institutional/BR/pt/career" target="_blank" rel="noopener noreferrer">Weg</a></p><p><a href="https://jobs.quickin.io/wksistemas/jobs" target="_blank" rel="noopener noreferrer">WK Sistemas</a></p><p><br></p><h3>Companies that accept resumes by e-mail</h3><p>Altona: <a href="mailto:recrutamento@altona.com.br" target="_blank" rel="noopener noreferrer">recrutamento@altona.com.br</a></p><p>Atacarejo Unibox Dinardelli: <a href="mailto:rhav@dinardelli.com.br" target="_blank" rel="noopener noreferrer">rhav@dinardelli.com.br</a></p><p>Avalon Têxtil: <a href="mailto:rh@avalontextil.com.br" target="_blank" rel="noopener noreferrer">rh@avalontextil.com.br</a></p><p>Blumob: <a href="mailto:rh@blumob.com.br" target="_blank" rel="noopener noreferrer">rh@blumob.com.br</a></p><p>Eurofios: <a href="mailto:selecao@eurofios.com.br" target="_blank" rel="noopener noreferrer">selecao@eurofios.com.br</a></p><p>Haco: <a href="mailto:rubia.cristovao@haco.com.br" target="_blank" rel="noopener noreferrer">rubia.cristovao@haco.com.br</a></p><p>Hidropar dedetização: <a href="mailto:contato@hidropar.com.br" target="_blank" rel="noopener noreferrer">contato@hidropar.com.br</a></p><p>Hospital Santa Isabel: <a href="mailto:recrutamento02@santaisabel.com.br" target="_blank" rel="noopener noreferrer">recrutamento02@santaisabel.com.br</a></p><p>Lupo (Shopping Neumarkt): <a href="mailto:gerente.luponeumarkt@hotmail.com" target="_blank" rel="noopener noreferrer">gerente.luponeumarkt@hotmail.com</a></p><p>Milium: <a href="mailto:recrutamento@milium.com.br" target="_blank" rel="noopener noreferrer">recrutamento@milium.com.br</a></p><p>Orbi Química: <a href="mailto:rh@orbiquimica.com.br" target="_blank" rel="noopener noreferrer">rh@orbiquimica.com.br</a></p><p>Segala's Alimentos: <a href="mailto:rh@segalas.com.br" target="_blank" rel="noopener noreferrer">rh@segalas.com.br</a> and <a href="mailto:marta.maba@segalas.com.br" target="_blank" rel="noopener noreferrer">marta.maba@segalas.com.br</a></p><p>Supermercados RedeTop: <a href="mailto:recrutamento@redetop.com.br" target="_blank" rel="noopener noreferrer">recrutamento@redetop.com.br</a></p><p>Têxtil HJHering: <a href="mailto:rh@hjhering.com.br" target="_blank" rel="noopener noreferrer">rh@hjhering.com.br</a></p><p><br></p><p>═══════════════✎═</p><blockquote>It is highly recommended to keep an updated profile on <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. If you don't know how to use it and need a job, it's a good time to learn. If you can get a free trial of LinkedIn Premium you can even take countless top-quality LinkedIn Learning courses without paying a cent.</blockquote><p><br></p><p>═══════════════✎═</p><blockquote>If you want to advertise an opportunity you can send it directly in the <a href="https://t.me/vilagermanica" target="_blank" rel="noopener noreferrer">Vila Germânica</a> group. If you'd like to see your ad here or in a pinned message, then use <a href="https://t.me/vilagermanicabot" target="_blank" rel="noopener noreferrer">@vilagermanicabot</a> or talk to one of the admins. To report an error or send suggestions and comments, use <a href="https://t.me/vilagermanicabot" target="_blank" rel="noopener noreferrer">@vilagermanicabot</a>.</blockquote><p><br></p><p>Last updated: 09/03/2022, at 7:01 PM GMT-3</p><p><br></p>`,
    },

},
};