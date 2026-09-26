'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects, WORK_FILTERS, WorkFilter } from '@/data/projects';

export default function WorkPageContent() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Content') {
      return (
        project.category === 'Content' ||
        project.category === 'Media' ||
        project.displayCategory.toLowerCase().includes('content')
      );
    }
    if (activeFilter === 'Branding') {
      return (
        project.category === 'Branding' ||
        project.displayCategory.toLowerCase().includes('brand')
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
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen pt-32 sm:pt-40 pb-24">
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
            A collection of brands, campaigns, and digital work created by Frameless Hub.
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

        {/* Editorial Typographic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00F0FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta Top */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                  <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                    {project.displayCategory}
                  </span>
                  <span className="text-xs font-mono text-[#71717A]">
                    {project.year}
                  </span>
                </div>

                {/* Client & Title */}
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors duration-200 mb-2">
                  {project.client}
                </h2>
                <p className="text-base text-[#D4D4D8] font-medium mb-4">
                  {project.title}
                </p>

                {/* Overview */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
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

              {/* Bottom Action */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                {project.verifiedResult ? (
                  <span className="text-xs font-mono text-[#00F0FF]">
                    {project.verifiedResult}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-[#71717A]">
                    Case Study
                  </span>
                )}
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 pt-16 border-t border-white/[0.08] text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Have something worth creating?
          </h3>
          <p className="text-[#A1A1AA] mb-8 max-w-md mx-auto">
            Tell us about your brand vision, production needs, or campaign goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
