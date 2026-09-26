'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

import { InstagramIcon, YouTubeIcon, LinkedInIcon } from './icons/SocialIcons';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/framelesshub', icon: InstagramIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@Framelessmediatamil', icon: YouTubeIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/framelesshub', icon: LinkedInIcon },

];


export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (href: string, e: React.MouseEvent) => {
    if (onNavigate && href.startsWith('/')) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <footer className="relative bg-[#04060A] text-[#F5F7FA] border-t border-white/[0.08] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00F0FF]/03 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Logo & Name */}
              <Link
                href="/"
                onClick={(e) => handleLink('/', e)}
                className="inline-flex items-center gap-3.5 group mb-6"
              >
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#080C14]/90 border border-[#00F0FF]/30 flex items-center justify-center p-1.5 overflow-hidden transition-all duration-300 group-hover:border-[#00F0FF] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105">
                  <img
                    src="/logo.png"
                    alt="Frameless Hub"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,240,255,0.45)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-lg font-bold tracking-widest text-white uppercase group-hover:text-[#00F0FF] transition-colors leading-none">
                    FRAMELESS HUB
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-[#94A3B8] uppercase mt-1">
                    A CREATIVE MEDIA AGENCY • EST. 2026
                  </span>
                </div>
              </Link>

              {/* Tagline */}
              <div className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight max-w-sm mb-6">
                Ideas.
                <br />
                Stories.
                <br />
                <span className="text-[#00F0FF]">Brands that last.</span>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md leading-relaxed font-normal">
                A creative media agency engineering cinematic commercial films, branding systems, YouTube engines, and performance marketing.
              </p>

            </div>

            {/* Studio Location */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mt-8 pt-6 border-t border-white/[0.06]">
              <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Chennai, India • Global Client Network</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-5">
              Navigation
            </span>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLink(link.href, e)}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00F0FF]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-5">
                Social Networks
              </span>
              <ul className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#94A3B8] hover:text-white transition-colors inline-flex items-center gap-2 group"
                      >
                        <Icon className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00F0FF] transition-colors" />
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#94A3B8]/60 group-hover:text-[#00F0FF] transition-colors" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Action Pill */}
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="block text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider mb-1">
                Direct Scoping
              </span>
              <p className="text-xs text-[#94A3B8] mb-3">
                Have an urgent production or brand timeline?
              </p>
              <Link
                href="/contact"
                onClick={(e) => handleLink('/contact', e)}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-[#00F0FF] transition-colors"
              >
                <span>Initiate Brief</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]/70">
          <p>© 2026 Frameless Hub. All Rights Reserved.</p>
          <p>Chennai, India • EST. 2026</p>
        </div>

      </div>
    </footer>
  );
}
