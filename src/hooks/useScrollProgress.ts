import { useState, useEffect } from 'react';

interface ScrollProgressOptions {
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function useScrollProgress(options?: ScrollProgressOptions) {
  const [globalProgress, setGlobalProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const updateScroll = () => {
      let currentY = 0;
      let totalScrollable = 1;

      if (options?.containerRef?.current) {
        const el = options.containerRef.current;
        const rect = el.getBoundingClientRect();
        const top = -rect.top;
        const total = rect.height - window.innerHeight;
        currentY = Math.max(0, top);
        totalScrollable = Math.max(1, total);
      } else {
        currentY = window.scrollY || document.documentElement.scrollTop || 0;
        const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 1;
        const winHeight = window.innerHeight || 1;
        totalScrollable = Math.max(1, docHeight - winHeight);
      }

      const rawProgress = currentY / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setScrollY(currentY);
      setGlobalProgress(clamped);
      setIsScrolled(currentY > 60);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updateScroll();
        rafId = null;
      });
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [options?.containerRef]);

  return { globalProgress, scrollY, isScrolled };
}
