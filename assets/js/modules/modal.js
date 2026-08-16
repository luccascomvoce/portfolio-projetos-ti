/**
 * Responsive Modal System with FLIP Organic Expansion & Collapse Engine
 * Expands organically from the originating card geometry and smoothly collapses back on dismiss
 */

import { PROJECTS_DATA } from '../data/projectsData.js';
import { setTiltEnabled } from './tilt.js';
import { soundEngine } from './audio.js';

class ModalController {
  constructor() {
    this.overlay = null;
    this.container = null;
    this.titleEl = null;
    this.badgeEl = null;
    this.bodyEl = null;
    this.closeBtn = null;
    this.originEl = null;
    this.isAnimating = false;
  }

  init() {
    this.overlay = document.getElementById('project-modal');
    if (!this.overlay) return;

    this.container = this.overlay.querySelector('.modal-container');
    this.titleEl = document.getElementById('modal-project-title');
    this.badgeEl = document.getElementById('modal-project-badge');
    this.bodyEl = document.getElementById('modal-project-body');
    this.closeBtn = document.getElementById('modal-close-btn');

    // Close button click
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        soundEngine.playClick();
        this.close();
      });
    }

    // Backdrop click
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        soundEngine.playClick();
        this.close();
      }
    });

    // Keyboard ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });
  }

  openProject(projectId, originElement = null) {
    if (this.isAnimating) return;

    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project || !this.overlay) return;

    soundEngine.playClick();
    setTiltEnabled(false); // Pause tilt during modal view

    // If originElement wasn't passed directly, find it in the DOM
    if (!originElement) {
      originElement = document.querySelector(`[data-project-id="${projectId}"]`) || document.querySelector('.highlight-banner');
    }
    this.originEl = originElement;

    // Populate modal contents
    if (this.titleEl) this.titleEl.textContent = project.title;
    if (this.badgeEl) this.badgeEl.textContent = project.categoryLabel;

    if (this.bodyEl) {
      this.bodyEl.innerHTML = `
        <div class="modal-section">
          <h4 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>Visão Geral &amp; Estudo de Caso</span>
          </h4>
          <p>${project.overview}</p>
        </div>

        <div class="modal-section">
          <h4 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>Arquitetura &amp; Fluxo Técnico</span>
          </h4>
          <div class="modal-architecture">${project.architecture}</div>
        </div>

        <div class="modal-section">
          <h4 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>Stack Tecnológica &amp; Palavras-Chave</span>
          </h4>
          <table class="modal-tech-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Tecnologias / Conceitos</th>
              </tr>
            </thead>
            <tbody>
              ${project.techTable.map(row => `
                <tr>
                  <td><strong>${row.category}</strong></td>
                  <td><code>${row.tech}</code></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        ${project.liveUrl ? `
          <div class="modal-actions">
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-cta-btn ${project.liveType === 'telegram' ? 'telegram' : ''}" onclick="event.stopPropagation();">
              ${project.liveType === 'telegram' ? `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.943z"/>
                </svg>
              ` : `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              `}
              <span>${project.liveLabel || 'Acessar Implementação'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        ` : ''}
      `;
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.originEl || prefersReducedMotion) {
      this.overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      return;
    }

    // ========================================================================
    // FLIP Animation: Expand Organically from Origin Card
    // ========================================================================
    this.isAnimating = true;

    // 1. First: Measure Origin geometry
    const firstRect = this.originEl.getBoundingClientRect();

    // 2. Prepare Overlay & Container in DOM
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.overlay.style.transition = 'none';
    this.overlay.style.opacity = '0';
    this.container.style.transition = 'none';
    this.container.style.transform = 'none';

    // 3. Last: Measure Target geometry
    const lastRect = this.container.getBoundingClientRect();

    // 4. Invert: Compute scale and translation deltas
    const scaleX = Math.max(firstRect.width / lastRect.width, 0.1);
    const scaleY = Math.max(firstRect.height / lastRect.height, 0.1);
    const deltaX = (firstRect.left + firstRect.width / 2) - (lastRect.left + lastRect.width / 2);
    const deltaY = (firstRect.top + firstRect.height / 2) - (lastRect.top + lastRect.height / 2);

    this.container.style.transformOrigin = 'center center';
    this.container.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;
    this.container.style.borderRadius = 'var(--radius-lg)';

    if (this.bodyEl) {
      this.bodyEl.style.opacity = '0';
      this.bodyEl.style.transition = 'none';
    }

    this.originEl.style.opacity = '0.2';
    this.originEl.style.transition = 'opacity 0.2s ease';

    // Force browser reflow
    void this.container.offsetHeight;

    // 5. Play: Animate seamlessly to full modal container
    this.container.style.willChange = 'transform, border-radius';
    requestAnimationFrame(() => {
      this.overlay.style.transition = 'opacity 0.42s ease';
      this.overlay.style.opacity = '1';

      this.container.style.transition = 'transform 0.48s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.48s ease';
      this.container.style.transform = 'translate3d(0, 0, 0) scale(1, 1)';
      this.container.style.borderRadius = 'var(--radius-xl)';

      if (this.bodyEl) {
        this.bodyEl.style.transition = 'opacity 0.3s ease 0.15s';
        this.bodyEl.style.opacity = '1';
      }

      setTimeout(() => {
        // Clear transform to remove GPU raster bitmap texture and restore native vector text crispness
        this.container.style.transform = '';
        this.container.style.transition = '';
        this.container.style.willChange = '';
        this.isAnimating = false;
      }, 490);
    });
  }

  close() {
    if (this.isAnimating || !this.overlay || !this.overlay.classList.contains('active')) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.originEl || prefersReducedMotion || !document.body.contains(this.originEl)) {
      this.overlay.classList.remove('active');
      this.overlay.style.opacity = '';
      this.container.style.transform = '';
      document.body.style.overflow = '';
      setTiltEnabled(true);
      return;
    }

    // ========================================================================
    // FLIP Animation: Collapse Back Organically to Origin Card
    // ========================================================================
    this.isAnimating = true;
    this.container.style.willChange = 'transform, border-radius';

    const firstRect = this.container.getBoundingClientRect();
    const targetRect = this.originEl.getBoundingClientRect();

    const scaleX = Math.max(targetRect.width / firstRect.width, 0.1);
    const scaleY = Math.max(targetRect.height / firstRect.height, 0.1);
    const deltaX = (targetRect.left + targetRect.width / 2) - (firstRect.left + firstRect.width / 2);
    const deltaY = (targetRect.top + targetRect.height / 2) - (firstRect.top + firstRect.height / 2);

    if (this.bodyEl) {
      this.bodyEl.style.transition = 'opacity 0.18s ease';
      this.bodyEl.style.opacity = '0';
    }

    this.overlay.style.transition = 'opacity 0.38s cubic-bezier(0.4, 0, 0.2, 1)';
    this.overlay.style.opacity = '0';

    this.container.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-radius 0.4s ease';
    this.container.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;
    this.container.style.borderRadius = 'var(--radius-lg)';

    setTimeout(() => {
      if (this.originEl) {
        this.originEl.style.opacity = '1';
        this.originEl.style.transition = 'opacity 0.2s ease';
      }

      this.overlay.classList.remove('active');
      this.overlay.style.opacity = '';
      this.overlay.style.transition = '';

      this.container.style.transform = '';
      this.container.style.transition = '';
      this.container.style.borderRadius = '';
      this.container.style.willChange = '';

      if (this.bodyEl) {
        this.bodyEl.style.opacity = '';
        this.bodyEl.style.transition = '';
      }

      document.body.style.overflow = '';
      setTiltEnabled(true);
      this.originEl = null;
      this.isAnimating = false;
    }, 400);
  }
}

export const modalManager = new ModalController();
