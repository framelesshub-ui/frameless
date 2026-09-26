'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/projects';

// Real high-resolution studio assets mapped to verified projects
const PROJECT_VISUALS: Record<string, string> = {
  'birlas-parvai': '/campaigns/automotive.jpg',
  'frameless-media': '/media/generated/content-production-studio.jpg',
  'ora-kitchen': '/media/generated/branding-identity-editorial.jpg',
  'seyon-lab': '/media/generated/web-digital-showcase.jpg',
  'krithi-makeup-artist': '/media/generated/social-creator-studio.jpg',
  'supratha-wellness': '/media/generated/performance-analytics-studio.jpg',
};

export default function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const imageWrapper = card.querySelector('.project-image-mask');
        const img = card.querySelector('.project-img');

        if (imageWrapper) {
          gsap.fromTo(
            imageWrapper,
            { clipPath: 'inset(18% 0% 0% 0%)', opacity: 0.7 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 35%',
                scrub: 1,
              },
            }
          );
        }

        if (img) {
          gsap.fromTo(
            img,
            { y: '-6%', scale: 1.1 },
            {
              y: '6%',
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const displayProjects = projects.slice(0, 5);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08]"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>03 / Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Work that cuts through.
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

        {/* Asymmetric Campaign Grid */}
        <div className="space-y-16 sm:space-y-24">
          {/* Item 1: Wide Lead Feature */}
          {displayProjects[0] && (
            <div
              ref={(el) => {
                if (el) cardRefs.current[0] = el;
              }}
            >
              <Link
                href={`/work/${displayProjects[0].slug}`}
                data-cursor="VIEW"
                className="group block relative overflow-hidden rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-colors duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[480px]">
                  {/* Image Column with Mask Reveal */}
                  <div className="lg:col-span-8 relative overflow-hidden project-image-mask aspect-[16/10] lg:aspect-auto">
                    <img
                      src={PROJECT_VISUALS[displayProjects[0].slug] || '/campaigns/automotive.jpg'}
                      alt={displayProjects[0].client}
                      className="project-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Information Column */}
                  <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                        <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                          {displayProjects[0].displayCategory}
                        </span>
                        <span className="text-xs font-mono text-[#71717A]">
                          {displayProjects[0].year}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                        {displayProjects[0].client}
                      </h3>

                      <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                        {displayProjects[0].overview}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {displayProjects[0].deliverables.map((item) => (
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
                        {displayProjects[0].verifiedResult || 'Verified Campaign'}
                      </span>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Items 2 & 3: 2-Column Editorial Rhythm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {displayProjects.slice(1, 3).map((project, idx) => (
              <div
                key={project.slug}
                ref={(el) => {
                  if (el) cardRefs.current[idx + 1] = el;
                }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="VIEW"
                  className="group block rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-colors duration-500 overflow-hidden h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Masked Image frame */}
                    <div className="relative aspect-[16/10] overflow-hidden project-image-mask bg-black">
                      <img
                        src={PROJECT_VISUALS[project.slug] || '/media/generated/content-production-studio.jpg'}
                        alt={project.client}
                        className="project-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#00F0FF] bg-black/60 backdrop-blur-md border border-white/10">
                          {project.displayCategory}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3">
                        <span>CASE STUDY</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                        {project.client}
                      </h3>

                      <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                        {project.overview}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((item) => (
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

                  <div className="p-8 sm:p-10 pt-0">
                    <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#00F0FF]">
                        {project.verifiedResult || 'Verified Partner'}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Item 4: Asymmetric Reverse Wide Feature */}
          {displayProjects[3] && (
            <div
              ref={(el) => {
                if (el) cardRefs.current[3] = el;
              }}
            >
              <Link
                href={`/work/${displayProjects[3].slug}`}
                data-cursor="VIEW"
                className="group block relative overflow-hidden rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-colors duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[460px]">
                  {/* Information Column (Left on Desktop) */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                        <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                          {displayProjects[3].displayCategory}
                        </span>
                        <span className="text-xs font-mono text-[#71717A]">
                          {displayProjects[3].year}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                        {displayProjects[3].client}
                      </h3>

                      <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                        {displayProjects[3].overview}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {displayProjects[3].deliverables.map((item) => (
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
                        {displayProjects[3].verifiedResult || 'Verified Systems'}
                      </span>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Image Column with Mask Reveal (Right on Desktop) */}
                  <div className="lg:col-span-7 relative overflow-hidden project-image-mask aspect-[16/10] lg:aspect-auto order-1 lg:order-2">
                    <img
                      src={PROJECT_VISUALS[displayProjects[3].slug] || '/media/generated/web-digital-showcase.jpg'}
                      alt={displayProjects[3].client}
                      className="project-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* View All Bottom Link */}
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
