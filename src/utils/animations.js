// Apple-Inspired Animation Utilities
export class ScrollAnimations {
  constructor() {
    this.observedElements = new Map();
    this.init();
  }

  init() {
    // Create intersection observer for scroll animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Add scroll-based parallax effect for hero sections
    this.initParallax();
    
    // Start observing elements when DOM is ready
    this.observeElements();
  }

  observeElements() {
    // Observe elements with animation classes
    const animateElements = document.querySelectorAll(
      '.animate-on-scroll, .fade-in-on-scroll, .slide-in-on-scroll, .scale-in-on-scroll'
    );

    animateElements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  animateElement(element) {
    // Apply CSS class for smooth animation
    element.style.opacity = '1';
    element.style.transform = 'none';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    // Stop observing this element
    this.observer.unobserve(element);
  }

  initParallax() {
    // Apple-style subtle parallax for hero backgrounds
    const heroElements = document.querySelectorAll('.hero-parallax');
    
    if (heroElements.length === 0) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.2; // Reduced for better performance

      heroElements.forEach((hero) => {
        hero.style.transform = `translateY(${rate}px)`;
      });
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', this.throttle(handleScroll, 16), { passive: true });
  }

  // Improved throttle function
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Apple-style hover effects
  static addHoverEffects() {
    const hoverElements = document.querySelectorAll('.apple-hover');
    
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
      });

      element.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      });
    });
  }

  // Smooth scroll with Apple-like easing
  static smoothScrollTo(target, duration = 800) {
    const targetElement = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;
    
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  // Initialize reduced motion support
  static initReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      // Disable animations for users who prefer reduced motion
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  new ScrollAnimations();
  
  // Add hover effects
  ScrollAnimations.addHoverEffects();
  
  // Initialize reduced motion support
  ScrollAnimations.initReducedMotion();
});

export default ScrollAnimations;
