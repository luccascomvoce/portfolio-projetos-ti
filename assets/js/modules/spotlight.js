/**
 * Spotlight Dynamic Pointer Overlay
 * Tracks cursor or touch position and updates CSS variables in real time
 */

export function initSpotlight() {
  const spotlight = document.getElementById('spotlight');
  if (!spotlight) return;

  const updateCoordinates = (x, y) => {
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  };

  window.addEventListener('pointermove', (e) => {
    updateCoordinates(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
}
