'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';
import AnimatedCounter from '@/components/AnimatedCounter';

const METHODOLOGY_STEPS = [
  {
    phase: '01',
    name: 'Discovery & Creative Architecture',
    summary: 'We deconstruct your market positioning, dissect competitor visual noise, and engineer a unique narrative framework with unmistakable identity.',
    deliverables: ['Audience Attention Audit', 'Narrative Scripting', 'Visual Moodboard & Art Direction'],
  },
  {
    phase: '02',
    name: 'Cinema-Grade Production',
    summary: 'High-fidelity video execution, bespoke soundscapes, hyper-retention editing, and custom typographic systems built from scratch.',
    deliverables: ['Commercial Directing & Filming', 'Motion Graphics & Typecraft', 'Color Grading & Sound Mastering'],
  },
  {
    phase: '03',
    name: 'Algorithmic Distribution',
    summary: 'Pacing and format optimization specifically tailored for platform distribution algorithms across Instagram, YouTube, TikTok, and Meta Ads.',
    deliverables: ['Multi-Ratio Aspect Cuts', 'Hook Variations Testing', 'Platform Native Asset Optimization'],
  },
  {
    phase: '04',
    name: 'Performance Scaling',
    summary: 'Data feedback loops and conversion optimization transforming organic visual momentum into verifiable commercial revenue and compound ROAS.',
    deliverables: ['Meta & Google Ad Deployment', 'Creative Iteration Loops', 'Direct-Response Scaling'],
  },
];

const STUDIO_PILLARS = [
  {
    code: 'POL',
    title: 'Zero Stock Mentality',
    description: 'We do not recycle generic agency templates. Every frame, transition, curve, and palette is custom-engineered for your brand archetype.',
  },
  {
    code: 'RET',
    title: 'Retention-First Cinematography',
    description: 'Modern attention spans are merciless. We craft split-second micro-hooks and audio cues that arrest thumb-scroll momentum within 0.8 seconds.',
  },
  {
    code: 'ROI',
    title: 'Creative That Sells',
    description: 'Aesthetic beauty without conversion is vanity. We combine editorial luxury art direction with rigorous direct-response psychology.',
  },
  {
    code: 'HYP',
    title: 'Global Delivery Speed',
    description: 'Based in Chennai, India, we operate with streamlined post-production pipelines to deliver world-class studio assets with unmatched turnarounds.',
  },
];

const STATS = [
  { value: '200+', label: 'Commercial Deliverables' },
  { value: '50+', label: 'Brands Transformed' },
  { value: '15M+', label: 'Organic Video Views' },
  { value: '14.2x', label: 'Peak Direct ROAS' },
];

export default function AboutPageContent() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-accent-blue/[0.02] rounded-full blur-[130px] pointer-events-none" />

      {/* ── 1. Page Header ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
            ABOUT FRAMELESS HUB
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6"
        >
          Not another agency.{' '}
          <span className="gradient-remember block sm:inline">Your creative growth partner.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          We dismantle conventional advertising boundaries to build cinematic brand systems, high-retention content, and performance marketing engines.
        </motion.p>
      </section>

      {/* ── 2. Studio Origin & Brand Story ── */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Glass Panel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-[#0A0D12] border border-white/[0.1] shadow-2xl p-8 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-accent uppercase">
                  Studio Headquarters
                </span>
                <span className="text-xs font-mono text-white/40">Chennai, India</span>
              </div>

              {/* Ambient center graphic */}
              <div className="relative w-full h-44 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative">
                  <div className="w-20 h-20 rounded-full border border-accent/20 animate-spin-slow flex items-center justify-center">
                    <span className="text-2xl font-black text-white">F</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-white/50">
                <span>EST. 2023</span>
                <span className="text-accent">GLOBAL REACH</span>
                <span>INDEPENDENT</span>
              </div>
            </motion.div>

            {/* Editorial Story */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
                THE FRAMELESS PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8">
                Why &ldquo;Frameless&rdquo;? Because frames limit ambition.
              </h2>

              <div className="space-y-5 text-white/60 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Most marketing fails because it stays inside safe, expected frames — generic social templates, repetitive b-roll, sanitized corporate speak, and predictable ad copies that blend invisibly into the feed.
                </p>
                <p>
                  Frameless Hub was founded in Chennai with a singular obsession: to eliminate those frames. We engineer provocative, high-contrast creative work that commands instant audience attention and converts it into sustained commercial equity.
                </p>
                <p>
                  From full-scale commercial automotive campaigns and luxury identity systems to high-velocity short-form content and precision Meta ad scaling, we operate as an agile, dedicated extension of your leadership team.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase mb-1">Headquarters</div>
                  <div className="text-sm font-semibold text-white">Chennai, India</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase mb-1">Leadership</div>
                  <div className="text-sm font-semibold text-white">Creative & Growth</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase mb-1">Direct Line</div>
                  <div className="text-sm font-semibold text-accent font-mono">+91 82486 28371</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </SectionWrapper>

      {/* ── 3. Four-Stage Studio Methodology ── */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              How we construct high-retention brand systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-[#07090C] border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-accent mb-6 flex items-center justify-between">
                    <span className="text-2xl font-black text-white/20 group-hover:text-accent transition-colors font-mono">
                      {step.phase}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal mb-8">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/30 block mb-2">Key Outputs</span>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-white/60">
                      <span className="text-accent text-[10px]">↳</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 4. Live Statistics ── */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center p-8 rounded-3xl bg-[#07090C] border border-white/[0.08]"
              >
                <div className="text-3xl sm:text-5xl font-black gradient-text font-mono mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs sm:text-sm font-mono text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. Studio Core Pillars ── */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
              AGENCY STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              The principles we never compromise.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDIO_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl bg-[#07090C] border border-white/[0.08] hover:border-accent/30 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-accent uppercase">
                    [{pillar.code}]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 6. Direct CTA ── */}
      <CTASection />
    </div>
  );
}
