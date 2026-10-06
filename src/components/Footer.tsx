'use client';

import React from 'react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-10 sm:py-12">
      <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--color-muted)]">
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
