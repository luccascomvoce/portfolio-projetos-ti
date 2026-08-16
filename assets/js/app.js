/**
 * Main Application Orchestrator — Portfólio Luccas
 * Bootstraps modules, binds event listeners and ensures seamless initialization
 */

import { SITE_CONFIG } from './config.js';
import { soundEngine } from './modules/audio.js';
import { initSpotlight } from './modules/spotlight.js';
import { initParticles } from './modules/particles.js';
import { initTypewriter } from './modules/typewriter.js';
import { projectFilter } from './modules/projectFilter.js';
import { modalManager } from './modules/modal.js';
import { articleCarousel } from './modules/articleCarousel.js';
import { applyTiltEffect } from './modules/tilt.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Visual Effects (Zero Canvas 2D Engine)
  initSpotlight();
  initParticles();

  // 2. Initialize Hero Typewriter
  initTypewriter('typewriter-text', SITE_CONFIG.typewriterPhrases, 55, 30, 2400);

  // 3. Initialize Modals, Showcase Filters and Article Carousel
  modalManager.init();
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
  const audioIcon = document.getElementById('audio-icon');

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const active = soundEngine.toggleSound();
      if (active) {
        audioToggleBtn.classList.add('active');
        audioToggleBtn.setAttribute('title', 'Desativar Sons da Interface');
        if (audioIcon) {
          audioIcon.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          `;
        }
      } else {
        audioToggleBtn.classList.remove('active');
        audioToggleBtn.setAttribute('title', 'Ativar Sons da Interface');
        if (audioIcon) {
          audioIcon.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          `;
        }
      }
    });

    audioToggleBtn.addEventListener('mouseenter', () => soundEngine.playHover());
  }

  // 7. Attach sound cues to all interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .social-pill');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => soundEngine.playHover(), { passive: true });
    el.addEventListener('click', () => soundEngine.playClick(), { passive: true });
  });

  console.log('[System] Portfólio Luccas inicializado com sucesso (M3 Expressive Modular Architecture).');
});
