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
              Portfolio
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

        {/* Large Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col cursor-pointer"
            >
              {/* Media Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#141416] border border-white/[0.08] mb-5">
                <img
                  src={project.thumbnail}
                  alt={`${project.client} - ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                
                {/* Subtle Hover Action */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>

                {/* Optional verified stat badge if verified */}
                {project.verifiedResult && (
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#00F0FF]">
                    {project.verifiedResult}
                  </div>
                )}
              </div>

              {/* Card Meta */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors duration-200">
                    {project.client}
                  </h2>
                  <p className="text-sm text-[#D4D4D8] font-medium mt-1">
                    {project.title}
                  </p>
                  <p className="text-xs text-[#A1A1AA] font-mono mt-1">
                    {project.displayCategory}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#71717A] shrink-0 mt-1">
                  {project.year}
                </span>
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
            Tell us about your brand vision, production needs, or YouTube ambitions.
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
