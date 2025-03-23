import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './Home.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import locationVideo from '../assets/videos/location.mp4'; // Import the video

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>aaxi - Metal Fabrication & Manufacturing Services</title>
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
      
      {/* Services Overview Section */}
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
            }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="service-item"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className={`${service.icon} service-icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Removed About Preview Section */}
      
      {/* Featured Projects Section */}
      <motion.section 
        className="featured-projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[
            { 
              image: project1, 
              title: 'Industrial Equipment', 
              description: 'Custom fabrication of industrial equipment for manufacturing plants.' 
            },
            { 
              image: project2, 
              title: 'Structural Steel', 
              description: 'Structural steel fabrication for commercial building projects.' 
            },
            { 
              image: project3, 
              title: 'Custom Components', 
              description: 'Precision-machined components for specialized industrial applications.' 
            }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={project.image} alt={project.title} width="300" height="200" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.a 
          href="#projects" 
          className="btn-primary view-all-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
        </motion.a>
      </motion.section>
      
      {/* Testimonials Section */}
      <motion.section 
        className="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          {[
            { 
              text: "aaxi delivered exceptional quality and precision for our industrial equipment project. Their team's expertise and attention to detail exceeded our expectations.", 
              author: "John Smith", 
              company: "Construction Ltd." 
            },
            { 
              text: "We've been working with aaxi for over 5 years now, and they consistently provide high-quality metal fabrication services with quick turnaround times.", 
              author: "Sarah Johnson", 
              company: "Industrial Solutions Inc." 
            }
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </motion.section>
      
      {/* Call to Action Section */}
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
    </div>
  );
}

export default Home;
