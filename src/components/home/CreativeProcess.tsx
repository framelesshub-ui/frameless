'use client';

import React, { useState } from 'react';
import {
  Lightbulb,
  Compass,
  Film,
  Sparkles,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import { useScopingModal } from '@/context/ScopingModalContext';

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  tagline: string;
  insight: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Idea',
    subtitle: 'Strategic Positioning & Core Narrative',
    tagline: 'Uncovering the singular brand truth that competitors are unable to replicate.',
    insight:
      'We never begin with disposable aesthetic templates. We deconstruct your market tension to discover the exact story that commands authority and cultural relevance.',
    deliverables: [
      'Market & Audience Psychology',
      'Core Brand Narrative Thesis',
      'Hook Architecture & Story Arc',
      'Multi-Channel Distribution Strategy',
    ],
    metrics: [
      { label: 'Strategic Alignment', value: '100% Focused' },
      { label: 'Narrative Rigor', value: 'Zero Fluff' },
      { label: 'Deliverable', value: 'Creative Blueprint' },
    ],
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Storyboard',
    subtitle: 'Visual Architecture & Scene Blueprint',
    tagline: 'Mapping every frame, pacing rhythm, and camera transition before rolling.',
    insight:
      'Precise visual pre-production eliminates guesswork on set. Every scene, camera angle, lighting cue, and transition is locked to maximize retention.',
    deliverables: [
      'Comprehensive Scene-by-Scene Boards',
      'Cinematic Color & Lighting Palettes',
      'Talent, Location & Wardrobe Direction',
      'Scene Pacing & Narrative Rhythm',
    ],
    metrics: [
      { label: 'Pre-Viz Coverage', value: 'Frame-by-Frame' },
      { label: 'Production Safety', value: 'Zero Downtime' },
      { label: 'Deliverable', value: 'Master Director Deck' },
    ],
    icon: Compass,
  },
  {
    step: '03',
    title: 'Shoot',
    subtitle: 'Commercial Camera Direction & Lighting Craft',
    tagline: 'Capturing optical purity with cinema cameras, specialized rigs, and spatial audio.',
    insight:
      'We bring commercial set discipline to every production—employing precision camera motion, bespoke lighting grids, and authentic human performances that computer graphics cannot duplicate.',
    deliverables: [
      '4K DCI Multi-Camera Production',
      'High-Speed Dynamic B-Roll & Macro Rigs',
      '32-Bit Multi-Track Acoustic Recording',
      'On-Set Lighting & Direction Oversight',
    ],
    metrics: [
      { label: 'Camera Dynamic Range', value: '16+ Stops' },
      { label: 'Audio Fidelity', value: '32-Bit Float' },
      { label: 'Deliverable', value: 'Conformed RAW Footage' },
    ],
    icon: Film,
  },
  {
    step: '04',
    title: 'Craft',
    subtitle: 'Precision Assembly, Visual Grading & Sound Design',
    tagline: 'Sculpting scene rhythm, bespoke visual grading, and rich acoustic mixes.',
    insight:
      'Where raw footage transforms into finished cinema. We pace cuts to heartbeat rhythms, calibrate nuanced color tones, and design immersive audio textures that hold viewer attention.',
    deliverables: [
      'Rhythmic Editorial Assembly',
      'Bespoke Visual Color Palette',
      'Surround Sound Design & Foley Mixing',
      'Kinetic Motion Design & Clean Titles',
    ],
    metrics: [
      { label: 'Audio Standard', value: 'Mastered Studio Audio' },
      { label: 'Finishing Standard', value: 'Master 4K' },
      { label: 'Deliverable', value: 'Fine-Cut Master' },
    ],
    icon: Sparkles,
  },
  {
    step: '05',
    title: 'Launch',
    subtitle: 'Multi-Channel Deployment & High-Retention Reach',
    tagline: 'Delivering verified audience scale, millions of views, and enduring brand equity.',
    insight:
      'The finished work launches with surgical timing across YouTube, social networks, and paid campaigns—turning viewer impressions into passionate customers and tangible revenue growth.',
    deliverables: [
      'Lossless Multi-Platform Encoding',
      'High-Retention Shorts & Reels Derivatives',
      'YouTube Packaging (Thumbnails & Hooks)',
      'Performance Analytics & Retention Tracking',
    ],
    metrics: [
      { label: 'Proven Scale', value: '10M+ Views' },
      { label: 'Retention Lift', value: '+45% Above Avg' },
      { label: 'Deliverable', value: 'Omni-Channel Asset Suite' },
    ],
    icon: Rocket,
  },
];

