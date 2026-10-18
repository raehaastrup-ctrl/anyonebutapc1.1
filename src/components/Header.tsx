import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { Menu, X, ArrowRight, Download, ShieldAlert, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Paced, beginner-friendly primary navigation
  const primaryNavItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'manifesto', label: 'The Manifesto', badge: 'Start Here' },
    { id: 'issues', label: 'The Issues' },
    { id: 'democracy', label: 'Democracy 101' },
    { id: 'action', label: 'Take Action' },
    { id: 'evidence', label: 'Evidence Library' },
  ];

  // Secondary sub-items accessible in mobile drawer or footer
  const secondaryNavItems: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About Our Charter' },
    { id: 'write', label: 'Civic Letters' },
    { id: 'updates', label: 'Supporter Updates' },
    { id: 'party-contact', label: 'Party Leadership Desk' },
    { id: 'contact', label: 'Contact Desks' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-xs">
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E30613] focus:text-white focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Paced Civic Banner */}
      <div className="bg-[#080808] text-white px-4 py-1.5 text-xs font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E30613] animate-pulse" aria-hidden="true" />
            <span className="uppercase text-[11px] font-bold text-neutral-300">Phase One Civic Movement</span>
            <span className="hidden sm:inline text-neutral-500">|</span>
            <span className="text-neutral-200 hidden sm:inline text-[11px]">
              Step-by-step civic resources for democratic accountability. Zero protests organised in Nigeria.
            </span>
          </div>
          <button
            onClick={() => handleNavClick('manifesto')}
            className="text-[11px] text-[#E30613] hover:text-white underline font-bold cursor-pointer flex items-center gap-1"
          >
            <span>Read &amp; Download The 2026 Manifesto</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Anchor with Approved Circular Badge */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-[#E30613] p-1 -ml-1 cursor-pointer group"
            aria-label="ANYONE BUT APC - Return to Homepage"
          >
            <BrandLogo variant="compact-nav" showTagline={false} />
          </button>

          {/* Calm, Paced-Out Primary Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`tap-target px-3.5 py-2 text-sm font-bold tracking-tight uppercase transition-colors cursor-pointer border-b-2 relative ${
                    isActive
                      ? 'border-[#E30613] text-[#080808]'
                      : 'border-transparent text-[#252525] hover:text-[#E30613] hover:border-black/20'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] bg-[#E30613] text-white px-1.5 py-0.2 font-sans font-bold uppercase rounded-xs">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick('manifesto')}
              className="tap-target px-4 py-2 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-red-700 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Download Manifesto</span>
              <span className="sm:hidden">Manifesto</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden tap-target p-2 text-[#080808] hover:text-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Paced Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-white border-t border-black/10 z-40 overflow-y-auto p-6 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Paced Site Menu"
        >
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#E30613] mb-3">
                Guided Civic Journey (Paced Out)
              </p>
              <div className="space-y-1">
                {primaryNavItems.map((item, idx) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`w-full text-left tap-target px-4 py-3 text-base font-bold uppercase tracking-tight flex items-center justify-between border-b border-black/5 ${
                        isActive
                          ? 'bg-neutral-100 text-[#E30613] border-l-4 border-l-[#E30613]'
                          : 'text-[#080808] hover:bg-neutral-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-xs font-mono font-bold">
                          {idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {item.badge ? (
                        <span className="text-[10px] bg-[#E30613] text-white px-2 py-0.5 font-bold uppercase">
                          {item.badge}
                        </span>
                      ) : isActive ? (
                        <span className="text-xs font-bold text-[#E30613]">Active</span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-black/10">
              <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-2">
                More Pages &amp; Desks
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {secondaryNavItems.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleNavClick(sec.id)}
                    className="text-left p-2 hover:bg-neutral-100 text-neutral-700 font-medium"
                  >
                    {sec.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-black/10 space-y-3">
            <button
              onClick={() => handleNavClick('manifesto')}
              className="w-full tap-target py-3.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer hover:bg-red-700"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Manifesto</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
