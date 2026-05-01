'use client';

import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Ready to{' '}
            <span className="gradient-text">break the frame</span>?
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
            Let&apos;s create something extraordinary together. Your vision, our craft.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton href="/contact" variant="primary" size="lg">
              Start a Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </AnimatedButton>
            <AnimatedButton href="/work" variant="outline" size="lg">
              View Our Work
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
