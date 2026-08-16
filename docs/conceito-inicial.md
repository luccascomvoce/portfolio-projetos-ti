# Especificação Técnica de UI/UX & Arquitetura Front-End

**Projeto:** Portfólio de Tecnologia — Luccas (Cinematic M3 Expressive)  
**Plataforma de Hospedagem:** GitHub Pages (Static Web / Single-File)  
**Compatibilidade Target:** iOS WebKit (Safari), Android Chrome, Desktop Edge/Firefox/Chrome  

---

## 1. Visão Geral & Filosofia de Design

O projeto adota a linguagem de design **Material Design 3 Expressive (M3 Expressive)** fundida com uma atmosfera **Cinematográfica e Cyberpunk Elegante**.

### Princípios Fundamentais

- **Zero Canvas 2D Context:** Abolição total de APIs de renderização Canvas 2D para garantir 60 FPS consistentes e evitar falhas de alocação de memória gráfica ou congelamento de processos em dispositivos iOS (Safari/WebKit).
- **Formas Expressivas e Tonalidades M3:** Uso de cantos hiper-arredondados (`rounded-2xl`, `rounded-3xl`, pílulas), hierarquia tonal por containers de superfície (`surface-container-low`, `surface-container-high`, etc.) e alto contraste para legibilidade.
- **Física e Fluidez Tátil:** Todas as interações respondem ao movimento do cursor ou toque (`touchmove`), utilizando interpolação matemática LERP (*Linear Interpolation*) e aceleração via GPU (`will-change: transform`).
- **Resposta Audiovisual Integrada:** Efeitos sonoros sintetizados via código nativo do navegador para micro-feedbacks em interações.

---

## 2. Sistema de Design (Design Tokens)

### 2.1 Tipografia

O projeto utiliza um trio tipográfico complementar carregado via Google Fonts:

- **Heading / Títulos:** `"Outfit"`, sans-serif — Geométrico, de alto impacto e forte presença visual.
- **Corpo / Texto:** `"Plus Jakarta Sans"`, sans-serif — Altamente legível em telas digitais, otimizado para pequenas e médias densidades.
- **Código / Metadados:** `"Fira Code"`, monospace — Estética técnica/hacker para rótulos, badges, tags e atalhos.

### 2.2 Paleta de Cores (M3 Expressive Dark Tonal Palette)

| Categoria Token | Valor Hex | Aplicação UI |
|---|---|---|
| `surface` | `#090d14` | Fundo principal da aplicação |
| `surface-dim` | `#05070a` | Rodapé e seções de contraste profundo |
| `surface-container-low` | `#111622` | Cards base, container de hero |
| `surface-container` | `#182030` | Cards de interatividade padrão |
| `surface-container-high` | `#222c40` | Modais, busca, botões ativos |
| `surface-container-highest` | `#2d3952` | Badges, elementos de sobreposição |
| `primary` | `#80b3ff` | Destaque principal, bordas ativas, links |
| `on-primary` | `#002b5c` | Texto sobre superfícies de destaque |
| `primary-container` | `#00438a` | Botões ativados, containers primários |
| `tertiary` | `#e5b8e7` | Detalhes em tom neon suave |
| `accent` | `#38edf2` | Ciano vibrante para typewriter, destaques e luz |
| `outline-variant` | `#3f4756` | Divisores e bordas discretas |

### 2.3 Sombras e Néons

- `shadow-neon-primary`: `0 0 35px rgba(128, 179, 255, 0.25)`
- `shadow-neon-tertiary`: `0 0 35px rgba(229, 184, 231, 0.25)`
- `shadow-neon-accent`: `0 0 35px rgba(56, 237, 242, 0.25)`

---

## 3. Arquitetura de Layout & Componentes

### 3.1 Header Flutuante Fixo (`<header>`)

- **Estrutura:** Barra translúcida flutuante (`backdrop-blur-xl`) no topo com cantos arredondados de pílula (`rounded-full`).
- **Elementos:**
  - Indicador de status em tempo real com pulso em verde esmeralda (`Disponível para Automação & Dev`).
  - Botão de alternância sonora (Ativar/Desativar som do sintetizador).
  - Atalho rápido de navegação para a seção de projetos.

### 3.2 First Screen / Hero Section (`#hero`)

- **Dimensões:** `100vh` de altura visível no carregamento inicial da página.
- **Cartão de Visitas Digital 3D:** Avatar estilizado com código `<L/>` sobre gradiente contínuo.
- **Nome do Profissional:** Fonte de alta densidade (`Outfit Black`).
- **Efeito Typewriter Dinâmico:** Alterna continuamente entre especialidades técnicas (*Automação de Processos, Engenharia Reversa, Bots Telegram, etc.*).
- **Grid de 9 Canais Sociais:** Cartões táteis interativos para GitHub, LinkedIn, Telegram, WhatsApp, Instagram, X (Twitter), Facebook, Signal e E-mail.
- **Indicador de Rolagem Bouncing:** Guia visual para incentivar a navegação vertical.

