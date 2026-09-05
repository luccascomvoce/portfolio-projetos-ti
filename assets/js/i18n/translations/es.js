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

    'telegram-bot-calculadora': {
      title: `Quantoebot — Bot de Calculadora Inline, Motor RPN & Rate Limiting`,
      status: `En Producción`,
      summary: `Bot de Telegram 100% inline (@quantoebot expresión) para evaluación matemática de alta precisión (28 dígitos Decimal), parsing RPN (Shunting-yard), desambiguación de porcentajes humanos, protección DoS con Sliding Window Rate Limiting y observabilidad asíncrona.`,
      tags: [`Python 3.12 (aiogram 3)`, `Shunting-Yard / RPN`, `Sliding Window Rate Limit`, `Pydantic Settings`, `FastAPI / Uvicorn`, `Docker Multi-Stage`, `Terraform / Ansible`],
      metrics: [
        { label: `Precisión Numérica`, value: `28 Dígitos (Decimal)` },
        { label: `Protección DoS`, value: `Sliding Window + Drop` },
        { label: `Operación`, value: `100% Inline Query` },
      ],
      overview: `Bot de Telegram de alto rendimiento y precisión matemática operando 100% en modo inline (<code>@quantoebot expresion</code>) en cualquier chat sin requerir membresía en grupos. Desarrollado en Python asíncrono con aiogram 3, cuenta con motor propio de parsing y evaluación matemática sin dependencias externas (utilizando <code>decimal.Decimal</code> con 28 dígitos de precisión), soporte para precedencia estricta y asociatividad a la derecha, radicación encadenada, factoriales y porcentajes contextualizados por AST. Incluye subsistema de configuración tipado y validado en el arranque vía Pydantic Settings, protección perimetral contra DoS con algoritmo de Ventana Deslizante en memoria (silent drop) y telemetría estructurada de logs.`,
      liveLabel: `Probar el Bot en Telegram`,
      architecture: `<ul>
        <li><strong>1. Parsing Léxico & AST de Porcentajes:</strong> Normalización de operadores y superíndices Unicode (<code>2²</code>, <code>10⁻³</code>), tokenización con detección automática de convención numérica (punto/coma decimal) y desambiguación contextual de porcentajes con reglas aritméticas humanas (<code>a ± X% = a ± a*(X/100)</code> vs. módulo <code>15%2</code>).</li>
        <li><strong>2. Motor RPN & Shunting-yard Asíncrono:</strong> Conversión infija a Notación Polaca Inversa con precedencia estricta y asociatividad a la derecha para potencias/raíces (<code>2^3^2 = 512</code>), evaluación con precisión contable de 28 dígitos con <code>decimal.Decimal</code> y límites de seguridad (factorial ≤ 1000, exponente ≤ 10000).</li>
        <li><strong>3. Protección DoS con Sliding Window Limiter:</strong> Middleware perimetral en aiogram con algoritmo de ventana deslizante en memoria (15 req/10s por usuario), caché limitada a 10.000 usuarios con expulsión LRU en dos fases, bypass para administradores y <em>silent drop</em> sin consumo de tráfico de salida.</li>
        <li><strong>4. Subsistema de Configuración Tipado (Pydantic Settings):</strong> Centralización singleton mediante <code>BaseSettings</code> con más de 20 variables, validación estricta en tiempo de arranque, coerción de tipos para listas y enteros, y normalización automática de niveles de log y cadenas.</li>
        <li><strong>5. Observabilidad & Miniaturas Dinámicas:</strong> Logs estructurados en formato JSON con Trace IDs, despacho de alertas administrativas con control de saturación (throttling), endpoints de healthcheck con FastAPI/Uvicorn y renderizado adaptativo de miniaturas con fallback encadenado (QuickChart local &gt; QuickChart API &gt; placehold.co).</li>
      </ul>`,
      techTable: [
        { category: `Lenguaje y Framework`, tech: `Python 3.12+, aiogram 3.15+ (asyncio), FastAPI, Uvicorn, uv` },
        { category: `Parsing y Matemática`, tech: `Shunting-yard (RPN), AST de Porcentajes, decimal.Decimal (28 dígitos), Normalizador Unicode` },
        { category: `Seguridad y Config`, tech: `Sliding Window Rate Limiter, Bounded Cache LRU, Pydantic Settings, Validación .env` },
        { category: `DevOps y Monitoreo`, tech: `Docker Multi-stage, Terraform (OCI Always Free), Ansible Vault, Structured JSON Logger` },
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

  articleContents: {
'telegram-ou-telegrams': {
      title: `¿Telegram o Telegrams?`,
      category: `Ecosistema Open Source`,
      summary: `Descubre el ecosistema de clientes oficiales y alternativos de Telegram, qué define a un cliente en la práctica y las mejores opciones para Android, iOS y Desktop.`,
      tags: [`Telegram`, `Open Source`, `TDLib`, `Clientes`],
      date: `11 de julio de 2020`,
      body: `
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/02b5ea31d0d4110b32fcb.jpg" alt="¿Telegram o Telegrams?" loading="lazy">
    </figure>

    <p>Seguro que ya has oído hablar de Telegram: un mensajero multiusos centrado en la velocidad y la seguridad, que ya usan más de <a href="https://www.mobiletime.com.br/noticias/14/08/2023/telegram-chega-a-800-milhoes-de-usuarios-e-lanca-o-seu-stories/" target="_blank" rel="noopener noreferrer">800 millones de personas</a>.</p>

    <p>Pero lo que quizá no sabes es que, en realidad, hay varios "Telegrams" en el mercado. Y no, no son <strong>mods</strong> ni copias <strong>piratas</strong> para robar tus datos. Son apps alternativas legítimas cuya creación y desarrollo son aprobados e incluso incentivados por el Telegram "original".</p>

    <h3>¿Qué son los clientes?</h3>

    <p>Si miras con atención tu tienda de apps, notarás que algunas aplicaciones tienen una versión "lite", más económica que la app principal. Ejemplos de ello son Facebook y Facebook Lite, Uber y Uber Lite, y otras.</p>

    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/cff7ed4926d90ab6a3d44.jpg" alt="Google Maps y Go" loading="lazy">
      <figcaption>Google Maps es una de las apps que tiene versiones más pequeñas, pensadas para dispositivos con hardware limitado</figcaption>
    </figure>

    <p>Esa app alternativa (y la principal también) es lo que llamamos "cliente" y puede ser oficial o no. X/Twitter, por ejemplo, muestra el cliente que el usuario estaba usando cuando publicó algo.</p>

    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/19feb7889de52594e9674.png" alt="Clientes de Twitter" loading="lazy">
      <figcaption>X/Twitter tiene varios clientes para varias plataformas</figcaption>
    </figure>

    <p>Son varias aplicaciones con la misma función: conectarse a los servicios de Twitter. Por lo tanto, son clientes de Twitter.</p>

    <blockquote>Un cliente es una aplicación, oficial o no, que puede acceder a un servidor.</blockquote>

    <p>¿Lo entendiste? Una aplicación es un cliente. Y no necesariamente tiene que ser el único ni el mejor para ti. Muchas personas que usan WhatsApp, por ejemplo, prefieren instalar versiones modificadas (como GB WhatsApp) para disfrutar de funciones adicionales que el WhatsApp oficial no tiene. Pero ese es tema para más adelante...</p>

    <h3>¿Cuándo usar un cliente alternativo?</h3>

    <p>Bueno, la respuesta más coherente es: cuando haya necesidad. Si estás usando la app oficial y no echas nada de menos, entonces todo está bien. Quédate donde estás. Ahora, puede ser una buena idea probar soluciones alternativas si necesitas:</p>

    <ol>
      <li>Una app más ligera;</li>
      <li>Más funciones y configuraciones;</li>
      <li>Usar otra plataforma.</li>
    </ol>

    <h3>Los clientes de Telegram</h3>

    <p>En el <a href="https://telegram.org/apps" target="_blank" rel="noopener noreferrer">sitio oficial</a> del mensajero podemos encontrar clientes oficiales para varias plataformas, como smartphones Android, iPhones y iPads, Windows, Linux, clientes web, entre otras.</p>

    <p>Sin embargo, los clientes listados allí no son los únicos. Telegram incentiva la creación de apps alternativas basadas en su código, e incluso <a href="https://www.sammobile.com/2015/09/15/samsung-launches-socializer-messenger-app-for-android-that-is-based-on-telegram/amp/" target="_blank" rel="noopener noreferrer">Samsung</a> ya creó su propio "telegram".</p>

    <p>La gran ventaja de este modelo es que se pueden añadir muchas funciones interesantes. Podrías decidir crear un "telegram" inspirado en unicornios coloridos para la comunicación interna de tu empresa, personalizándolo con funciones dedicadas y acciones automatizadas. En apariencia, será exclusivo. Pero entre bambalinas estará usando la infraestructura de Telegram para funcionar.</p>

    <h4>Telegram (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/cec55a45c45bfee33fc0c.jpg" alt="Telegram Android" loading="lazy">
    </figure>
    <p>Es sin duda el más famoso de todos, junto con el Telegram para iOS. Quizá solo sea menos famoso que el viejo ZapZap (<em>sí, ZapZap era un "telegram" brasileño</em>), muy popular hace un tiempo. Es el principal resultado de las búsquedas y lo que todos instalan la primera vez.</p>
    <blockquote>¿Es oficial? <strong>Sí</strong> | ¿Es de código abierto? <a href="https://github.com/DrKLO/Telegram" target="_blank" rel="noopener noreferrer">Sí</a></blockquote>

    <h4>Telegram (iOS)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/232eac324eed8536d6c35.jpg" alt="Telegram iOS" loading="lazy">
    </figure>
    <p>El Telegram para iOS que tenemos hoy es una creación reciente, Challegram, fruto de un concurso para desarrolladores. Durante un tiempo ambas apps estuvieron disponibles para descargar, hasta que el código del original fue sustituido por el de Challegram.</p>
    <blockquote>¿Es oficial? <strong>Sí</strong> | ¿Es de código abierto? <a href="https://github.com/TelegramMessenger/Telegram-iOS" target="_blank" rel="noopener noreferrer">Sí</a></blockquote>
<h4>Telegram X (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/805e96e38c7bb6a05af48.jpg" alt="Telegram X" loading="lazy">
    </figure>
    <p>Fue el ganador de un concurso para desarrolladores, escrito desde cero (usando la recién lanzada TDLib) con el objetivo de ser más rápido y eficiente, una especie de "Telegram Lite". De hecho, es la app de Android con las mayores velocidades de descarga y subida.</p>
    <blockquote>¿Es oficial? <strong>Sí</strong> | ¿Es de código abierto? <a href="https://github.com/TGX-Android/Telegram-X" target="_blank" rel="noopener noreferrer">Sí</a></blockquote>

    <h4>Plus Messenger (Android)</h4>
    <p>El primer cliente no oficial de nuestra lista, es uno de los más populares en Android, con temas propios y un buen conjunto de ajustes. Suele ser la mejor opción para quienes se estrenan en clientes alternativos.</p>
    <blockquote>¿Es oficial? <strong>No</strong> | ¿Es de código abierto? <strong>No</strong> | <a href="https://play.google.com/store/apps/details?id=org.telegram.plus" target="_blank" rel="noopener noreferrer">Ver en Play Store</a></blockquote>

    <h4>Nicegram (iOS y Android)</h4>
    <p>Hoy es uno de los únicos clientes no oficiales que funcionan en iPhones, con herramientas dedicadas y una interfaz refinada.</p>
    <blockquote>¿Es oficial? <strong>No</strong> | ¿Es de código abierto? <strong>No</strong> | <a href="https://apps.apple.com/br/app/nicegram/id1457369322" target="_blank" rel="noopener noreferrer">Ver en App Store</a></blockquote>

    <h4>Vidogram (iOS y Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/ef672783ffa4210522268.jpg" alt="Vidogram" loading="lazy">
    </figure>
    <p>El primer cliente en ofrecer IPTV, lives y videollamadas grupales (incluso antes que el Telegram oficial). Tiene sus propios juegos y funciones de streaming.</p>
    <blockquote>¿Es oficial? <strong>No</strong> | ¿Es de código abierto? <strong>No</strong> | <a href="https://play.google.com/store/apps/details?id=org.vidogram.messenger" target="_blank" rel="noopener noreferrer">Ver en Play Store</a></blockquote>

    <h4>Unigram (Windows 10/11, Xbox)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/8dea2522e8c95b840f33a.jpg" alt="Unigram" loading="lazy">
      <figcaption>Unigram lleva al escritorio todas las principales funciones del Telegram móvil, como los chats secretos.</figcaption>
    </figure>
    <p>Basado en TDLib, la experiencia está diseñada para encajar perfectamente en Windows 11, e incluso fue elegido por Windows Center como la mejor app social de la Microsoft Store.</p>
    <blockquote>¿Es oficial? <strong>(Todavía) No</strong> | ¿Es de código abierto? <a href="https://github.com/UnigramDev/Unigram" target="_blank" rel="noopener noreferrer">Sí</a> | <a href="https://www.microsoft.com/store/apps/9n97zckpd60q" target="_blank" rel="noopener noreferrer">Ver en Microsoft Store</a></blockquote>

    <h4>iMe Messenger (Android, iOS y Desktop)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/ad127aa20f60f4359636e.jpg" alt="iMe Messenger" loading="lazy">
    </figure>
    <p>Potente cliente multiplataforma con herramientas centradas en Inteligencia Artificial, traducción en tiempo real y funciones integradas de monedero digital, disponible para Android, iOS y Desktop.</p>
    <blockquote>¿Es oficial? <strong>No</strong> | ¿Es de código abierto? <a href="https://github.com/imemessenger/" target="_blank" rel="noopener noreferrer">Sí</a> | <a href="https://imem.app/" target="_blank" rel="noopener noreferrer">Sitio oficial</a></blockquote>
<h4>TurboTel (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/c736375f4c681b6bf062a.jpg" alt="TurboTel" loading="lazy">
      <figcaption>Capturas de pantalla de TurboTel</figcaption>
    </figure>
    <p>Uno de los clientes más avanzados en Android en cuanto a configuraciones granulares, descargas turbo y gestor de pestañas.</p>
    <blockquote>¿Es oficial? <strong>No</strong> | ¿Es de código abierto? <strong>No</strong> | <a href="https://play.google.com/store/apps/details?id=ellipi.messenger" target="_blank" rel="noopener noreferrer">Ver en Play Store</a></blockquote>

    <h4>Nanogram (watchOS)</h4>
    <p>Telegram tiene una versión oficial para Apple Watch, pero necesita tener el iPhone cerca. Nanogram es un cliente independiente que resuelve ese problema y funciona de forma autónoma en el reloj.</p>
    <blockquote>¿Es oficial? <strong>No</strong> | ¿Es de código abierto? <strong>No</strong> | <a href="https://apps.apple.com/br/app/nanogram-messenger-for-watch/id1574130405" target="_blank" rel="noopener noreferrer">Ver en App Store</a></blockquote>

    <hr>

    <h3>Lista rápida de los principales clientes</h3>
    <ul>
      <li><strong>Desktop:</strong> <a href="https://desktop.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram Desktop (Oficial)</a>, <a href="https://macos.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram macOS (Oficial)</a>, <a href="https://github.com/UnigramDev/Unigram" target="_blank" rel="noopener noreferrer">Unigram</a>, <a href="http://imem.app/desktop" target="_blank" rel="noopener noreferrer">iMe Desktop</a>, <a href="https://t.me/kotatogram" target="_blank" rel="noopener noreferrer">Kotatogram</a>.</li>
      <li><strong>Android:</strong> <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger" target="_blank" rel="noopener noreferrer">Telegram (Oficial)</a>, <a href="https://play.google.com/store/apps/details?id=org.thunderdog.challegram" target="_blank" rel="noopener noreferrer">Telegram X (Oficial)</a>, <a href="https://play.google.com/store/apps/details?id=org.telegram.plus" target="_blank" rel="noopener noreferrer">Plus Messenger</a>, <a href="https://play.google.com/store/apps/details?id=tw.nekomimi.nekogram" target="_blank" rel="noopener noreferrer">Nekogram</a>, <a href="https://play.google.com/store/apps/details?id=ellipi.messenger" target="_blank" rel="noopener noreferrer">TurboTel</a>, <a href="https://play.google.com/store/apps/details?id=org.vidogram.messenger" target="_blank" rel="noopener noreferrer">Vidogram</a>.</li>
      <li><strong>iOS:</strong> <a href="https://apps.apple.com/br/app/telegram-messenger/id686449807" target="_blank" rel="noopener noreferrer">Telegram iOS (Oficial)</a>, <a href="https://apps.apple.com/br/app/nicegram/id1457369322" target="_blank" rel="noopener noreferrer">Nicegram</a>, <a href="https://apps.apple.com/us/app/ime-messenger-crypto-wallet/id1450480822" target="_blank" rel="noopener noreferrer">iMe iOS</a>, <a href="https://apps.apple.com/ae/app/vidogram/id1528004676" target="_blank" rel="noopener noreferrer">Vidogram iOS</a>.</li>
      <li><strong>Web:</strong> <a href="https://web.telegram.org/k" target="_blank" rel="noopener noreferrer">Telegram Web K</a>, <a href="https://web.telegram.org/z" target="_blank" rel="noopener noreferrer">Telegram Web Z</a>.</li>
    </ul>

    <h3>Observaciones y seguridad</h3>
    <p>Aunque la gran mayoría de los clientes de Telegram son maduros y respetables, nunca confíes en apps de origen desconocido. Prefiere siempre clientes de código abierto auditables o las opciones oficiales disponibles en el sitio del mensajero.</p>
  `,
    },

'apps-torrent': {
      title: `Mejores y peores aplicaciones para descargar torrents`,
      category: `Software y Protocolos`,
      summary: `Un análisis crítico de seguridad y rendimiento entre clientes P2P.`,
      tags: [`BitTorrent`, `qBittorrent`, `Open Source`, `P2P`, `Seguridad`],
      date: `27 de diciembre de 2022`,
      body: `<figure><img src="assets/images/artigos/apps-torrent/f9997ce24f0075e56374b.jpg" alt="Imagen" loading="lazy"></figure><p>Los torrents forman parte del día a día de muchas personas desde hace décadas. Creado en 2001, el protocolo BitTorrent se usa hasta hoy para descargar y subir los más diversos tipos de archivos. Conoce ahora algunas aplicaciones para aprovechar los beneficios de esta tecnología.</p><blockquote>Un torrent es un archivo que contiene los metadatos usados por el protocolo BitTorrent para permitir el intercambio descentralizado de archivos. </blockquote><hr><p><br></p><h3>uTorrent, la peor opción posible</h3><figure><img src="assets/images/artigos/apps-torrent/80536c017dc3aa0651a3e.jpg" alt="Pantalla principal de uTorrent en la versión 3.4.9 en Windows, con anuncios en la esquina inferior izquierda y en la parte superior" loading="lazy"><figcaption>Pantalla principal de uTorrent en la versión 3.4.9 en Windows, con anuncios en la esquina inferior izquierda y en la parte superior</figcaption></figure><blockquote>🟢 Es gratuito
🔴 Código cerrado
🔴 Tiene anuncios
🌐 Disponible <a href="https://www.utorrent.com/" target="_blank" rel="noopener noreferrer">aquí</a> para Windows, macOS, GNU/Linux y Android</blockquote><p>Lanzado en 2005, es posiblemente el más famoso de esta lista, gracias a su pasado glorioso como uno de los mejores clientes BitTorrent. Hoy dista mucho de ser la mejor opción. Hace pocos años fue descubierto aprovechándose del hardware de los usuarios para minar criptomonedas.</p><blockquote><a href="https://www.tecmundo.com.br/torrent/76100-malandragem-utorrent-usando-pc-minerar-bitcoins.htm" target="_blank" rel="noopener noreferrer">¡Qué astucia! uTorrent se aprovecha del hardware de los usuarios para minar criptomonedas</a></blockquote><p>Ya durante la instalación, uTorrent no oculta que es una app abusiva, induciendo al usuario a instalar software no deseado. Por eso, si quieres probar la app, presta mucha atención a los detalles para no instalar nada que no quieras. Al terminar la instalación, uTorrent abre dos pestañas del navegador para mostrar publicidad, dando inicio a una experiencia llena de anuncios molestos. De hecho, esa característica ya fue explotada para instalar virus en las computadoras de los usuarios.</p><blockquote><a href="https://www.tecmundo.com.br/torrent/116787-alerta-voce-precisa-desinstalar-utorrent-computador.htm" target="_blank" rel="noopener noreferrer">uTorrent está usando un exploit de Flash vía anuncios para instalar malware en las computadoras</a></blockquote><p>Por lo tanto, uTorrent no tiene un buen historial en lo que respecta a transparencia y respeto al usuario, ya que fue usado para hackear las computadoras de los usuarios e incluso ya se aprovechó del hardware de los usuarios para minar criptomonedas. </p><blockquote><a href="https://www.techtudo.com.br/noticias/2018/02/utorrent-tem-falha-grave-e-permite-que-hacker-assuma-o-controle-do-pc.ghtml" target="_blank" rel="noopener noreferrer">uTorrent tiene una falla grave que permite que un hacker tome el control del PC</a></blockquote><p>Además, por ser una app de código cerrado e índole dudosa, no se recomienda en esta lista.</p><p></p><hr><p><br></p><h3>BitTorrent, el uTorrent 2</h3><figure><img src="assets/images/artigos/apps-torrent/f39862098d55fb3b44817.jpg" alt="Pantalla principal de BitTorrent 7.10.5 en Windows. Es el mismo uTorrent, pero con otro nombre." loading="lazy"><figcaption>Pantalla principal de BitTorrent 7.10.5 en Windows. Es el mismo uTorrent, pero con otro nombre.</figcaption></figure><blockquote>🟢 Es gratuito
🔴 Código cerrado
🔴 Tiene anuncios
🌐 Disponible aquí para Windows, macOS, GNU/Linux y Android</blockquote><p></p><p>Creado en 2001 por el propio creador del protocolo (<a href="https://en.m.wikipedia.org/wiki/BitTorrent_(software)" target="_blank" rel="noopener noreferrer">Bram Cohen</a>), BitTorrent fue naturalmente la primera aplicación en implementar esta tecnología. Hasta la versión 5.30, se le conoce como BitTorrent Mainline por haberse mantenido como un proyecto de código abierto. En 2004 Bram Cohen creó la empresa Bit Torrent Inc. En 2006, esa empresa compró uTorrent por un precio no divulgado. Y en 2007, en la práctica, la aplicación BitTorrent original fue abandonada y pasó a ser solo una versión renombrada de uTorrent. Con eso, pasó a tener código cerrado. </p><figure><img src="assets/images/artigos/apps-torrent/76a882d3236eb035ceb60.jpg" alt="La misma empresa mantiene las dos aplicaciones" loading="lazy"><figcaption>La misma empresa mantiene las dos aplicaciones</figcaption></figure><p>Hoy, BitTorrent tiene un token utilitario (BTT) basado en la blockchain Tron. Ese token es la base de un mercado colaborativo que busca expandir las posibilidades de uso del protocolo. Sin embargo, el funcionamiento de ese ecosistema es oscuro y poco transparente, recomendado solo para los más curiosos y compulsivos.</p><blockquote>BitTorrent, hoy, es el mismo uTorrent, pero con otro nombre. En la práctica, son lo mismo, controlados por la misma empresa.</blockquote><p><br></p><hr><p><br></p><h3>BitComet, el veterano </h3><figure><img src="assets/images/artigos/apps-torrent/f3a7f3be75452cda24670.jpg" alt="Pantalla principal de BitComet 1.98 en Windows" loading="lazy"><figcaption>Pantalla principal de BitComet 1.98 en Windows</figcaption></figure><blockquote>🟢 Es gratuito
🔴 Código cerrado
🟢 No tiene anuncios
🌐 Disponible <a href="https://www.bitcomet.com/en/downloads" target="_blank" rel="noopener noreferrer">aquí</a> para Windows, macOS y Android.</blockquote><p></p><p>Con su primera versión lanzada en 2003, está en la lista por respeto a ser uno de los clientes BitTorrent más antiguos del mercado. Lamentablemente, de forma similar a uTorrent, durante la instalación BitComet induce al usuario a instalar software no deseado. Mantenido por un grupo chino de desarrolladores, el punto positivo es que no tiene anuncios dentro de la app y ofrece un gran conjunto de herramientas. </p><p>Definitivamente NO es nuestra mejor recomendación. BitComet nunca tuvo muy buena fama debido a ciertos problemas encontrados en la aplicación. Ciertas acciones del equipo de desarrolladores también hicieron que la app perdiera el respeto de la comunidad.</p><p></p><hr><p><br></p><h3>Deluge, el abuelo </h3><figure><img src="assets/images/artigos/apps-torrent/fac9cdfb86e767fce8801.jpg" alt="Pantalla principal de Deluge en Windows" loading="lazy"><figcaption>Pantalla principal de Deluge en Windows</figcaption></figure><blockquote>🟢 Es gratuito
🟢 Código abierto
🟢 No tiene anuncios
🌐 Disponible <a href="https://www.deluge-torrent.org/" target="_blank" rel="noopener noreferrer">aquí</a> para Windows, macOS y GNU/Linux</blockquote><p></p><p>Este es otro veterano del área, lo que ya es evidente al acceder al sitio. No sería sorpresa que el sitio fuera el mismo de 2007, año en que se lanzó Deluge. Pero, si consigues superar el trauma generado por esa primera impresión, el diseño de la aplicación es impresionantemente limpio. Aun así, tiene un buen conjunto de configuraciones. Una pena que no tenga soporte para el idioma portugués. Debe agradar a los usuarios hardcore que gustan de terminales y líneas de comando.</p><p></p><hr><p><br></p><h3>Vuze, el olor a manzana </h3><figure><img src="assets/images/artigos/apps-torrent/df13dd36b4cd164ceb575.jpg" alt="Pantalla principal de Vuze en Windows" loading="lazy"><figcaption>Pantalla principal de Vuze en Windows</figcaption></figure><blockquote>🟢 Es gratuito
🔴 Código cerrado
🔴 Tiene anuncios
🌐 Disponible <a href="https://www.vuze.com/download.php" target="_blank" rel="noopener noreferrer">aquí</a> para Windows, macOS, GNU/Linux y Android</blockquote><p></p><p>Gratuito y con una interfaz inspirada en macOS, durante la instalación Vuze ofrece algunos componentes, como la integración con iTunes. Todos los complementos vienen marcados por defecto, pero con un poco de atención y algunos clics es posible evitar instalarlos. La aplicación también muestra anuncios, aunque de forma mucho más sutil que uTorrent y BitTorrent.</p><p>El diferencial aquí parece estar en la posibilidad de descubrir contenido dentro de la propia aplicación, lo que no debería convencer a la gran mayoría de los usuarios que ya saben lo que quieren descargar.</p><p></p><hr><p><br></p><h3>Web Torrent, el minimalista</h3><figure><img src="assets/images/artigos/apps-torrent/e173081a7a048d4331016.jpg" alt="Pantalla principal de Web Torrent 0.24.0 en Windows" loading="lazy"><figcaption>Pantalla principal de Web Torrent 0.24.0 en Windows</figcaption></figure><blockquote>🟢 Es gratuito
🟢 Código abierto
🟢 No tiene anuncios
🌐 Disponible <a href="https://webtorrent.io/desktop/" target="_blank" rel="noopener noreferrer">aquí</a> para Windows, macOS y GNU/Linux</blockquote><p></p><p>Es la app más simple y minimalista posible, sin anuncios, con código abierto e incluso ya viene integrada en ciertos navegadores, como Brave, lo que dispensa cualquier instalación o preocupación. Es una aplicación enfocada en usuarios comunes y tiene un enfoque radicalmente minimalista: basta arrastrar y soltar un torrent dentro de la ventana de la app y listo. Ya está descargando. Y si eso es muy difícil, un CTRL + C y CTRL + V también resuelve. No tiene configuraciones avanzadas, posibilidades alucinantes ni ajustes técnicos. Es simple, va directo al grano y hace lo que tiene que hacer. Por esa razón, es muy fácil de usar y el más recomendado para legos.</p><p></p><hr><p><br></p><h3>Transmission, el sencillo</h3><figure><img src="assets/images/artigos/apps-torrent/3817592cef0cff324996c.jpg" alt="Pantalla principal de Transmission 4.0.0 en Windows" loading="lazy"><figcaption>Pantalla principal de Transmission 4.0.0 en Windows</figcaption></figure><blockquote>🟢 Es gratuito
🟢 Código abierto
🟢 No tiene anuncios
🌐 Disponible <a href="https://transmissionbt.com/download" target="_blank" rel="noopener noreferrer">aquí</a> para Windows, macOS y GNU/Linux</blockquote><p></p><p>Transmission es una aplicación modesta y, como ellos mismos afirman, rápida y sencilla. Tiene una interfaz simple y con algunas posibilidades de ajustes. Aun lejos de ser un cliente BitTorrent potente, es competente para usuarios comunes. La interfaz fue pensada especialmente para cada sistema operativo compatible, a fin de brindar la mejor experiencia posible. Tanto es así que es el cliente BitTorrent por defecto de varios sistemas operativos.</p><p></p><hr><p><br></p><h3>LibreTorrent, en la palma de la mano</h3><figure><img src="assets/images/artigos/apps-torrent/8c3911a614455de0a3b8d.jpg" alt="Capturas de pantalla de LibreTorrent 3.4 en Android 12" loading="lazy"><figcaption>Capturas de pantalla de LibreTorrent 3.4 en Android 12</figcaption></figure><blockquote>🟢 Es gratuito
🟢 Código abierto
🟢 No tiene anuncios
🌐 Disponible <a href="https://play.google.com/store/apps/details?id=org.proninyaroslav.libretorrent" target="_blank" rel="noopener noreferrer">aquí</a> para Android</blockquote><p></p><p>Aquí tienes una bonita app para descargar torrents en tu Android. Con la interfaz en portugués, basada en Material Design y con un buen conjunto de configuraciones, LibreTorrent se mantiene con código abierto y sin anuncios.</p><p></p><hr><p><br></p><h3>qBittorrent, el mejor</h3><figure><img src="assets/images/artigos/apps-torrent/cf494567e9edd74e633ed.jpg" alt="Pantalla principal de qBittorrent en Windows" loading="lazy"><figcaption>Pantalla principal de qBittorrent en Windows</figcaption></figure><blockquote>🟢 Es gratuito
🟢 Código abierto
🟢 No tiene anuncios
🌐 Disponible <a href="https://www.qbittorrent.org/download.php" target="_blank" rel="noopener noreferrer">aquí</a> para Windows, macOS, GNU/Linux y FreeBSD</blockquote><p></p><p>Aquí tenemos la mejor recomendación de nuestra lista: una de las aplicaciones más potentes del mercado, que comenzó su historia en 2006. El aspecto aquí no tiene ningún secreto y ya es familiar porque es muy parecido a uTorrent. Como toda buena aplicación de código abierto, qBittorrent es gratuito, seguro y sin anuncios. Y a diferencia de uTorrent, BitTorrent y BitComet, no intenta engañar al usuario para instalar rellenos. </p><p>qBittorrent va directo al grano en la instalación y es increíblemente potente a la hora de usarlo. Y si todo lo que ofrece no es suficiente, aún tiene soporte para plugins que añaden aún más posibilidades. </p><p></p><hr><p><br></p><h3>CONCLUSIÓN</h3><ul><li><li>Mejor app para usuarios experimentados: qBittorrent</li></li><li><li>Mejor app para usuarios comunes que solo quieren descargar algún archivo específico de vez en cuando: Web Torrent o Transmission</li></li><li><li>Mejor app para descargar torrents en Android: LibreTorrent</li></li></ul><p></p><hr><p></p><h4>Otros artículos que pueden interesarte</h4><p><a href="/Telegram-caiu-foi-banido-ou-bloqueado-Fure-a-censura-sem-precisar-instalar-nada-a-menos-que-voc%C3%AA-queira-01-20" target="_blank" rel="noopener noreferrer">¿Telegram caído, baneado o bloqueado? Rompe la censura sin instalar nada (a menos que quieras)</a></p><p><a href="/Telegram-ou-Telegrams-07-11" target="_blank" rel="noopener noreferrer">Clientes de Telegram: qué son, dónde viven, de qué se alimentan?</a></p><p><a href="/Relembre-a-hist%C3%B3ria-do-WhatsApp-03-27" target="_blank" rel="noopener noreferrer">Línea de tiempo: recuerda la historia (no contada) de WhatsApp</a></p><p><a href="/Principais-obras-e-autores-de-cada-estado-do-Brasil-05-20" target="_blank" rel="noopener noreferrer">Guía de lectura: literatura nacional</a></p><p></p><hr><p><br></p><p>Actualizado el 27/12/2022. Este artículo se está elaborando y ampliando poco a poco. Para informar de algún error o enviar sugerencias, entra en el canal <a href="https://t.me/blumenaunews" target="_blank" rel="noopener noreferrer">Blumenau News</a> y comenta en el post fijado.</p><p><br></p>`,
    },

'historia-whatsapp': {
      title: `Línea de tiempo: recuerda la historia (no contada) de WhatsApp`,
      category: `Historia y Seguridad`,
      summary: `Una retrospectiva sobre adquisición, privacidad y seguridad.`,
      tags: [`WhatsApp`, `Seguridad`, `Privacidad`, `Línea de Tiempo`, `Meta`],
      date: `27 de marzo de 2020`,
      body: `<figure><img src="assets/images/artigos/historia-whatsapp/f9a3b1fb6ce076f059cfa.jpg" alt="Imagen" loading="lazy"></figure><p>WhatsApp siempre tuvo una historia interesante. Si no la conoces, mira los mejores momentos a continuación.</p><h4>2009</h4><p>🎉 WhatsApp es lanzado por Jan Koum y Brian Acton. 🎉</p><h4>2012</h4><p>Hasta 2012 los mensajes intercambiados por la app NO recibían ningún tipo de cifrado. <a href="https://web.archive.org/web/20150108072201/http://fileperms.org/whatsapp-is-broken-really-broken.html" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><h4>2013</h4><p>Un juego fue removido de la Play Store porque recolectaba el historial de mensajes de WhatsApp. <a href="https://www.techtudo.com.br/noticias/noticia/2013/12/jogo-para-android-esta-roubando-historico-de-conversas-no-whatsapp.html" target="_blank" rel="noopener noreferrer">Ver aquí</a>. </p><h4>2014</h4><p>Una falla permite bloquear la app con 1 único mensaje. <a href="https://www.techtudo.com.br/noticias/noticia/2014/12/whatsapp-tem-falha-que-trava-app-com-uma-unica-mensagem-saiba-fugir.amp" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><figure><img src="assets/images/artigos/historia-whatsapp/88a18f0eef01e2a3a0f52.jpg" alt="Imagen" loading="lazy"></figure><p>Facebook compra WhatsApp por US$22 mil millones. <a href="http://g1.globo.com/economia/negocios/noticia/2014/10/preco-de-compra-do-whatsapp-pelo-facebook-sobe-us-22-bilhoes.html" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><h4>2015</h4><p>Se filtra una forma de hackear WhatsApp solo enviando un contacto. <a href="https://www.bbc.com/news/technology-34192117" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p>Bélgica lleva a Facebook a los tribunales por violaciones de privacidad. <a href="https://www.theguardian.com/technology/2015/jun/15/belgium-facebook-court-privacy-breaches-ads" target="_blank" rel="noopener noreferrer">Ver aquí</a>. </p><h4>2016</h4><p>El cifrado de extremo a extremo se implementa definitiva y completamente, pero lleno de bugs... <a href="http://www.h-online.com/security/news/item/Sniffer-tool-displays-other-people-s-WhatsApp-messages-1574382.html" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p>Facebook trabaja en una herramienta de censura para intentar operar en el mercado chino. <a href="https://www.nytimes.com/2016/11/22/technology/facebook-censorship-tool-china.html?_r=0" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p>La Unión Europea pide que WhatsApp deje de enviar información personal de sus usuarios a los servicios de Facebook. <a href="https://www.theguardian.com/technology/2016/oct/28/whatsapp-pause-sharing-user-data-facebook-european-privacy-regulators-yahoo" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p>Alemania ordena que Facebook deje de recopilar datos de los usuarios de WhatsApp. <a href="https://www.theguardian.com/technology/2016/sep/27/germany-orders-facebook-stop-collecting-whatsapp-phone-numbers-user-data" target="_blank" rel="noopener noreferrer">Ver aquí</a>. </p><h4>2017</h4><p>Se filtra una forma de hackear WhatsApp con solo 1 foto. <a href="https://www.forbes.com/sites/thomasbrewster/2017/03/15/whatsapp-telegram-hacked-with-single-image-check-point-research/#41fd78a23be2" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p>El cifrado de extremo a extremo de WhatsApp no funciona como debería y tiene una falla que permite la recepción y lectura de mensajes por terceros. <a href="https://www.theguardian.com/technology/2017/jan/13/whatsapp-design-feature-encrypted-messages" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p>Facebook oficialmente puede no entregar tus datos de WhatsApp a las autoridades, pero los metadatos sí los entrega fácilmente y no lo niega. <a href="https://www.forbes.com/sites/thomasbrewster/2017/01/22/whatsapp-facebook-backdoor-government-data-request/#5951a9ce1030" target="_blank" rel="noopener noreferrer">Ver aquí</a> y <a href="https://iphone.appleinsider.com/articles/17/01/13/whatsapp-backdoor-defeats-end-to-end-encryption-potentially-allows-facebook-to-read-messages" target="_blank" rel="noopener noreferrer">aquí también</a>.</p><p>Brian Acton, cofundador de WhatsApp, deja Facebook. <a href="https://www.vox.com/2017/9/12/16298092/whatsapp-founder-brian-acton-leaving-facebook-foundation" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p>Facebook es multado por Francia por violaciones de privacidad. <a href="https://www.theguardian.com/technology/2017/may/16/facebook-facing-privacy-actions-across-europe-as-france-fines-firm-150k" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><h4>2018</h4><p>Brian Acton, cofundador de WhatsApp, desahoga que "vendió la privacidad de los usuarios" y lanza la campaña <a href="#deleteFacebook" target="_blank" rel="noopener noreferrer">#deleteFacebook</a>. <a href="https://www.cnet.com/news/whatsapp-cofounder-i-sold-my-users-privacy-with-facebook-acquisition/" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><figure><img src="assets/images/artigos/historia-whatsapp/21b85da9823605b6e29ef.jpg" alt="Imagen" loading="lazy"></figure><p>Jan Koum, el otro cofundador de WhatsApp, también deja Facebook, tras divergencias sobre la privacidad de los usuarios y el cifrado de la app. <a href="https://www.theverge.com/2018/4/30/17304792/whatsapp-jan-koum-facebook-data-privacy-encryption" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><h4>2019</h4><p><em>Mayo</em></p><p>Se filtra una forma de hackear WhatsApp usando solo una llamada de audio (y la víctima ni siquiera necesita contestar para ser hackeada). <a href="https://noticias.uol.com.br/tecnologia/noticias/redacao/2019/05/14/falha-de-seguranca-no-whatsapp-e-gravissima-dizem-especialistas.htm" target="_blank" rel="noopener noreferrer">Ver aquí</a>. <a href="https://olhardigital.com.br/fique_seguro/noticia/whatsapp-foi-usado-para-espionar-jornalistas-e-ativistas-indianos/92355" target="_blank" rel="noopener noreferrer">Aquí también</a>. <a href="https://olhardigital.com.br/fique_seguro/noticia/entenda-tudo-sobre-a-grave-brecha-no-whatsapp-e-saiba-se-proteger/85776" target="_blank" rel="noopener noreferrer">Aquí también</a>.</p><p><em>Junio</em></p><p>Se filtra una forma de hackear WhatsApp usando solo 1 videollamada. Ver <a href="/Falha-no-WhatsApp-permitiu-invas%C3%A3o-de-hackers-a-contas-por-chamada-de-v%C3%ADdeo-diz-m%C3%ADdia-06-12" target="_blank" rel="noopener noreferrer">aquí</a>.</p><p><em>Agosto</em></p><p>Los mensajes pueden ser leídos e incluso alterados por hackers. <a href="https://olhardigital.com.br/video/novas-falhas-de-seguranca-no-whatsapp/89127" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p><em>Octubre</em></p><p>Se filtra una forma de hackear WhatsApp usando solo 1 gif. <a href="https://tecnoblog.net/309879/vulnerabilidade-whatsapp-android-gif/" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p><em>Noviembre</em></p><p>Se filtra una forma de hackear WhatsApp usando solo 1 video. <a href="https://olhardigital.com.br/noticia/falha-no-whatsapp-permite-invasao-do-celular-com-videos-mp4/93090" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p><em>Diciembre</em></p><p>Una falla puede inutilizar la app de todos los participantes de un grupo y hacerlo inaccesible para siempre. <a href="https://olhardigital.com.br/fique_seguro/noticia/novo-bug-pode-travar-whatsapp-e-destruir-grupos-de-conversa/94467" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><h4>2020</h4><p><em>Febrero</em></p><p>Se filtra una forma de hackear WhatsApp usando solo un enlace. <a href="https://tecnoblog.net/323843/whatsapp-desktop-falha-permite-acessar-arquivos-windows-macos/" target="_blank" rel="noopener noreferrer">Ver aquí</a>, <a href="https://www.perimeterx.com/tech-blog/2020/whatsapp-fs-read-vuln-disclosure/" target="_blank" rel="noopener noreferrer">aquí también</a> y <a href="https://www.metrojornal.com.br/estilo-vida/2020/02/20/atualizacao-recente-whatsapp-corrige-grave-vulnerabilidade-de-seguranca.html" target="_blank" rel="noopener noreferrer">aquí también</a>.</p><h4>2022</h4><p><em>Octubre</em></p><p>Se filtra una forma de obtener acceso a todos los datos del dispositivo usando solo una llamada vía WhatsApp o un video enviado por WhatsApp. Ver <a href="https://thehackernews.com/2022/09/critical-whatsapp-bugs-could-have-let.html?m=1" target="_blank" rel="noopener noreferrer">aquí</a> la noticia en inglés y <a href="https://www.whatsapp.com/security/advisories/2022/" target="_blank" rel="noopener noreferrer">aquí</a> el anuncio del propio WhatsApp.</p><h4>2024</h4><p><em>Septiembre</em></p><p>Un bug en WhatsApp permite capturar la pantalla de mensajes de visualización única. <a href="https://macmagazine.com.br/post/2024/09/10/bug-no-whatsapp-permite-capturar-a-tela-de-mensagens-de-visualizacao-unica/" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><h4>2025</h4><p><em>Enero</em></p><p>Un bug en WhatsApp permite burlar la función de visualización única en iOS. <a href="https://macmagazine.com.br/post/2025/01/15/bug-no-whatsapp-permite-burlar-recurso-de-visualizacao-unica-no-ios/" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p><em>Abril</em></p><p>Un bug en WhatsApp para Windows permite la ejecución de código arbitrario en lugar de solo abrir el adjunto. <a href="https://www.tecmundo.com.br/seguranca/403859-atualize-ja-falha-no-whatsapp-para-windows-facilita-o-envio-de-anexos-maliciosos.htm" target="_blank" rel="noopener noreferrer">Ver aquí.</a></p><p><em>Agosto</em></p><p>Un bug en WhatsApp en iOS y macOS permite robar datos del dispositivo sin ninguna interacción del usuario, bastando recibir una imagen infectada. El bug fue explotado desde, al menos, el mes de mayo. <a href="https://pplware.sapo.pt/apple/hora-de-atualizar-o-iphone-e-o-mac-falha-perigosa-no-whatsapp-foi-explorada/" target="_blank" rel="noopener noreferrer">Ver aquí</a>.</p><p></p><h4>Conclusión</h4><p>Como se puede percibir, fallas, vulnerabilidades y un deliberado desprecio por la privacidad del usuario forman parte de la historia de WhatsApp. Y, para cerrar con broche de oro, aunque no tuviera fallas, el hecho de depender de apps de terceros lo hace más vulnerable. Por ejemplo:</p><p>1. Para crear y añadir stickers a WhatsApp es necesario usar una app de terceros, que puede comprometer WhatsApp y todo el celular;</p><p>2. Para usar servicios de proxy y/o VPN para sortear un eventual bloqueo en el país es necesario usar una app de terceros porque el propio WhatsApp no tiene esa función, lo que puede comprometer WhatsApp y todo el celular;</p><p>3. Para no perder tus conversaciones es necesario hacer el respaldo en la nube de terceros.</p>`,
    },

'vagas-blumenau': {
      title: `Vacantes y oportunidades en Blumenau, SC`,
      category: `Mercado y Oportunidades`,
      summary: `Guía completa con las mejores agencias de RR. HH., plataformas de reclutamiento, portales de empleo y empresas locales que contratan directamente en Blumenau y el Valle de Itajaí.`,
      tags: [`Blumenau`, `Empleo`, `RR. HH.`, `Tecnología`, `Vacantes SC`],
      date: `10 de agosto de 2020`,
      body: `<figure><img src="assets/images/artigos/vagas-blumenau/fcc857feee1c48e9ce760.jpg" alt="Imagen" loading="lazy"></figure><p>Esta es la lista de vacantes mantenida por el grupo <a href="http://t.me/vilagermanica" target="_blank" rel="noopener noreferrer">@vilagermanica</a> en Telegram. Las mejores empresas, contactos y agencias de la ciudad están aquí. Las vacantes puntuales o temporales se envían directamente en el grupo. </p><blockquote>Siguiendo esta lista es prácticamente IMPOSIBLE no conseguir un empleo. ¡Buena suerte!</blockquote><h3><a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">RH Genial</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/1f16d8aab1ba412e0653e.jpg" alt="Imagen" loading="lazy"></figure><p>El propósito de <a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">RH Genial</a> es ayudar a talentos y empresas de Blumenau y región a conectarse mediante el reclutamiento digital. Es mi sitio favorito para vacantes y puedes seguirlo en <a href="https://www.linkedin.com/company/rh-genial/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/rhgenial/" target="_blank" rel="noopener noreferrer">Facebook</a> e <a href="https://www.instagram.com/rhgenial/" target="_blank" rel="noopener noreferrer">Instagram</a>. Es casi una agencia de empleos, pero no lo es. Para mí, es mucho mejor.</p><blockquote>¿Es de Blumenau? Sí.
Accede: <a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">Portal de vacantes</a>, <a href="https://www.linkedin.com/company/rh-genial/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/rhgenial/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/rhgenial/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Selecionar Talentos</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/866a6a645b3df59e866b6.png" alt="Imagen" loading="lazy"></figure><p><a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Selecionar Talentos</a> tiene alianzas con grandes empresas de la ciudad, como Serasa y Viacredi, y una estructura muy buena. Puedes seguirlo en <a href="https://www.facebook.com/selecionartalentos" target="_blank" rel="noopener noreferrer">Facebook</a> e <a href="https://www.instagram.com/gruposelecionar/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>¿Es de Blumenau? Sí.
Accede: <a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Portal de vacantes</a>, <a href="https://www.linkedin.com/company/grupo-selecionar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.instagram.com/gruposelecionar/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.facebook.com/selecionartalentos" target="_blank" rel="noopener noreferrer">Facebook</a> </blockquote><p><br></p><h3><a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Recrutar RH</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/2b5950b3065490fc46dcf.png" alt="Imagen" loading="lazy"></figure><p>No tuve una buena experiencia con <a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Recrutar RH</a>, pero siempre hay muchas vacantes abiertas. Me dijeron que las empresas que anuncian con ellos solo llaman a candidatos que ya tienen al menos 1 año de trabajo firmado en la ciudad. Si llegaste de afuera hace poco, ni vale la pena intentarlo... Están en <a href="http://instagram.com/Recrutar_rh" target="_blank" rel="noopener noreferrer">Instagram</a>, en <a href="https://twitter.com/RhRecrutar" target="_blank" rel="noopener noreferrer">Twitter</a> (que no se actualiza desde 2016, pero el perfil es oficial...) y en <a href="http://br.linkedin.com/pub/recrutar-recursos-humanos/33/915/6a5" target="_blank" rel="noopener noreferrer">LinkedIn</a> (el enlace no es válido, pero es correcto, es oficial...). </p><blockquote>¿Es de Blumenau? Sí.
Accede: <a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Portal de vacantes</a>, <a href="https://twitter.com/RhRecrutar" target="_blank" rel="noopener noreferrer">Twitter</a> (es oficial pero no se actualiza desde 2016), <a href="http://instagram.com/Recrutar_rh" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://br.linkedin.com/pub/recrutar-recursos-humanos/33/915/6a5" target="_blank" rel="noopener noreferrer">LinkedIn</a> (el enlace es oficial pero no funciona)</blockquote><p><br></p><h3><a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">DPRH</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/75393e45ebc7b57400b0f.png" alt="Imagen" loading="lazy"></figure><p><a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">DPRH</a> es una agencia bastante fuerte también; hay varias vacantes y también tienen grandes alianzas, como la Oktoberfest. Tiene presencia en <a href="https://www.facebook.com/DPRHempregos" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.linkedin.com/company/dprh-empregos/" target="_blank" rel="noopener noreferrer">LinkedIn</a> e <a href="https://www.instagram.com/dprhempregos/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>¿Es de Blumenau? Sí.
Accede: <a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">Portal de vacantes</a>, <a href="https://www.linkedin.com/company/dprh-empregos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/DPRHempregos" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/dprhempregos/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Degrau do Sucesso</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/33ff50195d13836cd23ad.png" alt="Imagen" loading="lazy"></figure><p><a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Degrau do Sucesso</a> tiene varias vacantes y parece una buena agencia. El sitio es flojo, pero la gente dice personalmente que es mejor. Así que es mejor ir personalmente hasta allí para tener alguna chance. Tiene perfil activo en <a href="https://www.facebook.com/degraudosucesso/" target="_blank" rel="noopener noreferrer">Facebook</a> y en <a href="https://www.instagram.com/degrauempregos/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>¿Es de Blumenau? Sí.
Accede: <a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Portal de vacantes</a>, <a href="https://www.facebook.com/degraudosucesso/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/degrauempregos/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Link</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/4168473c45487bfcd9933.png" alt="Imagen" loading="lazy"></figure><p><a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Link</a> está muy bien conceptuada y bien evaluada por la comunidad. Parece especializada en oportunidades relacionadas con tecnología y, quizá por eso, tiene una presencia muy amplia en las redes sociales (la mayor de esta lista), pudiendo ser encontrada en <a href="https://www.periscope.tv/linktalentos" target="_blank" rel="noopener noreferrer">Periscope</a>, <a href="https://www.facebook.com/pages/Link-Talentos/106641139394311?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/linktalentos/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://www.linkedin.com/company/link-talentos" target="_blank" rel="noopener noreferrer">LinkedIn</a> y <a href="https://www.youtube.com/channel/UCUluAqk0kaw1qEhk-5seoDQ" target="_blank" rel="noopener noreferrer">Youtube</a>. </p><blockquote>¿Es de Blumenau? Sí.
Accede: <a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Portal de vacantes</a>, <a href="https://www.periscope.tv/linktalentos" target="_blank" rel="noopener noreferrer">Periscope</a>, <a href="https://www.facebook.com/pages/Link-Talentos/106641139394311?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/linktalentos/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://www.linkedin.com/company/link-talentos" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.youtube.com/channel/UCUluAqk0kaw1qEhk-5seoDQ" target="_blank" rel="noopener noreferrer">Youtube</a></blockquote><h3><br></h3><h3><a href="https://vagas.keeptalent.com.br/vaga/lista/inicio" target="_blank" rel="noopener noreferrer">Keep Talent</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/317a22199a082358ecc32.jpg" alt="Imagen" loading="lazy"></figure><p>Desde 2008, con vacantes para Blumenau y región, es una agencia sólida con buena reputación y bastante actividad en LinkedIn.</p><blockquote>¿Es de Blumenau? Sí.
Accede: <a href="https://vagas.keeptalent.com.br/vaga/lista/inicio" target="_blank" rel="noopener noreferrer">Portal de vacantes</a>, <a href="https://www.instagram.com/keeptalent/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.linkedin.com/company/keeptalent" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/keeptalentrh" target="_blank" rel="noopener noreferrer">Facebook</a> </blockquote><p><br></p><h3><a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Vagas</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/78107df6adb2b5952ac69.jpg" alt="Imagen" loading="lazy"></figure><p><a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Vagas</a> no es de Blumenau, sino un portal de empleo a nivel nacional, por lo tanto más genérico. Aun así, siempre hay alguna vacante para Blumenau. Tiene hasta su propia app y, en el blog, hay varios artículos útiles que ayudan bastante a la hora de armar un currículum o con la postura en las entrevistas.</p><blockquote>¿Es de Blumenau? No.
Accede: <a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Portal de vacantes</a></blockquote><p><br></p><h3><a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Trabalha Brasil</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/78e4b1804ce9d50268f77.png" alt="Imagen" loading="lazy"></figure><p><a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Trabalha Brasil</a> tampoco está especializado en vacantes para Blumenau, sino que es un portal de empleo a nivel nacional. También recoge vacantes que fueron creadas en otros portales y no tiene ningún tipo de curaduría sobre las vacantes publicadas en él. Cualquiera puede crear una cuenta en la plataforma y divulgar la vacante que se le antoje. Por eso es bueno prestar atención porque hay vacantes engañosas. Ten siempre mucha atención para no caer en estafas.</p><blockquote>¿Es de Blumenau? No.
Accede: <a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Portal de vacantes</a></blockquote><p><br></p><h3><a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Emprega Brasil</a> (Ministerio de Trabajo)</h3><figure><img src="assets/images/artigos/vagas-blumenau/e842cd26081dc2fd448bc.png" alt="Imagen" loading="lazy"></figure><p><a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Emprega Brasil</a> es el portal oficial del Ministerio de Trabajo del Gobierno Federal, con vacantes para todo el país. En la búsqueda es posible filtrar por ciudad y hay muchas vacantes para Blumenau en diversas áreas.</p><blockquote>¿Es de Blumenau? No.
Accede: <a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Portal de vacantes</a></blockquote><p><br></p><h3><a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Sistema S</a> (FIESC, CIESC, SESI, SENAI, IEL)</h3><figure><img src="assets/images/artigos/vagas-blumenau/76aa178f76e657ca3a6f4.png" alt="Imagen" loading="lazy"></figure><p>También extendidas por el país, las unidades del <a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Sistema S</a> tienen varias vacantes para la ciudad de Blumenau, concretamente en el Sesi y en el Senai. Vale la pena echar un vistazo.</p><blockquote>¿Es de Blumenau? No.
Accede: <a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Portal de vacantes</a></blockquote><p><br></p><h3>Empresas que pueden interesarte</h3><p>Además de las agencias, que facilitan la vida agrupando varias oportunidades en un solo lugar, puedes contactar directamente con las empresas que tienen su propio canal de vacantes. </p><p><br></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=cecred&tenantdomain=cecred.coop.br#!/vacancies/list?hq=19932CB6AAE647EDB621AD2B576DB697" target="_blank" rel="noopener noreferrer">Ailos</a></p><p><a href="https://altenburgtextilltda.pandape.com.br/" target="_blank" rel="noopener noreferrer">Altenburg</a></p><p><a href="http://www.altona.com.br/web/trabalhe-com-a-altona/vagas" target="_blank" rel="noopener noreferrer">Altona</a></p><p><a href="https://www.arber.com.br/trabalhe_conosco" target="_blank" rel="noopener noreferrer">Arber Parafusos</a></p><p><a href="https://www.bludata.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Bludata</a></p><p><a href="https://www.blukit.com.br/trabalhe" target="_blank" rel="noopener noreferrer">Blukit</a></p><p><a href="http://blutextil.natela.com.br/pt_br/rh.cadastro.php" target="_blank" rel="noopener noreferrer">Blutextil</a></p><p><a href="https://www.bluware.com.br/site2/trabalhe-conosco.php" target="_blank" rel="noopener noreferrer">Bluware Sistemas</a></p><p><a href="https://www.grupoboticario.com.br/vagas/" target="_blank" rel="noopener noreferrer">Boticário</a> </p><p><a href="https://jobs.bunge.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">Bunge</a></p><p><a href="https://www.cicblumenau.com.br/trabalhe-conosco" target="_blank" rel="noopener noreferrer">CIC Blumenau</a></p><p><a href="https://www.cooper.coop.br/contato/trabalhe-com-a-gente" target="_blank" rel="noopener noreferrer">Cooper</a></p><p><a href="https://www.coteminas.com.br/scripts11/cgiip.exe/WService=coteminas/cot/vis/cadcurriculo.htm" target="_blank" rel="noopener noreferrer">Coteminas</a></p><p><a href="https://portalrh.cremer.com.br/curriculoweb/conector?ACAO=ANUNCIOS&STATUS=LISTAR&SIS=RS&ORIGEM=AP&PERFILPADRAO=1&IDIOMA=0&PERFILLOGIN=1" target="_blank" rel="noopener noreferrer">Cremer</a></p><p><a href="http://gpssa.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Grupo GPS (y otras empresas)</a></p><p><a href="http://grupohennings.gupy.io/" target="_blank" rel="noopener noreferrer">Grupo Hennings</a> </p><p><a href="https://grupokhronos.enlizt.me/" target="_blank" rel="noopener noreferrer">Grupo Khronos</a></p><p><a href="https://gruposegura.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Grupo Segura</a></p><p><a href="http://hemmer.natela.com.br/" target="_blank" rel="noopener noreferrer">Hemmer</a></p><p><a href="https://hob.med.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Hospital de Olhos de Blumenau</a></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=hsc&tenantdomain=hsc.com.br#!/vacancies/list" target="_blank" rel="noopener noreferrer">Hospital Santa Catarina</a></p><p><a href="http://www.santaisabel.com.br/vagas" target="_blank" rel="noopener noreferrer">Hospital Santa Isabel</a></p><p><a href="https://www.ipelpapel.com.br/faca-parte" target="_blank" rel="noopener noreferrer">IPEL - Indaial Papel</a></p><p><a href="https://jobs.kenoby.com/jamef/" target="_blank" rel="noopener noreferrer">Jamef Encomendas Urgentes</a></p><p><a href="https://karsten.gupy.io/" target="_blank" rel="noopener noreferrer">Karsten</a></p><p><a href="https://grupokyly.compleo.com.br/" target="_blank" rel="noopener noreferrer">Kyly</a></p><p><a href="http://lancaster.natela.com.br/pt_br/rh.cadastro.php" target="_blank" rel="noopener noreferrer">Lancaster</a> </p><p><a href="http://www.cristina.com.br/br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Malharia Cristina</a></p><p><a href="https://marisa.gupy.io/" target="_blank" rel="noopener noreferrer">Marisa</a></p><p><a href="http://www.marp.com.br/trabalheConosco.php" target="_blank" rel="noopener noreferrer">MARP Indústria Têxtil</a></p><p><a href="https://pamplonailuminacao.pandape.com.br/" target="_blank" rel="noopener noreferrer">Pamplona Iluminação</a></p><p><a href="https://www.plazahoteis.com.br/pt-br/fale-conosco/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Plaza Hoteis (Blumenau)</a></p><p><a href="https://www.protecbrasil.com/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Protec Brasil</a></p><p><a href="http://www.provolt.com.br/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Provolt Tecnologia Eletrônica</a></p><p><a href="https://sci.com.br/envie-seu-curriculo/?fbclid=PAAabn9PKz4jSdmFIye9dByXbezI3cCugN0ZSWFhVZ336XAbACPnH9njKC0UY" target="_blank" rel="noopener noreferrer">SCI Sistemas Contábeis</a></p><p><a href="https://segalas.com.br/trabalhe.php" target="_blank" rel="noopener noreferrer">Segala's Alimentos</a></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=senior&tenantdomain=senior.com.br&fromRecruitment=false#!/vacancies/list" target="_blank" rel="noopener noreferrer">Senior Sistemas</a></p><p><a href="http://www.redetop.com.br/vagas/" target="_blank" rel="noopener noreferrer">Supermercados Rede TOP</a></p><p><a href="http://www.teka.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Teka</a></p><p><a href="https://portal.uniasselvi.com.br/institucional/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Uniasselvi</a></p><p><a href="http://weg.net/institutional/BR/pt/career" target="_blank" rel="noopener noreferrer">Weg</a></p><p><a href="https://jobs.quickin.io/wksistemas/jobs" target="_blank" rel="noopener noreferrer">WK Sistemas</a></p><p><br></p><h3>Empresas que reciben currículum por correo</h3><p>Altona: <a href="mailto:recrutamento@altona.com.br" target="_blank" rel="noopener noreferrer">recrutamento@altona.com.br</a></p><p>Atacarejo Unibox Dinardelli: <a href="mailto:rhav@dinardelli.com.br" target="_blank" rel="noopener noreferrer">rhav@dinardelli.com.br</a></p><p>Avalon Têxtil: <a href="mailto:rh@avalontextil.com.br" target="_blank" rel="noopener noreferrer">rh@avalontextil.com.br</a></p><p>Blumob: <a href="mailto:rh@blumob.com.br" target="_blank" rel="noopener noreferrer">rh@blumob.com.br</a></p><p>Eurofios: <a href="mailto:selecao@eurofios.com.br" target="_blank" rel="noopener noreferrer">selecao@eurofios.com.br</a></p><p>Haco: <a href="mailto:rubia.cristovao@haco.com.br" target="_blank" rel="noopener noreferrer">rubia.cristovao@haco.com.br</a></p><p>Hidropar dedetização: <a href="mailto:contato@hidropar.com.br" target="_blank" rel="noopener noreferrer">contato@hidropar.com.br</a></p><p>Hospital Santa Isabel: <a href="mailto:recrutamento02@santaisabel.com.br" target="_blank" rel="noopener noreferrer">recrutamento02@santaisabel.com.br</a></p><p>Lupo (Shopping Neumarkt): <a href="mailto:gerente.luponeumarkt@hotmail.com" target="_blank" rel="noopener noreferrer">gerente.luponeumarkt@hotmail.com</a></p><p>Milium: <a href="mailto:recrutamento@milium.com.br" target="_blank" rel="noopener noreferrer">recrutamento@milium.com.br</a></p><p>Orbi Química: <a href="mailto:rh@orbiquimica.com.br" target="_blank" rel="noopener noreferrer">rh@orbiquimica.com.br</a></p><p>Segala's Alimentos: <a href="mailto:rh@segalas.com.br" target="_blank" rel="noopener noreferrer">rh@segalas.com.br</a> y <a href="mailto:marta.maba@segalas.com.br" target="_blank" rel="noopener noreferrer">marta.maba@segalas.com.br</a></p><p>Supermercados RedeTop: <a href="mailto:recrutamento@redetop.com.br" target="_blank" rel="noopener noreferrer">recrutamento@redetop.com.br</a></p><p>Têxtil HJHering: <a href="mailto:rh@hjhering.com.br" target="_blank" rel="noopener noreferrer">rh@hjhering.com.br</a></p><p><br></p><p>═══════════════✎═</p><blockquote>Es altamente recomendable mantener un perfil actualizado en <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Si no sabes usarlo y necesitas trabajo, es un buen momento para aprender. Si consigues una prueba gratuita de LinkedIn Premium puedes incluso hacer numerosos cursos de altísima calidad de LinkedIn Learning sin pagar ni un centavo.</blockquote><p><br></p><p>═══════════════✎═</p><blockquote>Si quieres anunciar alguna oportunidad puedes enviarla directamente en el grupo <a href="https://t.me/vilagermanica" target="_blank" rel="noopener noreferrer">Vila Germânica</a>. Si te gustaría ver tu anuncio aquí o en un mensaje fijado, entonces usa <a href="https://t.me/vilagermanicabot" target="_blank" rel="noopener noreferrer">@vilagermanicabot</a> o habla con alguno de los administradores. Para informar de algún error o enviar sugerencias y comentarios, usa <a href="https://t.me/vilagermanicabot" target="_blank" rel="noopener noreferrer">@vilagermanicabot</a>.</blockquote><p><br></p><p>Última actualización: 03/09/2022, a las 19h01 GMT-3</p><p><br></p>`,
    },

},
};