import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submit: 'Failed to submit. Please try again later.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="contact-page">
      <Helmet>
        <title>aaxi.ca</title>
        <meta name="description" content="Contact AAXI for custom metal fabrication services. Reach out to our expert team for quotes, consultations, and custom metal solutions." />
        <meta name="keywords" content="contact metal fabrication, metal fabrication quotes, custom metal solutions, AAXI contact" />
        <link rel="canonical" href="https://aaxi.ca/contact" />
      </Helmet>
      
      <div className="contact-container">
        <div className="contact-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about our metal fabrication services? Reach out to our team of experts and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <motion.div 
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Contact Information</h3>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Our Location</h4>
                  <p>123 Metal Way<br />Toronto, ON M1M 1M1<br />Canada</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone Number</h4>
                  <p><a href="tel:(123) 456-7890">(123) 456-7890</a></p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email Address</h4>
                  <p><a href="mailto:info@aaxi.ca">info@aaxi.ca</a></p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>Monday-Friday: 8am - 5pm<br />Saturday-Sunday: Closed</p>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            
            {submitSuccess ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  padding: '20px',
                  background: '#e8f5e9',
                  borderRadius: '5px',
                  color: '#2e7d32',
                  marginBottom: '20px'
                }}
              >
                <h4 style={{ color: '#2e7d32', marginBottom: '10px' }}>Thank you for your message!</h4>
                <p>We've received your inquiry and will get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your phone number (optional)"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message}</div>}
                </div>
                
                {errors.submit && (
                  <div className="error-message" style={{ marginBottom: '15px' }}>{errors.submit}</div>
                )}
                
                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
        
        <motion.div
          className="map-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289994948!2d-79.5181358081316!3d43.71815566213179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1654123456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AAXI Location Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
