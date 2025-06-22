import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close mobile menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Handle dropdown toggle
  const toggleDropdown = (index, e) => {
    e.preventDefault();
    if (window.innerWidth <= 992) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  // Check if link is current active page
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="nav" aria-label="Main Navigation">
      <button 
        className="mobile-toggle" 
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="sr-only">Menu</span>
        <i className="fas fa-bars" aria-hidden="true"></i>
      </button>

      <div id="mobile-menu" className={`nav-container ${mobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="close-menu" 
          aria-label="Close Menu"
          onClick={() => setMobileMenuOpen(false)}
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>

        <ul className="nav-list">
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={isActive('/products') ? 'active' : ''}>
            <a 
              href="#" 
              onClick={(e) => toggleDropdown(0, e)}
              className={activeDropdown === 0 ? 'active' : ''}
              aria-expanded={activeDropdown === 0}
              aria-haspopup="true"
            >
              Products
            </a>
            <div className={`dropdown-menu ${activeDropdown === 0 ? 'active' : ''}`} aria-label="Products Menu">
              <div className="main-categories">
                <button 
                  className={`category-button ${activeDropdown === 0 ? 'active' : ''}`}
                  aria-expanded={activeDropdown === 0}
                >
                  Rubber Sheets
                </button>
                <button className="category-button">Rubber Mats</button>
                <button className="category-button">Gaskets</button>
                <button className="category-button">Seals</button>
              </div>
              <div className={`subcategories ${activeDropdown === 0 ? 'active' : ''}`}>
                <h4>Rubber Sheets By Material</h4>
                <ul>
                  <li><Link to="/products/natural-rubber-sbr">Natural Rubber/SBR</Link></li>
                  <li><Link to="/products">EPDM Rubber</Link></li>
                  <li><Link to="/products">Neoprene Rubber</Link></li>
                  <li><Link to="/products">Nitrile Rubber</Link></li>
                  <li><Link to="/products">Silicone Rubber</Link></li>
                </ul>
              </div>
            </div>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      
      {mobileMenuOpen && (
        <div className="overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navigation;
