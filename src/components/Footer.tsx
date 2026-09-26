'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.08] text-[#F4F4F5] pt-16 pb-12">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Brand info */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
                <img
                  src="/logo.png"
                  alt="Frameless Hub Logo"
                  className="w-7 h-7 object-contain"
                />
                <span className="font-mono text-sm font-bold tracking-widest text-white uppercase">
                  FRAMELESS HUB
                </span>
              </Link>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Premium Creative Agency.
                <br />
                Chennai, India.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <span className="block text-[11px] font-mono uppercase tracking-widest text-[#71717A] mb-4">
              Links
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              <li>
                <Link href="/work" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A1A1AA] hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <span className="block text-[11px] font-mono uppercase tracking-widest text-[#71717A] mb-4">
              Social
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              <li>
                <a
                  href="https://instagram.com/framelesshub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1AA] hover:text-[#00F0FF] transition-colors"
                >
                  Instagram : @framelesshub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <p>© 2026 Frameless Hub</p>
          <p>Created by Frameless Hub</p>
        </div>
      </div>
    </footer>
  );
}
