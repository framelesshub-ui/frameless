'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from '../AnimatedCounter';
import { siteStats } from '@/data/stats';
import Magnetic from '../Magnetic';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Intro line mask reveal timeline
      const tl = gsap.timeline({ delay: 0.2 });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
      }

      if (headlineLine1Ref.current && headlineLine2Ref.current) {
        tl.fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { y: '115%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1.1,
            stagger: 0.14,
            ease: 'power4.out',
          },
          '-=0.5'
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.7'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        );
      }

      // Hero media scroll expansion: expands width from 80vw to 96vw on scroll
      if (mediaContainerRef.current) {
        gsap.fromTo(
          mediaContainerRef.current,
          { scale: 0.94, borderRadius: '28px' },
          {
            scale: 1,
            borderRadius: '16px',
            scrollTrigger: {
              trigger: mediaContainerRef.current,
              start: 'top 85%',
              end: 'top 20%',
              scrub: 1.2,
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
      className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 bg-[#080808] text-[#F4F4F5] overflow-hidden"
    >
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#00F0FF]/10 via-[#00F0FF]/0 to-transparent blur-[120px] opacity-60"
      />

      <div className="editorial-container relative z-10">
        {/* Top Header Block */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center mb-16 sm:mb-20">
          
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-[#A1A1AA]">
              Creative Studio — Chennai, India • EST. 2026
            </span>
          </div>

          {/* Masked Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.04] mb-8">
            <span className="block overflow-hidden pb-1">
              <span ref={headlineLine1Ref} className="inline-block will-change-transform">
                We make brands
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span ref={headlineLine2Ref} className="inline-block text-white will-change-transform">
                hard to forget<span className="text-[#00F0FF]">.</span>
              </span>
            </span>
          </h1>

          {/* Supporting Manifesto */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-normal leading-relaxed mb-10 text-center"
          >
            Brand identity, cinematic film production, and high-impact digital campaigns for ventures that refuse to blend into the background.
          </p>

          {/* Magnetic CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={7}>
              <Link
                href="/work"
                data-cursor="VIEW"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>

            <Magnetic strength={5}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/[0.04] border border-white/20 hover:border-white hover:bg-white/[0.08] transition-all duration-300"
              >
                Start a Project
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Cinematic Scroll-Expanding Showcase Frame */}
        <div className="w-full max-w-6xl mx-auto mb-16 sm:mb-20">
          <div
            ref={mediaContainerRef}
            className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0F0F10] shadow-[0_20px_80px_rgba(0,0,0,0.8)] will-change-transform"
          >
            {/* Video or High-res Poster */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/frameless-hero-poster.jpg"
              className="w-full h-full object-cover scale-105"
            >
              <source src="/assets/frameless-hero.mp4" type="video/mp4" />
            </video>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

            {/* Bottom In-Frame Metadata */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase block mb-1">
                  STUDIO SHOWREEL
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                  FRAMELESS HUB — CREATIVE EDITORIAL 2026
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#A1A1AA] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                <span>PLAYING LIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Crawler-Visible Stats Row */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {siteStats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                {/* Crawler visible fallback */}
                <span className="sr-only">
                  {stat.displayValue} {stat.label}
                </span>
                <div
                  aria-hidden="true"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-mono"
                >
                  {stat.isNumeric ? (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      displayValue={stat.displayValue}
                      aria-hidden="true"
                    />
                  ) : (
                    <span>{stat.displayValue}</span>
                  )}
                </div>
                <div aria-hidden="true" className="text-xs sm:text-sm font-medium text-[#A1A1AA] mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
