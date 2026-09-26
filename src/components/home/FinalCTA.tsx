'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-36 bg-[#080808] text-[#F4F4F5]">
      <div className="editorial-container">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-4">
            07 — Get in Touch
          </div>

          {/* Large Typography */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
            Have something
            <br />
            worth creating?
          </h2>

          {/* Button */}
          <div className="mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Details Underneath */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/[0.08]">
            <div>
              <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
                Email
              </div>
              <a
                href="mailto:framelesshub@gmail.com"
                className="text-sm sm:text-base font-medium text-white hover:text-[#00F0FF] transition-colors"
              >
                framelesshub@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
                Contact
              </div>
              <a
                href="tel:+918248628371"
                className="text-sm sm:text-base font-medium text-white hover:text-[#00F0FF] transition-colors"
              >
                +91 82486 28371
              </a>
            </div>

            <div>
              <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
                Location
              </div>
              <p className="text-sm sm:text-base font-medium text-white">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
