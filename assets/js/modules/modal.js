/**
 * Responsive Modal System with FLIP Organic Expansion & Collapse Engine
 * Expands organically from the originating card geometry and smoothly collapses back on dismiss
 * Enhanced with WAI-ARIA Dialog modal focus trap & keyboard accessibility
 */

import { PROJECTS_DATA } from '../data/projectsData.js';
import { setTiltEnabled } from './tilt.js';
import { soundEngine } from './audio.js';
import { i18n } from '../i18n/i18n.js';
import { cinemaPlayer } from './cinemaPlayer.js';

class ModalController {
  constructor() {
    this.overlay = null;
    this.container = null;
    this.titleEl = null;
    this.badgeEl = null;
    this.bodyEl = null;
    this.closeBtn = null;
    this.originEl = null;
    this.triggerElement = null;
    this.isAnimating = false;
    this.activeProjectId = null;
    this.boundTrapFocus = this.trapFocus.bind(this);
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

  trapFocus(e) {
    if (e.key !== 'Tab' || !this.overlay.classList.contains('active')) return;

    const focusableElements = this.overlay.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  localize(project) {
    const base = `projects.${project.id}`;
    const categoryKeys = project.categories || [project.category];
    const categoryLabel = categoryKeys
      .map((key) => i18n.t(`categories.${key}`, null, null))
      .join(' • ');
    return {
      title: i18n.t(`${base}.title`, null, project.title),
      categoryLabel,
      overview: i18n.t(`${base}.overview`, null, project.overview),
      architecture: i18n.t(`${base}.architecture`, null, project.architecture),
      techTable: i18n.t(`${base}.techTable`, null, project.techTable),
      liveLabel: i18n.t(`${base}.liveLabel`, null, project.liveLabel),
    };
  }

  renderContent(project) {
    const localized = this.localize(project);

    if (this.titleEl) this.titleEl.textContent = localized.title;
    if (this.badgeEl) this.badgeEl.textContent = localized.categoryLabel;

    if (this.bodyEl) {
      this.bodyEl.innerHTML = `
        ${project.videoUrl ? `
          <div class="modal-teaser-card shimmer-card" data-action="open-cinema" data-video="${project.videoUrl}" data-title="${localized.title}" role="button" tabindex="0" aria-label="${i18n.t('modal.watchDemo')}">
            <div class="teaser-card-glow" aria-hidden="true"></div>
            <div class="teaser-card-content">
              <div class="teaser-badge">
                <span class="pulse-cyan" aria-hidden="true"></span>
                <span class="teaser-badge-label">${i18n.t('modal.demoBadge')}</span>
              </div>
              <div class="teaser-play-ring" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
              </div>
              <div class="teaser-text-block">
                <span class="teaser-title">${i18n.t('modal.watchDemo')}</span>
                <span class="teaser-subtitle">${i18n.t('modal.demoHint')}</span>
              </div>
            </div>
          </div>
        ` : ''}

        <div class="modal-section">
          <h3 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>${i18n.t('modal.overviewTitle')}</span>
          </h3>
          <p>${localized.overview}</p>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>${i18n.t('modal.architectureTitle')}</span>
          </h3>
          <div class="modal-architecture">${localized.architecture}</div>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <span>${i18n.t('modal.specsTitle')}</span>
          </h3>
          <table class="modal-table" role="table">
            <thead>
              <tr>
                <th scope="col">${i18n.t('modal.colLayer')}</th>
                <th scope="col">${i18n.t('modal.colTech')}</th>
              </tr>
            </thead>
            <tbody>
              ${localized.techTable.map((row) => `
                <tr>
                  <td><strong>${row.category}</strong></td>
                  <td>${row.tech}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        ${(project.liveUrl || project.videoUrl) ? `
          <div class="modal-actions">
            ${project.videoUrl ? `
              <button type="button" class="modal-cta-btn modal-cta-video" data-action="open-cinema" data-video="${project.videoUrl}" data-title="${localized.title}" aria-label="${i18n.t('modal.watchDemo')}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>${i18n.t('modal.watchDemoBtn')}</span>
              </button>
            ` : ''}
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-cta-btn ${project.liveType === 'telegram' ? 'modal-cta-telegram' : 'modal-cta-web'}">
                ${project.liveType === 'telegram' ? `
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.943z"/>
                  </svg>
                ` : `
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                `}
                <span>${localized.liveLabel || i18n.t('modal.defaultCta')}</span>
              </a>
            ` : ''}
          </div>
        ` : ''}
      `;

      // Attach Cinema Player triggers
      const cinemaTriggers = this.bodyEl.querySelectorAll('[data-action="open-cinema"]');
      cinemaTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const url = trigger.getAttribute('data-video');
          const title = trigger.getAttribute('data-title');
          cinemaPlayer.open(url, title, trigger);
        });
        trigger.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trigger.click();
          }
        });
        trigger.addEventListener('mouseenter', () => soundEngine.playHover());
      });
    }
  }

  refresh() {
    if (this.activeProjectId && this.overlay && this.overlay.classList.contains('active')) {
      const project = PROJECTS_DATA.find((p) => p.id === this.activeProjectId);
      if (project) this.renderContent(project);
    }
  }

  openProject(projectId, originElement = null) {
    if (this.isAnimating) return;

    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project || !this.overlay) return;

    // Save triggering element for accessible focus return
    this.triggerElement = document.activeElement;

    soundEngine.playClick();
    setTiltEnabled(false); // Pause tilt during modal view

    // If originElement wasn't passed directly, find it in the DOM
    if (!originElement) {
      originElement = document.querySelector(`[data-project-id="${projectId}"]`) || document.querySelector('.highlight-banner');
    }
    this.originEl = originElement;

    this.activeProjectId = projectId;
    this.renderContent(project);

    // Modal accessibility state
    this.overlay.setAttribute('aria-hidden', 'false');
    window.addEventListener('keydown', this.boundTrapFocus);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Direct open fallback if no origin element exists or reduced motion is preferred
    if (!this.originEl || prefersReducedMotion) {
      this.overlay.classList.add('active');
      this.overlay.style.opacity = '1';
      this.container.style.transform = 'translate3d(0, 0, 0) scale(1, 1)';
      this.container.style.borderRadius = 'var(--radius-xl)';
      document.body.style.overflow = 'hidden';
      if (this.closeBtn) this.closeBtn.focus();
      return;
    }

    // ========================================================================
    // FLIP Animation: Expand Organically from Origin Card
    // ========================================================================
    this.isAnimating = true;

    // 1. First: Geometry of origin card
    const firstRect = this.originEl.getBoundingClientRect();

    // 2. Last: Prepare active modal
    document.body.style.overflow = 'hidden';
    this.overlay.classList.add('active');
    this.overlay.style.opacity = '0';
    // Cross-fade the origin card out (instead of hiding instantly) so it seems
    // to grow into the modal without an empty "flash" gap.
    this.originEl.style.transition = 'opacity 0.2s ease';
    this.originEl.style.opacity = '0';

    if (this.bodyEl) this.bodyEl.style.opacity = '0';

    // 3. Last Geometry: Destination modal bounding rect
    const lastRect = this.container.getBoundingClientRect();

    // 4. Invert: Compute exact scale & coordinate delta
    const scaleX = Math.max(firstRect.width / lastRect.width, 0.1);
    const scaleY = Math.max(firstRect.height / lastRect.height, 0.1);
    const deltaX = (firstRect.left + firstRect.width / 2) - (lastRect.left + lastRect.width / 2);
    const deltaY = (firstRect.top + firstRect.height / 2) - (lastRect.top + lastRect.height / 2);

    this.container.style.transition = 'none';
    this.container.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;
    this.container.style.borderRadius = 'var(--radius-lg)';

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
        this.bodyEl.style.transition = 'opacity 0.3s ease';
        this.bodyEl.style.opacity = '1';
      }

      setTimeout(() => {
        // Clear transform to remove GPU raster bitmap texture and restore native vector text crispness
        this.container.style.transform = '';
        this.container.style.transition = '';
        this.container.style.willChange = '';
        this.isAnimating = false;
        if (this.closeBtn) this.closeBtn.focus();
      }, 490);
    });
  }

  close() {
    if (this.isAnimating || !this.overlay || !this.overlay.classList.contains('active')) return;

    this.activeProjectId = null;
    window.removeEventListener('keydown', this.boundTrapFocus);
    this.overlay.setAttribute('aria-hidden', 'true');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.originEl || prefersReducedMotion || !document.body.contains(this.originEl)) {
      this.overlay.classList.remove('active');
      this.overlay.style.opacity = '';
      this.container.style.transform = '';
      document.body.style.overflow = '';
      setTiltEnabled(true);
      if (this.triggerElement) this.triggerElement.focus();
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

    // Reveal the origin card underneath as the modal collapses back into it,
    // avoiding the late "pop-in" that broke the motion continuity.
    if (this.originEl) {
      this.originEl.style.opacity = '1';
      this.originEl.style.transition = 'opacity 0.3s ease';
    }

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

      if (this.triggerElement) {
        this.triggerElement.focus();
        this.triggerElement = null;
      }
    }, 400);
  }
}

export const modalManager = new ModalController();
