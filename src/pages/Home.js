import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './Home.css';
import locationVideo from '../assets/videos/location.mp4'; // Import the video

function Home() {
  return (
    <div className="home">
      <Helmet>
        <meta name="description" content="Your trusted partner in metal fabrication, manufacturing and engineering services with over 20 years of industry experience." />
        <meta name="keywords" content="metal fabrication, manufacturing, welding, cutting, engineering services" />
        <link rel="canonical" href="https://aaxi.ca" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline width="1920" height="1080">
          <source src={locationVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            CUSTOM METAL FABRICATION & MANUFACTURING
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            High-quality precision metal fabrication services for all your industrial needs
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="#services" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-primary btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      {/* Removed Featured Projects Section */}
      
      {/* Removed Testimonials Section */}
      
      {/* Removed Call to Action Section */}
    </div>
  );
}

export default Home;
