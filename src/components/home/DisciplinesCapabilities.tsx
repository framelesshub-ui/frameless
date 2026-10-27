'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { CAPABILITIES } from '@/data/capabilities';
import AnimatedCounter from '@/components/AnimatedCounter';

const YOUTUBE_CLIENTS = [
  { name: 'Birlas Parvai', slug: 'birlas-parvai', desc: 'Automotive Media & YouTube (5.2M+ Views)' },
  { name: 'Supratha Wellness', slug: 'supratha-wellness', desc: 'Medical & Wellness Media' },
  { name: 'Frameless Media', slug: 'frameless-media', desc: 'Cinema & Cultural Entertainment Media (10M+ Reach)' },
];

const BRANDING_CLIENTS = [
  { name: 'Ora Kitchen', slug: 'ora-kitchen', desc: 'Artisanal Culinary Brand & Film' },
  { name: 'Aura Home', slug: 'aura-home', desc: 'Luxury Home & Lifestyle Brand System' },
  { name: 'Krithi Makeover Artistry', slug: 'krithi', desc: 'High-Ticket Editorial & Personal Brand' },
  { name: 'Seyon Lab', slug: 'seyon-lab', desc: 'CRM & Enterprise Technology Brand' },
];

export default function DisciplinesCapabilities() {
  return (
    <section
      id="services"
      className="py-24 sm:py-36 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] relative overflow-hidden"
    >
      <div className="editorial-container space-y-24 sm:space-y-32">
        {/* ── PART 1: 4 Core Disciplines ── */}
        <div>
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-[var(--color-border)]">
            <div>
              <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
                <span>05 / Disciplines &amp; Capabilities</span>
              </div>
              <h2 className="section-h2 text-[var(--color-text)] font-heading">
                What we do<span className="text-[#0047ff]">.</span>
              </h2>
            </div>
            <p className="body-lead text-base sm:text-lg text-[var(--color-muted)] max-w-lg leading-relaxed">
              Brand strategy, cinematic film production, and digital acceleration — engineered around what your business actually needs.
            </p>
          </div>

          {/* 4 Capability Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[var(--color-border)]">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className={`p-8 sm:p-10 transition-colors duration-400 hover:bg-gradient-to-b hover:from-[var(--color-service-hover-start)] hover:to-transparent flex flex-col justify-between ${
                  idx !== 0 ? 'border-t md:border-t-0 border-[var(--color-border)]' : ''
                } ${
                  idx % 2 !== 0 ? 'md:border-l md:border-[var(--color-border)]' : ''
                } ${
                  idx !== 0 ? 'lg:border-l lg:border-[var(--color-border)]' : ''
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#0047ff] tracking-widest mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-text)] mb-4 tracking-tight">
                    {cap.title.charAt(0) + cap.title.slice(1).toLowerCase()}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
                    {cap.description}
                  </p>
                </div>

                {/* Sub-services list */}
                <div className="border-t border-[var(--color-border)]">
                  {cap.services.map((service) => (
                    <div
                      key={service}
                      className="py-3 border-b border-[var(--color-border)] text-xs font-medium text-[var(--color-text)] last:border-b-0 flex items-center justify-between"
                    >
                      <span>{service}</span>
                      <span className="w-1 h-1 rounded-full bg-[#0047ff]/40" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: Client Partners ── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2">
                Proven Track Record
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-[var(--color-text)] tracking-tight">
                Client partners &amp; ventures.
              </h3>
            </div>
            <p className="body-lead text-sm sm:text-base text-[var(--color-muted)] max-w-md leading-relaxed">
              Collaborating with ambitious founders, creator networks, and forward-thinking enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Group 1: YouTube & Media Networks */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-tint)] border border-[var(--color-border)] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-6 pb-4 border-b border-[var(--color-border)] flex items-center justify-between">
                  <span>YouTube &amp; Media Networks</span>
                  <span className="text-[var(--color-muted)]">01</span>
                </div>

                <div className="divide-y divide-[var(--color-border)]">
                  {YOUTUBE_CLIENTS.map((client) => (
                    <Link
                      key={client.slug}
                      href={`/work/${client.slug}`}
                      className="py-5 flex items-center justify-between group block transition-colors"
                    >
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[#0047ff] transition-colors">
                          {client.name}
                        </h4>
                        <p className="text-xs text-[var(--color-muted)] mt-1 font-mono">
                          {client.desc}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[#0047ff] group-hover:border-[#0047ff]/40 transition-all shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--color-border)] text-xs font-mono text-[var(--color-muted)]">
                HIGH-RETENTION FORMATS • AUDIENCE AUTHORITY
              </div>
            </div>

            {/* Group 2: Branding & Commercial */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-tint)] border border-[var(--color-border)] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-6 pb-4 border-b border-[var(--color-border)] flex items-center justify-between">
                  <span>Branding &amp; Commercial Ventures</span>
                  <span className="text-[var(--color-muted)]">02</span>
                </div>

                <div className="divide-y divide-[var(--color-border)]">
                  {BRANDING_CLIENTS.map((client) => (
                    <Link
                      key={client.slug}
                      href={`/work/${client.slug}`}
                      className="py-5 flex items-center justify-between group block transition-colors"
                    >
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[#0047ff] transition-colors">
                          {client.name}
                        </h4>
                        <p className="text-xs text-[var(--color-muted)] mt-1 font-mono">
                          {client.desc}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[#0047ff] group-hover:border-[#0047ff]/40 transition-all shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--color-border)] text-xs font-mono text-[var(--color-muted)]">
                BESPOKE VISUAL IDENTITY • TACTILE PACKAGING
              </div>
            </div>
          </div>
        </div>

        {/* ── PART 3: Studio Ethos & Leadership Card ── */}
        <div id="about" className="scroll-mt-24 about-black-block p-8 sm:p-14 md:p-16 lg:p-20 rounded-3xl bg-black text-white border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0047ff]/15 blur-3xl pointer-events-none" />

          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
              <span>Studio Ethos</span>
            </div>

            <h3 className="section-h2 text-white font-heading mb-8">
              Small team. Big ideas.
            </h3>

            <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl text-white font-medium leading-snug tracking-tight mb-6">
              “Every project at Frameless Hub is guided by a relentless focus on high-impact storytelling, technical excellence, and measurable real-world performance.”
            </blockquote>

            <div className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#71717A] mb-12">
              — Rithik B, Founder &amp; Managing Director
            </div>

            {/* Three Verified Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-10 border-t border-white/15">
              <div className="flex flex-col">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#0047ff] tracking-tight">
                  <AnimatedCounter value={399} suffix="+" displayValue="399+" />
                </div>
                <div className="text-sm font-medium text-white/90 mt-2 font-mono uppercase tracking-wider">
                  Projects Delivered
                </div>
                <p className="text-xs text-[#71717A] mt-1 font-mono">
                  Across branding, cinema production, and digital growth.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#0047ff] tracking-tight">
                  <AnimatedCounter value={10} suffix="M+" displayValue="10M+" />
                </div>
                <div className="text-sm font-medium text-white/90 mt-2 font-mono uppercase tracking-wider">
                  Views Generated
                </div>
                <p className="text-xs text-[#71717A] mt-1 font-mono">
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
                <p className="text-xs text-[#71717A] mt-1 font-mono">
                  Independent creative agency operating with zero bloat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
