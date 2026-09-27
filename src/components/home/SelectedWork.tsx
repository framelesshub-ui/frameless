'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function SelectedWork() {
  const p1 = projects.find((p) => p.slug === 'birlas-parvai');
  const p2 = projects.find((p) => p.slug === 'ora-kitchen');
  const p3 = projects.find((p) => p.slug === 'supratha-wellness');
  const p4 = projects.find((p) => p.slug === 'frameless-media');
  const p5 = projects.find((p) => p.slug === 'aura-home');
  const p6 = projects.find((p) => p.slug === 'krithi-makeover-artistry');

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

        {/* Asymmetric Exhibition Grid */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Item 1: Monumental Lead Feature (Birlas Parvai) */}
          {p1 && (
            <Link
              href={`/work/${p1.slug}`}
              data-cursor="VIEW"
              className="group block relative overflow-hidden rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[460px]">
                {/* Visual */}
                <div className="lg:col-span-8 relative overflow-hidden aspect-[16/10] lg:aspect-auto">
                  <img
                    src={p1.thumbnail}
                    alt={p1.client}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#00F0FF] bg-black/70 backdrop-blur-md border border-white/10">
                      FEATURED SHOWCASE
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                      <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                        {p1.displayCategory}
                      </span>
                      <span className="text-xs font-mono text-[#71717A]">
                        {p1.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors mb-3">
                      {p1.client}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                      {p1.overview}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p1.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full text-[11px] font-mono text-[#E4E4E7] bg-white/[0.04] border border-white/[0.08]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00F0FF] font-semibold">
                      {p1.verifiedResult}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Items 2 & 3: Editorial Split Duo (Ora Kitchen & Supratha Wellness) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[p2, p3].filter(Boolean).map((project) => (
              <Link
                key={project!.slug}
                href={`/work/${project!.slug}`}
                data-cursor="VIEW"
                className="group block rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={project!.thumbnail}
                      alt={project!.client}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#00F0FF] bg-black/60 backdrop-blur-md border border-white/10">
                        {project!.displayCategory}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3">
                      <span>{project!.year}</span>
                      <span>CASE STUDY</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                      {project!.client}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                      {project!.overview}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project!.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono text-[#E4E4E7] bg-white/[0.04] border border-white/[0.08]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00F0FF]">
                      {project!.verifiedResult || 'Verified Partner'}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Item 4: Cinema Feature Anchor (Frameless Media) */}
          {p4 && (
            <Link
              href={`/work/${p4.slug}`}
              data-cursor="VIEW"
              className="group block relative overflow-hidden rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[440px]">
                {/* Information Column (Left on Desktop) */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                      <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                        {p4.displayCategory}
                      </span>
                      <span className="text-xs font-mono text-[#71717A]">
                        {p4.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                      {p4.client}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                      {p4.overview}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p4.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full text-[11px] font-mono text-[#E4E4E7] bg-white/[0.04] border border-white/[0.08]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00F0FF] font-semibold">
                      {p4.verifiedResult || 'Original Media'}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Visual (Right on Desktop) */}
                <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto order-1 lg:order-2">
                  <img
                    src={p4.thumbnail}
                    alt={p4.client}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
                </div>
              </div>
            </Link>
          )}

          {/* Items 5 & 6: Brand Systems Split Duo (Aura Home & Krithi Makeover Artistry) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[p5, p6].filter(Boolean).map((project) => (
              <Link
                key={project!.slug}
                href={`/work/${project!.slug}`}
                data-cursor="VIEW"
                className="group block rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={project!.thumbnail}
                      alt={project!.client}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#00F0FF] bg-black/60 backdrop-blur-md border border-white/10">
                        {project!.displayCategory}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3">
                      <span>{project!.year}</span>
                      <span>CASE STUDY</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                      {project!.client}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                      {project!.overview}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project!.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono text-[#E4E4E7] bg-white/[0.04] border border-white/[0.08]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00F0FF]">
                      {project!.verifiedResult || 'Brand Identity'}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
