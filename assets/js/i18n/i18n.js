/**
 * i18n Engine & Language Manager — Portfólio Luccas
 *
 * Arquitetura (dicionários de "override"):
 *  - O português (pt-BR) é a fonte de verdade e vive naturalmente no HTML
 *    estático e nos arquivos de dados (projectsData.js, articlesData.js,
 *    ARTICLE_CONTENTS e as frases do typewriter em config.js).
 *  - Cada idioma adicional é um único arquivo autocontido em `translations/`
 *    que sobrescreve as chaves para aquele locale.
 *  - `t('a.b.c', params, fallback)` resolve nesta ordem:
 *      1. dicionário do idioma ativo;
 *      2. `fallback` explícito (o padrão pt-BR passado pelo chamador);
 *      3. a própria chave.
 *  - Quando uma chave ainda não foi traduzida em um idioma, o site degrada
 *    graciosamente para o texto em português (nunca quebra a UI).
 */

import { LANGUAGES, DEFAULT_LANG, FALLBACK_LANG } from './languages.js';
import ptBR from './translations/pt-BR.js';
import en from './translations/en.js';
import es from './translations/es.js';

const DICTIONARIES = { 'pt-BR': ptBR, en, es };
const STORAGE_KEY = 'lang';

const OG_LOCALE = { 'pt-BR': 'pt_BR', en: 'en_US', es: 'es_ES' };

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function deepGet(obj, path) {
  if (!obj || !path) return undefined;
  return String(path)
    .split('.')
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function interpolate(value, params) {
  if (!params) return value;
  if (typeof value !== 'string') return value;
  return value.replace(/\{(\w+)\}/g, (_, k) => (params[k] !== undefined ? params[k] : `{${k}}`));
}

/* ------------------------------------------------------------------ */
/* i18n API pública                                                    */
/* ------------------------------------------------------------------ */

const state = {
  lang: DEFAULT_LANG,
  initialized: false,
  listeners: new Set(),
};

const i18n = {
  get lang() {
    return state.lang;
  },

  get languages() {
    return LANGUAGES;
  },

  get defaultLang() {
    return DEFAULT_LANG;
  },

  get ogLocale() {
    return OG_LOCALE[state.lang] || 'en_US';
  },

  /** Resolve uma chave com suporte a interpolação `{nome}` e fallback. */
  t(key, params = null, fallback = null) {
    let value = deepGet(DICTIONARIES[state.lang], key);
    if (value === undefined && state.lang !== DEFAULT_LANG) {
      value = deepGet(DICTIONARIES[DEFAULT_LANG], key);
    }
    if (value === undefined) value = fallback;
    if (value === undefined) value = key;
    return interpolate(value, params);
  },

  /** True quando a chave existe no idioma ativo (útil p/ "traduzido ou não"). */
  has(key) {
    return deepGet(DICTIONARIES[state.lang], key) !== undefined;
  },

  /** Acesso direto ao dicionário de um idioma específico. */
  dictionary(lang) {
    return DICTIONARIES[lang] || null;
  },

  /** Registra um callback chamado a cada troca de idioma. */
  subscribe(fn) {
    state.listeners.add(fn);
    return () => state.listeners.delete(fn);
  },
};

/* ------------------------------------------------------------------ */
/* Language Manager (singleton — espelha o padrão do themeManager)      */
/* ------------------------------------------------------------------ */

const languageManager = {
  toggleBtn: null,
  menuEl: null,
  codeEl: null,
  isMenuOpen: false,
  originals: new WeakMap(),
  metaDefaults: null,

  resolveLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && DICTIONARIES[stored]) return stored;
    } catch (e) { /* localStorage indisponível */ }

    if (typeof navigator !== 'undefined' && navigator.language) {
      const primary = navigator.language.toLowerCase().split('-')[0];
      for (const lang of LANGUAGES) {
        if (lang.code.toLowerCase().split('-')[0] === primary) return lang.code;
      }
    }
    return FALLBACK_LANG;
  },

  cacheOriginal(el) {
    if (this.originals.has(el)) return;
    const attrs = {};
    const spec = el.getAttribute('data-i18n-attr') || '';
    spec.split(';').forEach((part) => {
      const idx = part.indexOf(':');
      if (idx === -1) return;
      const attr = part.slice(0, idx).trim();
      if (attr) attrs[attr] = el.getAttribute(attr);
    });
    this.originals.set(el, { text: el.textContent, attrs });
  },

  applyDOM() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      this.cacheOriginal(el);
      el.textContent = i18n.t(key, null, this.originals.get(el).text);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr') || '';
      this.cacheOriginal(el);
      const original = this.originals.get(el);
      spec.split(';').forEach((part) => {
        const idx = part.indexOf(':');
        if (idx === -1) return;
        const attr = part.slice(0, idx).trim();
        const key = part.slice(idx + 1).trim();
        if (!attr || !key) return;
        el.setAttribute(attr, i18n.t(key, null, original.attrs[attr] ?? ''));
      });
    });
  },

  captureMetaDefaults() {
    if (this.metaDefaults) return;
    this.metaDefaults = {};
    const map = {
      description: ['meta[name="description"]', 'content'],
      ogTitle: ['meta[property="og:title"]', 'content'],
      ogDescription: ['meta[property="og:description"]', 'content'],
      ogImageAlt: ['meta[property="og:image:alt"]', 'content'],
      twitterTitle: ['meta[name="twitter:title"]', 'content'],
      twitterDescription: ['meta[name="twitter:description"]', 'content'],
    };
    this.metaDefaults.title = document.title;
    Object.entries(map).forEach(([key, sel]) => {
      const el = document.querySelector(sel[0]);
      this.metaDefaults[key] = el ? el.getAttribute(sel[1]) : '';
    });
  },

  applyMeta() {
    this.captureMetaDefaults();
    const t = (key, fallback) => i18n.t(`meta.${key}`, null, fallback);

    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.setAttribute('data-lang', state.lang);

    document.title = t('title', this.metaDefaults.title);

    const setMeta = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el && val) el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', 'content', t('description', this.metaDefaults.description));
    setMeta('meta[property="og:title"]', 'content', t('ogTitle', this.metaDefaults.ogTitle));
    setMeta('meta[property="og:description"]', 'content', t('ogDescription', this.metaDefaults.ogDescription));
    setMeta('meta[property="og:image:alt"]', 'content', t('ogImageAlt', this.metaDefaults.ogImageAlt));
    setMeta('meta[name="twitter:title"]', 'content', t('twitterTitle', this.metaDefaults.twitterTitle));
    setMeta('meta[name="twitter:description"]', 'content', t('twitterDescription', this.metaDefaults.twitterDescription));

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', i18n.ogLocale);
  },

  setLanguage(code, { persist = true } = {}) {
    const next = DICTIONARIES[code] || code === DEFAULT_LANG ? code : DEFAULT_LANG;
    state.lang = next;

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
    }

    this.applyMeta();
    this.applyDOM();
    this.renderMenu();

    window.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: next } }));
    state.listeners.forEach((fn) => {
      try { fn(next); } catch (e) { /* ignore */ }
    });
  },

  renderMenu() {
    if (!this.menuEl) return;

    this.menuEl.innerHTML = '';
    LANGUAGES.forEach((lang) => {
      const item = document.createElement('li');
      item.setAttribute('role', 'none');

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-menu-btn';
      btn.setAttribute('role', 'menuitemradio');
      btn.setAttribute('aria-checked', String(lang.code === state.lang));
      btn.dataset.lang = lang.code;
      btn.innerHTML = `<span class="lang-menu-native">${lang.nativeName}</span><span class="lang-menu-code">${lang.short}</span>`;

      btn.addEventListener('click', () => {
        this.setLanguage(lang.code);
        this.closeMenu();
      });

      item.appendChild(btn);
      this.menuEl.appendChild(item);
    });

    if (this.codeEl) {
      const active = LANGUAGES.find((lang) => lang.code === state.lang);
      if (active) this.codeEl.textContent = active.short;
    }
  },

  openMenu() {
    if (!this.menuEl || !this.toggleBtn) return;
    const rect = this.toggleBtn.getBoundingClientRect();
    this.menuEl.style.top = `${rect.bottom + 8}px`;
    this.menuEl.style.right = `${Math.max(8, window.innerWidth - rect.right)}px`;
    this.menuEl.hidden = false;
    this.isMenuOpen = true;
    this.toggleBtn.setAttribute('aria-expanded', 'true');

    const items = this.menuEl.querySelectorAll('.lang-menu-btn');
    if (items.length) items[0].focus();
  },

  closeMenu() {
    if (!this.menuEl) return;
    this.menuEl.hidden = true;
    this.isMenuOpen = false;
    if (this.toggleBtn) this.toggleBtn.setAttribute('aria-expanded', 'false');
  },

  toggleMenu() {
    if (this.isMenuOpen) this.closeMenu();
    else this.openMenu();
  },

  init() {
    this.toggleBtn = document.getElementById('lang-toggle-btn');
    this.menuEl = document.getElementById('lang-menu');
    this.codeEl = document.getElementById('lang-toggle-code');

    // Move o menu para <body>: o header usa `transform` (que cria containing block
    // para `position: fixed`) e `.header-actions` tem `overflow` — ambos quebrariam
    // o posicionamento do dropdown.
    if (this.menuEl && document.body) document.body.appendChild(this.menuEl);

    state.lang = this.resolveLang();
    this.applyMeta();
    this.applyDOM(); // captura os originais (pt-BR) antes de qualquer troca
    this.renderMenu();

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMenu();
      });
    }

    document.addEventListener('click', (e) => {
      if (!this.isMenuOpen) return;
      const insideMenu = this.menuEl && this.menuEl.contains(e.target);
      const insideToggle = this.toggleBtn && this.toggleBtn.contains(e.target);
      if (!insideMenu && !insideToggle) this.closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMenu();
    });

    if (this.menuEl) {
      this.menuEl.addEventListener('keydown', (e) => {
        const items = Array.from(this.menuEl.querySelectorAll('.lang-menu-btn'));
        if (!items.length) return;
        const idx = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          items[(idx + 1) % items.length].focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          items[(idx - 1 + items.length) % items.length].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          items[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          items[items.length - 1].focus();
        }
      });
    }

    state.initialized = true;
  },
};

export { i18n, languageManager };