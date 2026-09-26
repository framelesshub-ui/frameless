'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CAPABILITY_ITEMS = [
  {
    number: '01',
    title: 'STRATEGY',
    services: ['Brand Planning', 'Campaign Planning', 'Content Planning'],
    description: 'We clarify your message and plan campaigns that connect with the right audience.',
    image: '/media/generated/branding-identity-editorial.jpg',
  },
  {
    number: '02',
    title: 'BRANDING',
    services: ['Logo & Brand Identity', 'Visual Design', 'Creative Direction'],
    description: 'Distinctive visual identities, logos, and guidelines crafted to endure.',
    image: '/services/branding-design.png',
  },
  {
    number: '03',
    title: 'CONTENT',
    services: ['Photography', 'Video Production', 'Video Editing', 'YouTube Content'],
    description: 'Cinematic films, photography, and high-retention video engineered for digital platforms.',
    image: '/media/generated/content-production-studio.jpg',
  },
  {
    number: '04',
    title: 'GROWTH',
    services: ['Social Media Marketing', 'Paid Ads', 'Campaign Improvement'],
    description: 'Data-driven paid ads, social distribution, and ongoing campaign optimization.',
    image: '/media/generated/performance-analytics-studio.jpg',
  },
];

export default function ServicesPageContent() {
  return (
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Page Hero */}
        <div className="mb-20 sm:mb-28 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
              Capabilities
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            What we do.
          </h1>
          <p className="text-lg sm:text-2xl text-[#A1A1AA] leading-relaxed font-normal">
            Strategy, branding, production and digital growth — built around what your brand actually needs.
          </p>
        </div>

        {/* Four Clean Sections with Actual Work Alongside */}
        <div className="space-y-16 sm:space-y-24">
          {CAPABILITY_ITEMS.map((cap) => (
            <div
              key={cap.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-2xl bg-[#0F0F10] border border-white/[0.08]"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-6">
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest block mb-4">
                  {cap.number}
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  {cap.title}
                </h2>

                <p className="text-base text-[#A1A1AA] leading-relaxed mb-8">
                  {cap.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                  {cap.services.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Actual Work Visual */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/[0.08]">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 pt-20 border-t border-white/[0.08] text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#71717A] mb-3">
            Looking for something specific?
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Let’s talk about your project.
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
