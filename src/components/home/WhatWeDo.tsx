'use client';

import React from 'react';
import { CAPABILITIES } from '@/data/capabilities';

export default function WhatWeDo() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] scroll-reveal">
      <div className="editorial-container">
        {/* Section Header: Heading on left, Intro text on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-16 border-b border-[var(--color-border)]">
          <div>
            <h2 className="section-h2 text-[var(--color-text)] font-heading">
              What we do.
            </h2>
          </div>
          <p className="body-lead text-base sm:text-lg text-[var(--color-muted)] max-w-lg leading-relaxed">
            Strategy, branding, cinematic film production, and digital growth — engineered around what your brand actually needs.
          </p>
        </div>

        {/* 4 Columns: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[var(--color-border)]">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className={`p-8 sm:p-10 transition-colors duration-400 hover:bg-gradient-to-b hover:from-[var(--color-service-hover-start)] hover:to-transparent flex flex-col justify-between ${
                idx !== 0 ? 'border-t md:border-t-0 border-[var(--color-border)]' : ''
              } ${
                idx % 2 !== 0 ? 'md:border-l md:border-[var(--color-border)]' : ''
              } ${
                idx !== 0 ? 'lg:border-l lg:border-[var(--color-border)]' : ''
              }`}
            >
              <div>
                {/* Column Title: No numbers, no icons */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-text)] mb-4">
                  {cap.title.charAt(0) + cap.title.slice(1).toLowerCase()}
                </h3>

                {/* Column Description */}
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
                  {cap.description}
                </p>
              </div>

              {/* Plain list of sub-services separated by hairlines */}
              <div className="border-t border-[var(--color-border)]">
                {cap.services.map((service) => (
                  <div
                    key={service}
                    className="py-3 border-b border-[var(--color-border)] text-xs font-medium text-[var(--color-text)] last:border-b-0"
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
