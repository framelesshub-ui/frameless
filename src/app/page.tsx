'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceCard from '@/components/ServiceCard';
import VideoCarousel from '@/components/VideoCarousel';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import AnimatedButton from '@/components/AnimatedButton';
import ClientMarquee from '@/components/ClientMarquee';
import AnimatedCounter from '@/components/AnimatedCounter';
import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS } from '@/lib/constants';

const STATS = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Brands Scaled' },
  { value: '12M+', label: 'Views Generated' },
  { value: '4.9', label: 'Average Rating' },
];

const WHY_US_PILLARS = [
  {
    number: '01',
    title: 'High-Retention Video Systems',
    description: 'We don’t just shoot videos; we engineer algorithmic retention hooks, rhythmic pacing, and cinematic visual aesthetics that captivate modern audiences.',
    tag: 'Cinema & Motion',
  },
  {
    number: '02',
    title: 'Bespoke Brand Architecture',
    description: 'Zero generic templates. Every identity, packaging concept, and digital asset is custom-tailored to position your brand at the absolute pinnacle of your niche.',
    tag: 'Identity & Strategy',
  },
  {
    number: '03',
    title: 'Performance & ROAS Discipline',
    description: 'Creative brilliance paired with analytical rigor. We build ad assets and web funnels designed specifically to lower CAC and maximize conversion rates.',
    tag: 'Growth & Ads',
  },
];

export default function Home() {
  const featuredWorks = PORTFOLIO_ITEMS;

  return (
    <div className="bg-[#040506] text-[#F5F7FA] min-h-screen selection:bg-[#00D8F5]/20 selection:text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logos Marquee */}
      <section className="relative py-14 overflow-hidden border-y border-white/[0.05] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
          <p className="text-center text-[11px] font-semibold tracking-[0.25em] text-white/35 uppercase">
            Trusted by forward-thinking brands & creators
          </p>
        </div>
        <ClientMarquee />
      </section>

      {/* 3. Agency Manifesto & Live Stats Counter */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Statement */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-6"
            >
              OUR MANIFESTO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
            >
              We reject the ordinary. We build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] via-[#2F80ED] to-[#4B63FF]">
                high-retention visual systems
              </span>{' '}
              that turn passive scrollers into loyal customers.
            </motion.h2>
          </div>

          {/* 4 Live Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="p-6 sm:p-8 rounded-[22px] bg-[#080A0D] border border-white/[0.07] text-center hover:border-[#00D8F5]/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF] mb-2 font-mono">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs sm:text-sm text-[#92969F] font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </SectionWrapper>

      {/* 4. Featured Works Showreel */}
      <SectionWrapper id="featured-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-3"
              >
                SELECTED WORK
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.02em] text-white"
              >
                Projects that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF]">
                  speak volumes
                </span>
              </motion.h2>
            </div>
            <AnimatedButton href="/work" variant="outline" size="sm">
              <span>View All Work</span>
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </AnimatedButton>
          </div>

          <VideoCarousel items={featuredWorks} />
        </div>
      </SectionWrapper>

      {/* 5. Services Overview Grid */}
      <SectionWrapper id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-3"
              >
                WHAT WE DO
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.02em] text-white"
              >
                Services built for the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF]">
                  digital age
                </span>
              </motion.h2>
            </div>
            <AnimatedButton href="/services" variant="outline" size="sm">
              <span>View All Services</span>
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </AnimatedButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. The Agency Edge (3 Pillars) */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-3"
            >
              WHY FRAMELESS HUB
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
            >
              Engineered for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF]">
                maximum impact
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {WHY_US_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 rounded-[24px] bg-[#080A0D] border border-white/[0.08] hover:border-[#00D8F5]/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#00D8F5] bg-[#00D8F5]/10 px-3 py-1 rounded-full border border-[#00D8F5]/20">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#92969F] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Client Testimonials */}
      <SectionWrapper id="testimonials">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-3"
            >
              CLIENT STORIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.02em] text-white"
            >
              What our partners{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF]">
                say about us
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. Wide Horizontal CTA */}
      <CTASection />
    </div>
  );
}
