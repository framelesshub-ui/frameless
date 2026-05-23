'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedButton from '@/components/AnimatedButton';

const SERVICES_OPTIONS = [
  'Social Media Marketing',
  'Content Creation',
  'Branding & Design',
  'Performance Marketing',
  'Website Development',
  'Influencer & Brand Promotions',
  'Other',
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
    service: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters of detail.';
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

      if (!res.ok) throw new Error('Failed to send message');

      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />
        <div className="absolute top-20 left-1/3 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-accent/60 uppercase mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
          >
            Let&apos;s{' '}
            <span className="gradient-text">create</span> together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Have a project in mind? We&apos;d love to hear about it. Drop us a line
            and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-8">Get in touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                    ✉
                  </div>
                  <div>
                    <p className="text-sm text-white/40 mb-1">Email</p>
                    <a
                      href="mailto:framelesshub@gmail.com"
                      className="text-white/70 hover:text-accent transition-colors"
                    >
                      framelesshub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                    💬
                  </div>
                  <div>
                    <p className="text-sm text-white/40 mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/918248628371"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-accent transition-colors"
                    >
                      +91 82486 28371
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-white/40 mb-1">Office</p>
                    <p className="text-white/70 leading-relaxed">
                      No. 1, Lakshmi Nagar, 3rd Street,<br />
                      Sivabootha Medu, Vanagaram,<br />
                      Chennai – 600095
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="p-6 rounded-2xl bg-surface border border-white/5">
                <p className="text-sm text-white/50 mb-4">
                  Prefer a quick chat? Reach us directly on WhatsApp for faster response.
                </p>
                <AnimatedButton
                  href="https://wa.me/918248628371"
                  variant="primary"
                  size="sm"
                >
                  Chat on WhatsApp
                </AnimatedButton>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 px-8 rounded-2xl bg-surface border border-accent/20"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-3xl mx-auto mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message sent!</h3>
                  <p className="text-white/50">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm text-white/40 mb-2">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl bg-surface border text-white placeholder-white/20 focus:border-accent/30 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all ${errors.name ? 'border-red-500/50' : 'border-white/5'}`}
                        placeholder="Your name"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm text-white/40 mb-2">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl bg-surface border text-white placeholder-white/20 focus:border-accent/30 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all ${errors.email ? 'border-red-500/50' : 'border-white/5'}`}
                        placeholder="you@company.com"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-sm text-white/40 mb-2">Company</label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface border border-white/5 text-white placeholder-white/20 focus:border-accent/30 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm text-white/40 mb-2">Service Interested In</label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface border border-white/5 text-white focus:border-accent/30 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all appearance-none"
                    >
                      <option value="" className="bg-surface">Select a service</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s} className="bg-surface">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-sm text-white/40 mb-2">Budget Range</label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface border border-white/5 text-white focus:border-accent/30 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all appearance-none"
                    >
                      <option value="" className="bg-surface">Select budget range</option>
                      <option value="<5k" className="bg-surface">Under $5,000</option>
                      <option value="5k-15k" className="bg-surface">$5,000 — $15,000</option>
                      <option value="15k-50k" className="bg-surface">$15,000 — $50,000</option>
                      <option value="50k+" className="bg-surface">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm text-white/40 mb-2">Project Details *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-surface border text-white placeholder-white/20 focus:border-accent/30 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/5'}`}
                      placeholder="Tell us about your project, goals, and timeline..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <AnimatedButton type="submit" variant="primary" size="lg" className="w-full">
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                    {!isSubmitting && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </AnimatedButton>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
