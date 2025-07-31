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
    const animationType = this.getAnimationType(element);
    
    switch (animationType) {
      case 'fade-in':
        this.fadeIn(element);
        break;
      case 'slide-in-left':
        this.slideInLeft(element);
        break;
      case 'slide-in-right':
        this.slideInRight(element);
        break;
      case 'slide-in-up':
        this.slideInUp(element);
        break;
      case 'scale-in':
        this.scaleIn(element);
        break;
      default:
        this.fadeIn(element);
    }

    // Stop observing this element
    this.observer.unobserve(element);
  }

  getAnimationType(element) {
    if (element.classList.contains('slide-in-left')) return 'slide-in-left';
    if (element.classList.contains('slide-in-right')) return 'slide-in-right';
    if (element.classList.contains('slide-in-up')) return 'slide-in-up';
    if (element.classList.contains('scale-in')) return 'scale-in';
    return 'fade-in';
  }

  fadeIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }

  slideInLeft(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-50px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    });
  }

  slideInRight(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(50px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    });
  }

  slideInUp(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }

  scaleIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.9)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    });
  }

  initParallax() {
    // Apple-style subtle parallax for hero backgrounds
    const heroElements = document.querySelectorAll('.hero-parallax');
    
    if (heroElements.length === 0) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      heroElements.forEach((hero) => {
        hero.style.transform = `translateY(${rate}px)`;
      });
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = this.easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }

  // Apple-style easing function
  static easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
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
