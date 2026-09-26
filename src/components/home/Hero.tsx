'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';
import { siteStats } from '@/data/stats';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#080808] text-[#F4F4F5]">
      <div className="editorial-container">
        {/* Top Grid: Headline + Studio Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-24">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
                Premium Creative Agency — Chennai
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              We make brands
              <br />
              hard to forget.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-9">
              Branding, content and digital campaigns for brands that want to stand out.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-transparent border border-white/20 hover:border-white transition-colors duration-200"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Typographic Studio Overview */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white">
                    FH
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-white uppercase block">
                      FRAMELESS HUB
                    </span>
                    <span className="text-[10px] font-mono text-[#A1A1AA] uppercase">
                      Chennai, India • EST. 2026
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#00F0FF]">
                  STUDIO
                </span>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                  Core Disciplines
                </div>
                <div className="divide-y divide-white/[0.06] text-sm font-medium text-white">
                  <div className="py-2.5 flex items-center justify-between">
                    <span>Brand Strategy &amp; Identity</span>
                    <span className="text-xs font-mono text-[#71717A]">01</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span>Editorial &amp; Film Production</span>
                    <span className="text-xs font-mono text-[#71717A]">02</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span>Digital Distribution &amp; Growth</span>
                    <span className="text-xs font-mono text-[#71717A]">03</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  We bring together strategy, craft, and execution to create work that is clear, purposeful, and memorable.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Under Hero: 399+ Projects • 10M+ Views • EST. 2026 */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
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
                <div aria-hidden="true" className="text-xs sm:text-sm font-medium text-[#A1A1AA] mt-1">
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
