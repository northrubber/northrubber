import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Add this import
import Header from './components/Header';  // Changed from Navbar to Header
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NaturalRubberSBR from './pages/NaturalRubberSBR';
import './App.css';
import './MobileOptimizations.css';

// Mobile viewport height fix
function setAppHeight() {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}

// Mobile optimization scripts
function initMobileOptimizations() {
  // Fix for iOS 100vh issue
  window.addEventListener('resize', setAppHeight);
  window.addEventListener('orientationchange', setAppHeight);
  setAppHeight();
  
  // Detect keyboard appearance on mobile
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    document.addEventListener('focusin', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        document.documentElement.classList.add('has-keyboard');
        e.target.closest('form, .form-container')?.classList.add('keyboard-active');
      }
    });
    
    document.addEventListener('focusout', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        document.documentElement.classList.remove('has-keyboard');
        document.querySelectorAll('.keyboard-active').forEach(el => {
          el.classList.remove('keyboard-active');
        });
      }
    });
  }
  
  // Enable passive event listeners for better scroll performance
  document.addEventListener('touchstart', function() {}, { passive: true });
  document.addEventListener('touchmove', function() {}, { passive: true });
  
  // Fix for CSS hover states on mobile devices
  document.addEventListener('touchend', function() {
    // Small delay to prevent hover states sticking
    setTimeout(function() {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'BUTTON' || activeEl.tagName === 'A')) {
        activeEl.blur();
      }
    }, 100);
  });
  
  // Fix dropdown menus on mobile
  const dropdownInit = () => {
    const dropdownToggle = document.querySelectorAll('.nav-list li > a, .nav-list li > span, .category-button');
    dropdownToggle.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
          // Check if this is a parent with dropdown
          const parent = this.parentNode;
          const hasDropdown = parent.querySelector('.dropdown-menu');
          
          if (hasDropdown) {
            e.preventDefault();
            
            // Use the active state directly without storing in a variable
            // eslint-disable-next-line no-unused-vars
            const isActive = hasDropdown.classList.contains('active');
            
            // Close all other dropdowns first
            document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
              if (menu !== hasDropdown) {
                menu.classList.remove('active');
                menu.parentNode.querySelector('a, span, button').classList.remove('active');
              }
            });
            
            // Toggle this dropdown
            hasDropdown.classList.toggle('active');
            this.classList.toggle('active');
          }
        }
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        if (!e.target.closest('.nav-list li')) {
          document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
            menu.parentNode.querySelector('a, span, button')?.classList.remove('active');
          });
        }
      }
    });
  };
  
  // Run when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', dropdownInit);
  } else {
    dropdownInit();
  }
}

// Call the initialization function
initMobileOptimizations();

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <div className="content">
          <Routes basename="/my-app">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industrial-rubber-sheet/natural-rubber-sbr" element={<NaturalRubberSBR />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
