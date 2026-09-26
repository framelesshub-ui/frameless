'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import BrandCard from './BrandCard';
import { BRANDING_PROJECTS } from '@/data/branding';

export default function BrandingSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A] border-t border-white/[0.06]">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00F0FF]/05 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
              <span>BESPOKE VISUAL IDENTITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              BRANDING &amp; DESIGN
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mt-3">
              Meticulous typography, tactile packaging systems, and spatial brand worlds created for category defining founders.
            </p>
          </div>

          <Link
            href="/work?category=Branding"
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#00F0FF] transition-colors"
          >
            <span>View All Branding Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Branding Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BRANDING_PROJECTS.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
