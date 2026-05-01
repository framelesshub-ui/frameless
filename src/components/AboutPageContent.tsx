'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

const VALUES = [
  {
    title: 'Precision',
    description: 'Every pixel, every frame, every cut — crafted with surgical precision.',
    icon: '◎',
  },
  {
    title: 'Innovation',
    description: 'We push creative boundaries and embrace emerging tools and techniques.',
    icon: '◇',
  },
  {
    title: 'Partnership',
    description: 'We don\'t just deliver work. We become an extension of your team.',
    icon: '⬡',
  },
  {
    title: 'Impact',
    description: 'Beautiful work that drives measurable results and real business growth.',
    icon: '△',
  },
];

const STATS = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Brands Served' },
  { value: '12M+', label: 'Views Generated' },
  { value: '4.9', label: 'Average Rating' },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent-violet/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
          >
            The story behind{' '}
            <span className="gradient-text">Frameless</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            We believe the best creative work happens when you remove the constraints.
            No templates. No boundaries. Just pure, unbounded creativity.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-surface border border-white/5 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-violet/10" />
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Frameless Hub"
                  width={200}
                  height={200}
                  className="brightness-0 invert opacity-20"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Why &ldquo;Frameless&rdquo;?
              </h2>
              <div className="space-y-4 text-white/50 leading-relaxed">
                <p>
                  Frames limit. They crop. They constrain. In a world where creativity
                  should be boundless, we chose to be <span className="text-white/70 font-medium">Frameless</span>.
                </p>
                <p>
                  Born from a belief that the best content transcends formats and platforms,
                  Frameless Hub is a creative agency built for the digital-native era. We
                  don&apos;t just create content — we craft experiences that resonate, convert,
                  and leave lasting impressions.
                </p>
                <p>
                  Our approach blends cinematic storytelling with data-driven strategy,
                  delivering work that doesn&apos;t just look premium — it <span className="text-accent font-medium">performs</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center p-8 rounded-2xl bg-surface border border-white/5"
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Values */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
            >
              Our Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
            >
              What drives{' '}
              <span className="gradient-text">everything we do</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/10 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection />
    </>
  );
}
