import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Left Column: Brand/Theme Info */}
        <div className="footer-col">
          <h2 className="footer-title">aaxi</h2>
          <p className="footer-description">
          High-quality precision metal fabrication services for all your industrial needs
          </p>
        </div>

        {/* Middle Column 1: Navigation */}
        <div className="footer-col">
          <h3 className="footer-subtitle">Navigation</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Middle Column 2: Services */}
        <div className="footer-col">
          <h3 className="footer-subtitle">Services</h3>
          <ul className="footer-links">
            <li><a href="#Metal Fabrication">Metal Fabrication</a></li>
            <li><a href="#Cutting">Precision Cutting</a></li>
            <li><a href="#Machining">CNC Machining</a></li>
            <li><a href="#Custommetal">Custom Metal Design</a></li>
          </ul>
        </div>

        {/* Right Column: Stay Connected */}
        <div className="footer-col">
          <h3 className="footer-subtitle">Stay Connected</h3>
          <p className="footer-description">
            Stay connected and receive our latest tips and updates.
          </p>
          <form className="footer-form">
            <input
              type="email"
              className="footer-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="footer-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2025. <span>Your Site Name</span>. All Rights Reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms of Use</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
