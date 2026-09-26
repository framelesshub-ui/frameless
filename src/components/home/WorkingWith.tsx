'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const YOUTUBE_CLIENTS = [
  { name: 'Birlas Parvai', slug: 'birlas-parvai', desc: 'Automotive Media & YouTube' },
  { name: 'Supratha Wellness', slug: 'supratha-wellness', desc: 'Medical & Wellness Media' },
  { name: 'Frameless Media', slug: 'frameless-media', desc: 'Cinema & Entertainment Media' },
];

const BRANDING_CLIENTS = [
  { name: 'Ora Kitchen', slug: 'ora-kitchen', desc: 'Catering & Food Brand' },
  { name: 'Aura Home', slug: 'aura-home', desc: 'Home & Lifestyle Brand' },
  { name: 'Krithi Makeover Artistry', slug: 'krithi-makeover-artistry', desc: 'Luxury Makeup & Personal Brand' },
];

export default function WorkingWith() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] text-[#F4F4F5] border-b border-white/[0.08]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
              04 — Partners
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Working with.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            Collaborating with ambitious creators, media platforms, and growing commercial brands.
          </p>
        </div>

        {/* 2 Clean Categorized Columns: YOUTUBE & BRANDING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* YOUTUBE Group */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-6 pb-4 border-b border-white/[0.08] flex items-center justify-between">
              <span>YOUTUBE</span>
              <span className="text-[#71717A]">01</span>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {YOUTUBE_CLIENTS.map((client) => (
                <Link
                  key={client.slug}
                  href={`/work/${client.slug}`}
                  className="py-5 flex items-center justify-between group block"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs font-mono text-[#A1A1AA] mt-1">
                      {client.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* BRANDING Group */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0F0F10] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-6 pb-4 border-b border-white/[0.08] flex items-center justify-between">
              <span>BRANDING</span>
              <span className="text-[#71717A]">02</span>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {BRANDING_CLIENTS.map((client) => (
                <Link
                  key={client.slug}
                  href={`/work/${client.slug}`}
                  className="py-5 flex items-center justify-between group block"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs font-mono text-[#A1A1AA] mt-1">
                      {client.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
