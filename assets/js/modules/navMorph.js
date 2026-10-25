/**
 * Navigation Scroll Morph & Fluid Docking Controller — Portfólio Luccas
 * 
 * Synchronously morphs the hero profile avatar squircle (105x105 container)
 * and the name "Luccas" directly into the top-left floating header pill capsule.
 * 
 * Key Principles:
 * 1. ZERO DUPLICATION: In the exact same scroll step where morphing begins, the
 *    hero static elements (#hero-avatar-wrapper and #hero-title) are hidden.
 * 2. SEAMLESS MORPH: The #header-brand container acts as the morphing capsule
 *    from frame 0, starting with the exact dimensions, position, and border-radius
 *    of the hero avatar box and morphing into the menu pill.
 * 3. SYNCHRONIZED TIMING: The avatar squircle, profile photo, and name animate
 *    together on the exact same scroll window, uniting into the pill as it glides
 *    fluidly into the header via GPU-accelerated translate3d.
 */

class NavMorphController {
  constructor() {
    this.header = null;
    this.headerBrand = null;
    this.headerLogo = null;
    this.headerTitle = null;

    this.heroAvatarWrapper = null;
    this.heroAvatar = null;
    this.heroAvatarImg = null;
    this.heroTitle = null;

    this.isInitialized = false;
    this.ticking = false;

    // Cached layout metrics
    this.metrics = {
      heroAvatarDocX: 0,
      heroAvatarDocY: 0,
      heroAvatarW: 105,
      heroAvatarH: 105,

      heroTitleDocX: 0,
      heroTitleDocY: 0,
      heroTitleW: 0,
      heroTitleH: 0,

      dockedBrandCenterX: 0,
      dockedBrandCenterY: 0,
      dockedBrandW: 124,
      dockedBrandH: 45.6,

      dockedLogoW: 36,
      dockedLogoH: 36,
      dockedLogoOffsetX: 4.8,
      dockedLogoOffsetY: 3.8,

      dockedTitleW: 56,
      dockedTitleH: 24,
      dockedTitleOffsetX: 51.2,
      dockedTitleOffsetY: 10.8,

      titleScaleRatio: 3.8,

      scrollStart: 60,
      scrollDistance: 160,
      scrollEnd: 220,
    };

    this.boundOnScroll = this.onScroll.bind(this);
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnThemeOrLang = this.onThemeOrLang.bind(this);
  }

  init() {
    this.header = document.getElementById('main-header');
    this.headerBrand = document.getElementById('header-brand');
    this.headerLogo = document.getElementById('header-brand-logo');
    this.headerTitle = document.getElementById('header-brand-title');

    this.heroAvatarWrapper = document.getElementById('hero-avatar-wrapper');
    this.heroAvatar = document.getElementById('hero-avatar');
    this.heroAvatarImg = document.getElementById('hero-avatar-img');
    this.heroTitle = document.getElementById('hero-title');

    if (!this.headerBrand || !this.headerLogo || !this.heroAvatar || !this.heroTitle || !this.header) {
      console.warn('[NavMorph] Required elements not found in DOM.');
      return;
    }

    // Bind click to smooth scroll to top
    this.headerBrand.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', this.boundOnScroll, { passive: true });
    window.addEventListener('resize', this.boundOnResize, { passive: true });
    window.addEventListener('orientationchange', this.boundOnResize, { passive: true });
    window.addEventListener('i18n:change', this.boundOnThemeOrLang, { passive: true });
    window.addEventListener('themechange', this.boundOnThemeOrLang, { passive: true });

    // Initial measurement & layout
    this.measureMetrics();
    this.update();
    this.isInitialized = true;
  }

