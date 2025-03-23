import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Import Framer Motion
import './Services.css';
import weldingImage from '../assets/images/welding.jpg';
import cuttingImage from '../assets/images/cutting.jpg';
import assemblyImage from '../assets/images/assembly.jpg';
import finishingImage from '../assets/images/finishing.jpg';

function Services() {
  const services = [
    { img: weldingImage, title: 'Welding' },
    { img: cuttingImage, title: 'Cutting' },
    { img: assemblyImage, title: 'Assembly' },
    { img: finishingImage, title: 'Finishing' },
    { img: weldingImage, title: 'Maintenance' }, // Added new service with placeholder image
    { img: cuttingImage, title: 'Custom Design' }, // Added new service with placeholder image
  ];

  console.log(services); // Debugging: Ensure the array is correct

  return (
    <div className="services">
      <Helmet>
        <title>Our Services - Metal Fabrication Services</title>
        <meta name="description" content="Explore our comprehensive metal fabrication services including welding, cutting, assembly, and finishing." />
        <meta name="keywords" content="metal fabrication services, welding, cutting, assembly, finishing" />
        <link rel="canonical" href="https://aaxi.ca/services" />
      </Helmet>
      <h1>Our Services</h1>
      <motion.div
        className="service-cards"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {services.map((service, index) => {
          console.log(service); // Debugging: Ensure each service is being rendered
          return (
            <motion.div
              key={index}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={service.img} alt={service.title} />
              <p>{service.title}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Services;
