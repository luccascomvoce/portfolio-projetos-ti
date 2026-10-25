/**
 * Executive Contact Hub Modal Controller — Portfólio Luccas
 * Manages the consolidated contact hub modal, direct vCard agenda integration,
 * QR Code zoom toggle (normal <-> enlarged), 1-click clipboard endpoint copying,
 * and WAI-ARIA accessibility.
 */

import { CONTACT_CONFIG } from '../config.js';
import { soundEngine } from './audio.js';
import { i18n } from '../i18n/i18n.js';

class ContactModalController {
  constructor() {
    this.overlay = null;
    this.container = null;
    this.openBtn = null;
    this.closeBtn = null;
    this.qrBox = null;
    this.qrSidebar = null;
    this.qrZoomBtn = null;
    this.vcardBtn = null;
    this.isQrZoomed = false;
    this.copyTimeouts = new Map();
    this.isOpen = false;
    this.pinnedItem = null;
    this.accordionItems = [];
    this.boundTrapFocus = this.trapFocus.bind(this);
  }

  init() {
    this.overlay = document.getElementById('contact-hub-modal');
    this.openBtn = document.getElementById('btn-open-contact-modal');
    this.closeBtn = document.getElementById('contact-modal-close-btn');
    this.qrSidebar = document.getElementById('contact-qr-sidebar');
    this.qrBox = document.getElementById('contact-qr-box');
    this.qrZoomBtn = document.getElementById('btn-qr-zoom');
    this.vcardBtn = document.getElementById('btn-save-vcard');

    if (!this.overlay) return;
    this.container = this.overlay.querySelector('.contact-hub-container');

    // Bind Hero CTA Open button
    if (this.openBtn) {
      this.openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        soundEngine.playClick();
        this.open();
      });
      this.openBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Bind Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        soundEngine.playClick();
        this.close();
      });
      this.closeBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Bind Backdrop click
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay || (e.target && e.target.classList && e.target.classList.contains('contact-hub-stage'))) {
        soundEngine.playClick();
        this.close();
      }
    });

    // Keyboard ESC listener
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Bind QR Code Zoom toggle button
    if (this.qrZoomBtn && this.qrSidebar) {
      this.qrZoomBtn.addEventListener('click', (e) => {
        e.preventDefault();
        soundEngine.playClick();
        this.toggleQrZoom();
      });
      this.qrZoomBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Bind direct click/tap on the QR Code box to toggle zoom as well
    if (this.qrBox && this.qrSidebar) {
      this.qrBox.addEventListener('click', (e) => {
        e.preventDefault();
        soundEngine.playClick();
        this.toggleQrZoom();
      });
      this.qrBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          soundEngine.playClick();
          this.toggleQrZoom();
        }
      });
      this.qrBox.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Bind vCard direct save button
    if (this.vcardBtn) {
      this.vcardBtn.addEventListener('click', () => {
        soundEngine.playClick();
      });
      this.vcardBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Bind 1-Click Clipboard Copy on all Endpoint buttons
    const copyBtns = this.overlay.querySelectorAll('.btn-copy-endpoint');
    copyBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        soundEngine.playClick();
        const targetId = btn.getAttribute('data-copy-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const textToCopy = targetEl.textContent.trim();
          this.copyText(textToCopy, btn);
        }
      });
      btn.addEventListener('mouseenter', () => soundEngine.playHover());
    });

    // Attach sound cues to all action chips and links
    const interactiveChips = this.overlay.querySelectorAll('.channel-chip, .btn-save-contact-flat, .btn-qr-zoom');
    interactiveChips.forEach((chip) => {
      chip.addEventListener('mouseenter', () => soundEngine.playHover(), { passive: true });
      chip.addEventListener('click', () => soundEngine.playClick(), { passive: true });
    });

    // Initialize Channels Accordion ("Sanfona")
    this.initAccordion();

    // Setup responsive placement (outside on right on desktop, inside on mobile)
    this.setupResponsivePlacement();

    // Hydrate all URLs and labels from CONTACT_CONFIG
    this.hydrateFromConfig();
  }

  setupResponsivePlacement() {
    if (!this.qrSidebar || !this.container || !this.overlay) return;
    const stage = this.overlay.querySelector('.contact-hub-stage');
    const body = this.container.querySelector('.contact-hub-body');
    const channels = document.getElementById('contact-channels-accordion');
    if (!stage || !body || !channels) return;

    const mediaQuery = window.matchMedia('(max-width: 768px), (orientation: portrait) and (max-width: 900px)');

    const updatePlacement = (mq) => {
      if (mq.matches) {
        // Mobile vertical: QR sidebar sits inside modal body above accordion
        if (this.qrSidebar.parentElement !== body) {
          body.insertBefore(this.qrSidebar, channels);
        }
      } else {
        // Desktop horizontal: QR sidebar is outside main container on the right of stage
        if (this.qrSidebar.parentElement !== stage || this.container.nextElementSibling !== this.qrSidebar) {
          stage.appendChild(this.qrSidebar);
        }
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePlacement);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(updatePlacement);
    }
    updatePlacement(mediaQuery);
  }

  expandAccordionItem(targetItem) {
    if (!this.accordionItems || !this.accordionItems.length) return;
    this.accordionItems.forEach((item) => {
      const isTarget = item === targetItem;
      item.classList.toggle('is-expanded', isTarget);
      item.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
    });
  }

  collapseAllAccordionItems() {
    if (!this.accordionItems || !this.accordionItems.length) return;
    this.accordionItems.forEach((item) => {
      item.classList.remove('is-expanded');
      item.setAttribute('aria-expanded', 'false');
    });
  }

  initAccordion() {
    this.accordionItems = Array.from(this.overlay.querySelectorAll('.contact-channel-item'));
    if (!this.accordionItems.length) return;

    const accordionContainer = document.getElementById('contact-channels-accordion');

    this.accordionItems.forEach((item) => {
      // Mouse hover expands channel automatically
      item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('is-expanded')) {
          soundEngine.playHover();
          this.expandAccordionItem(item);
        }
      });

      // Mouse leaves channel item
      item.addEventListener('mouseleave', (e) => {
        const toElement = e.relatedTarget;
        // If moving directly into another channel item, let that item's mouseenter handle it
        if (toElement && toElement.closest && toElement.closest('.contact-channel-item')) {
          return;
        }
        // If user already clicked/pinned an item, restore that pinned item
        if (this.pinnedItem) {
          this.expandAccordionItem(this.pinnedItem);
        } else {
          // If no item has been clicked yet, collapse all
          this.collapseAllAccordionItems();
        }
      });

      // Click or touch pins and expands channel
      item.addEventListener('click', (e) => {
        // Pin this item whenever user interacts with it
        this.pinnedItem = item;

        // If clicking copy button or action link, expand and let default/specific handler run
        if (e.target.closest('.btn-copy-endpoint') || e.target.closest('a')) {
          this.expandAccordionItem(item);
          return;
        }

        // Click on header or item surface
        soundEngine.playClick();
        this.expandAccordionItem(item);
      });

      // Keyboard accessibility for header row
      const headerRow = item.querySelector('.channel-meta-row');
      if (headerRow) {
        headerRow.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.closest('.btn-copy-endpoint')) return;
            e.preventDefault();
            this.pinnedItem = item;
            soundEngine.playClick();
            this.expandAccordionItem(item);
          }
        });
      }
    });

    // Fallback when mouse leaves entire accordion area
    if (accordionContainer) {
      accordionContainer.addEventListener('mouseleave', () => {
        if (this.pinnedItem) {
          this.expandAccordionItem(this.pinnedItem);
        } else {
          this.collapseAllAccordionItems();
        }
      });
    }
  }

  toggleQrZoom() {
    if (!this.qrSidebar || !this.qrZoomBtn) return;
    this.isQrZoomed = !this.isQrZoomed;

    const zoomText = this.qrZoomBtn.querySelector('.qr-zoom-text');
    const iconIn = this.qrZoomBtn.querySelector('.icon-zoom-in');
    const iconOut = this.qrZoomBtn.querySelector('.icon-zoom-out');

    if (this.isQrZoomed) {
      this.qrSidebar.classList.add('is-zoomed');
      if (zoomText) zoomText.textContent = i18n.t('contact.qrZoomOut', null, 'Tamanho Normal');
      if (iconIn) iconIn.hidden = true;
      if (iconOut) iconOut.hidden = false;
      this.qrZoomBtn.setAttribute('aria-label', i18n.t('contact.qrZoomOut', null, 'Tamanho Normal'));
    } else {
      this.qrSidebar.classList.remove('is-zoomed');
      if (zoomText) zoomText.textContent = i18n.t('contact.qrZoomIn', null, 'Ampliar QR Code');
      if (iconIn) iconIn.hidden = false;
      if (iconOut) iconOut.hidden = true;
      this.qrZoomBtn.setAttribute('aria-label', i18n.t('contact.qrZoomIn', null, 'Ampliar QR Code'));
    }
  }

  open() {
    if (!this.overlay) return;
    this.isOpen = true;

    // Reset accordion to initial all-minimized state
    this.pinnedItem = null;
    this.collapseAllAccordionItems();

    // Show overlay
    this.overlay.hidden = false;
    // Trigger transition
    requestAnimationFrame(() => {
      this.overlay.classList.add('active');
      document.body.classList.add('modal-open');
      if (this.openBtn) {
        this.openBtn.setAttribute('aria-expanded', 'true');
      }
      // Focus close button
      if (this.closeBtn) {
        this.closeBtn.focus();
      }
      document.addEventListener('keydown', this.boundTrapFocus);
    });
  }

  close() {
    if (!this.overlay || !this.isOpen) return;
    this.isOpen = false;

    // Reset accordion on close
    this.pinnedItem = null;
    this.collapseAllAccordionItems();

    this.overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (this.openBtn) {
      this.openBtn.setAttribute('aria-expanded', 'false');
    }
    document.removeEventListener('keydown', this.boundTrapFocus);

    // Hide after transition ends
    setTimeout(() => {
      if (!this.isOpen) {
        this.overlay.hidden = true;
        if (this.openBtn) {
          this.openBtn.focus();
        }
      }
    }, 280);
  }

  trapFocus(e) {
    if (e.key !== 'Tab' || !this.isOpen) return;

    const focusables = Array.from(
      this.overlay.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter((el) => el.offsetParent !== null);

    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  async copyText(text, btn) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      this.showCopySuccess(btn);
    } catch (err) {
      console.warn('[ContactModal] Clipboard copy failed:', err);
    }
  }

  showCopySuccess(btn) {
    const labelSpan = btn.querySelector('.copy-status-text');
    if (!labelSpan) return;

    const copiedText = i18n.t('contact.copied', null, 'Copiado! ✓');
    const originalText = i18n.t('contact.copy', null, 'Copiar');

    labelSpan.textContent = copiedText;
    btn.classList.add('copied');

    if (this.copyTimeouts.has(btn)) {
      clearTimeout(this.copyTimeouts.get(btn));
    }

    const timeout = setTimeout(() => {
      labelSpan.textContent = originalText;
      btn.classList.remove('copied');
      this.copyTimeouts.delete(btn);
    }, 2000);

    this.copyTimeouts.set(btn, timeout);
  }

  hydrateFromConfig() {
    // 1. Email Key & Direct Mailto link
    const emailKey = document.getElementById('endpoint-email-key');
    if (emailKey && CONTACT_CONFIG.email) {
      emailKey.textContent = CONTACT_CONFIG.email.address;
    }

    const chipMailto = document.getElementById('chip-email-mailto');
    if (chipMailto && CONTACT_CONFIG.email) {
      chipMailto.href = `mailto:${CONTACT_CONFIG.email.address}`;
    }

    // 2. Phone Key & Chips (WhatsApp, Call, SMS)
    const phoneKey = document.getElementById('endpoint-phone-key');
    if (phoneKey && CONTACT_CONFIG.phone) {
      phoneKey.textContent = CONTACT_CONFIG.phone.display;
    }

    const chipWa = document.getElementById('chip-phone-whatsapp');
    if (chipWa && CONTACT_CONFIG.whatsapp) {
      chipWa.href = CONTACT_CONFIG.whatsapp.getUrl();
    }

    const chipCall = document.getElementById('chip-phone-call');
    if (chipCall && CONTACT_CONFIG.phone) {
      chipCall.href = CONTACT_CONFIG.phone.getUrl();
    }

    const chipSms = document.getElementById('chip-phone-sms');
    if (chipSms && CONTACT_CONFIG.sms) {
      chipSms.href = CONTACT_CONFIG.sms.getUrl();
    }

    // 3. Digital Identity Handle & Chips (GitHub, LinkedIn, Telegram)
    const handleKey = document.getElementById('endpoint-handle-key');
    if (handleKey && CONTACT_CONFIG.github) {
      handleKey.textContent = `@${CONTACT_CONFIG.github.username}`;
    }

    const chipGh = document.getElementById('chip-handle-github');
    if (chipGh && CONTACT_CONFIG.github) {
      chipGh.href = CONTACT_CONFIG.github.getUrl();
    }

    const chipLi = document.getElementById('chip-handle-linkedin');
    if (chipLi && CONTACT_CONFIG.linkedin) {
      chipLi.href = CONTACT_CONFIG.linkedin.getUrl();
    }

    const chipTg = document.getElementById('chip-handle-telegram');
    if (chipTg && CONTACT_CONFIG.telegram) {
      chipTg.href = CONTACT_CONFIG.telegram.getUrl();
    }

    // 4. vCard download link
    const vcardLink = document.getElementById('btn-save-vcard');
    if (vcardLink && CONTACT_CONFIG.vcard) {
      vcardLink.href = CONTACT_CONFIG.vcard.url;
    }
  }

  refresh() {
    this.hydrateFromConfig();
    if (this.qrZoomBtn) {
      const zoomText = this.qrZoomBtn.querySelector('.qr-zoom-text');
      if (zoomText) {
        zoomText.textContent = this.isQrZoomed
          ? i18n.t('contact.qrZoomOut', null, 'Tamanho Normal')
          : i18n.t('contact.qrZoomIn', null, 'Ampliar QR Code');
      }
    }
  }
}

export const contactModal = new ContactModalController();
