import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import slide1 from '../assets/images/1.jpg';
import slide2 from '../assets/images/2.jpg';
import slide3 from '../assets/images/3.jpg';
import slide4 from '../assets/images/4.jpg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

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

  // Add state for animated statistics
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    productGrades: 0,
    tons: 0,
    customers: 0,
    countries: 0
  });
  
  const statsRef = useRef(null);
  const animationTriggered = useRef(false);

  // Function to animate counting up
  const animateValue = (start, end, duration, onUpdate) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      onUpdate(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Check if element is in viewport
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Handle scroll and animation
  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current && isInViewport(statsRef.current) && !animationTriggered.current) {
        animationTriggered.current = true;
        
        // Animate years
        animateValue(0, 60, 2000, (value) => {
          setAnimatedStats(prev => ({ ...prev, years: value }));
        });
        
        // Animate product grades
        animateValue(0, 3000, 2000, (value) => {
          setAnimatedStats(prev => ({ ...prev, productGrades: value }));
        });
        
        // Animate tons
        animateValue(0, 40000, 2000, (value) => {
          setAnimatedStats(prev => ({ ...prev, tons: value }));
        });
        
        // Animate customers
        animateValue(0, 6500, 2000, (value) => {
          setAnimatedStats(prev => ({ ...prev, customers: value }));
        });
        
        // Animate countries
        animateValue(0, 70, 2000, (value) => {
          setAnimatedStats(prev => ({ ...prev, countries: value }));
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the element is already in viewport on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <Helmet>
        <meta name="description" content="North Rubber - Innovative manufacturer specializing in premium natural rubber sheets and industrial rubber products. Quality solutions for modern industries." />
        <meta name="keywords" content="industrial rubber, rubber sheets, rubber flooring, rubber products, manufacturing, zenith industries" />
        <link rel="canonical" href="https://zenithindustries.ca" />
        <meta property="og:title" content="North Rubber - Premium Industrial Rubber Products" />
        <meta property="og:description" content="Innovative rubber solutions from a modern manufacturer focused on quality and customer satisfaction. Trusted emerging supplier." />
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
            <img src={slide2} alt="Advanced Inflatable Products" />
            <div className="slide-caption">
              <h2 className="slide-caption-title">Advanced Inflatables</h2>
              <p className="slide-caption-text">Precision-engineered solutions for marine and industrial applications</p>
            </div>
          </div>
          <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
            <img src={slide3} alt="Abrasion Resistant Rubber Technology" />
            <div className="slide-caption">
              <h2 className="slide-caption-title">Superior Wear Resistance</h2>
              <p className="slide-caption-text">Advanced rubber technology for mining and heavy industry</p>
            </div>
          </div>
          <div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
            <img src={slide4} alt="Zenith Industries Manufacturing Excellence" />
            <div className="slide-caption">
              <h2 className="slide-caption-title">Manufacturing Excellence</h2>
              <p className="slide-caption-text">Innovative company bringing fresh perspectives to industrial rubber solutions</p>
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
          <div className="section-header">
            <h2>Innovative Natural Rubber Solutions for Modern Industry</h2>
          </div>
          <div className="text-column">
            <p>
              North Rubber Products LLC stands as an innovative manufacturer in industrial rubber manufacturing, delivering exceptional quality and cutting-edge solutions with a fresh approach to traditional industries.
            </p>
            <p>Our comprehensive portfolio includes wear-resistant rubber sheets, premium flooring systems, waterproofing membranes, coated fabrics, and precision inflatables. With state-of-the-art manufacturing facilities and rigorous quality standards, we serve diverse industries across 70+ countries, ensuring reliability and performance in every product.</p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="industry-solutions">
        <div className="container">
          <h2>Comprehensive Industrial Solutions</h2>
          <p>Delivering specialized rubber products across industries with customized engineering solutions that meet the most demanding applications and environments.</p>
          <div className="solutions-grid">
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
              <div key={index} className="solution-item">
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
          <h2>Comprehensive Product Portfolio</h2>
          <div className="categories-container">
            <div className="main-image">
              <img src={require('../assets/images/products-img1.jpg')} alt="Featured Product Category" id="category-image" />
            </div>
            <div className="categories-grid">
              {[
                { name: 'Industrial Rubber Sheets', image: require('../assets/images/products-img1.jpg') },
                { name: 'Wear Resistant Solutions', image: require('../assets/images/products-img2.jpg') },
                { name: 'Premium Flooring Systems', image: require('../assets/images/products-img3.jpg') },
                { name: 'Transit Flooring', image: require('../assets/images/products-img4.jpg') },
                { name: 'Anti-Slip Solutions', image: require('../assets/images/products-img5.jpg') },
                { name: 'Technical Fabrics', image: require('../assets/images/products-img6.jpg') },
                { name: 'Inflatable Products', image: require('../assets/images/products-img7.jpg') },
                { name: 'Waterproofing Systems', image: require('../assets/images/products-img8.jpg') },
                { name: 'Custom Molded Parts', image: require('../assets/images/products-img9.jpg') },
              ].map((category, index) => (
                <div
                  key={index}
                  className="category-block"
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
          <h2>Quality Certifications & Standards</h2>
          <p>Our commitment to excellence is validated through internationally recognized certifications and adherence to the highest quality standards in manufacturing.</p>
          <div className="certifications-grid">
            <img src={require('../assets/images/c1.webp')} alt="ISO Quality Certification" />
            <img src={require('../assets/images/c2.webp')} alt="Environmental Management Certification" />
            <img src={require('../assets/images/c3.webp')} alt="Safety Standards Certification" />
            <img src={require('../assets/images/c4.webp')} alt="Industry Standards Certification" />
            <img src={require('../assets/images/c5.webp')} alt="Export Quality Certification" />
            <img src={require('../assets/images/c6.webp')} alt="Manufacturing Excellence Certification" />
            <img src={require('../assets/images/fras.webp')} alt="FRAS Fire Resistant Certification" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div ref={statsRef} className="statistics-section">
        <div className="statistic-item">
          <span className="statistic-prefix">Founded</span>
          <div className="statistic-value">2024</div>
          <div className="statistic-label">Innovation Focused</div>
        </div>
        <div className="statistic-item">
          <span className="statistic-prefix">Over</span>
          <div className="statistic-value">{animatedStats.productGrades}</div>
          <div className="statistic-label">Product Variants</div>
        </div>
        <div className="statistic-item">
          <span className="statistic-prefix">Annual Capacity</span>
          <div className="statistic-value">{animatedStats.tons}</div>
          <div className="statistic-label">Metric Tons</div>
        </div>
        <div className="statistic-item">
          <span className="statistic-prefix">Serving</span>
          <div className="statistic-value">{animatedStats.customers}</div>
          <div className="statistic-label">Global Customers</div>
        </div>
        <div className="statistic-item">
          <span className="statistic-prefix">Presence in</span>
          <div className="statistic-value">{animatedStats.countries}</div>
          <div className="statistic-label">Countries</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
