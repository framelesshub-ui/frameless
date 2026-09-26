'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqenkryn';

const SERVICE_OPTIONS = [
  'Branding',
  'Video Production',
  'YouTube Management',
  'Digital Growth',
  'Full Creative Direction',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    service: 'Branding',
    message: '',
    budget: '',
    timeline: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Unable to send enquiry. Please try again or email us directly.');
        }
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection or email framelesshub@gmail.com.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center">
        <div className="w-14 h-14 rounded-full bg-white/[0.05] border border-white/20 text-[#00F0FF] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message received.</h3>
        <p className="text-sm text-[#A1A1AA] max-w-md mx-auto mb-6">
          Thank you for reaching out. We will review your project details and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: '',
              email: '',
              contact: '',
              company: '',
              service: 'Branding',
              message: '',
              budget: '',
              timeline: '',
            });
            setStatus('idle');
          }}
          className="text-xs font-mono uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors cursor-pointer"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Error notification if submission failed */}
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-3">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Contact / Phone */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
            Contact
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="+91 00000 00000"
            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>

        {/* Company / Brand */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
            Company / Brand
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Brand or Studio name"
            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>
      </div>

      {/* What do you need? */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
          What do you need?
        </label>
        <input type="hidden" name="service" value={formData.service} />
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setFormData({ ...formData, service: opt })}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                formData.service === opt
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.03] text-[#A1A1AA] hover:text-white border border-white/[0.08]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us what you're working on and what you need..."
          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#00F0FF] transition-colors resize-none"
        />
      </div>

      {/* Optional: Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2">
            Budget (Optional)
          </label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            placeholder="e.g. ₹2L - ₹10L"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2">
            Timeline (Optional)
          </label>
          <input
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            placeholder="e.g. Next month, Q3"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white text-sm placeholder:text-[#52525B] focus:outline-none focus:border-[#00F0FF] transition-colors"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200 cursor-pointer disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
