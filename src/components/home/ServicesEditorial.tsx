'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  discipline: string;
  description: string;
  tags: string[];
  visual: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Brand Strategy & Identity',
    discipline: 'FOUNDATIONAL CRAFT',
    description:
      'Brand positioning, visual systems, naming, guidelines, and corporate identity built for long-term category leadership.',
    tags: ['Visual Identity', 'Brand Guidelines', 'Typography', 'Rebranding'],
    visual: '/services/branding-design.png',
    href: '/services#branding',
  },
  {
    number: '02',
    title: 'Commercial Film & Production',
    discipline: 'CINEMATIC STORYTELLING',
    description:
      'High-end video production, YouTube editorial systems, brand commercials, and documentary-style narratives.',
    tags: ['Brand Films', 'YouTube Production', 'Short-form Video', 'Editorial Post'],
    visual: '/services/content-creation.png',
    href: '/services#production',
  },
  {
    number: '03',
    title: 'Digital Marketing & Growth',
    discipline: 'SCALE & PERFORMANCE',
    description:
      'Data-driven distribution, performance campaigns, paid acquisition, and audience conversion systems that drive revenue.',
    tags: ['Paid Media', 'Meta & Google Ads', 'Performance Creatives', 'Analytics'],
    visual: '/services/performance-marketing.png',
    href: '/services#marketing',
  },
  {
    number: '04',
    title: 'Social Media & Creator Management',
    discipline: 'COMMUNITY & RETENTION',
    description:
      'End-to-end channel management, content calendars, reel production, and community engagement for high-growth brands.',
    tags: ['Content Calendars', 'Shorts & Reels', 'Platform Strategy', 'Creator Collabs'],
    visual: '/services/social-media-marketing.png',
    href: '/services#social',
  },
  {
    number: '05',
    title: 'Web Experiences & Digital Systems',
    discipline: 'INTERACTION DESIGN',
    description:
      'Modern, lightning-fast digital flagships, landing pages, and interactive web presences engineered with precision.',
    tags: ['Web Design', 'Next.js Systems', 'Interactive Design', 'SEO Strategy'],
    visual: '/services/website-development.png',
    href: '/services#digital',
  },
];

export default function ServicesEditorial() {
  const [activeVisual, setActiveVisual] = useState<string | null>(SERVICES[0].visual);

  return (
    <section className="py-24 sm:py-36 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08]">
      <div className="editorial-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>04 / Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              What we build.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            From strategic inception to cinematic delivery and digital distribution, we build complete brand engines.
          </p>
        </div>

        {/* Large Horizontal Service Rows */}
        <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
          {SERVICES.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              onMouseEnter={() => setActiveVisual(service.visual)}
              className="group block py-10 sm:py-14 transition-all duration-300 hover:bg-white/[0.015] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Number & Discipline */}
                <div className="lg:col-span-2 flex items-center gap-3">
                  <span className="text-xs font-mono text-[#71717A] tracking-widest">
                    {service.number}
                  </span>
                  <span className="w-4 h-[1px] bg-white/20" />
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
                    {service.discipline}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-5 transition-transform duration-300 ease-out group-hover:translate-x-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] max-w-lg leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="lg:col-span-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-mono text-[#D4D4D8] bg-white/[0.03] border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex lg:justify-end items-center">
                  <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#00F0FF] flex items-center justify-center transition-all duration-300 group-hover:bg-[#00F0FF]/10">
                    <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#00F0FF] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm font-mono text-[#A1A1AA]">
            Need a bespoke combination of services?
          </span>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors"
          >
            <span>View Full Service Catalog</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
