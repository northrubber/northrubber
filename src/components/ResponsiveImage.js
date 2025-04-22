import React from 'react';

/**
 * ResponsiveImage Component
 * Renders optimized, responsive images with proper loading attributes
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Main image source
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - Optional CSS class
 * @param {Object} props.sizes - Different image sizes for responsive loading
 * @param {boolean} props.lazy - Whether to lazy load the image
 */
const ResponsiveImage = ({ 
  src, 
  alt, 
  className, 
  sizes = {
    small: '',
    medium: '',
    large: ''
  }, 
  lazy = true 
}) => {
  // Check if we have responsive sizes defined
  const hasResponsiveSizes = sizes.small || sizes.medium || sizes.large;
  
  if (!hasResponsiveSizes) {
    // Simple image with lazy loading
    return (
      <img 
        src={src} 
        alt={alt || ''} 
        className={className || ''} 
        loading={lazy ? "lazy" : "eager"}
      />
    );
  }
  
  // Generate srcSet if we have multiple sizes
  let srcSet = '';
  let sizesAttr = '';
  
  if (sizes.small) srcSet += `${sizes.small} 400w, `;
  if (sizes.medium) srcSet += `${sizes.medium} 800w, `;
  if (sizes.large) srcSet += `${sizes.large} 1200w`;
  
  if (srcSet) {
    sizesAttr = '(max-width: 480px) 400px, (max-width: 960px) 800px, 1200px';
  }
  
  return (
    <img 
      src={src} 
      alt={alt || ''} 
      srcSet={srcSet || null}
      sizes={sizesAttr || null}
      className={className || ''} 
      loading={lazy ? "lazy" : "eager"}
    />
  );
};

export default ResponsiveImage;
