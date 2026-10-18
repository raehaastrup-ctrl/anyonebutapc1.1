import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { SITE_METADATA } from '../data/content';
import { Shield, Lock, FileCheck, Download, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-12 border-t-4 border-[#E30613]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo variant="circle-badge" size="md" />
              <div>
                <span className="font-display text-xl uppercase font-black tracking-tight text-white block">
                  ANYONE BUT APC
                </span>
                <span className="text-[10px] text-[#E30613] uppercase tracking-widest font-bold">
                  Restore Democracy
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed font-sans max-w-md pt-2">
              {SITE_METADATA.subheading}
            </p>
            <div className="p-4 bg-neutral-900 border-l-2 border-[#E30613] text-xs text-neutral-300 space-y-2">
              <p className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E30613]" aria-hidden="true" />
                Phase One Operating Boundary
              </p>
              <p>
                Independent and non-party-affiliated, critical of APC governance. We do not endorse opposition candidates, organise protests in Nigeria, or collect money.
              </p>
            </div>
          </div>

          {/* Civic Path (Paced) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E30613] font-sans">
              Civic Journey
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('manifesto')}
                  className="text-white font-bold hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#E30613]" />
                  <span>The Manifesto (Download)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('issues')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  The Issues &amp; Concerns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('democracy')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Democracy 101 Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('action')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Take Peaceful Action
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('evidence')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Verified Evidence Library
                </button>
              </li>
            </ul>
          </div>

          {/* Action Tools & Inquiries */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-sans">
              Tools &amp; Inquiries
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('write')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Civic Letter Templates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('updates')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Supporter Updates (Opt-In)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('party-contact')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Party Leadership Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Contact &amp; Media Desks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('checklist')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Launch Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-sans">
              Standards &amp; Privacy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  About Our Charter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('editorial')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  Editorial &amp; Corrections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer"
                >
                  UK GDPR &amp; NDPA Privacy
                </button>
              </li>
              <li>
                <a
                  href="https://nigerialaw.today/constitution-1999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-400 hover:text-white"
                >
                  <span>1999 Constitution (External)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Security & Architecture Badges */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-400 border-b border-neutral-800">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-neutral-200 block font-semibold">Privacy By Design</strong>
              <span>No supporter data is written to browser localStorage, cookies, or public repositories.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-neutral-200 block font-semibold">Immutable Research Standards</strong>
              <span>Every factual claim includes primary source links, status codes, and public correction logs.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-neutral-200 block font-semibold">Static Edge Architecture</strong>
              <span>Targeted for high-availability Cloudflare Pages static edge hosting with zero database exposure.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {SITE_METADATA.copyrightYear} {SITE_METADATA.name}. Independent Civic Advocacy Initiative. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Built with strict adherence to WCAG 2.2 AA accessibility standards and UK English copy.
          </p>
        </div>
      </div>
    </footer>
  );
};
