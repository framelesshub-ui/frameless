'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, ShieldCheck, Zap, Compass, Layers } from 'lucide-react';
import { CAPABILITIES } from '@/data/capabilities';
import { useScopingModal } from '@/context/ScopingModalContext';
import AnimatedButton from '@/components/AnimatedButton';

const STUDIO_STANDARDS = [
  {
    num: '01',
    title: 'Zero Disposable Templates',
    description:
      'We reject off-the-shelf formulas and generic aesthetic trends. Every brand identity, color system, and typographic hierarchy is forged from deep audience psychology and singular market positioning.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Cinema-Grade Optical Craft',
    description:
      'Our productions are filmed on 4K DCI optical cinema glass with high dynamic range, nuanced color calibration, and bespoke 32-bit spatial sound design engineered for full acoustic immersion.',
    icon: Sparkles,
  },
  {
    num: '03',
    title: 'Audience Retention Rigor',
    description:
      'Great visuals are worthless without engagement. We engineer hook architecture, episodic narrative arcs, and dynamic editorial pacing that consistently generate millions of organic views.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Direct Leadership Access',
    description:
      'You partner directly with our founder and principal craftspeople. No layers of account managers, no junior delegating, and zero agency bureaucratic bloat from day one to master delivery.',
    icon: ShieldCheck,
  },
];

export default function DisciplinesCapabilities() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const standardsRef = useRef<HTMLDivElement | null>(null);
  const { openScopingModal } = useScopingModal();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Stagger entrance for the 4 core discipline columns
      const cards = gridRef.current?.querySelectorAll('.capability-column');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0.2, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              end: 'top 45%',
              scrub: 0.4,
            },
          }
        );
      }

      // 2. Stagger entrance for the 4 studio standards
      const standardCards = standardsRef.current?.querySelectorAll('.standard-card');
      if (standardCards && standardCards.length > 0) {
        gsap.fromTo(
          standardCards,
          { opacity: 0.2, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: standardsRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.4,
            },
          }
        );
      }
    }, [gridRef, standardsRef]);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="py-28 sm:py-40 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] relative overflow-hidden scroll-mt-20"
    >
      <div className="editorial-container space-y-28 sm:space-y-36">
        
        {/* ── PART 1: 4 Core Disciplines (Architectural & Premium) ── */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-[var(--color-border)]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
                <span>05 / Disciplines &amp; Capabilities</span>
              </div>
              <h2 className="section-h2 text-[var(--color-text)] font-heading">
                What we engineer<span className="text-[#0047ff]">.</span>
              </h2>
            </div>
            <p className="body-lead text-base sm:text-lg text-[var(--color-muted)] max-w-md leading-relaxed">
              Four specialized creative divisions operating as one unified studio—eliminating fragmented vendor handoffs.
            </p>
          </div>

          {/* 4 Architectural Discipline Columns */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[var(--color-border)] divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]"
          >
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className="capability-column p-8 sm:p-10 transition-all duration-400 hover:bg-gradient-to-b hover:from-[var(--color-service-hover-start)] hover:to-transparent flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#0047ff] tracking-widest font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-muted)] tracking-wider">
                      DIVISION
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-[var(--color-text)] mb-4 tracking-tight group-hover:text-[#0047ff] transition-colors">
                    {cap.title.charAt(0) + cap.title.slice(1).toLowerCase()}
                  </h3>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8 font-normal">
                    {cap.description}
                  </p>
                </div>

                {/* Sub-services list */}
                <div className="border-t border-[var(--color-border)] pt-4 space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-muted)] mb-3">
                    Deliverables:
                  </div>
                  {cap.services.map((service) => (
                    <div
                      key={service}
                      className="py-1.5 text-xs font-mono text-[var(--color-text)] flex items-center justify-between"
                    >
                      <span className="truncate pr-2">{service}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]/40 flex-shrink-0 group-hover:bg-[#0047ff] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: The 4 Studio Pillars of Excellence (Fresh, Non-Redundant Agency Standards) ── */}
        <div ref={standardsRef}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0047ff] mb-2 font-semibold">
                Studio Standards
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-[var(--color-text)] tracking-tight">
                Our code of craftsmanship<span className="text-[#0047ff]">.</span>
              </h3>
            </div>
            <p className="body-lead text-sm sm:text-base text-[var(--color-muted)] max-w-md leading-relaxed">
              How we protect quality, accelerate turnaround, and guarantee high-impact client outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {STUDIO_STANDARDS.map((std) => {
              const IconComp = std.icon;
              return (
                <div
                  key={std.num}
                  className="standard-card p-8 sm:p-10 rounded-3xl bg-[var(--color-tint)] border border-[var(--color-border)] hover:border-[#0047ff]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_12px_32px_rgba(0,71,255,0.06)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-2xl bg-[#0047ff]/10 border border-[#0047ff]/20 flex items-center justify-center text-[#0047ff] group-hover:bg-[#0047ff] group-hover:text-white transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--color-muted)]">
                        {std.num}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-text)] mb-3 tracking-tight">
                      {std.title}
                    </h4>

                    <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed font-normal">
                      {std.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                    <span className="uppercase tracking-widest text-[#0047ff]">UNCOMPROMISED STANDARD</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PART 3: Studio Ethos & Leadership Manifesto (About Anchor — Non-Redundant) ── */}
        <div
          id="about"
          className="scroll-mt-24 about-black-block p-8 sm:p-14 md:p-16 lg:p-20 rounded-3xl bg-black text-white border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0047ff]/20 blur-[100px] pointer-events-none" />

          <div className="max-w-4xl relative z-10 space-y-8">
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#0047ff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
              <span>Studio Philosophy &amp; Leadership</span>
            </div>

            <h3 className="section-h2 text-white font-heading">
              Built on truth. Executed with conviction.
            </h3>

            <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl text-white font-medium leading-relaxed tracking-tight border-l-2 border-[#0047ff] pl-6 sm:pl-8 my-6">
              “Great creative work never asks for permission. We bridge rigorous business strategy with raw optical emotion—building brands and films that command authority and stay in mind for years to come.”
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/15">
              <div>
                <div className="text-base sm:text-lg font-bold font-heading text-white">
                  Rithik B
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#0047ff] uppercase tracking-wider mt-0.5">
                  Founder &amp; Creative Director — Frameless Hub
                </div>
              </div>

              <AnimatedButton
                text="Start a Project Brief"
                showArrow
                variant="primary"
                size="sm"
                onClick={() => openScopingModal()}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
