'use client';

import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import AnimatedButton from '@/components/AnimatedButton';
import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredWorks = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services Overview */}
      <SectionWrapper id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
            >
              Services built for the{' '}
              <span className="gradient-text">digital age</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Works */}
      <SectionWrapper id="featured-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
              >
                Selected Work
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
              >
                Projects that{' '}
                <span className="gradient-text">speak volumes</span>
              </motion.h2>
            </div>
            <AnimatedButton href="/work" variant="outline" size="sm">
              View All Work
            </AnimatedButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWorks.map((work, i) => (
              <PortfolioCard key={work.id} {...work} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Clients / Trust Bar */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold tracking-[0.3em] text-white/30 uppercase mb-12"
          >
            Trusted by forward-thinking brands
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {['NeoVault', 'Aura', 'Cipher', 'Drift', 'Orbis', 'Lumina'].map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xl md:text-2xl font-bold text-white/10 hover:text-white/30 transition-colors duration-500 cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
            >
              What our clients{' '}
              <span className="gradient-text">say</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection />
    </>
  );
}
