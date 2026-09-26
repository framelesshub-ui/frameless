'use client';

import React from 'react';
import WorkGrid from './WorkGrid';
import FeaturedVideo from './FeaturedVideo';
import CTASection from './CTASection';

export default function WorkPageContent() {
  return (
    <div className="bg-[#04060A] text-[#F5F7FA] min-h-screen pt-24 sm:pt-32">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
          <span>PORTFOLIO ARCHIVE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4">
          Selected Work
        </h1>
        <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl leading-relaxed">
          A curated collection of commercial cinema, viral YouTube growth architectures, luxury brand identities, and performance ad engines engineered by Frameless Hub.
        </p>
      </div>

      {/* Featured Video Spotlight */}
      <FeaturedVideo />

      {/* Full Work Grid with Interactive Category Filtering */}
      <WorkGrid showFilters={true} />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
