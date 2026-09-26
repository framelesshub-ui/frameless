'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { siteStats } from '@/data/stats';

export default function AboutPageContent() {
  return (
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Hero */}
        <div className="mb-16 sm:mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
              About Frameless Hub
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Made to stand apart
          </h1>
          <p className="text-lg sm:text-2xl text-[#A1A1AA] leading-relaxed font-normal">
            We believe better creative starts with better thinking. Frameless Hub brings together ideas, craft, and execution to create work that is clear, purposeful, and memorable.
          </p>
        </div>

        {/* 3 Core Stats (Crawler visible + animated) */}
        <div className="py-12 border-t border-b border-white/[0.08] mb-20 sm:mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {siteStats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="sr-only">
                  {stat.displayValue} {stat.label}
                </span>
                <div
                  aria-hidden="true"
                  className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-mono"
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
                <div aria-hidden="true" className="text-xs sm:text-sm text-[#A1A1AA] mt-2 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT WE BELIEVE */}
        <div className="mb-24 sm:mb-32">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#71717A] mb-8">
            What We Believe
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            <div>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
                01
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Think clearly.</h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Clarity comes before creativity.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
                02
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Create with purpose.</h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Every piece of work should have a reason behind it.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
                03
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Measure what matters.</h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                We care about the impact the work creates, not just how it looks.
              </p>
            </div>
          </div>
        </div>

        {/* BEHIND THE WORK */}
        <div className="pt-16 border-t border-white/[0.08] mb-24 sm:mb-32">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#71717A] mb-4">
            Behind the Work
          </div>
          <p className="text-xl sm:text-2xl text-white font-normal leading-relaxed max-w-3xl mb-12">
            The ideas, shoots, edits, campaigns, and details all come from real people working closely together.
          </p>

          {/* Real studio photography */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.08] mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <img
              src="/media/generated/studio-interior-editorial.jpg"
              alt="Frameless Hub Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
              Frameless Hub Creative Studio — Chennai
            </div>
          </div>

          {/* Rithik B & About Frameless Hub */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Leadership Profile */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
              <div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/10 mb-6 flex items-center justify-center text-xl font-bold text-white font-mono">
                RB
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Rithik B</h3>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider mb-6">
                Founder &amp; Managing Director
              </div>
              <div className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
                <p>
                  Rithik B is the founder of Frameless Hub, a premium creative media and branding studio built at the intersection of storytelling, design, and strategy.
                </p>
                <p>
                  What began with a passion for visual storytelling evolved into a studio helping brands communicate with greater clarity, character, and impact.
                </p>
                <p>
                  Today, Rithik leads Frameless Hub with a focus on creative excellence, strategic thinking, and building work that moves brands forward.
                </p>
              </div>
            </div>

            {/* About Frameless Hub Manifest */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                About Frameless Hub
              </h3>
              <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed">
                Frameless Hub is a premium creative media and branding studio built for brands that want to stand apart.
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                We bring together strategy, storytelling, design, and digital execution to create work that is not only visually compelling, but built with purpose.
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                From brand identity and content creation to social media, digital experiences, and performance campaigns, we help businesses turn ideas into distinctive brands and meaningful digital presence.
              </p>
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed pt-4 border-t border-white/[0.08]">
                We don’t just create content. We build how your brand is seen, remembered, and experienced.
              </p>
            </div>

          </div>
        </div>

        {/* HAVE A PROJECT IN MIND? */}
        <div className="pt-20 border-t border-white/[0.08] text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#71717A] mb-4">
            Have a project in mind?
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Got an idea?
          </h2>
          <p className="text-xl sm:text-2xl text-[#A1A1AA] mb-10">
            Let’s make it hard to ignore.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
