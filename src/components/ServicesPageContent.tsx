'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { SERVICES } from '@/lib/constants';

// Extended service data with detailed info
const SERVICE_DETAILS = [
  {
    ...SERVICES[0],
    features: ['Content Planning', 'Page Management', 'Trend-Based Reels', 'Audience Engagement', 'Monthly Strategy', 'Analytics & Insights'],
    process: 'We help businesses build a strong online presence through strategic marketing, creative storytelling, and result-driven campaigns.',
  },
  {
    ...SERVICES[1],
    features: ['Reels and Short Videos', 'Product Shoots', 'Brand Videos', 'Promotional Content', 'Creative Editing', 'Storytelling Concepts'],
    process: 'Our goal is simple — create content and marketing strategies that make brands impossible to ignore.',
  },
  {
    ...SERVICES[2],
    features: ['Logo Design', 'Brand Identity', 'Social Media Designs', 'Posters & Creatives', 'Packaging Concepts', 'Brand Guidelines'],
    process: 'Your brand identity defines who you are. We craft visually stunning brand identities, logos, packaging concepts, and design systems.',
  },
  {
    ...SERVICES[3],
    features: ['Meta Ads', 'Google Ads', 'Lead Generation Campaigns', 'Retargeting Ads', 'Campaign Optimization'],
    process: 'Maximize your ROI with performance campaigns. We develop data-driven strategies for Meta and Google ads to generate quality leads.',
  },
  {
    ...SERVICES[4],
    features: ['Business Websites', 'Landing Pages', 'Portfolio Websites', 'UI/UX Design', 'Mobile Responsive Design', 'SEO Optimization'],
    process: 'Custom website development engineered for high performance. We create responsive business sites, landing pages, and portfolios.',
  },
  {
    ...SERVICES[5],
    features: ['Influencer Collaborations', 'Brand Promotions', 'Campaign Planning', 'Social Media Collaborations', 'Product Promotions'],
    process: 'Build relationships and drive awareness. We execute strategic influencer collaborations and brand promotions to amplify your reach.',
  },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
          >
            Crafting digital{' '}
            <span className="gradient-text">experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            From concept to final cut, we offer end-to-end creative services designed
            for brands that refuse to blend in.
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Detailed Service Sections */}
      {SERVICE_DETAILS.map((service, idx) => (
        <SectionWrapper key={service.id}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative aspect-square rounded-3xl overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="absolute inset-0 bg-surface border border-white/5 rounded-3xl" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ background: `linear-gradient(135deg, ${service.gradient.includes('#00E5FF') ? '#00E5FF' : '#7B61FF'}, transparent)` }}
                />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx < 2}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={idx % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-8">
                  {service.process}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <CTASection />
    </>
  );
}
