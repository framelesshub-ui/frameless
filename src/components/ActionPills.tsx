import React, { useState, useEffect } from 'react';

interface ActionPillsProps {
  onNavigate?: (destination: string) => void;
  className?: string;
}

const OFFICIAL_EMAIL = 'hello@framelesshub.com';

export const ActionPills: React.FC<ActionPillsProps> = ({
  onNavigate = () => {},
  className = '',
}) => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Reveal action pills ~500ms after initial mount
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = OFFICIAL_EMAIL;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-2 sm:gap-2.5 transition-all duration-[450ms] ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      } ${className}`}
    >
      {/* ── 1. Primary Action Pill: Explore Our Work ── */}
      <a
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('Work');
        }}
        className="group inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 bg-white text-[#050505] border border-white/[0.18] text-[13px] sm:text-[15px] font-medium transition-all duration-250 hover:bg-[#00d8f5] hover:text-[#020304] shadow-lg shadow-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d8f5]"
      >
        <span>Explore Our Work</span>
        <span className="transition-transform duration-250 ease-out group-hover:translate-x-1 inline-block">
          →
        </span>
      </a>

      {/* ── 2. Secondary Action Pill: Start a Project ── */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('Contact');
        }}
        className="inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 bg-white/[0.08] border border-white/[0.16] backdrop-blur-[12px] text-white text-[13px] sm:text-[15px] font-medium transition-all duration-250 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span>Start a Project</span>
      </a>

      {/* ── 3. Optional Small Pill: View Services ── */}
      <a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('Services');
        }}
        className="hidden sm:inline-flex items-center rounded-full px-4 sm:px-5 py-3 bg-white/[0.04] border border-white/[0.12] text-white/75 hover:text-white hover:bg-white/[0.10] text-[13px] sm:text-[14px] font-normal transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
      >
        <span>View Services</span>
      </a>

      {/* ── 4. Interactive Email Pill with Clipboard Copy ── */}
      <button
        type="button"
        onClick={handleCopyEmail}
        className="inline-flex items-center gap-2 text-white bg-[rgba(0,0,0,0.18)] border border-white/[0.28] backdrop-blur-[10px] rounded-full px-5 py-3 text-[13px] sm:text-[15px] hover:border-white/50 hover:bg-white/[0.05] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d8f5]"
        title="Click to copy email address"
        aria-label="Copy official email address"
      >
        {copied ? (
          <span className="text-[#00d8f5] font-medium flex items-center gap-1.5 font-mono text-[13px]">
            <svg
              className="w-3.5 h-3.5 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied
          </span>
        ) : (
          <>
            <span className="text-white/60">Reach us:</span>
            <span className="underline underline-offset-2 text-white/90 group-hover:text-white transition-colors">
              {OFFICIAL_EMAIL}
            </span>
            {/* 12x12 SVG copy icon with two overlapping rectangles */}
            <svg
              className="w-3 h-3 text-white/50 group-hover:text-white transition-colors flex-shrink-0"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              {/* Back rectangle */}
              <rect x="3.5" y="1" width="7" height="7.5" rx="1" />
              {/* Front rectangle */}
              <path d="M1.5 3.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H7.5" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export default ActionPills;
