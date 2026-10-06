'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer className="bg-white text-black border-t border-[#e6e8ee] py-10 sm:py-12">
      <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5b6170]">
        {/* Left: Copyright */}
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Frameless Hub Logo"
            className="w-4 h-4 object-contain"
          />
          <span>© 2026 Frameless Hub. All rights reserved.</span>
        </div>

        {/* Right: Studio Location */}
        <div>
          <span>Chennai, Tamil Nadu, India</span>
        </div>
      </div>
    </footer>
  );
}
