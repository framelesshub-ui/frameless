'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, Film, Sliders, Volume2, Activity, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Project } from '@/data/projects';

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

  const specs = project.specs || {
    resolution: '4K DCI (3840 × 2160)',
    fps: '24.00 FPS Cinema Standard',
    codec: 'Apple ProRes 4444 XQ',
    lut: 'FH_Cyan_Tungsten_Film_v4',
    audioTarget: '-14.0 LUFS Broadcast Standard',
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Surface */}
      <aside
        className="relative z-10 w-full max-w-2xl h-full bg-[#0B0C10] border-l border-white/10 text-[#F4F4F5] flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden select-text animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-label={`${project.client} Inspector`}
      >
        {/* Top NLE Telemetry Bar */}
        <div className="px-6 py-4 bg-[#111217] border-b border-white/[0.08] flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <div className="text-xs font-mono font-bold tracking-wider text-white">
              INSPECTOR // {project.slug.toUpperCase()}
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[#A1A1AA]">
              MASTER RECORD
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white transition-colors"
            aria-label="Close Inspector"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Project Title Block */}
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#00F0FF] uppercase tracking-wider mb-2">
              <span>{project.displayCategory}</span>
              <span>•</span>
              <span className="text-[#71717A]">{project.year}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {project.client}
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 font-normal leading-relaxed">
              {project.title}
            </p>
          </div>

          {/* Section 1: The Brief / Challenge */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF]">
              <Film className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>01 // THE BRIEF &amp; STRATEGIC HURDLE</span>
            </div>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed font-normal">
              {project.challenge || project.overview}
            </p>
          </div>

          {/* Section 2: Retention & Creative Strategy */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF]">
              <Activity className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>02 // RETENTION &amp; CREATIVE ARCHITECTURE</span>
            </div>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed font-normal">
              {project.strategy ||
                'Paced scene rhythms, custom visual hooks in the initial 15 seconds, and structured chapter sequencing engineered for maximum viewer stickiness.'}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono text-[#E4E4E7] bg-white/[0.04] border border-white/[0.08]"
                >
                  ✦ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Section 3: Technical Production Specs */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF]">
                <Sliders className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>03 // CINEMA HUD TELEMETRY &amp; SPECS</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">VERIFIED SPEC</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] text-[#71717A] uppercase block">RESOLUTION</span>
                <span className="text-white font-semibold">{specs.resolution}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] text-[#71717A] uppercase block">FRAME RATE</span>
                <span className="text-white font-semibold">{specs.fps}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] text-[#71717A] uppercase block">MASTER CODEC</span>
                <span className="text-white font-semibold">{specs.codec}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] text-[#71717A] uppercase block">COLOR SCIENCE</span>
                <span className="text-[#00F0FF] font-semibold truncate block">{specs.lut}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] sm:col-span-2">
                <span className="text-[10px] text-[#71717A] uppercase block">BROADCAST AUDIO</span>
                <span className="text-emerald-400 font-semibold">{specs.audioTarget}</span>
              </div>
            </div>
          </div>

          {/* Section 4: Verified Performance Results */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#00F0FF]/10 via-transparent to-transparent border border-[#00F0FF]/30 space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>04 // VERIFIED AUDIENCE &amp; BUSINESS IMPACT</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {project.verifiedResult || 'Verified High-Retention Production'}
            </div>
            <p className="text-xs text-[#A1A1AA] font-normal leading-relaxed">
              Performance metrics confirmed across production telemetry, client audience analytics, and live distribution streams.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-[#111217] border-t border-white/[0.08] flex items-center justify-between gap-4 select-none">
          <Link
            href={`/work/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors"
          >
            <span>Open Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {onOpenScoping && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenScoping();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>Scope Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
