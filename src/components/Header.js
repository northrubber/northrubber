import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState('industrial-rubber');
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ align: 'right', offset: 0 });
  
  const location = useLocation();
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  // Detect mobile viewport
  const checkIsMobile = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    return mobile;
  }, []);

  // Calculate dropdown position for desktop
  const calculateDropdownPosition = useCallback(() => {
    if (isMobile || !headerRef.current || !dropdownRef.current) return;

    const dropdownElement = dropdownRef.current;
    const navItem = dropdownElement.closest('.nav-item');
    if (!navItem) return;
    
    const navItemRect = navItem.getBoundingClientRect();
    const dropdownWidth = 800; // min(85vw, 800px) from CSS
    const viewportWidth = window.innerWidth;
    
    // Calculate the center position of the dropdown relative to the nav item
    const dropdownCenterX = navItemRect.left + (navItemRect.width / 2);
    const dropdownLeft = dropdownCenterX - (dropdownWidth / 2);
    const dropdownRight = dropdownCenterX + (dropdownWidth / 2);
    
    let align = 'center';
    let offset = 0;

    // Check if dropdown would overflow the right side
    if (dropdownRight > viewportWidth - 20) {
      align = 'right';
      offset = 0;
    }
    // Check if dropdown would overflow the left side
    else if (dropdownLeft < 20) {
      align = 'left';
      offset = 0;
    }

    setDropdownPosition({ align, offset });
  }, [isMobile]);

  // Clean up function
  const cleanupDropdown = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    document.body.style.overflow = '';
  }, []);

  // Close all menus
  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    cleanupDropdown();
  }, [cleanupDropdown]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        const wasMobile = isMobile;
        const nowMobile = checkIsMobile();
        
        // If switching from mobile to desktop or vice versa, reset states
        if (wasMobile !== nowMobile) {
          setIsMenuOpen(false);
          setActiveDropdown(null);
          document.body.style.overflow = '';
        }
        
        // Recalculate dropdown position on desktop
        if (!nowMobile && activeDropdown) {
          calculateDropdownPosition();
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [isMobile, activeDropdown, checkIsMobile, calculateDropdownPosition]);

  // Close menu when route changes
  useEffect(() => {
    closeAllMenus();
  }, [location, closeAllMenus]);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    if (isMobile) {
      const newState = !isMenuOpen;
      setIsMenuOpen(newState);
      
      if (newState) {
        setActiveDropdown(null); // Close any open dropdowns
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, [isMenuOpen, isMobile]);

  // Handle dropdown interactions
  const handleDropdownEnter = useCallback((dropdownName) => {
    if (isMobile) return; // Desktop only

    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }

    setActiveDropdown(dropdownName);
    setActiveCategory('industrial-rubber');
    
    // Calculate position after state update
    setTimeout(() => calculateDropdownPosition(), 0);
  }, [isMobile, calculateDropdownPosition]);

  const handleDropdownLeave = useCallback(() => {
    if (isMobile) return; // Desktop only

    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow moving to dropdown
  }, [isMobile]);

  const handleDropdownClick = useCallback((dropdownName) => {
    if (!isMobile) return; // Mobile only

    const newActiveDropdown = activeDropdown === dropdownName ? null : dropdownName;
    setActiveDropdown(newActiveDropdown);
    setActiveCategory('industrial-rubber');
    
    if (newActiveDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobile, activeDropdown]);

  // Handle category switching
  const handleCategorySwitch = useCallback((categoryKey) => {
    setActiveCategory(categoryKey);
  }, []);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!headerRef.current) return;
      
      // For mobile, close dropdown if clicking outside
      if (isMobile && activeDropdown && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('click', handleClickOutside, { passive: true });
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, activeDropdown]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeAllMenus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeAllMenus]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupDropdown();
    };
  }, [cleanupDropdown]);

  // Product categories data structure
  const productCategories = {
    'industrial-rubber': {
      title: 'Industrial Rubber Sheet',
      items: [
        { name: 'Overview', path: '/industrial-rubber-sheet/overview' },
        { name: 'Natural Rubber / SBR Sheeting', path: '/industrial-rubber-sheet/natural-rubber-sbr' },
        { name: 'Butyl Rubber Sheeting', path: '/industrial-rubber-sheet/butyl-rubber' },
        { name: 'Chloroprene Rubber Sheeting', path: '/industrial-rubber-sheet/chloroprene-rubber' },
        { name: 'Diaphragm Rubber Sheeting', path: '/industrial-rubber-sheet/diaphragm-rubber' },
        { name: 'EPDM Rubber Sheeting', path: '/industrial-rubber-sheet/epdm-rubber' },
        { name: 'Fluoro Elastomer Rubber Sheeting', path: '/industrial-rubber-sheet/fluoro-elastomer' },
        { name: 'Hypalon Rubber Sheeting', path: '/industrial-rubber-sheet/hypalon-rubber' },
        { name: 'Nitrile Rubber Sheeting', path: '/industrial-rubber-sheet/nitrile-rubber' },
        { name: 'HNBR Rubber Sheeting', path: '/industrial-rubber-sheet/hnbr-rubber' },
        { name: 'Food Grade Rubber Sheet', path: '/industrial-rubber-sheet/food-grade' },
        { name: 'Electrical Insulation Rubber Matting', path: '/industrial-rubber-sheet/electrical-insulation' },
        { name: 'Potable Water Rubber Sheeting', path: '/industrial-rubber-sheet/potable-water' },
        { name: 'Silicone Rubber Sheeting', path: '/industrial-rubber-sheet/silicone-rubber' }
      ]
    },
    'wear-resistant': {
      title: 'Wear Resistant Rubber Sheet',
      items: [
        { name: 'Overview', path: '/wear-resistant-rubber/overview' },
        { name: 'Abra-Super Rubber Sheeting', path: '/wear-resistant-rubber/abra-super' },
        { name: 'Abra-Line Rubber Sheeting', path: '/wear-resistant-rubber/abra-line' },
        { name: 'Abra-Max Rubber Sheeting', path: '/wear-resistant-rubber/abra-max' },
        { name: 'Abra-Tuff Rubber Sheeting', path: '/wear-resistant-rubber/abra-tuff' },
        { name: 'Abra-Wear Rubber Sheeting', path: '/wear-resistant-rubber/abra-wear' },
        { name: 'Abra-Eco Rubber Sheeting', path: '/wear-resistant-rubber/abra-eco' },
        { name: 'Abra-Prene FR Sheeting', path: '/wear-resistant-rubber/abra-prene-fr' },
        { name: 'Abra-Super OZ Sheeting', path: '/wear-resistant-rubber/abra-super-oz' },
        { name: 'Abra-Super FG Sheeting', path: '/wear-resistant-rubber/abra-super-fg' },
        { name: 'Abra-Trile Sheeting', path: '/wear-resistant-rubber/abra-trile' },
        { name: 'Abra-FRAS Sheeting', path: '/wear-resistant-rubber/abra-fras' },
        { name: 'Combi Rubber Sheeting', path: '/wear-resistant-rubber/combi-rubber' },
        { name: 'Skirtboard Rubber Sheeting', path: '/wear-resistant-rubber/skirtboard' }
      ]
    },
    'anti-skid': {
      title: 'Anti-Skid Flooring',
      items: [
        { name: 'Overview', path: '/anti-skid-flooring/overview' },
        { name: 'Fine Rib Mat', path: '/anti-skid-flooring/fine-rib' },
        { name: 'Mini Fine Rib Mat', path: '/anti-skid-flooring/mini-fine-rib' },
        { name: 'Flat Rib Mat', path: '/anti-skid-flooring/flat-rib' },
        { name: 'Broad Rib Mat', path: '/anti-skid-flooring/broad-rib' },
        { name: 'Wide Rib Mat', path: '/anti-skid-flooring/wide-rib' },
        { name: 'Truck Rib Mat', path: '/anti-skid-flooring/truck-rib' },
        { name: 'Transit Rib Mat', path: '/anti-skid-flooring/transit-rib' },
        { name: 'Diamond Design Mat', path: '/anti-skid-flooring/diamond-design' },
        { name: 'Square Stud Mat', path: '/anti-skid-flooring/square-stud' },
        { name: 'Checkered Mat', path: '/anti-skid-flooring/checkered' },
        { name: 'Diamond Checkered Mat', path: '/anti-skid-flooring/diamond-checkered' },
        { name: 'Coin Mat', path: '/anti-skid-flooring/coin-mat' },
        { name: 'Amoeba Mat', path: '/anti-skid-flooring/amoeba' },
        { name: 'Antiskid Gym Flooring', path: '/anti-skid-flooring/gym-flooring' }
      ]
    },
    'transit-flooring': {
      title: 'Transit Rubber Flooring',
      items: [
        { name: 'Overview', path: '/transit-rubber-flooring/overview' },
        { name: 'DuraFlor Multipurpose Floor Covering', path: '/transit-rubber-flooring/duraflor-multi' },
        { name: 'Dura-Tranz Fire Retardant Floor Covering', path: '/transit-rubber-flooring/dura-tranz' },
        { name: 'One Piece Floor', path: '/transit-rubber-flooring/one-piece' },
        { name: 'Step Treads', path: '/transit-rubber-flooring/step-treads' }
      ]
    },
    'rubber-flooring': {
      title: 'Rubber Flooring',
      items: [
        { name: 'Overview', path: '/rubber-flooring/overview' },
        { name: 'Duraflor Marbles', path: '/rubber-flooring/duraflor-marbles' },
        { name: 'Duraflor Solids', path: '/rubber-flooring/duraflor-solids' },
        { name: 'Duraflor Speckles', path: '/rubber-flooring/duraflor-speckles' }
      ]
    },
    'epdm-waterproofing': {
      title: 'EPDM Water Proofing Solutions',
      items: [
        { name: 'Salient Features', path: '/epdm-waterproofing/salient-features' },
        { name: 'Application Areas', path: '/epdm-waterproofing/application-areas' },
        { name: 'Technical Specification', path: '/epdm-waterproofing/technical-spec' },
        { name: 'ZEP - 1000 (Contact Adhesive)', path: '/epdm-waterproofing/zep-1000' },
        { name: 'ZAFIX (Overlap sealant)', path: '/epdm-waterproofing/zafix' },
        { name: 'ZEBTAPE (High performance butyl sealing tape)', path: '/epdm-waterproofing/zebtape' }
      ]
    },
    'coated-fabric': {
      title: 'Coated Fabric',
      items: [
        { name: 'Overview', path: '/coated-fabric/overview' },
        { name: 'KK 200 (Defence Application)', path: '/coated-fabric/kk-200' },
        { name: 'KK 600 (Defence Application)', path: '/coated-fabric/kk-600' },
        { name: 'Baffle Wall Fabric', path: '/coated-fabric/baffle-wall' },
        { name: 'Buoyancy Tube Fabric', path: '/coated-fabric/buoyancy-tube' },
        { name: 'Inflatable Collar Fabric', path: '/coated-fabric/inflatable-collar' },
        { name: 'Selection Chart', path: '/coated-fabric/selection-chart' },
        { name: 'Storage Tank Fabric', path: '/coated-fabric/storage-tank' },
        { name: 'Furnace Curtains / Welding Blankets Fabric', path: '/coated-fabric/furnace-curtains' },
        { name: 'Anti Wicking Coated Fabric', path: '/coated-fabric/anti-wicking' },
        { name: 'Diaphragm Fabric', path: '/coated-fabric/diaphragm-fabric' },
        { name: 'Gas Storage Balloon & Pillow Tank Fabric', path: '/coated-fabric/gas-storage' }
      ]
    },
    'inflatables': {
      title: 'Inflatables',
      items: [
        { name: 'Overview', path: '/inflatables/overview' },
        { name: 'Aircell', path: '/inflatables/aircell' },
        { name: 'Gas Holder Balloon', path: '/inflatables/gas-holder' },
        { name: 'Inflatable Work Boats', path: '/inflatables/work-boats' },
        { name: 'Life Raft', path: '/inflatables/life-raft' },
        { name: 'Storage Tanks', path: '/inflatables/storage-tanks' },
        { name: 'Surge Bladder', path: '/inflatables/surge-bladder' },
        { name: 'Oil Boom', path: '/inflatables/oil-boom' },
        { name: 'Aircraft Lifting Bag', path: '/inflatables/lifting-bag' },
        { name: 'Air Caster', path: '/inflatables/air-caster' }
      ]
    },
    'custom-molded': {
      title: 'Custom Molded & Extrusion',
      items: [
        { name: 'Custom Moulded Products', path: '/custom-molded/custom-moulded' },
        { name: 'Extruded Rubber Products', path: '/custom-molded/extruded-rubber' },
        { name: 'Rubber Anti Vibration Pads', path: '/custom-molded/anti-vibration' }
      ]
    },
    'rubber-compounds': {
      title: 'Rubber Compounds',
      items: [
        { name: 'Custom Compound', path: '/rubber-compounds/custom-compound' },
        { name: 'Jewellery Rubber Compound', path: '/rubber-compounds/jewellery-compound' }
      ]
    }
  };

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" onClick={closeAllMenus}>
              <img src={logo} alt="North Rubber" className="logo-image" />
            </Link>
          </div>
          
          <nav className="navbar">
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeAllMenus}>
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeAllMenus}>
                  About Us
                </Link>
              </li>
              
              <li 
                className={`nav-item dropdown ${activeDropdown === 'products' ? 'active' : ''}`}
                onMouseEnter={() => handleDropdownEnter('products')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className="nav-link dropdown-toggle"
                  onClick={() => handleDropdownClick('products')}
                  aria-expanded={activeDropdown === 'products'}
                  aria-haspopup="true"
                  type="button"
                >
                  Products
                </button>
                <div 
                  ref={dropdownRef}
                  className={`dropdown-menu products-dropdown ${dropdownPosition.align === 'center' ? '' : dropdownPosition.align}`}
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={handleDropdownLeave}
                  role="menu"
                  aria-label="Products menu"
                >
                  <div className="dropdown-categories" role="tablist">
                    {Object.entries(productCategories).map(([key, category]) => (
                      <button
                        key={key}
                        className={`category-item ${activeCategory === key ? 'active' : ''}`}
                        onClick={() => handleCategorySwitch(key)}
                        onMouseEnter={() => !isMobile && handleCategorySwitch(key)}
                        role="tab"
                        aria-selected={activeCategory === key}
                        aria-controls={`products-panel-${key}`}
                        type="button"
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                  <div 
                    className="dropdown-products"
                    role="tabpanel"
                    id={`products-panel-${activeCategory}`}
                    aria-labelledby={`category-${activeCategory}`}
                  >
                    <div className="products-header">
                      <h3>{productCategories[activeCategory]?.title}</h3>
                    </div>
                    <div className="products-list" role="menu">
                      {productCategories[activeCategory]?.items.map((item, index) => {
                        // Only make "Natural Rubber / SBR Sheeting" clickable
                        const isClickable = item.name === 'Natural Rubber / SBR Sheeting';
                        
                        if (isClickable) {
                          return (
                            <Link
                              key={index}
                              to={item.path}
                              onClick={closeAllMenus}
                              className="product-link"
                              role="menuitem"
                            >
                              {item.name}
                            </Link>
                          );
                        } else {
                          return (
                            <span
                              key={index}
                              className="product-link disabled"
                              role="menuitem"
                              aria-disabled="true"
                            >
                              {item.name}
                            </span>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeAllMenus}>
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
