'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentRoute?: string;
  onNavigate?: (path: string) => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || currentRoute || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-[#080C14]/80 backdrop-blur-xl border border-[#00F0FF]/20 shadow-[0_12px_36px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.06)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Left: Brand Logo + FRAMELESS HUB */}
            <Link
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] rounded-lg"
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F172A] to-[#080C14] border border-[#00F0FF]/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <span className="font-mono text-xs font-black tracking-tighter text-white group-hover:text-[#00F0FF] transition-colors">
                  FH
                </span>
                <span className="absolute inset-0 bg-[#00F0FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm sm:text-base font-bold tracking-widest text-white uppercase group-hover:text-[#00F0FF] transition-colors">
                  FRAMELESS HUB
                </span>
                <span className="text-[9px] font-mono tracking-wider text-[#94A3B8] uppercase -mt-0.5">
                  Studio • Chennai
                </span>
              </div>
            </Link>

            {/* Navigation links (Desktop) */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] ${
                      active
                        ? 'text-white bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right CTA: Start a Project → */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                onClick={(e) => handleLinkClick('/contact', e)}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-black uppercase bg-[#00F0FF] hover:bg-[#38BDF8] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#94A3B8] hover:text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#04060A]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 border-b border-white/[0.08] animate-in fade-in duration-200">
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest px-3 py-1 mb-2">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive(link.href)
                    ? 'text-white bg-[#00F0FF]/10 border border-[#00F0FF]/30'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-white/30">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick('/contact', e)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-[11px] font-mono text-[#94A3B8]">
              Frameless Hub • Chennai, India
            </p>
          </div>
        </div>
      )}
    </>
  );
}