  measureMetrics() {
    if (!this.heroAvatar || !this.heroTitle || !this.headerBrand || !this.headerLogo || !this.headerTitle || !this.header) return;

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // 1. Measure hero elements in document coordinates
    const prevHeroWrapperVis = this.heroAvatarWrapper ? this.heroAvatarWrapper.style.visibility : '';
    const prevHeroTitleVis = this.heroTitle.style.visibility;
    if (this.heroAvatarWrapper) this.heroAvatarWrapper.style.visibility = 'visible';
    this.heroTitle.style.visibility = 'visible';

    const heroAvatarRect = this.heroAvatar.getBoundingClientRect();
    this.metrics.heroAvatarDocX = heroAvatarRect.left + heroAvatarRect.width / 2;
    this.metrics.heroAvatarDocY = heroAvatarRect.top + scrollY + heroAvatarRect.height / 2;
    this.metrics.heroAvatarW = heroAvatarRect.width || 105;
    this.metrics.heroAvatarH = heroAvatarRect.height || 105;

    const heroTitleRect = this.heroTitle.getBoundingClientRect();
    this.metrics.heroTitleDocX = heroTitleRect.left + heroTitleRect.width / 2;
    this.metrics.heroTitleDocY = heroTitleRect.top + scrollY + heroTitleRect.height / 2;
    this.metrics.heroTitleW = heroTitleRect.width;
    this.metrics.heroTitleH = heroTitleRect.height;

    // Restore hero visibility
    if (this.heroAvatarWrapper) this.heroAvatarWrapper.style.visibility = prevHeroWrapperVis;
    this.heroTitle.style.visibility = prevHeroTitleVis;

    // 2. Measure Docked Destination Bounds accurately in natural flex layout
    const prevBrandCss = this.headerBrand.style.cssText;
    const prevLogoCss = this.headerLogo.style.cssText;
    const prevTitleCss = this.headerTitle.style.cssText;

    this.headerBrand.style.cssText = '';
    this.headerLogo.style.cssText = '';
    this.headerTitle.style.cssText = '';
    this.headerBrand.classList.add('is-docked');

    const brandRect = this.headerBrand.getBoundingClientRect();
    this.metrics.dockedBrandCenterX = brandRect.left + brandRect.width / 2;
    this.metrics.dockedBrandCenterY = brandRect.top + brandRect.height / 2;
    this.metrics.dockedBrandW = brandRect.width;
    this.metrics.dockedBrandH = brandRect.height;

    const logoRect = this.headerLogo.getBoundingClientRect();
    this.metrics.dockedLogoW = logoRect.width || 36;
    this.metrics.dockedLogoH = logoRect.height || 36;
    this.metrics.dockedLogoOffsetX = logoRect.left - brandRect.left;
    this.metrics.dockedLogoOffsetY = logoRect.top - brandRect.top;

    const titleRect = this.headerTitle.getBoundingClientRect();
    this.metrics.dockedTitleW = titleRect.width;
    this.metrics.dockedTitleH = titleRect.height;
    this.metrics.dockedTitleOffsetX = titleRect.left - brandRect.left;
    this.metrics.dockedTitleOffsetY = titleRect.top - brandRect.top;

    // Ratio between hero heading font size and docked brand font size
    const heroFontSize = parseFloat(window.getComputedStyle(this.heroTitle).fontSize) || 64;
    const targetFontSize = parseFloat(window.getComputedStyle(this.headerTitle).fontSize) || 16.8;
    this.metrics.titleScaleRatio = targetFontSize > 0 ? (heroFontSize / targetFontSize) : 3.8;

    // Restore brand styles
    this.headerBrand.classList.remove('is-docked');
    this.headerBrand.style.cssText = prevBrandCss;
    this.headerLogo.style.cssText = prevLogoCss;
    this.headerTitle.style.cssText = prevTitleCss;

    // 3. Dynamic scroll window:
    // Starts when hero avatar nears ~200px from the top of the viewport
    // Completes over a smooth 160px scroll distance
    this.metrics.scrollStart = Math.max(30, Math.round(this.metrics.heroAvatarDocY - 200));
    this.metrics.scrollDistance = 160;
    this.metrics.scrollEnd = this.metrics.scrollStart + this.metrics.scrollDistance;
  }

  onResize() {
    this.measureMetrics();
    this.update();
  }

