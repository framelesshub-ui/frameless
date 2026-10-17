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
          { opacity: 0.18 },
          {
            opacity: 1,
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
      className="py-24 sm:py-36 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] relative overflow-hidden"
    >
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff] font-semibold">
              02 / The Philosophy
            </span>
            <span className="w-12 h-[1px] bg-[var(--color-border)]" />
          </div>

          {/* Large Editorial Reveal Statement with Preserved Native Whitespace */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.28] text-[var(--color-text)]">
            {STATEMENT_WORDS.map((word, i) => (
              <React.Fragment key={i}>
                <span
                  ref={(el) => {
                    if (el) wordsRef.current[i] = el;
                  }}
                  className="inline-block mr-[0.28em] transition-opacity duration-150 will-change-opacity select-text"
                >
                  {word}
                </span>{' '}
              </React.Fragment>
            ))}
          </h2>

          {/* Understatement */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[var(--color-border)] text-xs font-mono text-[var(--color-muted)]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
              <span className="uppercase tracking-widest">FRAMELESS HUB METHODOLOGY</span>
            </div>
            <div className="uppercase tracking-widest text-[var(--color-muted)]">
              CHENNAI ✦ ZERO COMPROMISE ✦ HIGH IMPACT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
