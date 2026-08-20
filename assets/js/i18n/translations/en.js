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
};