'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentRoute?: string;
  onNavigate?: (path: string) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || currentRoute || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Left: Brand Logo + Name */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <img
              src="/logo.png"
              alt="Frameless Hub Logo"
              className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
              FRAMELESS HUB
            </span>
          </Link>

          {/* Center: Work, Services, About (Desktop) */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-9">
            <Link
              href="/work"
              className={`text-xs font-medium tracking-wider uppercase transition-colors ${
                isActive('/work') ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Work
            </Link>
            <Link
              href="/services"
              className={`text-xs font-medium tracking-wider uppercase transition-colors ${
                isActive('/services') ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-xs font-medium tracking-wider uppercase transition-colors ${
                isActive('/about') ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right: Contact & Start a Project CTA (Desktop) */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/contact"
              className={`text-xs font-medium tracking-wider uppercase transition-colors ${
                isActive('/contact') ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-[#00F0FF] transition-colors duration-200"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-white focus:outline-none"
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-between pt-28 px-7 pb-10 border-b border-white/[0.08] animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
              Navigation
            </span>
            <Link
              href="/work"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-[#00F0FF] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-[#00F0FF] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-[#00F0FF] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-[#00F0FF] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#00F0FF] transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-xs font-mono text-[#71717A] text-center">
              Chennai, India • EST. 2026
            </p>
          </div>
        </div>
      )}
    </>
  );
}
