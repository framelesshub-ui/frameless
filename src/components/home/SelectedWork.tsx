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

        {/* 2-Column Large Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featured.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`group flex flex-col ${
                idx % 2 === 1 ? 'md:translate-y-12' : ''
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#141416] border border-white/[0.08] mb-5">
                <img
                  src={project.thumbnail}
                  alt={`${project.client} - ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors duration-200">
                    {project.client}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] font-mono mt-1">
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

        {/* Bottom CTA to Work */}
        <div className="mt-20 md:mt-28 pt-8 flex justify-center">
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
