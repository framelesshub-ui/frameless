'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

const WHY_CHOOSE_US = [
  {
    title: 'Creative & trend-driven strategies',
    description: 'We align marketing initiatives with the latest social trends and industry-leading creative concepts.',
    icon: '✨',
  },
  {
    title: 'High-quality content creation',
    description: 'Stunning visual assets, high-end reels, short videos, and shoots that make you stand out.',
    icon: '🎬',
  },
  {
    title: 'Brand-focused marketing',
    description: 'Every campaign and asset is built to strengthen and reflect your core brand identity.',
    icon: '🎯',
  },
  {
    title: 'Performance-based campaigns',
    description: 'Data-guided campaigns designed to drive conversions, lead generation, and business growth.',
    icon: '📈',
  },
  {
    title: 'Young, creative & passionate team',
    description: 'A dynamic, digital-first team of creators, marketers, and web designers pushing creative limits.',
    icon: '⚡',
  },
  {
    title: 'Customized solutions for every brand',
    description: 'We build tailored strategies to fit the exact requirements, budget, and goals of your business.',
    icon: '⚙️',
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
              <div className="space-y-4 text-white/50 leading-relaxed font-normal">
                <p>
                  Frameless Hub is a creative digital marketing agency built for modern brands that
                  want more than just likes and followers.
                </p>
                <p>
                  We help businesses build a strong online presence through strategic marketing,
                  creative storytelling, and result-driven campaigns. Our goal is simple — create
                  content and marketing strategies that make brands impossible to ignore.
                </p>
                <p>
                  Whether you are a startup, local business, influencer, or established company,
                  we help you grow with creativity, consistency, and innovation.
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

      {/* Why Choose Us */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
            >
              Why Choose Us?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
            >
              Reasons to partner with{' '}
              <span className="gradient-text">Frameless Hub</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/10 transition-all duration-500"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.description}
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
