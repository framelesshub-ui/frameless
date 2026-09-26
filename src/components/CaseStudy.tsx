'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';
import { getNextProject, type Project } from '@/data/projects';

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const nextProject = getNextProject(project.slug);
  const playableVideo = project.videoEmbedUrl || project.video;

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

        {/* Project Header Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
              {project.client} • {project.year}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end justify-end">
            <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
              Category
            </span>
            <span className="text-base font-semibold text-white mt-1">
              {project.displayCategory}
            </span>
            {project.channelUrl && (
              <a
                href={project.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F0FF] hover:underline mt-2"
              >
                <span>Visit YouTube Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Large Hero Video / Image */}
        <div className="mb-16 sm:mb-24">
          <div
            onClick={() => playableVideo && setIsVideoOpen(true)}
            className={`group relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#141416] border border-white/[0.08] ${
              playableVideo ? 'cursor-pointer' : ''
            }`}
          >
            <img
              src={project.thumbnail}
              alt={`${project.client} - ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />

            {/* Play Trigger */}
            {playableVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#00F0FF] group-hover:text-black group-hover:border-[#00F0FF] transition-all duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
              </div>
            )}

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
              <span>{project.client}</span>
              {playableVideo && (
                <span className="text-white group-hover:text-[#00F0FF] transition-colors">
                  Play Project Video →
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Overview & What We Did */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 border-t border-b border-white/[0.08] mb-16 sm:mb-24">
          {/* Overview */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1AA] mb-4">
              Overview
            </h2>
            <p className="text-lg sm:text-xl text-[#F4F4F5] font-normal leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* What We Did */}
          <div className="lg:col-span-5">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1AA] mb-4">
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

        {/* Large Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20 sm:mb-28">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1AA] mb-6">
              Gallery
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {project.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  className="aspect-[16/10] rounded-xl overflow-hidden bg-[#141416] border border-white/[0.08]"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.client} visual ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optional Verified Result */}
        {project.verifiedResult && (
          <div className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1AA] mb-2">
              Verified Result
            </div>
            <div className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight">
              {project.verifiedResult}
            </div>
          </div>
        )}

        {/* Next Project Link */}
        <div className="pt-12 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
          >
            ← All Work
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-flex items-center gap-3 text-right"
          >
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                Next Project
              </span>
              <span className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                {nextProject.client}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#00F0FF] group-hover:text-[#00F0FF] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>

      {/* Video Modal */}
      {playableVideo && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc={playableVideo}
          title={`${project.client} — ${project.title}`}
        />
      )}
    </article>
  );
}
