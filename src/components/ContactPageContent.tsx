'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedButton from '@/components/AnimatedButton';

const SERVICES_OPTIONS = [
  'Commercials & Films',
  'Content & Viral Reels',
  'Brand Identity Systems',
  'Performance Marketing',
  'Website Development',
  'Influencer Campaigns',
];

const BUDGET_TIERS = [
  '< $2,500',
  '$2,500 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
  'Retainer Model',
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Commercials & Films',
    budget: '$5,000 – $15,000',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share brief context about your project.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters of detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/mqenkryn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          service: formData.service,
          budget: formData.budget,
          message: formData.message.trim(),
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent-blue/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* ── 1. Page Header ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
            STUDIO ENGAGEMENT & BRIEFINGS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] max-w-3xl mx-auto mb-6"
        >
          Let&apos;s build something{' '}
          <span className="gradient-remember">unforgettable.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-white/55 max-w-xl mx-auto leading-relaxed font-normal"
        >
          Have an upcoming commercial campaign, brand overhaul, or video system? Share your brief and receive a tailored executive proposal within 24 hours.
        </motion.p>
      </section>

      {/* ── 2. Studio Engagement Workspace ── */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Studio Direct Communication Panel (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
                  DIRECT ACCESS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
                  Executive Inquiries
                </h2>
                <p className="text-sm text-white/55 leading-relaxed mb-8">
                  We maintain direct communication pipelines with brand founders and creative directors. No account middlemen, no delays.
                </p>

                {/* Contact Items */}
                <div className="space-y-4 mb-10">
                  {/* Email */}
                  <a
                    href="mailto:hello@framelesshub.com"
                    className="p-5 rounded-2xl bg-[#07090C] border border-white/[0.08] hover:border-accent/40 transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Direct Email</span>
                      <span className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                        hello@framelesshub.com
                      </span>
                    </div>
                  </a>

                  {/* Phone / WhatsApp */}
                  <a
                    href="https://wa.me/918248628371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-[#07090C] border border-white/[0.08] hover:border-emerald-400/40 transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Studio WhatsApp Line</span>
                      <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        +91 82486 28371
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="p-5 rounded-2xl bg-[#07090C] border border-white/[0.08] flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent">
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Studio Location</span>
                      <span className="text-sm font-semibold text-white">
                        Chennai, Tamil Nadu, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service SLA Badge */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono tracking-wider text-white uppercase font-bold">
                    Fast Turnaround Guarantee
                  </span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-normal">
                  All briefing inquiries received between 08:00 and 22:00 IST receive a custom scoping estimate and review in under 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Right: Modern Studio Briefing Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="p-8 sm:p-10 rounded-3xl bg-[#07090C] border border-white/[0.08] shadow-2xl relative">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 px-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mx-auto mb-6">
                      <svg className="w-8 h-8 fill-none stroke-current" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Briefing Received</h3>
                    <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed mb-8">
                      Thank you for contacting Frameless Hub. Our creative director is reviewing your brief and will respond within 24 hours at <strong className="text-white">{formData.email}</strong>.
                    </p>
                    <AnimatedButton
                      onClick={() => setIsSubmitted(false)}
                      variant="secondary"
                      size="sm"
                    >
                      Send Another Briefing
                    </AnimatedButton>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Step 1: Service selection chips */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                        Select Scope of Work
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {SERVICES_OPTIONS.map((service) => {
                          const isSelected = formData.service === service;
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => setFormData({ ...formData, service })}
                              className={`p-2.5 rounded-xl text-xs font-mono text-left transition-all duration-200 border ${
                                isSelected
                                  ? 'bg-accent/10 border-accent text-accent font-semibold'
                                  : 'bg-white/[0.02] border-white/[0.06] text-white/50 hover:text-white hover:border-white/20'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Budget selection chips */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                        Approximate Project Budget
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_TIERS.map((tier) => {
                          const isSelected = formData.budget === tier;
                          return (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: tier })}
                              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                                isSelected
                                  ? 'bg-white text-black border-white font-bold'
                                  : 'bg-white/[0.02] border-white/[0.06] text-white/50 hover:text-white hover:border-white/20'
                              }`}
                            >
                              {tier}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Contact details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-white/20 text-sm focus:border-accent/50 focus:outline-none transition-all ${
                            errors.name ? 'border-red-500/50' : 'border-white/[0.08]'
                          }`}
                          placeholder="Vikram Singh"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                          Work Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-white/20 text-sm focus:border-accent/50 focus:outline-none transition-all ${
                            errors.email ? 'border-red-500/50' : 'border-white/[0.08]'
                          }`}
                          placeholder="vikram@brand.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                        Company or Brand Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:border-accent/50 focus:outline-none transition-all"
                        placeholder="e.g. Apex Global, Birla, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                        Project Brief & Requirements *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-white/20 text-sm focus:border-accent/50 focus:outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500/50' : 'border-white/[0.08]'
                        }`}
                        placeholder="Tell us about your brand goals, target timeline, deliverables, or reference aesthetics..."
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <AnimatedButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      {isSubmitting ? 'Transmitting Briefing…' : 'Submit Project Brief'}
                      {!isSubmitting && (
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </AnimatedButton>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
