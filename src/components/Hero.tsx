'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { YouTubeIcon } from './icons/SocialIcons';
import Stats from './Stats';

import VideoModal from './VideoModal';
import { YOUTUBE_CHANNELS, type YouTubeChannel } from '@/data/youtubeChannels';

export default function Hero() {
  const [selectedChannel, setSelectedChannel] = useState<YouTubeChannel | null>(null);

  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex flex-col justify-center overflow-hidden bg-[#04060A]">
      {/* Background Lighting & Fine Grid Texture */}
      <div className="absolute inset-0 bg-fine-grid opacity-60 pointer-events-none" />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#0284C7]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT SIDE ── */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md w-fit mb-6 sm:mb-8 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
              <img
                src="/logo.png"
                alt="Frameless Hub"
                className="w-4 h-4 object-contain filter drop-shadow-[0_0_4px_rgba(0,240,255,0.6)]"
              />
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#F5F7FA] uppercase">
                A CREATIVE MEDIA AGENCY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.06] mb-6 sm:mb-8">
              We build brands
              <br />
              people
              <br />
              <span className="gradient-remember">remember.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
              Strategy, content, design and performance marketing for ambitious brands that want to stand out, grow and stay relevant.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-[#00F0FF] hover:bg-[#38BDF8] transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.25] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* ── RIGHT HERO PORTFOLIO (Layered floating composition) ── */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center lg:justify-end">
            
            {/* Soft Blue Glowing Orb Behind Cards */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full radial-orb pointer-events-none -z-0" />
            
            {/* Layered Floating Composition (Overlapping cards with depth and perspective) */}
            <div className="relative w-full max-w-[460px] h-[460px] sm:h-[500px] perspective-[1000px] z-10 flex items-center justify-center">
              
              {/* Card 1: Birlas Parvai (Top Layer, tilted slightly) */}
              <div
                onClick={() => setSelectedChannel(YOUTUBE_CHANNELS[0])}
                className="absolute top-0 right-2 sm:right-6 w-[82%] sm:w-[80%] rounded-2xl p-3 bg-[#080C14]/90 backdrop-blur-xl border border-white/[0.12] hover:border-[#00F0FF]/60 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.1)] cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:z-30 animate-float-1 group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0F172A] mb-3">
                  <img
                    src={YOUTUBE_CHANNELS[0].thumbnail}
                    alt={YOUTUBE_CHANNELS[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-mono text-white border border-white/10">
                    <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                    <span>{YOUTUBE_CHANNELS[0].name}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#00F0FF]/90 text-black flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)] group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-mono text-[#00F0FF] font-bold">
                    <Eye className="w-3 h-3" />
                    <span>{YOUTUBE_CHANNELS[0].totalViews}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1 gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-[#00F0FF] transition-colors truncate">
                        {YOUTUBE_CHANNELS[0].name}
                      </h4>
                      <span className="text-[9px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-1.5 py-0.5 rounded border border-[#00F0FF]/20 shrink-0">
                        {YOUTUBE_CHANNELS[0].subscribers}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#94A3B8] truncate mt-0.5">
                      {YOUTUBE_CHANNELS[0].latestVideoTitle || YOUTUBE_CHANNELS[0].category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Supratha Wellness (Middle Layer, shifted left & down) */}
              <div
                onClick={() => setSelectedChannel(YOUTUBE_CHANNELS[1])}
                className="absolute top-36 sm:top-40 left-0 w-[84%] sm:w-[82%] rounded-2xl p-3 bg-[#080C14]/90 backdrop-blur-xl border border-white/[0.12] hover:border-[#00F0FF]/60 shadow-[0_25px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(0,240,255,0.12)] cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:z-30 animate-float-2 group z-20"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0F172A] mb-3">
                  <img
                    src={YOUTUBE_CHANNELS[1].thumbnail}
                    alt={YOUTUBE_CHANNELS[1].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-mono text-white border border-white/10">
                    <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                    <span>{YOUTUBE_CHANNELS[1].name}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#00F0FF] group-hover:text-black flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-all">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-mono text-[#00F0FF] font-bold">
                    <Eye className="w-3 h-3" />
                    <span>{YOUTUBE_CHANNELS[1].totalViews}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1 gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-[#00F0FF] transition-colors truncate">
                        {YOUTUBE_CHANNELS[1].name}
                      </h4>
                      <span className="text-[9px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-1.5 py-0.5 rounded border border-[#00F0FF]/20 shrink-0">
                        {YOUTUBE_CHANNELS[1].subscribers}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#94A3B8] truncate mt-0.5">
                      {YOUTUBE_CHANNELS[1].latestVideoTitle || YOUTUBE_CHANNELS[1].category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Frameless Media (Bottom Layer, offset slightly right) */}
              <div
                onClick={() => setSelectedChannel(YOUTUBE_CHANNELS[2])}
                className="absolute bottom-2 right-4 sm:right-8 w-[80%] sm:w-[78%] rounded-2xl p-3 bg-[#080C14]/90 backdrop-blur-xl border border-white/[0.12] hover:border-[#00F0FF]/60 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.08)] cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:z-30 animate-float-3 group z-10"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0F172A] mb-3">
                  <img
                    src={YOUTUBE_CHANNELS[2].thumbnail}
                    alt={YOUTUBE_CHANNELS[2].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-mono text-white border border-white/10">
                    <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                    <span>{YOUTUBE_CHANNELS[2].name}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#00F0FF] group-hover:text-black flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-all">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-mono text-[#00F0FF] font-bold">
                    <Eye className="w-3 h-3" />
                    <span>{YOUTUBE_CHANNELS[2].totalViews}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1 gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-[#00F0FF] transition-colors truncate">
                        {YOUTUBE_CHANNELS[2].name}
                      </h4>
                      <span className="text-[9px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-1.5 py-0.5 rounded border border-[#00F0FF]/20 shrink-0">
                        {YOUTUBE_CHANNELS[2].subscribers}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#94A3B8] truncate mt-0.5">
                      {YOUTUBE_CHANNELS[2].latestVideoTitle || YOUTUBE_CHANNELS[2].category}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Statistics below split hero */}
        <Stats />
      </div>

      {/* Video Modal if any channel preview is clicked */}
      {selectedChannel && (
        <VideoModal
          isOpen={!!selectedChannel}
          onClose={() => setSelectedChannel(null)}
          title={selectedChannel.latestVideoTitle ? `${selectedChannel.name} — ${selectedChannel.latestVideoTitle}` : selectedChannel.name}
          category={selectedChannel.category}
          videoSrc={selectedChannel.videoUrl}
          posterSrc={selectedChannel.thumbnail}
          channelUrl={selectedChannel.channelUrl}
        />
      )}
    </section>
  );
}
