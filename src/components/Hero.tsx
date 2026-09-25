'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { PORTFOLIO_ITEMS } from '@/lib/constants';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax motion values (restrained to 2–3° rotation and 4–8px movement)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax mappings: subtle 4–8px translation, 2–3 deg rotation
  const collageX = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const collageY = useTransform(smoothMouseY, [-1, 1], [-8, 8]);
  const collageRotateX = useTransform(smoothMouseY, [-1, 1], [2.5, -2.5]);
  const collageRotateY = useTransform(smoothMouseX, [-1, 1], [-2.5, 2.5]);

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

  // Preview projects for collage
  const collageItems = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none z-[1]" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Editorial Hero Typography ── */}
          <div className="lg:col-span-7 text-left">
            {/* 1. Eyebrow: Fades in first with 20px upward movement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-xs font-semibold text-white/70 tracking-widest uppercase">
                Premium Creative & Post Studio
              </span>
            </motion.div>

            {/* 2. Headline: Reveals line-by-line using overflow-hidden text masks */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-8">
              {/* Line 1 */}
              <div className="overflow-hidden py-1">
                <motion.div
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white"
                >
                  Where brands become
                </motion.div>
              </div>

              {/* Line 2 with "remember." */}
              <div className="overflow-hidden py-1">
                <motion.div
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white flex flex-wrap items-baseline gap-x-4"
                >
                  <span>stories they</span>
                  <span className="gradient-remember">remember.</span>
                </motion.div>
              </div>
            </h1>

            {/* 3. Supporting Paragraph: Fades upward after headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mb-10 leading-relaxed font-normal"
            >
              At Frameless Hub, we craft cinematic video systems, viral social content, and brand identities that shatter conventional boundaries and convert attention into loyalty.
            </motion.p>

            {/* 4. CTA Buttons: Reveal last */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <AnimatedButton href="/contact" variant="primary" size="lg">
                <span>Start a Project</span>
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </AnimatedButton>
              <AnimatedButton href="/work" variant="secondary" size="lg">
                <span>Explore Showcase</span>
              </AnimatedButton>
            </motion.div>
          </div>

          {/* ── Right Column: Interactive Hero Project Collage ── */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center">
            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : collageX,
                y: shouldReduceMotion ? 0 : collageY,
                rotateX: shouldReduceMotion ? 0 : collageRotateX,
                rotateY: shouldReduceMotion ? 0 : collageRotateY,
                transformPerspective: 1000,
              }}
              className="relative w-full max-w-[420px] aspect-[4/5] sm:h-[460px] flex items-center justify-center"
            >
              {/* Card 1: Main Project Card with Live Video (Centered) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: shouldReduceMotion ? 0 : [-5, 5, -5],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.5 },
                  scale: { duration: 0.8, delay: 0.5 },
                  y: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative z-20 w-[240px] sm:w-[270px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl shadow-black/80 group"
              >
                <video
                  src={collageItems[0]?.videoUrl || '/videos/video-1.mov'}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">
                    Featured Edit
                  </span>
                  <p className="text-sm font-bold text-white leading-tight">
                    {collageItems[0]?.title || 'Birla’s Parvai'}
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Floating Card Left (Desynchronized Duration 8.4s) */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: shouldReduceMotion ? 0 : [4, -6, 4],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.7 },
                  x: { duration: 0.8, delay: 0.7 },
                  y: { duration: 8.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
                }}
                className="absolute -left-4 sm:-left-8 top-12 z-10 w-[170px] sm:w-[190px] aspect-[4/5] rounded-xl overflow-hidden bg-[#111] border border-white/10 shadow-xl shadow-black/60 hidden sm:block backdrop-blur-md"
              >
                <video
                  src={collageItems[1]?.videoUrl || '/videos/video-2.mov'}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-mono tracking-wider text-accent-violet uppercase block">
                    Content Creation
                  </span>
                  <p className="text-xs font-semibold text-white/90">
                    High-Retention Reel
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Floating Card Right (Desynchronized Duration 7.6s) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: shouldReduceMotion ? 0 : [-4, 6, -4],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.9 },
                  x: { duration: 0.8, delay: 0.9 },
                  y: { duration: 7.6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
                }}
                className="absolute -right-4 sm:-right-8 bottom-10 z-30 w-[180px] sm:w-[200px] aspect-[4/5] rounded-xl overflow-hidden bg-[#111] border border-white/10 shadow-xl shadow-black/70 hidden sm:block backdrop-blur-md"
              >
                <video
                  src={collageItems[2]?.videoUrl || '/videos/video-3.mov'}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-mono tracking-wider text-accent uppercase block">
                    Brand Film
                  </span>
                  <p className="text-xs font-semibold text-white/90">
                    Visual Identity
                  </p>
                </div>
              </motion.div>

              {/* Subtle accent halo behind collage */}
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
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
