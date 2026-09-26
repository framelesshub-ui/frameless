'use client';

import React, { useEffect, useState } from 'react';

export default function PageIntro() {
  const [visible, setVisible] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if reduced motion or already shown in this session
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        setVisible(false);
        return;
      }
    }

    const timer = setTimeout(() => {
      setAnimatingOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 600);
      return () => clearTimeout(removeTimer);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] bg-[#080808] flex items-center justify-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        animatingOut ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo with subtle mask and scale reveal */}
        <div className="relative overflow-hidden w-16 h-16 sm:w-20 sm:h-20 animate-in fade-in zoom-in-95 duration-700">
          <img
            src="/logo.png"
            alt="Frameless Hub"
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          />
          {/* Subtle light sweep */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent" />
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#A1A1AA] uppercase opacity-80 animate-in fade-in duration-1000">
          <span>FRAMELESS HUB</span>
        </div>
      </div>
    </div>
  );
}
