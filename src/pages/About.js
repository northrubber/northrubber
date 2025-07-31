import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './About.css';
import aboutImage from '../assets/images/about-intro-pic.jpg';

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <meta name="description" content="Learn about North Rubber Products, a new seller of Natural Rubber and SBR Sheets serving the market." />
        <meta name="keywords" content="natural rubber seller, SBR sheets, Canada, rubber supplier, new market entrant" />
        <link rel="canonical" href="https://northrubber.github.io/northrubber/about" />
      </Helmet>
      
      <div className="about-header">
        <div className="container">
          <motion.h1>
            About North Rubber
          </motion.h1>
        </div>
      </div>
      
      <motion.section 
        className="about-company"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Who We Are</h2>
              <p className="about-lead">
                North Rubber specializes in high-quality Natural Rubber and SBR Sheets.
              </p>
              <p>
                Founded with a vision to revolutionize the rubber market, we combine cutting-edge sourcing strategies with unwavering commitment to quality and customer satisfaction.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Quality Assured</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">On-Time Delivery</div>
                </div>
              </div>
            </div>
            <div className="about-image-container">
              <motion.img 
                src={aboutImage} 
                alt="North Rubber" 
                className="about-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Innovation Meets Excellence</h3>
                  <p>Serving premium rubber solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="mission-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>To be the most trusted rubber supplier by delivering exceptional quality, competitive pricing, and unmatched customer service across all industrial applications.</p>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="about-values"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Why Choose North Rubber</h2>
            <p className="section-subtitle">Built on principles that drive excellence</p>
          </div>
          <div className="values-grid">
            <motion.div 
              className="value-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Premium Quality</h3>
              <p>Rigorous quality standards ensure superior rubber products for every application.</p>
            </motion.div>
            <motion.div 
              className="value-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Streamlined logistics for quick response to your business needs across Canada.</p>
            </motion.div>
            <motion.div 
              className="value-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Customer First</h3>
              <p>Dedicated support team committed to exceeding your expectations every time.</p>
            </motion.div>
            <motion.div 
              className="value-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Eco-Conscious</h3>
              <p>Sustainable sourcing practices for a greener future in rubber manufacturing.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
