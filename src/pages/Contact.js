import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="contact-page">
      <Helmet>
        <title>Contact Us - AAXI</title>
        <meta name="description" content="Contact AAXI for custom metal fabrication services." />
      </Helmet>
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-container">
        <div className="contact-form-section">
          <h1>Get in Touch</h1>
          <p>We’re here to help. Chat to our friendly team 24/7 and get set up and ready to go in just 5 minutes.</p>
          <div className="contact-links">
            <a href="tel:+11234567890">
              <i className="fas fa-phone-alt"></i> Start a live chat
            </a>
            <a href="mailto:info@aaxi.ca">
              <i className="fas fa-envelope"></i> Shoot us an email
            </a>
            <a href="https://twitter.com/aaxi" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Message us on Twitter
            </a>
          </div>
          <h2 className="form-title">Send us a message now!</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formState.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formState.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formState.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289994948!2d-79.5181358081316!3d43.71815566213179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1654123456789!5m2!1sen!2sus"
            title="AAXI Location Map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
