import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { SITE_METADATA, SOCIAL_CHANNELS, ABOUT_DECLARATION } from '../data/content';
import { Shield, Lock, Download, ExternalLink, Mail, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-12 border-t-4 border-[#E30613]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="compact" className="text-white brightness-150" />
            
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md pt-2">
              {SITE_METADATA.subheading}
            </p>

            <div className="p-4 bg-neutral-900 border-l-2 border-[#E30613] text-xs text-neutral-300 space-y-2 max-w-md">
              <p className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E30613]" aria-hidden="true" />
                <span>Phase One Operating Boundary</span>
              </p>
              <p>
                Independent and non-party-affiliated, explicitly critical of APC governance. We do not endorse opposition candidates, organise protests in Nigeria, or collect money.
              </p>
            </div>
          </div>

          {/* Navigation: 4 Steps in Total */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
              The 4 Civic Steps
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer flex items-center gap-2"
                >
                  <span className="font-mono text-[10px] text-neutral-500">01</span>
                  <span>Home: What We Are Doing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('manifesto')}
                  className="text-white font-bold hover:underline cursor-pointer flex items-center gap-2"
                >
                  <span className="font-mono text-[10px] text-[#E30613]">02</span>
                  <span>The Manifesto (Download)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('democracy')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer flex items-center gap-2"
                >
                  <span className="font-mono text-[10px] text-neutral-500">03</span>
                  <span>Democracy 101 Guide</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('action')}
                  className="text-neutral-300 hover:text-white hover:underline cursor-pointer flex items-center gap-2"
                >
                  <span className="font-mono text-[10px] text-neutral-500">04</span>
                  <span>Take Action (MP Letters &amp; Social)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels: @anyonebutapc for all */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
              Official Social Channels
            </h3>
            <p className="text-xs text-neutral-400">
              Follow and tag <strong className="text-white font-mono">@anyonebutapc</strong> across all platforms.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SOCIAL_CHANNELS.map((ch) => (
                <a
                  key={ch.name}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-[#E30613] text-neutral-300 hover:text-white flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold block text-white">{ch.name}</span>
                    <span className="text-[10px] text-[#E30613] font-mono">{ch.handle}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 text-xs text-neutral-400">
              Campaign hashtag: <strong className="text-white font-mono">{SITE_METADATA.campaignHashtag}</strong>
            </div>
          </div>

        </div>

        {/* Bottom Disclosures & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {SITE_METADATA.copyrightYear} ANYONE BUT APC Civic Advocacy Initiative. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white underline cursor-pointer"
            >
              Privacy Policy &amp; GDPR
            </button>
            <button
              onClick={() => onNavigate('editorial')}
              className="hover:text-white underline cursor-pointer"
            >
              Editorial &amp; Corrections Policy
            </button>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-500">Contact: {SITE_METADATA.contactEmail}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
