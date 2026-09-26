'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="py-24 sm:py-36 bg-[#09090B] text-[#F4F4F5] border-t border-white/[0.08]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual / Monogram Badge */}
          <div className="lg:col-span-5">
            <div className="relative p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] overflow-hidden">
              {/* Subtle radial accent */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-8">
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>FOUNDER’S DIRECTIVE</span>
                </span>
                <span className="text-xs font-mono text-[#71717A]">
                  EST. 2026
                </span>
              </div>

              {/* Founder Details */}
              <div className="space-y-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono font-bold text-xl text-white">
                  RB
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Rithik B
                  </h3>
                  <p className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              {/* Studio Proof Points */}
              <div className="space-y-3 pt-6 border-t border-white/[0.08] text-xs font-mono text-[#D4D4D8]">
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#A1A1AA]">Studio Base</span>
                  <span className="text-white font-semibold">Chennai, India</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#A1A1AA]">Delivered Works</span>
                  <span className="text-[#00F0FF] font-semibold">399+ Projects</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#A1A1AA]">Verified Organic Reach</span>
                  <span className="text-[#00F0FF] font-semibold">10M+ Views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Ethos */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>06 / Leadership &amp; Vision</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
              Built on craft.
              <br />
              Driven by standard.
            </h2>

            <blockquote className="text-base sm:text-xl text-[#D4D4D8] font-normal leading-relaxed mb-8 border-l-2 border-[#00F0FF] pl-6 my-2 italic">
              “We built Frameless Hub with a single standard: every project we deliver must elevate the brand and perform in the real world. We combine strategic clarity with cinematic execution to give our partners a distinct, enduring advantage.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-8">
              Under Rithik B’s creative direction, Frameless Hub operates as an agile, multidisciplinary studio partnering with ambitious brands across automotive, wellness, food, cinema, and modern technology.
            </p>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors group"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
