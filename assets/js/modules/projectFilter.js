/**
 * Project Filtering & Card Rendering Engine with Gliding Category Pill Indicator
 * Handles instant full-text search, M3 segmented category switching and responsive rendering
 */

import { PROJECTS_DATA } from '../data/projectsData.js';
import { applyTiltEffect } from './tilt.js';
import { modalManager } from './modal.js';
import { soundEngine } from './audio.js';

class ProjectFilterManager {
  constructor() {
    this.gridEl = null;
    this.searchInput = null;
    this.searchClearBtn = null;
    this.tabsContainer = null;
    this.tabIndicator = null;
    this.categoryTabs = null;
    this.activeCategory = 'all';
    this.currentSearch = '';
  }

  init() {
    this.gridEl = document.getElementById('projects-grid');
    this.searchInput = document.getElementById('project-search-input');
    this.searchClearBtn = document.getElementById('project-search-clear');
    this.tabsContainer = document.querySelector('.category-tabs');
    this.categoryTabs = document.querySelectorAll('.category-tab-btn');

    if (!this.gridEl) return;

    // Initialize Gliding Indicator Pill
    this.initTabIndicator();

    // Category Tabs click listeners
    this.categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');
        if (category === this.activeCategory) return;

        soundEngine.playClick();
        this.categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeCategory = category;
        this.updateTabIndicator(false);
        this.render();
      });

      tab.addEventListener('mouseenter', () => soundEngine.playHover());
    });

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

  initTabIndicator() {
    if (!this.tabsContainer) return;

    this.tabIndicator = this.tabsContainer.querySelector('.category-tab-indicator');
    if (!this.tabIndicator) {
      this.tabIndicator = document.createElement('div');
      this.tabIndicator.className = 'category-tab-indicator';
      this.tabsContainer.prepend(this.tabIndicator);
    }

    // Initial position without transition delay
    requestAnimationFrame(() => {
      this.updateTabIndicator(true);
    });

    window.addEventListener('resize', () => {
      requestAnimationFrame(() => this.updateTabIndicator(true));
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => this.updateTabIndicator(true));
      });
    }
  }

  updateTabIndicator(immediate = false) {
    if (!this.tabsContainer || !this.tabIndicator) return;

    const activeBtn = this.tabsContainer.querySelector('.category-tab-btn.active');
    if (!activeBtn) return;

    const containerRect = this.tabsContainer.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    const left = btnRect.left - containerRect.left;
    const top = btnRect.top - containerRect.top;
    const width = btnRect.width;
    const height = btnRect.height;

    if (immediate) {
      this.tabIndicator.style.transition = 'none';
      this.tabIndicator.style.transform = `translate3d(${left.toFixed(2)}px, ${top.toFixed(2)}px, 0)`;
      this.tabIndicator.style.width = `${width.toFixed(2)}px`;
      this.tabIndicator.style.height = `${height.toFixed(2)}px`;
      void this.tabIndicator.offsetHeight;
      this.tabIndicator.style.transition = '';
    } else {
      this.tabIndicator.style.transform = `translate3d(${left.toFixed(2)}px, ${top.toFixed(2)}px, 0)`;
      this.tabIndicator.style.width = `${width.toFixed(2)}px`;
      this.tabIndicator.style.height = `${height.toFixed(2)}px`;
    }
  }

  getFilteredProjects() {
    return PROJECTS_DATA.filter(project => {
      // Category check
      const matchesCategory = this.activeCategory === 'all' || project.category === this.activeCategory;
      if (!matchesCategory) return false;

      // Search text check
      if (!this.currentSearch) return true;

      const titleMatch = project.title.toLowerCase().includes(this.currentSearch);
      const summaryMatch = project.summary.toLowerCase().includes(this.currentSearch);
      const tagMatch = project.tags.some(t => t.toLowerCase().includes(this.currentSearch));
      const categoryMatch = project.categoryLabel.toLowerCase().includes(this.currentSearch);

      return titleMatch || summaryMatch || tagMatch || categoryMatch;
    });
  }

  render() {
    if (!this.gridEl) return;

    const filtered = this.getFilteredProjects();

    if (filtered.length === 0) {
      this.gridEl.innerHTML = `
        <div class="projects-empty-state">
          <div class="empty-state-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h3>Nenhum projeto encontrado</h3>
          <p>Tente ajustar os termos de busca ou selecione outra categoria.</p>
        </div>
      `;
      return;
    }

    this.gridEl.innerHTML = filtered.map(project => `
      <article class="project-card shimmer-card" data-project-id="${project.id}">
        <div class="card-top">
          <span class="card-category-badge">
            ${project.categoryLabel}
          </span>
        </div>

        <h3 class="card-title">${project.title}</h3>
        <p class="card-summary">${project.summary}</p>

        <div class="card-tags">
          ${project.tags.map(tag => `<span class="card-tag">#${tag}</span>`).join('')}
        </div>

        <div class="card-actions">
          <button class="btn-card-details" data-action="open-modal" data-id="${project.id}">
            <span>Ver Estudo de Caso</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </article>
    `).join('');

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
