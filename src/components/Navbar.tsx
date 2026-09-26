import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  activeLink?: string;
  onSelectLink?: (link: string) => void;
}

const NAV_LINKS = ['Home', 'Services', 'Work', 'About', 'Contact'];

export const Navbar: React.FC<NavbarProps> = ({
  activeLink = 'Home',
  onSelectLink = () => {},
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 150ms intro animation fade into position
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 150);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(mountTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[20] transition-all duration-500 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
        }`}
      >
        <div className="w-full px-5 sm:px-8 lg:px-12 py-4 sm:py-5">
          <div
            className={`w-full flex items-center justify-between transition-all duration-[400ms] ease-out ${
              isScrolled
                ? 'px-5 sm:px-7 py-3 glass-nav-scrolled shadow-2xl shadow-black/40'
                : 'px-0 py-1 bg-transparent'
            }`}
          >
            {/* ── Brand Logo ── */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onSelectLink('Home');
              }}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00d8f5] rounded-lg"
              aria-label="Frameless Hub Homepage"
            >
              <img
                src="/logo.png"
                alt="Frameless Hub"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading text-[20px] sm:text-[23px] font-medium tracking-[-0.03em] text-white">
                FRAMELESS HUB
              </span>
            </a>

            {/* ── Desktop Center Navigation Links ── */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {NAV_LINKS.map((link) => {
                const isActive = activeLink === link;
                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectLink(link);
                    }}
                    className={`relative py-1 text-[15px] lg:text-[16px] font-normal transition-colors duration-200 focus:outline-none focus-visible:text-white ${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span>{link}</span>
                    {isActive && (
                      <span
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00d8f5] transition-all"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* ── Right Action CTA + Mobile Hamburger ── */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Desktop CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectLink('Contact');
                }}
                className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/[0.16] bg-white/[0.06] backdrop-blur-[16px] text-white text-[14px] font-medium transition-all duration-250 hover:bg-white hover:text-[#050505] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d8f5]"
              >
                <span>Start a Project</span>
                <span className="transition-transform duration-250 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative w-[42px] h-[42px] rounded-full bg-white/[0.07] border border-white/[0.10] backdrop-blur flex flex-col items-center justify-center gap-[5px] transition-colors hover:bg-white/[0.12] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d8f5]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {/* 3 horizontal bars with open/close 300ms transition */}
                <span
                  className={`w-5 h-[1.5px] bg-white rounded-full transition-transform duration-300 ease-out ${
                    mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-white rounded-full transition-opacity duration-300 ease-out ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-white rounded-full transition-transform duration-300 ease-out ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeLink={activeLink}
        onSelectLink={onSelectLink}
      />
    </>
  );
};

export default Navbar;
