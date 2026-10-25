/**
 * Directory Tree & Capability Explorer Engine — Portfólio Luccas
 * Replaces clichéd terminal with an interactive, senior engineering directory tree.
 * Folders act as fluid category filters for the technical showcase below.
 * Files act as direct deep-links to rich case study modals.
 */

import { projectFilter } from './projectFilter.js';
import { modalManager } from './modal.js';
import { soundEngine } from './audio.js';
import { i18n } from '../i18n/i18n.js';

export const DIRECTORY_MAP = {
  all: {
    path: '~/capacidades-e-arquitetura/',
    label: 'Todos os Módulos de Engenharia',
    count: 12
  },
  re: {
    path: '~/capacidades-e-arquitetura/01_engenharia-reversa/',
    label: '01_engenharia-reversa/',
    count: 2
  },
  mods: {
    path: '~/capacidades-e-arquitetura/02_game-modding/',
    label: '02_game-modding/',
    count: 1
  },
  bots: {
    path: '~/capacidades-e-arquitetura/03_bots-e-tempo-real/',
    label: '03_bots-e-tempo-real/',
    count: 6
  },
  scripts: {
    path: '~/capacidades-e-arquitetura/04_scripts-e-devops/',
    label: '04_scripts-e-devops/',
    count: 2
  },
  web: {
    path: '~/capacidades-e-arquitetura/05_web-e-dashboards/',
    label: '05_web-e-dashboards/',
    count: 2
  }
};

class DirectoryTreeManager {
  constructor() {
    this.treeEl = null;
    this.rootItem = null;
    this.folders = [];
    this.files = [];
    this.expandAllBtn = null;
    this.statusPill = null;
    this.activeDirPathEl = null;
    this.activeDirCountEl = null;
    this.resetFilterBtn = null;
    this.jumpToTreeBtn = null;
    this.activeCategory = 'all';
    this.allExpanded = false;
  }

  init() {
    this.treeEl = document.getElementById('capability-tree');
    if (!this.treeEl) return;

    this.rootItem = this.treeEl.querySelector('.tree-root-item');
    this.folders = Array.from(this.treeEl.querySelectorAll('.tree-folder'));
    this.files = Array.from(this.treeEl.querySelectorAll('.tree-file'));
    this.expandAllBtn = document.getElementById('tree-expand-all-btn');
    this.statusPill = document.getElementById('tree-status-pill');

    // Section 3 Breadcrumb elements
    this.activeDirPathEl = document.getElementById('active-dir-path');
    this.activeDirCountEl = document.getElementById('active-dir-count');
    this.resetFilterBtn = document.getElementById('btn-reset-filter');
    this.jumpToTreeBtn = document.getElementById('btn-tree-jump');

    // Bind Root Item click
    if (this.rootItem) {
      this.rootItem.addEventListener('click', () => {
        this.selectCategory('all', true);
      });
      this.rootItem.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Bind Folder items
    this.folders.forEach(folder => {
      const folderRow = folder.querySelector('.tree-folder-row');
      const category = folder.getAttribute('data-category');

      if (folderRow) {
        folderRow.addEventListener('click', (e) => {
          // Check if clicking folder chevron or folder label
          const isChevron = e.target.closest('.tree-chevron');
          
          // Toggle folder open/close state
          this.toggleFolder(folder);

          // Also set category filter to this folder
          this.selectCategory(category, true);
        });

        folderRow.addEventListener('mouseenter', () => soundEngine.playHover());
      }
    });

    // Bind File items (opens modal directly)
    this.files.forEach(file => {
      file.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = file.getAttribute('data-project-id');
        if (projectId) {
          soundEngine.playClick();
          modalManager.openProject(projectId, file);
        }
      });

      file.addEventListener('mouseenter', () => soundEngine.playHover());
    });

