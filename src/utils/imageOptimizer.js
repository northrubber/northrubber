/**
 * Image Optimization Utilities
 * Helper functions for image optimization and lazy loading
 */

/**
 * Lazy loads all images on the page using Intersection Observer
 */
export const setupLazyLoading = () => {
  // Check for IntersectionObserver support
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          // Also handle source elements for picture tags
          const sources = img.parentElement.querySelectorAll('source[data-srcset]');
          sources.forEach(source => {
            source.srcset = source.getAttribute('data-srcset');
            source.removeAttribute('data-srcset');
          });
          
          observer.unobserve(img);
        }
      });
    });
    
    // Target all images that have a data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
    
    document.querySelectorAll('source[data-srcset]').forEach(source => {
      source.srcset = source.getAttribute('data-srcset');
      source.removeAttribute('data-srcset');
    });
  }
};

/**
 * Generate a responsive image tag with proper srcset attributes
 * 
 * @param {string} base - Base image path without file extension
 * @param {string} ext - File extension
 * @param {Array} sizes - Array of size objects {width, height}
 * @param {string} alt - Alt text for the image
 * @param {string} className - Optional CSS class
 * @returns {string} - HTML for responsive image
 */
export const responsiveImageHtml = (base, ext, sizes, alt = "", className = "") => {
  const srcset = sizes.map(size => `${base}-${size.width}w.${ext} ${size.width}w`).join(', ');
  const defaultSize = sizes[Math.floor(sizes.length / 2)];
  
  return `
    <img 
      src="${base}-${defaultSize.width}w.${ext}" 
      srcset="${srcset}" 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
      alt="${alt}" 
      class="${className}" 
      loading="lazy"
    >
  `;
};

/**
 * Check if images are properly sized for their containers
 * Logs warnings to console for oversized images
 */
export const checkImageSizing = () => {
  const images = document.querySelectorAll('img:not([data-skip-check])');
  
  images.forEach(img => {
    // Wait for image to load
    if (img.complete) {
      checkImageDimensions(img);
    } else {
      img.addEventListener('load', function() {
        checkImageDimensions(img);
      });
    }
  });
};

function checkImageDimensions(img) {
  const containerWidth = img.parentElement.offsetWidth;
  const containerHeight = img.parentElement.offsetHeight;
  
  // Allow for some scaling (2x for high DPI displays)
  const maxRecommendedWidth = containerWidth * 2;
  const maxRecommendedHeight = containerHeight * 2;
  
  if (img.naturalWidth > maxRecommendedWidth * 1.5) {
    console.warn(`Image too large: ${img.src} - Natural width (${img.naturalWidth}px) is much larger than container (${containerWidth}px)`);
  }
  
  if (img.naturalHeight > maxRecommendedHeight * 1.5) {
    console.warn(`Image too tall: ${img.src} - Natural height (${img.naturalHeight}px) is much larger than container (${containerHeight}px)`);
  }
}

// Setup lazy loading when imported
document.addEventListener('DOMContentLoaded', () => {
  setupLazyLoading();
  
  // Wait for everything to load before checking image sizing
  window.addEventListener('load', checkImageSizing);
});
