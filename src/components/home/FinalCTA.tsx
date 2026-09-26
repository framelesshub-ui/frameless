'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import Magnetic from '../Magnetic';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-40 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-t from-[#00F0FF]/5 to-transparent blur-[140px]"
      />

      <div className="editorial-container relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>07 / Initiate</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.02]">
            Have something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4F4F5] to-[#A1A1AA]">
              worth creating?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-12">
            Let’s talk about your next brand milestone, video campaign, or complete digital transformation.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16 sm:mb-24">
            <Magnetic strength={8}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>

            <Magnetic strength={5}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/[0.03] border border-white/20 hover:border-white hover:bg-white/[0.08] transition-all duration-300"
              >
                Explore Services
              </Link>
            </Magnetic>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/[0.08]">
            <div>
              <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Email Inquiries</span>
              </div>
              <a
                href="mailto:framelesshub@gmail.com"
                className="text-sm sm:text-base font-medium text-white hover:text-[#00F0FF] transition-colors"
              >
                framelesshub@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Direct Contact</span>
              </div>
              <a
                href="tel:+918248628371"
                className="text-sm sm:text-base font-medium text-white hover:text-[#00F0FF] transition-colors"
              >
                +91 82486 28371
              </a>
            </div>

            <div>
              <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Studio Headquarters</span>
              </div>
              <p className="text-sm sm:text-base font-medium text-white">
                Chennai, Tamil Nadu, India
              </p>
              <span className="text-[10px] font-mono text-[#71717A] uppercase">EST. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
