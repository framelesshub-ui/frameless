'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/process';

export default function ProcessSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A] border-t border-white/[0.06]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00F0FF]/04 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            The 5-Step Framework
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            From raw strategic discovery to compounding multi-channel ROAS.
          </p>
        </div>

        {/* Process Timeline Container */}
        <div className="relative">
          
          {/* Subtle connecting line (Desktop horizontal line) */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent z-0" />

          {/* 5 Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="group flex flex-col p-6 rounded-3xl glass-card transition-all duration-300 hover:-translate-y-2 hover:border-[#00F0FF]/40"
              >
                {/* Step Circle Marker */}
                <div className="w-12 h-12 rounded-2xl bg-[#080C14] border border-white/[0.12] group-hover:border-[#00F0FF] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center text-sm font-mono font-bold text-white group-hover:text-[#00F0FF] transition-all duration-300 mb-6 shrink-0">
                  {step.step}
                </div>

                {/* Step Name */}
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00F0FF] mb-1">
                  {step.name}
                </div>

                {/* Step Headline */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                  {step.headline}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 flex-1">
                  {step.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-[#94A3B8]/60 uppercase tracking-widest">
                    Outputs
                  </span>
                  {step.deliverables.slice(0, 2).map((deliv) => (
                    <span key={deliv} className="text-[11px] font-mono text-white/80 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#00F0FF]" />
                      <span>{deliv}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
