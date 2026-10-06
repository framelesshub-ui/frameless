'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentRoute?: string;
  onNavigate?: (path: string) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'projects' | 'about' | 'contact'>('home');
  const pathname = usePathname() || currentRoute || '/';

  // 1. Scroll listener for frosted header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. IntersectionObserver for active section link on Home page
  useEffect(() => {
    if (pathname !== '/' && pathname !== '') {
      if (pathname.startsWith('/services')) setActiveSection('services');
      else if (pathname.startsWith('/work')) setActiveSection('projects');
      else if (pathname.startsWith('/about')) setActiveSection('about');
      else if (pathname.startsWith('/contact')) setActiveSection('contact');
      else setActiveSection('home');
      return;
    }

    const sectionIds: Array<'hero' | 'services' | 'projects' | 'about' | 'contact'> = [
      'hero',
      'services',
      'projects',
      'about',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'hero') setActiveSection('home');
            else if (id === 'services') setActiveSection('services');
            else if (id === 'projects') setActiveSection('projects');
            else if (id === 'about') setActiveSection('about');
            else if (id === 'contact') setActiveSection('contact');
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { label: 'Home', id: 'home', href: '/#hero', pageHref: '/' },
    { label: 'Services', id: 'services', href: '/#services', pageHref: '/services' },
    { label: 'Projects', id: 'projects', href: '/#projects', pageHref: '/work' },
    { label: 'About', id: 'about', href: '/#about', pageHref: '/about' },
    { label: 'Contact', id: 'contact', href: '/#contact', pageHref: '/contact' },
  ] as const;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navLinks[number]) => {
    if (pathname === '/' || pathname === '') {
      const targetEl = document.getElementById(item.id === 'home' ? 'hero' : item.id);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
      }
    } else if (onNavigate) {
      onNavigate(item.pageHref);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 sm:py-3.5 bg-white/75 backdrop-blur-[18px] border-b border-[#e6e8ee] shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
          : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
      }`}
      style={
        isScrolled
          ? {
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              WebkitBackdropFilter: 'blur(18px) saturate(1.8)',
              backdropFilter: 'blur(18px) saturate(1.8)',
              borderBottom: '1px solid #e6e8ee',
            }
          : undefined
      }
    >
      <div className="editorial-container flex items-center justify-between gap-4">
        {/* Left: Brand Logo + Wordmark */}
        <Link
          href="/#hero"
          onClick={(e) => {
            if (pathname === '/' || pathname === '') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff]"
        >
          <img
            src="/logo.png"
            alt="Frameless Hub Logo"
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden min-[540px]:inline font-heading text-xs sm:text-sm font-bold tracking-tight text-black uppercase">
            FRAMELESS HUB
          </span>
        </Link>

        {/* Center: 5 Nav Links (Under 620px: smaller size, always visible) */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-2.5 min-[380px]:gap-3.5 sm:gap-7 md:gap-9"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={pathname === '/' || pathname === '' ? `#${item.id === 'home' ? 'hero' : item.id}` : item.pageHref}
                onClick={(e) => handleLinkClick(e, item)}
                className={`fx-nav-link text-[11px] min-[400px]:text-xs sm:text-sm font-medium transition-colors ${
                  isActive ? 'text-black active-link font-semibold' : 'text-[#5b6170] hover:text-black'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Blue Glass "Start a project" Button (Hidden under 620px) */}
        <div className="hidden min-[620px]:flex items-center flex-shrink-0">
          <Link
            href="/#contact"
            onClick={(e) => {
              if (pathname === '/' || pathname === '') {
                const el = document.getElementById('contact');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="glass-btn-blue text-xs font-semibold py-2.5 px-5"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 inline-block" />
          </Link>
        </div>
      </div>
    </header>
  );
}
