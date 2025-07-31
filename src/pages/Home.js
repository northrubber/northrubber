import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import '../utils/animations.js';
import ScrollAnimations from '../utils/animations.js';
import slide1 from '../assets/images/1.jpg';
import slide3 from '../assets/images/3.jpg';
import slide4 from '../assets/images/4.jpg';
import aboutImage from '../assets/images/about-image.png';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Updated to match the actual number of slides

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Initialize scroll animations after component mounts
  useEffect(() => {
    // Add a fallback class initially
    document.body.classList.add('no-animations');
    
    // Small delay to ensure DOM elements are fully rendered
    const timer = setTimeout(() => {
      try {
        // Remove fallback class
        document.body.classList.remove('no-animations');
        
        // Initialize animations for the current page
        const scrollAnimations = new ScrollAnimations();
        
        // Add hover effects
        ScrollAnimations.addHoverEffects();
        
        // Initialize reduced motion support
        ScrollAnimations.initReducedMotion();

        // Store reference for cleanup
        window.currentScrollAnimations = scrollAnimations;
      } catch (error) {
        console.warn('Animation initialization failed, showing content without animations:', error);
        // Keep the no-animations class if there's an error
        document.body.classList.add('no-animations');
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-animations');
      if (window.currentScrollAnimations && window.currentScrollAnimations.observer) {
        window.currentScrollAnimations.observer.disconnect();
        delete window.currentScrollAnimations;
      }
    };
  }, []);

  // Parallax scrolling effect
  useEffect(() => {
    let ticking = false;
    
    // Check if device supports touch (mobile/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const handleParallaxScroll = () => {
      // Disable parallax on touch devices for better performance
      if (isTouchDevice) return;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          const parallaxElements = document.querySelectorAll('.parallax-background');

          parallaxElements.forEach((element) => {
            const section = element.closest('.industry-solutions');
            if (!section) return;
            
            const rect = section.getBoundingClientRect();
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Only apply parallax when section is visible
            if (rect.bottom >= 0 && rect.top <= windowHeight) {
              // Calculate scroll progress through the section
              const scrollProgress = Math.max(0, Math.min(1, 
                (windowHeight - rect.top) / (windowHeight + sectionHeight)
              ));
              
              // Create zoom effect: scale from 1.1 to 1.3 as user scrolls
              const minScale = 1.2;
              const maxScale = 1.4;
              const scale = minScale + (maxScale - minScale) * scrollProgress;
              
              // Apply scale transform
              element.style.transform = `scale(${scale})`;
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call to set position
    handleParallaxScroll();
    
    window.addEventListener('scroll', handleParallaxScroll, { passive: true });
    window.addEventListener('resize', handleParallaxScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);
      window.removeEventListener('resize', handleParallaxScroll);
    };
  }, []);

  return (
    <div className="home">
      <Helmet>
        <meta name="description" content="North Rubber - Seller of premium Natural Rubber/SBR Sheets. Quality rubber solutions for industries." />
        <meta name="keywords" content="natural rubber, SBR sheets, rubber sheets, rubber products, Canada, Canadian supplier" />
        <link rel="canonical" href="https://northrubber.com" />
        <meta property="og:title" content="North Rubber - Natural Rubber & SBR Sheets Canada" />
        <meta property="og:description" content="Sellers of Natural Rubber and SBR Sheets serving industries with quality solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="slideshow">
          <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
            <img src={slide1} alt="High Quality Industrial Rubber Sheets" />
            <div className="slide-caption">
              <h2 className="slide-caption-title">Premium Rubber Solutions</h2>
              <p className="slide-caption-text">Engineering excellence for industrial applications worldwide</p>
            </div>
          </div>
          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
            <img src={slide3} alt="Abrasion Resistant Rubber Technology" />
            <div className="slide-caption">
              <h2 className="slide-caption-title">Superior Wear Resistance</h2>
              <p className="slide-caption-text">Advanced rubber technology for mining and heavy industry</p>
            </div>
          </div>
          <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
            <img src={slide4} alt="North Rubber Excellence" />
            <div className="slide-caption">
              <h2 className="slide-caption-title">Natural Rubber / SBR Sheets</h2>
              <p className="slide-caption-text">Bringing quality Natural Rubber and SBR Sheet solutions</p>
            </div>
          </div>
          
          <button className="slide-arrow prev-arrow" onClick={prevSlide} aria-label="Previous slide">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slide-arrow next-arrow" onClick={nextSlide} aria-label="Next slide">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* Company Introduction */}
        <section className="company-intro">
          <div className="container">
            <div className="section-header animate-on-scroll fade-in-on-scroll">
              <h2>Natural Rubber & SBR Sheet Solutions</h2>
              <p className="section-subtitle">Engineering Excellence in Every Sheet</p>
            </div>
            <div className="company-intro-content">
              <div className="about-image-container animate-on-scroll slide-in-left">
                <img src={aboutImage} alt="About North Rubber" className="about-image" />
              </div>
              <div className="text-column animate-on-scroll slide-in-right">
                <div className="company-intro-badge">
                  <i className="fas fa-award"></i>
                  <span>Premium Quality Assured</span>
                </div>
                <h3 className="intro-heading">Specialized Excellence in Rubber Solutions</h3>
                <p className="intro-lead">
                  North Rubber specializes in delivering exceptional Natural Rubber and SBR (Styrene-Butadiene Rubber) Sheets with precision engineering and quality excellence.
                </p>
                <p className="intro-description">
                  We are dedicated to providing superior rubber solutions that meet demanding specifications and performance requirements. Our focus on Natural Rubber and SBR Sheets ensures specialized expertise, reliable supply chains, and competitive value for our clients.
                </p>
                <div className="company-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-check-circle"></i>
                    <span>ISO Certified Quality</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-shipping-fast"></i>
                    <span>Fast Reliable Delivery</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-handshake"></i>
                    <span>Trusted Partnership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
      <section className="industry-solutions parallax-section">
        <div className="parallax-background"></div>
        <div className="parallax-overlay"></div>
        <div className="container">
          <h2 className="animate-on-scroll fade-in-on-scroll">Comprehensive Industrial Solutions</h2>
          <p className="animate-on-scroll fade-in-on-scroll">Delivering specialized rubber products across industries with customized engineering solutions that meet the most demanding applications and environments.</p>
          <div className="solutions-grid animate-on-scroll scale-in-on-scroll">
            {[
              { icon: 'fas fa-oil-can', text: 'Oil & Gas', desc: 'High-performance solutions' },
              { icon: 'fas fa-industry', text: 'Manufacturing', desc: 'Industrial applications' },
              { icon: 'fas fa-hard-hat', text: 'Mining', desc: 'Heavy-duty solutions' },
              { icon: 'fas fa-cogs', text: 'Engineering', desc: 'Precision components' },
              { icon: 'fas fa-building', text: 'Construction', desc: 'Building materials' },
              { icon: 'fas fa-truck', text: 'Transportation', desc: 'Mobility solutions' },
              { icon: 'fas fa-anchor', text: 'Marine & Defense', desc: 'Specialized applications' },
              { icon: 'fas fa-train', text: 'Infrastructure', desc: 'Critical systems' },
              { icon: 'fas fa-car', text: 'Automotive', desc: 'Performance parts' },
              { icon: 'fas fa-tools', text: 'General Industrial', desc: 'Versatile solutions' },
            ].map((solution, index) => (
              <div key={index} className="solution-item apple-hover">
                <i className={`${solution.icon} fa-2x`}></i>
                <span>{solution.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories">
        <div className="container">
          <h2 className="animate-on-scroll fade-in-on-scroll">Natural Rubber & SBR Sheet Products</h2>
          <div className="categories-container animate-on-scroll slide-in-up">
            <div className="main-image">
              <img src={require('../assets/images/products-img1.jpg')} alt="Featured Rubber Sheet Product" id="category-image" />
            </div>
            <div className="categories-grid">
              {[
                { name: 'Industrial Rubber Sheets', image: require('../assets/images/products-img1.jpg') },
                { name: 'Wear Resistant Solutions', image: require('../assets/images/products-img2.jpg') },
                { name: 'Transit Flooring', image: require('../assets/images/products-img4.jpg') },
                { name: 'Anti-Slip Solutions', image: require('../assets/images/products-img5.jpg') },
              ].map((category, index) => (
                <div
                  key={index}
                  className="category-block apple-hover"
                  onMouseEnter={() => {
                    const img = document.getElementById('category-image');
                    if (img) img.src = category.image;
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      const img = document.getElementById('category-image');
                      if (img) img.src = category.image;
                    }
                  }}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Certifications */}
      <section className="certifications">
        <div className="container">
          <h2>Quality Assurance & Standards</h2>
          <p>Our Natural Rubber and SBR Sheets meet industry quality standards, ensuring reliable performance for your applications.</p>
          <div className="certifications-grid">
            <img src={require('../assets/images/c1.webp')} alt="Quality Standards" />
            <img src={require('../assets/images/c2.webp')} alt="Material Standards" />
            <img src={require('../assets/images/c3.webp')} alt="Safety Compliance" />
            <img src={require('../assets/images/c4.webp')} alt="Industry Standards" />
            <img src={require('../assets/images/c5.webp')} alt="Quality Assurance" />
            <img src={require('../assets/images/c6.webp')} alt="Product Excellence" />
            <img src={require('../assets/images/fras.webp')} alt="Technical Standards" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
