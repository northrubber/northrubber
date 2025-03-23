import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Import Framer Motion
import './About.css';
import aboutImage from '../assets/images/about.jpg';
import aboutPreviewImage from '../assets/images/about-preview.jpg';

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About aaxi - Metal Fabrication Services</title>
        <meta name="description" content="Learn about our skilled mechanical engineers specializing in metal fabrication services." />
        <meta name="keywords" content="metal fabrication, mechanical engineers, company history" />
        <link rel="canonical" href="https://aaxi.ca/about" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About aaxi
        </motion.h1>
      </div>
      
      {/* Company Overview Section */}
      <motion.div
        className="about-overview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-content">
          <h2>Our Story</h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            With over 20 years of experience in the metal fabrication industry, aaxi has established itself 
            as a leading provider of high-quality metal fabrication and manufacturing services.
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a team of skilled mechanical engineers specializing in metal fabrication services. 
            Our mission is to deliver high-quality, precision-engineered solutions for our clients.
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We specialize in precision fabrication, welding, cutting, and machining services for various 
            industries, including construction, automotive, aerospace, and more.
          </motion.p>
        </div>
        <div className="about-image-container">
          <motion.img
            src={aboutImage}
            alt="About aaxi team"
            className="about-image main-image"
            width="400"
            height="300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
      
      {/* Our Approach Section */}
      <motion.div
        className="about-approach"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image-container">
          <motion.img
            src={aboutPreviewImage}
            alt="Our approach to metal fabrication"
            className="about-image secondary-image"
            width="400"
            height="300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="about-content">
          <h2>Our Approach</h2>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            At aaxi, we combine traditional craftsmanship with cutting-edge technology to deliver 
            exceptional results. Our team of experienced professionals is dedicated to providing 
            innovative solutions tailored to meet your specific requirements.
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We pride ourselves on our attention to detail, commitment to quality, and customer-centric 
            approach. Each project is handled with the utmost care and precision, ensuring that the 
            final product exceeds your expectations.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
