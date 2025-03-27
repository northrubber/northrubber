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
            At Aaxi Inc., we are more than just a metal fabrication company—we are a team of skilled engineers dedicated to delivering precision-engineered solutions. With a strong network of trusted fabricators and suppliers, we specialize in sourcing and providing high-quality metal fabricated parts at competitive prices.
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our expertise spans across precision fabrication, welding, cutting, and machining services, catering to industries such as construction, automotive, aerospace, and beyond. We take pride in our commitment to excellence, ensuring that every component we deliver meets the highest standards of quality and durability.
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Driven by innovation and craftsmanship, our mission is to support our clients with reliable, high-performance solutions that bring their visions to life. At Aaxi Inc., we don’t just fabricate metal—we build lasting partnerships.
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
            At Aaxi Inc., we blend traditional craftsmanship with state-of-the-art technology to deliver
            superior results. Our team of experienced professionals is committed to providing
            innovative, tailored solutions that meet your unique requirements.
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We focus on delivering cost-effective solutions with short lead times, ensuring efficiency
            without compromising quality. With meticulous attention to detail and a strong
            commitment to excellence, every project is handled with precision and care.
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Aaxi Inc., our customer-centric approach drives us to exceed expectations, providing
            reliable, high-performance solutions that stand the test of time.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
