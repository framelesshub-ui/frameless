'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize2,
  Sliders,
  Film,
  Layers,
  Volume2,
  Sparkles,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  RotateCcw,
  Activity,
  Scissors,
  Monitor,
  Share2,
  Download,
} from 'lucide-react';

interface ProjectClip {
  id: string;
  slug: string;
  title: string;
  discipline: string;
  category: string;
  startSec: number;
  durationSec: number;
  timecode: string;
  colorAccent: string;
  stats: string;
  trackV1: string;
  trackV2: string;
  trackV3: string;
  audioPeak: number;
  description: string;
  lutName: string;
  colorValues: {
    lift: string;
    gamma: string;
    gain: string;
    saturation: number;
    contrast: number;
  };
}

const PROJECT_CLIPS: ProjectClip[] = [
  {
    id: 'birlas-parvai',
    slug: 'birlas-parvai',
    title: 'Birlas Parvai',
    discipline: 'Automotive Media · YouTube Production',
    category: 'YouTube / Cinema',
    startSec: 0,
    durationSec: 32,
    timecode: '01:00:14:12',
    colorAccent: '#00F0FF',
    stats: '5.2M+ Views · 140+ Episodes',
    trackV1: 'BP_AutoCinema_Master_4K.mov',
    trackV2: 'BP_Roller_Shots_Drone_Broll.mov',
    trackV3: 'BP_Title_LowerThird_Glow',
    audioPeak: 86,
    description: 'High-velocity automotive content platform covering supercars, superbikes, and cinematic road documentary storytelling across India.',
    lutName: 'FH_Cyan_Tungsten_Film_v4',
    colorValues: { lift: '-0.04 (Cool Teal)', gamma: '+0.02 (Neutral)', gain: '+0.08 (Cyan 4K)', saturation: 104, contrast: 1.18 },
  },
  {
    id: 'ora-kitchen',
    slug: 'ora-kitchen',
    title: 'ORA Kitchen',
    discipline: 'Brand Identity · Gastronomy & Hospitality',
    category: 'Branding',
    startSec: 32,
    durationSec: 32,
    timecode: '01:00:46:18',
    colorAccent: '#E5A96E',
    stats: 'Complete Brand Suite · Tactile Packaging',
    trackV1: 'ORA_Culinary_Heritage_Master.mov',
    trackV2: 'ORA_Macro_Plating_Charcoal.mov',
    trackV3: 'ORA_Monogram_Foil_Reveal',
    audioPeak: 72,
    description: 'Tactile artisanal hospitality identity bridging fine dining with ancestral honesty through embossed papers, warm timber, and minimal typography.',
    lutName: 'FH_Warm_Timber_Amber_v2',
    colorValues: { lift: '+0.02 (Warm Earth)', gamma: '+0.05 (Amber)', gain: '+0.03 (Gold Highlight)', saturation: 98, contrast: 1.12 },
  },
  {
    id: 'aura-home',
    slug: 'aura-home',
    title: 'Aura Home',
    discipline: 'Spatial Architecture & Interior Living',
    category: 'Branding / Lifestyle',
    startSec: 64,
    durationSec: 32,
    timecode: '01:01:18:04',
    colorAccent: '#94A3B8',
    stats: 'Spatial Architecture · Digital Catalog',
    trackV1: 'AURA_Spatial_Living_Master.mov',
    trackV2: 'AURA_Architectural_Interiors.mov',
    trackV3: 'AURA_Grid_System_Editorial',
    audioPeak: 64,
    description: 'Calm, architectural spatial identity characterized by generous negative space, refined serif titles, structured grid systems, and cool charcoal tones.',
    lutName: 'FH_Architectural_Monochrome_Slate',
    colorValues: { lift: '-0.02 (Deep Slate)', gamma: '0.00 (Neutral)', gain: '+0.04 (Clean White)', saturation: 88, contrast: 1.22 },
  },
  {
    id: 'krithi-artistry',
    slug: 'krithi-makeover-artistry',
    title: 'Krithi Makeover Artistry',
    discipline: 'Haute Aesthetics · Luxury Personal Branding',
    category: 'Beauty / Personal Brand',
    startSec: 96,
    durationSec: 32,
    timecode: '01:01:50:22',
    colorAccent: '#F472B6',
    stats: 'Haute Branding · High-Ticket Conversions',
    trackV1: 'KRITHI_Haute_Editorial_Master.mov',
    trackV2: 'KRITHI_Macro_Skin_Glow_4K.mov',
    trackV3: 'KRITHI_Signature_Mark_Gold',
    audioPeak: 78,
    description: 'A premium luxury makeup artist brand tailored for high-fashion editorial portfolios, weddings, and high-ticket personal distinction.',
    lutName: 'FH_Haute_Editorial_SkinTone_v1',
    colorValues: { lift: '+0.03 (Rose Tint)', gamma: '+0.04 (Soft Highlight)', gain: '+0.06 (Champagne)', saturation: 102, contrast: 1.14 },
  },
  {
    id: 'frameless-media',
    slug: 'frameless-media',
    title: 'Frameless Media',
    discipline: 'Cinema & Entertainment Media Production',
    category: 'Media / Original Content',
    startSec: 128,
    durationSec: 32,
    timecode: '01:02:22:16',
    colorAccent: '#38BDF8',
    stats: 'Original Media Platform · 10M+ Reach',
    trackV1: 'FM_Celebrity_Interview_Master.mov',
    trackV2: 'FM_Crowd_Interactions_Cinema.mov',
    trackV3: 'FM_Broadcast_Leader_Motion',
    audioPeak: 90,
    description: 'A cinema-focused digital media platform producing unfiltered interviews, cultural public interactions, and high-engagement visual formats.',
    lutName: 'FH_Cinema_Noir_Electric_v3',
    colorValues: { lift: '-0.05 (Film Noir)', gamma: '+0.01 (Cyan Tint)', gain: '+0.09 (Electric Cyan)', saturation: 108, contrast: 1.25 },
  },
];

