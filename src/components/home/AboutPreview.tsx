'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
              06 — About
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Small team.
              <br />
              Big ideas.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-8">
              Frameless Hub is a Premium Creative Agency based in Chennai. We bring strategy, branding, production and digital growth together under one team.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
            >
              <span>About Frameless Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: 3 Core Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 pt-4 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-12">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                399+
              </div>
              <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mt-1">
                Projects Delivered
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                10M+
              </div>
              <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mt-1">
                Views Generated
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                2026
              </div>
              <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mt-1">
                Founded • Chennai, India
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
