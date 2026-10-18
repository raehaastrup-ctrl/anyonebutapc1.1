import React from 'react';

interface BrandLogoProps {
  variant?: 'circle-badge' | 'full-horizontal' | 'compact-nav' | 'symbol-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'circle-badge',
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  // Dimension helpers
  const sizeMap = {
    sm: { badge: 'w-10 h-10', text: 'text-lg', subtext: 'text-xs' },
    md: { badge: 'w-12 h-12 sm:w-14 sm:h-14', text: 'text-xl sm:text-2xl', subtext: 'text-xs sm:text-sm' },
    lg: { badge: 'w-20 h-20 sm:w-24 sm:h-24', text: 'text-2xl sm:text-3xl', subtext: 'text-sm sm:text-base' },
    xl: { badge: 'w-32 h-32 sm:w-40 sm:h-40', text: 'text-4xl', subtext: 'text-lg' },
  };

  const currentSize = sizeMap[size];

  // 1. The Official Approved Circular Logo Badge (Matching file_00000000803081f483c34ed9603eb06f.png)
  const CircularBadgeSVG = ({ customClass = '' }: { customClass?: string }) => (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${customClass || currentSize.badge}`}
      aria-label="ANYONE BUT APC Badge"
      role="img"
    >
      {/* Outer Red Ring */}
      <circle cx="250" cy="250" r="242" fill="#080808" stroke="#E30613" strokeWidth="16" />

      {/* Inner Black Disk */}
      <circle cx="250" cy="250" r="232" fill="#080808" />

      {/* Center White Bold Letter 'A' */}
      <g id="letter-A">
        <path
          d="M250 60 L385 320 L305 320 L278 260 L222 260 L195 320 L115 320 Z M250 148 L233 216 L267 216 Z"
          fill="#FFFFFF"
        />
      </g>

      {/* Vivid Red Brushstroke 'X' with Bristles & Grunge Textures */}
      <g id="red-brushstroke-x">
        {/* Stroke 1: Top-Left to Bottom-Right */}
        <path
          d="M130 135 
             C 175 168, 225 208, 280 238 
             C 320 258, 360 274, 385 282 
             C 388 274, 375 264, 345 248 
             C 290 220, 230 182, 178 142 
             C 152 122, 138 126, 130 135 Z"
          fill="#E30613"
        />
        <path
          d="M120 152 C 160 185, 215 220, 268 242 C 315 262, 355 278, 378 288 C 368 296, 345 284, 305 262 C 255 235, 195 198, 135 160 Z"
          fill="#E30613"
          opacity="0.95"
        />
        <path
          d="M142 124 C 180 154, 230 196, 285 235 C 335 268, 370 280, 390 286 C 382 290, 355 280, 318 258 C 265 224, 205 178, 148 132 Z"
          fill="#E30613"
          opacity="0.9"
        />
        {/* Top-Left Bristle Splatters */}
        <path d="M122 138 L142 152 L128 158 Z" fill="#E30613" />
        <path d="M115 146 L130 162 L120 168 Z" fill="#E30613" opacity="0.8" />
        <path d="M375 272 L392 284 L380 292 Z" fill="#E30613" />

        {/* Stroke 2: Top-Right to Bottom-Left */}
        <path
          d="M370 135 
             C 330 168, 280 210, 222 242 
             C 180 264, 138 280, 115 286 
             C 112 278, 128 266, 158 250 
             C 212 220, 272 180, 322 140 
             C 348 120, 362 126, 370 135 Z"
          fill="#E30613"
        />
        <path
          d="M380 152 C 340 185, 285 220, 232 242 C 185 262, 145 278, 122 288 C 132 296, 155 284, 195 262 C 245 235, 305 198, 365 160 Z"
          fill="#E30613"
          opacity="0.95"
        />
        <path
          d="M358 124 C 320 154, 270 196, 215 235 C 165 268, 130 280, 110 286 C 118 290, 145 280, 182 258 C 235 224, 295 178, 352 132 Z"
          fill="#E30613"
          opacity="0.9"
        />
        {/* Top-Right & Bottom-Left Bristles */}
        <path d="M378 138 L358 152 L372 158 Z" fill="#E30613" />
        <path d="M385 146 L370 162 L380 168 Z" fill="#E30613" opacity="0.8" />
        <path d="M125 272 L108 284 L120 292 Z" fill="#E30613" />
      </g>

      {/* Typography Block: Inside Circular Badge */}
      {/* Line 1: ANYONE in Heavy White Condensed */}
      <text
        x="250"
        y="385"
        textAnchor="middle"
        fontFamily="'Archivo Black', 'Impact', sans-serif"
        fontSize="82"
        fontWeight="900"
        fill="#FFFFFF"
        letterSpacing="-3"
      >
        ANYONE
      </text>

      {/* Line 2: BUT (White) and APC (Vivid Red #E30613) */}
      <text
        x="250"
        y="450"
        textAnchor="middle"
        fontFamily="'Archivo Black', 'Impact', sans-serif"
        fontSize="68"
        fontWeight="900"
        letterSpacing="-1"
      >
        <tspan fill="#FFFFFF">BUT </tspan>
        <tspan fill="#E30613">APC</tspan>
      </text>
    </svg>
  );

  // Variant 1: Pure Circular Badge (The new approved icon uploaded by user)
  if (variant === 'circle-badge' || variant === 'symbol-only') {
    return <CircularBadgeSVG customClass={className} />;
  }

  // Variant 2: Compact Navbar (Circle Badge + Clean Typography Header)
  if (variant === 'compact-nav') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <CircularBadgeSVG customClass="w-11 h-11 sm:w-12 sm:h-12 shrink-0 drop-shadow-sm" />
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tighter font-black leading-none">
            ANYONE
          </span>
          <div className="flex items-center gap-1 leading-none mt-0.5">
            <span className="font-display text-sm sm:text-base text-[#080808] uppercase tracking-tight font-black leading-none">
              BUT
            </span>
            <span className="font-display text-sm sm:text-base text-[#E30613] uppercase tracking-tight font-black leading-none">
              APC
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Variant 3: Full Master Horizontal Presentation
  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-3 sm:gap-4">
        <CircularBadgeSVG customClass="w-14 h-14 sm:w-16 sm:h-16 shrink-0 shadow-xs" />
        <div className="h-12 sm:h-14 w-[2px] bg-[#080808] shrink-0" aria-hidden="true" />
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display text-2xl sm:text-4xl text-[#080808] uppercase tracking-tighter font-black leading-none">
            ANYONE
          </span>
          <div className="flex items-center gap-2 leading-none mt-1">
            <span className="font-display text-lg sm:text-2xl text-[#080808] uppercase tracking-tight font-black leading-none">
              BUT
            </span>
            <span className="font-display text-lg sm:text-2xl text-[#E30613] uppercase tracking-tight font-black leading-none">
              APC
            </span>
          </div>
        </div>
      </div>

      {showTagline && (
        <div className="mt-2 pt-1.5 border-t border-black/10">
          <p className="text-[10px] sm:text-xs font-bold text-[#080808] tracking-wider uppercase font-sans whitespace-nowrap">
            UNITE OPPOSITION &amp; ACTIVATE DIASPORA TO RESTORE DEMOCRACY
          </p>
        </div>
      )}
    </div>
  );
};
