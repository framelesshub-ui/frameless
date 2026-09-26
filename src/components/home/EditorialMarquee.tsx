'use client';

import React from 'react';

const MARQUEE_ITEMS = [
  'BRAND STRATEGY',
  'FILM & PRODUCTION',
  'DIGITAL GROWTH',
  'VISUAL IDENTITY',
  'CONTENT DIRECTION',
  'SOCIAL ACCELERATION',
  'WEB EXPERIENCES',
  'CHENNAI',
  'EST. 2026',
];

export default function EditorialMarquee() {
  return (
    <div
      aria-hidden="true"
      className="py-5 sm:py-6 border-y border-white/[0.08] bg-[#09090B] overflow-hidden select-none"
    >
      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Sequence 1 */}
        <div className="flex items-center gap-8 px-4 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#D4D4D8]">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`m1-${index}`}>
              <span>{item}</span>
              <span className="text-[#00F0FF] opacity-75">✦</span>
            </React.Fragment>
          ))}
        </div>

        {/* Sequence 2 (duplicate for seamless loop) */}
        <div className="flex items-center gap-8 px-4 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#D4D4D8]">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`m2-${index}`}>
              <span>{item}</span>
              <span className="text-[#00F0FF] opacity-75">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
