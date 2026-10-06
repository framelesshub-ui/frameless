'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES } from '@/data/capabilities';

export default function ServicesPageContent() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Page Hero */}
        <div className="mb-20 sm:mb-28 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-muted)]">
              Capabilities
            </span>
          </div>
          <h1 className="hero-h1 text-[var(--color-text)] font-heading mb-6">
            What we do<span className="text-[#0047ff]">.</span>
          </h1>
          <p className="body-lead text-lg sm:text-2xl text-[var(--color-muted)] leading-relaxed font-normal">
            Strategy, branding, production and digital growth — built around what your brand actually needs.
          </p>
        </div>

        {/* Four Clean Sections */}
        <div className="space-y-10 sm:space-y-12">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              className="p-8 sm:p-12 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[#0047ff] transition-colors duration-300 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-2">
                  <span className="text-xs font-mono text-[#0047ff] uppercase tracking-widest block font-semibold">
                    {cap.number} / 04
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--color-text)] mb-4">
                    {cap.title.charAt(0) + cap.title.slice(1).toLowerCase()}
                  </h2>
                  <p className="text-base text-[var(--color-muted)] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-2.5">
                    {cap.services.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-[var(--color-text)] font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link
                      href={`/contact?service=${encodeURIComponent(cap.title)}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--color-text)] hover:text-[#0047ff] transition-colors"
                    >
                      <span>Discuss {cap.title.toLowerCase()}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#0047ff]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 pt-20 border-t border-[var(--color-border)] text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
            Looking for something specific?
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold font-heading text-[var(--color-text)] mb-8">
            Let’s talk about your project.
          </h3>
          <Link
            href="/contact"
            className="glass-btn-blue text-xs font-semibold py-3.5 px-8"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 ml-2 inline-block" />
          </Link>
        </div>

      </div>
    </div>
  );
}
