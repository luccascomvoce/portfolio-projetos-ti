/**
 * Deep Link Router & Hash Synchronization Engine — Portfólio Luccas
 * Handles direct shareable URLs for individual project modals (#projeto-id)
 * and article reader modals (#artigo-id) with browser History API synchronization
 * and 1-click clipboard link sharing.
 */

import { PROJECTS_DATA } from '../data/projectsData.js';
import { ARTICLES_DATA } from '../data/articlesData.js';
import { modalManager } from './modal.js';
import { articleCarousel } from './articleCarousel.js';
import { soundEngine } from './audio.js';
import { i18n } from '../i18n/i18n.js';

// Project ID aliases for flexible deep link resolution
const PROJECT_ALIASES = {
  'quantoebot': 'telegram-bot-calculadora',
  'calculadora': 'telegram-bot-calculadora',
  'bot-calculadora': 'telegram-bot-calculadora',
  'fuxico': 'fuxicobot',
  'bot-fuxico': 'fuxicobot',
  'minecraft': 'script-minecraft-server-java',
  'minecraft-server': 'script-minecraft-server-java',
  'piscinas': 'pagina-loja-piscinas',
  'splash': 'pagina-loja-piscinas',
  'anotacoes': 'extensao-anotacoes-gemini-deepseek',
  'pdf': 'bot-relatorios-pdf',
  'financeiro': 'dashboard-financeiro',
  'docker': 'pipeline-ci-cd-docker',
  'fastapi': 'api-microsservicos-fastapi',
  'prometheus': 'monitoramento-prometheus-grafana',
  'scraping': 'automacao-web-scraping',
};

class DeepLinkManager {
  constructor() {
    this.isHandlingHash = false;
    this.boundHashChange = this.handleHashChange.bind(this);
  }

  init() {
    window.addEventListener('hashchange', this.boundHashChange);
    this.initShareButtons();

    // Process initial hash on page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.processCurrentHash(true));
    } else {
      this.processCurrentHash(true);
    }
  }

  normalizeProjectId(rawId) {
    if (!rawId) return null;
    const cleanId = rawId.toLowerCase().trim();
    if (PROJECTS_DATA.some(p => p.id === cleanId)) {
      return cleanId;
    }
    return PROJECT_ALIASES[cleanId] || null;
  }

  normalizeArticleId(rawId) {
    if (!rawId) return null;
    const cleanId = rawId.toLowerCase().trim();
    if (ARTICLES_DATA.some(a => a.id === cleanId)) {
      return cleanId;
    }
    return null;
  }

  handleHashChange() {
    if (this.isHandlingHash) return;
    this.processCurrentHash(false);
  }

  processCurrentHash(isInitialLoad = false) {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#hero') return;

    // 1. Match Project: #projeto-id, #projeto/id, #project-id, #project/id
    const projectMatch = hash.match(/^#(?:projeto|project)[-\/](.+)$/i);
    if (projectMatch) {
      const targetId = this.normalizeProjectId(projectMatch[1]);
      if (targetId) {
        articleCarousel.closeArticle(true);
        const cardEl = document.querySelector(`[data-project-id="${targetId}"]`);
        if (isInitialLoad) {
          setTimeout(() => {
            modalManager.openProject(targetId, cardEl);
          }, 150);
        } else {
          modalManager.openProject(targetId, cardEl);
        }
        return;
      }
    }

    // 2. Match Article: #artigo-id, #artigo/id, #article-id, #article/id
    const articleMatch = hash.match(/^#(?:artigo|article)[-\/](.+)$/i);
    if (articleMatch) {
      const targetId = this.normalizeArticleId(articleMatch[1]);
      if (targetId) {
        modalManager.close(true);
        const cardEl = document.querySelector(`[data-article-id="${targetId}"]`);
        if (isInitialLoad) {
          setTimeout(() => {
            articleCarousel.openArticle(targetId, cardEl);
          }, 150);
        } else {
          articleCarousel.openArticle(targetId, cardEl);
        }
        return;
      }
    }

    // 3. Section Navigation (close open modals if navigating to regular section)
    if (['#projetos', '#artigos', '#hero'].includes(hash)) {
      modalManager.close();
      articleCarousel.closeArticle();
    }
  }

  setProjectHash(projectId) {
    if (!projectId) return;
    this.isHandlingHash = true;
    const newHash = `#projeto-${projectId}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', window.location.pathname + window.location.search + newHash);
    }
    setTimeout(() => { this.isHandlingHash = false; }, 50);
  }

  setArticleHash(articleId) {
    if (!articleId) return;
    this.isHandlingHash = true;
    const newHash = `#artigo-${articleId}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', window.location.pathname + window.location.search + newHash);
    }
    setTimeout(() => { this.isHandlingHash = false; }, 50);
  }

  clearHash(fallbackSection = 'projetos') {
    this.isHandlingHash = true;
    const currentHash = window.location.hash;
    if (currentHash.startsWith('#projeto') || currentHash.startsWith('#artigo') || currentHash.startsWith('#project') || currentHash.startsWith('#article')) {
      const targetHash = `#${fallbackSection}`;
      history.replaceState(null, '', window.location.pathname + window.location.search + targetHash);
    }
    setTimeout(() => { this.isHandlingHash = false; }, 50);
  }

  async copyDirectLink(url, toastEl = null) {
    soundEngine.playClick();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      if (toastEl) {
        const toastText = i18n.t('modal.linkCopied', null, 'Link copiado!');
        toastEl.textContent = toastText;
        toastEl.classList.add('visible');
        setTimeout(() => {
          toastEl.classList.remove('visible');
        }, 2200);
      }
    } catch (err) {
      console.warn('[DeepLink] Failed to copy URL to clipboard:', err);
    }
  }

  initShareButtons() {
    const projectShareBtn = document.getElementById('modal-project-share-btn');
    if (projectShareBtn) {
      projectShareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const activeId = modalManager.activeProjectId;
        if (!activeId) return;
        const url = `${window.location.origin}${window.location.pathname}#projeto-${activeId}`;
        const toast = projectShareBtn.querySelector('.share-toast');
        this.copyDirectLink(url, toast);
      });
      projectShareBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    const articleShareBtn = document.getElementById('modal-article-share-btn');
    if (articleShareBtn) {
      articleShareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const activeId = articleCarousel.activeArticleId;
        if (!activeId) return;
        const url = `${window.location.origin}${window.location.pathname}#artigo-${activeId}`;
        const toast = articleShareBtn.querySelector('.share-toast');
        this.copyDirectLink(url, toast);
      });
      articleShareBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }
  }
}

export const deepLinkManager = new DeepLinkManager();
