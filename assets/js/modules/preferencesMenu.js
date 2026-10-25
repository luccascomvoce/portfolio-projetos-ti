/**
 * Preferences Menu Module — Unified Options Controller
 * Orchestrates Theme, Language, and Audio settings within a verbose, explanatory popup panel.
 * Features an animated morphing SVG toggle icon and organic entrance/exit transitions.
 */

import { themeManager } from './theme.js';
import { languageManager, i18n } from '../i18n/i18n.js';
import { soundEngine } from './audio.js';

class PreferencesMenuController {
  constructor() {
    this.toggleBtn = null;
    this.panelEl = null;
    this.isOpen = false;
    this.themeSegments = [];
    this.langSegments = [];
    this.audioSwitch = null;
    this.audioStatusText = null;
  }

  init() {
    this.toggleBtn = document.getElementById('preferences-toggle-btn');
    this.panelEl = document.getElementById('preferences-menu');

    if (!this.toggleBtn || !this.panelEl) return;

    // Move panel to <body> to avoid clipping and positioning context issues
    if (this.panelEl.parentNode !== document.body) {
      document.body.appendChild(this.panelEl);
    }

    this.themeSegments = Array.from(this.panelEl.querySelectorAll('[data-theme-val]'));
    this.langSegments = Array.from(this.panelEl.querySelectorAll('[data-lang-val]'));
    this.audioSwitch = document.getElementById('pref-audio-toggle');
    this.audioStatusText = document.getElementById('pref-audio-status');

    this.bindEvents();
    this.syncUI();

    // Listen for external language changes to update labels
    i18n.subscribe(() => {
      this.syncUI();
    });

    window.addEventListener('themechange', () => {
      this.syncThemeUI();
    });
  }

  bindEvents() {
    // Toggle button click
    this.toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Theme segmented controls
    this.themeSegments.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const themeVal = btn.dataset.themeVal;
        let targetTheme = themeVal;
        let persist = true;

        if (themeVal === 'auto') {
          // Remove custom preference to follow system
          try { localStorage.removeItem('theme'); } catch (err) { /* ignore */ }
          targetTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          persist = false;
        }

        themeManager.animateTheme(targetTheme, { origin: e, persist });
        this.syncThemeUI();
        soundEngine.playClick();
      });
    });

    // Language segmented controls
    this.langSegments.forEach((btn) => {
      btn.addEventListener('click', () => {
        const langVal = btn.dataset.langVal;
        languageManager.setLanguage(langVal);
        this.syncLangUI();
        soundEngine.playClick();
      });
    });

    // Audio toggle switch
    if (this.audioSwitch) {
      this.audioSwitch.addEventListener('click', () => {
        soundEngine.toggleSound();
        this.syncAudioUI();
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.isOpen) return;
      const insidePanel = this.panelEl && this.panelEl.contains(e.target);
      const insideToggle = this.toggleBtn && this.toggleBtn.contains(e.target);
      if (!insidePanel && !insideToggle) {
        this.close();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
        this.toggleBtn.focus();
      }
    });

    // Reposition on window resize / scroll
    window.addEventListener('resize', () => {
      if (this.isOpen) this.updatePosition();
    }, { passive: true });
  }

  updatePosition() {
    if (!this.toggleBtn || !this.panelEl) return;
    const rect = this.toggleBtn.getBoundingClientRect();
    const panelWidth = Math.min(420, window.innerWidth - 32);
    
    // Position vertically below toggle with 10px spacing
    const top = rect.bottom + 10;
    
    // Align right edge with toggle button right edge, clamped within viewport
    const right = Math.max(16, Math.min(window.innerWidth - 16 - panelWidth, window.innerWidth - rect.right));

    this.panelEl.style.top = `${top}px`;
    this.panelEl.style.right = `${right}px`;
    this.panelEl.style.maxWidth = `${panelWidth}px`;
  }

  open() {
    this.isOpen = true;
    this.updatePosition();
    this.panelEl.hidden = false;
    
    // Trigger reflow for organic transition
    void this.panelEl.offsetWidth;
    this.panelEl.classList.add('open');

    this.toggleBtn.setAttribute('aria-expanded', 'true');
    this.toggleBtn.classList.add('active');

    soundEngine.playClick();
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.panelEl.classList.remove('open');
    this.toggleBtn.setAttribute('aria-expanded', 'false');
    this.toggleBtn.classList.remove('active');

    // Wait for transition before setting hidden
    setTimeout(() => {
      if (!this.isOpen) {
        this.panelEl.hidden = true;
      }
    }, 250);
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  syncUI() {
    this.syncThemeUI();
    this.syncLangUI();
    this.syncAudioUI();
  }

  syncThemeUI() {
    let explicitTheme = null;
    try { explicitTheme = localStorage.getItem('theme'); } catch (e) { /* ignore */ }
    
    const activeValue = explicitTheme ? explicitTheme : 'auto';

    this.themeSegments.forEach((btn) => {
      const isSelected = btn.dataset.themeVal === activeValue;
      btn.setAttribute('aria-checked', String(isSelected));
      btn.classList.toggle('active', isSelected);
    });
  }

  syncLangUI() {
    const currentLang = i18n.lang;
    this.langSegments.forEach((btn) => {
      const isSelected = btn.dataset.langVal === currentLang;
      btn.setAttribute('aria-checked', String(isSelected));
      btn.classList.toggle('active', isSelected);
    });
  }

  syncAudioUI() {
    if (!this.audioSwitch) return;
    const isActive = soundEngine.isSoundActive();
    this.audioSwitch.setAttribute('aria-checked', String(isActive));
    this.audioSwitch.classList.toggle('active', isActive);

    if (this.audioStatusText) {
      this.audioStatusText.textContent = isActive 
        ? i18n.t('preferences.audio.enabled', null, 'Ativado') 
        : i18n.t('preferences.audio.disabled', null, 'Desativado');
    }
  }
}

export const preferencesMenu = new PreferencesMenuController();
