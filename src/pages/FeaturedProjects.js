import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

function FeaturedProjects() {
  return (
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
      <div className="view-all-btn">
        <motion.a 
          href="#projects" 
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
        </motion.a>
      </div>
    </motion.section>
  );
}

export default FeaturedProjects;
