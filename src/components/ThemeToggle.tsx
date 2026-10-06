'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read current theme from html[data-theme] initialized by the inline script in <head>
    try {
      const current = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
      if (current === 'light' || current === 'dark') {
        setTheme(current);
      } else {
        const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (stored === 'light' || stored === 'dark') {
          setTheme(stored);
          document.documentElement.setAttribute('data-theme', stored);
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const initial = prefersDark ? 'dark' : 'light';
          setTheme(initial);
          document.documentElement.setAttribute('data-theme', initial);
        }
      }
    } catch (e) {
      // Fallback safe handling
    }

    // Listen for system changes if user hasn't explicitly set localStorage
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem('theme')) {
          const sysTheme = e.matches ? 'dark' : 'light';
          setTheme(sysTheme);
          document.documentElement.setAttribute('data-theme', sysTheme);
        }
      } catch (err) {}
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {
      // Silently handle safari private browsing or restricted quota
    }
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="theme-toggle-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff]"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun
          className="theme-icon theme-icon-sun text-current"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <Moon
          className="theme-icon theme-icon-moon text-current"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}
