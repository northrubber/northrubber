import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Elevate Your Industrial Operations?</h2>
          <p>
            Discover how our premium rubber products can enhance durability, safety, and efficiency in your industry.
            Contact us today for customized solutions that meet your specific requirements.
          </p>
          <div className="cta-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/products" className="btn-primary btn-secondary">Explore Products</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
