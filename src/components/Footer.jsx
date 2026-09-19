import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="logo-text">
                <span className="logo-accent">Aktu</span>
                <span className="logo-main">Notes</span>
              </div>
            </Link>
            <p className="brand-desc">
              Your one-stop destination for quality B.Tech notes, previous year question papers (PYQs), placement roadmaps, and study guides.
            </p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/"><i className="fa-solid fa-chevron-right"></i> Home</Link></li>
              <li><Link to="/btech"><i className="fa-solid fa-chevron-right"></i> B.Tech Notes</Link></li>
              <li><Link to="/about-us"><i className="fa-solid fa-chevron-right"></i> About Us</Link></li>
              <li><Link to="/contact-us"><i className="fa-solid fa-chevron-right"></i> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal Pages (AdSense Compliance) */}
          <div className="footer-col">
            <h4 className="footer-title">Legal & Policies</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy"><i className="fa-solid fa-chevron-right"></i> Privacy Policy</Link></li>
              <li><Link to="/terms-conditions"><i className="fa-solid fa-chevron-right"></i> Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <span>support@aktunotes.com</span>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aktu Notes. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;