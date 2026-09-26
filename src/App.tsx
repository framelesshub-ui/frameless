import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import WorkDetailPage from './pages/WorkDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export function App() {
  const [route, setRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p === '' ? '/' : p;
    }
    return '/';
  });

  const handleNavigate = (path: string) => {
    if (path === route) return;
    setRoute(path);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Update dynamic document title per route
  useEffect(() => {
    if (route.startsWith('/work/')) {
      const slug = route.replace('/work/', '');
      document.title = `${slug.replace(/-/g, ' ')} — Frameless Hub Case Study`;
    } else {
      switch (route) {
        case '/services':
          document.title = 'Services — Frameless Hub';
          break;
        case '/work':
          document.title = 'Selected Work — Frameless Hub';
          break;
        case '/about':
          document.title = 'About — Frameless Hub';
          break;
        case '/contact':
          document.title = 'Contact & Scoping — Frameless Hub';
          break;
        case '/':
        default:
          document.title = 'Frameless Hub — A Creative Media Agency';
          break;

      }
    }
  }, [route]);

  const renderCurrentPage = () => {
    if (route.startsWith('/work/')) {
      const slug = route.replace('/work/', '');
      return <WorkDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    switch (route) {
      case '/services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case '/work':
        return <WorkPage onNavigateContact={() => handleNavigate('/contact')} />;
      case '/about':
        return <AboutPage onNavigateContact={() => handleNavigate('/contact')} />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#04060A] text-[#F5F7FA] overflow-x-hidden selection:bg-[#00F0FF]/25 selection:text-white">
      {/* 1. Floating Glass Navigation Header */}
      <Header currentRoute={route} onNavigate={handleNavigate} />

      {/* 2. Main Page View */}
      <main id="main-content" className="relative z-10 w-full min-h-screen">
        {renderCurrentPage()}
      </main>

      {/* 3. Luxury Editorial Studio Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
