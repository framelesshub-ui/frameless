'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';
import { siteStats } from '@/data/stats';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        {/* Main Grid: Left Copy, Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
                Premium Creative Agency - Chennai
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              We make brands
              <br />
              hard to forget<span className="text-[#00F0FF]">.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-9">
              Branding, content and digital campaigns for brands that want to stand out.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-transparent border border-white/20 hover:border-white transition-colors duration-200"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right Column: One Strong Portfolio Video / Cinematic Showreel */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/assets/frameless-hero-poster.jpg"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              >
                <source src="/assets/frameless-hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] font-mono text-[#D4D4D8]">
                <span className="uppercase tracking-widest text-[#00F0FF]">FRAMELESS SHOWREEL</span>
                <span className="text-[#71717A]">CHENNAI, IN</span>
              </div>
            </div>
          </div>

        </div>

        {/* Under Hero: 399+ Projects • 10M+ Views • EST. 2026 */}
        <div className="pt-10 border-t border-white/[0.08]">
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
