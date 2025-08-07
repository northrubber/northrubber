import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import ScrollAnimations from '../utils/animations.js';

// Import images - all using WebP format for optimal compression
import slide1 from '../assets/images/1.webp';
import slide3 from '../assets/images/3.webp';
import slide4 from '../assets/images/4.webp';
import aboutImage from '../assets/images/about-image.webp';
import productsImg1 from '../assets/images/products-img1.webp';
import productsImg2 from '../assets/images/products-img2.webp';
import productsImg4 from '../assets/images/products-img4.webp';
import productsImg5 from '../assets/images/products-img5.webp';
import c1 from '../assets/images/c1.webp';
import c2 from '../assets/images/c2.webp';
import c3 from '../assets/images/c3.webp';
import c4 from '../assets/images/c4.webp';
import c5 from '../assets/images/c5.webp';
import c6 from '../assets/images/c6.webp';
import fras from '../assets/images/fras.webp';

// Constants
const SLIDE_INTERVAL = 4000;
const ANIMATION_DELAY = 100;
const PARALLAX_SCALE = { min: 1.2, max: 1.4 };

// Static data
const SLIDES_DATA = [
  {
    image: slide1,
    alt: "High Quality Industrial Rubber Sheets",
    title: "Premium Rubber Solutions",
    text: "Engineering excellence for industrial applications worldwide"
  },
  {
    image: slide3,
    alt: "Abrasion Resistant Rubber Technology",
    title: "Superior Wear Resistance",
    text: "Advanced rubber technology for mining and heavy industry"
  },
  {
    image: slide4,
    alt: "North Rubber Excellence",
    title: "Natural Rubber / SBR Sheets",
    text: "Bringing quality Natural Rubber and SBR Sheet solutions"
  }
];

const INDUSTRY_SOLUTIONS = [
  { icon: 'fas fa-oil-can', text: 'Oil & Gas', desc: 'High-performance solutions' },
  { icon: 'fas fa-industry', text: 'Manufacturing', desc: 'Industrial applications' },
  { icon: 'fas fa-hard-hat', text: 'Mining', desc: 'Heavy-duty solutions' },
  { icon: 'fas fa-cogs', text: 'Engineering', desc: 'Precision components' },
  { icon: 'fas fa-building', text: 'Construction', desc: 'Building materials' },
  { icon: 'fas fa-truck', text: 'Transportation', desc: 'Mobility solutions' },
  { icon: 'fas fa-anchor', text: 'Marine & Defense', desc: 'Specialized applications' },
  { icon: 'fas fa-train', text: 'Infrastructure', desc: 'Critical systems' },
  { icon: 'fas fa-car', text: 'Automotive', desc: 'Performance parts' },
  { icon: 'fas fa-tools', text: 'General Industrial', desc: 'Versatile solutions' }
];

const PRODUCT_CATEGORIES = [
  { name: 'Industrial Rubber Sheets', image: productsImg1 },
  { name: 'Wear Resistant Solutions', image: productsImg2 },
  { name: 'Transit Flooring', image: productsImg4 },
  { name: 'Anti-Slip Solutions', image: productsImg5 }
];

const CERTIFICATIONS = [
  { src: c1, alt: 'Quality Standards' },
  { src: c2, alt: 'Material Standards' },
  { src: c3, alt: 'Safety Compliance' },
  { src: c4, alt: 'Industry Standards' },
  { src: c5, alt: 'Quality Assurance' },
  { src: c6, alt: 'Product Excellence' },
  { src: fras, alt: 'Technical Standards' }
];

