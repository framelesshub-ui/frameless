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
    <article className="bg-[#080808] text-[#F4F4F5] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Back Link */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-[#00F0FF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header Info: Project Name, Client, Category, Year */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 pb-10 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-3">
              {project.client} • {project.year}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end justify-end">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
              Category
            </span>
            <span className="text-base sm:text-lg font-semibold text-white mt-1">
              {project.displayCategory}
            </span>
          </div>
        </div>

        {/* Large Hero Video or Image */}
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7)] mb-16 sm:mb-24">
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={project.thumbnail}
              className="w-full h-full object-cover"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Overview & What We Did */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-8 mb-16 sm:mb-24 border-b border-white/[0.08]">
          {/* Overview (Max 3-4 lines) */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#71717A] mb-4">
              Overview
            </h2>
            <p className="text-lg sm:text-2xl text-[#F4F4F5] font-normal leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* What We Did */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-6">
              What We Did
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-[#E4E4E7] bg-white/[0.04] border border-white/[0.08]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Large Project Gallery (Visuals dominate) */}
        <div className="mb-20 sm:mb-28 space-y-8 sm:space-y-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#71717A] mb-6">
            Project Visuals
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.08]">
              <img
                src={project.thumbnail}
                alt={`${project.client} visual`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.08]">
              <img
                src="/media/generated/studio-interior-editorial.jpg"
                alt="Production visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Optional Verified Result */}
        {project.verifiedResult && (
          <div className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-2">
              Verified Result
            </div>
            <div className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">
              {project.verifiedResult}
            </div>
          </div>
        )}

        {/* Next Project → */}
        <div className="pt-12 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
          >
            ← All Work
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors group"
          >
            <span>Next Project: {nextProject.client}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </article>
  );
}
