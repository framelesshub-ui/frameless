import { useState, useEffect } from 'react';

export function usePointerParallax() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Touch devices do not receive mouse parallax
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        // Normalize to [-0.08, 0.08] for X, [-0.05, 0.05] for Y
        const normX = ((e.clientX / window.innerWidth) - 0.5) * 2;
        const normY = ((e.clientY / window.innerHeight) - 0.5) * 2;

        setPointer({
          x: Math.max(-0.08, Math.min(0.08, normX * 0.08)),
          y: Math.max(-0.05, Math.min(0.05, normY * 0.05)),
        });
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return pointer;
}