const COMPANY_HIGHLIGHTS = [
  { icon: 'fas fa-check-circle', text: 'ISO Certified Quality' },
  { icon: 'fas fa-shipping-fast', text: 'Fast Reliable Delivery' },
  { icon: 'fas fa-handshake', text: 'Trusted Partnership' }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDES_DATA.length;

  // Memoized slide navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance slides effect
  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Initialize scroll animations
  useEffect(() => {
    document.body.classList.add('no-animations');
    
    const initAnimations = () => {
      try {
        document.body.classList.remove('no-animations');
        const scrollAnimations = new ScrollAnimations();
        ScrollAnimations.addHoverEffects();
        ScrollAnimations.initReducedMotion();
        window.currentScrollAnimations = scrollAnimations;
      } catch (error) {
        console.warn('Animation initialization failed:', error);
        document.body.classList.add('no-animations');
      }
    };

    const timer = setTimeout(initAnimations, ANIMATION_DELAY);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-animations');
      if (window.currentScrollAnimations?.observer) {
        window.currentScrollAnimations.observer.disconnect();
        delete window.currentScrollAnimations;
      }
    };
  }, []);

  // Optimized parallax effect
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // Skip parallax on touch devices

    let ticking = false;

    const handleParallaxScroll = () => {
      if (ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
        const parallaxElements = document.querySelectorAll('.parallax-background');
        
        parallaxElements.forEach((element) => {
          const section = element.closest('.industry-solutions');
          if (!section) return;
          
          const rect = section.getBoundingClientRect();
          const { height: sectionHeight } = rect;
          const { innerHeight: windowHeight } = window;
          
          // Only apply parallax when section is visible
          if (rect.bottom >= 0 && rect.top <= windowHeight) {
            const scrollProgress = Math.max(0, Math.min(1, 
              (windowHeight - rect.top) / (windowHeight + sectionHeight)
            ));
            
            const scale = PARALLAX_SCALE.min + 
              (PARALLAX_SCALE.max - PARALLAX_SCALE.min) * scrollProgress;
            
            element.style.transform = `scale(${scale})`;
          }
        });
        
        ticking = false;
      });
    };

    // Throttled event listeners
    const options = { passive: true };
    window.addEventListener('scroll', handleParallaxScroll, options);
    window.addEventListener('resize', handleParallaxScroll, options);
    
    // Initial call
    handleParallaxScroll();
    
    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);
      window.removeEventListener('resize', handleParallaxScroll);
    };
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>North Rubber - Natural Rubber & SBR Sheets Canada | Industrial Rubber Supplier</title>
        <meta name="description" content="North Rubber - Canada's trusted supplier of Natural Rubber & SBR Sheets. Quality industrial rubber solutions for manufacturing, mining, automotive & construction industries. ISO certified, fast delivery." />
        <meta name="keywords" content="natural rubber sheets Canada, SBR sheets supplier, industrial rubber Canada, styrene butadiene rubber, rubber sheeting Kitchener, manufacturing rubber solutions, mining rubber, automotive rubber, construction rubber materials" />
        <link rel="canonical" href="https://northrubber.com/" />
        <meta property="og:title" content="North Rubber - Natural Rubber & SBR Sheets Canada" />
        <meta property="og:description" content="Canada's trusted supplier of Natural Rubber & SBR Sheets. ISO certified quality, fast delivery, serving manufacturing, mining, automotive & construction industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://northrubber.com/" />
        <meta property="og:image" content="https://northrubber.com/static/media/1.webp" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="slideshow">
          {SLIDES_DATA.map((slide, index) => (
            <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
              <img src={slide.image} alt={slide.alt} />
              <div className="slide-caption">
                <h2 className="slide-caption-title">{slide.title}</h2>
                <p className="slide-caption-text">{slide.text}</p>
              </div>
            </div>
          ))}
          
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
                <img src={aboutImage} alt="North Rubber industrial facility showcasing quality Natural Rubber and SBR sheet production capabilities" className="about-image" />
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
                  {COMPANY_HIGHLIGHTS.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <i className={highlight.icon}></i>
                      <span>{highlight.text}</span>
                    </div>
                  ))}
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
            {INDUSTRY_SOLUTIONS.map((solution, index) => (
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
              <img src={productsImg1} alt="Featured Rubber Sheet Product" id="category-image" />
            </div>
            <div className="categories-grid">
              {PRODUCT_CATEGORIES.map((category, index) => (
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
            {CERTIFICATIONS.map((cert, index) => (
              <img key={index} src={cert.src} alt={cert.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
