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
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Page Hero */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-muted)]">
              Portfolio Archive
            </span>
          </div>
          <h1 className="hero-h1 text-[var(--color-text)] font-heading mb-5">
            Selected Work<span className="text-[#0047ff]">.</span>
          </h1>
          <p className="body-lead text-base sm:text-xl text-[var(--color-muted)] leading-relaxed">
            A collection of brands, films and digital work created by Frameless Hub.
          </p>
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 pb-8 mb-12 sm:mb-16 border-b border-[var(--color-border)]">
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
                    : 'bg-[var(--color-bg)] text-[var(--color-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
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
              className="group p-8 sm:p-10 rounded-3xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[#0047ff]/60 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between shadow-sm hover:shadow-[0_16px_40px_rgba(0,71,255,0.12)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#0047ff]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Meta Top: Category, Social Handle & Year */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#0047ff] uppercase tracking-wider font-semibold">
                      {project.displayCategory}
                    </span>
                    {project.socialHandle && (
                      <span className="text-[11px] font-mono text-[var(--color-muted)] bg-[var(--color-tint)] px-2 py-0.5 rounded-md border border-[var(--color-border)]">
                        {project.socialHandle}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[var(--color-muted)]">
                    {project.year}
                  </span>
                </div>

                {/* Client Name & Logo */}
                <div className="flex items-center gap-3 mb-2">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.client} logo`}
                      className="w-9 h-9 object-contain rounded-xl bg-[var(--color-tint)] p-1.5 border border-[var(--color-border)] flex-shrink-0"
                    />
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--color-text)] group-hover:text-[#0047ff] transition-colors">
                    {project.client}
                  </h2>
                </div>

                {/* Project Scope / Title */}
                <p className="text-base text-[var(--color-text)] font-medium mb-4">
                  {project.title}
                </p>

                {/* Overview */}
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 font-normal">
                  {project.overview}
                </p>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-[11px] font-mono text-[var(--color-text)] bg-[var(--color-tint)] border border-[var(--color-border)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verified Result & Animated Pill */}
              <div className="relative z-10 pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                {project.verifiedResult ? (
                  <span className="text-xs font-mono text-[#0047ff] font-semibold">
                    {project.verifiedResult}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-[var(--color-muted)]">
                    Case Study
                  </span>
                )}

                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/[0.08] group-hover:bg-[#0047ff] text-[var(--color-text)] group-hover:text-white transition-all duration-300">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
