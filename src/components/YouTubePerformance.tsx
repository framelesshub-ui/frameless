'use client';

import React, { useState } from 'react';
import { Play, BarChart3 } from 'lucide-react';

import { YouTubeIcon } from './icons/SocialIcons';
import VideoModal from './VideoModal';
import { YOUTUBE_CHANNELS, type YouTubeChannel } from '@/data/youtubeChannels';

export default function YouTubePerformance() {
  const [activeChannel, setActiveChannel] = useState<YouTubeChannel | null>(null);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A] border-t border-white/[0.06]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00F0FF]/05 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-fine-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
            <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
            <span>YOUTUBE &amp; PERFORMANCE ENGINE</span>
          </div>


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Engineering High-Retention Digital IP
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            We turn regional storytelling and clinical healthcare wisdom into compounding digital assets with verified multi-million view distribution.
          </p>
        </div>

        {/* Central Verified Metric Callout */}
        <div className="mb-12 sm:mb-16 p-8 sm:p-12 rounded-3xl glass-card border border-[#00F0FF]/20 relative overflow-hidden">
          {/* Subtle glow behind metric */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#00F0FF]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Massive 10M+ Total Views Highlight */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#00F0FF] uppercase mb-2">
                VERIFIED LIFETIME AUDIENCE IMPACT
              </span>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter">
                10M<span className="text-[#00F0FF]">+</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mt-1">
                Total Views Generated
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-3 leading-relaxed max-w-md">
                Organic attention captured across our managed and studio-produced channels: Birlas Parvai, Supratha Wellness, and Frameless Media.
              </p>
            </div>

            {/* Analytics Visual Diagram (Styled vector retention & velocity chart) */}
            <div className="lg:col-span-6 flex flex-col gap-4 bg-[#080C14]/80 p-6 rounded-2xl border border-white/[0.08]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#00F0FF]" />
                  <span className="text-xs font-mono font-semibold text-white tracking-wider uppercase">
                    Channel Performance Matrix
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded-full border border-[#00F0FF]/25">
                  Verified Data
                </span>
              </div>

              {/* Minimal Vector Graph Representation */}
              <div className="h-32 w-full relative flex items-end justify-between px-2 pt-4">
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                  <defs>
                    <linearGradient id="gradientAnalytics" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Grid Lines */}
                  <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  
                  {/* Smooth curved chart line */}
                  <path
                    d="M 0,85 C 40,80 80,60 120,45 C 160,30 200,38 240,20 C 270,10 290,8 300,5"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="2.5"
                  />
                  {/* Gradient Area Fill */}
                  <path
                    d="M 0,85 C 40,80 80,60 120,45 C 160,30 200,38 240,20 C 270,10 290,8 300,5 L 300,100 L 0,100 Z"
                    fill="url(#gradientAnalytics)"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pt-2 border-t border-white/[0.04]">
                <span>Retention Architecture</span>
                <span className="text-[#00F0FF] font-semibold">Continuous Upward Trajectory</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 YouTube Channel Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {YOUTUBE_CHANNELS.map((channel) => (
            <div
              key={channel.id}
              onClick={() => setActiveChannel(channel)}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#00F0FF]/40"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0D111A]">
                  <img
                    src={channel.thumbnail}
                    alt={channel.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-[#04060A]/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-white">
                      <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                      <span>{channel.badge}</span>
                    </span>

                    <span className="text-[10px] font-mono font-bold text-[#00F0FF] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      {channel.totalViews} Views
                    </span>
                  </div>

                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#00F0FF] group-hover:text-black transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                      {channel.name}
                    </h3>
                    <span className="text-xs font-mono text-[#00F0FF]">
                      {channel.handle}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#94A3B8] uppercase mb-3">
                    {channel.category}
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Verified stats */}
              <div className="px-6 py-4 bg-[#080C14]/60 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-[#94A3B8]">Audience Scale</span>
                <span className="text-white font-bold">{channel.subscribers} Subscribers</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {activeChannel && (
        <VideoModal
          isOpen={!!activeChannel}
          onClose={() => setActiveChannel(null)}
          title={activeChannel.name}
          category={activeChannel.category}
          videoSrc={activeChannel.videoUrl}
          posterSrc={activeChannel.thumbnail}
          channelUrl={activeChannel.channelUrl}
        />

      )}
    </section>
  );
}
