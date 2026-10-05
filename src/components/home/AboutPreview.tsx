'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-24 sm:py-36 bg-transparent text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Copy & Founder Quote */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>07 / Studio Ethos</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
              Small team.
              <br />
              Big ideas.
            </h2>
            
            <p className="text-base sm:text-lg text-[#D4D4D8] max-w-xl font-normal leading-relaxed mb-6">
              Frameless Hub is a Premium Creative Agency based in Chennai. We bring strategy, branding, production and digital growth together under one team.
            </p>

            <blockquote className="border-l-2 border-[#00F0FF] pl-6 my-8 text-sm sm:text-base text-[#A1A1AA] italic leading-relaxed max-w-xl">
              “Every project at Frameless Hub is guided by a relentless focus on high-impact storytelling, technical excellence, and measurable real-world performance.”
              <span className="block mt-2 text-xs font-mono not-italic uppercase tracking-wider text-white">
                — Rithik B, Founder &amp; Managing Director
              </span>
            </blockquote>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
            >
              <span>About Frameless Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: 3 Core Proof Cards */}
          <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
              <div className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">
                399+
              </div>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider mt-1.5">
                Projects Delivered
              </div>
              <p className="text-xs text-[#71717A] mt-2">
                Delivered across branding, video production, and digital campaigns.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
              <div className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">
                10M+
              </div>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider mt-1.5">
                Views Generated
              </div>
              <p className="text-xs text-[#71717A] mt-2">
                Organic, verified audience reach across YouTube and digital platforms.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
              <div className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">
                2026
              </div>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider mt-1.5">
                Founded • Chennai, India
              </div>
              <p className="text-xs text-[#71717A] mt-2">
                Independent studio operating with zero corporate bloat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
