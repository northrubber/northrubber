import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll events to determine active section
      const sections = ['home', 'about', 'services', 'featured-projects', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Special handling for projects sections
            if (section === 'featured-projects' || section === 'projects') {
              setActiveSection('projects');
            } else {
              setActiveSection(section);
            }
            break;
          }
        }
      }
      
      // Add box shadow to header when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <a href="#home" aria-label="Home" onClick={closeMenu}>
          <img src={logo} alt="AAXI Logo" className="logo-image" width="60" height="60" />
          <span className="logo-text">AAXI</span>
        </a>
      </div>
      
      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} role="navigation">
        <ul className="nav-links">
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Projects', href: '#featured-projects' },
            { label: 'Contact', href: '#contact' },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a 
                href={item.href} 
                aria-label={item.label} 
                onClick={closeMenu}
                className={activeSection === item.href.substring(1) || 
                  (item.href === '#featured-projects' && activeSection === 'projects') ? 'active' : ''}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
