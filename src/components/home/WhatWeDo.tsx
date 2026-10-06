'use client';

import React from 'react';
import { CAPABILITIES } from '@/data/capabilities';

export default function WhatWeDo() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white text-black border-t border-[#e6e8ee] scroll-reveal">
      <div className="editorial-container">
        {/* Section Header: Heading on left, Intro text on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-16 border-b border-[#e6e8ee]">
          <div>
            <h2 className="section-h2 text-black font-heading">
              What we do.
            </h2>
          </div>
          <p className="body-lead text-base sm:text-lg text-[#5b6170] max-w-lg leading-relaxed">
            Strategy, branding, cinematic film production, and digital growth — engineered around what your brand actually needs.
          </p>
        </div>

        {/* 4 Columns: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#e6e8ee]">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className={`p-8 sm:p-10 transition-colors duration-400 hover:bg-gradient-to-b hover:from-[#0047ff]/[0.04] hover:to-white flex flex-col justify-between ${
                idx !== 0 ? 'border-t md:border-t-0 border-[#e6e8ee]' : ''
              } ${
                idx % 2 !== 0 ? 'md:border-l md:border-[#e6e8ee]' : ''
              } ${
                idx !== 0 ? 'lg:border-l lg:border-[#e6e8ee]' : ''
              }`}
            >
              <div>
                {/* Column Title: No numbers, no icons */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-black mb-4">
                  {cap.title.charAt(0) + cap.title.slice(1).toLowerCase()}
                </h3>

                {/* Column Description */}
                <p className="text-sm text-[#5b6170] leading-relaxed mb-8">
                  {cap.description}
                </p>
              </div>

              {/* Plain list of sub-services separated by hairlines */}
              <div className="border-t border-[#e6e8ee]">
                {cap.services.map((service) => (
                  <div
                    key={service}
                    className="py-3 border-b border-[#e6e8ee] text-xs font-medium text-black last:border-b-0"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
