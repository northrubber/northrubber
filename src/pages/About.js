import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './About.css';
import aboutImage from '../assets/images/about-intro-pic.jpg';

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <meta name="description" content="Learn about North Rubber Products, an innovative manufacturer specializing in premium natural rubber sheets and industrial solutions." />
        <meta name="keywords" content="rubber manufacturer, industrial rubber, company history, rubber production" />
        <link rel="canonical" href="https://zenithindustry.github.io/zenithindustries/about" />
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
              <h2>Corporate Profile</h2>
              <p>
                Zenith Rubber is an innovative manufacturer revolutionizing the manufacturing of industrial rubber products with fresh perspectives and modern approaches.
              </p>
              <p>
                Zenith Industrial Rubber Products Private Limited, is an emerging manufacturer and exporter of high-quality 
                industrial rubber sheeting products, founded with a vision to transform the rubber industry. Our modern approach 
                combines traditional rubber manufacturing expertise with innovative technologies and sustainable practices.
              </p>
              <p>
                With a strong focus on delivering excellence, Zenith offers a diverse range of products including wear-resistant 
                rubber sheets, antiskid flooring, waterproofing membranes, coated fabrics, rubber inflatables, rubber moulded 
                and extruded profiles. These offerings showcase our commitment to innovation and providing solutions 
                that meet the evolving needs of modern industries.
              </p>
              <p>
                Zenith's dedication to quality and compliance is evident through our pursuit of government recognition as an export house. 
                This goal highlights our commitment to upholding industry standards and ensuring customer satisfaction from day one.
              </p>
              <p>
                Supported by state-of-the-art infrastructure, Zenith boasts modern production capabilities with 4 Intermix, 4 calendar, 
                30 Rotocure lines and 8 press lines. This infrastructure investment allows us to meet market demands effectively 
                and efficiently while maintaining our operational agility.
              </p>
              <p>
                With an installed capacity of 90 tons of rubber compound per day, Zenith is rapidly establishing its position in 
                both domestic and international markets. Through our innovative approach, modern leadership, and dedication to quality, 
                Zenith is building a reputation as a reliable and trusted newcomer in the industrial rubber sheet manufacturing industry.
              </p>
            </div>
            <div className="about-image-container">
              <motion.img 
                src={aboutImage} 
                alt="Zenith Rubber Manufacturing Facility" 
                className="about-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
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
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Quality Excellence</h3>
              <p>We maintain rigorous quality standards throughout our manufacturing process.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continuously improve our products and processes to stay ahead of industry trends.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Customer Focus</h3>
              <p>We prioritize understanding and exceeding our customers' expectations.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustainability</h3>
              <p>We are committed to environmentally responsible manufacturing practices.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
