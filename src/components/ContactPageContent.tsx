'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactPageContent() {
  return (
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen pt-32 sm:pt-40 pb-28">
      <div className="editorial-container">
        
        {/* Page Header */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA]">
              Contact
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
            Let’s make something great.
          </h1>
          <p className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed">
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
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/[0.08] space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1AA] mb-6">
                Direct Contact
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:framelesshub@gmail.com"
                    className="text-lg sm:text-xl font-medium text-white hover:text-[#00F0FF] transition-colors"
                  >
                    framelesshub@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href="tel:+918248628371"
                    className="text-lg sm:text-xl font-medium text-white hover:text-[#00F0FF] transition-colors"
                  >
                    +91 82486 28371
                  </a>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <p className="text-lg sm:text-xl font-medium text-white">
                    Chennai, India
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com/framelesshub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-medium text-white hover:text-[#00F0FF] transition-colors"
                  >
                    <span>@framelesshub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="pt-8 border-t border-white/[0.08]">
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                We review every inquiry directly. You will hear back from our core team within 24 to 48 hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
