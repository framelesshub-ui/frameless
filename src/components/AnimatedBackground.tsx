'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  phase: number;
  isCyan: boolean;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [smoothMouse, setSmoothMouse] = useState({ x: -1000, y: -1000 });
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth mouse interpolation for cursor ambient glow
  useEffect(() => {
    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updateSmoothMouse = () => {
      setSmoothMouse((prev) => {
        if (prev.x === -1000) return mouseRef.current;
        const nx = lerp(prev.x, mouseRef.current.x, 0.08);
        const ny = lerp(prev.y, mouseRef.current.y, 0.08);
        return { x: nx, y: ny };
      });
      animId = requestAnimationFrame(updateSmoothMouse);
    };

    animId = requestAnimationFrame(updateSmoothMouse);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Canvas particle simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const checkReducedMotion = () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle high-DPI displays
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Generate balanced star/stardust motes
    const particleCount = Math.floor(Math.min(Math.max(width / 32, 28), 55));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22 - 0.08, // Subtle upward atmospheric drift
        radius: Math.random() * 1.2 + 0.6,
        baseAlpha: Math.random() * 0.25 + 0.1,
        alpha: Math.random() * 0.25 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        phase: Math.random() * Math.PI * 2,
        isCyan: Math.random() < 0.22, // 22% subtle cyan accent particles
      });
    }

    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let time = 0;

    const render = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isMotionReduced = checkReducedMotion();

      // 1. Draw subtle constellation filaments between nearby particles
      const maxConnectDist = 85;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.07;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.isCyan || p2.isCyan
              ? `rgba(0, 240, 255, ${lineAlpha * 1.2})`
              : `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!isMotionReduced) {
          // Normal velocity drift
          p.x += p.vx;
          p.y += p.vy;

          // Gentle sine waver
          p.x += Math.sin(time + p.phase) * 0.06;

          // Interactive subtle mouse repulsion
          if (mx > 0 && my > 0) {
            const dx = p.x - mx;
            const dy = p.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = 110;

            if (dist < repelRadius && dist > 0) {
              const force = (1 - dist / repelRadius) * 0.6;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }

          // Screen wrapping
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        // Pulse alpha gently
        p.alpha = p.baseAlpha + Math.sin(time * 2 + p.phase) * 0.08;
        const currentAlpha = Math.max(0.04, Math.min(p.alpha, 0.45));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.isCyan) {
          ctx.fillStyle = `rgba(0, 240, 255, ${currentAlpha * 1.3})`;
          ctx.shadowColor = 'rgba(0, 240, 255, 0.4)';
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(244, 244, 245, ${currentAlpha})`;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
          ctx.shadowBlur = 2;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for performance
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* ── 1. Deep Midnight Charcoal Base ── */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* ── 2. Cinematic Drifting Aurora Orbs (GPU composited) ── */}
      {/* Orb A: Cyan studio light drift (Top-Left / Center) */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full blur-[140px] opacity-35 mix-blend-screen animate-orb-1 will-change-transform pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(0, 180, 255, 0.03) 50%, transparent 72%)',
        }}
      />

      {/* Orb B: Deep Midnight Azure Glow (Bottom-Right) */}
      <div
        className="absolute -bottom-[15%] -right-[10%] w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full blur-[160px] opacity-30 mix-blend-screen animate-orb-2 will-change-transform pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(14, 165, 233, 0.10) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 72%)',
        }}
      />

      {/* Orb C: Deep Royal Indigo Drift (Center-Left / Mid-Screen) */}
      <div
        className="absolute top-[40%] -left-[15%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full blur-[150px] opacity-25 mix-blend-screen animate-orb-3 will-change-transform pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 72%)',
        }}
      />

      {/* ── 3. Interactive Cursor Ambient Spotlight (Follows mouse smoothly) ── */}
      {mounted && smoothMouse.x > -500 && (
        <div
          className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] opacity-25 mix-blend-screen pointer-events-none transition-opacity duration-500 will-change-transform"
          style={{
            left: `${smoothMouse.x}px`,
            top: `${smoothMouse.y}px`,
            background:
              'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(14, 165, 233, 0.04) 45%, transparent 70%)',
          }}
        />
      )}

      {/* ── 4. Precision Architectural Grid Matrix ── */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 80%)',
        }}
      />

      {/* ── 5. Interactive Star / Stardust Canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* ── 6. Ultra-Fine 35mm Film Grain Texture ── */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* ── 7. Soft Vignette Framing ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(8, 8, 8, 0.6) 100%)',
        }}
      />
    </div>
  );
}
