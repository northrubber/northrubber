import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404 - Page Not Found | North Rubber</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse North Rubber's Natural Rubber & SBR Sheets or return to our homepage." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://northrubber.com/404" />
      </Helmet>
      
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
          
          <div className="helpful-links">
            <h3>Try these instead:</h3>
            <ul>
              <li><Link to="/">Home - Browse our rubber solutions</Link></li>
              <li><Link to="/industrial-rubber-sheet/natural-rubber-sbr">Natural Rubber & SBR Sheets</Link></li>
              <li><Link to="/about">About North Rubber</Link></li>
              <li><Link to="/contact">Contact Us for Quotes</Link></li>
            </ul>
          </div>
          
          <Link to="/" className="back-home-btn">
            <i className="fas fa-home"></i>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
