'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedButton from './AnimatedButton';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00D8F5]/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00D8F5]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="rounded-[28px] bg-gradient-to-r from-[#080A0D] via-[#0C0F14] to-[#080A0D] border border-white/[0.08] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Top Cyan Accent Line */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#00D8F5]/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Headline & Copy */}
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-4"
              >
                LET’S CREATE TOGETHER
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white mb-6 leading-tight"
              >
                Ready to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF]">
                  break the frame
                </span>
                ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-lg text-[#94979F] max-w-xl font-normal leading-relaxed"
              >
                Let’s turn your vision into impactful digital experiences that drive real growth. Your ideas, our craft.
              </motion.p>
            </div>

            {/* Right Side: Primary Magnetic Action Button + WhatsApp */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <AnimatedButton href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                <span>Start a Project</span>
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </AnimatedButton>
              <Link
                href="https://wa.me/918248628371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-white/50 hover:text-[#00D8F5] transition-colors flex items-center gap-2 mt-1"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>WhatsApp direct: +91 82486 28371</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
