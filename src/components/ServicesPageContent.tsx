'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import CTASection from './CTASection';
import { SERVICES } from '@/data/services';

export default function ServicesPageContent() {
  return (
    <div className="bg-[#04060A] text-[#F5F7FA] min-h-screen pt-24 sm:pt-32">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
          <span>COMPREHENSIVE CAPABILITIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4">
          Everything your brand needs
          <br />
          <span className="text-[#00F0FF]">to grow and stay relevant.</span>
        </h1>
        <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl leading-relaxed">
          From foundational brand architecture and commercial filmmaking to algorithmic YouTube operations and performance paid media, we engineer cohesive creative ecosystems that capture attention and compound enterprise value.
        </p>
      </div>

      {/* Services Grid (9 services cards) */}
      <ServicesSection />

      {/* Deep-Dive Capabilities List */}
      <section className="py-16 sm:py-24 border-t border-white/[0.06] bg-[#04060A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-2">
              Detailed Scope
            </span>
            <h2 className="text-3xl font-black text-white">Full Service Deliverables</h2>
          </div>

          <div className="space-y-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.08] hover:border-[#00F0FF]/30 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-[#00F0FF]">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-md">
                  {service.deliverables.map((deliv) => (
                    <span
                      key={deliv}
                      className="text-xs font-mono text-white/90 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-black bg-[#00F0FF] hover:bg-[#38BDF8] transition-colors shrink-0"
                  >
                    <span>Scope Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <ProcessSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
