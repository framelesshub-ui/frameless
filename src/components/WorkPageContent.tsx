'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import CTASection from './CTASection';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  tag: string;
  year: string;
  metric: string;
  metricLabel: string;
  deliverables: string[];
  summary: string;
  videoUrl?: string;
  imageUrl?: string;
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    id: 'birlas-parvai-film',
    title: "Birla's Parvai — Cinematic Brand Film",
    client: "Birla's Parvai",
    category: 'Commercials',
    tag: 'Flagship Commercial',
    year: '2025',
    metric: '+380%',
    metricLabel: 'Organic Reach',
    deliverables: ['Creative Direction', 'Color Grading', 'Sound Design', 'Master Edit'],
    summary: 'A flagship cinematic narrative bringing raw emotional resonance together with modern high-contrast color grading and bespoke sound design.',
    videoUrl: '/videos/video-1.mov',
    accentColor: '#00D9F5',
  },
  {
    id: 'automotive-campaign',
    title: 'High-Performance Automotive Campaign',
    client: 'Commercial Automotive',
    category: 'Commercials',
    tag: 'Commercial Photography & Film',
    year: '2025',
    metric: '4.8M',
    metricLabel: 'Global Impressions',
    deliverables: ['Cinema Lighting', 'Visual Direction', 'Ad Placement', 'Creative Strategy'],
    summary: 'High-contrast dynamic automotive commercial capturing speed, precision engineering, and luxury aesthetic for high-intent audience acquisition.',
    imageUrl: '/campaigns/automotive.jpg',
    accentColor: '#4169FF',
  },
  {
    id: 'birlas-parvai-reels',
    title: "Birla's Parvai — High-Retention Content",
    client: "Birla's Parvai",
    category: 'Content Creation',
    tag: 'Viral Reels & Short Form',
    year: '2025',
    metric: '89%',
    metricLabel: 'Watch-Through Rate',
    deliverables: ['Short-Form Direction', 'Micro-Animations', 'Sound Mixing', 'Trend Strategy'],
    summary: 'Precision-engineered short-form content with split-second hooks and dynamic kinetic typography crafted to beat algorithm retention benchmarks.',
    videoUrl: '/videos/video-2.mov',
    accentColor: '#725BFF',
  },
  {
    id: 'poetry-and-grammar',
    title: 'Poetry and Grammar — Brand Identity System',
    client: 'Poetry and Grammar',
    category: 'Branding',
    tag: 'Brand Identity & Systems',
    year: '2024',
    metric: '+210%',
    metricLabel: 'Brand Recall Lift',
    deliverables: ['Visual Identity', 'Typography Hierarchy', 'Packaging', 'Social Guidelines'],
    summary: 'An uncompromising design system blending editorial minimalism and refined literary aesthetics for an elevated luxury identity.',
    videoUrl: '/videos/video-3.mov',
    accentColor: '#00D9F5',
  },
  {
    id: 'sweepers-performance',
    title: 'Sweepers — Conversion Ad Creative Engine',
    client: 'Sweepers',
    category: 'Performance Ads',
    tag: 'Paid Performance Creative',
    year: '2024',
    metric: '14.2x',
    metricLabel: 'Peak ROAS Achieved',
    deliverables: ['Paid Social Creatives', 'UGC Direction', 'Direct Response Copy', 'Split Testing'],
    summary: 'Performance marketing creatives built around high-impact hook variations, psychological triggers, and frictionless direct-response CTA architectures.',
    videoUrl: '/videos/video-5.mov',
    accentColor: '#10B981',
  },
  {
    id: 'dindigul-srinivasan',
    title: 'Dindigul Srinivasan — AI Video Synthesis',
    client: 'Dindigul Srinivasan Ex MLA',
    category: 'AI Video',
    tag: 'AI Video & Motion Graphics',
    year: '2025',
    metric: '1.2M+',
    metricLabel: 'Public Stream Views',
    deliverables: ['Generative Motion', 'Editorial Pacing', 'Public Outreach', 'Social Distribution'],
    summary: 'Next-generation AI motion synthesis and high-speed video asset generation communicating complex political leadership initiatives to mass audiences.',
    videoUrl: '/videos/video-4.mov',
    accentColor: '#F59E0B',
  },
];

const CATEGORIES = ['All', 'Commercials', 'Content Creation', 'Branding', 'Performance Ads', 'AI Video'] as const;

