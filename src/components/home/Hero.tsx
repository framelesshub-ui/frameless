'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';
import { siteStats } from '@/data/stats';

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    const el = document.getElementById('contact');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    const el = document.getElementById('projects');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-40 md:pt-44 pb-12 sm:pb-16 text-black overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 65%, #eef3ff 100%)',
      }}
    >
      <div className="editorial-container relative z-10 my-auto w-full">
        <div className="max-w-4xl">
          {/* Eyebrow Studio Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#e6e8ee] mb-8 shadow-sm backdrop-blur-sm hero-subtext-reveal max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff] flex-shrink-0" />
            <span className="text-[10px] min-[400px]:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase text-[#5b6170] truncate">
              Premium Creative Agency — Chennai • EST. 2026
            </span>
          </div>

          {/* Monumental Headline: Line-by-line reveal */}
          <h1 className="hero-h1 text-black mb-7 font-heading">
            <span className="hero-line-wrap">
              <span className="hero-line-inner hero-line-1">
                Made to
              </span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line-inner hero-line-2">
                stand apart<span className="text-[#0047ff]">.</span>
              </span>
            </span>
          </h1>

          {/* Existing Subtext: Fades up at ~0.7s */}
          <div className="hero-subtext-reveal space-y-3 mb-10">
            <p className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
              Strategy. Storytelling. Design. Digital.
            </p>
            <p className="body-lead text-base sm:text-lg text-[#5b6170] max-w-2xl leading-relaxed">
              Branding, commercial film production and digital acceleration for brands that demand cultural presence.
            </p>
          </div>

          {/* Buttons: Fade up at ~0.85s */}
          <div className="hero-buttons-reveal flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="glass-btn-blue text-sm font-semibold py-3.5 px-7"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 ml-2 inline-block" />
            </a>

            <a
              href="#projects"
              onClick={scrollToProjects}
              className="glass-btn-light text-sm font-semibold py-3.5 px-7"
            >
              <span>See our work</span>
            </a>
          </div>
        </div>
      </div>

      {/* Thin divider & Three Stats: Fade up at ~1.0s */}
      <div className="editorial-container relative z-10 w-full pt-8 border-t border-[#e6e8ee] hero-stats-reveal">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-black tracking-tight">
              <AnimatedCounter value={399} suffix="+" displayValue="399+" />
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#5b6170] mt-1.5">
              Projects delivered
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-black tracking-tight">
              <AnimatedCounter value={10} suffix="M+" displayValue="10M+" />
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#5b6170] mt-1.5">
              Views generated
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-black tracking-tight">
              <span>2026</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#5b6170] mt-1.5">
              Founded in Chennai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
