'use client';

import React, { useEffect, useState, useRef } from 'react';
import { HERO_STATS } from '@/data/stats';

interface CounterProps {
  target: number;
  suffix: string;
}

function SubtitleCounter({ target, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, target]);

  return (
    <span ref={elementRef} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="w-full pt-8 sm:pt-10 border-t border-white/[0.08]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {HERO_STATS.map((stat) => (
          <div
            key={stat.label}
            className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00F0FF]/30 transition-all duration-300 group"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-[#00F0FF] transition-colors tracking-tight">
              <SubtitleCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-[#F5F7FA]">
              {stat.label}
            </div>
            <div className="mt-1 text-[11px] text-[#94A3B8] leading-snug line-clamp-2">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
