'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Film, Sparkles, Filter } from 'lucide-react';
import { projects } from '@/data/projects';

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'YouTube' | 'Branding' | 'Content'>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'YouTube') return project.category === 'YouTube';
    if (activeFilter === 'Branding') return project.category === 'Branding';
    if (activeFilter === 'Content') return project.category === 'Content' || project.category === 'Campaigns';
    return true;
  });

  return (
    <section className="py-24 sm:py-36 bg-transparent text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
              <Film className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>TIMELINE EXPANSION // VERIFIED CLIENT WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Selected Portfolio<span className="text-[#00F0FF]">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 select-none">
            {(['All', 'YouTube', 'Branding', 'Content'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeFilter === filter
                    ? 'bg-[#00F0FF] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white border border-white/[0.08]'
                }`}
              >
                {filter === 'All' ? 'ALL WORKS' : filter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Typographic Project Grid (Expanded from Timeline) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="VIEW"
              className="group p-8 sm:p-10 rounded-2xl bg-[#0E0E11]/85 border border-white/[0.08] hover:border-[#00F0FF]/50 hover:bg-[#121216] transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-xl"
            >
              {/* Subtle Corner Film Gauge Indicator */}
              <div className="absolute top-4 right-4 text-[9px] font-mono text-white/30 uppercase tracking-widest pointer-events-none">
                SEQ_0{idx + 1} // 24FPS
              </div>

              <div>
                {/* Meta Top: Category & Year */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                  <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                    {project.displayCategory}
                  </span>
                  <span className="text-xs font-mono text-[#71717A]">
                    {project.year}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                  {project.client}
                </h3>

                {/* Project Scope */}
                <p className="text-base text-[#D4D4D8] font-medium mb-4">
                  {project.title}
                </p>

                {/* Overview */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {project.overview}
                </p>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-[11px] font-mono text-[#E4E4E7] bg-white/[0.03] border border-white/[0.08]"
                    >
                      ✦ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verified Result & Arrow */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                {project.verifiedResult ? (
                  <span className="text-xs font-mono text-[#00F0FF] font-semibold">
                    {project.verifiedResult}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-[#71717A]">
                    Verified Case Study
                  </span>
                )}
                
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                  <span>Examine Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to All Work */}
        <div className="mt-16 sm:mt-24 pt-8 flex justify-center">
          <Link
            href="/work"
            data-cursor="EXPLORE"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <span>View Complete Studio Archive</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
