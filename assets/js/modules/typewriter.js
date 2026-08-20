/**
 * Typewriter Effect Module
 * Continuously cycles through specialties with natural character timing.
 * Exposed as a controller so the language manager can swap phrases live.
 */

const typewriter = {
  el: null,
  phrases: [],
  typingSpeed: 60,
  deletingSpeed: 35,
  pauseTime: 2200,
  phraseIndex: 0,
  charIndex: 0,
  isDeleting: false,
  timer: null,

  init(elementId, phrases, typingSpeed = 60, deletingSpeed = 35, pauseTime = 2200) {
    this.el = document.getElementById(elementId);
    if (!this.el) return;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
    this.pauseTime = pauseTime;
    this.setPhrases(phrases);
  },

  setPhrases(phrases) {
    if (!this.el) return;
    this.stop();
    this.phrases = Array.isArray(phrases) && phrases.length ? phrases : [''];
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    // Render static text immediately if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.el.textContent = this.phrases[0];
      return;
    }

    this.tick();
  },

  stop() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },

  tick() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.el.textContent = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex -= 1;
    } else {
      this.el.textContent = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex += 1;
    }

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      delay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 400;
    }

    this.timer = setTimeout(() => this.tick(), delay);
  },
};

/** Backward-compatible facade. */
export function initTypewriter(elementId, phrases, typingSpeed = 60, deletingSpeed = 35, pauseTime = 2200) {
  typewriter.init(elementId, phrases, typingSpeed, deletingSpeed, pauseTime);
  return typewriter;
}

export { typewriter };
