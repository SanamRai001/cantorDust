import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 100;
const MOUSE_RADIUS = 180;
const MOUSE_STRENGTH = 0.018;
const DRAG_STRENGTH = 0.06;
const DAMPING = 0.92;
const DRIFT = 0.15;

const createParticle = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * DRIFT,
  vy: (Math.random() - 0.5) * DRIFT,
  size: Math.random() * 2 + 0.8,
  opacity: Math.random() * 0.45 + 0.15,
  blue: Math.random() > 0.65,
});

const DustParticles = () => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const section = wrap.parentElement;
    if (!section) return;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;

    const mouse = {
      x: -1000,
      y: -1000,
      vx: 0,
      vy: 0,
      active: false,
    };

    const initParticles = () => {
      const count = prefersReducedMotion ? 40 : PARTICLE_COUNT;
      particles = Array.from({ length: count }, () => createParticle(width, height));
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        initParticles();
      } else {
        particles.forEach((p) => {
          p.x = Math.min(p.x, width);
          p.y = Math.min(p.y, height);
        });
      }
    };

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (mouse.active) {
        mouse.vx = x - mouse.x;
        mouse.vy = y - mouse.y;
      } else {
        mouse.vx = 0;
        mouse.vy = 0;
      }

      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!prefersReducedMotion) {
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < MOUSE_RADIUS && dist > 0) {
              const pull = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
              p.vx += (dx / dist) * pull * dist * 0.08;
              p.vy += (dy / dist) * pull * dist * 0.08;
            }

            p.vx += mouse.vx * DRAG_STRENGTH * 0.01;
            p.vy += mouse.vy * DRAG_STRENGTH * 0.01;
          }

          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
          p.vx *= DAMPING;
          p.vy *= DAMPING;

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.blue
          ? `rgba(96, 165, 250, ${p.opacity})`
          : `rgba(241, 245, 249, ${p.opacity * 0.7})`;
        ctx.fill();
      }
    };

    const animate = () => {
      draw();
      rafId = requestAnimationFrame(animate);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);

    if (prefersReducedMotion) {
      draw();
    } else {
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-dust-canvas-wrap" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DustParticles;
