import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

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
          Zenith Industries
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
                  <button 
                    className={`category-button ${activeCategory === 'Wear Resistant Rubber Sheet' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Wear Resistant Rubber Sheet')}
                  >
                    Wear Resistant Rubber Sheet
                  </button>
                  <button 
                    className={`category-button ${activeCategory === 'Specialised Abrasion Resistance' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Specialised Abrasion Resistance')}
                  >
                    Specialised Abrasion Resistance
                  </button>
                  <button 
                    className={`category-button ${activeCategory === 'Transit Rubber Flooring' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Transit Rubber Flooring')}
                  >
                    Transit Rubber Flooring
                  </button>
                  <button 
                    className={`category-button ${activeCategory === 'EPDM Water Proofing' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('EPDM Water Proofing')}
                  >
                    EPDM Water Proofing
                  </button>
                  <button 
                    className={`category-button ${activeCategory === 'Anti-Skid Flooring' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Anti-Skid Flooring')}
                  >
                    Anti-Skid Flooring
                  </button>
                  <button 
                    className={`category-button ${activeCategory === 'Custom Molded & Extrusion' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Custom Molded & Extrusion')}
                  >
                    Custom Molded & Extrusion
                  </button>
                  <button 
                    className={`category-button ${activeCategory === 'Coated Fabric' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Coated Fabric')}
                  >
                    Coated Fabric
                  </button>
                  <button 
                    className={`category-button ${activeCategory === 'Inflatables' ? 'active' : ''}`}
                    onClick={() => handleCategorySelect('Inflatables')}
                  >
                    Inflatables
                  </button>
                </div>
                
                {/* Industrial Rubber Sheet subcategory */}
                <div className={`subcategories ${activeCategory === 'Industrial Rubber Sheet' ? 'active' : ''}`}>
                  <h4>Industrial Rubber Sheet</h4>
                  <ul>
                    <li><Link to="/industrial-rubber-sheet/overview">Overview</Link></li>
                    <li><Link to="/industrial-rubber-sheet/natural-rubber-sbr">Natural Rubber / SBR Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/butyl-rubber">Butyl Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/chloroprene">Chloroprene Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/diaphragm">Diaphragm Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/epdm">EPDM Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/flouro-elastomer">Flouro Elastomer Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/hypalon">Hypalon Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/nitrile">Nitrile Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/hnbr">HNBR Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/food-grade">Food Grade Rubber Sheet</Link></li>
                    <li><Link to="/industrial-rubber-sheet/electrical-insulation">Electrical Insulation Rubber Matting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/potable-water">Potable Water Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/silicone">Silicone Rubber Sheeting</Link></li>
                  </ul>
                </div>
                
                {/* Wear Resistant Rubber Sheet subcategory */}
                <div className={`subcategories ${activeCategory === 'Wear Resistant Rubber Sheet' ? 'active' : ''}`}>
                  <h4>Wear Resistant Rubber Sheet</h4>
                  <ul>
                    <li><Link to="/wear-resistant-rubber-sheet/overview">Overview</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-super">Abra-Super® Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-line">Abra-Line Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-max">Abra-Max Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-tuff">Abra-Tuff Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-wear">Abra-Wear Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-eco">Abra-Eco Rubber Sheeting</Link></li>
                  </ul>
                </div>
                
                {/* Add remaining subcategories following the same pattern */}
                <div className={`subcategories ${activeCategory === 'Specialised Abrasion Resistance' ? 'active' : ''}`}>
                  <h4>Specialised Abrasion Resistance</h4>
                  <ul>
                    <li><Link to="/specialised-abrasion/abra-prene">Abra-Prene FR Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-super-oz">Abra-Super OZ Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-super-fg">Abra-Super FG Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-trile">Abra-Trile Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-fras">Abra-FRAS Sheeting</Link></li>
                  </ul>
                </div>
                
                <div className={`subcategories ${activeCategory === 'Transit Rubber Flooring' ? 'active' : ''}`}>
                  <h4>Transit Rubber Flooring</h4>
                  <ul>
                    <li><Link to="/transit-rubber-flooring/overview">Overview</Link></li>
                    <li><Link to="/transit-rubber-flooring/duraflor-multipurpose">DuraFlor Multipurpose Floor Covering</Link></li>
                    <li><Link to="/transit-rubber-flooring/dura-tranz">Dura-Tranz Fire Retardant Floor Covering</Link></li>
                    <li><Link to="/transit-rubber-flooring/one-piece-floor">One Piece Floor</Link></li>
                    <li><Link to="/transit-rubber-flooring/step-treads">Step Treads</Link></li>
                  </ul>
                </div>
                
                <div className={`subcategories ${activeCategory === 'EPDM Water Proofing' ? 'active' : ''}`}>
                  <h4>EPDM Water Proofing Solutions</h4>
                  <ul>
                    <li><Link to="/epdm-waterproofing/zena-seal">ZENA-SEAL EPDM Water roofing membrane</Link></li>
                    <li><Link to="/epdm-waterproofing/zep-1000">ZEP - 1000 (Contact Adhesive)</Link></li>
                    <li><Link to="/epdm-waterproofing/zafix">ZAFIX (Overlap sealant)</Link></li>
                    <li><Link to="/epdm-waterproofing/zebtape">ZEBTAPE (High performance butyl sealing tape)</Link></li>
                  </ul>
                </div>
                
                {/* Additional subcategories would follow the same pattern */}
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
