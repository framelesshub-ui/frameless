'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export default function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Very gentle spring smoothing for cursor glow to create an organic, luxurious response
  const springConfig = { damping: 35, stiffness: 120, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (shouldReduceMotion) return;

    let hasMoved = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
      }
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Subtle Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* 2. Soft cyan/blue radial light following the cursor */}
      {isClient && !shouldReduceMotion && (
        <motion.div
          className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full blur-[140px] opacity-25"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.16) 0%, rgba(123, 97, 255, 0.08) 50%, transparent 75%)',
            willChange: 'transform',
          }}
        />
      )}

      {/* 3. Static faint ambient radial glows behind top and center */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-accent/[0.04] rounded-full blur-[160px]" />
      <div className="absolute top-[45%] -right-40 w-[600px] h-[600px] bg-accent-violet/[0.03] rounded-full blur-[180px]" />
      <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px]" />
    </div>
  );
}
