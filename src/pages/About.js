import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './About.css';
import aboutImage from '../assets/images/about-intro-pic.jpg';

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <meta name="description" content="Learn about Zenith Industrial Rubber Products, a leading manufacturer of industrial rubber products since 1965." />
        <meta name="keywords" content="rubber manufacturer, industrial rubber, company history, rubber production" />
        <link rel="canonical" href="https://zenithrubber.com/about" />
      </Helmet>
      
      <div className="about-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Zenith Rubber
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
                Zenith Rubber has been at the forefront of manufacturing industrial rubber products since 1965.
              </p>
              <p>
                Zenith Industrial Rubber Products Private Limited, has been a leading manufacturer and exporter of high-quality 
                industrial rubber sheeting products since its establishment in 1965. Over the years, Zenith has achieved 
                remarkable success in the global market and has become recognized as a trusted supplier.
              </p>
              <p>
                With a strong focus on delivering excellence, Zenith offers a diverse range of products including wear-resistant 
                rubber sheets, antiskid flooring, waterproofing membranes, coated fabrics, rubber inflatables, rubber moulded 
                and extruded profiles. These offerings showcase the company's expertise and commitment to providing solutions 
                that meet the varied needs of customers.
              </p>
              <p>
                Zenith's dedication to quality and compliance is evident through its status as a government-recognized export house. 
                This recognition highlights the company's commitment to upholding industry standards and ensuring customer satisfaction.
              </p>
              <p>
                Supported by advanced infrastructure, Zenith boasts an impressive production capacity with 4 Intermix, 4 calendar, 
                30 Rotocure lines and 8 press lines. This infrastructure investment allows the company to meet the demands of 
                the market effectively and efficiently.
              </p>
              <p>
                With an installed capacity of 90 tons of rubber compound per day, Zenith continues to strengthen its position in 
                both domestic and international markets. Through its extensive experience, leadership, and dedication to quality, 
                Zenith has earned a reputation as a reliable and trusted provider in the industrial rubber sheet manufacturing industry.
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
