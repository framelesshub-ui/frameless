'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Play, CheckCircle2 } from 'lucide-react';
import VideoModal from './VideoModal';
import { getNextProject, type Project } from '@/data/projects';

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const nextProject = getNextProject(project.slug);

  return (
    <article className="relative bg-[#04060A] text-[#F5F7FA] min-h-screen pt-28 sm:pt-36 pb-24 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#00F0FF]/05 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-fine-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#00F0FF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Hero Meta Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/70">
              {project.year}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/70">
              Client: {project.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed font-normal">
            {project.overview}
          </p>
        </div>

        {/* Hero Media (Large Hero Video or Image with Play Button) */}
        <div className="mb-16 sm:mb-24">
          <div
            onClick={() => project.video && setIsVideoOpen(true)}
            className={`group relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden glass-card border border-white/[0.1] shadow-[0_30px_70px_rgba(0,0,0,0.85)] ${
              project.video ? 'cursor-pointer hover:border-[#00F0FF]/50' : ''
            }`}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-[#04060A]/30 to-transparent opacity-80" />

            {/* Play Button Trigger if video available */}
            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#00F0FF] group-hover:text-black transition-all shadow-[0_0_35px_rgba(0,0,0,0.8)]">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
              </div>
            )}

            {/* Bottom bar overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/80">
              <span>{project.client} • {project.category}</span>
              {project.video && (
                <span className="text-[#00F0FF] flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Click to Play Film</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Project Services & Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-y border-white/[0.08] mb-16 sm:mb-24">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-2">
              Deliverables &amp; Scope
            </span>
            <h3 className="text-xl font-bold text-white">Services Rendered</h3>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-2.5 items-center">
            {project.services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm font-mono text-white"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Grid: Challenge, Strategy, Execution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-24">
          {/* Challenge */}
          <div className="p-8 rounded-3xl glass-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-3">
                01 • The Challenge
              </span>
              <h3 className="text-xl font-bold text-white mb-4">The Friction</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Strategy */}
          <div className="p-8 rounded-3xl glass-card flex flex-col justify-between border-[#00F0FF]/20">
            <div>
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-3">
                02 • The Strategy
              </span>
              <h3 className="text-xl font-bold text-white mb-4">The Strategic Angle</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Execution */}
          <div className="p-8 rounded-3xl glass-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-3">
                03 • Execution
              </span>
              <h3 className="text-xl font-bold text-white mb-4">The Craft</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {project.execution}
              </p>
            </div>
          </div>
        </div>

        {/* Verified Results & Metrics */}
        {project.results && project.results.length > 0 && (
          <div className="mb-16 sm:mb-24 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-2">
                Quantitative Lift
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Verified Campaign Results
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.results.map((result) => (
                <div key={result.label} className="p-5 rounded-2xl bg-[#080C14] border border-white/[0.06]">
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono text-[#00F0FF] mb-1">
                    {result.value}
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Quote / Testimonial if present */}
        {project.clientQuote && (
          <div className="mb-16 sm:mb-24 p-8 sm:p-12 rounded-3xl glass-card border border-[#00F0FF]/30 text-center relative overflow-hidden">
            <p className="text-lg sm:text-2xl text-white font-medium italic max-w-3xl mx-auto mb-6 leading-relaxed">
              "{project.clientQuote.text}"
            </p>
            <div className="text-sm font-bold text-[#00F0FF]">
              {project.clientQuote.author}
            </div>
            <div className="text-xs font-mono text-[#94A3B8]">
              {project.clientQuote.role}
            </div>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-1">
                  Visual Evidence
                </span>
                <h3 className="text-2xl font-black text-white">Project Gallery</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden glass-card aspect-[16/10] bg-[#0D111A]"
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} gallery asset ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project Footer Link */}
        {nextProject && (
          <div className="pt-12 border-t border-white/[0.08]">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-10 rounded-3xl glass-card hover:border-[#00F0FF]/40 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest block mb-2">
                  Next Case Study →
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#00F0FF] transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs font-mono text-[#94A3B8] mt-1">
                  {nextProject.client} • {nextProject.category}
                </p>
              </div>

              <div className="mt-6 sm:mt-0 w-12 h-12 rounded-full bg-[#00F0FF] text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        )}

      </div>

      {/* Video Modal */}
      {project.video && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          title={project.title}
          category={project.category}
          videoSrc={project.video}
          posterSrc={project.thumbnail}
        />
      )}
    </article>
  );
}
