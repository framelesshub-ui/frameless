'use client';

import React from 'react';
import { CLIENTS } from '@/data/clients';

export default function TrustSection() {
  return (
    <section className="relative py-14 sm:py-18 overflow-hidden bg-[#04060A] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tagline */}
        <p className="text-center text-[11px] font-mono font-semibold tracking-[0.25em] text-[#94A3B8]/60 uppercase mb-8 sm:mb-10">
          TRUSTED BY AMBITIOUS BRANDS
        </p>

        {/* Client Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="group flex flex-col items-center justify-center py-2 px-3 cursor-default transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                {/* Clean Typographic Minimal Monogram Mark */}
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center justify-center text-xs font-mono font-bold text-white transition-all">
                  {client.symbol}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F5F7FA] font-sans group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[9px] font-mono text-[#94A3B8] tracking-wider uppercase group-hover:text-[#00F0FF] transition-colors">
                    {client.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
