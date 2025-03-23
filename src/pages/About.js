import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Import Framer Motion
import './About.css';
import aboutImage from '../assets/images/about.jpg';

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>About aaxi - Metal Fabrication Services</title>
        <meta name="description" content="Learn about our skilled mechanical engineers specializing in metal fabrication services." />
        <meta name="keywords" content="metal fabrication, mechanical engineers, company history" />
        <link rel="canonical" href="https://aaxi.ca/about" />
      </Helmet>
      <h1>About aaxi</h1>
      <motion.img
        src={aboutImage}
        alt="About aaxi team"
        className="about-image"
        width="400"
        height="300"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        We are a team of skilled mechanical engineers specializing in metal fabrication services.
      </motion.p>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our mission is to deliver high-quality, precision-engineered solutions for our clients.
      </motion.p>
    </motion.div>
  );
}

export default About;
