'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax motion values (restrained to 2–3° rotation and 4–8px movement)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 90, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax mappings: subtle 4–8px translation, 2–3 deg rotation
  const collageX = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const collageY = useTransform(smoothMouseY, [-1, 1], [-8, 8]);
  const collageRotateX = useTransform(smoothMouseY, [-1, 1], [2.5, -2.5]);
  const collageRotateY = useTransform(smoothMouseX, [-1, 1], [-2.5, 2.5]);

  // Differential layer shifts
  const backLayerX = useTransform(smoothMouseX, [-1, 1], [-12, 12]);
  const backLayerY = useTransform(smoothMouseY, [-1, 1], [-12, 12]);
  const frontLayerX = useTransform(smoothMouseX, [-1, 1], [10, -10]);
  const frontLayerY = useTransform(smoothMouseY, [-1, 1], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 lg:py-0 overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030405] via-transparent to-[#030405] pointer-events-none z-[1]" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/[0.03] rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ── Left Column: Editorial Hero Typography ── */}
          <div className="lg:col-span-6 text-left">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-xs font-semibold text-white/70 tracking-widest uppercase">
                INDEPENDENT CREATIVE & DIGITAL STUDIO
              </span>
            </motion.div>

            {/* 2. Headline: Reveals line-by-line with mask & animated "remember." */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-8">
              <div className="overflow-hidden py-1">
                <motion.div
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white"
                >
                  We build brands
                </motion.div>
              </div>

              <div className="overflow-hidden py-1">
                <motion.div
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white flex flex-wrap items-baseline gap-x-4"
                >
                  <span>people</span>
                  <span className="gradient-remember">remember.</span>
                </motion.div>
              </div>
            </h1>

            {/* 3. Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-white/55 max-w-xl mb-10 leading-relaxed font-normal"
            >
              Strategy, content, design and performance marketing for ambitious brands that want to stand out, grow and stay relevant.
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <AnimatedButton href="/work" variant="primary" size="lg">
                <span>View Our Work</span>
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary" size="lg">
                <span>Start a Project</span>
              </AnimatedButton>
            </motion.div>

            {/* Micro proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 pt-8 border-t border-white/[0.08] flex items-center gap-8 text-xs font-mono text-white/40 uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">★</span>
                <span>Global Clientele</span>
              </div>
              <div>
                <span>Est. 2023</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: 6-Panel Interactive Creative Collage ── */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex items-center justify-center">
            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : collageX,
                y: shouldReduceMotion ? 0 : collageY,
                rotateX: shouldReduceMotion ? 0 : collageRotateX,
                rotateY: shouldReduceMotion ? 0 : collageRotateY,
                transformPerspective: 1200,
              }}
              className="relative w-full max-w-[500px] h-[520px] sm:h-[580px] flex items-center justify-center"
            >
              {/* PANEL 1: Centerpiece Vertical Video Reel (Birla's Parvai) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: shouldReduceMotion ? 0 : [-6, 6, -6],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  scale: { duration: 0.8, delay: 0.4 },
                  y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
                }}
                data-cursor="play"
                className="relative z-20 w-[240px] sm:w-[270px] aspect-[9/16] rounded-2xl overflow-hidden bg-black/80 border border-white/20 shadow-2xl shadow-black/90 group cursor-pointer"
              >
                <video
                  src="/videos/video-1.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-accent uppercase">
                  Live Showreel
                </div>
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">
                    Commercial Film
                  </span>
                  <p className="text-sm font-bold text-white leading-tight">
                    Birla’s Parvai Campaign
                  </p>
                </div>
              </motion.div>

              {/* PANEL 2: Top Left — Automotive Campaign Card */}
              <motion.div
                style={{
                  x: shouldReduceMotion ? 0 : backLayerX,
                  y: shouldReduceMotion ? 0 : backLayerY,
                }}
                initial={{ opacity: 0, x: -50, y: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: shouldReduceMotion ? 0 : [5, -5, 5],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.6 },
                  x: { duration: 0.8, delay: 0.6 },
                  y: { duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                }}
                data-cursor="view"
                className="absolute -left-2 sm:-left-8 top-4 z-10 w-[190px] sm:w-[220px] aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0D12] border border-white/15 shadow-2xl shadow-black/80 group cursor-pointer hidden sm:block backdrop-blur-md"
              >
                <Image
                  src="/campaigns/automotive.jpg"
                  alt="Automotive Campaign"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-mono tracking-wider text-accent uppercase block">
                    Automotive
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Cinematic Commercial
                  </p>
                </div>
              </motion.div>

              {/* PANEL 3: Top Right — High-Retention Content Reel */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: shouldReduceMotion ? 0 : [-5, 7, -5],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.75 },
                  x: { duration: 0.8, delay: 0.75 },
                  y: { duration: 7.8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
                data-cursor="play"
                className="absolute -right-2 sm:-right-8 top-12 z-30 w-[160px] sm:w-[185px] aspect-[9/14] rounded-xl overflow-hidden bg-[#0A0D12] border border-white/15 shadow-2xl shadow-black/80 group cursor-pointer hidden sm:block backdrop-blur-md"
              >
                <video
                  src="/videos/video-2.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-mono tracking-wider text-accent-violet uppercase block">
                    Content Creation
                  </span>
                  <p className="text-xs font-semibold text-white">
                    High-Retention Reel
                  </p>
                </div>
              </motion.div>

              {/* PANEL 4: Bottom Left — Performance Marketing Card */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: shouldReduceMotion ? 0 : [-4, 6, -4],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.9 },
                  x: { duration: 0.8, delay: 0.9 },
                  y: { duration: 8.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
                }}
                data-cursor="view"
                className="absolute -left-4 sm:-left-6 bottom-8 z-30 w-[180px] sm:w-[200px] aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0D12]/90 border border-white/15 shadow-2xl shadow-black/80 group cursor-pointer hidden sm:block backdrop-blur-md"
              >
                <Image
                  src="/services/performance-marketing.png"
                  alt="Performance Marketing"
                  fill
                  className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-wider text-emerald-400 uppercase">
                      +380% ROAS
                    </span>
                    <span className="text-[9px] font-mono text-white/50">Meta / Ads</span>
                  </div>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    Performance Marketing
                  </p>
                </div>
              </motion.div>

              {/* PANEL 5: Bottom Right — Brand Identity Card */}
              <motion.div
                style={{
                  x: shouldReduceMotion ? 0 : frontLayerX,
                  y: shouldReduceMotion ? 0 : frontLayerY,
                }}
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: shouldReduceMotion ? 0 : [6, -5, 6],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 1 },
                  x: { duration: 0.8, delay: 1 },
                  y: { duration: 7.4, repeat: Infinity, ease: 'easeInOut', delay: 2 },
                }}
                data-cursor="view"
                className="absolute -right-2 sm:-right-6 bottom-6 z-25 w-[170px] sm:w-[195px] aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0D12]/90 border border-white/15 shadow-2xl shadow-black/80 group cursor-pointer hidden sm:block backdrop-blur-md"
              >
                <Image
                  src="/services/branding-design.png"
                  alt="Branding and Design"
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-mono tracking-wider text-accent uppercase block">
                    Brand Systems
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Identity & Typecraft
                  </p>
                </div>
              </motion.div>

              {/* PANEL 6: Floating Studio Pill Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-0 right-1/4 translate-x-1/2 -translate-y-1/2 z-40 px-3.5 py-1 rounded-full bg-[#0C1016]/90 border border-accent/30 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-white/80 uppercase">
                  Zero Templates • 100% Bespoke
                </span>
              </motion.div>

              {/* Ambient radial glow behind the collage */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent-violet/10 rounded-full blur-[90px] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-accent/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
