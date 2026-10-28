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
 * 3. ZERO LAYOUT JITTER: The morphing element uses position: absolute during motion,
 *    preventing any flex-reflow or displacement of the navigation actions capsule.
 * 4. SYNCHRONIZED TIMING: The avatar squircle, profile photo, and name animate
 *    together on the exact same scroll window, uniting into the pill as it glides
 *    fluidly into the header via GPU-accelerated translate3d with exact center tracking.
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
    this.cachedWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

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

      dockedBrandLeft: 0,
      dockedBrandTop: 0,
      dockedBrandCenterX: 0,
      dockedBrandCenterY: 0,
      dockedBrandW: 124,
      dockedBrandH: 48,

      dockedLogoW: 36,
      dockedLogoH: 36,
      dockedLogoOffsetX: 5,
      dockedLogoOffsetY: 5,

      dockedTitleW: 56,
      dockedTitleH: 24,
      dockedTitleOffsetX: 48,
      dockedTitleOffsetY: 12,

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

    this.cachedWidth = window.innerWidth;
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
    this.metrics.dockedBrandLeft = brandRect.left;
    this.metrics.dockedBrandTop = brandRect.top;
    this.metrics.dockedBrandCenterX = brandRect.left + brandRect.width / 2;
    this.metrics.dockedBrandCenterY = brandRect.top + brandRect.height / 2;
    this.metrics.dockedBrandW = brandRect.width;
    this.metrics.dockedBrandH = brandRect.height;

    const isMobile = window.innerWidth <= 768;
    const logoRect = this.headerLogo.getBoundingClientRect();
    this.metrics.dockedLogoW = logoRect.width || (isMobile ? 32 : 36);
    this.metrics.dockedLogoH = logoRect.height || (isMobile ? 32 : 36);

    const brandComputed = window.getComputedStyle(this.headerBrand);
    const borderLeft = parseFloat(brandComputed.borderLeftWidth) || 1;
    const borderTop = parseFloat(brandComputed.borderTopWidth) || 1;

    this.metrics.dockedLogoOffsetX = (logoRect.left - brandRect.left) - borderLeft;
    this.metrics.dockedLogoOffsetY = (logoRect.top - brandRect.top) - borderTop;

    const titleRect = this.headerTitle.getBoundingClientRect();
    this.metrics.dockedTitleW = titleRect.width;
    this.metrics.dockedTitleH = titleRect.height;
    this.metrics.dockedTitleOffsetX = (titleRect.left - brandRect.left) - borderLeft;
    this.metrics.dockedTitleOffsetY = (titleRect.top - brandRect.top) - borderTop;

    // Ratio between hero heading font size and docked brand font size
    const heroFontSize = parseFloat(window.getComputedStyle(this.heroTitle).fontSize) || (isMobile ? 40 : 64);
    const targetFontSize = parseFloat(window.getComputedStyle(this.headerTitle).fontSize) || (isMobile ? 14.7 : 16.8);
    this.metrics.titleScaleRatio = targetFontSize > 0 ? (heroFontSize / targetFontSize) : 3.8;

    // Restore brand styles
    this.headerBrand.classList.remove('is-docked');
    this.headerBrand.style.cssText = prevBrandCss;
    this.headerLogo.style.cssText = prevLogoCss;
    this.headerTitle.style.cssText = prevTitleCss;

    // 3. Dynamic scroll window:
    this.metrics.scrollStart = Math.max(20, Math.round(this.metrics.heroAvatarDocY - (isMobile ? 150 : 200)));
    this.metrics.scrollDistance = isMobile ? 140 : 160;
    this.metrics.scrollEnd = this.metrics.scrollStart + this.metrics.scrollDistance;
  }

  onResize() {
    const currentWidth = window.innerWidth;
    // Avoid layout thrashing on mobile browser address-bar hide/show vertical resizes
    if (Math.abs(currentWidth - this.cachedWidth) > 4) {
      this.cachedWidth = currentWidth;
      this.measureMetrics();
    }
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

    // 2. Synchronized smooth easing curves
    const t = this.easeInOutCubic(p);
    const tShape = this.easeInOutCubic(p);
    const tLogo = this.easeInOutCubic(p);
    const tTitle = this.easeInOutCubic(p);

    // Current hero avatar viewport position
    const heroAvatarCurrentCenterX = m.heroAvatarDocX;
    const heroAvatarCurrentCenterY = m.heroAvatarDocY - scrollY;

    // Capsule dimensions & border-radius
    const curW = m.heroAvatarW + (m.dockedBrandW - m.heroAvatarW) * tShape;
    const curH = m.heroAvatarH + (m.dockedBrandH - m.heroAvatarH) * tShape;

    // Target visual center of the morphing capsule
    const targetCenterX = heroAvatarCurrentCenterX + (m.dockedBrandCenterX - heroAvatarCurrentCenterX) * t;
    const targetCenterY = heroAvatarCurrentCenterY + (m.dockedBrandCenterY - heroAvatarCurrentCenterY) * t;

    // Displacement offset so the center of headerBrand exactly matches targetCenter
    const curDeltaX = targetCenterX - (m.dockedBrandLeft + curW / 2);
    const curDeltaY = targetCenterY - (m.dockedBrandTop + curH / 2);

    // Border radius: squircle (36px) -> capsule pill (dockedBrandH / 2)
    const startRadius = 36;
    const endRadius = m.dockedBrandH / 2;
    const curRadius = startRadius + (endRadius - startRadius) * tShape;

    // Border width: 2px (hero) -> 1px (docked)
    const curBorderWidth = 2 + (1 - 2) * tShape;
    const curBg = t < 0.6 ? 'var(--surface-container)' : 'var(--surface-card)';

    // Container styling:
    // Uses position: absolute to stay independent of flex layout during animation,
    // avoiding any displacement or jitter on .header-actions.
    this.headerBrand.classList.remove('is-docked');
    this.headerBrand.style.visibility = 'visible';
    this.headerBrand.style.opacity = '1';
    this.headerBrand.style.position = 'absolute';
    this.headerBrand.style.left = '0';
    this.headerBrand.style.top = '0';
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
    this.headerBrand.style.transition = 'none';

    // 3. Photo inside Capsule (#header-brand-logo)
    // At t=0: fills the 101x101 squircle content area with 34px radius
    const startLogoW = m.heroAvatarW - 4;
    const startLogoH = m.heroAvatarH - 4;
    const startLogoRadius = 34;

    const curLogoX = 0 + (m.dockedLogoOffsetX - 0) * tLogo;
    const curLogoY = 0 + (m.dockedLogoOffsetY - 0) * tLogo;
    const curLogoW = startLogoW + (m.dockedLogoW - startLogoW) * tLogo;
    const curLogoH = startLogoH + (m.dockedLogoH - startLogoH) * tLogo;
    const curLogoRadius = startLogoRadius + (m.dockedLogoW / 2 - startLogoRadius) * tLogo;

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
    // Start relative center offset: in hero, title is centered under avatar
    const startTitleRelCenterX = 0;
    const startTitleRelCenterY = m.heroTitleDocY - m.heroAvatarDocY;

    // Final docked title center relative to docked brand capsule center
    const dockedTitleRelCenterX = (m.dockedTitleOffsetX + m.dockedTitleW / 2) - m.dockedBrandW / 2;
    const dockedTitleRelCenterY = (m.dockedTitleOffsetY + m.dockedTitleH / 2) - m.dockedBrandH / 2;

    const curTitleRelCenterX = startTitleRelCenterX + (dockedTitleRelCenterX - startTitleRelCenterX) * tTitle;
    const curTitleRelCenterY = startTitleRelCenterY + (dockedTitleRelCenterY - startTitleRelCenterY) * tTitle;

    const curTitleScale = m.titleScaleRatio + (1.0 - m.titleScaleRatio) * tTitle;

    const curTitleX = (curW / 2 + curTitleRelCenterX) - m.dockedTitleW / 2;
    const curTitleY = (curH / 2 + curTitleRelCenterY) - m.dockedTitleH / 2;

    this.headerTitle.style.position = 'absolute';
    this.headerTitle.style.left = `${curTitleX.toFixed(2)}px`;
    this.headerTitle.style.top = `${curTitleY.toFixed(2)}px`;
    this.headerTitle.style.margin = '0';
    this.headerTitle.style.transformOrigin = 'center center';
    this.headerTitle.style.transform = `scale(${curTitleScale.toFixed(3)})`;
    this.headerTitle.style.opacity = '1';
    this.headerTitle.style.fontWeight = '800';
    this.headerTitle.style.color = 'var(--on-surface-bright)';
    this.headerTitle.style.transition = 'none';
  }
}

export const navMorph = new NavMorphController();
window.navMorph = navMorph;
