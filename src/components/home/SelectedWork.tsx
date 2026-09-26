'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

// 6 Priority projects specified by user
const HOMEPAGE_PRIORITY_SLUGS = [
  'birlas-parvai',
  'supratha-wellness',
  'frameless-media',
  'ora-kitchen',
  'aura-home',
  'krithi-makeover-artistry',
];

export default function SelectedWork() {
  const selectedProjects = HOMEPAGE_PRIORITY_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter(Boolean);

  return (
    <section className="py-24 sm:py-32 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
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

        {/* Project Grid: Large cinematic cards showing ONLY Image, Client, Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {selectedProjects.map((project) => (
            <Link
              key={project!.slug}
              href={`/work/${project!.slug}`}
              className="group block rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Large Image / Video Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project!.thumbnail}
                  alt={project!.client}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Card Footer: Client Name & Category ONLY */}
              <div className="p-6 sm:p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#00F0FF] transition-colors mb-1">
                    {project!.client}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#A1A1AA]">
                    {project!.displayCategory}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:border-white/30 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to Work Archive */}
        <div className="mt-16 pt-8 flex justify-center">
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
