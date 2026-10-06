'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactPageContent() {
  return (
    <div className="bg-white text-black min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Page Header */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#5b6170]">
              Contact
            </span>
          </div>
          <h1 className="hero-h1 text-black font-heading mb-5">
            Let’s make something great<span className="text-[#0047ff]">.</span>
          </h1>
          <p className="body-lead text-base sm:text-xl text-[#5b6170] leading-relaxed">
            Tell us what you're working on and what you need.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Alongside Studio Details (5 cols) */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#e6e8ee] space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#5b6170] mb-6">
                Direct Contact
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#5b6170] uppercase tracking-wider block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:framelesshub@gmail.com"
                    className="text-lg sm:text-xl font-medium text-black hover:text-[#0047ff] transition-colors"
                  >
                    framelesshub@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#5b6170] uppercase tracking-wider block mb-1">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href="https://wa.me/918248628371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-black hover:text-[#0047ff] transition-colors group"
                  >
                    <span>+91 82486 28371</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0047ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#5b6170] uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <p className="text-lg sm:text-xl font-medium text-black">
                    Chennai, India
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#5b6170] uppercase tracking-wider block mb-1">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com/framelesshub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-medium text-black hover:text-[#0047ff] transition-colors"
                  >
                    <span>@framelesshub</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0047ff]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="pt-8 border-t border-[#e6e8ee]">
              <p className="text-xs text-[#5b6170] leading-relaxed">
                We review every inquiry directly. You will hear back from our core team within 24 to 48 hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
