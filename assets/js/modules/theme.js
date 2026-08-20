/**
 * Theme Manager — Light/Dark mode with organic circular reveal transition
 * Resolves the initial theme (explicit choice > system preference > light fallback),
 * persists the user choice and animates theme changes from the header toggle button.
 */

const STORAGE_KEY = 'theme';
const SURFACES = { dark: '#090d14', light: '#f5f7fb' };

const themeManager = {
  revealEl: null,
  toggleBtn: null,
  mediaQuery: null,
  currentTheme: 'light',

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
      this.toggleBtn.setAttribute('title', isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro');
      this.toggleBtn.setAttribute('aria-label', isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    }

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
    }
  },

  /* Circular reveal from the toggle button center, then swap the theme underneath. */
  runReveal(targetTheme) {
    const reducedMotion = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canAnimate = this.revealEl && typeof this.revealEl.animate === 'function';

    if (canAnimate && !reducedMotion) {
      const btnRect = this.toggleBtn ? this.toggleBtn.getBoundingClientRect() : null;
      const cx = btnRect ? btnRect.left + btnRect.width / 2 : window.innerWidth / 2;
      const cy = btnRect ? btnRect.top + btnRect.height / 2 : window.innerHeight / 2;

      // Radius required to cover the whole viewport from the click center.
      const radius = Math.ceil(Math.hypot(
        Math.max(cx, window.innerWidth - cx),
        Math.max(cy, window.innerHeight - cy)
      ));
      const size = radius * 2;
      const reveal = this.revealEl;

      reveal.style.width = `${size}px`;
      reveal.style.height = `${size}px`;
      reveal.style.left = `${cx - radius}px`;
      reveal.style.top = `${cy - radius}px`;
      reveal.style.background = SURFACES[targetTheme] || SURFACES.light;
      reveal.style.transform = 'scale(0)';

      const animation = reveal.animate(
        [{ transform: 'scale(0)' }, { transform: 'scale(1)' }],
        { duration: 520, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'both' }
      );

      animation.onfinish = () => {
        this.applyTheme(targetTheme, { persist: true });
        reveal.style.transform = 'scale(0)';
        reveal.style.width = '0';
        reveal.style.height = '0';
        reveal.style.left = '0';
        reveal.style.top = '0';
        reveal.style.background = '';
      };
    } else {
      this.applyTheme(targetTheme, { persist: true });
    }
  },

  toggle() {
    this.runReveal(this.currentTheme === 'dark' ? 'light' : 'dark');
  },

  init() {
    this.revealEl = document.getElementById('theme-reveal');
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