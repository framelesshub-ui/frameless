'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import VideoModal from '../VideoModal';

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08]">
      <div className="editorial-container">
        {/* Title */}
        <div className="mb-12 sm:mb-16">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
            05 — Showreel
          </div>
          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Our work,
            <br />
            in motion.
          </h2>
        </div>

        {/* 16:9 Cinematic Video Display */}
        <div
          onClick={() => setIsPlaying(true)}
          className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-[#141416] border border-white/[0.08] cursor-pointer shadow-2xl"
        >
          {/* Cover poster */}
          <img
            src="https://i.ytimg.com/vi/Tt-_PByi6KM/hq720.jpg"
            alt="Frameless Hub Reel in Motion"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

          {/* Clean Minimal Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#00F0FF] group-hover:text-black group-hover:border-[#00F0FF] transition-all duration-300">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
            </div>
          </div>

          {/* Minimal Bottom Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
            <span>Frameless Hub • 2026 Creative Reel</span>
            <span className="text-white group-hover:text-[#00F0FF] transition-colors">
              Click to Watch Full Reel (16:9)
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
        videoSrc="https://www.youtube.com/embed/Tt-_PByi6KM?autoplay=1&rel=0"
        title="Frameless Hub — Our Work in Motion"
      />
    </section>
  );
}
