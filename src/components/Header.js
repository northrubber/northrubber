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

  // Handle subcategory link click - enhance to be more forceful
  const handleSubcategoryLinkClick = (e) => {
    // Set state to close the dropdown
    setIsProductsDropdownOpen(false);
    
    // Also manually add the 'clicked' class for immediate visual effect
    const dropdownMenu = dropdownRef.current?.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.add('clicked');
      
      // Remove the class after navigation completes
      setTimeout(() => {
        dropdownMenu.classList.remove('clicked');
      }, 300);
    }
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
                    <li><Link to="/industrial-rubber-sheet/overview" onClick={handleSubcategoryLinkClick}>Overview</Link></li>
                    <li><Link to="/industrial-rubber-sheet/natural-rubber-sbr" onClick={handleSubcategoryLinkClick}>Natural Rubber / SBR Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/butyl-rubber" onClick={handleSubcategoryLinkClick}>Butyl Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/chloroprene" onClick={handleSubcategoryLinkClick}>Chloroprene Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/diaphragm" onClick={handleSubcategoryLinkClick}>Diaphragm Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/epdm" onClick={handleSubcategoryLinkClick}>EPDM Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/flouro-elastomer" onClick={handleSubcategoryLinkClick}>Flouro Elastomer Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/hypalon" onClick={handleSubcategoryLinkClick}>Hypalon Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/nitrile" onClick={handleSubcategoryLinkClick}>Nitrile Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/hnbr" onClick={handleSubcategoryLinkClick}>HNBR Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/food-grade" onClick={handleSubcategoryLinkClick}>Food Grade Rubber Sheet</Link></li>
                    <li><Link to="/industrial-rubber-sheet/electrical-insulation" onClick={handleSubcategoryLinkClick}>Electrical Insulation Rubber Matting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/potable-water" onClick={handleSubcategoryLinkClick}>Potable Water Rubber Sheeting</Link></li>
                    <li><Link to="/industrial-rubber-sheet/silicone" onClick={handleSubcategoryLinkClick}>Silicone Rubber Sheeting</Link></li>
                  </ul>
                </div>
                
                {/* Wear Resistant Rubber Sheet subcategory */}
                <div className={`subcategories ${activeCategory === 'Wear Resistant Rubber Sheet' ? 'active' : ''}`}>
                  <h4>Wear Resistant Rubber Sheet</h4>
                  <ul>
                    <li><Link to="/wear-resistant-rubber-sheet/overview" onClick={handleSubcategoryLinkClick}>Overview</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-super" onClick={handleSubcategoryLinkClick}>Abra-Super® Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-line" onClick={handleSubcategoryLinkClick}>Abra-Line Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-max" onClick={handleSubcategoryLinkClick}>Abra-Max Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-tuff" onClick={handleSubcategoryLinkClick}>Abra-Tuff Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-wear" onClick={handleSubcategoryLinkClick}>Abra-Wear Rubber Sheeting</Link></li>
                    <li><Link to="/wear-resistant-rubber-sheet/abra-eco" onClick={handleSubcategoryLinkClick}>Abra-Eco Rubber Sheeting</Link></li>
                  </ul>
                </div>
                
                {/* Add remaining subcategories following the same pattern */}
                <div className={`subcategories ${activeCategory === 'Specialised Abrasion Resistance' ? 'active' : ''}`}>
                  <h4>Specialised Abrasion Resistance</h4>
                  <ul>
                    <li><Link to="/specialised-abrasion/abra-prene" onClick={handleSubcategoryLinkClick}>Abra-Prene FR Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-super-oz" onClick={handleSubcategoryLinkClick}>Abra-Super OZ Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-super-fg" onClick={handleSubcategoryLinkClick}>Abra-Super FG Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-trile" onClick={handleSubcategoryLinkClick}>Abra-Trile Sheeting</Link></li>
                    <li><Link to="/specialised-abrasion/abra-fras" onClick={handleSubcategoryLinkClick}>Abra-FRAS Sheeting</Link></li>
                  </ul>
                </div>
                
                <div className={`subcategories ${activeCategory === 'Transit Rubber Flooring' ? 'active' : ''}`}>
                  <h4>Transit Rubber Flooring</h4>
                  <ul>
                    <li><Link to="/transit-rubber-flooring/overview" onClick={handleSubcategoryLinkClick}>Overview</Link></li>
                    <li><Link to="/transit-rubber-flooring/duraflor-multipurpose" onClick={handleSubcategoryLinkClick}>DuraFlor Multipurpose Floor Covering</Link></li>
                    <li><Link to="/transit-rubber-flooring/dura-tranz" onClick={handleSubcategoryLinkClick}>Dura-Tranz Fire Retardant Floor Covering</Link></li>
                    <li><Link to="/transit-rubber-flooring/one-piece-floor" onClick={handleSubcategoryLinkClick}>One Piece Floor</Link></li>
                    <li><Link to="/transit-rubber-flooring/step-treads" onClick={handleSubcategoryLinkClick}>Step Treads</Link></li>
                  </ul>
                </div>
                
                <div className={`subcategories ${activeCategory === 'EPDM Water Proofing' ? 'active' : ''}`}>
                  <h4>EPDM Water Proofing Solutions</h4>
                  <ul>
                    <li><Link to="/epdm-waterproofing/zena-seal" onClick={handleSubcategoryLinkClick}>ZENA-SEAL EPDM Water roofing membrane</Link></li>
                    <li><Link to="/epdm-waterproofing/zep-1000" onClick={handleSubcategoryLinkClick}>ZEP - 1000 (Contact Adhesive)</Link></li>
                    <li><Link to="/epdm-waterproofing/zafix" onClick={handleSubcategoryLinkClick}>ZAFIX (Overlap sealant)</Link></li>
                    <li><Link to="/epdm-waterproofing/zebtape" onClick={handleSubcategoryLinkClick}>ZEBTAPE (High performance butyl sealing tape)</Link></li>
                  </ul>
                </div>
                
                {/* Additional subcategories would follow the same pattern */}
              </div>
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
