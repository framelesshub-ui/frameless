'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CinematicMoment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const expanderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (expanderRef.current) {
        gsap.fromTo(
          expanderRef.current,
          {
            width: '84vw',
            borderRadius: '32px',
          },
          {
            width: '100vw',
            borderRadius: '0px',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1.2,
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 30, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
              end: 'bottom 80%',
              scrub: 1,
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
      className="py-16 sm:py-24 bg-[#080808] flex items-center justify-center overflow-hidden border-y border-white/[0.08]"
    >
      <div
        ref={expanderRef}
        className="relative h-[65vh] min-h-[460px] max-h-[750px] overflow-hidden bg-[#0D0D0E] mx-auto will-change-[width,border-radius]"
        style={{ width: '84vw', borderRadius: '32px' }}
      >
        {/* Background Visual */}
        <img
          src="/media/generated/studio-interior-editorial.jpg"
          alt="Frameless Hub Creative Studio"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-105"
        />

        {/* Ambient Dark Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Centered Editorial Content */}
        <div
          ref={textRef}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-12 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#F4F4F5]">
              FRAMELESS HUB — CREATIVE DIRECTION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.98] mb-6">
            MADE TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4F4F5] to-[#A1A1AA]">
              STAND APART.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#D4D4D8] font-mono tracking-wider uppercase max-w-xl">
            Strategy ✦ Cinematic Craft ✦ Real-World Growth
          </p>

          <div className="mt-8 text-[11px] font-mono text-[#71717A] tracking-widest uppercase">
            CHENNAI, INDIA • EST. 2026
          </div>
        </div>
      </div>
    </section>
  );
}
