'use client';

import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { siteStats } from '@/data/stats';

export default function Stats() {
  return (
    <div className="w-full pt-8 sm:pt-10 border-t border-white/[0.08]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {siteStats.map((stat) => (
          <div
            key={stat.id}
            className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00F0FF]/30 transition-all duration-300 group flex flex-col justify-between"
          >
            {/* Screen reader & crawler accessible semantic statement */}
            <span className="sr-only">
              {stat.displayValue} {stat.label}
            </span>

            {/* Visual counter representation */}
            <div
              aria-hidden="true"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-[#00F0FF] transition-colors tracking-tight font-mono"
            >
              {stat.isNumeric ? (
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  displayValue={stat.displayValue}
                  aria-hidden="true"
                />
              ) : (
                <span aria-hidden="true">{stat.displayValue}</span>
              )}
            </div>

            <div aria-hidden="true" className="mt-1 text-xs sm:text-sm font-semibold text-[#F5F7FA]">
              {stat.label}
            </div>

            <div aria-hidden="true" className="mt-1 text-[11px] text-[#94A3B8] leading-snug line-clamp-2">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
