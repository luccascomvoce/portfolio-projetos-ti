/**
 * Cinema Video Player Module — Minimalist Studio Stage
 * Implements high-end cinematic lightbox player with ambient backlight,
 * floating HUD, interactive scrubber, keyboard shortcuts and lifecycle management.
 */

import { soundEngine } from './audio.js';
import { i18n } from '../i18n/i18n.js';

class CinemaPlayerManager {
  constructor() {
    this.overlay = null;
    this.container = null;
    this.video = null;
    this.playBtn = null;
    this.playOverlay = null;
    this.closeBtn = null;
    this.timeDisplay = null;
    this.scrubber = null;
    this.scrubberProgress = null;
    this.scrubberThumb = null;
    this.fullscreenBtn = null;
    this.badgeTitle = null;
    this.triggerElement = null;
    this.idleTimer = null;
    this.isDragging = false;
    this.boundKeydown = this.handleKeydown.bind(this);
    this.boundMouseMove = this.handleMouseMove.bind(this);
    this.boundScrubberDrag = this.handleScrubberDrag.bind(this);
    this.boundScrubberUp = this.handleScrubberUp.bind(this);
  }

  init() {
    this.overlay = document.getElementById('cinema-modal');
    if (!this.overlay) return;

    this.container = this.overlay.querySelector('.cinema-stage-container');
    this.video = document.getElementById('cinema-video');
    this.playBtn = document.getElementById('cinema-play-btn');
    this.playOverlay = document.getElementById('cinema-play-overlay');
    this.closeBtn = document.getElementById('cinema-close-btn');
    this.timeDisplay = document.getElementById('cinema-time-display');
    this.scrubber = document.getElementById('cinema-scrubber');
    this.scrubberProgress = document.getElementById('cinema-scrubber-progress');
    this.scrubberThumb = document.getElementById('cinema-scrubber-thumb');
    this.fullscreenBtn = document.getElementById('cinema-fullscreen-btn');
    this.badgeTitle = document.getElementById('cinema-badge-title');

    if (!this.video) return;

    // Video events
    this.video.addEventListener('loadedmetadata', () => {
      this.adaptAspectRatio();
      this.updateProgress();
    });
    this.video.addEventListener('loadeddata', () => this.adaptAspectRatio());
    this.video.addEventListener('canplay', () => this.adaptAspectRatio());
    this.video.addEventListener('timeupdate', () => this.updateProgress());
    this.video.addEventListener('play', () => this.onPlayStateChange(true));
    this.video.addEventListener('pause', () => this.onPlayStateChange(false));
    this.video.addEventListener('ended', () => {
      this.video.currentTime = 0;
      this.video.play().catch(() => {});
    });

    // Toggle Play clicks
    if (this.playBtn) {
      this.playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
      this.playBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    if (this.playOverlay) {
      this.playOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
    }

    if (this.video) {
      this.video.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
    }

    // Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        soundEngine.playClick();
        this.close();
      });
      this.closeBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Backdrop click
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        soundEngine.playClick();
        this.close();
      }
    });

    // Scrubber click & drag
    if (this.scrubber) {
      this.scrubber.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.seek(e);
        window.addEventListener('mousemove', this.boundScrubberDrag);
        window.addEventListener('mouseup', this.boundScrubberUp);
      });
    }

    // Fullscreen button & change listener
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        soundEngine.playClick();
        this.toggleFullscreen();
      });
      this.fullscreenBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    document.addEventListener('fullscreenchange', () => this.onFullscreenChange());
    document.addEventListener('webkitfullscreenchange', () => this.onFullscreenChange());
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  updateProgress() {
    if (!this.video || !this.video.duration || this.isDragging) return;

    const current = this.video.currentTime;
    const duration = this.video.duration;
    const percent = Math.min(100, Math.max(0, (current / duration) * 100));

    if (this.scrubberProgress) {
      this.scrubberProgress.style.width = `${percent.toFixed(2)}%`;
    }
    if (this.scrubberThumb) {
      this.scrubberThumb.style.left = `${percent.toFixed(2)}%`;
    }
    if (this.scrubber) {
      this.scrubber.setAttribute('aria-valuenow', Math.round(percent).toString());
    }
    if (this.timeDisplay) {
      this.timeDisplay.textContent = `${this.formatTime(current)} / ${this.formatTime(duration)}`;
    }
  }

  seek(e) {
    if (!this.video || !this.video.duration || !this.scrubber) return;

    const rect = this.scrubber.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(1, Math.max(0, clickX / width));

    this.video.currentTime = percent * this.video.duration;
    if (this.scrubberProgress) {
      this.scrubberProgress.style.width = `${(percent * 100).toFixed(2)}%`;
    }
    if (this.scrubberThumb) {
      this.scrubberThumb.style.left = `${(percent * 100).toFixed(2)}%`;
    }
    if (this.timeDisplay) {
      this.timeDisplay.textContent = `${this.formatTime(this.video.currentTime)} / ${this.formatTime(this.video.duration)}`;
    }
  }

  handleScrubberDrag(e) {
    if (this.isDragging) {
      this.seek(e);
    }
  }

  handleScrubberUp() {
    this.isDragging = false;
    window.removeEventListener('mousemove', this.boundScrubberDrag);
    window.removeEventListener('mouseup', this.boundScrubberUp);
  }

  onPlayStateChange(isPlaying) {
    if (!this.playBtn) return;

    const iconPlay = this.playBtn.querySelector('.icon-play');
    const iconPause = this.playBtn.querySelector('.icon-pause');

    if (iconPlay && iconPause) {
      iconPlay.style.display = isPlaying ? 'none' : 'block';
      iconPause.style.display = isPlaying ? 'block' : 'none';
    }

    if (this.playOverlay) {
      this.playOverlay.classList.toggle('visible', !isPlaying);
    }

    if (this.container) {
      this.container.classList.toggle('is-paused', !isPlaying);
    }

    if (isPlaying) {
      this.startIdleTimer();
    } else {
      this.clearIdleTimer();
      if (this.container) {
        this.container.classList.remove('hud-idle');
      }
    }
  }

  togglePlay() {
    if (!this.video) return;
    soundEngine.playClick();
    if (this.video.paused) {
      this.video.play().catch(() => {});
    } else {
      this.video.pause();
    }
  }

  onFullscreenChange() {
    const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
    if (this.fullscreenBtn) {
      const iconEnter = this.fullscreenBtn.querySelector('.icon-fullscreen-enter');
      const iconExit = this.fullscreenBtn.querySelector('.icon-fullscreen-exit');
      if (iconEnter && iconExit) {
        iconEnter.style.display = isFullscreen ? 'none' : 'block';
        iconExit.style.display = isFullscreen ? 'block' : 'none';
      }
    }
  }

  toggleFullscreen() {
    if (!this.container) return;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (this.container.requestFullscreen) {
        this.container.requestFullscreen().catch(() => {});
      } else if (this.container.webkitRequestFullscreen) {
        this.container.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  startIdleTimer() {
    this.clearIdleTimer();
    this.idleTimer = setTimeout(() => {
      if (this.video && !this.video.paused && this.container) {
        this.container.classList.add('hud-idle');
      }
    }, 2400);
  }

  clearIdleTimer() {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
  }

  handleMouseMove() {
    if (this.container) {
      this.container.classList.remove('hud-idle');
    }
    if (this.video && !this.video.paused) {
      this.startIdleTimer();
    }
  }

  handleKeydown(e) {
    if (!this.overlay || !this.overlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      this.close();
    } else if (e.key === ' ' || e.key === 'k' || e.key === 'K') {
      e.preventDefault();
      this.togglePlay();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      this.toggleFullscreen();
    }
  }

  adaptAspectRatio() {
    if (!this.video || !this.container) return;
    const w = this.video.videoWidth || 9;
    const h = this.video.videoHeight || 16;
    const isVertical = h > w;

    this.container.classList.toggle('is-vertical', isVertical);
    this.container.classList.toggle('is-horizontal', !isVertical);
  }

  open(videoUrl, title = '', triggerEl = null) {
    if (!this.overlay || !this.video) return;

    this.triggerElement = triggerEl || document.activeElement;
    soundEngine.playClick();

    if (this.badgeTitle) {
      this.badgeTitle.textContent = title || i18n.t('modal.cinemaTitle', null, 'DEMO INTERATIVA');
    }

    // Set muted (video has no audio)
    this.video.muted = true;
    this.video.src = videoUrl;
    this.video.load();
    this.adaptAspectRatio();

    // Show modal
    this.overlay.classList.add('active');
    this.overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Event listeners
    window.addEventListener('keydown', this.boundKeydown);
    if (this.container) {
      this.container.addEventListener('mousemove', this.boundMouseMove);
    }

    // Start playback
    const playPromise = this.video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback: paused state
        this.onPlayStateChange(false);
      });
    }

    if (this.closeBtn) {
      this.closeBtn.focus();
    }
  }

  close() {
    if (!this.overlay || !this.overlay.classList.contains('active')) return;

    // Exit fullscreen if active when closing
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }

    this.clearIdleTimer();
    window.removeEventListener('keydown', this.boundKeydown);
    if (this.container) {
      this.container.removeEventListener('mousemove', this.boundMouseMove);
      this.container.classList.remove('hud-idle', 'is-paused', 'is-vertical', 'is-horizontal');
    }

    if (this.video) {
      this.video.pause();
      this.video.currentTime = 0;
      this.video.removeAttribute('src');
      this.video.load();
    }

    this.overlay.classList.remove('active');
    this.overlay.setAttribute('aria-hidden', 'true');

    // Restore body overflow if project modal isn't open
    const projectModal = document.getElementById('project-modal');
    const articleModal = document.getElementById('article-modal');
    const isAnotherModalActive = (projectModal && projectModal.classList.contains('active')) ||
                                 (articleModal && articleModal.classList.contains('active'));

    if (!isAnotherModalActive) {
      document.body.style.overflow = '';
    }

    if (this.triggerElement && typeof this.triggerElement.focus === 'function') {
      this.triggerElement.focus();
    }
  }
}

export const cinemaPlayer = new CinemaPlayerManager();
