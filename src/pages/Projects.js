import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Industrial Equipment Fabrication',
      category: 'industrial',
      image: project1,
      description: 'Custom fabrication of industrial equipment for manufacturing plants, designed to meet specific operational requirements.',
      client: 'Manufacturing Industries Ltd.',
      completionDate: 'January 2023',
      location: 'Toronto, ON',
      services: ['Design', 'Fabrication', 'Installation']
    },
    {
      id: 2,
      title: 'Structural Steel Framework',
      category: 'structural',
      image: project2,
      description: 'Design and fabrication of structural steel framework for a commercial building, ensuring durability and safety standards.',
      client: 'Commercial Builders Inc.',
      completionDate: 'March 2023',
      location: 'Vancouver, BC',
      services: ['Design', 'Fabrication', 'Welding']
    },
    {
      id: 3,
      title: 'Custom Machine Components',
      category: 'custom',
      image: project3,
      description: 'Precision manufacturing of custom machine components for specialized industrial applications requiring tight tolerances.',
      client: 'Tech Solutions Corp.',
      completionDate: 'May 2023',
      location: 'Calgary, AB',
      services: ['Design', 'CNC Machining', 'Quality Testing']
    },
    {
      id: 4,
      title: 'Stainless Steel Kitchen Equipment',
      category: 'custom',
      image: project1,
      description: 'Fabrication of stainless steel kitchen equipment for commercial restaurants, meeting food safety standards.',
      client: 'Restaurant Supply Co.',
      completionDate: 'July 2023',
      location: 'Montreal, QC',
      services: ['Design', 'Fabrication', 'Finishing']
    },
    {
      id: 5,
      title: 'Aluminum Railing Systems',
      category: 'architectural',
      image: project2,
      description: 'Custom designed and fabricated aluminum railing systems for residential and commercial properties.',
      client: 'Architectural Designs Ltd.',
      completionDate: 'August 2023',
      location: 'Ottawa, ON',
      services: ['Design', 'Fabrication', 'Installation']
    },
    {
      id: 6,
      title: 'Heavy Equipment Parts',
      category: 'industrial',
      image: project3,
      description: 'Manufacturing of replacement parts for heavy equipment used in mining and construction industries.',
      client: 'Mining Operations Inc.',
      completionDate: 'October 2023',
      location: 'Edmonton, AB',
      services: ['Design', 'Fabrication', 'Quality Testing']
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = selectedFilter === 'all' ? 
    projects : 
    projects.filter(project => project.category === selectedFilter);
  
  // Open project modal
  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Close project modal
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  // Close modal when clicking escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeProject();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="projects" id="projects">
      <Helmet>
        <title>Our Projects - Metal Fabrication Portfolio</title>
        <meta name="description" content="View our portfolio of metal fabrication projects showcasing our expertise in industrial, structural, and custom metal work." />
        <meta name="keywords" content="metal fabrication projects, portfolio, industrial equipment, structural steel, custom components" />
        <link rel="canonical" href="https://aaxi.ca/projects" />
      </Helmet>
      
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Explore our portfolio of completed metal fabrication projects showcasing our expertise and capabilities.</p>
      </div>
      
      <div className="project-filters">
        {['all', 'industrial', 'structural', 'architectural', 'custom'].map(filter => (
          <motion.button
            key={filter}
            className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </div>
      
      <motion.div 
        className="projects-grid"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className="project-item"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <span className="project-category">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 100)}...</p>
                {/* Changed anchor to button for accessibility */}
                <button 
                  className="view-project"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent double triggering with parent's onClick
                    openProject(project);
                  }}
                >
                  View Project <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeProject}>
                <i className="fas fa-times"></i>
              </button>
              
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="modal-image"
              />
              
              <div className="modal-body">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>
                
                <div className="modal-details">
                  <div className="detail-item">
                    <p className="detail-label">Client</p>
                    <p className="detail-value">{selectedProject.client}</p>
                  </div>
                  
                  <div className="detail-item">
                    <p className="detail-label">Completion Date</p>
                    <p className="detail-value">{selectedProject.completionDate}</p>
                  </div>
                  
                  <div className="detail-item">
                    <p className="detail-label">Location</p>
                    <p className="detail-value">{selectedProject.location}</p>
                  </div>
                  
                  <div className="detail-item">
                    <p className="detail-label">Services</p>
                    <p className="detail-value">{selectedProject.services.join(', ')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
