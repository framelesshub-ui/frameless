'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, CheckCircle2 } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '@/data/stats';

const PILLARS = [
  'Strategy',
  'Creative',
  'Branding',
  'Content',
  'Production',
  'Marketing',
  'Performance',
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A]">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0284C7]/08 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-fine-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
              <span>OUR PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-6">
              Independent by design.
              <br />
              <span className="text-[#00F0FF]">Built for ambitious brands.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-6 font-normal">
              Most agencies fragment your brand across disconnected silos: one agency for strategy, another for video production, a freelancer for branding, and an ad team struggling to connect the dots.
            </p>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              Frameless Hub unites <strong className="text-white font-semibold">Strategy, Creative, Branding, Content, Production, Marketing, and Performance</strong> under one unified creative studio. No friction. No lost intent. Just cohesive, high-retention brand worlds engineered to stand out and endure.
            </p>

            {/* Disciplines Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-white hover:text-[#00F0FF] transition-colors"
            >
              <span>Read Studio Manifesto &amp; Origins</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Editorial Studio Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0D111A]">
                <img
                  src="/media/generated/studio-interior-editorial.jpg"
                  alt="Frameless Hub Studio Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#080C14]/85 backdrop-blur-md border border-white/10">
                  <div className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-1">
                    FRAMELESS HUB HQ
                  </div>
                  <div className="text-sm font-bold text-white">
                    Chennai, India • EST. 2026
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">
                    Producing cinema, identities, and media IP for modern market leaders.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Highlights Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.07] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {ABOUT_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono mb-1 text-[#00F0FF]">
                {item.value}
              </div>
              <div className="text-xs font-mono text-[#94A3B8] tracking-wider uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
