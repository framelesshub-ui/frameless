'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { YouTubeIcon, InstagramIcon } from '@/components/icons/SocialIcons';
import { projects, Project } from '@/data/projects';
import AnimatedButton from '@/components/AnimatedButton';
import ProjectInspectorDrawer from '@/components/ProjectInspectorDrawer';
import { useScopingModal } from '@/context/ScopingModalContext';

// Flagship featured clients
const FEATURED_SLUGS = [
  'birlas-parvai',
  'ora-kitchen',
  'aura-home',
  'krithi-makeover-artistry',
  'frameless-media',
];

interface ShowcaseTheme {
  accentColor: string;
  bgGradient: string;
  glowColor: string;
}

const CLIENT_THEMES: Record<string, ShowcaseTheme> = {
  'birlas-parvai': {
    accentColor: '#0047ff',
    bgGradient: 'from-[#001844] via-[#080d1a] to-[#04060b]',
    glowColor: 'rgba(0, 71, 255, 0.25)',
  },
  'ora-kitchen': {
    accentColor: '#f59e0b',
    bgGradient: 'from-[#2e1c03] via-[#0d0903] to-[#040301]',
    glowColor: 'rgba(245, 158, 11, 0.22)',
  },
  'aura-home': {
    accentColor: '#10b981',
    bgGradient: 'from-[#03261a] via-[#040f0b] to-[#010604]',
    glowColor: 'rgba(16, 185, 129, 0.22)',
  },
  'krithi-makeover-artistry': {
    accentColor: '#ec4899',
    bgGradient: 'from-[#2b081b] via-[#0f040a] to-[#060204]',
    glowColor: 'rgba(236, 72, 153, 0.22)',
  },
  'frameless-media': {
    accentColor: '#38bdf8',
    bgGradient: 'from-[#032035] via-[#040d16] to-[#010508]',
    glowColor: 'rgba(56, 189, 248, 0.25)',
  },
};

