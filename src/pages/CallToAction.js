import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function CallToAction() {
  return (
    <motion.section 
      className="cta-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="cta-content">
        <h2>Ready to Start Your Project?</h2>
        <p>Contact us today for a free consultation and quote on your metal fabrication needs.</p>
        <motion.a 
          href="#contact" 
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.section>
  );
}

export default CallToAction;
