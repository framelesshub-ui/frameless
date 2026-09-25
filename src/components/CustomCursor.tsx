'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export type CursorMode = 'default' | 'view' | 'play' | 'drag';

export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High performance spring physics
  const springConfig = { damping: 28, stiffness: 280, mass: 0.18 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on devices with a fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setHasFinePointer(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches);
    };

    try {
      mediaQuery.addEventListener('change', handlePointerChange);
    } catch {
      // Safari legacy fallback
      mediaQuery.addListener(handlePointerChange);
    }

    if (!mediaQuery.matches || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element cursor data
      const target = (e.target as HTMLElement)?.closest('[data-cursor]');
      if (target) {
        const mode = target.getAttribute('data-cursor') as CursorMode;
        setCursorMode(mode || 'default');
      } else {
        setCursorMode('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      try {
        mediaQuery.removeEventListener('change', handlePointerChange);
      } catch {
        mediaQuery.removeListener(handlePointerChange);
      }
    };
  }, [mouseX, mouseY, isVisible, shouldReduceMotion]);

  if (!hasFinePointer || shouldReduceMotion || !isVisible) {
    return null;
  }

  const isExpanded = cursorMode !== 'default';

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center select-none"
    >
      <motion.div
        animate={{
          width: isExpanded ? 76 : 10,
          height: isExpanded ? 76 : 10,
          backgroundColor: isExpanded ? 'rgba(0, 217, 245, 0.95)' : 'rgba(0, 217, 245, 0.9)',
          boxShadow: isExpanded
            ? '0 0 35px rgba(0, 217, 245, 0.45)'
            : '0 0 14px rgba(0, 217, 245, 0.6)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 280 }}
        className="rounded-full flex items-center justify-center backdrop-blur-md overflow-hidden"
      >
        {cursorMode === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-black text-black tracking-widest uppercase"
          >
            VIEW
          </motion.span>
        )}
        {cursorMode === 'play' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-black text-black tracking-widest uppercase flex items-center gap-0.5"
          >
            <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            PLAY
          </motion.span>
        )}
        {cursorMode === 'drag' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-black text-black tracking-widest uppercase"
          >
            DRAG
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
