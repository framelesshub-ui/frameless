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
    <div className="bg-white text-black min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Page Hero */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#5b6170]">
              Portfolio Archive
            </span>
          </div>
          <h1 className="hero-h1 text-black font-heading mb-5">
            Selected Work<span className="text-[#0047ff]">.</span>
          </h1>
          <p className="body-lead text-base sm:text-xl text-[#5b6170] leading-relaxed">
            A collection of brands, films and digital work created by Frameless Hub.
          </p>
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 pb-8 mb-12 sm:mb-16 border-b border-[#e6e8ee]">
          {WORK_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0047ff] text-white font-semibold'
                    : 'bg-white text-[#5b6170] hover:text-black border border-[#e6e8ee]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group p-8 sm:p-10 rounded-2xl bg-white border border-[#e6e8ee] hover:border-[#0047ff] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                {/* Meta Top: Category & Year */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#e6e8ee] mb-6">
                  <span className="text-xs font-mono text-[#0047ff] uppercase tracking-wider font-semibold">
                    {project.displayCategory}
                  </span>
                  <span className="text-xs font-mono text-[#5b6170]">
                    {project.year}
                  </span>
                </div>

                {/* Client Name */}
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-black group-hover:text-[#0047ff] transition-colors mb-2">
                  {project.client}
                </h2>

                {/* Project Scope / Title */}
                <p className="text-base text-black font-medium mb-4">
                  {project.title}
                </p>

                {/* Overview */}
                <p className="text-sm text-[#5b6170] leading-relaxed mb-6 font-normal">
                  {project.overview}
                </p>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-[11px] font-mono text-black bg-[#f6f8fc] border border-[#e6e8ee]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verified Result & Arrow */}
              <div className="pt-6 border-t border-[#e6e8ee] flex items-center justify-between">
                {project.verifiedResult ? (
                  <span className="text-xs font-mono text-[#0047ff] font-semibold">
                    {project.verifiedResult}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-[#5b6170]">
                    Case Study
                  </span>
                )}
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black group-hover:text-[#0047ff] transition-colors">
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
