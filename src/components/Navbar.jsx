import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"></span>
          <span className="logo-text">Nexio</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="navbar-dropdown">
            <button className="navbar-link dropdown-toggle">Resources ▾</button>
            <div className="dropdown-menu">
              <Link
                to="/about"
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/documentation"
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                to="/integrations"
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link
                to="/security"
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link
                to="/testimonials"
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="btn-signin" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="btn-cta" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
