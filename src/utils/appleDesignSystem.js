// Apple Design System Utilities
export const appleDesignSystem = {
  // Color utilities
  colors: {
    primary: '#1d1d1f',
    accent: '#007aff',
    success: '#30d158',
    warning: '#ff9500',
    danger: '#ff3b30',
    text: {
      primary: '#1d1d1f',
      secondary: '#86868b',
      tertiary: '#aeaeb2',
    },
    bg: {
      primary: '#ffffff',
      secondary: '#f5f5f7',
      tertiary: '#fafafa',
    }
  },

  // Animation utilities
  animations: {
    // Smooth scroll to element
    scrollTo: (element, offset = 80) => {
      const targetElement = typeof element === 'string' 
        ? document.querySelector(element) 
        : element;
      
      if (!targetElement) return;

      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    },

    // Add hover effects to elements
    addHoverEffect: (selector) => {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          element.style.transform = 'translateY(-2px)';
          element.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        element.addEventListener('mouseleave', () => {
          element.style.transform = 'translateY(0)';
          element.style.boxShadow = '';
        });
      });
    },

    // Stagger animation for multiple elements
    staggerIn: (elements, delay = 100) => {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * delay);
      });
    }
  },

  // Accessibility utilities
  a11y: {
    // Ensure proper focus management
    manageFocus: () => {
      // Add focus-visible polyfill behavior
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('user-is-tabbing');
        }
      });
      
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('user-is-tabbing');
      });
    },

    // Enhanced keyboard navigation
    enhanceKeyboardNav: () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          // Close any open modals or dropdowns
          const activeModal = document.querySelector('.modal.active');
          const activeDropdown = document.querySelector('.dropdown-menu.active');
          
          if (activeModal) {
            activeModal.classList.remove('active');
          }
          
          if (activeDropdown) {
            activeDropdown.classList.remove('active');
          }
        }
      });
    }
  },

  // Performance utilities
  performance: {
    // Debounce function for scroll events
    debounce: (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Throttle function for frequent events
    throttle: (func, limit) => {
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
    },

    // Lazy load images with intersection observer
    lazyLoadImages: () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  },

  // Responsive utilities
  responsive: {
    // Check if mobile device
    isMobile: () => window.innerWidth <= 768,
    
    // Check if tablet device
    isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
    
    // Check if desktop device
    isDesktop: () => window.innerWidth > 1024,
    
    // Add responsive classes to body
    updateBreakpoints: () => {
      const body = document.body;
      body.classList.remove('mobile', 'tablet', 'desktop');
      
      if (appleDesignSystem.responsive.isMobile()) {
        body.classList.add('mobile');
      } else if (appleDesignSystem.responsive.isTablet()) {
        body.classList.add('tablet');
      } else {
        body.classList.add('desktop');
      }
    }
  },

  // Initialize all utilities
  init: () => {
    // Initialize accessibility features
    appleDesignSystem.a11y.manageFocus();
    appleDesignSystem.a11y.enhanceKeyboardNav();
    
    // Initialize performance features
    appleDesignSystem.performance.lazyLoadImages();
    
    // Initialize responsive features
    appleDesignSystem.responsive.updateBreakpoints();
    window.addEventListener('resize', appleDesignSystem.performance.throttle(
      appleDesignSystem.responsive.updateBreakpoints, 
      100
    ));
    
    // Add Apple-style focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .user-is-tabbing *:focus {
        outline: 2px solid var(--accent) !important;
        outline-offset: 2px !important;
      }
      
      body:not(.user-is-tabbing) *:focus {
        outline: none !important;
      }
    `;
    document.head.appendChild(style);
  }
};

// Auto-initialize when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', appleDesignSystem.init);
}

export default appleDesignSystem;
