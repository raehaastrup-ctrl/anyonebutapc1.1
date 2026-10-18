import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'symbol' | 'monochrome';
  className?: string;
  showTagline?: boolean;
}

/**
 * Approved ANYONE BUT APC Brand Logo
 * 
 * Standalone Symbol: Large black 'A' crossed by a vivid red brushstroke 'X'.
 * Clear thin vertical divider.
 * Dominant 'ANYONE' wordmark, smaller 'BUT', and red 'APC'.
 * Tagline: 'UNITE OPPOSITION & ACTIVATE DIASPORA TO RESTORE DEMOCRACY'.
 * Zero faux seals, zero circular badges.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  showTagline = true,
}) => {
  // Standalone Symbol: Black 'A' crossed by vivid red brushstroke 'X'
  const SymbolSVG = ({ customSize = 'w-12 h-12' }: { customSize?: string }) => (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none shrink-0 ${customSize}`}
      aria-label="ANYONE BUT APC Symbol"
      role="img"
    >
      {/* Black Letter 'A' */}
      <path
        d="M80 14 L138 146 L104 146 L91 114 L69 114 L56 146 L22 146 Z M80 50 L72 90 L88 90 Z"
        fill="#080808"
      />

      {/* Red Brushstroke 'X' crossing through the 'A' */}
      <g id="brushstroke-x">
        {/* Stroke 1: Top-Left to Bottom-Right */}
        <path
          d="M26 38 
             C 42 54, 68 76, 96 98 
             C 114 112, 134 124, 142 128 
             C 140 122, 126 112, 110 98 
             C 86 78, 58 56, 38 34 
             C 30 26, 25 30, 26 38 Z"
          fill="#E30613"
        />
        <path
          d="M32 46 C 54 68, 86 94, 120 114 C 136 124, 144 128, 140 132 C 126 132, 106 122, 86 104 C 60 82, 38 60, 26 44 Z"
          fill="#E30613"
          opacity="0.9"
        />
        {/* Stroke 1 texture splatters */}
        <path d="M22 34 L30 40 L24 43 Z" fill="#E30613" />
        <path d="M138 122 L146 128 L140 133 Z" fill="#E30613" />

        {/* Stroke 2: Top-Right to Bottom-Left */}
        <path
          d="M134 38 
             C 118 54, 92 76, 64 98 
             C 46 112, 26 124, 18 128 
             C 20 122, 34 112, 50 98 
             C 74 78, 102 56, 122 34 
             C 130 26, 135 30, 134 38 Z"
          fill="#E30613"
        />
        <path
          d="M128 46 C 106 68, 74 94, 40 114 C 24 124, 16 128, 20 132 C 34 132, 54 122, 74 104 C 100 82, 122 60, 134 44 Z"
          fill="#E30613"
          opacity="0.9"
        />
        {/* Stroke 2 texture splatters */}
        <path d="M138 34 L130 40 L136 43 Z" fill="#E30613" />
        <path d="M22 122 L14 128 L20 133 Z" fill="#E30613" />
      </g>
    </svg>
  );

  // Standalone Symbol Only variant
  if (variant === 'symbol') {
    return <SymbolSVG customSize={className || 'w-12 h-12'} />;
  }

  // Monochrome Variant
  if (variant === 'monochrome') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 shrink-0"
        >
          <path
            d="M80 14 L138 146 L104 146 L91 114 L69 114 L56 146 L22 146 Z M80 50 L72 90 L88 90 Z"
            fill="currentColor"
          />
          <path
            d="M26 38 L142 128 M134 38 L18 128"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
        <div className="h-9 w-[1.5px] bg-current opacity-30" />
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display text-xl tracking-tighter uppercase font-black text-current">
            ANYONE
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-display text-sm tracking-tight uppercase font-black text-current">
              BUT
            </span>
            <span className="font-display text-sm tracking-tight uppercase font-black text-current">
              APC
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Compact Variant (Symbol + Divider + Typography, no tagline)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
        <SymbolSVG customSize="w-9 h-9 sm:w-11 sm:h-11" />
        <div className="h-8 sm:h-10 w-[1.5px] bg-[#080808]/20" aria-hidden="true" />
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display text-lg sm:text-2xl text-[#080808] uppercase tracking-tighter font-black leading-none">
            ANYONE
          </span>
          <div className="flex items-center gap-1 leading-none mt-0.5">
            <span className="font-display text-xs sm:text-sm text-[#080808] uppercase tracking-tight font-black leading-none">
              BUT
            </span>
            <span className="font-display text-xs sm:text-sm text-[#E30613] uppercase tracking-tight font-black leading-none">
              APC
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Full Brand Logo with Symbol, Thin Vertical Divider, ANYONE BUT APC Wordmark, and Tagline
  return (
    <div className={`flex items-center gap-3 sm:gap-4 select-none ${className}`}>
      <SymbolSVG customSize="w-12 h-12 sm:w-16 sm:h-16" />
      <div className="h-11 sm:h-14 w-[1.5px] bg-[#080808]/25" aria-hidden="true" />
      <div className="flex flex-col justify-center leading-none">
        <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#080808] uppercase tracking-tighter font-black leading-none">
          ANYONE
        </span>
        <div className="flex items-center gap-1.5 leading-none mt-1">
          <span className="font-display text-sm sm:text-lg text-[#080808] uppercase tracking-tight font-black leading-none">
            BUT
          </span>
          <span className="font-display text-sm sm:text-lg text-[#E30613] uppercase tracking-tight font-black leading-none">
            APC
          </span>
        </div>
        {showTagline && (
          <p className="hidden sm:block text-[9px] sm:text-[10px] font-bold text-neutral-600 tracking-wider uppercase mt-1">
            UNITE OPPOSITION &amp; ACTIVATE DIASPORA TO RESTORE DEMOCRACY
          </p>
        )}
      </div>
    </div>
  );
};