    // Expand All Button
    if (this.expandAllBtn) {
      this.expandAllBtn.addEventListener('click', () => {
        soundEngine.playClick();
        this.toggleExpandAll();
      });
      this.expandAllBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Reset filter button in Section 3
    if (this.resetFilterBtn) {
      this.resetFilterBtn.addEventListener('click', () => {
        soundEngine.playClick();
        this.selectCategory('all', false);
      });
      this.resetFilterBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Jump up to Tree button in Section 3
    if (this.jumpToTreeBtn) {
      this.jumpToTreeBtn.addEventListener('click', () => {
        soundEngine.playClick();
        const treeSection = document.getElementById('capability-tree');
        if (treeSection) {
          treeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
      this.jumpToTreeBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Keyboard navigation (WAI-ARIA Tree View)
    this.initKeyboardNav();

    // Initial state: all folders collapsed as requested
    this.folders.forEach(f => this.closeFolder(f));
    this.allExpanded = false;
    this.updateExpandAllButtonState();

    // Initial update of breadcrumb status
    this.updateBreadcrumb('all', 12);
  }

  selectCategory(category, shouldScroll = false) {
    if (category === this.activeCategory && category !== 'all') {
      // If already active, keep it or scroll
      if (shouldScroll) {
        this.scrollToShowcase();
      }
      return;
    }

    soundEngine.playClick();
    this.activeCategory = category;

    // Update active classes on tree elements
    if (category === 'all') {
      if (this.rootItem) {
        this.rootItem.classList.add('active');
        this.rootItem.setAttribute('aria-selected', 'true');
      }
      this.folders.forEach(f => {
        f.classList.remove('active');
        f.setAttribute('aria-selected', 'false');
      });
    } else {
      if (this.rootItem) {
        this.rootItem.classList.remove('active');
        this.rootItem.setAttribute('aria-selected', 'false');
      }
      this.folders.forEach(f => {
        const cat = f.getAttribute('data-category');
        if (cat === category) {
          f.classList.add('active');
          f.setAttribute('aria-selected', 'true');
          // Ensure folder is open so children are visible
          this.openFolder(f);
        } else {
          f.classList.remove('active');
          f.setAttribute('aria-selected', 'false');
        }
      });
    }

    // Tell projectFilter to apply category
    projectFilter.setCategory(category);

    // Update Breadcrumb & counts
    const info = DIRECTORY_MAP[category] || DIRECTORY_MAP.all;
    this.updateBreadcrumb(category, info.count);

    if (shouldScroll) {
      this.scrollToShowcase();
    }
  }

  scrollToShowcase() {
    // In desktop split-pane mode, the projects are already visible right next to the tree.
    if (window.innerWidth >= 1024) return;

    const showcase = document.getElementById('projects-showcase-grid') || document.getElementById('projetos');
    if (showcase) {
      // Smooth scroll to projects section on mobile/stacked view
      showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleFolder(folder) {
    const isOpen = folder.classList.contains('open');
    if (isOpen) {
      this.closeFolder(folder);
    } else {
      this.openFolder(folder);
    }
    this.updateExpandAllButtonState();
  }

  openFolder(folder) {
    folder.classList.add('open');
    folder.setAttribute('aria-expanded', 'true');
  }

  closeFolder(folder) {
    folder.classList.remove('open');
    folder.setAttribute('aria-expanded', 'false');
  }

  toggleExpandAll() {
    const anyClosed = this.folders.some(f => !f.classList.contains('open'));
    if (anyClosed) {
      this.folders.forEach(f => this.openFolder(f));
      this.allExpanded = true;
    } else {
      this.folders.forEach(f => this.closeFolder(f));
      this.allExpanded = false;
    }
    this.updateExpandAllButtonState();
  }

  updateExpandAllButtonState() {
    if (!this.expandAllBtn) return;
    const allOpen = this.folders.every(f => f.classList.contains('open'));
    const labelSpan = this.expandAllBtn.querySelector('.tree-expand-label');
    if (labelSpan) {
      labelSpan.textContent = allOpen 
        ? i18n.t('tree.collapseAll', null, 'Recolher Tudo')
        : i18n.t('tree.expandAll', null, 'Expandir Tudo');
    }
  }

  updateBreadcrumb(category, count) {
    const dirInfo = DIRECTORY_MAP[category] || DIRECTORY_MAP.all;
    
    if (this.activeDirPathEl) {
      this.activeDirPathEl.textContent = dirInfo.path;
    }

    if (this.activeDirCountEl) {
      const label = count === 1
        ? i18n.t('tree.projectCountSingular', null, '1 projeto')
        : i18n.t('tree.projectsCount', { n: count }, `${count} projetos`);
      this.activeDirCountEl.textContent = `(${label})`;
    }

    if (this.resetFilterBtn) {
      if (category === 'all') {
        this.resetFilterBtn.hidden = true;
      } else {
        this.resetFilterBtn.hidden = false;
      }
    }

    if (this.statusPill) {
      if (category === 'all') {
        this.statusPill.textContent = i18n.t('tree.activeModules', { n: 12 }, '12 módulos ativos');
        this.statusPill.classList.remove('filtered');
      } else {
        this.statusPill.textContent = `${count} ${count === 1 ? 'módulo' : 'módulos'} (${category})`;
        this.statusPill.classList.add('filtered');
      }
    }
  }

  initKeyboardNav() {
    if (!this.treeEl) return;

    this.treeEl.addEventListener('keydown', (e) => {
      const focusable = Array.from(this.treeEl.querySelectorAll('[tabindex="0"]'));
      const currentIndex = focusable.indexOf(document.activeElement);

      if (currentIndex === -1) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % focusable.length;
        focusable[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + focusable.length) % focusable.length;
        focusable[prevIndex].focus();
      } else if (e.key === 'ArrowRight') {
        const currentEl = focusable[currentIndex];
        const folder = currentEl.closest('.tree-folder');
        if (folder && !folder.classList.contains('open')) {
          e.preventDefault();
          this.openFolder(folder);
          this.updateExpandAllButtonState();
        }
      } else if (e.key === 'ArrowLeft') {
        const currentEl = focusable[currentIndex];
        const folder = currentEl.closest('.tree-folder');
        if (folder && folder.classList.contains('open')) {
          e.preventDefault();
          this.closeFolder(folder);
          this.updateExpandAllButtonState();
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        focusable[currentIndex].click();
      }
    });
  }

  refresh() {
    this.updateExpandAllButtonState();
    const count = projectFilter.getFilteredProjects ? projectFilter.getFilteredProjects().length : 12;
    this.updateBreadcrumb(this.activeCategory, count);
  }
}

export const directoryTree = new DirectoryTreeManager();
