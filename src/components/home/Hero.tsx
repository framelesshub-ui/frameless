'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';
import { siteStats } from '@/data/stats';
import Magnetic from '../Magnetic';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
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
    <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 bg-[#080808] text-[#F4F4F5] overflow-hidden border-b border-white/[0.08]">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00F0FF]/10 via-[#00F0FF]/0 to-transparent blur-[140px] opacity-70"
      />

      <div className="editorial-container relative z-10">
        {/* Main Hero Header Block */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center mb-16 sm:mb-20">
          
          {/* Eyebrow Studio Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] uppercase text-[#A1A1AA]">
              Premium Creative Agency — Chennai • EST. 2026
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.03] mb-8">
            We make brands
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4F4F5] to-[#A1A1AA]">
              hard to forget
            </span>
            <span className="text-[#00F0FF]">.</span>
          </h1>

          {/* Supporting Manifesto */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-normal leading-relaxed mb-10 text-center">
            Branding, cinematic film production, and digital campaigns engineered for brands that refuse to blend into the background.
          </p>

          {/* Magnetic CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={7}>
              <Link
                href="/work"
                data-cursor="VIEW"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>

            <Magnetic strength={5}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/[0.04] border border-white/20 hover:border-white hover:bg-white/[0.08] transition-all duration-300"
              >
                Start a Project
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Cinematic Master Showreel Centerpiece */}
        <div className="w-full max-w-6xl mx-auto mb-16 sm:mb-20">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-[#0F0F10] border border-white/[0.1] shadow-[0_25px_80px_rgba(0,0,0,0.85)] group">
            {/* Real Studio Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/frameless-hero-poster.jpg"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            >
              <source src="/assets/frameless-hero.mp4" type="video/mp4" />
            </video>

            {/* Subtle scrim & inner stroke */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

            {/* Top Overlay Badges */}
            <div className="absolute top-4 sm:top-6 left-5 sm:left-8 right-5 sm:right-8 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#00F0FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                <span>STUDIO SHOWREEL 2026</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span>CHENNAI HQ</span>
                <span className="text-[#71717A]">●</span>
                <span>4K MASTER</span>
              </div>
            </div>

            {/* Interactive Player Controls Pill */}
            <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-8 right-5 sm:right-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#A1A1AA] uppercase block mb-1">
                  CORE PRODUCTION
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white font-mono tracking-tight">
                  FRAMELESS HUB — SIGNATURE REEL
                </h3>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00F0FF] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute Reel' : 'Mute Reel'}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00F0FF] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Crawler-Visible Stats Band */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {siteStats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="sr-only">
                  {stat.displayValue} {stat.label}
                </span>
                <div
                  aria-hidden="true"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-mono"
                >
                  {stat.isNumeric ? (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      displayValue={stat.displayValue}
                      aria-hidden="true"
                    />
                  ) : (
                    <span>{stat.displayValue}</span>
                  )}
                </div>
                <div aria-hidden="true" className="text-xs sm:text-sm font-medium text-[#A1A1AA] mt-1.5 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
