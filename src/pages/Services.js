import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Import Framer Motion
import './Services.css';

function Services() {
  return (
    <div className="services">
      <Helmet>
        <title>Our Services - Metal Fabrication Services</title>
        <meta name="description" content="Explore our comprehensive metal fabrication services including welding, cutting, assembly, and finishing." />
        <meta name="keywords" content="metal fabrication services, welding, cutting, assembly, finishing" />
        <link rel="canonical" href="https://aaxi.ca/services" />
      </Helmet>
      <motion.section 
        className="services-overview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Services</h2>
        <div className="services-grid">
          {[
            { 
              icon: 'fas fa-fire', 
              title: 'Welding', 
              description: 'High-quality welding services, including MIG, TIG, and stick welding for various metals.' 
            },
            { 
              icon: 'fas fa-cut', 
              title: 'Cutting', 
              description: 'Precision cutting with laser, plasma, and waterjet cutting for complex shapes and designs.' 
            },
            { 
              icon: 'fas fa-tools', 
              title: 'Fabrication', 
              description: 'Custom metal fabrication for industrial, commercial, and residential applications.' 
            },
            { 
              icon: 'fas fa-cogs', 
              title: 'Machining', 
              description: 'CNC machining and turning with high precision for your specific requirements.' 
            },
            { 
              icon: '', 
              title: 'Assembly', 
              description: 'Expert assembly services for complex metal structures and components.' 
            },
            { 
              icon: '', 
              title: 'Finishing', 
              description: 'Professional finishing services, including polishing and coating for a refined look.' 
            }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="service-item"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {service.icon && <i className={`${service.icon} service-icon`}></i>}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Services;