export default function WorkPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<Project | null>(null);

  // Modal Video States
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((item) => item.category === activeCategory);

  const handleOpenModal = (project: Project) => {
    setActiveModalItem(project);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const handleCloseModal = () => {
    setActiveModalItem(null);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (modalVideoRef.current) {
      setDuration(modalVideoRef.current.duration || 0);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    if (activeModalItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalItem]);

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-accent-blue/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* ── 1. Page Header ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
                SELECTED CASE STUDIES • 2024–2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]"
            >
              Proof of <span className="gradient-remember">impact.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-white/50 max-w-lg leading-relaxed font-normal lg:text-left"
          >
            A curated index of commercials, viral content engines, and brand systems engineered to dominate feeds and deliver compound returns.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-white/[0.08]"
        >
          {CATEGORIES.map((cat) => {
            const count = cat === 'All'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                    : 'bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-white/40 group-hover:text-white/70'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── 2. Editorial Asymmetrical Portfolio Showcase ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Featured Full-Width Spotlight (Birla's Parvai Film) */}
          {filtered.some((p) => p.id === 'birlas-parvai-film') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-12 group relative rounded-3xl overflow-hidden bg-[#0A0D12] border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl"
              data-cursor="play"
              onClick={() => handleOpenModal(PROJECTS[0])}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                {/* Media Preview */}
                <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] overflow-hidden bg-black flex items-center justify-center">
                  <video
                    src="/videos/video-1.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-[#0A0D12]" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-accent uppercase">
                    Featured Masterpiece
                  </div>
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <span className="text-xl font-bold text-white">Birla&apos;s Parvai</span>
                  </div>
                </div>

                {/* Case Details */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono tracking-widest text-accent uppercase">
                        Commercial Film
                      </span>
                      <span className="text-xs font-mono text-white/40">2025</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-accent transition-colors">
                      Birla&apos;s Parvai — Commercial Campaign
                    </h3>
                    <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed mb-6">
                      An emotional cinematic brand film structured around real human connections, paired with precision color grading and surround sound design.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Creative Direction', 'Color Grade', 'Master Sound', 'Live Action'].map((chip) => (
                        <span key={chip} className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-white/70 border border-white/[0.08]">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-emerald-400 font-mono">+380%</div>
                      <div className="text-[11px] text-white/40 uppercase font-mono tracking-wider">Organic Reach</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                      <span>Watch Film</span>
                      <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2: Automotive Commercial (7 Columns) */}
          {filtered.some((p) => p.id === 'automotive-campaign') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-[#0A0D12] border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              data-cursor="view"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src="/campaigns/automotive.jpg"
                  alt="Automotive Campaign"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70 uppercase">
                  Automotive Direction
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono tracking-wider text-accent uppercase">Commercial</span>
                  <span className="text-xs font-mono text-white/40">2025</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors">
                  High-Performance Automotive
                </h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Precision commercial cinematography highlighting high-speed aerodynamics, reflections, and luxury sports engineering.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <span className="text-xl font-bold font-mono text-accent">4.8M</span>
                    <span className="text-[11px] text-white/40 block font-mono">Global Impressions</span>
                  </div>
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">Multi-Channel Ad Rollout</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3: Birla's Parvai High-Retention Reel (5 Columns Portrait) */}
          {filtered.some((p) => p.id === 'birlas-parvai-reels') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-[#0A0D12] border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              data-cursor="play"
              onClick={() => handleOpenModal(PROJECTS[2])}
            >
              <div className="relative aspect-[9/11] overflow-hidden bg-black flex items-center justify-center">
                <video
                  src="/videos/video-2.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-accent-violet uppercase">
                  Social Retention
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono tracking-wider text-accent-violet uppercase">Content Creation</span>
                  <span className="text-xs font-mono text-white/40">2025</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-accent-violet transition-colors">
                  High-Retention Reel System
                </h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Engineered visual hooks, quick pacing, and sound design producing an 89% watch-through rate across feeds.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <span className="text-xl font-bold font-mono text-emerald-400">89%</span>
                    <span className="text-[11px] text-white/40 block font-mono">Completion Rate</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/80 font-mono">
                    <span>Play Preview</span>
                    <svg className="w-3.5 h-3.5 fill-current text-accent" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 4: Sweepers — Paid Performance Ad Engine (6 Columns) */}
          {filtered.some((p) => p.id === 'sweepers-performance') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-6 group relative rounded-3xl overflow-hidden bg-[#0A0D12] border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              data-cursor="play"
              onClick={() => handleOpenModal(PROJECTS[4])}
            >
              <div className="relative aspect-video overflow-hidden bg-black flex items-center justify-center">
                <video
                  src="/videos/video-5.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 uppercase">
                  Paid Direct Response
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase">Performance Ads</span>
                  <span className="text-xs font-mono text-white/40">2024</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Sweepers — Conversion Creative Engine
                </h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  High-converting Meta ad creatives built with psychological triggers and rapid problem-solution pacing.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <span className="text-xl font-bold font-mono text-emerald-400">14.2x ROAS</span>
                    <span className="text-[11px] text-white/40 block font-mono">Meta Ads Scaling</span>
                  </div>
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">Direct Conversion</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 5: Poetry and Grammar (6 Columns) */}
          {filtered.some((p) => p.id === 'poetry-and-grammar') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-6 group relative rounded-3xl overflow-hidden bg-[#0A0D12] border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              data-cursor="play"
              onClick={() => handleOpenModal(PROJECTS[3])}
            >
              <div className="relative aspect-video overflow-hidden bg-black flex items-center justify-center">
                <video
                  src="/videos/video-3.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-accent uppercase">
                  Identity Design
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono tracking-wider text-accent uppercase">Branding</span>
                  <span className="text-xs font-mono text-white/40">2024</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors">
                  Poetry and Grammar — Brand Identity
                </h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Typographic sophistication, literary storytelling, and an editorial design system tailored for modern intellectual luxury.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <span className="text-xl font-bold font-mono text-accent">+210%</span>
                    <span className="text-[11px] text-white/40 block font-mono">Brand Recall Lift</span>
                  </div>
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">Identity & Packaging</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 6: Dindigul Srinivasan — AI Video Synthesis (12 Columns) */}
          {filtered.some((p) => p.id === 'dindigul-srinivasan') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-12 group relative rounded-3xl overflow-hidden bg-[#0A0D12] border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl"
              data-cursor="play"
              onClick={() => handleOpenModal(PROJECTS[5])}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-black flex items-center justify-center">
                  <video
                    src="/videos/video-4.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-[#0A0D12]" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-400 uppercase">
                    AI Video Synthesis
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">AI Video & Motion</span>
                      <span className="text-xs font-mono text-white/40">2025</span>
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-amber-400 transition-colors">
                      Dindigul Srinivasan — Mass Digital Campaign
                    </h3>
                    <p className="text-sm text-white/60 font-normal leading-relaxed mb-6">
                      High-throughput generative motion graphics and AI video editing scaling public awareness to over 1.2M viewers.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-amber-400 font-mono">1.2M+</div>
                      <div className="text-[11px] text-white/40 uppercase font-mono tracking-wider">Public Outreach</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                      <span>View Reel</span>
                      <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── 3. Production Impact By Numbers ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <div className="p-10 lg:p-14 rounded-3xl bg-[#07090C] border border-white/[0.08] relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            <div className="pt-4 md:pt-0 md:px-6 first:px-0">
              <div className="text-3xl sm:text-5xl font-black text-white font-mono mb-2">15M+</div>
              <div className="text-xs sm:text-sm text-white/50 uppercase font-mono tracking-wider">Organic Views Generated</div>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <div className="text-3xl sm:text-5xl font-black text-accent font-mono mb-2">14.2x</div>
              <div className="text-xs sm:text-sm text-white/50 uppercase font-mono tracking-wider">Peak Campaign ROAS</div>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <div className="text-3xl sm:text-5xl font-black text-white font-mono mb-2">100+</div>
              <div className="text-xs sm:text-sm text-white/50 uppercase font-mono tracking-wider">Commercials Delivered</div>
            </div>
            <div className="pt-4 md:pt-0 md:px-6">
              <div className="text-3xl sm:text-5xl font-black text-emerald-400 font-mono mb-2">99.4%</div>
              <div className="text-xs sm:text-sm text-white/50 uppercase font-mono tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Fullscreen Video Player Modal ── */}
      <AnimatePresence>
        {activeModalItem && activeModalItem.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={handleCloseModal}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-200 z-50 bg-white/5 p-3 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src={activeModalItem.videoUrl}
                autoPlay
                playsInline
                onClick={handlePlayPause}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Centered play button when paused */}
              {!isPlaying && (
                <div
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-accent text-black font-bold shadow-2xl scale-100 hover:scale-105 transition-transform">
                    <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Controls bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-3">
                <div className="flex items-center gap-4 w-full">
                  <span className="text-xs font-mono text-white/70">{formatTime(currentTime)}</span>
                  <div className="relative flex-1">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={(e) => {
                        const t = parseFloat(e.target.value);
                        setCurrentTime(t);
                        if (modalVideoRef.current) modalVideoRef.current.currentTime = t;
                      }}
                      className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-white/20 accent-accent outline-none"
                    />
                  </div>
                  <span className="text-xs font-mono text-white/70">{formatTime(duration)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="text-white hover:text-accent transition-colors"
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent block">
                        {activeModalItem.category}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {activeModalItem.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (!modalVideoRef.current) return;
                        const next = !isMuted;
                        setIsMuted(next);
                        modalVideoRef.current.muted = next;
                      }}
                      className="text-white/80 hover:text-white"
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.34 2.93L2.93 4.34 7.59 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.37.88-2.18 1.11v2.06c1.35-.32 2.58-.95 3.61-1.81l2.45 2.45 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l1.82-1.82 2.18 2.18v4.81z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L9 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 5. Next Steps Call to Action ── */}
      <CTASection />
    </div>
  );
}
