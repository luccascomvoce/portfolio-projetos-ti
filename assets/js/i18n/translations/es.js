/**
 * Spanish (es) override dictionary.
 * Solo las claves que difieren del valor por defecto en pt-BR deben existir aquí.
 */
export default {
  meta: {
    title: `Luccas — Portafolio de Ingeniería de Software, Automatización y DevOps`,
    description: `Portafolio técnico de Luccas: proyectos de Ingeniería Inversa, Automatización de Procesos, Bots de Telegram, Web e Infraestructura Multi-Nube y Game Modding.`,
    ogTitle: `Luccas — Portafolio de Ingeniería de Software, Automatización y DevOps`,
    ogDescription: `Casos de estudio reales en Ingeniería Inversa de Android, Bots de Telegram, Automatización Cloud y Desarrollo Full-Stack.`,
    ogImageAlt: `Emblema del Portafolio de Luccas`,
    twitterTitle: `Luccas — Portafolio de Ingeniería de Software, Automatización y DevOps`,
    twitterDescription: `Casos de estudio reales en Ingeniería Inversa de Android, Bots de Telegram, Automatización Cloud y Desarrollo Full-Stack.`,
  },

  skipLink: `Saltar al contenido principal`,

  nav: {
    mainLabel: `Navegación Principal`,
    projects: `Proyectos`,
    articles: `Artículos`,
    brandTitle: `Luccas — Inicio`,
    brandAria: `Luccas — Página de inicio`,
    audio: {
      toggle: `Activar/Desactivar Sonidos de la Interfaz`,
      on: `Desactivar Sonidos de la Interfaz`,
      off: `Activar Sonidos de la Interfaz`,
      label: `Alternar efectos de sonido`,
    },
    theme: {
      toLight: `Cambiar a tema claro`,
      toDark: `Cambiar a tema oscuro`,
    },
  },

  lang: {
    label: `Cambiar idioma`,
  },

  hero: {
    avatarWrapperTitle: `Disponible para Automatización y Desarrollo`,
    avatarAlt: `Foto de Perfil de Luccas`,
    statusLabel: `Estado: Disponible para Automatización y Desarrollo`,
    presenceTooltip: `Disponible para Automatización y Desarrollo`,
    description: `Ingeniería de software orientada al alto rendimiento, infraestructura resiliente, descompilación de protocolos, automatización de rutinas críticas y soluciones a medida con costo operativo optimizado.`,
    scrollLabel: `Explorar Casos Técnicos`,
    scrollAria: `Explorar casos técnicos`,
    typewriter: [
      `Automatización de Procesos y DevOps`,
      `Ingeniería Inversa y Análisis de Protocolos`,
      `Bots de Telegram e Integraciones Asíncronas`,
      `Aplicaciones Web y Arquitecturas Multi-Nube`,
      `Game Modding y Optimización de Servidores`,
      `Automatización con PowerShell y Python`,
    ],
    social: {
      email: `Correo electrónico`,
      phone: `Teléfono`,
      emailTitle: `Correo electrónico (luccascomvoce@gmail.com)`,
      phoneTitle: `Teléfono (+55 47 98852-6046)`,
    },
  },

  categories: {
    all: `Todos`,
    scripts: `Scripts y SO`,
    bots: `Bots y Automatización`,
    web: `Web y Paneles`,
    re: `Ingeniería Inversa`,
    mods: `Game Mods`,
  },

showcase: {
    tag: `Vitrina Técnica`,
    title: `Proyectos y Casos de Estudio`,
    subtitle: `Soluciones estructuradas para automatización, infraestructura resiliente, APIs e ingeniería de software.`,
    searchPlaceholder: `Buscar por tecnología, nombre o palabra clave...`,
    searchAria: `Buscar proyectos por tecnología, nombre o palabra clave`,
    searchClear: `Limpiar búsqueda`,
    tabsLabel: `Filtrar proyectos por categoría`,
    gridLabel: `Lista de casos de estudio`,
    liveNone: `No se encontraron proyectos para los filtros actuales.`,
    liveFoundSingular: `1 proyecto encontrado.`,
    liveFoundPlural: `{n} proyectos encontrados.`,
    emptyTitle: `No se encontraron proyectos`,
    emptyText: `Intenta ajustar los términos de búsqueda o selecciona otra categoría.`,
    caseButton: `Ver Caso de Estudio`,
    caseAria: `Ver caso de estudio completo: {title}`,
  },

  modal: {
    overviewTitle: `Resumen y Caso de Estudio`,
    architectureTitle: `Arquitectura y Flujo Técnico`,
    specsTitle: `Especificaciones y Tecnologías`,
    colLayer: `Capa`,
    colTech: `Tecnología / Herramientas`,
    defaultCta: `Ver en Producción`,
    close: `Cerrar modal`,
    closeTitle: `Cerrar (Esc)`,
    articleClose: `Cerrar artículo`,
    articleCloseTitle: `Cerrar (Esc)`,
  },

  articles: {
    sectionTag: `Artículos y Publicaciones`,
    sectionTitle: `Lecturas e Insights Técnicos`,
    sectionSubtitle: `Análisis en profundidad, tutoriales de ingeniería de software, mensajería y ecosistemas open source.`,
    carouselLabel: `Carrusel de artículos e insights técnicos`,
    prevLabel: `Artículo anterior`,
    prevTitle: `Anterior`,
    nextLabel: `Artículo siguiente`,
    nextTitle: `Siguiente`,
    readTimeSuffix: `min de lectura`,
    readArticle: `Leer Artículo Completo`,
    goToArticle: `Ir al artículo {n}`,
  },

  footer: {
    brandDesc: `Ingeniería de automatización, interoperabilidad y arquitecturas de alta resiliencia para servidores y aplicaciones web modernas.`,
    navTitle: `Navegación`,
    home: `Inicio`,
    projectsLink: `Vitrina de Proyectos`,
    articlesLink: `Artículos y Publicaciones`,
    copyright: `© 2026 Luccas. Todos los derechos reservados.`,
  },

  projects: {
'engenharia-reversa': {
      title: `Ingeniería Inversa, Eliminación de Adware y Modificación de UI en una App Android IoT`,
      status: `Completado y Auditado`,
      summary: `Ingeniería inversa de una app Android IoT (V380/Cloudbirds) distribuida como Split APKs: erradicación total de la mediación autónoma de anuncios (TradPlus/Mintegral) mediante amputación Smali (return-void), supresión geométrica de upsell vía ViewBinding (0.0dip) y fusión en un APK Universal versionable.`,
      tags: [`Bytecode Smali`, `Apktool / JADX`, `Wireless ADB`, `Anti-Split APK`, `ViewBinding Patch`, `Uber APK Signer`],
      metrics: [
        { label: `Supresión de Adware`, value: `100% (return-void Smali)` },
        { label: `Preservación de ViewBinding`, value: `Refactorización 0.0dip` },
        { label: `Arquitectura`, value: `Fusión de APK Universal` },
      ],
      overview: `Caso de estudio real de ingeniería inversa en una app Android IoT de monitoreo de cámaras (V380/Cloudbirds). El proyecto consistió en erradicar por completo los anuncios de terceros y ocultar elementos intrusivos de monetización primaria (upsell de nube), preservando la estabilidad del ViewBinding y la integridad de la comunicación con los servidores de video.`,
      architecture: `<ul>
        <li><strong>Fase 1 (Bypass de Configuración):</strong> Análisis de reglas en <code>AppSettingSp</code> y comprobación de fallo por inicialización autónoma de SDKs de mediación (TradPlus, Pangle, Mintegral, AppLovin).</li>
        <li><strong>Fase 2 (Intercepción Dinámica vía Logcat):</strong> Telemetría mediante Wireless ADB para aislar el handshake del <code>YdSDK</code> y mapear las llamadas a <code>medproad.com</code>.</li>
        <li><strong>Fase 3 (Amputación en Smali):</strong> Vaciado e inyección de <code>return-void</code> en los despachadores <code>AdManager.smali</code> (<code>initAd</code> y <code>setAdConfig</code>), deteniendo la asignación de memoria y los accesos de red de los SDKs.</li>
        <li><strong>Fase 4 (Manipulación de UI Nativa y 0.0dip):</strong> Mapeo de IDs Hex en <code>public.xml</code> y refactorización de contenedores de ViewBinding a <code>0.0dip</code> y <code>gone</code>, evitando <code>NullPointerException</code> y eliminando pop-ups de upsell.</li>
        <li><strong>Fase 5 (Anti-Split y Control de Versiones):</strong> Fusión de los Split APKs (Base, ARM64, PT, XXHDPI) en un APK Universal con Apktool M y versionado Git para el mapeo continuo de diffs.</li>
      </ul>`,
      techTable: [
        { category: `Descompilación y Smali`, tech: `Apktool, JADX (Decompilador Java/Kotlin), VS Code` },
        { category: `Depuración y Logs`, tech: `Android Debug Bridge (Wireless ADB), Filtrado de Logcat` },
        { category: `Firma y Paquetes`, tech: `Uber APK Signer (V1/V2/V3), Apktool M (Fusión Anti-Split)` },
        { category: `Técnicas Aplicadas`, tech: `Hook Smali return-void, ViewBinding Dimensión Cero (0.0dip), Versionado Git` },
      ],
    },

    'script-minecraft-server-java': {
      title: `Automatización de Servidor Minecraft Java y Nube de Telegram`,
      status: `En Producción`,
      summary: `Orquestador en PowerShell y Python con shutdown gracioso de la JVM, consolidación de logs de auditoría, compresión temporal y sincronización de respaldos offsite en la nube vía MTProto de Telegram.`,
      tags: [`PowerShell 7+`, `Python Asyncio`, `Telethon`, `Disaster Recovery`, `Win32 CLI`],
      metrics: [
        { label: `Protocolo de Nube`, value: `API MTProto` },
        { label: `Shutdown`, value: `JVM Graciosa` },
        { label: `Entorno`, value: `Self-Bootstrapping` },
      ],
      overview: `Solución completa de orquestación para servidores dedicados Java, evitando la pérdida de datos por corrupción del mundo mediante rutinas automáticas de respaldo y sincronización offsite cifrada.`,
      architecture: `<ul>
        <li><strong>Orquestador CLI en PowerShell:</strong> Gestión de procesos de Java, consolidación de logs y compresión en un archivo ZIP con marca de tiempo.</li>
        <li><strong>Módulo Python Telethon:</strong> Creación automática del virtualenv y envío asíncrono del archivo de respaldo al almacenamiento en la nube de Telegram.</li>
        <li><strong>Disaster Recovery:</strong> Procedimiento automatizado de rollback con restauración limpia del directorio del mundo.</li>
      </ul>`,
      techTable: [
        { category: `Lenguajes`, tech: `PowerShell 7+, Python 3.10+ (Asyncio)` },
        { category: `Nube y API`, tech: `Telethon (Nube MTProto de Telegram)` },
        { category: `Infraestructura`, tech: `Disaster Recovery, Control de Procesos JVM, CLI UTF-8` },
        { category: `Arquitectura`, tech: `Virtualenv Self-Bootstrapping, Cero Dependencias` },
      ],
    },

'pagina-loja-piscinas': {
      title: `Landing Page Comercial y Showcase con Redundancia Multi-Nube`,
      status: `En Producción`,
      summary: `Plataforma web de alto rendimiento con catálogo JSON desacoplado, fuentes WOFF2 locales (Cero Dependencias Externas) y pipeline CI/CD con failover automático entre Vercel y GitHub Pages.`,
      tags: [`HTML5 / CSS3`, `Vanilla JS`, `Failover Multi-Nube`, `Vercel Edge`, `SEO Técnico`],
      metrics: [
        { label: `Costo Operativo`, value: `Cero (R$ 0,00)` },
        { label: `Redundancia`, value: `Vercel + GitHub Pages` },
        { label: `Tipografía`, value: `100% WOFF2 Local` },
      ],
      overview: `Landing page y catálogo interactivo de productos con arquitectura resiliente de alta disponibilidad, cero costo operativo de hospedaje y cumplimiento de privacidad.`,
      liveLabel: `Visitar el Sitio`,
      architecture: `<ul>
        <li><strong>Redundancia Multi-Nube:</strong> Despliegue automatizado vía GitHub Actions simultáneamente en el edge de Vercel y en GitHub Pages con failover de DNS.</li>
        <li><strong>Cero Dependencias Externas:</strong> Subsets WOFF2 locales eliminan las llamadas a fuentes de terceros, evitando FOIT/FOUT.</li>
        <li><strong>Showcase Data-Driven:</strong> Separación limpia entre la estructura HTML y los datos de productos en JSON, gestionados por un script Python de mantenimiento.</li>
      </ul>`,
      techTable: [
        { category: `Front-End`, tech: `HTML5 Semántico, CSS3 Moderno, JavaScript ES6+` },
        { category: `Infraestructura`, tech: `Vercel Edge Network, GitHub Pages, Failover Multi-Nube` },
        { category: `SEO y Optimización`, tech: `Sitemap dinámico, Robots.txt, WebP, Fuentes WOFF2` },
        { category: `Automatización`, tech: `Script Python de Actualización de Catálogo` },
      ],
    },

    'dashboard-gastos': {
      title: `Pipeline de Datos, AppSheet y Panel Financiero`,
      status: `Completado`,
      summary: `Arquitectura de datos en capas (Input > ETL > Relational Core > Output): app móvil no-code vía Google AppSheet, validación estricta de dominio, seguridad a nivel de fila (RLS) y telemetría de límites de crédito en tiempo real.`,
      tags: [`Google AppSheet`, `Data Pipeline (ETL)`, `Row-Level Security (RLS)`, `Google Sheets Relacional`, `Validación de Datos`, `Looker Studio / BI`],
      metrics: [
        { label: `Arquitectura`, value: `Pipeline de 4 Capas` },
        { label: `Seguridad de Acceso`, value: `Row-Level Security (RLS)` },
        { label: `Ingesta Móvil`, value: `UUIDs de Google AppSheet` },
      ],
      overview: `Sistema estructurado de gestión financiera y telemetría de gastos con tarjetas de crédito construido bajo el paradigma desacoplado de Pipeline de Datos (Input Móvil > Base de Datos Transaccional > Capa ETL > Panel Visual de KPIs).`,
      architecture: `<ul>
        <li><strong>1. Ingesta Móvil (Google AppSheet):</strong> Captura transaccional en el smartphone en el momento de la compra con generación de claves primarias (<code>ID-Transacao</code>) y validación estricta de categorías.</li>
        <li><strong>2. Capa Transaccional (Raw Storage):</strong> Tablas relacionales que almacenan los registros brutos y los parámetros de límite de crédito por tarjeta.</li>
        <li><strong>3. Capa ETL (DADOS TRATADOS):</strong> Agregación y enriquecimiento automatizado vía funciones relacionales (<code>QUERY</code>, <code>FILTER</code>, <code>SUMIF</code>), calculando el porcentaje de compromiso del límite en tiempo real.</li>
        <li><strong>4. Seguridad a Nivel de Fila (RLS):</strong> Filtrado dinámico basado en el e-mail del usuario autenticado y parámetros temporales seleccionados.</li>
        <li><strong>5. Panel Ejecutivo (DASHBOARD):</strong> Visualización interactiva de KPIs con evolución de gastos, distribución por centro de costo y salud financiera.</li>
      </ul>`,
      techTable: [
        { category: `Móvil e Input`, tech: `Google AppSheet (App Móvil No-Code), Dropdowns de Validación de Datos` },
        { category: `Almacenamiento y Relacional`, tech: `Google Sheets Relacional, Tablas AppSheet, Claves Primarias UUID` },
        { category: `ETL y Procesamiento`, tech: `Funciones Relacionales (QUERY, FILTER, ARRAYFORMULA, SUMIF)` },
        { category: `Seguridad y BI`, tech: `Row-Level Security (RLS), Looker Studio / Panel de KPIs` },
      ],
    },

'contratos-assinaturas': {
      title: `Automatización del Ciclo de Vida de Contratos (CLM) y Firma Digital`,
      status: `Completado`,
      summary: `Pipeline end-to-end de onboarding de clientes, validación de registro (BrasilAPI / OTP de 6 dígitos), aprobación con cuarentena, fusión dinámica de plantillas en Google Docs e integración con la API GraphQL de Autentique.`,
      tags: [`Google Apps Script (V8)`, `API GraphQL de Autentique`, `BrasilAPI (CNPJ)`, `OTP (Dos Factores)`, `API de Google Docs`, `Google Sheets Relacional`, `Google AppSheet`],
      metrics: [
        { label: `Ciclo de Cierre`, value: `De 3 días a 15 min` },
        { label: `Seguridad de Acceso`, value: `Tokens de Un Solo Uso + OTP` },
        { label: `Firma Electrónica`, value: `API GraphQL de Autentique` },
      ],
      overview: `Solución completa de Contract Lifecycle Management (CLM) con Web App responsiva de onboarding, validación de registro de CNPJ y CPF en tiempo real, capa de cuarentena para aprobación humana, generación dinámica de PDFs y envío de copias autenticadas vía Webhook.`,
      architecture: `<ul>
        <li><strong>1. Gatekeeper y Tokens de Un Solo Uso:</strong> Acceso restringido a enlaces con tokens de sesión (<code>?token=XYZ</code>) invalidados atómicamente tras el envío de datos, impidiendo ataques de replay.</li>
        <li><strong>2. Validación de Registro y OTP:</strong> Autollenado de datos de la empresa vía <code>BrasilAPI</code>, validación matemática de CPF (Módulo 11) y envío de código OTP de 6 dígitos por e-mail antes de liberar el envío.</li>
        <li><strong>3. Cuarentena y Defensa en Profundidad:</strong> Sanitización contra inyección de fórmulas (CSV Injection), preservación de ceros a la izquierda en CNPJs/CPFs y retención en cuarentena hasta la aprobación en Google Sheets o AppSheet.</li>
        <li><strong>4. Fusión Dinámica y Conversión a PDF:</strong> Clonación automática de plantillas de Google Docs, sustitución de variables (<code>&lt;&lt;Tag&gt;&gt;</code>) y exportación en PDF.</li>
        <li><strong>5. Autentique GraphQL y Webhook de Retorno:</strong> Creación de documentos en Autentique con posicionamiento visual de rúbricas/firmas ($X, Y, Z$) y un webhook (<code>doPost</code>) que archiva el PDF firmado en Drive y notifica a los firmantes.</li>
      </ul>`,
      techTable: [
        { category: `Frontend y Validación`, tech: `HTML5, Bootstrap 5, JavaScript Vanilla, REST de BrasilAPI, Validación Módulo 11 (CPF)` },
        { category: `Backend y Orquestador`, tech: `Google Apps Script (V8 Engine), doGet (Gatekeeper), doPost (Webhook)` },
        { category: `Generación de Documentos`, tech: `API de Google Docs, API de Google Drive, Conversión Automatizada a PDF` },
        { category: `Firma y Seguridad`, tech: `API GraphQL de Autentique v2, Tokens Descartables, Sistema OTP, AppSheet` },
      ],
    },

'mods-7dtd': {
      title: `Ingeniería de Software Avanzada y Modding en C# — 7 Days to Die`,
      status: `En Producción`,
      summary: `Suite de 7 modificaciones de alto rendimiento en C# (.NET / Unity Engine): inyección dinámica de bytecode vía Harmony, I/O asíncrono multihilo para el respaldo de saves, algoritmo O(1) anti-repetición de POIs, renderizador gráfico de vista previa, telemetría cartográfica y hotfix de deadlock en el HUD.`,
      tags: [`C# (.NET 4.8)`, `Harmony (Bytecode Detour)`, `Unity Engine / Mono`, `XUi / NGUI`, `Multithreading I/O`, `Reflection / AccessTools`, `Reverse Engineering`],
      metrics: [
        { label: `Inyección de Bytecode`, value: `Harmony Runtime Detours` },
        { label: `Rendimiento de I/O`, value: `Async Task.Run + Queue` },
        { label: `Complejidad de POI`, value: `O(1) HashSet Lookup` },
      ],
      overview: `Caso de estudio de ingeniería de software aplicada al modding de juegos en Unity Engine (7 Days to Die / The Fun Pimps). Desarrollo de una suite modular de 7 modificaciones en C# para resolver cuellos de botella de usabilidad (QoL), eliminar repeticiones en el ciclo procedural de misiones con complejidad O(1), proveer I/O asíncrono no bloqueante para saves voluminosos y corregir deadlocks de interfaz nativos vía reflexión en tiempo de ejecución.`,
      architecture: `<ul>
        <li><strong>1. Respaldo y Restauración Asíncrona (BackupSaves):</strong> Compresión Zip I/O en <code>Task.Run</code> desacoplada del Main Thread de Unity con despacho thread-safe vía <code>ConcurrentQueue&lt;Action&gt;</code> consumida en el hook de <code>Update()</code>.</li>
        <li><strong>2. Algoritmo Anti-Repetición Global O(1) (POIsNaoSeRepetem):</strong> Intercepción quirúrgica con Prefix Patch en <code>DynamicPrefabDecorator.ValidPrefabForQuest</code> consultando un <code>HashSet&lt;string&gt;</code> global y de sesión, ahorrando procesamiento de pathfinding.</li>
        <li><strong>3. Renderizador de Vista Previa (POIPreviaMissao):</strong> Raycasting de interfaz con <code>UICamera.hoveredObject</code> y carga no bloqueante de texturas de alta resolución vía Corutinas de Unity y <code>SdFile</code>.</li>
        <li><strong>4. Telemetría Cartográfica Espacial (MapaPOIsCompletados):</strong> Cálculo del centroide vectorial del Bounding Box e inyección de marcadores persistentes en <code>NavObjectManager</code> sincronizados en <code>EntityPlayerLocal.Awake()</code>.</li>
        <li><strong>5. Hub Cartográfico MVC de Misiones (MapaDeMissoes):</strong> Redirección de diálogos heredados a una ventana cartográfica interactiva (<code>XUiC_MM_QuestMapWindow</code>) con inyección dinámica de waypoints.</li>
        <li><strong>6. Sandbox en Zonas Comerciales (ProtecaoTrader):</strong> Sobrescritura atómica postfijada cubriendo todas las sobrecargas de validación física y AABB de la clase <code>World</code>.</li>
        <li><strong>7. Hotfix de Deadlock en el HUD (ResetaNotifBugada):</strong> Máquina de estados temporal (debounced) con inspección reflexiva vía <code>AccessTools</code> en campos privados de <code>XUiC_CollectedItemList</code> y drenaje inverso de la cola.</li>
      </ul>`,
      techTable: [
        { category: `Lenguaje y Runtime`, tech: `C# / .NET Framework 4.8, Mono Runtime, Unity Scripting Backend` },
        { category: `Inyección e Ingeniería Inversa`, tech: `Harmony (0Harmony.dll), dnSpy, JetBrains dotPeek, ILSpy` },
        { category: `Framework de UI y Engine`, tech: `XUi (basado en NGUI de 7DTD), UICamera Raycasting, Texture2D, NavObjectManager` },
        { category: `Concurrencia e I/O`, tech: `Task.Run Multithreading, ConcurrentQueue (Thread-Safe), System.IO.Compression` },
      ],
    },

'telegram-bot-precos': {
      title: `ADA Prices Bot — Agregación de Precios, Análisis Técnico y Alertas en Tiempo Real`,
      status: `En Producción`,
      summary: `Sistema asíncrono en Python 3.11/aiogram 3 para la agregación de cotizaciones en tiempo real de 8 exchanges (CEXs/DEXs), detección estadística de anomalías (Z-Score), cálculo de más de 24 indicadores técnicos (pandas-ta), generación de velas OHLCV y alertas personalizadas con soporte para 9 idiomas (incluido RTL).`,
      tags: [`Python 3.11`, `aiogram 3 (asyncio)`, `WebSockets / REST`, `pandas-ta / numpy`, `PostgreSQL / SQLAlchemy`, `Docker Hardening`, `Oracle Cloud (OCI)`],
      metrics: [
        { label: `Fuentes de Datos`, value: `8 CEXs / DEXs` },
        { label: `Indicadores Técnicos`, value: `24+ Indicadores` },
        { label: `Internacionalización`, value: `9 Idiomas (con RTL)` },
      ],
      overview: `Solución completa de ingeniería de software desarrollada para brindar cotizaciones en tiempo real, detección estadística de anomalías, análisis técnico automatizado y envío de alertas personalizadas para el ecosistema de criptoactivos de Cardano (ADA).`,
      liveLabel: `Abrir el Bot en Telegram`,
      architecture: `<ul>
        <li><strong>Ingesta Híbrida de Datos:</strong> Conexiones WebSockets de baja latencia (Binance, Bybit, Coinbase) combinadas con polling REST resiliente (Kraken, KuCoin, CoinGecko, CoinMarketCap, DexHunter).</li>
        <li><strong>Filtro Estadístico de Outliers (Z-Score):</strong> Algoritmo estadístico que descarta cotizaciones anómalas y almacena registros para auditoría en tiempo real.</li>
        <li><strong>Agregación OHLCV y Análisis Técnico:</strong> Generación de series temporales multi-timeframe y cálculo vectorizado de más de 24 indicadores con <code>pandas-ta</code>.</li>
        <li><strong>Motor de Alertas y FSM de Telegram:</strong> Constructor interactivo de alertas multi-condición en Telegram con soporte nativo para 9 idiomas y manejo de caracteres bidireccionales (RTL).</li>
        <li><strong>Hardening y Costo Cero:</strong> Contenedor Docker en sistema de archivos de solo lectura (<code>read_only: true</code>), límites estrictos de memoria y despliegue automatizado vía GitHub Actions en Oracle Cloud Infrastructure.</li>
      </ul>`,
      techTable: [
        { category: `Lenguaje y Framework`, tech: `Python 3.11, aiogram 3.25 (asyncio), aiohttp, websockets` },
        { category: `Data Engine y Análisis`, tech: `pandas 2.2, pandas-ta, numpy 1.26, Tenacity` },
        { category: `Base de Datos y ORM`, tech: `PostgreSQL 15 (Alpine), SQLite, SQLAlchemy 2.0 Async, Alembic` },
        { category: `Infraestructura y DevOps`, tech: `Docker Hardening (read-only, tmpfs, cap_drop), GitHub Actions CI/CD, Oracle Cloud (OCI)` },
      ],
    },

    'telegram-bot-noticias-blumenau': {
      title: `Automatización Serverless de Noticias y Pipeline RSS — Blumenau News`,
      status: `En Producción`,
      summary: `Pipeline serverless con dos subsistemas: un generador GitOps de feeds RSS 2.0 y catálogos JSON (Python / GitHub Actions / GitHub Pages) y un consumidor edge en Cloudflare Workers con deduplicación atómica vía Workers KV y difusión en Telegram.`,
      tags: [`Cloudflare Workers`, `Workers KV (Edge)`, `Python 3.12 (Scraping)`, `GitHub Actions GitOps`, `API de Telegram Bot`, `feedgen / RSS 2.0`],
      metrics: [
        { label: `Arquitectura`, value: `GitOps + Edge Serverless` },
        { label: `Deduplicación`, value: `Workers KV Atómico` },
        { label: `Costo Operativo`, value: `Cero (R$ 0,00)` },
      ],
      overview: `Solución completa de ingeniería para la agregación y distribución automatizada de noticias regionales y comunicados de organismos públicos en tiempo real en Telegram, operando 100% serverless con costo de infraestructura cero.`,
      liveLabel: `Abrir el Canal en Telegram`,
      architecture: `<ul>
        <li><strong>Subsistema 1 (rss-generator / Python):</strong> Scraping polimórfico de portales gubernamentales y de noticias con extracción de metatags OpenGraph, normalización de fechas en portugués, deduplicación en JSON y publicación de feeds RSS 2.0 vía GitHub Actions y GitHub Pages.</li>
        <li><strong>Subsistema 2 (cf-telegram-rss-worker / Cloudflare):</strong> Worker serverless ejecutado cada 15 minutos en el edge de Cloudflare, con consumo dinámico del catálogo, deduplicación atómica en Workers KV (<code>sent:link</code>), cascada de extracción de imágenes y envío a Telegram.</li>
        <li><strong>Resiliencia y Fallbacks:</strong> Manejo de fallos de imagen con fallback transparente de <code>sendPhoto</code> a <code>sendMessage</code> y control de throttling (máximo 3 ítems por ejecución).</li>
      </ul>`,
      techTable: [
        { category: `Edge y Serverless`, tech: `Cloudflare Workers (ES Modules), Workers KV, Cloudflare Cron Triggers` },
        { category: `Ingesta y Scraping`, tech: `Python 3.12, BeautifulSoup4, Requests, lxml, feedgen, python-dateutil` },
        { category: `Orquestación y CDN`, tech: `GitHub Actions (Cron 1h), Git-as-Database, GitHub Pages CDN` },
        { category: `Mensajería`, tech: `API de Telegram Bot (sendPhoto / sendMessage con escape HTML)` },
      ],
    },

'telegram-bot-games-hub': {
      title: `Telegram Games Hub — Plataforma Multijugador en Tiempo Real (TMA)`,
      status: `En Producción`,
      summary: `Plataforma distribuida de juegos multijugador (Póquer Texas Hold'em y UNO) en Telegram Mini Apps (TMA): backend reactivo orientado a eventos en Python 3.12 / FastAPI / WebSockets, autoridad estricta del servidor (Anti-Cheat), autenticación criptográfica HMAC-SHA256 y renderizado Canvas a 60 FPS.`,
      tags: [`Telegram Mini Apps (TMA)`, `Python 3.12 (FastAPI)`, `WebSockets (Tiempo Real)`, `HTML5 Canvas (60 FPS)`, `Auth HMAC-SHA256`, `PokerKit / FSM`, `SQLite WAL`, `Docker / Cloudflare Tunnels`],
      metrics: [
        { label: `Sincronización`, value: `WebSockets en Tiempo Real` },
        { label: `Renderizado`, value: `Canvas 60 FPS` },
        { label: `Seguridad`, value: `HMAC-SHA256 + Anti-Cheat` },
      ],
      overview: `Plataforma de entretenimiento multijugador de alto rendimiento en el ecosistema Telegram. Combina la practicidad de las Telegram Mini Apps (TMA) con un backend asíncrono orientado a eventos vía WebSockets para partidas síncronas de Póquer y UNO sin descargas externas.`,
      liveLabel: `Abrir el Hub en Telegram`,
      architecture: `<ul>
        <li><strong>1. Telegram Mini Apps y Canvas 60 FPS:</strong> Interfaz ligera en HTML5 Canvas y Vanilla JS con renderizado procedural de fieltro, cartas y feedback háptico, eliminando frameworks pesados.</li>
        <li><strong>2. Núcleo Reactivo y WebSockets (FastAPI):</strong> Enrutador de salas con heartbeat, desconexión graciosa e inicialización bajo demanda (lazy initialization) asignada solo con jugadores conectados.</li>
        <li><strong>3. Autoridad del Servidor y Anti-Cheat:</strong> Máscara de seguridad que oculta las cartas de los oponentes hasta el Showdown y validación del invariante físico de 108 cartas en el UNO.</li>
        <li><strong>4. Game Registry y Máquinas de Estado:</strong> Arquitectura desacoplada (patrones Registry y Factory) que permite enchufar nuevos juegos e IAs heurísticas concurrentes sin refactorizar el núcleo de red.</li>
        <li><strong>5. Seguridad Criptográfica y Observabilidad:</strong> Validación de identidad con HMAC-SHA256, sanitización LGPD/GDPR en logs JSON estructurados y 73 pruebas automatizadas (pytest).</li>
      </ul>`,
      techTable: [
        { category: `Backend y Conexiones`, tech: `Python 3.12, FastAPI (ASGI), Uvicorn, WebSockets Nativos, Pydantic v2, uv` },
        { category: `Telegram y Mini Apps`, tech: `aiogram v3, SDK de Telegram Mini Apps, Auth initData HMAC-SHA256, Inline Queries` },
        { category: `Lógica de Juegos e IA`, tech: `PokerKit (FSM Hold'em), Motor de UNO (108 cartas, regla estricta +4), Bots Heurísticos` },
        { category: `Frontend e Infra`, tech: `HTML5 Canvas API, Web Audio API, Haptic Feedback, SQLite WAL, Docker, Cloudflare Tunnels` },
      ],
    },

'listar-estrutura-diretorios': {
      title: `Generador de Estructura de Carpetas — Extensión Shell de Windows y CI/CD`,
      status: `En Producción`,
      summary: `El arte de la sobreingeniería para no volver a escribir comandos largos: hace lo mismo que '$txt = tree /f /a; $txt | Out-File ...; $txt | Set-Clipboard', pero con 1 clic en el menú contextual de Windows, DFS recursivo, blacklist inteligente de dependencias, binario ps2exe e instalador Inno Setup.`,
      tags: [`PowerShell 5.1/pwsh`, `Windows Shell API`, `Compilador ps2exe`, `Inno Setup (Pascal)`, `GitHub Actions`, `Algoritmo Tree DFS`],
      metrics: [
        { label: `Tiempo de Ejecución`, value: `< 1s (1 Clic)` },
        { label: `Privilegios`, value: `User-Scope (Sin UAC)` },
        { label: `Entrega Continua`, value: `GitHub Actions CI/CD` },
      ],
      overview: `<div class="modal-callout">
        💡 <strong>TL;DR y Humor de Ingeniería:</strong><br>
        <em>"Hace exactamente lo mismo que <code>$txt = tree /f /a; $txt | Out-File -Encoding utf8 .\\estrutura-da-pasta.txt; $txt | Set-Clipboard</code>, pero con la cúspide de la sobreingeniería vía el menú contextual del Explorador de Windows con 1 clic — porque recordar comandos de terminal con flags de encoding es opcional."</em>
      </div>
      Utilidad de productividad integrada de forma nativa en el menú contextual del Explorador de Windows (nodos <code>Directory</code> y <code>Directory\\Background</code>). Elimina la fricción de documentar repositorios y generar prompts para LLMs mapeando directorios de forma recursiva, aplicando blacklisting de dependencias y alimentando el portapapeles de Windows al instante.`,
      liveLabel: `Ver el Repositorio en GitHub`,
      architecture: `<ul>
        <li><strong>1. Integración Shell sin UAC:</strong> Registro en la colmena <code>HKEY_CURRENT_USER\\Software\\Classes</code> para ejecución con <code>%1</code> (carpeta seleccionada) y <code>%V</code> (fondo del Explorador abierto).</li>
        <li><strong>2. Algoritmo Get-Tree (DFS):</strong> Recorrido recursivo con <code>-LiteralPath</code> para soportar caracteres especiales, orden de directorios antes que archivos y renderizado determinista de conectores (<code>|-- </code> y <code>\\-- </code>).</li>
        <li><strong>3. Filtrado de Ruido en Memoria:</strong> Supresión automática de carpetas voluminosas (<code>.git</code>, <code>node_modules</code>, <code>.venv</code>) y autoexclusión del script en ejecución.</li>
        <li><strong>4. Salida Doble con Fallback:</strong> Escritura directa en disco en el archivo <code>estrutura-da-pasta.txt</code> (UTF-8) e inyección en el portapapeles con fallback automático a <code>clip.exe</code>.</li>
        <li><strong>5. Pipeline DevOps e Inno Setup:</strong> Transpilación del script a un ejecutable autónomo (<code>ps2exe -noConsole</code>), instalador Pascal y publicación continua de releases en GitHub Actions.</li>
      </ul>`,
      techTable: [
        { category: `Scripting y Engine`, tech: `PowerShell (5.1 / pwsh), Windows Batch (.cmd), Pascal Scripting` },
        { category: `Sistema y Shell`, tech: `Windows Registry API (HKCU), Context Menu Extensions (%1 y %V), Set-Clipboard, clip.exe` },
        { category: `Compilación y Empaquetado`, tech: `ps2exe (PowerShell a Win32 EXE), Inno Setup 6 (ISCC Compiler)` },
        { category: `DevOps y CI/CD`, tech: `GitHub Actions (windows-latest), Versionado Cronológico de Release` },
      ],
    },
  },
};