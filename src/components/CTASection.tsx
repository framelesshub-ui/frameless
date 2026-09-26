'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-[#04060A]">
      {/* Subtle Moving Blue Gradient Behind the Section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] rounded-full radial-orb-cta animate-pulse-glow" />
      </div>

      <div className="absolute inset-0 bg-fine-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Small Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>COLLABORATION &amp; PARTNERSHIP</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-8">
          Have an idea?
          <br />
          <span className="text-[#00F0FF]">Let’s make it impossible to ignore.</span>
        </h2>

        {/* Supporting description */}
        <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you’re launching a new venture, scaling a YouTube channel to millions of views, or producing high-end commercial cinema, we’re ready.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold tracking-wider uppercase text-black bg-[#00F0FF] hover:bg-[#38BDF8] transition-all duration-300 shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Studio Location Note */}
        <p className="mt-8 text-xs font-mono text-[#94A3B8]/80">
          Frameless Hub • Chennai, India • Accepting Select Brand Engagements for 2026
        </p>

      </div>
    </section>
  );
}
