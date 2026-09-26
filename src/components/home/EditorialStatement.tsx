'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STATEMENT_WORDS = [
  'Great', 'brands', 'are', 'never', 'built', 'on', 'noise', 'or', 'disposable', 'templates.',
  'We', 'merge', 'uncompromising', 'strategic', 'clarity', 'with', 'cinematic', 'execution', '—',
  'crafting', 'visual', 'identities,', 'original', 'film', 'campaigns,', 'and', 'digital', 'systems',
  'that', 'command', 'immediate', 'attention', 'and', 'stay', 'in', 'mind.'
];

export default function EditorialStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (wordsRef.current.length > 0) {
        gsap.fromTo(
          wordsRef.current,
          { opacity: 0.15, color: '#52525B' },
          {
            opacity: 1,
            color: '#FFFFFF',
            stagger: 0.04,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 45%',
              scrub: 0.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-28 sm:py-40 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF]">
              02 / The Philosophy
            </span>
            <span className="w-12 h-[1px] bg-white/20" />
          </div>

          {/* Large Editorial Reveal Statement */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.25] text-white">
            {STATEMENT_WORDS.map((word, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) wordsRef.current[i] = el;
                }}
                className="inline-block mr-[0.28em] transition-colors duration-150 will-change-opacity"
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Understatement */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/[0.08] text-xs font-mono text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span className="uppercase tracking-widest">FRAMELESS HUB METHODOLOGY</span>
            </div>
            <div className="uppercase tracking-widest text-[#71717A]">
              CHENNAI ✦ ZERO COMPROMISE ✦ HIGH IMPACT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
