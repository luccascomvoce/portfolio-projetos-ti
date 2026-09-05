/**
 * Main Application Orchestrator — Portfólio Luccas
 * Bootstraps modules, binds event listeners and ensures seamless initialization
 */

import { SITE_CONFIG } from './config.js';
import { i18n, languageManager } from './i18n/i18n.js';
import { soundEngine } from './modules/audio.js';
import { initSpotlight } from './modules/spotlight.js';
import { initParticles } from './modules/particles.js';
import { typewriter } from './modules/typewriter.js';
import { projectFilter } from './modules/projectFilter.js';
import { modalManager } from './modules/modal.js';
import { cinemaPlayer } from './modules/cinemaPlayer.js';
import { articleCarousel } from './modules/articleCarousel.js';
import { applyTiltEffect } from './modules/tilt.js';
import { themeManager } from './modules/theme.js';

function updateAudioButton() {
  const btn = document.getElementById('audio-toggle-btn');
  if (!btn) return;
  const active = soundEngine.isSoundActive();
  btn.setAttribute('title', active ? i18n.t('nav.audio.on') : i18n.t('nav.audio.off'));
  btn.setAttribute('aria-pressed', String(active));
}

function renderAudioIcon(active) {
  const icon = document.getElementById('audio-icon');
  if (!icon) return;
  if (active) {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    `;
  } else {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 0. Initialize Theme Manager (Light/Dark + circular reveal) and i18n
  themeManager.init();
  languageManager.init();
  themeManager.applyTheme(themeManager.currentTheme); // refaz rótulos do tema no idioma resolvido

  // 1. Initialize Visual Effects (Zero Canvas 2D Engine)
  initSpotlight();
  initParticles();

  // 2. Initialize Hero Typewriter
  typewriter.init('typewriter-text', i18n.t('hero.typewriter', null, SITE_CONFIG.typewriterPhrases), 55, 30, 2400);

  // 3. Initialize Modals, Showcase Filters, Article Carousel and Cinema Player
  modalManager.init();
  cinemaPlayer.init();
  projectFilter.init();
  articleCarousel.init();

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

  // 6. Audio Toggle Button
  const audioToggleBtn = document.getElementById('audio-toggle-btn');

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const active = soundEngine.toggleSound();
      audioToggleBtn.classList.toggle('active', active);
      renderAudioIcon(active);
      updateAudioButton();
    });

    audioToggleBtn.addEventListener('mouseenter', () => soundEngine.playHover());
  }

  updateAudioButton();
  renderAudioIcon(soundEngine.isSoundActive());

  // 7. Header Actions Horizontal Scroll & Drag Engine
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
    typewriter.setPhrases(i18n.t('hero.typewriter', null, SITE_CONFIG.typewriterPhrases));
    projectFilter.reapply();
    articleCarousel.reapply();
    articleCarousel.refreshOpenArticle();
    modalManager.refresh();
    themeManager.applyTheme(themeManager.currentTheme);
    updateAudioButton();
  });

  console.log('[System] Portfólio Luccas inicializado com sucesso (M3 Expressive Modular Architecture).');
});
