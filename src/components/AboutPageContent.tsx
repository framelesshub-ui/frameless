'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { siteStats } from '@/data/stats';

export default function AboutPageContent() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Hero */}
        <div className="mb-16 sm:mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-muted)]">
              About Frameless Hub
            </span>
          </div>
          <h1 className="hero-h1 text-[var(--color-text)] font-heading mb-6">
            Made to stand apart<span className="text-[#0047ff]">.</span>
          </h1>
          <p className="body-lead text-lg sm:text-2xl text-[var(--color-muted)] leading-relaxed font-normal">
            We believe better creative starts with better thinking. Frameless Hub brings together ideas, craft, and execution to create work that is clear, purposeful, and memorable.
          </p>
        </div>

        {/* 3 Core Stats */}
        <div className="py-12 border-t border-b border-[var(--color-border)] mb-20 sm:mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {siteStats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="sr-only">
                  {stat.displayValue} {stat.label}
                </span>
                <div
                  aria-hidden="true"
                  className="text-3xl sm:text-5xl font-bold font-heading text-[var(--color-text)] tracking-tight"
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
                <div aria-hidden="true" className="text-xs sm:text-sm text-[var(--color-muted)] mt-2 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT WE BELIEVE */}
        <div className="mb-24 sm:mb-32">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-muted)] mb-8">
            What We Believe
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            <div>
              <div className="text-xs font-mono text-[#0047ff] uppercase tracking-widest mb-3 font-semibold">
                01
              </div>
              <h2 className="text-2xl font-bold font-heading text-[var(--color-text)] mb-2">Think clearly.</h2>
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                Clarity comes before creativity.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-[#0047ff] uppercase tracking-widest mb-3 font-semibold">
                02
              </div>
              <h2 className="text-2xl font-bold font-heading text-[var(--color-text)] mb-2">Create with purpose.</h2>
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                Every piece of work should have a reason behind it.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-[#0047ff] uppercase tracking-widest mb-3 font-semibold">
                03
              </div>
              <h2 className="text-2xl font-bold font-heading text-[var(--color-text)] mb-2">Measure what matters.</h2>
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                We care about the impact the work creates, not just how it looks.
              </p>
            </div>
          </div>
        </div>

        {/* BEHIND THE WORK: Black rounded block for studio identity */}
        <div className="about-black-block p-8 sm:p-14 lg:p-16 mb-24 sm:mb-32">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#71717A] mb-4">
            Behind the Work
          </div>
          <p className="font-heading text-xl sm:text-2xl text-white font-medium leading-relaxed max-w-3xl mb-12">
            The ideas, shoots, edits, campaigns, and details all come from real people working closely together.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-white/15">
            {/* Leadership Profile */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 mb-6 flex items-center justify-center text-lg font-bold text-white font-mono">
                RB
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-1">Rithik B</h3>
              <div className="text-xs font-mono text-[#0047ff] uppercase tracking-wider mb-6 font-semibold">
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
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-[#A1A1AA]">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                About Frameless Hub
              </h3>
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                Frameless Hub is a premium creative media and branding studio built for brands that want to stand apart.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                We bring together strategy, storytelling, design, and digital execution to create work that is not only visually compelling, but built with purpose.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                From brand identity and content creation to social media, digital experiences, and performance campaigns, we help businesses turn ideas into distinctive brands and meaningful digital presence.
              </p>
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed pt-4 border-t border-white/15">
                We don’t just create content. We build how your brand is seen, remembered, and experienced.
              </p>
            </div>
          </div>
        </div>

        {/* HAVE A PROJECT IN MIND? */}
        <div className="pt-16 border-t border-[var(--color-border)] text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-muted)] mb-4">
            Have a project in mind?
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-[var(--color-text)] mb-4">
            Got an idea?
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--color-muted)] mb-8 font-medium">
            Let’s make it hard to ignore.
          </p>
          <Link
            href="/contact"
            className="glass-btn-blue text-xs font-semibold py-3.5 px-8"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 ml-2 inline-block" />
          </Link>
        </div>

      </div>
    </div>
  );
}
