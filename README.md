# Luccas — Portfólio de Engenharia de Software, Automação & DevOps

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Vanilla CSS3](https://img.shields.io/badge/CSS3_M3_Expressive-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript ES Modules](https://img.shields.io/badge/ES6+_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Web Audio API](https://img.shields.io/badge/Web_Audio_Synth-80B3FF?style=for-the-badge&logo=webrtc&logoColor=black)
![Zero Dependencies](https://img.shields.io/badge/Zero_Bundlers-000000?style=for-the-badge&logo=rollupdotjs&logoColor=white)

**Portfólio interativo de alta fidelidade desenvolvido sob os princípios de Material Design 3 Expressive, com estética cinematográfica, transições orgânicas FLIP, sintetizador de som Web Audio API e documentação detalhada de estudos de caso.**

</div>

---

## ⚡ Destaques de Engenharia & Arquitetura

- **Design System M3 Expressive:** Paleta tonal dark refinada (`--surface`, `--surface-container`, `--primary-container`), tipografia moderna (Google Fonts Inter, Outfit e JetBrains Mono) e elevações dinâmicas com reflexos especulares.
- **Zero Build Tools / 100% Vanilla:** Arquitetura desacoplada em módulos nativos ES6 (`ES Modules`), sem frameworks pesados, sem monolitos e sem etapas de compilação intermediárias.
- **Motor de Transição Orgânica (FLIP):** Algoritmo *First, Last, Invert, Play* acelerado por GPU que calcula coordenadas relativas da viewport e expande/retrai cards e modais de estudos de caso organicamente.
- **Sintetizador de Áudio Nativo (Web Audio API):** Feedback sonoro procedural de interface gerado em tempo de execução via osciladores senoidais e filtros passa-baixa, dispensando arquivos MP3/WAV externos.
- **Física de Partículas & Holofote Reativo:** Sistema de partículas acionado por física LERP no cursor e iluminação dinâmica via variáveis CSS customizadas (`--cursor-x`, `--cursor-y`).
- **Navegação Cinemática de Filtros:** Abas de categoria com indicador deslizante (*Gliding Pill*) e transição com curvas de Bézier cúbicas (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Leitor Técnico Integrado (*In-Place Reader*):** Carrossel interativo com suporte a gestos *touch swipe* e leitor de artigos de texto completo com mídias locais integradas diretamente na SPA.

---

## 📁 Estrutura do Repositório

```text
portfolio-projetos-ti/
├── index.html                   # Estrutura semântica HTML5 com SEO e vitrine técnica
├── .gitignore                   # Regras de exclusão de arquivos locais e temporários
├── .env.example                 # Template de variáveis de ambiente e perfis de contato
├── README.md                    # Documentação técnica do repositório
├── docs/                        # Acervo de estudos de caso e artigos em Markdown
│   ├── conceito-inicial.md      # Especificação arquitetural do Design System
│   ├── artigos/                 # Artigos técnicos de engenharia e publicações
│   │   ├── telegram-ou-telegrams.md
│   │   ├── apps-torrent.md
│   │   ├── historia-whatsapp.md
│   │   └── vagas-blumenau.md
│   └── projetos/                # Estudos de caso aprofundados
│       ├── engenharia-reversa.md
│       ├── mods-7dtd.md
│       ├── telegram-bot-precos.md
│       ├── telegram-bot-noticias-blumenau.md
│       ├── script-minecraft-server-java.md
│       ├── pagina-loja-piscinas.md
│       ├── dashboard-gastos.md
│       └── contratos-assinaturas.md
└── assets/
    ├── images/
    │   └── artigos/             # Repositório de imagens e mídias locais por artigo
    │       ├── telegram-ou-telegrams/
    │       ├── apps-torrent/
    │       ├── historia-whatsapp/
    │       └── vagas-blumenau/
    ├── css/                     # Estilos 100% modulares
    │   ├── variables.css        # Tokens M3 Expressive, paleta dark e tipografia
    │   ├── base.css             # Resets, tipografia global e utilitários
    │   ├── animations.css       # Keyframes, partículas e lava lamp orgânica
    │   ├── components.css       # Header flutuante, terminal hero, cards 3D, modais e carrossel
    │   └── main.css             # Orquestrador de imports CSS
    └── js/                      # Orquestrador modular ES6
        ├── config.js            # Mapeamento e centralização de contatos e redes sociais
        ├── data/
        │   ├── projectsData.js  # Dataset dos 8 estudos de caso com links de produção
        │   └── articlesData.js  # Dataset dos 4 artigos técnicos com metadados
        ├── modules/
        │   ├── audio.js         # Sintetizador nativo Web Audio API
        │   ├── spotlight.js     # Holofote reativo ao cursor
        │   ├── particles.js     # Pool de partículas LERP
        │   ├── tilt.js          # Rotação 3D táctil de cards
        │   ├── typewriter.js    # Efeito de máquina de escrever no terminal
        │   ├── projectFilter.js # Filtros com indicador deslizante (Gliding Pill)
        │   ├── articleCarousel.js # Carrossel com touch e leitor modal FLIP in-place
        │   └── modal.js         # Motor FLIP de expansão de projetos com CTAs de produção
        └── app.js               # Ponto de entrada e bootstrap da aplicação
```

---

## 🛠️ Estudos de Caso Apresentados na Vitrine

| Projeto | Categoria | Destaques Técnicos |
|---|---|---|
| **Telegram Games Hub (TMA)** | `Bots & Automação` | Plataforma multiplayer (Pôquer & UNO) em Telegram Mini Apps, WebSockets em tempo real, Canvas 60 FPS, HMAC-SHA256 e Anti-Cheat. |
| **Engenharia Reversa Android IoT** | `Engenharia Reversa` | Amputação Smali (`return-void`), supressão ViewBinding (`0.0dip`), fusão de Split APKs (Anti-Split) e telemetria Wireless ADB. |
| **Modding Avançado em C# (7 Days to Die)** | `Game Mods` | Suíte de 7 mods em C# / Unity, injeção de bytecode via Harmony, I/O assíncrono multithread e busca $O(1)$ de POIs. |
| **ADA Prices Bot** | `Bots & Automação` | Ingestão híbrida (8 CEXs/DEXs WebSockets + REST), filtro Z-Score, velas OHLCV, 24+ indicadores técnicos (`pandas-ta`) e OCI Free Tier. |
| **Blumenau News Pipeline** | `Bots & Automação` | Pipeline serverless em duas etapas: gerador GitOps RSS 2.0 (Python / GHA) e consumidor Cloudflare Workers com Workers KV. |
| **Gestão de Contratos & Assinaturas (CLM)** | `Bots & Automação` | Onboarding com BrasilAPI, OTP de 6 dígitos, quarentena/aprovação, fusão no Google Docs e Autentique GraphQL API com posições visuais. |
| **Pipeline de Dados & AppSheet** | `Web & Dashboards` | Arquitetura em 4 camadas (AppSheet Mobile > Relational Core > ETL > Dashboard), validação de domínio e Row-Level Security (RLS). |
| **Automação Servidor Minecraft & Cloud** | `Scripts & OS` | Orquestrador PowerShell com shutdown gracioso de JVM, compressão temporal e backup offsite criptografado via MTProto Telegram. |
| **Gerador de Estrutura de Pastas** | `Scripts & OS` | Extensão de Shell Windows Explorer em PowerShell com DFS, fallback duplo de Clipboard, compilação `ps2exe` e CI/CD Inno Setup no GHA. |
| **Landing Page Splash Piscinas** | `Web & Dashboards` | Catálogo desacoplado em JSON, 100% fontes WOFF2 locais, SEO técnico e redundância multi-nuvem (Vercel Edge + GitHub Pages). |

---

## 🚀 Como Executar Localmente

Por ter sido construído com **ES Modules nativos**, basta servir a raiz do projeto através de qualquer servidor HTTP local:

### Com Python 3:
```bash
python -m http.server 3000
```

### Com Node.js (npx serve):
```bash
npx serve .
```

### Com VS Code:
Abra a pasta no VS Code e utilize a extensão **Live Server** clicando em *Go Live*.

Acesse no navegador: `http://localhost:3000`

---

## 🌐 Deploy em Produção

O portfólio está pronto para ser hospedado diretamente em qualquer CDN estática com suporte a HTTPS e HTTP/2:
- **GitHub Pages:** Conecte o repositório e selecione a branch `main` na raiz `/`.
- **Vercel / Cloudflare Pages / Netlify:** Importe o repositório sem necessidade de comandos de build (`Build command: none`, `Output directory: .`).

---

## 👤 Autor

**Luccas** — Engenharia de Software, Automação & DevOps  
- **GitHub:** [@luccascomvoce](https://github.com/luccascomvoce)  
- **LinkedIn:** [linkedin.com/in/luccascomvoce](https://linkedin.com/in/luccascomvoce)  
- **Telegram:** [@luccascomvoce](https://t.me/luccascomvoce)  
- **WhatsApp:** [+55 47 98852-6046](https://wa.me/5547988526046)  
- **E-mail:** [luccascomvoce@gmail.com](mailto:luccascomvoce@gmail.com)

---

<div align="center">
  <sub>Construído com Vanilla Web Standards, Material Design 3 Expressive e dedicação à alta engenharia.</sub>
</div>
