import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';

export default function SelectedWork() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <section className="py-24 sm:py-32 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
              02 — Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-[#00F0FF] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Clean Editorial Typographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project) => (
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
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors duration-200 mb-2">
                  {project.client}
                </h3>
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

        {/* Bottom CTA to Work */}
        <div className="mt-16 sm:mt-24 pt-8 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
