'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        {/* Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
            05 — Showreel
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Our work,
            <br />
            in motion.
          </h2>
        </div>

        {/* Large 16:9 Showreel with Simple Play/Pause Button */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            poster="/assets/frameless-hero-poster.jpg"
            className="w-full h-full object-cover"
            onClick={togglePlay}
          >
            <source src="/assets/frameless-hero.mp4" type="video/mp4" />
          </video>

          {/* Simple Clean Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
              className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-[#00F0FF] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              )}
            </button>
          </div>

          {/* Bottom Clean Label */}
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#A1A1AA] pointer-events-none">
            <span className="uppercase tracking-widest text-white">Frameless Hub Showreel</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
