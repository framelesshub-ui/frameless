'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getNextProject, type Project } from '@/data/projects';

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const nextProject = getNextProject(project.slug);

  return (
    <article className="bg-white text-black min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Back Link */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5b6170] hover:text-[#0047ff] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header Info: Project Name, Client, Category, Year */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 pb-10 border-b border-[#e6e8ee]">
          <div className="lg:col-span-8">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-3 font-semibold">
              {project.client} • {project.year}
            </div>
            <h1 className="hero-h1 text-black font-heading mb-0">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end justify-end">
            <span className="text-xs font-mono text-[#5b6170] uppercase tracking-wider">
              Category
            </span>
            <span className="text-base sm:text-lg font-semibold text-black mt-1">
              {project.displayCategory}
            </span>
          </div>
        </div>

        {/* Overview & What We Did */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-8 mb-16 sm:mb-24 border-b border-[#e6e8ee]">
          {/* Overview */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#5b6170] mb-4">
              Overview
            </h2>
            <p className="body-lead text-lg sm:text-2xl text-black font-normal leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* What We Did */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#f6f8fc] border border-[#e6e8ee]">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-6 font-semibold">
              What We Did
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-black bg-white border border-[#e6e8ee]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Verified Result */}
        {project.verifiedResult && (
          <div className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-2xl bg-[#f6f8fc] border border-[#e6e8ee]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-2 font-semibold">
              Verified Result
            </div>
            <div className="text-3xl sm:text-5xl font-bold font-heading text-black tracking-tight">
              {project.verifiedResult}
            </div>
          </div>
        )}

        {/* Next Project → */}
        <div className="pt-12 border-t border-[#e6e8ee] flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-wider text-[#5b6170] hover:text-black transition-colors"
          >
            ← All Work
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-black hover:text-[#0047ff] transition-colors group"
          >
            <span>Next Project: {nextProject.client}</span>
            <ArrowUpRight className="w-4 h-4 text-[#0047ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </article>
  );
}
