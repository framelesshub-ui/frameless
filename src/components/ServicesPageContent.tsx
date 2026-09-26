'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES } from '@/data/capabilities';

export default function ServicesPageContent() {
  return (
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="editorial-container">
        
        {/* Page Hero */}
        <div className="mb-20 sm:mb-28 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
              Capabilities
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            What we do.
          </h1>
          <p className="text-lg sm:text-2xl text-[#A1A1AA] leading-relaxed font-normal">
            Strategy, branding, production and digital growth — built around what your brand actually needs.
          </p>
        </div>

        {/* 4 Clean Capability Sections with Real Work Visuals */}
        <div className="space-y-24 sm:space-y-36">
          {CAPABILITIES.map((cap, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={cap.id}
                id={cap.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-12 border-t border-white/[0.08]"
              >
                {/* Visual Side */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#141416] border border-white/[0.08]">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
                    {cap.number}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                    {cap.title}
                  </h2>
                  <p className="text-base text-[#A1A1AA] leading-relaxed mb-8">
                    {cap.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/[0.08] mb-8">
                    {cap.services.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link
                      href={`/contact?service=${encodeURIComponent(cap.title)}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors"
                    >
                      <span>Discuss {cap.title.toLowerCase()}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 pt-20 border-t border-white/[0.08] text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1AA] mb-3">
            Looking for something specific?
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Let’s talk about your project.
          </h3>
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
