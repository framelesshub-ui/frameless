'use client';

import React from 'react';
import AboutSection from './AboutSection';
import TrustSection from './TrustSection';
import ProcessSection from './ProcessSection';
import CTASection from './CTASection';

export default function AboutPageContent() {
  return (
    <div className="bg-[#04060A] text-[#F5F7FA] min-h-screen pt-24 sm:pt-32">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
          <span>ABOUT FRAMELESS HUB</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4">
          Independent by design.
          <br />
          <span className="text-[#00F0FF]">Built for ambitious brands.</span>
        </h1>
        <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl leading-relaxed">
          Founded in Chennai in 2026, Frameless Hub was established to liberate brands from fragmented agencies and generic templates. We operate as a creative media agency uniting brand strategy, cinema, digital content, YouTube management, and algorithmic performance under one roof.
        </p>

      </div>

      {/* Main About Section */}
      <AboutSection />

      {/* Trust Section */}
      <TrustSection />

      {/* 5-Step Process */}
      <ProcessSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
