/**
 * Binary Rain & Matrix Easter Egg System (Zero Canvas 2D Engine)
 * 
 * Provides:
 *   1. Ambient binary digit rain (subtle Matrix-style background)
 *   2. Interactive binary burst on click/touch (tech-themed, not festive)
 *   3. Easter Egg: rapid clicks trigger "You broke the Matrix" CRT-off animation
 *      with a terminal message overlay, auto-dismissed after timeout or user input.
 *
 * Optimized for Zero Main-Thread Thrashing and Zero Forced Reflows.
 * Respects prefers-reduced-motion.
 */

export function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // ──────────────────────────────────────────────────────────────
  // Shared state
  // ──────────────────────────────────────────────────────────────
  let width = window.innerWidth;
  let height = window.innerHeight;

  const handleResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize, { passive: true });

  const isMobile = width < 768;

  // ──────────────────────────────────────────────────────────────
  // Color tokens — uses project M3 palette via CSS variables
  // Cached to avoid forced reflows from getComputedStyle every frame
  // ──────────────────────────────────────────────────────────────
  let cachedAccentHex = null;
  let cachedAccentTime = 0;
  const ACCENT_CACHE_TTL = 2000;

  function getAccentColor(opacity) {
    const now = performance.now();
    if (!cachedAccentHex || now - cachedAccentTime > ACCENT_CACHE_TTL) {
      const style = getComputedStyle(document.documentElement);
      cachedAccentHex = style.getPropertyValue('--accent').trim() || '#38edf2';
      cachedAccentTime = now;
    }
    return hexToRgba(cachedAccentHex, opacity);
  }

  function hexToRgba(hex, alpha) {
    // Handle rgb() or rgba() values
    const rgbMatch = hex.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    if (rgbMatch) {
      return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
    }
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // ──────────────────────────────────────────────────────────────
  // 1. AMBIENT BINARY RAIN (background)
  // ──────────────────────────────────────────────────────────────
  const COLUMN_COUNT = isMobile ? 5 : 9;
  const MAX_ACTIVE_PER_COLUMN = isMobile ? 2 : 3;
  const pool = [];

  const columnWidth = width / COLUMN_COUNT;

  // Create initial pool — each column gets MAX_ACTIVE_PER_COLUMN spans
  for (let col = 0; col < COLUMN_COUNT; col++) {
    for (let i = 0; i < MAX_ACTIVE_PER_COLUMN; i++) {
      const span = document.createElement('span');
      span.className = 'binary-digit';
      span.setAttribute('aria-hidden', 'true');
      container.appendChild(span);

      pool.push({
        el: span,
        col,
        x: columnWidth * col + columnWidth * 0.5 + (Math.random() - 0.5) * columnWidth * 0.6,
        y: -40 - Math.random() * height,
        speed: 0.3 + Math.random() * 0.7,
        char: Math.random() > 0.5 ? '0' : '1',
        opacity: 0.15 + Math.random() * 0.20,
        size: isMobile ? 13 : 15 + Math.random() * 5,
        delay: Math.random() * 4000,
        active: false,
        lastUpdate: performance.now()
      });
    }
  }

  let animationFrameId = null;
  let lastFrameTime = performance.now();

  function updateBinaryRain(now) {
    if (document.hidden) {
      animationFrameId = requestAnimationFrame(updateBinaryRain);
      return;
    }
    const dt = Math.min(now - lastFrameTime, 50);
    lastFrameTime = now;

    for (let i = 0; i < pool.length; i++) {
      const d = pool[i];

      if (!d.active) {
        if (now - d.lastUpdate > d.delay) {
          d.active = true;
          d.y = -20 - Math.random() * 60;
          d.char = Math.random() > 0.5 ? '0' : '1';
          d.opacity = 0.08 + Math.random() * 0.18;
          d.speed = 0.3 + Math.random() * 0.7;
        } else {
          continue;
        }
      }

      d.y += d.speed * (dt / 16.67);

      let fadeOpacity = d.opacity;
      const fadeStart = height * 0.75;
      if (d.y > fadeStart) {
        const fadeRatio = Math.min(1, (d.y - fadeStart) / (height - fadeStart));
        fadeOpacity = d.opacity * (1 - fadeRatio);
      }

      if (d.y > height + 40 || fadeOpacity <= 0.01) {
        d.y = -20 - Math.random() * 80;
        d.char = Math.random() > 0.5 ? '0' : '1';
        d.speed = 0.3 + Math.random() * 0.7;
        d.opacity = 0.15 + Math.random() * 0.20;
        d.lastUpdate = now;
        d.active = true;
        d.delay = Math.random() * 1500 + 300;
        d.el.style.display = 'none';
        continue;
      }

      const accentColor = getAccentColor(fadeOpacity);
      d.el.style.display = '';
      d.el.style.transform = `translate3d(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px, 0)`;
      d.el.style.opacity = fadeOpacity;
      d.el.style.color = accentColor;
      d.el.style.fontSize = `${d.size}px`;
      d.el.textContent = d.char;
    }

    animationFrameId = requestAnimationFrame(updateBinaryRain);
  }

  // Defer animation loop start until browser completes initial paint
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      animationFrameId = requestAnimationFrame(updateBinaryRain);
    }, { timeout: 300 });
  } else {
    setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateBinaryRain);
    }, 150);
  }

  // ──────────────────────────────────────────────────────────────
  // 2. BINARY BURST ON CLICK/TOUCH — Grid-based, no diagonals
  // ──────────────────────────────────────────────────────────────
  const GRID_UNIT = 34; // px per grid cell

  function triggerBinaryBurst(clientX, clientY, intensity) {
    // Build set of grid positions for this burst
    const rings = Math.floor(1 + intensity * 4); // 1 to 5 rings
    const positions = [];

    for (let r = 0; r <= rings; r++) {
      // Cardinal positions at distance r
      positions.push({ col: r, row: 0, diagonal: false });
      if (r > 0) positions.push({ col: -r, row: 0, diagonal: false });
      positions.push({ col: 0, row: r, diagonal: false });
      if (r > 0) positions.push({ col: 0, row: -r, diagonal: false });

      // Diagonal positions (skip r=0, already center)
      for (let c = 1; c <= r; c++) {
        const d = r - c;
        if (d > 0) {
          positions.push({ col: c, row: d, diagonal: true });
          positions.push({ col: -c, row: d, diagonal: true });
          positions.push({ col: c, row: -d, diagonal: true });
          positions.push({ col: -c, row: -d, diagonal: true });
        }
      }
    }

    // Deduplicate and limit
    const seen = new Set();
    const unique = [];
    for (const p of positions) {
      const key = `${p.col},${p.row}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(p);
      }
    }

    // Shuffle for organic feel
    for (let i = unique.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unique[i], unique[j]] = [unique[j], unique[i]];
    }

    const maxDigits = Math.floor(4 + intensity * 40);
    const selected = unique.slice(0, maxDigits);

    for (const pos of selected) {
      const span = document.createElement('span');
      span.className = 'binary-digit';
      span.setAttribute('aria-hidden', 'true');

      const size = 14 + Math.random() * 10;
      const destX = clientX + pos.col * GRID_UNIT;
      const destY = clientY + pos.row * GRID_UNIT;
      const char = Math.random() > 0.5 ? '0' : '1';

      const accentColor = getAccentColor(0.55);
      span.style.cssText = `position:fixed;left:0;top:0;font-family:'Fira Code',monospace;font-weight:700;pointer-events:none;z-index:1000;will-change:transform,opacity;font-size:${size}px;color:${accentColor};`;

      span.textContent = char;

      if (pos.diagonal) {
        // Diagonals: appear in-place with fade-in, no movement
        span.style.transform = `translate3d(${destX.toFixed(1)}px, ${destY.toFixed(1)}px, 0)`;
        span.style.opacity = '0';
        span.style.transition = `opacity 0.35s ease`;
        document.body.appendChild(span);
        requestAnimationFrame(() => { span.style.opacity = '0.55'; });

        // Fade out after delay
        const life = 1.8 + Math.random() * 0.8;
        setTimeout(() => {
          span.style.transition = `opacity ${life * 0.7}s ease`;
          span.style.opacity = '0';
        }, life * 500);
        setTimeout(() => { span.remove(); }, life * 1000 + 300);
      } else {
        // Cardinals: move straight from center (pure horizontal or vertical)
        span.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        span.style.opacity = '0.7';
        document.body.appendChild(span);

        const duration = 0.7 + Math.random() * 0.4;
        span.style.transition = `transform ${duration}s cubic-bezier(0.12,0.85,0.25,1), opacity ${duration * 0.9}s cubic-bezier(0.4,0,0.8,1)`;

        requestAnimationFrame(() => {
          span.style.transform = `translate3d(${destX.toFixed(1)}px, ${destY.toFixed(1)}px, 0)`;
          span.style.opacity = '0';
        });

        setTimeout(() => { span.remove(); }, duration * 1000 + 200);
      }
    }
  }

  // ──────────────────────────────────────────────────────────────
  // 3. EASTER EGG ENGINE — "You broke the Matrix"
  // ──────────────────────────────────────────────────────────────
  // Simple streak counter: each click increments, 800ms idle resets.
  // 15 rapid clicks triggers the easter egg.
  const EASTER_EGG_THRESHOLD = 15;
  const STREAK_RESET_MS = 800;

  let clickStreak = 0;
  let streakResetTimeout = null;
  let easterEggActive = false;
  let easterEggLocked = false;
  let easterEggDismissTimer = null;

  function resetStreak() {
    clickStreak = 0;
    streakResetTimeout = null;
  }

  function scheduleStreakReset() {
    if (streakResetTimeout) clearTimeout(streakResetTimeout);
    streakResetTimeout = setTimeout(resetStreak, STREAK_RESET_MS);
  }

  function triggerEasterEgg() {
    if (easterEggActive) return;
    easterEggActive = true;
    easterEggLocked = true;
    resetStreak();

    const overlay = document.getElementById('matrix-easter-egg');
    if (!overlay) return;

    if (easterEggDismissTimer) {
      clearTimeout(easterEggDismissTimer);
      easterEggDismissTimer = null;
    }

    overlay.classList.remove('dismiss');
    overlay.classList.add('active', 'crt-off');
    overlay.setAttribute('aria-hidden', 'false');

    setTimeout(() => {
      overlay.classList.remove('crt-off');
      overlay.classList.add('terminal-visible');
      const textEl = overlay.querySelector('.matrix-message');
      const cursorEl = overlay.querySelector('.matrix-cursor');
      if (textEl) typeMatrixMessage(textEl, cursorEl);
      // Unlock dismiss after CRT animation + small grace period
      setTimeout(() => { easterEggLocked = false; }, 400);
      easterEggDismissTimer = setTimeout(() => { dismissEasterEgg(); }, 12000);
    }, 850);
  }

  function typeMatrixMessage(textEl, cursorEl) {
    const lines = [
      '> Sistema comprometido...',
      '> ',
      '> Ol\u00E1.',
      '> Voc\u00EA quebrou a Matrix. Parab\u00E9ns.',
      '> Agora volte e finja que nada aconteceu.',
      '> ',
      '> [Pressione qualquer tecla ou aguarde...]'
    ];

    textEl.innerHTML = '';
    let lineIndex = 0;
    let charIndex = 0;

    function typeNext() {
      if (lineIndex >= lines.length) {
        if (cursorEl) cursorEl.style.opacity = '1';
        return;
      }
      const line = lines[lineIndex];
      if (charIndex === 0) {
        const div = document.createElement('div');
        div.className = 'matrix-line';
        textEl.appendChild(div);
      }
      const currentLine = textEl.lastChild;
      if (charIndex < line.length) {
        currentLine.textContent = line.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeNext, 40 + Math.random() * 60);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, 120);
      }
    }
    typeNext();
  }

  function dismissEasterEgg() {
    if (easterEggLocked) return;
    const overlay = document.getElementById('matrix-easter-egg');
    if (!overlay) return;
    if (easterEggDismissTimer) {
      clearTimeout(easterEggDismissTimer);
      easterEggDismissTimer = null;
    }
    overlay.classList.remove('terminal-visible');
    overlay.classList.add('crt-on');
    setTimeout(() => {
      overlay.classList.remove('active', 'crt-on');
      overlay.classList.add('dismiss');
      overlay.setAttribute('aria-hidden', 'true');
      easterEggActive = false;
      clickStreak = 0;
    }, 600);
  }

  document.addEventListener('keydown', () => {
    if (easterEggActive) dismissEasterEgg();
  });

  // ──────────────────────────────────────────────────────────────
  // 4. MAIN CLICK HANDLER
  // ──────────────────────────────────────────────────────────────
  window.addEventListener('pointerdown', (e) => {
    if (easterEggActive) {
      if (!easterEggLocked) dismissEasterEgg();
      return;
    }

    // Increment streak and schedule reset
    clickStreak++;
    scheduleStreakReset();

    // Check easter egg trigger
    if (clickStreak >= EASTER_EGG_THRESHOLD) {
      triggerEasterEgg();
      return;
    }

    // Burst intensity scales with streak
    const intensity = Math.min(clickStreak / EASTER_EGG_THRESHOLD, 1);
    triggerBinaryBurst(e.clientX, e.clientY, intensity);
  }, { passive: true });

  // ──────────────────────────────────────────────────────────────
  // 5. CLEANUP
  // ──────────────────────────────────────────────────────────────
  return () => {
    window.removeEventListener('resize', handleResize);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (streakResetTimeout) clearTimeout(streakResetTimeout);
    if (easterEggDismissTimer) clearTimeout(easterEggDismissTimer);
    for (const d of pool) {
      if (d.el && d.el.parentNode) d.el.remove();
    }
  };
}
