import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3db35928-3a0a-4f5c-ae1c-e5a0d23aa11c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <meta name="description" content="Contact North Rubber for high-quality industrial rubber solutions. Request quotes, information or technical assistance." />
        <meta name="keywords" content="rubber seller contact, natural rubber contact, SBR sheets quote, rubber supplier Canada inquiry" />
        <link rel="canonical" href="https://northrubber.com/contact" />
      </Helmet>
      
      <style jsx>{`
        .contact-page {
          padding-top: 0 !important;
        }
      `}</style>
      
      <div className="contact-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reach out to us for any inquiries or to request a quote
          </motion.p>
        </div>
      </div>
      
      <section className="contact-section">
        <div className="container contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Get In Touch</h2>
            <p>
              Have questions about our products or need a custom solution for your industry?
            <br></br>  
              Our team is ready to assist you with technical information, pricing details, and recommendations.
            </p>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>84 grassbourne ave, Kitchener, N2R 0S5</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h3>Phone Number</h3>
                <p>+1 (514) 549-8173</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>sales@northrubber.com</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Send Us A Message</h2>
            
            {result && (
              <div className={`form-message ${result === "Form Submitted Successfully" ? 'success' : 'error'}`}>
                {result}
              </div>
            )}
            
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Form
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.9376543210987!2d-80.4925573!3d43.4642578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf48c03ee5105%3A0x5037b28c7231b70!2s84%20Grassbourne%20Ave%2C%20Kitchener%2C%20ON%20N2R%200S5%2C%20Canada!5e0!3m2!1sen!2sus!4v1689945412050!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="North Rubber Location"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
