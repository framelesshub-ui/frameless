'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES } from '@/data/capabilities';

export default function WhatWeDo() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
              03 — Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              What we do.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            Strategy, branding, production and digital growth — built around what your brand actually needs.
          </p>
        </div>

        {/* 4 Capabilities List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="text-xs font-mono text-[#00F0FF] tracking-widest uppercase">
                  {cap.number} / 04
                </span>
              </div>

              {/* Title & Short Description */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Services List */}
              <div className="lg:col-span-4 flex flex-wrap gap-2">
                {cap.services.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono text-[#E4E4E7] bg-white/[0.04] border border-white/[0.08]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="lg:col-span-2 flex lg:justify-end items-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#A1A1AA] group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
          <span className="text-sm text-[#A1A1AA]">
            Looking for something specific?
          </span>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors"
          >
            <span>Explore All Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
