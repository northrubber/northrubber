import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import logo from '../assets/images/logo-white.png'; // Add a white version of your logo for the footer

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-column">
          <img src={logo} alt="aaxi Logo" className="footer-logo" style={{ height: '60px', marginBottom: '15px' }} />
          <p>
            aaxi is a leading provider of high-quality metal fabrication and manufacturing services with over 20 years of experience in the industry.
          </p>
          <div className="social-links">
            {[
              { href: 'https://www.facebook.com', label: 'Facebook', icon: 'fab fa-facebook-f' },
              { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
              { href: 'https://www.instagram.com', label: 'Instagram', icon: 'fab fa-instagram' },
              { href: 'https://www.twitter.com', label: 'Twitter', icon: 'fab fa-twitter' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, backgroundColor: '#c4161c' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                123 Metal Way<br />
                Toronto, ON M1M 1M1<br />
                Canada
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <a href="tel:(123) 456-7890">(123) 456-7890</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <a href="mailto:info@aaxi.ca">info@aaxi.ca</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                Monday-Friday: 8am - 5pm<br />
                Saturday-Sunday: Closed
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About Us' },
              { href: '#services', label: 'Services' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact Us' },
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href={link.href}>{link.label}</a>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to receive updates about our services and projects.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} aaxi. All rights reserved. | Designed with <i className="fas fa-heart" style={{ color: '#c4161c' }}></i></p>
      </div>
    </footer>
  );
}

export default Footer;