  onThemeOrLang() {
    this.measureMetrics();
    this.update();
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.update();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  update() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const m = this.metrics;

    // Single unified progress 0..1 for container, avatar, and title
    const pRaw = (scrollY - m.scrollStart) / m.scrollDistance;
    const p = Math.max(0, Math.min(1, pRaw));

    // === CASE 1: Initial Hero State (p <= 0) ===
    if (p <= 0) {
      if (this.heroAvatarWrapper) {
        this.heroAvatarWrapper.style.visibility = '';
      }
      this.heroTitle.style.visibility = '';

      this.headerBrand.classList.remove('is-docked');
      this.headerBrand.style.visibility = 'hidden';
      this.headerBrand.style.opacity = '0';
      this.headerBrand.style.cssText = '';

      this.headerLogo.style.cssText = '';
      this.headerTitle.style.cssText = '';
      return;
    }

    // === CASE 2: Fully Docked State (p >= 1) ===
    if (p >= 1) {
      if (this.heroAvatarWrapper) {
        this.heroAvatarWrapper.style.visibility = 'hidden';
      }
      this.heroTitle.style.visibility = 'hidden';

      this.headerBrand.classList.add('is-docked');
      this.headerBrand.style.cssText = '';
      this.headerBrand.style.visibility = 'visible';
      this.headerBrand.style.opacity = '1';

      this.headerLogo.style.cssText = '';
      this.headerTitle.style.cssText = '';
      return;
    }

    // === CASE 3: In Motion — Fluid Morphing Handoff (0 < p < 1) ===
    // 1. Instantly hide static hero elements to eliminate duplicate photos & names
    if (this.heroAvatarWrapper) {
      this.heroAvatarWrapper.style.visibility = 'hidden';
    }
    this.heroTitle.style.visibility = 'hidden';

    // 2. Compute smooth curves
    const t = this.easeInOutCubic(p);
    const tShape = this.easeInOutCubic(p);
    const tLogo = this.easeOutCubic(p);
    // Title moves vertically into capsule and scales down promptly to unify with capsule
    const tTitleY = this.easeOutCubic(Math.min(1, p * 1.6));
    const tTitleScale = this.easeOutCubic(Math.min(1, p * 1.5));

    // Current hero avatar viewport position
    const heroAvatarCurrentCenterX = m.heroAvatarDocX;
    const heroAvatarCurrentCenterY = m.heroAvatarDocY - scrollY;

    // Vector displacement from docked header brand center to current hero avatar center
    const deltaX = heroAvatarCurrentCenterX - m.dockedBrandCenterX;
    const deltaY = heroAvatarCurrentCenterY - m.dockedBrandCenterY;

    const curDeltaX = deltaX * (1 - t);
    const curDeltaY = deltaY * (1 - t);

    // Capsule dimensions & border-radius
    const curW = m.heroAvatarW + (m.dockedBrandW - m.heroAvatarW) * tShape;
    const curH = m.heroAvatarH + (m.dockedBrandH - m.heroAvatarH) * tShape;

    // Border radius: squircle (36px) -> capsule pill (dockedBrandH / 2)
    const startRadius = 36;
    const endRadius = m.dockedBrandH / 2;
    const curRadius = startRadius + (endRadius - startRadius) * tShape;

    // Border width: 2px (hero) -> 1px (docked)
    const curBorderWidth = 2 + (1 - 2) * tShape;
    const curBg = t < 0.6 ? 'var(--surface-container)' : 'var(--surface-card)';

    // Apply styles to morphing container (#header-brand)
    this.headerBrand.classList.remove('is-docked');
    this.headerBrand.style.visibility = 'visible';
    this.headerBrand.style.opacity = '1';
    this.headerBrand.style.transform = `translate3d(${curDeltaX.toFixed(2)}px, ${curDeltaY.toFixed(2)}px, 0)`;
    this.headerBrand.style.width = `${curW.toFixed(2)}px`;
    this.headerBrand.style.height = `${curH.toFixed(2)}px`;
    this.headerBrand.style.borderRadius = `${curRadius.toFixed(2)}px`;
    this.headerBrand.style.borderWidth = `${curBorderWidth.toFixed(2)}px`;
    this.headerBrand.style.borderStyle = 'solid';
    this.headerBrand.style.borderColor = 'var(--border-precision)';
    this.headerBrand.style.background = curBg;
    this.headerBrand.style.padding = '0';
    this.headerBrand.style.overflow = 'visible';
    this.headerBrand.style.zIndex = '105';
    this.headerBrand.style.boxSizing = 'border-box';
    this.headerBrand.style.display = 'flex';
    this.headerBrand.style.alignItems = 'center';
    this.headerBrand.style.position = 'relative';
    this.headerBrand.style.transition = 'none';

    // 3. Photo inside Capsule (#header-brand-logo)
    // Starts filling the 101x101 squircle content area with 34px radius
    const startLogoW = m.heroAvatarW - 4;
    const startLogoH = m.heroAvatarH - 4;
    const startLogoRadius = 34;

    const curLogoX = 0 + (m.dockedLogoOffsetX - 0) * tLogo;
    const curLogoY = 0 + (m.dockedLogoOffsetY - 0) * tLogo;
    const curLogoW = startLogoW + (m.dockedLogoW - startLogoW) * tLogo;
    const curLogoH = startLogoH + (m.dockedLogoH - startLogoH) * tLogo;
    const curLogoRadius = startLogoRadius + (m.dockedLogoW / 2 - startLogoRadius) * tLogo;

    // Dynamically widen capsule during title entry to comfortably accommodate both photo and name
    const titleEnterProgress = Math.max(0, Math.min(1, (tTitleY - 0.2) / 0.8));
    const contentNeededW = curLogoX + curLogoW + 10 + m.dockedTitleW + 14;
    const finalW = Math.max(curW, curW + (contentNeededW - curW) * titleEnterProgress);

    this.headerBrand.style.width = `${finalW.toFixed(2)}px`;

    this.headerLogo.style.position = 'absolute';
    this.headerLogo.style.left = `${curLogoX.toFixed(2)}px`;
    this.headerLogo.style.top = `${curLogoY.toFixed(2)}px`;
    this.headerLogo.style.width = `${curLogoW.toFixed(2)}px`;
    this.headerLogo.style.height = `${curLogoH.toFixed(2)}px`;
    this.headerLogo.style.borderRadius = `${curLogoRadius.toFixed(2)}px`;
    this.headerLogo.style.objectFit = 'cover';
    this.headerLogo.style.margin = '0';
    this.headerLogo.style.border = 'none';
    this.headerLogo.style.transform = 'none';
    this.headerLogo.style.opacity = '1';
    this.headerLogo.style.transition = 'none';

    // 4. Name ("Luccas" — #header-brand-title)
    // Relative position from capsule center at start (t = 0):
    // In hero: centered horizontally with avatar box (0px), and 119px below center
    const startTitleRelCenterX = 0;
    const startTitleRelCenterY = m.heroTitleDocY - m.heroAvatarDocY;

    // Relative position from capsule center when docked (t = 1):
    const dockedTitleRelCenterX = (m.dockedTitleOffsetX + m.dockedTitleW / 2) - m.dockedBrandW / 2;
    const dockedTitleRelCenterY = (m.dockedTitleOffsetY + m.dockedTitleH / 2) - m.dockedBrandH / 2;

    const curTitleRelCenterX = startTitleRelCenterX + (dockedTitleRelCenterX - startTitleRelCenterX) * t;
    const curTitleRelCenterY = startTitleRelCenterY + (dockedTitleRelCenterY - startTitleRelCenterY) * tTitleY;

    const curTitleScale = m.titleScaleRatio + (1.0 - m.titleScaleRatio) * tTitleScale;

    // Translate coordinates inside capsule relative to top-left (0,0):
    const baseTitleX = (finalW / 2 + curTitleRelCenterX) - m.dockedTitleW / 2;
    const curTitleY = (curH / 2 + curTitleRelCenterY) - m.dockedTitleH / 2;

    // Guarantee that title never overlaps the photo horizontally as it slides inside
    const minSafeTitleX = curLogoX + curLogoW + 8;
    const finalTitleX = titleEnterProgress > 0.4 ? Math.max(baseTitleX, minSafeTitleX) : baseTitleX;

    this.headerTitle.style.position = 'absolute';
    this.headerTitle.style.left = `${finalTitleX.toFixed(2)}px`;
    this.headerTitle.style.top = `${curTitleY.toFixed(2)}px`;
    this.headerTitle.style.margin = '0';
    this.headerTitle.style.transformOrigin = 'center center';
    this.headerTitle.style.transform = `scale(${curTitleScale.toFixed(3)})`;
    this.headerTitle.style.opacity = '1';
    this.headerTitle.style.fontWeight = '800';
    this.headerTitle.style.transition = 'none';
  }
}

export const navMorph = new NavMorphController();
window.navMorph = navMorph;
