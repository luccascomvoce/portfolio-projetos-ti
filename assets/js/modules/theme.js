/**
 * Theme Manager — Light/Dark mode with organic circular reveal transition
 * Resolves the initial theme (explicit choice > system preference > light fallback),
 * persists the user choice and animates theme changes from the header toggle button.
 */

import { i18n } from '../i18n/i18n.js';

const STORAGE_KEY = 'theme';
const SURFACES = { dark: '#080a0f', light: '#f8fafc' };

const themeManager = {
  toggleBtn: null,
  mediaQuery: null,
  currentTheme: 'light',
  isAnimating: false,

  resolveTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) { /* localStorage não disponível */ }
    if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  },

  applyMeta(theme) {
    const surface = SURFACES[theme] || SURFACES.light;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', surface);
    const metaScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaScheme) metaScheme.setAttribute('content', theme);
  },

  applyTheme(theme, { persist = false } = {}) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    this.applyMeta(theme);

    if (this.toggleBtn) {
      const isDark = theme === 'dark';
      this.toggleBtn.setAttribute('aria-pressed', String(isDark));
      this.toggleBtn.setAttribute('title', isDark ? i18n.t('nav.theme.toLight') : i18n.t('nav.theme.toDark'));
      this.toggleBtn.setAttribute('aria-label', isDark ? i18n.t('nav.theme.toLight') : i18n.t('nav.theme.toDark'));
    }

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
    }

    try {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    } catch (e) { /* ignore */ }
  },

  /* Circular reveal via the View Transitions API: the whole new theme (content included)
     expands from the click/touch coordinates. Falls back to an instant swap when unsupported. */
  animateTheme(targetTheme, { origin = null, persist = false } = {}) {
    if (this.isAnimating) return;
    if (this.currentTheme === targetTheme) {
      if (persist) {
        try { localStorage.setItem(STORAGE_KEY, targetTheme); } catch (e) { /* ignore */ }
      }
      return;
    }

    const reducedMotion = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof document.startViewTransition !== 'function' || reducedMotion) {
      this.applyTheme(targetTheme, { persist });
      return;
    }

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    if (origin) {
      if (typeof origin.clientX === 'number' && (origin.clientX > 0 || origin.clientY > 0)) {
        cx = origin.clientX;
        cy = origin.clientY;
      } else if (origin.target && origin.target.getBoundingClientRect) {
        const rect = origin.target.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height / 2;
      } else if (origin.getBoundingClientRect) {
        const rect = origin.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height / 2;
      }
    } else {
      const toggleBtn = document.getElementById('preferences-toggle-btn');
      if (toggleBtn) {
        const rect = toggleBtn.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height / 2;
      }
    }

    const radius = Math.ceil(Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    ));

    const root = document.documentElement;
    root.style.setProperty('--theme-reveal-x', `${Math.round(cx)}px`);
    root.style.setProperty('--theme-reveal-y', `${Math.round(cy)}px`);
    root.style.setProperty('--theme-reveal-radius', `${radius}px`);

    this.isAnimating = true;
    const transition = document.startViewTransition(() => {
      this.applyTheme(targetTheme, { persist });
    });

    transition.finished.finally(() => {
      this.isAnimating = false;
      root.style.removeProperty('--theme-reveal-x');
      root.style.removeProperty('--theme-reveal-y');
      root.style.removeProperty('--theme-reveal-radius');
    });
  },

  toggle() {
    if (this.isAnimating) return;
    this.animateTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  },

  init() {
    this.toggleBtn = document.getElementById('theme-toggle-btn');

    // Ensure a correct initial state even if the inline bootstrap was skipped.
    this.applyTheme(this.resolveTheme());

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Follow OS theme changes live while the user hasn't chosen explicitly.
    if (typeof window.matchMedia === 'function') {
      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = (e) => {
        let hasExplicit = false;
        try { hasExplicit = !!localStorage.getItem(STORAGE_KEY); } catch (err) { /* ignore */ }
        if (!hasExplicit) this.applyTheme(e.matches ? 'dark' : 'light');
      };
      if (typeof this.mediaQuery.addEventListener === 'function') {
        this.mediaQuery.addEventListener('change', onChange);
      } else if (typeof this.mediaQuery.addListener === 'function') {
        this.mediaQuery.addListener(onChange); // Safari mais antigo
      }
    }
  }
};

export { themeManager };