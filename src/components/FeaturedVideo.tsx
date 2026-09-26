'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, ArrowUpRight, Sparkles } from 'lucide-react';
import VideoModal from './VideoModal';
import { getFeaturedProject, type Project } from '@/data/projects';

export default function FeaturedVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project: Project = getFeaturedProject();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] radial-orb pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-fine-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-[#00F0FF]" />
              <span>FEATURED PRODUCTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Cinematic Storytelling at Scale
            </h2>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#00F0FF] transition-colors"
          >
            <span>Explore Full Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Large Central Featured Project Card */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="group relative w-full rounded-3xl overflow-hidden cursor-pointer glass-card border border-white/[0.1] hover:border-[#00F0FF]/50 transition-all duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
        >
          {/* 16:9 / 21:9 Cinematic Aspect Ratio */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#080C14]">
            {/* Large Thumbnail */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-[#04060A]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            {/* Central Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative flex items-center justify-center">
                {/* Subtle radiating wave on hover */}
                <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#00F0FF]/20 animate-ping opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00F0FF] group-hover:text-black group-hover:border-[#00F0FF] shadow-[0_0_35px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_40px_rgba(0,240,255,0.7)]">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Top Details & Client Badge */}
            <div className="absolute top-5 left-5 sm:top-8 sm:left-8 right-5 sm:right-8 flex items-center justify-between z-20">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-white tracking-wider uppercase">
                {project.client}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#00F0FF]/15 backdrop-blur-md border border-[#00F0FF]/30 text-xs font-mono font-bold text-[#00F0FF] tracking-wider uppercase">
                {project.year}
              </span>
            </div>

            {/* Bottom Project Info (Title & Category) */}
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 right-5 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#00F0FF] font-semibold">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1 group-hover:text-[#00F0FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 line-clamp-2 sm:line-clamp-none max-w-xl">
                  {project.overview}
                </p>
              </div>

              {/* Click instruction */}
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-3.5 py-2 rounded-full border border-[#00F0FF]/25">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Campaign Film</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
        category={project.category}
        videoSrc={project.video}
        posterSrc={project.thumbnail}
      />
    </section>
  );
}
