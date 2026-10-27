'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { YouTubeIcon, InstagramIcon } from '@/components/icons/SocialIcons';
import { getNextProject, type Project } from '@/data/projects';

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const nextProject = getNextProject(project.slug);

  return (
    <article className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Back Link */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] hover:text-[#0047ff] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header Info: Project Name, Client, Category, Year */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 pb-10 border-b border-[var(--color-border)]">
          <div className="lg:col-span-8">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-3 font-semibold">
              {project.client} • {project.year}
            </div>
            <div className="flex items-center gap-4">
              {project.logo && (
                <img
                  src={project.logo}
                  alt={`${project.client} logo`}
                  className="w-14 h-14 object-contain rounded-2xl bg-[var(--color-tint)] p-2.5 border border-[var(--color-border)] flex-shrink-0"
                />
              )}
              <h1 className="hero-h1 text-[var(--color-text)] font-heading mb-0">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end justify-end space-y-2">
            <span className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wider">
              Category
            </span>
            <span className="text-base sm:text-lg font-semibold text-[var(--color-text)]">
              {project.displayCategory}
            </span>

            {/* Direct Channel / Profile Links */}
            {(project.youtubeUrl || project.instagramUrl) && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-red-600/15 hover:bg-red-600/25 text-red-500 border border-red-500/30 transition-all hover:scale-105"
                  >
                    <YouTubeIcon className="w-3.5 h-3.5" />
                    <span>YouTube Channel</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {project.instagramUrl && (
                  <a
                    href={project.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-pink-600/15 hover:bg-pink-600/25 text-pink-500 border border-pink-500/30 transition-all hover:scale-105"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram Profile</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Overview & What We Did */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-8 mb-16 sm:mb-24 border-b border-[var(--color-border)]">
          {/* Overview */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
              Overview
            </h2>
            <p className="body-lead text-lg sm:text-2xl text-[var(--color-text)] font-normal leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* What We Did */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[var(--color-tint)] border border-[var(--color-border)]">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-6 font-semibold">
              What We Did
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-[var(--color-text)] bg-[var(--color-bg)] border border-[var(--color-border)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Verified Result */}
        {project.verifiedResult && (
          <div className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-2xl bg-[var(--color-tint)] border border-[var(--color-border)]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-2 font-semibold">
              Verified Result
            </div>
            <div className="text-3xl sm:text-5xl font-bold font-heading text-[var(--color-text)] tracking-tight">
              {project.verifiedResult}
            </div>
          </div>
        )}

        {/* Next Project → */}
        <div className="pt-12 border-t border-[var(--color-border)] flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            ← All Work
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--color-text)] hover:text-[#0047ff] transition-colors group"
          >
            <span>Next Project: {nextProject.client}</span>
            <ArrowUpRight className="w-4 h-4 text-[#0047ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </article>
  );
}