### 3.3 Banner Destaque de Engenharia Reversa

Seção assimétrica em gradiente horizontal com neon ciano para apresentar o estudo de caso de maior relevância técnica antes da vitrine completa de projetos.

### 3.4 Vitrine de Projetos (`#projetos`)

- **Controles:**
  - Barra de busca instantânea filtrando título, resumo ou palavras-chave.
  - Botões segmentados M3 Expressive para seleção de categoria (*Todos, Scripts & OS, Bots & Automação, Web & Dashboards, Engenharia Reversa, Game Mods*).
- **Grid Responsivo:** Layout adaptável de 1 a 3 colunas contendo os 9 projetos cadastrados no dataset com tags e ações rápidas.

### 3.5 Sistema de Modais Responsivos (`#project-modal` & `#whatsapp-modal`)

- **Arquitetura Anti-Travamento:** O modal utiliza flexbox isolado com container de rolagem dedicado (`overscroll-contain`), desativando propositalmente o efeito 3D Tilt durante a exibição para evitar concorrência no pipeline de renderização do WebKit.
- **Dismissibilização:** Fechamento ativado por:
  - Clique no botão de fechar (ícone X no topo direito).
  - Clique/Toque na área translúcida fora do card (backdrop).
  - Pressionar a tecla Escape.

---

## 4. Engenharia de Animações (Sem Canvas 2D)

### 4.1 Fundo Orgânico em Camadas (Lava Lamp Metamórfica)

Três esferas de gradiente radial com desfoque nativo via CSS (`filter: blur(90px)`) que utilizam animação keyframe com interpolação `cubic-bezier`:

$$\text{border-radius: } 42\% \ 58\% \ 70\% \ 30\% \ / \ 45\% \ 45\% \ 55\% \ 55\%$$

A metamorfose contínua simula o comportamento de fluidos orgânicos.

### 4.2 Holofote Dinâmico de Cursor (Spotlight Overlay)

O fundo captura o movimento do ponteiro/dedo e atualiza variáveis CSS customizadas em tempo real:

```javascript
spotlight.style.setProperty('--mouse-x', `${x}px`);
spotlight.style.setProperty('--mouse-y', `${y}px`);
```

A iluminação radial responde com um gradiente dinâmico de $800\text{px}$:

```css
background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(128, 179, 255, 0.08), transparent 80%);
```

### 4.3 Física de Micropartículas via DOM e LERP

Um pool de elementos `HTMLDivElement` é atualizado a cada frame via `requestAnimationFrame` através do algoritmo de interpolação linear (LERP):

$$x_{t+1} = x_t + (x_{\text{alvo}} - x_t) \cdot \alpha$$

Onde $\alpha = 0.05$ garante um movimento fluido e amortecido sem sobrecarregar a CPU. Ao clicar na tela, vetores de velocidade aleatórios impulsionam o estouro (*burst*) de partículas.

### 4.4 Rotação 3D Tátil (3D Tilt Card Effect)

Calcula as coordenadas locais do cursor relativas ao centro geométrico do card:

$$\text{rotateX} = \left( \frac{y - y_{\text{centro}}}{y_{\text{centro}}} \right) \cdot -8^{\circ}$$

$$\text{rotateY} = \left( \frac{x - x_{\text{centro}}}{x_{\text{centro}}} \right) \cdot 8^{\circ}$$

A rotação é aplicada via:

```css
transform: perspective(1000px) rotateX(...) rotateY(...) scale(1.02);
```

---

## 5. Sintetizador de Áudio Integrado (Web Audio API)

Não utiliza nenhum arquivo externo de áudio (`.mp3` ou `.wav`), prevenindo atrasos de carregamento de rede. Os sons são sintetizados nativamente em tempo real:

- **Som de Clique:** Oscilador de onda senoidal (*sine*) variando de $600\text{Hz}$ a $1200\text{Hz}$ em $0.05\text{s}$ com decaimento exponencial de ganho.
- **Som de Hover:** Oscilador de onda triangular (*triangle*) em $300\text{Hz}$ durante $0.03\text{s}$ com ganho sutil de $0.02$.

---

## 6. Compatibilidade & Performance Mobile (iOS WebKit Focus)

- **Passive Event Listeners:** Eventos de toque utilizam `{ passive: true }` para garantir rolagem suave da tela.
- **Clipboard Fallback:** Suporte para navegadores que restringem `navigator.clipboard` por meio da criação e seleção temporária de um elemento `<textarea>`.
- **Responsive Breakpoints:** Configurado com classes utilitárias mobile-first do Tailwind CSS (`sm:`, `md:`, `lg:`).