'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { portfolioProjects, WORK_CATEGORIES, type ProjectCategory } from '@/data/projects';

interface WorkGridProps {
  initialCategory?: string;
  limit?: number;
  showFilters?: boolean;
}

export default function WorkGrid({
  initialCategory = 'All',
  limit,
  showFilters = true,
}: WorkGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const filteredProjects = portfolioProjects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="work" className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00F0FF]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
              <span>PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mt-2">
              Commercial films, YouTube growth engines, brand identities, and high-conversion performance campaigns.
            </p>
          </div>
        </div>

        {/* Category Filters (Pills) */}
        {showFilters && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-14 scrollbar-none no-scrollbar">
            {WORK_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] ${
                    active
                      ? 'bg-[#00F0FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : 'bg-white/[0.04] text-[#94A3B8] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Editorial Project Grid with Variable Card Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {displayedProjects.map((project, index) => {
            // Editorial grid col spans
            let colSpanClass = 'lg:col-span-6'; // default 2 columns
            if (project.gridSpan === 'full') {
              colSpanClass = 'lg:col-span-12';
            } else if (project.gridSpan === 'large') {
              colSpanClass = 'lg:col-span-7';
            } else if (project.gridSpan === 'tall') {
              colSpanClass = 'lg:col-span-5';
            } else if (project.gridSpan === 'medium') {
              colSpanClass = 'lg:col-span-6';
            }

            return (
              <div key={project.id} className={`${colSpanClass} w-full`}>
                <ProjectCard project={project} priority={index < 2} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
