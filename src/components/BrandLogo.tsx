import React from 'react';
interface BrandLogoProps {
 variant?: 'circle-badge' | 'full-horizontal' | 'compact-nav' | 'symbol-only';
 className?: string; size?: 'sm' | 'md' | 'lg' | 'xl'; showTagline?: boolean;
}
// Original PNGs only, with intrinsic proportions. Never crop, filter or redraw.
export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'circle-badge', className = '', size = 'md' }) => {
 const horizontal = variant === 'full-horizontal';
 const widths = { sm: '40px', md: '56px', lg: '96px', xl: '160px' };
 return <img src={horizontal ? '/brand/official-logo.png' : '/brand/official-badge.png'}
 alt="Anyone But APC" width={horizontal ? 1774 : 1254} height={horizontal ? 887 : 1254}
 className={className} style={{ display: 'block', width: horizontal ? 'min(100%, 480px)' : widths[size], height: 'auto', maxWidth: '100%', objectFit: 'contain', flexShrink: 0 }} />;
};
