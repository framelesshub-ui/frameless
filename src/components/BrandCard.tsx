'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { BrandingProject } from '@/data/branding';

interface BrandCardProps {
  brand: BrandingProject;
  index: number;
}

export default function BrandCard({ brand, index }: BrandCardProps) {
  return (
    <Link
      href={`/work/${brand.slug}`}
      className="group flex flex-col rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:border-[#00F0FF]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
    >
      {/* Project Image & Visual Preview */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D111A]">
        <img
          src={brand.projectImage}
          alt={brand.brandName}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-[#04060A]/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-300" />

        {/* Year & Index Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#00F0FF] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            0{index + 1}
          </span>
          <span className="text-[10px] font-mono text-white/60 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {brand.year}
          </span>
        </div>

        {/* Visual Direction Pill */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="inline-block text-[10px] font-mono tracking-wider uppercase text-[#00F0FF] bg-[#00F0FF]/15 px-2.5 py-1 rounded-full border border-[#00F0FF]/30 backdrop-blur-md">
            {brand.visualDirection}
          </div>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-[#080C14]/60">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                {brand.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors mt-0.5">
                {brand.brandName}
              </h3>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] group-hover:text-black group-hover:bg-[#00F0FF] group-hover:border-[#00F0FF] transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3 mb-4">
            {brand.narrative}
          </p>
        </div>

        {/* Deliverables Tags */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
          {brand.deliverables.slice(0, 3).map((item) => (
            <span
              key={item}
              className="text-[10px] font-mono text-[#F5F7FA]/75 bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.05]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
