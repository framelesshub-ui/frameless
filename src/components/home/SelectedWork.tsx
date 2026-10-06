'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function SelectedWork() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#f6f8fc] text-black border-t border-[#e6e8ee] scroll-reveal">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#e6e8ee]">
          <h2 className="section-h2 text-black font-heading">
            Selected projects.
          </h2>
        </div>

        {/* 7 Projects Clean Full-Width Rows */}
        <div className="border-b border-[#e6e8ee]">
          {projects.map((project) => {
            const metricText = project.verifiedResult
              ? project.verifiedResult.replace(/Channel Views/i, 'views').trim()
              : 'Case study';
            const servicesText = project.deliverables.join(' · ');

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="project-row-item group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff]"
              >
                {/* ScaleY Blue Background Fill Layer */}
                <div className="project-row-fill" />

                {/* Content Layer (z-10 above fill) */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
                  {/* Project Name (4 cols on desktop, 1 col on mobile) */}
                  <div className="sm:col-span-4 lg:col-span-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-black group-hover:text-white transition-colors duration-300">
                      {project.client}
                    </h3>
                  </div>

                  {/* Category (2 cols) */}
                  <div className="sm:col-span-3 lg:col-span-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#5b6170] group-hover:text-white/80 transition-colors duration-300">
                      {project.displayCategory}
                    </span>
                  </div>

                  {/* Services (4 cols) */}
                  <div className="sm:col-span-3 lg:col-span-5">
                    <p className="text-xs sm:text-sm text-[#5b6170] group-hover:text-white/90 transition-colors duration-300 line-clamp-2">
                      {servicesText}
                    </p>
                  </div>

                  {/* Metric & Arrow (2 cols) */}
                  <div className="sm:col-span-2 lg:col-span-2 flex items-center justify-between sm:justify-end gap-3">
                    <span className="project-metric-badge text-xs font-mono font-medium px-3 py-1 rounded-full bg-white border border-[#e6e8ee] text-black group-hover:bg-white/20 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                      {metricText}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
