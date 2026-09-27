'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="py-24 sm:py-36 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        {/* Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>04 / Film Direction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Our work,
            <br />
            in motion.
          </h2>
        </div>

        {/* Large 16:9 Showreel with Interactive Controls */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.08] shadow-[0_25px_70px_rgba(0,0,0,0.85)] group">
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

          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Central Play/Pause Trigger */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
              className="pointer-events-auto w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-white/90 hover:bg-[#00F0FF] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.7)] hover:scale-105 cursor-pointer backdrop-blur-sm"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
              ) : (
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
              )}
            </button>
          </div>

          {/* Top Info Bar */}
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-[11px] font-mono pointer-events-none">
            <span className="text-[#00F0FF] uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              CINEMA GRADE EDITORIAL
            </span>
            <span className="text-[#A1A1AA] uppercase tracking-wider hidden sm:inline bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              ORIGINAL SHOWREEL 2026
            </span>
          </div>

          {/* Bottom Bar: Mute and Info */}
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
            <span className="uppercase tracking-widest text-white">Frameless Hub &bull; Film &amp; Motion</span>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10 backdrop-blur-md"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
