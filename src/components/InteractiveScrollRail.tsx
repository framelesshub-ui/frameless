'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

interface SectionTarget {
  id: string;
  num: string;
  label: string;
  shortLabel: string;
}

const SECTIONS: SectionTarget[] = [
  { id: 'hero', num: '01', label: 'Studio Reel & Entrance', shortLabel: 'Hero' },
  { id: 'philosophy', num: '02', label: 'The Philosophy', shortLabel: 'Philosophy' },
  { id: 'projects', num: '03', label: 'Featured Work Showcase', shortLabel: 'Work' },
  { id: 'process', num: '04', label: 'The Creative Process', shortLabel: 'Process' },
  { id: 'services', num: '05', label: 'Disciplines & Capabilities', shortLabel: 'Disciplines' },
  { id: 'contact', num: '06', label: 'Get in Touch', shortLabel: 'Contact' },
];

export default function InteractiveScrollRail() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const updateScrollMetrics = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const totalScroll =
        (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      const progress = totalScroll > 0 ? Math.min(1, Math.max(0, scrollY / totalScroll)) : 0;

      setScrollProgress(progress);
      setShowScrollTop(progress > 0.12);

      // Determine active section based on scroll offset
      const viewportMid = window.innerHeight * 0.45;
      let currentActive = SECTIONS[0].id;

      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom > 0) {
            currentActive = sec.id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        updateScrollMetrics();
        rafRef.current = null;
      });
    };

    updateScrollMetrics();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isMounted) return null;

  return (
    <>
      {/* ── 1. Top Horizon Razor Scroll Progress Bar (Universal Mobile & Desktop) ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[65] h-[2px] bg-white/[0.04] pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#0047ff] via-[#00F0FF] to-[#38bdf8] transition-all duration-150 ease-out relative"
          style={{ width: `${scrollProgress * 100}%` }}
        >
          {/* Glowing Head Spark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00F0FF] blur-[3px] opacity-80" />
        </div>
      </div>

      {/* ── 2. Desktop Floating Interactive Navigation HUD Rail ── */}
      <nav
        aria-label="Section Scroll Progress"
        className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3.5 py-4 px-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] select-none animate-in fade-in duration-500"
      >
        {/* Live Scroll Percentage Gauge */}
        <div className="flex flex-col items-center gap-1.5 pb-2 border-b border-white/[0.08]">
          <span className="font-mono text-[9px] font-bold text-[#0047ff] tracking-tight">
            {Math.round(scrollProgress * 100)}%
          </span>
          <div className="w-[2px] h-7 bg-white/10 rounded-full overflow-hidden">
            <div
              className="w-full bg-[#0047ff] rounded-full transition-all duration-150 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* 6 Sequential Section Interactive Target Dots */}
        <div className="flex flex-col items-center gap-2.5 my-1">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            const isHovered = hoveredSection === sec.id;

            return (
              <div
                key={sec.id}
                className="relative flex items-center justify-center group"
                onMouseEnter={() => setHoveredSection(sec.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Interactive Node Button */}
                <button
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  aria-label={`Scroll to ${sec.label}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff] ${
                    isActive
                      ? 'w-3 h-6 bg-[#0047ff] shadow-[0_0_16px_rgba(0,71,255,0.8)] border border-white/40'
                      : 'w-2 h-2 bg-white/25 hover:bg-white/70 hover:scale-125'
                  }`}
                >
                  {/* Subtle pulsing ping for active node */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-[#0047ff] animate-ping opacity-30" />
                  )}
                </button>

                {/* Floating Tooltip to the Left on Hover */}
                {isHovered && (
                  <div
                    role="tooltip"
                    className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md shadow-2xl flex items-center gap-2 pointer-events-none animate-in fade-in slide-in-from-right-2 duration-200 z-50"
                  >
                    <span className="text-[10px] font-mono text-[#0047ff] font-bold">
                      {sec.num}
                    </span>
                    <span className="text-xs font-heading font-semibold text-white tracking-tight">
                      {sec.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fast "Back to Top" Trigger Button (Fades in when scrolled) */}
        <div className="pt-2 border-t border-white/[0.08]">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className={`w-7 h-7 rounded-full border flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer ${
              showScrollTop
                ? 'opacity-100 scale-100 bg-white/[0.06] hover:bg-[#0047ff] border-white/10 hover:border-[#0047ff]'
                : 'opacity-0 scale-75 pointer-events-none'
            }`}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>
    </>
  );
}
