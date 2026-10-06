'use client';

import React from 'react';

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[var(--color-bg)] scroll-reveal">
      {/* One Black Rounded Block: border-radius 36px, side margins 2.5vw */}
      <div className="about-black-block p-8 sm:p-14 md:p-16 lg:p-20">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="section-h2 text-white font-heading mb-10 sm:mb-12">
            Small team. Big ideas.
          </h2>

          {/* Founder Quote in Unbounded */}
          <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl text-white font-medium leading-snug tracking-tight mb-6">
            “Every project at Frameless Hub is guided by a relentless focus on high-impact storytelling, technical excellence, and measurable real-world performance.”
          </blockquote>

          {/* Attribution */}
          <div className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#71717A] mb-10">
            — Rithik B, Founder and Managing Director
          </div>

          {/* Studio Description */}
          <p className="body-lead text-base sm:text-lg text-[#A1A1AA] max-w-3xl leading-relaxed mb-16">
            Frameless Hub is a Premium Creative Agency based in Chennai. We bring strategy, branding, production and digital growth together under one team.
          </p>

          {/* Three Facts in Electric Blue (#0047ff) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-10 border-t border-white/15">
            <div className="flex flex-col">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#0047ff] tracking-tight">
                399+
              </div>
              <div className="text-sm font-medium text-white/90 mt-2 font-mono uppercase tracking-wider">
                Projects Delivered
              </div>
              <p className="text-xs text-[#71717A] mt-1">
                Across branding, video production, and digital growth.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#0047ff] tracking-tight">
                10M+
              </div>
              <div className="text-sm font-medium text-white/90 mt-2 font-mono uppercase tracking-wider">
                Views Generated
              </div>
              <p className="text-xs text-[#71717A] mt-1">
                Audience reach across YouTube and digital platforms.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#0047ff] tracking-tight">
                2026
              </div>
              <div className="text-sm font-medium text-white/90 mt-2 font-mono uppercase tracking-wider">
                Founded in Chennai
              </div>
              <p className="text-xs text-[#71717A] mt-1">
                Independent studio operating with zero bloat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
