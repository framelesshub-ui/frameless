'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sliders } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import ProjectInspectorDrawer from '@/components/ProjectInspectorDrawer';
import { useScopingModal } from '@/context/ScopingModalContext';

export default function SelectedWork() {
  const [selectedInspectorProject, setSelectedInspectorProject] = useState<Project | null>(null);
  const { openScopingModal } = useScopingModal();

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[var(--color-tint)] text-[var(--color-text)] border-t border-[var(--color-border)] scroll-reveal">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-12 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
            <span>06 / Selected Portfolio</span>
          </div>
          <h2 className="section-h2 text-[var(--color-text)] font-heading">
            Selected projects.
          </h2>
        </div>

        {/* 7 Projects Clean Full-Width Rows */}
        <div className="border-b border-[var(--color-border)]">
          {projects.map((project) => {
            const metricText = project.verifiedResult
              ? project.verifiedResult.replace(/Channel Views/i, 'views').trim()
              : 'Case study';
            const servicesText = project.deliverables.join(' · ');

            return (
              <div
                key={project.slug}
                className="project-row-item group relative focus-within:ring-2 focus-within:ring-[#0047ff]"
              >
                {/* ScaleY Blue Background Fill Layer */}
                <div className="project-row-fill" />

                {/* Content Layer (z-10 above fill) */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
                  {/* Project Name (4 cols on desktop, 1 col on mobile) */}
                  <div className="sm:col-span-4 lg:col-span-3">
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-text)] group-hover:text-white transition-colors duration-300 block focus:outline-none"
                    >
                      {project.client}
                    </Link>
                  </div>

                  {/* Category (2 cols) */}
                  <div className="sm:col-span-3 lg:col-span-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] group-hover:text-white/80 transition-colors duration-300">
                      {project.displayCategory}
                    </span>
                  </div>

                  {/* Services (4 cols) */}
                  <div className="sm:col-span-2 lg:col-span-4">
                    <p className="text-xs sm:text-sm text-[var(--color-muted)] group-hover:text-white/90 transition-colors duration-300 line-clamp-2">
                      {servicesText}
                    </p>
                  </div>

                  {/* Metric & Examine Button (3 cols) */}
                  <div className="sm:col-span-3 lg:col-span-3 flex items-center justify-between sm:justify-end gap-2.5">
                    <span className="project-metric-badge text-xs font-mono font-medium px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] group-hover:bg-white/20 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                      {metricText}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedInspectorProject(project)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/[0.1] hover:bg-white/25 text-[var(--color-text)] group-hover:text-white transition-all duration-200 border border-transparent group-hover:border-white/20"
                      title="Examine Project Specs"
                    >
                      <span>Examine</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Inspector Drawer */}
      <ProjectInspectorDrawer
        isOpen={!!selectedInspectorProject}
        onClose={() => setSelectedInspectorProject(null)}
        project={selectedInspectorProject}
        onOpenScoping={openScopingModal}
      />
    </section>
  );
}
