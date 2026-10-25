/**
 * Project Filtering & Card Rendering Engine — Portfólio Luccas
 * Handles instant full-text search, directory tree category filtering,
 * WAI-ARIA live regions and card tilt effects.
 */

import { PROJECTS_DATA } from '../data/projectsData.js';
import { applyTiltEffect } from './tilt.js';
import { modalManager } from './modal.js';
import { soundEngine } from './audio.js';
import { i18n } from '../i18n/i18n.js';

class ProjectFilterManager {
  constructor() {
    this.gridEl = null;
    this.searchInput = null;
    this.searchClearBtn = null;
    this.liveStatusEl = null;
    this.activeCategory = 'all';
    this.currentSearch = '';
    this.onFilterChangeCallback = null;
  }

  init() {
    this.gridEl = document.getElementById('projects-grid');
    this.searchInput = document.getElementById('project-search-input');
    this.searchClearBtn = document.getElementById('project-search-clear');
    this.liveStatusEl = document.getElementById('projects-live-status');

    if (!this.gridEl) return;

    // Search Input listeners
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value.trim().toLowerCase();
        if (this.searchClearBtn) {
          if (this.currentSearch.length > 0) {
            this.searchClearBtn.classList.add('active');
          } else {
            this.searchClearBtn.classList.remove('active');
          }
        }
        this.render();
      });
    }

    // Search Clear Button
    if (this.searchClearBtn) {
      this.searchClearBtn.addEventListener('click', () => {
        soundEngine.playClick();
        if (this.searchInput) {
          this.searchInput.value = '';
          this.currentSearch = '';
          this.searchClearBtn.classList.remove('active');
          this.searchInput.focus();
        }
        this.render();
      });
    }

    // Initial render
    this.render();
  }

  setCategory(category) {
    this.activeCategory = category;
    this.render();
  }

  localize(project) {
    const base = `projects.${project.id}`;
    const categoryKeys = project.categories || [project.category];
    return {
      title: i18n.t(`${base}.title`, null, project.title),
      categories: categoryKeys.map((key) => i18n.t(`categories.${key}`, null, null)),
      summary: i18n.t(`${base}.summary`, null, project.summary),
      tags: i18n.t(`${base}.tags`, null, project.tags),
    };
  }

  reapply() {
    this.render();
  }

  getFilteredProjects() {
    return PROJECTS_DATA.filter(project => {
      // Category check
      const matchesCategory = this.activeCategory === 'all' || (project.categories || [project.category]).includes(this.activeCategory);
      if (!matchesCategory) return false;

      // Search text check
      if (!this.currentSearch) return true;

      const localized = this.localize(project);
      const query = this.currentSearch;
      const titleMatch = localized.title.toLowerCase().includes(query);
      const summaryMatch = localized.summary.toLowerCase().includes(query);
      const tagMatch = localized.tags.some((t) => t.toLowerCase().includes(query));
      const categoryMatch = localized.categories.some((c) => c.toLowerCase().includes(query));

      return titleMatch || summaryMatch || tagMatch || categoryMatch;
    });
  }

  render() {
    if (!this.gridEl) return;

    const filtered = this.getFilteredProjects();

    // Update Accessible Live Region for Screen Readers
    if (this.liveStatusEl) {
      if (filtered.length === 0) {
        this.liveStatusEl.textContent = i18n.t('showcase.liveNone');
      } else if (filtered.length === 1) {
        this.liveStatusEl.textContent = i18n.t('showcase.liveFoundSingular');
      } else {
        this.liveStatusEl.textContent = i18n.t('showcase.liveFoundPlural', { n: filtered.length });
      }
    }

    // Update Section 3 breadcrumb count if active
    const activeDirCountEl = document.getElementById('active-dir-count');
    if (activeDirCountEl) {
      const count = filtered.length;
      const label = count === 1
        ? i18n.t('tree.projectCountSingular', null, '1 projeto')
        : i18n.t('tree.projectsCount', { n: count }, `${count} projetos`);
      activeDirCountEl.textContent = `(${label})`;
    }

    if (filtered.length === 0) {
      this.gridEl.innerHTML = `
        <div class="projects-empty-state" role="status">
          <div class="empty-state-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h3>${i18n.t('showcase.emptyTitle')}</h3>
          <p>${i18n.t('showcase.emptyText')}</p>
        </div>
      `;
      return;
    }

    this.gridEl.innerHTML = filtered.map((project) => {
      const localized = this.localize(project);
      return `
      <article class="project-card shimmer-card" data-project-id="${project.id}" aria-labelledby="card-title-${project.id}">
        <div class="card-top">
          <div class="card-categories">
            ${localized.categories.map((label) => `<span class="card-category-badge">${label}</span>`).join('')}
          </div>
        </div>

        <h3 class="card-title" id="card-title-${project.id}">${localized.title}</h3>
        <p class="card-summary">${localized.summary}</p>

        <div class="card-tags">
          ${localized.tags.map((tag) => `<span class="card-tag">#${tag}</span>`).join('')}
        </div>

        <div class="card-actions">
          <button class="btn-card-details" data-action="open-modal" data-id="${project.id}" aria-label="${i18n.t('showcase.caseAria', { title: localized.title })}">
            <span>${i18n.t('showcase.caseButton')}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </article>
    `;
    }).join('');

    // Attach Tilt & Event Listeners to newly rendered cards
    const cards = this.gridEl.querySelectorAll('.project-card');
    cards.forEach(card => {
      applyTiltEffect(card);

      const modalBtn = card.querySelector('[data-action="open-modal"]');
      if (modalBtn) {
        modalBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = modalBtn.getAttribute('data-id');
          modalManager.openProject(id, card);
        });
        modalBtn.addEventListener('mouseenter', () => soundEngine.playHover());
      }
    });
  }
}

export const projectFilter = new ProjectFilterManager();
