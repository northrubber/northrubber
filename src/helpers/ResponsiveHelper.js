/**
 * Responsive Helper functions
 */

/**
 * Detect if the device is mobile
 * @returns {boolean} True if the device is likely mobile
 */
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
    (window.matchMedia("(max-width: 768px)").matches);
};

/**
 * Detect if the device is iOS
 * @returns {boolean} True if the device is iOS
 */
export const isIOSDevice = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * Detect if the device supports touch events
 * @returns {boolean} True if the device supports touch
 */
export const isTouchDevice = () => {
  return ('ontouchstart' in window) || 
         (navigator.maxTouchPoints > 0) || 
         (navigator.msMaxTouchPoints > 0);
};

/**
 * Get current viewport breakpoint
 * @returns {string} Breakpoint name (xs, sm, md, lg, xl)
 */
export const getCurrentBreakpoint = () => {
  if (window.matchMedia("(max-width: 480px)").matches) return 'xs';
  if (window.matchMedia("(max-width: 768px)").matches) return 'sm';
  if (window.matchMedia("(max-width: 992px)").matches) return 'md';
  if (window.matchMedia("(max-width: 1200px)").matches) return 'lg';
  return 'xl';
};

/**
 * Debounce function for resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Debounce wait time in ms
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 100) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

/**
 * Apply correct touch handling based on device
 * @param {HTMLElement} element - Element to apply touch handling
 */
export const optimizeForTouch = (element) => {
  if (isTouchDevice()) {
    element.style.cursor = 'pointer';
    
    // Use larger touch targets for buttons and links
    if (element.tagName === 'BUTTON' || element.tagName === 'A') {
      element.style.minHeight = '44px';
      element.style.padding = '12px 16px';
    }
  }
};
