'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Film,
  Scissors,
  CheckCircle2,
  Sliders,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';

interface PipelineStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  tokens: string[];
  telemetry: { label: string; value: string }[];
  visualHeadline: string;
  visualDetail: string;
  codeSnippet: string;
  colorAccent: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'idea',
    stepNumber: '01',
    title: 'IDEA',
    subtitle: 'Strategic Prompt & Core Narrative',
    tagline: 'Transforming business objectives into an undeniable cinematic thesis.',
    tokens: ['CULTURAL TENSION', 'AUDIENCE PSYCHOLOGY', 'BRAND TRUTH', 'NARRATIVE HOOK'],
    telemetry: [
      { label: 'Strategic Alignment', value: '100% Verified' },
      { label: 'Narrative Tension', value: 'High Engagement' },
      { label: 'Distribution Target', value: 'Multi-Platform' },
    ],
    visualHeadline: 'A brand film is only as memorable as its core tension.',
    visualDetail:
      'We deconstruct your market position and uncover the exact story that competitors are afraid to tell. No generic corporate speak—only culturally resonant narratives.',
    codeSnippet: `// 01_PROMPT_ARCHITECTURE
const narrativeThesis = {
  hook: "Why settle for being noticed when you can be remembered?",
  tension: "Heritage craftsmanship vs. modern hyper-acceleration",
  targetEmotion: "Immediate desire & unquestioned authority"
};`,
    colorAccent: '#00F0FF',
  },
  {
    id: 'storyboard',
    stepNumber: '02',
    title: 'STORYBOARD',
    subtitle: 'Scene Design & Framing Architecture',
    tagline: 'Translating narrative into precise 2.39:1 anamorphic shot design.',
    tokens: ['ASPECT 2.39:1', 'ANAMORPHIC PRIMES', 'LIGHTING SCHEMATICS', 'PACING CURVE'],
    telemetry: [
      { label: 'Shot Density', value: '28 Planned Setups' },
      { label: 'Color Philosophy', value: 'Cool Teal / Warm Skin' },
      { label: 'Aspect Ratio', value: 'Cinemascope 2.39:1' },
    ],
    visualHeadline: 'Every cut and focal length is engineered before camera roll.',
    visualDetail:
      'We plan framing, camera motion vectors, lighting temperatures, and rhythmic transitions into a storyboard blueprint that ensures zero guesswork on set.',
    codeSnippet: `// 02_STORYBOARD_BREAKDOWN
Sequence_01 = {
  shot_A: "Low-angle high-speed tracking (48 FPS, 35mm T1.5)",
  shot_B: "Extreme macro lens flare through titanium exhaust",
  transition: "Sound-bridge match-cut into interior stillness"
};`,
    colorAccent: '#38BDF8',
  },
  {
    id: 'shoot',
    stepNumber: '03',
    title: 'SHOOT',
    subtitle: 'Cinema Production & Dynamic Capture',
    tagline: 'Capturing optical purity on set with cinema cameras and specialized rigs.',
    tokens: ['4K DCI LOG', '180° SHUTTER', 'GIMBAL TELEMETRY', 'SPATIAL SOUND'],
    telemetry: [
      { label: 'Sensor Dynamic Range', value: '16+ Stops Log' },
      { label: 'Frame Rate', value: '24.00 / 60.00 / 120 FPS' },
      { label: 'Audio Capture', value: '32-Bit Float Multi-Track' },
    ],
    visualHeadline: 'Physical production with commercial cinema discipline.',
    visualDetail:
      'From automotive tracking vehicles to bespoke studio lighting grids, we capture real optical character that computer graphics cannot duplicate.',
    codeSnippet: `// 03_CAMERA_LOG_BUFFER
Camera_A = {
  codec: "Apple ProRes 4444 XQ 12-Bit",
  resolution: "3840 x 2160 DCI",
  colorSpace: "Arri LogC4 / DaVinci Wide Gamut",
  fps: "24.00 Native Sync"
};`,
    colorAccent: '#60A5FA',
  },
  {
    id: 'edit',
    stepNumber: '04',
    title: 'EDIT',
    subtitle: 'Post-Production, Color Science & Sound',
    tagline: 'DaVinci Resolve color grading, rhythmic assembly, and mastered acoustics.',
    tokens: ['DAVINCI COLOR', 'NODE PIPELINE', 'FAIRLIGHT 5.1', 'HALATION & GRAIN'],
    telemetry: [
      { label: 'Color Pipeline', value: 'Custom Frameless Film LUT' },
      { label: 'Audio Master', value: '-14 LUFS Multi-Platform' },
      { label: 'Timeline Resolution', value: 'Conformed 4K DCI' },
    ],
    visualHeadline: 'Sculpting light, rhythm, and sound into hypnotic flow.',
    visualDetail:
      'Precision pacing separates good videos from legendary films. We color grade with proprietary 35mm film emulation curves and engineer multi-layer sound design.',
    codeSnippet: `// 04_POST_COLOR_GRADE
Grade_Nodes = [
  "01_Input_Log_Transform",
  "02_Exposure_Contrast_Primary",
  "03_Frameless_Cyan_Warmth_LUT",
  "04_Organic_Film_Grain_Halation"
];`,
    colorAccent: '#818CF8',
  },
  {
    id: 'final',
    stepNumber: '05',
    title: 'FINAL CONTENT',
    subtitle: 'Multi-Channel Deployment & Real Reach',
    tagline: 'Delivering verified audience scale, millions of views, and brand equity.',
    tokens: ['10M+ VIEWS', '399+ DELIVERED', 'MULTI-FORMAT', 'HIGH CONVERSION'],
    telemetry: [
      { label: 'Verified Reach', value: '10M+ Organic Views' },
      { label: 'Export Quality', value: 'Zero Compression Artifacts' },
      { label: 'Retention Rate', value: '+45% Above Industry Avg' },
    ],
    visualHeadline: 'Creative work that commands attention and drives revenue.',
    visualDetail:
      'The finished film launches across YouTube, Instagram, OTT platforms, and commercial campaigns—transforming views into brand loyalty and client growth.',
    codeSnippet: `// 05_DELIVERY_METRICS
Deployment_Status = {
  status: "100% COMPLETE // DELIVERED",
  retention: "Superlative Audience Engagement",
  commercialImpact: "Hard to forget. Impossible to ignore."
};`,
    colorAccent: '#00F0FF',
  },
];

