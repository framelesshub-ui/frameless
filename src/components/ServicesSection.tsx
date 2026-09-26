'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { SERVICES } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00F0FF]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
              <span>CAPABILITIES &amp; EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Everything your brand needs
              <br />
              <span className="text-[#00F0FF]">to grow and stay relevant.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#00F0FF] transition-colors"
          >
            <span>Explore Comprehensive Capabilities</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
