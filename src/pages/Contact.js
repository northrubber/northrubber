import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="contact-page">
      <Helmet>
        <title>Contact Us - AAXI</title>
        <meta name="description" content="Contact AAXI for custom metal fabrication services." />
      </Helmet>
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>123 Metal Way, Toronto, ON M1M 1M1, Canada</p>
          </div>
          <div className="contact-info-item">
            <i className="fas fa-phone-alt"></i>
            <h3>Call Us</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="contact-info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>info@aaxi.ca</p>
          </div>
        </div>
        <div className="contact-map-form">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289994948!2d-79.5181358081316!3d43.71815566213179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1654123456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="AAXI Location Map"
            ></iframe>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formState.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="form-button">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
