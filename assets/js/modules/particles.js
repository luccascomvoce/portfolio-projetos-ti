/**
 * DOM Particle System with LERP Physics (Zero Canvas 2D)
 * Provides organic ambient floating particles and interactive click/touch bursts
 */

export function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const isMobile = window.innerWidth < 768;
  const AMBIENT_COUNT = isMobile ? 8 : 18;
  const particles = [];
  const colors = [
    { bg: 'rgba(128, 179, 255, 0.45)', glow: 'rgba(128, 179, 255, 0.7)' },
    { bg: 'rgba(229, 184, 231, 0.4)', glow: 'rgba(229, 184, 231, 0.65)' },
    { bg: 'rgba(56, 237, 242, 0.45)', glow: 'rgba(56, 237, 242, 0.7)' }
  ];

  // 1. Spawn Ambient Floating Particles
  for (let i = 0; i < AMBIENT_COUNT; i++) {
    const el = document.createElement('div');
    el.className = 'dom-particle';
    const size = Math.random() * 4 + 2.5; // 2.5px - 6.5px
    const colorObj = colors[Math.floor(Math.random() * colors.length)];
    
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.background = colorObj.bg;
    el.style.boxShadow = `0 0 ${size * 2.5}px ${colorObj.glow}`;
    
    container.appendChild(el);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    particles.push({
      el,
      x,
      y,
      targetX: x,
      targetY: y,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size
    });
  }

  let animationFrameId;

  function update() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.targetX += p.vx;
      p.targetY += p.vy;

      if (p.targetX < -20) p.targetX = width + 20;
      if (p.targetX > width + 20) p.targetX = -20;
      if (p.targetY < -20) p.targetY = height + 20;
      if (p.targetY > height + 20) p.targetY = -20;

      // LERP interpolation
      p.x += (p.targetX - p.x) * 0.05;
      p.y += (p.targetY - p.y) * 0.05;

      p.el.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`;
    }

    animationFrameId = requestAnimationFrame(update);
  }

  animationFrameId = requestAnimationFrame(update);

  // 2. Interactive Burst on Click/Touch everywhere across all contexts
  const triggerBurst = (clientX, clientY) => {
    const burstCount = 10;
    
    for (let i = 0; i < burstCount; i++) {
      const el = document.createElement('div');
      el.className = 'dom-particle burst-particle';
      const size = Math.random() * 4 + 2.5; // Identical size range (2.5px - 6.5px)
      const colorObj = colors[Math.floor(Math.random() * colors.length)];
      
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.background = colorObj.bg;
      el.style.boxShadow = `0 0 ${size * 3}px ${colorObj.glow}`;
      container.appendChild(el);

      // Angle with balanced radial distribution and subtle drift
      const angle = (Math.PI * 2 / burstCount) * i + (Math.random() * 0.4 - 0.2);
      // Gentle, natural distance (40px to 110px)
      const distance = Math.random() * 70 + 40;
      const destX = clientX + Math.cos(angle) * distance;
      // Slight upward buoyancy (-15px)
      const destY = clientY + Math.sin(angle) * distance - 15;

      el.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) scale(1)`;
      el.style.opacity = '0.95';
      // Slow, smooth transition (1.6s to 1.9s duration with smooth cubic-bezier easing)
      const duration = (1.6 + Math.random() * 0.4).toFixed(2);
      el.style.transition = `transform ${duration}s cubic-bezier(0.12, 0.85, 0.25, 1), opacity ${duration}s cubic-bezier(0.4, 0, 0.8, 1)`;

      requestAnimationFrame(() => {
        el.style.transform = `translate3d(${destX.toFixed(1)}px, ${destY.toFixed(1)}px, 0) scale(${Math.random() * 0.4 + 0.3})`;
        el.style.opacity = '0';
      });

      setTimeout(() => {
        el.remove();
      }, parseFloat(duration) * 1000 + 100);
    }
  };

  // Listen to pointerdown on window (captures mouse, touch, pen in all contexts without blocking)
  window.addEventListener('pointerdown', (e) => {
    triggerBurst(e.clientX, e.clientY);
  }, { passive: true });

  return () => cancelAnimationFrame(animationFrameId);
}
