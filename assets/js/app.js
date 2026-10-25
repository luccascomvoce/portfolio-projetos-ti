/**
 * Main Application Orchestrator — Portfólio Luccas
 * Bootstraps modules, binds event listeners and ensures seamless initialization
 */

import { SITE_CONFIG } from './config.js';
import { i18n, languageManager } from './i18n/i18n.js';
import { soundEngine } from './modules/audio.js';
import { initSpotlight } from './modules/spotlight.js';
import { projectFilter } from './modules/projectFilter.js';
import { directoryTree } from './modules/directoryTree.js';
import { modalManager } from './modules/modal.js';
import { cinemaPlayer } from './modules/cinemaPlayer.js';
import { articleCarousel } from './modules/articleCarousel.js';
import { deepLinkManager } from './modules/deepLink.js';
import { applyTiltEffect } from './modules/tilt.js';
import { themeManager } from './modules/theme.js';
import { preferencesMenu } from './modules/preferencesMenu.js';
import { contactModal } from './modules/contactModal.js';
import { navMorph } from './modules/navMorph.js';

function bootstrapApp() {
  // 0. Initialize Theme Manager, i18n and Unified Preferences Menu
  themeManager.init();
  languageManager.init();
  preferencesMenu.init();
  themeManager.applyTheme(themeManager.currentTheme); // refaz rótulos do tema no idioma resolvido

  // 1. Initialize Visual Effects (Zero Canvas 2D Engine) & Nav Morphing
  initSpotlight();
  navMorph.init();

  // 2. Initialize Modals, Showcase Filters, Directory Tree, Article Carousel, Cinema Player and Deep Linking
  modalManager.init();
  contactModal.init();
  cinemaPlayer.init();
  projectFilter.init();
  directoryTree.init();
  articleCarousel.init();
  deepLinkManager.init();

  // 4. Hero Avatar 3D Tilt
  const heroAvatar = document.querySelector('.hero-avatar');
  if (heroAvatar) {
    applyTiltEffect(heroAvatar, 12);
  }

  // 5. Highlight Banner Trigger
  const bannerBtn = document.getElementById('btn-open-highlight-modal');
  if (bannerBtn) {
    bannerBtn.addEventListener('click', () => {
      soundEngine.playClick();
      const highlightCard = document.querySelector('.highlight-banner');
      modalManager.openProject('engenharia-reversa', highlightCard);
    });
    bannerBtn.addEventListener('mouseenter', () => soundEngine.playHover());
  }

  // 6. Header Actions Horizontal Scroll & Drag Engine
  const headerActions = document.querySelector('.header-actions');
  if (headerActions) {
    // Mouse wheel horizontal scroll
    headerActions.addEventListener('wheel', (e) => {
      if (headerActions.scrollWidth > headerActions.clientWidth) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          headerActions.scrollLeft += e.deltaY;
        }
      }
    }, { passive: false });

    // Mouse drag-to-scroll
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    headerActions.addEventListener('mousedown', (e) => {
      // Don't drag if clicking buttons directly with left click
      isDown = true;
      startX = e.pageX - headerActions.offsetLeft;
      scrollLeft = headerActions.scrollLeft;
    });

    headerActions.addEventListener('mouseleave', () => {
      isDown = false;
    });

    headerActions.addEventListener('mouseup', () => {
      isDown = false;
    });

    headerActions.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - headerActions.offsetLeft;
      const walk = (x - startX) * 1.5;
      headerActions.scrollLeft = scrollLeft - walk;
    });
  }

  // 8. Attach sound cues to all interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .social-pill');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => soundEngine.playHover(), { passive: true });
    el.addEventListener('click', () => soundEngine.playClick(), { passive: true });
  });

  // 9. Re-render dynamic modules when the language changes
  i18n.subscribe(() => {
    directoryTree.refresh();
    projectFilter.reapply();
    articleCarousel.reapply();
    articleCarousel.refreshOpenArticle();
    modalManager.refresh();
    contactModal.refresh();
    themeManager.applyTheme(themeManager.currentTheme);
  });

  console.log('[System] Portfólio Luccas inicializado com sucesso.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
