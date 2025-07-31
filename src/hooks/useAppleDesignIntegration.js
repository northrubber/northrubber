// Apple-Inspired Design Integration
import { useEffect } from 'react';

export const useAppleDesignIntegration = () => {
  useEffect(() => {
    // Initialize scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Add animation class based on element's data attributes or classes
          if (element.classList.contains('fade-in-on-scroll')) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
          
          if (element.classList.contains('slide-in-left')) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          }
          
          if (element.classList.contains('slide-in-right')) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          }
          
          if (element.classList.contains('slide-in-up')) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
          
          if (element.classList.contains('scale-in-on-scroll')) {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
          }
          
          // Stop observing this element
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animationElements = document.querySelectorAll('.animate-on-scroll');
    animationElements.forEach((element) => {
      observer.observe(element);
    });

    // Apple-style smooth header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (header) {
        if (currentScrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        // Add hide/show header on scroll (Apple-style)
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }
      
      lastScrollY = currentScrollY;
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    // Apple-style button hover effects
    const initButtonEffects = () => {
      const buttons = document.querySelectorAll('.btn, .button, .apple-hover');
      
      buttons.forEach((button) => {
        button.addEventListener('mouseenter', (e) => {
          if (!e.target.classList.contains('no-hover-effect')) {
            e.target.style.transform = 'translateY(-2px)';
          }
        });
        
        button.addEventListener('mouseleave', (e) => {
          if (!e.target.classList.contains('no-hover-effect')) {
            e.target.style.transform = 'translateY(0)';
          }
        });
      });
    };

    // Initialize button effects
    initButtonEffects();

    // Apple-style reduced motion support
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

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      observer.disconnect();
    };
  }, []);
};

export default useAppleDesignIntegration;