const TOTAL_TIMELINE_SEC = 160;

export default function DaVinciWorkspace() {
  const [activeTab, setActiveTab] = useState<'edit' | 'color' | 'fairlight' | 'deliver'>('edit');
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTimeSec, setCurrentTimeSec] = useState(14);
  const [safeGuidesEnabled, setSafeGuidesEnabled] = useState(true);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [vuLevel, setVuLevel] = useState({ l: 78, r: 82 });

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const activeClip = PROJECT_CLIPS[activeClipIndex];

  // Playback timer loop
  useEffect(() => {
    if (!isPlaying || isScrubbing) return;

    const interval = setInterval(() => {
      setCurrentTimeSec((prev) => {
        const next = prev + 0.5;
        if (next >= TOTAL_TIMELINE_SEC) return 0;
        return next;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying, isScrubbing]);

  // Synchronize active clip with current time
  useEffect(() => {
    const foundIndex = PROJECT_CLIPS.findIndex((c) => {
      return currentTimeSec >= c.startSec && currentTimeSec < c.startSec + c.durationSec;
    });
    if (foundIndex !== -1 && foundIndex !== activeClipIndex) {
      setActiveClipIndex(foundIndex);
    }
  }, [currentTimeSec, activeClipIndex]);

  // Audio VU Meter gentle flicker
  useEffect(() => {
    if (!isPlaying) {
      setVuLevel({ l: 20, r: 20 });
      return;
    }
    const interval = setInterval(() => {
      const base = activeClip.audioPeak;
      const variationL = Math.floor(Math.random() * 12) - 6;
      const variationR = Math.floor(Math.random() * 12) - 6;
      setVuLevel({
        l: Math.min(Math.max(base + variationL, 30), 96),
        r: Math.min(Math.max(base + variationR, 30), 96),
      });
    }, 180);

    return () => clearInterval(interval);
  }, [isPlaying, activeClip]);

  // Formatted SMPTE timecode (HH:MM:SS:FF)
  const formattedTimecode = useMemo(() => {
    const totalFrames = Math.floor(currentTimeSec * 24);
    const frames = totalFrames % 24;
    const totalSeconds = Math.floor(currentTimeSec);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = 1; // Project master hour 01

    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
  }, [currentTimeSec]);

  // Handle timeline scrubber drag/click
  const handleTimelineScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = clickX / rect.width;
    const newSec = Math.floor(percentage * TOTAL_TIMELINE_SEC);
    setCurrentTimeSec(newSec);
  };

  return (
    <section
      id="workspace"
      className="relative py-20 sm:py-32 bg-transparent text-[#F4F4F5] border-b border-white/[0.08] overflow-hidden"
    >
      {/* Editorial Container */}
      <div className="editorial-container">
        
        {/* Section Header with Pro Audio/Video Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-4">
              <Film className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>CREATIVE PRODUCTION WORKSPACE // EST. 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]">
              The Edit Suite<span className="text-[#00F0FF]">.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            Inspired by professional post-production suites. Live multi-track timeline, color science, and dynamic project monitoring.
          </p>
        </div>

        {/* ── Main Workspace Frame ── */}
        <div className="rounded-2xl border border-white/[0.12] bg-[#0A0A0C]/90 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* 1. Software Top Navigation Bar */}
          <div className="px-4 py-3 bg-[#111114] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-4 select-none">
            {/* Left: Project & Format Info */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />
              <div className="text-xs font-mono font-semibold text-white tracking-wider flex items-center gap-2">
                <span>FRAMELESS_HUB_MASTER_2026.dvr</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-[#00F0FF] font-mono">
                  4K DCI · 24.00 FPS
                </span>
              </div>
            </div>

            {/* Center: Module Mode Switcher */}
            <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-white/[0.06] text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'edit'
                    ? 'bg-white/[0.12] text-white shadow font-semibold'
                    : 'text-[#71717A] hover:text-white'
                }`}
              >
                EDIT
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('color')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'color'
                    ? 'bg-white/[0.12] text-[#00F0FF] shadow font-semibold'
                    : 'text-[#71717A] hover:text-white'
                }`}
              >
                COLOR
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fairlight')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'fairlight'
                    ? 'bg-white/[0.12] text-white shadow font-semibold'
                    : 'text-[#71717A] hover:text-white'
                }`}
              >
                FAIRLIGHT
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('deliver')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'deliver'
                    ? 'bg-white/[0.12] text-white shadow font-semibold'
                    : 'text-[#71717A] hover:text-white'
                }`}
              >
                DELIVER
              </button>
            </div>

            {/* Right: Master Status & Timecode */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#71717A]">PRORES 4444 XQ</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              </div>
              <div className="px-3 py-1 rounded bg-black/60 border border-white/10 text-white font-mono font-bold tracking-wider">
                {formattedTimecode}
              </div>
            </div>
          </div>

          {/* 2. Dual Panel Upper Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            
            {/* Left Panel: Media Pool / Inspector / Color Controls (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-6 bg-[#0E0E11]/70">
              
              {activeTab === 'edit' && (
                <div className="space-y-6">
                  {/* Media Bin Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="text-xs font-mono uppercase tracking-widest text-[#71717A] flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>MASTER MEDIA BIN</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#00F0FF]">
                      {activeClipIndex + 1} OF {PROJECT_CLIPS.length} LOADED
                    </span>
                  </div>

                  {/* Clip Selection Pill Bins */}
                  <div className="space-y-2">
                    {PROJECT_CLIPS.map((clip, idx) => {
                      const isActive = idx === activeClipIndex;
                      return (
                        <button
                          key={clip.id}
                          type="button"
                          onClick={() => {
                            setActiveClipIndex(idx);
                            setCurrentTimeSec(clip.startSec + 4);
                          }}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group ${
                            isActive
                              ? 'bg-white/[0.06] border-[#00F0FF]/50 shadow-[0_0_20px_rgba(0,240,255,0.12)]'
                              : 'bg-black/20 border-white/[0.05] hover:border-white/20 hover:bg-white/[0.02]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: clip.colorAccent }}
                            />
                            <div>
                              <div className="text-xs font-bold text-white tracking-wide group-hover:text-[#00F0FF] transition-colors">
                                {clip.title}
                              </div>
                              <div className="text-[10px] font-mono text-[#71717A]">
                                {clip.discipline}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]">
                              {clip.stats.split('·')[0]}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Clip Inspector Specs */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-2.5 text-xs font-mono">
                    <div className="text-[10px] uppercase tracking-widest text-[#71717A] mb-1">
                      Inspector Metadata
                    </div>
                    <div className="flex items-center justify-between text-[#A1A1AA]">
                      <span>Source Resolution</span>
                      <span className="text-white font-semibold">3840 × 2160 (4K DCI)</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A1A1AA]">
                      <span>Color Science</span>
                      <span className="text-[#00F0FF] font-semibold">{activeClip.lutName}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A1A1AA]">
                      <span>Master Audio Channel</span>
                      <span className="text-white font-semibold">24-Bit / 48kHz Stereo</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'color' && (
                <div className="space-y-6">
                  {/* Color Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="text-xs font-mono uppercase tracking-widest text-[#71717A] flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>COLOR GRADING SUITE</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#00F0FF]">
                      REC.709 MASTER LUT
                    </span>
                  </div>

                  {/* 3 Color Wheels Simulation */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Wheel 1: Lift */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] text-center">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] mb-2">
                        Lift (Shadows)
                      </div>
                      <div className="w-16 h-16 mx-auto rounded-full border border-white/20 relative flex items-center justify-center bg-gradient-to-br from-black via-[#00F0FF]/10 to-transparent">
                        <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                      </div>
                      <div className="text-[9px] font-mono text-[#A1A1AA] mt-2">
                        {activeClip.colorValues.lift}
                      </div>
                    </div>

                    {/* Wheel 2: Gamma */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] text-center">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] mb-2">
                        Gamma (Mids)
                      </div>
                      <div className="w-16 h-16 mx-auto rounded-full border border-white/20 relative flex items-center justify-center bg-gradient-to-br from-black via-[#E5A96E]/10 to-transparent">
                        <span className="w-2 h-2 rounded-full bg-[#E5A96E] shadow-[0_0_8px_#E5A96E]" />
                      </div>
                      <div className="text-[9px] font-mono text-[#A1A1AA] mt-2">
                        {activeClip.colorValues.gamma}
                      </div>
                    </div>

                    {/* Wheel 3: Gain */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] text-center">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] mb-2">
                        Gain (Highs)
                      </div>
                      <div className="w-16 h-16 mx-auto rounded-full border border-white/20 relative flex items-center justify-center bg-gradient-to-br from-black via-white/10 to-transparent">
                        <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                      </div>
                      <div className="text-[9px] font-mono text-[#A1A1AA] mt-2">
                        {activeClip.colorValues.gain}
                      </div>
                    </div>
                  </div>

                  {/* Node Tree Graph */}
                  <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06] space-y-2">
                    <div className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
                      Node Processing Pipeline
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono overflow-x-auto pb-1 text-[#D4D4D8]">
                      <span className="px-2 py-1 rounded bg-white/[0.05] border border-white/10">01: Raw Log</span>
                      <span className="text-[#00F0FF]">→</span>
                      <span className="px-2 py-1 rounded bg-white/[0.05] border border-white/10">02: Primaries</span>
                      <span className="text-[#00F0FF]">→</span>
                      <span className="px-2 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 font-bold">03: FH Film Look</span>
                      <span className="text-[#00F0FF]">→</span>
                      <span className="px-2 py-1 rounded bg-white/[0.05] border border-white/10">04: Grain &amp; Halation</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'fairlight' && (
                <div className="space-y-6">
                  {/* Fairlight Audio Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="text-xs font-mono uppercase tracking-widest text-[#71717A] flex items-center gap-2">
                      <Volume2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>FAIRLIGHT AUDIO ENGINE</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#00F0FF]">
                      DYNAMIC COMPRESSION ON
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-[#A1A1AA] mb-1">
                        <span>A1 Dialogue Peak</span>
                        <span>{vuLevel.l} dB</span>
                      </div>
                      <div className="w-full h-2 rounded bg-black/60 overflow-hidden border border-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500 transition-all duration-150"
                          style={{ width: `${vuLevel.l}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono text-[#A1A1AA] mb-1">
                        <span>A2 Cinematic Score &amp; SFX</span>
                        <span>{vuLevel.r} dB</span>
                      </div>
                      <div className="w-full h-2 rounded bg-black/60 overflow-hidden border border-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500 transition-all duration-150"
                          style={{ width: `${vuLevel.r}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Bespoke spatial sound design, noise suppression, and mastered loudnesses tailored for YouTube, OTT platforms, and commercial theater sound.
                  </p>
                </div>
              )}

              {activeTab === 'deliver' && (
                <div className="space-y-6">
                  {/* Deliver Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="text-xs font-mono uppercase tracking-widest text-[#71717A] flex items-center gap-2">
                      <Download className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>EXPORT &amp; DELIVER PRESETS</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">
                      ALL PASSES VERIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-[#00F0FF]/30 text-white">
                      <div className="font-bold text-[#00F0FF]">ProRes 4444 XQ</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-1">Archival Film Master · 12-Bit</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white">
                      <div className="font-bold">YouTube 4K HDR</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-1">Rec.2020 · 60Mbps Target</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white">
                      <div className="font-bold">Cinema DCI Package</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-1">2.39:1 Scope · 5.1 Surround</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white">
                      <div className="font-bold">Social Vertical 9:16</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-1">1080×1920 · High Bitrate</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/work/${activeClip.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00F0FF] hover:underline"
                    >
                      <span>Inspect {activeClip.title} Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Bottom Project Launch CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href={`/work/${activeClip.slug}`}
                  data-cursor="VIEW"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-[#00F0FF] transition-colors"
                >
                  <span>Open Full Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  data-cursor="START"
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-black bg-[#00F0FF] hover:bg-white transition-colors"
                >
                  Start Scoping
                </Link>
              </div>
            </div>

            {/* Right Panel: Cinema Preview Monitor (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-black/60">
              
              {/* Monitor Top Status */}
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white font-bold tracking-wider">REC LIVE</span>
                  <span className="text-[#A1A1AA]">PROGRAM MONITOR</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSafeGuidesEnabled(!safeGuidesEnabled)}
                    className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                      safeGuidesEnabled
                        ? 'bg-white/[0.08] text-[#00F0FF] border-[#00F0FF]/30'
                        : 'bg-transparent text-[#71717A] border-white/10'
                    }`}
                  >
                    SAFE GUIDES
                  </button>
                  <span className="text-white font-bold">2.39:1 SCOPE</span>
                </div>
              </div>

              {/* Monitor Screen Frame */}
              <div className="relative aspect-video rounded-xl bg-[#050507] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between p-6 group">
                
                {/* 2.39:1 Cinematic Letterbox Bars */}
                <div className="absolute top-0 left-0 right-0 h-[8%] bg-black z-20 pointer-events-none border-b border-white/[0.04]" />
                <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black z-20 pointer-events-none border-t border-white/[0.04]" />

                {/* Safe Title & Action Wireframe Guides */}
                {safeGuidesEnabled && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-[14%] border border-white/[0.08] pointer-events-none z-10"
                  >
                    <div className="absolute inset-[8%] border border-dashed border-white/[0.06]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/20" />
                      <span className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-white/20" />
                    </div>
                  </div>
                )}

                {/* Ambient Cinematic Studio Glow reflecting active project color */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at 60% 40%, ${activeClip.colorAccent} 0%, transparent 70%)`,
                  }}
                />

                {/* Top Screen Overlays */}
                <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[#00F0FF]">
                      TC: {activeClip.timecode}
                    </span>
                    <span className="text-white/60">FPS: 24.00</span>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 uppercase tracking-widest text-xs font-bold text-white">
                    {activeClip.category}
                  </span>
                </div>

                {/* Center Cinema Stage Representation */}
                <div className="relative z-20 text-center max-w-lg mx-auto py-8">
                  <span className="inline-block text-[10px] font-mono tracking-[0.3em] uppercase text-[#00F0FF] mb-2">
                    FRAMELESS PRODUCTION MASTER
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
                    {activeClip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed line-clamp-2 px-4 font-normal">
                    {activeClip.description}
                  </p>
                </div>

                {/* Bottom Screen Overlays */}
                <div className="relative z-20 flex items-end justify-between text-[11px] font-mono text-white/70">
                  <div>
                    <span className="text-[10px] text-[#71717A] uppercase block">ACTIVE TRACK</span>
                    <span className="text-white font-semibold">{activeClip.trackV1}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-[#71717A] uppercase block">VERIFIED METRIC</span>
                    <span className="text-[#00F0FF] font-semibold">{activeClip.stats}</span>
                  </div>
                </div>
              </div>

              {/* Monitor Transport Controls */}
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4 select-none">
                {/* Transport Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentTimeSec(0)}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                    title="Jump to Start"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    data-cursor="PLAY"
                    className="px-4 py-2 rounded-lg bg-white text-black hover:bg-[#00F0FF] font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-colors shadow-lg"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Play</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentTimeSec(TOTAL_TIMELINE_SEC - 1)}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                    title="Jump to End"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                {/* Scrubber Progress Bar */}
                <div className="flex-1 max-w-xs mx-2">
                  <div className="flex justify-between text-[10px] font-mono text-[#71717A] mb-1">
                    <span>TIMELINE SCRUB</span>
                    <span>{Math.round((currentTimeSec / TOTAL_TIMELINE_SEC) * 100)}%</span>
                  </div>
                  <div
                    onClick={handleTimelineScrub}
                    className="w-full h-1.5 rounded-full bg-white/10 cursor-pointer relative overflow-hidden"
                  >
                    <div
                      className="h-full bg-[#00F0FF] rounded-full transition-all duration-100"
                      style={{ width: `${(currentTimeSec / TOTAL_TIMELINE_SEC) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Audio Master Stereo Peak Bar */}
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#A1A1AA]">
                  <Volume2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <div className="w-16 h-2 rounded bg-black/50 overflow-hidden border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-[#00F0FF] transition-all duration-150"
                      style={{ width: `${vuLevel.l}%` }}
                    />
                  </div>
                  <span className="text-white font-bold">{vuLevel.l} dB</span>
                </div>
              </div>

            </div>
          </div>

          {/* 3. Lower Section: Multi-Track Editing Timeline */}
          <div className="p-5 sm:p-6 bg-[#08080A] space-y-4 select-none">
            
            {/* Timeline Header Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-[#71717A] border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold tracking-wider">EDITING TIMELINE // SEQUENCE 01</span>
                <span className="text-[10px] text-[#A1A1AA]">5 ACTIVE MASTER CLIPS</span>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <span className="text-[#00F0FF]">SNAP: ON</span>
                <span>RIPPLE: LOCK</span>
                <span className="text-white">SCALE: FIT</span>
              </div>
            </div>

            {/* Timeline Ruler & Tracks Frame */}
            <div
              ref={timelineRef}
              onClick={handleTimelineScrub}
              data-cursor="SCRUB"
              className="relative rounded-xl bg-[#0E0E12] border border-white/[0.1] p-3 cursor-ew-resize overflow-x-auto"
            >
              {/* Dynamic Animated Playhead (Red Needle with Flag) */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none transition-all duration-100"
                style={{
                  left: `${(currentTimeSec / TOTAL_TIMELINE_SEC) * 100}%`,
                }}
              >
                {/* Playhead Marker Flag */}
                <div className="w-3 h-3 bg-red-500 -translate-x-1/2 rotate-45 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                {/* Playhead Needle Line */}
                <div className="w-0.5 h-full bg-red-500 -translate-x-1/2 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
              </div>

              {/* Timecode Ruler Bar */}
              <div className="flex items-center justify-between text-[9px] font-mono text-[#71717A] border-b border-white/[0.08] pb-2 mb-3">
                <span>00:00:00:00</span>
                <span>00:00:30:00</span>
                <span>00:01:00:00</span>
                <span>00:01:30:00</span>
                <span>00:02:00:00</span>
                <span>00:02:30:00</span>
              </div>

              {/* Track Stack */}
              <div className="space-y-2 text-xs font-mono">
                
                {/* Track V3 (Motion Overlays & Titles) */}
                <div className="flex items-center gap-2">
                  <div className="w-14 text-[10px] text-[#71717A] font-bold">V3 [Titles]</div>
                  <div className="flex-1 grid grid-cols-5 gap-1.5 h-6">
                    {PROJECT_CLIPS.map((clip, i) => (
                      <div
                        key={`v3-${clip.id}`}
                        className={`h-full rounded px-2 flex items-center text-[9px] font-semibold tracking-wider truncate border ${
                          i === activeClipIndex
                            ? 'bg-[#00F0FF]/15 border-[#00F0FF]/40 text-[#00F0FF]'
                            : 'bg-white/[0.02] border-white/[0.04] text-[#71717A]'
                        }`}
                      >
                        {clip.trackV3}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Track V2 (B-Roll & Color Nodes) */}
                <div className="flex items-center gap-2">
                  <div className="w-14 text-[10px] text-[#71717A] font-bold">V2 [B-Roll]</div>
                  <div className="flex-1 grid grid-cols-5 gap-1.5 h-7">
                    {PROJECT_CLIPS.map((clip, i) => (
                      <div
                        key={`v2-${clip.id}`}
                        className={`h-full rounded px-2 flex items-center text-[10px] truncate border ${
                          i === activeClipIndex
                            ? 'bg-white/[0.08] border-white/30 text-white font-medium'
                            : 'bg-white/[0.02] border-white/[0.04] text-[#71717A]'
                        }`}
                      >
                        {clip.trackV2}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Track V1 (Master Cinema Cuts - Primary Project Blocks) */}
                <div className="flex items-center gap-2">
                  <div className="w-14 text-[10px] text-white font-bold">V1 [Master]</div>
                  <div className="flex-1 grid grid-cols-5 gap-1.5 h-12">
                    {PROJECT_CLIPS.map((clip, i) => {
                      const isActive = i === activeClipIndex;
                      return (
                        <div
                          key={`v1-${clip.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveClipIndex(i);
                            setCurrentTimeSec(clip.startSec + 4);
                          }}
                          className={`h-full rounded-lg p-2 flex flex-col justify-between cursor-pointer border transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-white/[0.12] to-white/[0.06] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                              : 'bg-white/[0.03] border-white/[0.06] hover:border-white/20'
                          }`}
                          style={{
                            borderLeftWidth: '4px',
                            borderLeftColor: clip.colorAccent,
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-white tracking-wide truncate">
                              {clip.title}
                            </span>
                            <span className="text-[9px] font-mono text-[#00F0FF]">
                              0{i + 1}
                            </span>
                          </div>
                          <div className="text-[8px] text-[#A1A1AA] truncate font-mono">
                            {clip.trackV1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Track A1 (Dialog / VO Audio Waveforms) */}
                <div className="flex items-center gap-2 pt-1 border-t border-white/[0.06]">
                  <div className="w-14 text-[10px] text-[#71717A] font-bold">A1 [Dialogue]</div>
                  <div className="flex-1 grid grid-cols-5 gap-1.5 h-7">
                    {PROJECT_CLIPS.map((clip, i) => (
                      <div
                        key={`a1-${clip.id}`}
                        className={`h-full rounded px-2 flex items-center justify-between border bg-black/40 ${
                          i === activeClipIndex ? 'border-emerald-500/40' : 'border-white/[0.04]'
                        }`}
                      >
                        {/* Audio Waveform Graphic Simulation */}
                        <div className="flex items-center gap-0.5 w-full h-full py-1">
                          {[40, 70, 30, 90, 60, 45, 80, 50, 65, 35, 95, 55, 75, 40, 85, 60].map((h, wi) => (
                            <span
                              key={wi}
                              className={`flex-1 rounded-full transition-all ${
                                i === activeClipIndex
                                  ? 'bg-emerald-400'
                                  : 'bg-white/20'
                              }`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Track A2 (Score / SFX Audio Waveforms) */}
                <div className="flex items-center gap-2">
                  <div className="w-14 text-[10px] text-[#71717A] font-bold">A2 [Score/SFX]</div>
                  <div className="flex-1 grid grid-cols-5 gap-1.5 h-7">
                    {PROJECT_CLIPS.map((clip, i) => (
                      <div
                        key={`a2-${clip.id}`}
                        className={`h-full rounded px-2 flex items-center justify-between border bg-black/40 ${
                          i === activeClipIndex ? 'border-[#00F0FF]/40' : 'border-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-0.5 w-full h-full py-1">
                          {[30, 50, 80, 60, 40, 95, 70, 50, 85, 65, 45, 75, 55, 90, 35, 60].map((h, wi) => (
                            <span
                              key={wi}
                              className={`flex-1 rounded-full transition-all ${
                                i === activeClipIndex
                                  ? 'bg-[#00F0FF]'
                                  : 'bg-white/15'
                              }`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Timeline Footer Legend */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A] pt-2">
              <div className="flex items-center gap-4">
                <span>PRESS PLAY OR DRAG PLAYHEAD TO AUDITION PROJECTS</span>
                <span className="hidden sm:inline-block">•</span>
                <span className="hidden sm:inline-block text-[#A1A1AA]">
                  CLICK ANY CLIP BLOCK TO INSPECT CLIENT CASE STUDY
                </span>
              </div>

              <div className="text-[#00F0FF]">
                TOTAL RUNTIME: 02:40:00 (MASTER CONFORMED)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
