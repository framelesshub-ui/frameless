'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import VideoCarousel from '@/components/VideoCarousel';
import CTASection from '@/components/CTASection';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/constants';

export default function WorkPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-violet/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
          >
            Our{' '}
            <span className="gradient-text">work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            A curated selection of projects that showcase our craft, creativity,
            and commitment to pushing boundaries.
          </motion.p>
        </div>
      </section>

      {/* Filters + Grid */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-16"
          >
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-background'
                    : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Carousel */}
          <VideoCarousel items={filtered} />

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/30 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection />
    </>
  );
}
