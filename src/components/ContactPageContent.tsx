'use client';

import React from 'react';
import { Mail, MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactPageContent() {
  return (
    <div className="bg-[#04060A] text-[#F5F7FA] min-h-screen pt-24 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-4">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4">
            Start a Project
          </h1>
          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed">
            Have a project in mind or seeking a dedicated studio partner for video production, YouTube scaling, or complete brand architecture? Let’s talk.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left/Right, Studio Info on Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Sidebar Info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Studio Coordinates */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F0FF] block mb-4">
                Headquarters
              </span>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Frameless Hub Studio</strong>
                    <p className="text-[#94A3B8] text-xs mt-0.5 leading-relaxed">
                      Chennai, Tamil Nadu, India • EST. 2026
                      <br />
                      Serving Global Partners
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00F0FF] shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold">Direct Email</strong>
                    <a
                      href="mailto:hello@framelesshub.com"
                      className="text-xs text-[#94A3B8] hover:text-[#00F0FF] transition-colors"
                    >
                      hello@framelesshub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00F0FF] shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold">Phone &amp; WhatsApp</strong>
                    <span className="text-xs text-[#94A3B8]">+91 98400 00000</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#00F0FF] shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold">Response Time</strong>
                    <span className="text-xs text-[#94A3B8]">Within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality & NDA Assurance */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-[#00F0FF] mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  NDA &amp; IP Protection
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                All scripts, proprietary brand assets, unpublished commercial concepts, and strategic discussions are strictly bound by studio non-disclosure protocols.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
