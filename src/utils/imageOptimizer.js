/**
 * Image Optimization Utilities
 * Helper functions for image optimization and lazy loading
 */

/**
 * Lazy loads all images on the page using Intersection Observer
 */
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          
          // Handle source elements for picture tags
          const sources = img.parentElement?.querySelectorAll('source[data-srcset]');
          sources?.forEach(source => {
            source.srcset = source.getAttribute('data-srcset');
            source.removeAttribute('data-srcset');
          });
          
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
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
      img.classList.add('loaded');
    });
  }
};

/**
 * Generate responsive image HTML
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

// Auto-setup when imported
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupLazyLoading);
}
