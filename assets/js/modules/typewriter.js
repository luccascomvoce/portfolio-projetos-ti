/**
 * Typewriter Effect Module
 * Continuously cycles through specialties with natural character timing
 */

export function initTypewriter(elementId, phrases, typingSpeed = 60, deletingSpeed = 35, pauseTime = 2200) {
  const el = document.getElementById(elementId);
  if (!el || !phrases || phrases.length === 0) return;

  // Render static text immediately if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Finished typing current phrase
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400; // brief pause before typing next
    }

    setTimeout(tick, delay);
  }

  tick();
}
