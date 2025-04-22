/**
 * Accessibility Improvements
 * This script adds accessibility enhancements to the website
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add ARIA labels to any buttons without accessible names
  const unlabeledButtons = document.querySelectorAll('button:not([aria-label]):not([title])');
  unlabeledButtons.forEach(button => {
    if (!button.textContent.trim()) {
      if (button.classList.contains('close-menu')) {
        button.setAttribute('aria-label', 'Close menu');
      } else if (button.classList.contains('mobile-toggle')) {
        button.setAttribute('aria-label', 'Toggle mobile navigation');
      }
    }
  });

  const dropdownTriggers = document.querySelectorAll('.nav-list li > span, .dropdown-trigger');
  
  dropdownTriggers.forEach(trigger => {
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Improve form accessibility
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const formInputs = form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      const id = input.id || `${input.name}-field-${Math.random().toString(36).substring(2, 9)}`;
      input.id = id;
      // Find associated label
      const label = form.querySelector(`label[for="${id}"]`);
      if (!label) {
        // Create a label if it doesn't exist
        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', id);
        newLabel.textContent = input.placeholder || input.name;
        input.parentNode.insertBefore(newLabel, input);
      }
    });
  });

  // Add skip to content link for keyboard users
  const skipLink = document.createElement('a');
  skipLink.setAttribute('class', 'skip-link');
  skipLink.setAttribute('href', '#main-content');
  skipLink.textContent = 'Skip to main content';
  document.body.prepend(skipLink);

  // Add ID to main content area if it doesn't exist
  const main = document.querySelector('main');
  if (main && !main.id) {
    main.id = 'main-content';
  }
});

// Manage focus trap for modals and dropdown menus
export const setupFocusTrap = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const focusableElements = Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]'
  ));
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  // Add event listener to keep focus within the container
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      // If Shift+Tab on first element, move to last element
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      // If Tab on last element, move to first element
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
    
    // Close on Escape key
    if (e.key === 'Escape') {
      if (typeof container.close === 'function') {
        container.close();
      } else {
        // Try to find a close button and click it
        const closeButton = container.querySelector('.close, .close-btn, .close-button');
        if (closeButton) {
          closeButton.click();
        }
      }
    }
  });
  
  // Focus the first element when opened
  firstElement.focus();
  
  return {
    release: () => {
      container.removeEventListener('keydown');
    }
  };
};
