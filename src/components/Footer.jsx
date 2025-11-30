import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span className="logo-icon"></span> Nexio
          </h3>
          <p className="footer-description">
            Enhance your financial control with cutting-edge technology and intuitive design.
          </p>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <Link to="/features" className="footer-link">Features</Link>
          <Link to="/pricing" className="footer-link">Pricing</Link>
          <a href="#security" className="footer-link">Security</a>
          <a href="#integrations" className="footer-link">Integrations</a>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <a href="#about" className="footer-link">About Us</a>
          <a href="#careers" className="footer-link">Careers</a>
          <a href="#blog" className="footer-link">Blog</a>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <a href="#docs" className="footer-link">Documentation</a>
          <a href="#support" className="footer-link">Support</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Nexio. All rights reserved.</p>
        <div className="social-links">
          <a href="#twitter" className="social-link">Twitter</a>
          <a href="#linkedin" className="social-link">LinkedIn</a>
          <a href="#github" className="social-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
