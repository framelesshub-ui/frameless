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

        {/* 4 Clean Editorial Capability Sections (Pure Typography) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              id={cap.id}
              className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block">
                  {cap.number} / 04
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  {cap.title}
                </h2>
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Scope Deliverables & Action */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div className="space-y-3">
                  {cap.services.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
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
          ))}
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
