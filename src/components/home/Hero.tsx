'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';
import { siteStats } from '@/data/stats';
import Magnetic from '../Magnetic';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 bg-transparent text-[#F4F4F5] overflow-hidden border-b border-white/[0.08]">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00F0FF]/10 via-[#00F0FF]/0 to-transparent blur-[140px] opacity-70"
      />

      <div className="editorial-container relative z-10">
        {/* Main Grid: Left Copy, Right Architectural Studio Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Studio Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 w-fit backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-[#A1A1AA]">
                Premium Creative Agency — Chennai • EST. 2026
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.03] mb-8">
              We make brands
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4F4F5] to-[#A1A1AA]">
                hard to forget
              </span>
              <span className="text-[#00F0FF]">.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-10">
              Branding, content and digital campaigns for brands that want to stand out.
            </p>

            {/* Magnetic CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic strength={7}>
                <Link
                  href="/work"
                  data-cursor="VIEW"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]"
                >
                  <span>View Our Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic strength={5}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/[0.04] border border-white/20 hover:border-white hover:bg-white/[0.08] transition-all duration-300"
                >
                  Start a Project
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Right Column: Architectural Studio Identity Frame (Uses official /logo.png) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0F0F10] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between space-y-8 relative overflow-hidden group">
              {/* Subtle ambient light sweep */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Brand Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 p-2 flex items-center justify-center shadow-inner">
                    <img
                      src="/logo.png"
                      alt="Frameless Hub Official Logo"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-mono font-bold tracking-widest text-white uppercase block">
                      FRAMELESS HUB
                    </span>
                    <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                      Chennai, India • EST. 2026
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#00F0FF]">
                  STUDIO
                </span>
              </div>

              {/* Core Disciplines Index */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest">
                  Core Disciplines
                </div>
                <div className="divide-y divide-white/[0.06] text-sm font-medium text-white">
                  <div className="py-2.5 flex items-center justify-between">
                    <span>Brand Strategy &amp; Identity</span>
                    <span className="text-xs font-mono text-[#71717A]">01</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span>Commercial Film &amp; Production</span>
                    <span className="text-xs font-mono text-[#71717A]">02</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span>Digital Distribution &amp; Growth</span>
                    <span className="text-xs font-mono text-[#71717A]">03</span>
                  </div>
                </div>
              </div>

              {/* Studio Proof Points */}
              <div className="pt-6 border-t border-white/[0.08] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[#A1A1AA]">
                  <span>Delivered Works</span>
                  <span className="text-[#00F0FF] font-semibold">399+ Projects</span>
                </div>
                <div className="flex items-center justify-between text-[#A1A1AA]">
                  <span>Verified Reach</span>
                  <span className="text-[#00F0FF] font-semibold">10M+ Views</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Under Hero: 399+ Projects • 10M+ Views • EST. 2026 */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {siteStats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
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
                <div aria-hidden="true" className="text-xs sm:text-sm font-medium text-[#A1A1AA] mt-1.5 font-mono">
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