export default function FeaturedWorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inspectorProject, setInspectorProject] = useState<Project | null>(null);
  const { openScopingModal } = useScopingModal();

  // Filter projects to match the 5 flagship clients in order
  const featuredProjects: Project[] = FEATURED_SLUGS.map((slug) => {
    const found = projects.find((p) => p.slug === slug);
    if (found) return found;
    return {
      slug,
      client: slug.replace(/-/g, ' ').toUpperCase(),
      title: 'Commercial Production',
      category: 'Content' as const,
      displayCategory: 'Commercial',
      featured: true,
      year: '2026',
      overview: 'Strategic branding and content production.',
      deliverables: ['Brand Strategy', 'Film Production'],
      verifiedResult: 'Verified Impact',
    };
  });

  const activeProject = featuredProjects[activeIndex] || featuredProjects[0];
  const activeTheme = CLIENT_THEMES[activeProject.slug] || CLIENT_THEMES['birlas-parvai'];

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] relative overflow-hidden scroll-mt-20"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
              <span>03 / Featured Work Showcase</span>
            </div>
            <h2 className="section-h2 text-[var(--color-text)] font-heading">
              Crafted for cultural resonance &amp; verified scale<span className="text-[#0047ff]">.</span>
            </h2>
          </div>

          <p className="body-lead text-sm sm:text-base text-[var(--color-muted)] max-w-md font-normal leading-relaxed">
            Hover or tap to explore client transformations across commercial film, visual identity, and high-retention media.
          </p>
        </div>

        {/* ── Interactive Client Selector Pill Bar ── */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
          {featuredProjects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={project.slug}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#0047ff] text-white font-bold shadow-[0_0_20px_rgba(0,71,255,0.4)]'
                    : 'bg-[var(--color-tint)] text-[var(--color-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? 'bg-white' : 'bg-[#0047ff]'
                  }`}
                />
                <span>{project.client}</span>
              </button>
            );
          })}
        </div>

        {/* ── Desktop Expandable Horizontal Accordion (Hidden on mobile < md) ── */}
        <div className="hidden md:flex gap-3 h-[560px] rounded-3xl overflow-hidden p-2 bg-[var(--color-tint)] border border-[var(--color-border)] shadow-2xl">
          {featuredProjects.map((project, idx) => {
            const isActive = idx === activeIndex;
            const theme = CLIENT_THEMES[project.slug] || CLIENT_THEMES['birlas-parvai'];

            return (
              <div
                key={project.slug}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`Featured client: ${project.client}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex flex-col justify-between p-7 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff] ${
                  isActive
                    ? 'flex-[3.5] bg-gradient-to-br ' + theme.bgGradient + ' border border-white/20'
                    : 'flex-[1] bg-black/40 hover:bg-black/60 border border-white/[0.04]'
                }`}
                style={{
                  boxShadow: isActive ? `0 20px 60px -10px ${theme.glowColor}` : 'none',
                }}
              >
                {/* Background Ambient Radial Glow */}
                {isActive && (
                  <div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 transition-opacity duration-700"
                    style={{ background: theme.accentColor }}
                  />
                )}

                {/* Top Row: Index number & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-white/80' : 'text-[var(--color-muted)]'
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  {isActive ? (
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{
                        borderColor: `${theme.accentColor}55`,
                        backgroundColor: `${theme.accentColor}20`,
                        color: '#ffffff',
                      }}
                    >
                      {project.displayCategory}
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  )}
                </div>

                {/* Center / Body: Collapsed view vs Expanded Active view */}
                {!isActive ? (
                  /* Collapsed Vertical Title */
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <span className="font-heading text-lg font-bold text-white/70 tracking-tight [writing-mode:vertical-rl] rotate-180 py-4 transition-colors group-hover:text-white">
                      {project.client}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--color-muted)] mt-2">
                      {project.year}
                    </span>
                  </div>
                ) : (
                  /* Expanded Active Card Content */
                  <div className="relative z-10 my-auto max-w-lg space-y-4 animate-in fade-in duration-500">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/60">
                      {project.title}
                    </div>

                    <h3 className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                      {project.client}
                    </h3>

                    <p className="text-sm text-white/80 font-normal leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Deliverables Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-white/90 border border-white/15"
                        >
                          ✦ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Row */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  {isActive ? (
                    <>
                      {/* High-Impact Result Badge */}
                      <div className="flex items-center gap-2">
                        <TrendingUp
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: theme.accentColor }}
                        />
                        <span className="text-xs font-mono font-bold text-white tracking-wide">
                          {project.verifiedResult}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.youtubeUrl && (
                          <a
                            href={project.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-red-600/20 hover:bg-red-600/30 text-white border border-red-500/40 transition-all hover:scale-105"
                            title="Visit Official YouTube Channel"
                          >
                            <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                            <span>YouTube</span>
                            <ArrowUpRight className="w-3 h-3 text-white/70" />
                          </a>
                        )}

                        {project.instagramUrl && (
                          <a
                            href={project.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white border border-pink-500/40 transition-all hover:scale-105"
                            title="Visit Official Instagram Profile"
                          >
                            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                            <span>Instagram</span>
                            <ArrowUpRight className="w-3 h-3 text-white/70" />
                          </a>
                        )}

                        <AnimatedButton
                          text="Examine Case Study"
                          showArrow
                          variant="secondary"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setInspectorProject(project);
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-full text-center">
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                        EXPAND
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile Stacked Interactive Bento Cards (< md) ── */}
        <div className="flex md:hidden flex-col gap-4">
          {featuredProjects.map((project, idx) => {
            const theme = CLIENT_THEMES[project.slug] || CLIENT_THEMES['birlas-parvai'];

            return (
              <div
                key={project.slug}
                role="button"
                tabIndex={0}
                aria-label={`Examine case study: ${project.client}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setInspectorProject(project);
                  }
                }}
                onClick={() => setInspectorProject(project)}
                className={`rounded-2xl p-6 border transition-all active:scale-[0.99] cursor-pointer bg-gradient-to-br ${theme.bgGradient} border-white/15 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff]`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-white/60">0{idx + 1}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-[10px] font-mono text-white/70 uppercase">
                      {project.displayCategory}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">{project.year}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {project.client}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4 line-clamp-2">
                  {project.overview}
                </p>

                {/* Result, Social & Examine */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white">
                    <TrendingUp className="w-3.5 h-3.5 text-[#0047ff]" />
                    <span>{project.verifiedResult}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 hover:text-white"
                        title="Official YouTube Channel"
                      >
                        <YouTubeIcon className="w-3.5 h-3.5 text-red-400" />
                      </a>
                    )}
                    {project.instagramUrl && (
                      <a
                        href={project.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-full bg-pink-600/20 border border-pink-500/40 text-pink-400 hover:text-white"
                        title="Official Instagram Profile"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                      </a>
                    )}
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-white/90 uppercase font-semibold">
                      <span>Examine</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Link to Full Portfolio Archive ── */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-[var(--color-border)]">
          <div className="text-xs font-mono text-[var(--color-muted)]">
            Explore 7 full case studies across branding, commercial film, and digital platforms.
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--color-text)] hover:text-[#0047ff] transition-colors group font-semibold"
          >
            <span>View Complete Portfolio Archive</span>
            <ArrowUpRight className="w-4 h-4 text-[#0047ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Case Study Slide-Over Drawer */}
      <ProjectInspectorDrawer
        isOpen={!!inspectorProject}
        onClose={() => setInspectorProject(null)}
        project={inspectorProject}
        onOpenScoping={() => {
          const cat = inspectorProject?.category;
          setInspectorProject(null);
          openScopingModal(cat);
        }}
      />
    </section>
  );
}
