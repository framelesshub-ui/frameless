'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import VideoModal from '../VideoModal';
import AnimatedCounter from '../AnimatedCounter';
import { siteStats } from '@/data/stats';

export default function Hero() {
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#080808] text-[#F4F4F5]">
      <div className="editorial-container">
        {/* Top Grid: Headline + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20 sm:mb-24">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
                Premium Creative Agency — Chennai
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              We make brands
              <br />
              hard to forget.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-9">
              Branding, content and digital campaigns for brands that want to stand out.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-transparent border border-white/20 hover:border-white transition-colors duration-200"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right Column: One Strong Cinematic Visual / Showreel Preview */}
          <div className="lg:col-span-5">
            <div
              onClick={() => setIsPlayingShowreel(true)}
              className="group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#141416] border border-white/[0.08] cursor-pointer"
            >
              {/* Featured Visual Thumbnail (Birla's Parvai drive documentary) */}
              <img
                src="https://i.ytimg.com/vi/Tt-_PByi6KM/hq720.jpg"
                alt="Frameless Hub Reel Preview"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#00F0FF] group-hover:text-black group-hover:border-[#00F0FF] transition-all duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5" />
                </div>
              </div>

              {/* Minimal caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                <span>Showreel • In Motion</span>
                <span className="text-white group-hover:text-[#00F0FF] transition-colors">Play Film →</span>
              </div>
            </div>
          </div>

        </div>

        {/* Under Hero: 399+ Projects • 10M+ Views • EST. 2026 */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
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
                <div aria-hidden="true" className="text-xs sm:text-sm font-medium text-[#A1A1AA] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Showreel Modal */}
      <VideoModal
        isOpen={isPlayingShowreel}
        onClose={() => setIsPlayingShowreel(false)}
        videoSrc="https://www.youtube.com/embed/Tt-_PByi6KM?autoplay=1&rel=0"
        title="Frameless Hub Showreel"
      />
    </section>
  );
}
