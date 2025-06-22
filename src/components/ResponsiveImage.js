import React from 'react';

/**
 * ResponsiveImage Component
 * Renders optimized, responsive images with proper loading attributes
 */
const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '', 
  sizes, 
  lazy = true,
  ...props
}) => {
  // Generate srcSet if we have multiple sizes
  let srcSet = '';
  let sizesAttr = '';
  
  if (sizes?.small || sizes?.medium || sizes?.large) {
    if (sizes.small) srcSet += `${sizes.small} 400w, `;
    if (sizes.medium) srcSet += `${sizes.medium} 800w, `;
    if (sizes.large) srcSet += `${sizes.large} 1200w`;
    
    if (srcSet) {
      sizesAttr = '(max-width: 480px) 400px, (max-width: 960px) 800px, 1200px';
    }
  }
  
  return (
    <img 
      src={src} 
      alt={alt || ''} 
      srcSet={srcSet || undefined}
      sizes={sizesAttr || undefined}
      className={className} 
      loading={lazy ? "lazy" : "eager"}
      {...props}
    />
  );
};

export default ResponsiveImage;
