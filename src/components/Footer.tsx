'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SOCIAL_LINKS, SERVICES } from '@/lib/constants';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Instagram: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  YouTube: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Twitter: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030405] border-t border-white/[0.08] overflow-hidden">
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.png"
                alt="Frameless Hub"
                width={36}
                height={36}
                className="opacity-90 group-hover:scale-105 transition-transform"
              />
              <span className="text-base font-black tracking-tight text-white">
                FRAMELESS HUB
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6 font-normal">
              An independent creative studio engineering high-impact commercials, viral social systems, brand identities, and performance marketing engines.
            </p>
            <div className="text-xs font-mono text-white/40 space-y-1 mb-8">
              <div>Chennai, Tamil Nadu, India</div>
              <div>Available for Worldwide Projects</div>
            </div>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                  aria-label={link.label}
                >
                  {SOCIAL_ICONS[link.label] || link.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">
              Core Capabilities
            </h4>
            <ul className="space-y-3.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Line & Studio Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">
              Direct Contact
            </h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  General Inquiries & Briefs
                </span>
                <a
                  href="mailto:hello@framelesshub.com"
                  className="text-sm font-semibold text-white hover:text-accent transition-colors block"
                >
                  hello@framelesshub.com
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  WhatsApp Direct Line
                </span>
                <a
                  href="https://wa.me/918248628371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-400 hover:underline block"
                >
                  +91 82486 28371
                </a>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] hover:border-accent/40 text-xs font-mono uppercase tracking-wider text-white transition-all"
                >
                  <span>Start a Project</span>
                  <span className="text-accent">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Oversized Brand Watermark Across Bottom */}
        <div className="pt-12 pb-6 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[12vw] font-black leading-none tracking-tighter text-white/[0.03] uppercase whitespace-nowrap">
            FRAMELESS HUB
          </span>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            &copy; {currentYear} Frameless Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Chennai, India</span>
            <span>•</span>
            <span className="text-white/60">Zero Templates. Pure Craft.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
