import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';
import logo from '../assets/images/zenith-logo.png'; // Make sure this path is correct

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Industrial Rubber Sheet'); // Default active category
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [location]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Handle category selection
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  // Toggle dropdown visibility
  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Zenith Rubber Logo" />
        </Link>
        <div className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          {isMenuOpen && (
            <button className="close-menu" onClick={toggleMenu}>
              <i className="fas fa-times"></i>
            </button>
          )}
          
          <ul className="nav-list">
            <motion.li 
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className={location.pathname === '/' ? 'active' : ''}
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li 
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <Link to="/about">About Us</Link>
            </motion.li>
            <motion.li 
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className={`dropdown ${isProductsDropdownOpen ? 'dropdown-open' : ''}`}
              ref={dropdownRef}
            >
              <button 
                className={`nav-button ${activeCategory === 'Products' ? 'active' : ''}`}
                onClick={toggleProductsDropdown}
              >
                Products
              </button>
              <div 
                className={`dropdown-menu ${isProductsDropdownOpen ? 'active' : ''}`}
              >
                <div className="main-categories">
                  <button 
                    className={`category-button ${activeCategory === 'Industrial Rubber Sheet' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Industrial Rubber Sheet')}
                  >
                    Industrial Rubber Sheet
                  </button>
                  {/* ... other categories ... */}
                </div>
                <div className={`subcategories ${activeCategory === 'Industrial Rubber Sheet' ? 'active' : ''}`}>
                  <h4>Industrial Rubber Sheet</h4>
                  <ul>
                    <li><Link to="/industrial-rubber-sheet/natural-rubber-sbr">Natural Rubber / SBR</Link></li>
                    <li><Link to="/industrial-rubber-sheet/butyl-rubber">Butyl Rubber</Link></li>
                    {/* ... other subcategories ... */}
                  </ul>
                </div>
                {/* ... other subcategories sections ... */}
              </div>
            </motion.li>
            <motion.li 
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className={location.pathname === '/services' ? 'active' : ''}
            >
              <Link to="/services">Services</Link>
            </motion.li>
            <motion.li 
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              <Link to="/contact">Contact</Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
