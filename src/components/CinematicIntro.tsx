'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function CinematicIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<'bloom' | 'emblem' | 'typography' | 'exit' | 'complete'>('bloom');
  const shouldReduceMotion = useReducedMotion();

  const handleComplete = useCallback(() => {
    setIsVisible(false);
    setPhase('complete');
    document.body.style.overflow = '';
    try {
      sessionStorage.setItem('fh_intro_seen', 'true');
    } catch {
      // Handle private browsing or restricted storage
    }

    // Trigger hero headline line-by-line reveal smoothly
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.classList.add('hero-revealed');
    }
  }, []);

  const skipIntro = useCallback(() => {
    setPhase('exit');
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.classList.add('hero-revealed');
    }

    setTimeout(() => {
      handleComplete();
    }, 350);
  }, [handleComplete]);

  useEffect(() => {
    // Check if user already saw the intro during this browser session
    let hasSeen = false;
    try {
      hasSeen = sessionStorage.getItem('fh_intro_seen') === 'true';
    } catch {
      hasSeen = false;
    }

    // If already seen or user prefers reduced motion, skip straight to hero reveal
    if (hasSeen || shouldReduceMotion) {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.classList.add('hero-revealed');
      }
      return;
    }

    // First visit in session: mount intro and lock scroll
    setIsVisible(true);
    document.body.style.overflow = 'hidden';

    // Cinematic Stage Timing Sequence (~2.4s total)
    // 0.0s - 0.4s: Anamorphic flare & aperture bloom
    // 0.4s - 1.0s: Logo emblem optical zoom & sheen wipe
    const tEmblem = setTimeout(() => setPhase('emblem'), 400);

    // 0.9s - 1.8s: Typographic tracking expansion & subtitle
    const tTypo = setTimeout(() => setPhase('typography'), 900);

    // 2.0s: Shutter curtain opens with cinematic cubic bezier
    const tExit = setTimeout(() => {
      setPhase('exit');
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.classList.add('hero-revealed');
      }
    }, 2050);

    // 2.7s: Fully unmount overlay from DOM
    const tDone = setTimeout(() => {
      handleComplete();
    }, 2750);

    // Keyboard shortcut to skip immediately (Escape or Space)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        skipIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(tEmblem);
      clearTimeout(tTypo);
      clearTimeout(tExit);
      clearTimeout(tDone);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [shouldReduceMotion, handleComplete, skipIntro]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <div
          role="presentation"
          aria-hidden="true"
          className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
        >
          {/* ── Top Shutter Curtain (Slides Up) ── */}
          <motion.div
            initial={{ y: 0 }}
            animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 0.85, ease: [0.85, 0, 0.15, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#050608] border-b border-white/[0.04] origin-top will-change-transform z-10"
          />

          {/* ── Bottom Shutter Curtain (Slides Down) ── */}
          <motion.div
            initial={{ y: 0 }}
            animate={phase === 'exit' ? { y: '100%' } : { y: 0 }}
            transition={{ duration: 0.85, ease: [0.85, 0, 0.15, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#050608] border-t border-white/[0.04] origin-bottom will-change-transform z-10"
          />

          {/* ── Central Optical Stage Content ── */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={phase === 'exit' ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center pointer-events-none"
          >
            {/* 1. Anamorphic Horizontal Blue Light Flare */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              {/* Ultra-wide optical streak */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.2 }}
                animate={{
                  opacity: phase === 'exit' ? 0 : [0, 0.85, 0.45],
                  scaleX: phase === 'exit' ? 1.8 : [0.2, 1.2, 1],
                }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="w-[720px] max-w-[95vw] h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent blur-[1px]"
              />

              {/* Radial Center Atmospheric Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: phase === 'exit' ? 0 : 0.6,
                  scale: phase === 'exit' ? 1.4 : 1,
                }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute w-[450px] h-[450px] rounded-full blur-[90px] pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(0, 71, 255, 0.32) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 70%)',
                }}
              />
            </div>

            {/* 2. Emblem Container with Aperture Ring & Optical Shine */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Aperture Accent Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -30 }}
                animate={{
                  opacity: phase === 'exit' ? 0 : 0.4,
                  scale: phase === 'exit' ? 1.3 : 1,
                  rotate: 0,
                }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#0047ff]/40 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(0, 71, 255, 0.25)',
                }}
              />

              {/* Official Logo Emblem */}
              <motion.div
                initial={{ opacity: 0, scale: 0.76, filter: 'blur(8px)' }}
                animate={{
                  opacity: 1,
                  scale: [0.76, 1.03, 1.0],
                  filter: 'blur(0px)',
                }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden rounded-2xl"
              >
                <img
                  src="/logo.png"
                  alt="Frameless Hub Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(0,71,255,0.7)]"
                />

                {/* Sweeping Optical Sheen across Emblem */}
                <motion.div
                  initial={{ x: '-120%', opacity: 0 }}
                  animate={{ x: '160%', opacity: [0, 0.75, 0] }}
                  transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                />
              </motion.div>
            </div>

            {/* 3. Typographic Wordmark & Tracking Sequence */}
            <div className="relative z-10 space-y-3">
              {/* Wordmark with Expanding Letter Spacing */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: '0.12em', y: 8 }}
                animate={{
                  opacity: 1,
                  letterSpacing: '0.34em',
                  y: 0,
                }}
                transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-xl sm:text-3xl text-white uppercase tracking-[0.34em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
              >
                FRAMELESS HUB
              </motion.h1>

              {/* Fine Electric Blue Gradient Hairline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-20 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#0047ff] to-transparent mx-auto"
              />

              {/* Studio Telemetry Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
                className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#0047ff] uppercase font-semibold"
              >
                CREATIVE STUDIO // CHENNAI • EST. 2026
              </motion.div>
            </div>
          </motion.div>

          {/* ── Discreet Skip Button (Bottom Right) ── */}
          <div className="absolute bottom-6 right-6 z-30 pointer-events-auto">
            <button
              type="button"
              onClick={skipIntro}
              aria-label="Skip opening intro"
              className="text-[10px] font-mono tracking-widest text-white/40 hover:text-white uppercase transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-black/40 backdrop-blur-md cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0047ff]"
            >
              SKIP INTRO ↗
            </button>
          </div>

          {/* ── Subtle 35mm Film Grain Overlay ── */}
          <div
            className="absolute inset-0 z-25 opacity-[0.03] mix-blend-screen pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