export default function CreativeFlowPipeline() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = PIPELINE_STAGES[activeStageIndex];

  return (
    <section className="relative py-24 sm:py-36 bg-transparent text-[#F4F4F5] border-b border-white/[0.08] overflow-hidden">
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-4">
              <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>THE CREATIVE FLOW PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Idea to Master Output<span className="text-[#00F0FF]">.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            Inspired by modern generative creative workflows. A connected production pipeline where strategy seamlessly transforms into finished cinema.
          </p>
        </div>

        {/* ── Connected Flow Stepper Navigation ── */}
        <div className="mb-12 relative select-none">
          {/* Connector Rail Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-white/[0.08] z-0" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  data-cursor="EXPLORE"
                  className={`p-4 rounded-xl border transition-all text-left group flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0E0E12] border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.18)] scale-[1.02]'
                      : isPast
                      ? 'bg-black/40 border-white/[0.12] hover:border-white/30'
                      : 'bg-black/20 border-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest ${
                        isActive ? 'text-[#00F0FF]' : 'text-[#71717A]'
                      }`}
                    >
                      STAGE {stage.stepNumber}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isActive
                          ? 'bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]'
                          : isPast
                          ? 'bg-white/40'
                          : 'bg-white/10'
                      }`}
                    />
                  </div>

                  <div>
                    <div
                      className={`text-sm font-black tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-[#A1A1AA] group-hover:text-white'
                      }`}
                    >
                      {stage.title}
                    </div>
                    <div className="text-[10px] font-mono text-[#71717A] truncate mt-0.5">
                      {stage.subtitle.split('&')[0]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Stage Presentation Canvas (Two Column Interactive Display) ── */}
        <div className="rounded-2xl border border-white/[0.1] bg-[#0A0A0D]/90 backdrop-blur-xl p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Stage Narrative & Actionable Insights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF]">
                STAGE {activeStage.stepNumber} OF 05
              </span>
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                {activeStage.subtitle}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
              {activeStage.visualHeadline}
            </h3>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
              {activeStage.visualDetail}
            </p>

            {/* Token Badges */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                Discipline Artifacts &amp; Directives
              </span>
              <div className="flex flex-wrap gap-2">
                {activeStage.tokens.map((token) => (
                  <span
                    key={token}
                    className="text-[11px] font-mono px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white"
                  >
                    ✦ {token}
                  </span>
                ))}
              </div>
            </div>

            {/* Telemetry Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs font-mono">
              {activeStage.telemetry.map((t) => (
                <div key={t.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[9px] text-[#71717A] uppercase">{t.label}</div>
                  <div className="text-xs font-bold text-white mt-0.5">{t.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Simulated Pipeline Code / Terminal Inspector (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/[0.1] bg-[#050507] overflow-hidden shadow-2xl">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#111114] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-[11px] font-mono text-[#A1A1AA] ml-1">
                    pipeline_{activeStage.id}.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00F0FF] uppercase">
                  ACTIVE EXECUTION
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-[#A1A1AA] bg-black/60 overflow-x-auto">
                <pre className="text-white/90 whitespace-pre font-mono">
                  <code>{activeStage.codeSnippet}</code>
                </pre>
              </div>

              {/* Pipeline Quick Progress Bar */}
              <div className="p-4 bg-[#09090C] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : PIPELINE_STAGES.length - 1))
                  }
                  className="text-[#71717A] hover:text-white transition-colors"
                >
                  ← Previous
                </button>

                <span className="text-[#00F0FF]">
                  {Math.round(((activeStageIndex + 1) / PIPELINE_STAGES.length) * 100)}% Through Pipeline
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setActiveStageIndex((prev) => (prev < PIPELINE_STAGES.length - 1 ? prev + 1 : 0))
                  }
                  className="text-[#71717A] hover:text-white transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
