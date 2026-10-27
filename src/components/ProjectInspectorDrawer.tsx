'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowUpRight, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import { Project } from '@/data/projects';
import AnimatedButton from '@/components/AnimatedButton';

interface ProjectInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  onOpenScoping?: () => void;
}

export default function ProjectInspectorDrawer({
  isOpen,
  onClose,
  project,
  onOpenScoping,
}: ProjectInspectorDrawerProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end select-none">
      {/* Backdrop with smooth blur */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Luxury Slide-Over Drawer Surface */}
      <aside
        className="relative z-10 w-full max-w-xl h-full bg-[#08090d] border-l border-white/10 text-[#F4F4F5] flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden select-text animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.client} Case Study`}
      >
        {/* Top Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-white/[0.08] flex items-center justify-between select-none bg-black/40">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0047ff]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/80 font-bold">
              Case Study Spotlight
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Client Title Block */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0047ff] uppercase tracking-wider mb-2">
              <span>{project.displayCategory}</span>
              <span>•</span>
              <span className="text-white/40">{project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
              {project.client}
            </h2>
            <p className="text-base text-white/70 mt-2 font-normal leading-relaxed">
              {project.title}
            </p>
          </div>

          {/* Section 1: Overview & Strategic Challenge */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#0047ff] font-semibold">
              The Strategic Hurdle
            </div>
            <p className="text-sm text-white/90 leading-relaxed font-normal">
              {project.challenge || project.overview}
            </p>
          </div>

          {/* Section 2: What We Delivered & Strategy */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#0047ff] font-semibold">
              Creative Strategy &amp; Execution
            </div>
            <p className="text-sm text-white/90 leading-relaxed font-normal">
              {project.strategy ||
                'Paced scene rhythms, custom visual hooks, and structured creative positioning engineered for maximum cultural relevance and audience stickiness.'}
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2.5">
                Delivered Assets:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-mono text-white/90 bg-white/[0.06] border border-white/10 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Verified Audience & Business Impact */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0047ff]/15 via-black/40 to-black/20 border border-[#0047ff]/40 space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0047ff] font-semibold">
              <TrendingUp className="w-4 h-4 text-[#0047ff]" />
              <span>Verified Impact &amp; Results</span>
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
              {project.verifiedResult || 'Verified High-Retention Production'}
            </div>
            <p className="text-xs text-white/60 font-normal leading-relaxed">
              Performance verified through organic channel performance metrics, platform analytics, and measurable client revenue lift.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-black/60 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 select-none">
          <Link
            href={`/work/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
          >
            <span>Full Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {onOpenScoping && (
            <AnimatedButton
              text="Start a Project Like This"
              showArrow
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenScoping();
              }}
            />
          )}
        </div>
      </aside>
    </div>
  );
}