export default function CreativeProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const { openScopingModal } = useScopingModal();

  const current = PROCESS_STEPS[activeStep];
  const IconComponent = current.icon;

  const nextStep = () => {
    setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1));
  };

  return (
    <section
      id="process"
      className="py-24 sm:py-36 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] relative overflow-hidden"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
              <span>04 / The Creative Process</span>
            </div>
            <h2 className="section-h2 text-[var(--color-text)] font-heading">
              From strategic hypothesis to master execution<span className="text-[#0047ff]">.</span>
            </h2>
          </div>

          <p className="body-lead text-sm sm:text-base text-[var(--color-muted)] max-w-md font-normal leading-relaxed">
            A disciplined 5-stage production methodology engineered to turn bold ideas into undeniable brand presence.
          </p>
        </div>

        {/* ── 5-Step Progress Stepper Bar ── */}
        <div className="mb-10 sm:mb-14">
          {/* Stepper Tabs */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4 relative select-none">
            {PROCESS_STEPS.map((s, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <button
                  key={s.step}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-current={isActive ? 'step' : undefined}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-3 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff] ${
                    isActive
                      ? 'bg-[var(--color-tint)] border-[#0047ff]/60 shadow-[0_8px_30px_rgba(0,71,255,0.12)]'
                      : isPast
                      ? 'bg-black/20 hover:bg-black/30 border-white/10 text-white/80'
                      : 'bg-black/10 hover:bg-black/20 border-white/[0.06] text-[var(--color-muted)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[10px] sm:text-xs font-bold ${
                        isActive ? 'text-[#0047ff]' : 'text-[var(--color-muted)]'
                      }`}
                    >
                      {s.step}
                    </span>
                    {isPast && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 hidden sm:inline" />
                    )}
                  </div>
                  <div className="font-heading text-xs sm:text-base font-bold text-[var(--color-text)] tracking-tight truncate">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Connected Progress Line */}
          <div className="w-full h-1 bg-white/[0.08] rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0047ff] to-[#38bdf8] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* ── Active Stage Presentation Card ── */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[var(--color-tint)] border border-[var(--color-border)] shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0047ff]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Stage Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0047ff]/15 border border-[#0047ff]/30 flex items-center justify-center text-[#0047ff]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#0047ff] uppercase tracking-widest font-semibold">
                    PHASE {current.step} OF 05
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-[var(--color-text)] tracking-tight">
                    {current.title} — {current.subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[var(--color-text)] font-medium leading-relaxed">
                {current.tagline}
              </p>

              <blockquote className="p-4 sm:p-5 rounded-2xl bg-black/30 border-l-2 border-[#0047ff] text-sm sm:text-base text-[var(--color-muted)] leading-relaxed italic">
                “{current.insight}”
              </blockquote>

              {/* Deliverables Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)]">
                  Core Stage Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-text)] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Metrics & Stepper Navigation (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-l lg:border-[var(--color-border)] lg:pl-10">
              {/* Metrics Box */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)]">
                  Quality Standards:
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {current.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between"
                    >
                      <span className="text-xs text-[var(--color-muted)] font-mono">{m.label}</span>
                      <span className="text-sm font-mono font-bold text-white">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls & Scoping CTA */}
              <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="p-2.5 rounded-full border border-[var(--color-border)] hover:border-white/40 text-[var(--color-text)] hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="p-2.5 rounded-full border border-[var(--color-border)] hover:border-white/40 text-[var(--color-text)] hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Next step"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <AnimatedButton
                  text="Start Scoping"
                  showArrow
                  variant="primary"
                  size="sm"
                  onClick={() => openScopingModal()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
