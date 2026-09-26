'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && project.video && !hasVideoError) {
      // Don't auto-play on touch/mobile devices
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (!isMobile) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setHasVideoError(true));
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  // Determine aspect ratio / height class based on editorial gridSpan
  const getAspectRatioClass = () => {
    switch (project.gridSpan) {
      case 'full':
        return 'aspect-[16/9] md:aspect-[21/9]';
      case 'large':
        return 'aspect-[16/10] sm:aspect-[16/9]';
      case 'tall':
        return 'aspect-[4/5] sm:aspect-[3/4]';
      case 'medium':
      default:
        return 'aspect-[16/10]';
    }
  };

  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:border-[#00F0FF]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
    >
      {/* Visual Container */}
      <div className={`relative w-full ${getAspectRatioClass()} overflow-hidden bg-[#0D111A]`}>
        {/* Poster Thumbnail */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          loading={priority ? 'eager' : 'lazy'}
        />

        {/* Video Preview on Hover (Muted Autoplay) */}
        {project.video && !hasVideoError && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-[#04060A]/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-semibold">
            {project.client}
          </span>
          <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/15 backdrop-blur-md px-3 py-1 rounded-full border border-[#00F0FF]/30 font-bold">
            {project.year}
          </span>
        </div>

        {/* Play Icon indicator when video is available */}
        {project.video && (
          <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-black group-hover:bg-[#00F0FF] group-hover:border-[#00F0FF] transition-all">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Card Info Content */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#080C14]/70">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] group-hover:text-black group-hover:bg-[#00F0FF] group-hover:border-[#00F0FF] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 mt-2 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Deliverables / Services */}
        {project.services && project.services.length > 0 && (
          <div className="pt-4 mt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="text-[10px] font-mono text-[#94A3B8] bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.05]"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
