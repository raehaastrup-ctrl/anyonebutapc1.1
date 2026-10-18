import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { Menu, X, Download, ArrowRight, Share2 } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

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

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Exactly 4 paced steps in total
  const navItems: { id: PageId; label: string; stepNumber: string }[] = [
    { id: 'home', label: 'Home', stepNumber: '1' },
    { id: 'manifesto', label: 'The Manifesto', stepNumber: '2' },
    { id: 'democracy', label: 'Democracy 101', stepNumber: '3' },
    { id: 'action', label: 'Take Action', stepNumber: '4' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-xs">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E30613] focus:text-white focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Top Bar with Campaign Hashtag & Quick Action */}
      <div className="bg-[#080808] text-white px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E30613] animate-pulse" aria-hidden="true" />
            <span className="font-bold tracking-wider uppercase text-neutral-300 text-[11px]">
              Independent Civic Initiative
            </span>
            <span className="text-neutral-500 hidden sm:inline">|</span>
            <span className="text-neutral-300 hidden sm:inline text-[11px] font-mono">
              {SITE_METADATA.campaignHashtag}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-neutral-400 hidden md:inline">Follow @anyonebutapc on TikTok, IG, X &amp; FB</span>
            <button
              onClick={() => handleNavClick('manifesto')}
              className="text-[#E30613] hover:text-white font-bold underline cursor-pointer flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Download Manifesto</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Approved Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus-visible:outline-2 focus-visible:outline-[#E30613] p-1 -ml-1 cursor-pointer"
            aria-label="ANYONE BUT APC - Return to Home"
          >
            <BrandLogo variant="compact" />
          </button>

          {/* Desktop 4-Step Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`tap-target px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border-b-2 ${
                    isActive
                      ? 'border-[#E30613] text-[#080808] bg-neutral-100'
                      : 'border-transparent text-neutral-600 hover:text-[#080808] hover:bg-neutral-50'
                  }`}
                >
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-mono ${isActive ? 'bg-[#E30613] text-white' : 'bg-neutral-200 text-neutral-700'}`}>
                    0{item.stepNumber}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Quick CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('action')}
              className="tap-target px-4 py-2.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>Take Action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('manifesto')}
              className="p-2 bg-neutral-100 text-[#080808] border border-black/10 text-xs font-bold uppercase flex items-center gap-1"
              aria-label="Download Manifesto"
            >
              <Download className="w-4 h-4 text-[#E30613]" />
              <span className="hidden xs:inline">Manifesto</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="tap-target p-2 text-[#080808] hover:bg-neutral-100 border border-black/10 focus-visible:outline-2 focus-visible:outline-[#E30613] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] z-50 bg-white border-t border-black/10 flex flex-col justify-between overflow-y-auto p-6 animate-fadeIn">
          <div className="space-y-6">
            <div className="border-b border-black/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
                The 4 Civic Steps
              </span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`tap-target text-left px-4 py-3.5 text-base font-bold uppercase tracking-tight flex items-center justify-between border-2 transition-colors cursor-pointer ${
                      isActive
                        ? 'border-[#E30613] bg-[#080808] text-white'
                        : 'border-black/10 bg-neutral-50 text-[#080808] hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2 py-0.5 font-mono ${isActive ? 'bg-[#E30613] text-white' : 'bg-neutral-200 text-neutral-800'}`}>
                        Step 0{item.stepNumber}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#E30613]' : 'text-neutral-400'}`} />
                  </button>
                );
              })}
            </nav>

            {/* Quick Action in Mobile Drawer */}
            <div className="pt-2 space-y-3">
              <button
                onClick={() => handleNavClick('action')}
                className="w-full py-3.5 bg-[#E30613] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Write to Your MP &amp; Share Post</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social media handles in mobile drawer */}
          <div className="pt-6 border-t border-black/10 mt-6 space-y-2 text-xs text-neutral-600">
            <div className="font-bold text-[#080808] uppercase tracking-wider">
              Follow &amp; Tag {SITE_METADATA.campaignHashtag}
            </div>
            <p className="text-[11px] text-neutral-500">
              Username is <strong className="text-[#080808]">@anyonebutapc</strong> on TikTok, Instagram, Facebook, and X.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
