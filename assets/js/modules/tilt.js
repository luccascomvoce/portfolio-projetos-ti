/**
 * 3D Tilt Engine for Cards & Interactive Elements
 * Calculates local cursor offset and applies smooth GPU matrix rotation
 */

let tiltEnabled = true;

export function setTiltEnabled(enabled) {
  tiltEnabled = enabled;
}

export function applyTiltEffect(element, maxAngle = 7) {
  if (!element) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const handlePointerMove = (e) => {
    if (!tiltEnabled) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxAngle;
    const rotateY = ((x - centerX) / centerX) * maxAngle;

    element.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    element.style.transition = 'transform 0.1s ease-out';
  };

  const handlePointerLeave = () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    element.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  };

  element.addEventListener('pointermove', handlePointerMove, { passive: true });
  element.addEventListener('pointerleave', handlePointerLeave, { passive: true });
}

export function initAllTiltCards() {
  const cards = document.querySelectorAll('.project-card, .hero-avatar');
  cards.forEach(card => applyTiltEffect(card));
}
