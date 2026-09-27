'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function SelectedWork() {
  const displayProjects = projects.slice(0, 6);

  return (
    <section className="py-24 sm:py-36 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>02 / The Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-[#00F0FF] transition-colors"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Typographic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayProjects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="VIEW"
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
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors mb-2">
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
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to Work Archive */}
        <div className="mt-16 sm:mt-24 pt-8 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <span>View All Selected Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
