'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects, WORK_FILTERS, WorkFilter } from '@/data/projects';

export default function WorkPageContent() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'YouTube') {
      return (
        project.category === 'YouTube' ||
        project.displayCategory.toLowerCase().includes('youtube')
      );
    }
    if (activeFilter === 'Content') {
      return (
        project.category === 'Content' ||
        project.displayCategory.toLowerCase().includes('content') ||
        project.displayCategory.toLowerCase().includes('production')
      );
    }
    if (activeFilter === 'Branding') {
      return (
        project.category === 'Branding' ||
        project.displayCategory.toLowerCase().includes('branding') ||
        project.displayCategory.toLowerCase().includes('identity')
      );
    }
    if (activeFilter === 'Campaigns') {
      return (
        project.category === 'Campaigns' ||
        project.displayCategory.toLowerCase().includes('campaign')
      );
    }
    return project.category === activeFilter;
  });

  return (
    <div className="bg-transparent text-[#F4F4F5] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Page Hero */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
              Portfolio Archive
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
            Selected Work
          </h1>
          <p className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed">
            A collection of brands, films and digital work created by Frameless Hub.
          </p>
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 pb-8 mb-12 sm:mb-16 border-b border-white/[0.08]">
          {WORK_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid: Large luxury typographic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group p-8 sm:p-10 rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
            >
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
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                  {project.client}
                </h2>

                {/* Project Scope / Title */}
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
                      {item}
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
                    Case Study
                  </span>
                )}
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
