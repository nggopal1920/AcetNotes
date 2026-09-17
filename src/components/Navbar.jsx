import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Left: Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div className="logo-text">
            <span className="logo-accent">Acet</span>
            <span className="logo-main">Study</span>
          </div>
        </Link>

        {/* Center: Desktop Links */}
        <ul className="desktop-nav-links">
          <li>
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/btech" className="nav-link">
              <i className="fa-solid fa-book-bookmark"></i> B.Tech Notes
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-link">
              <i className="fa-solid fa-circle-info"></i> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="nav-link">
              <i className="fa-solid fa-envelope"></i> Contact Us
            </Link>
          </li>
        </ul>

        {/* Right: Desktop Action Button */}
        <div className="desktop-action">
          <Link to="/btech" className="login-btn">
            <span>Explore Notes</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobile-toggle-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"}></i>
        </button>

        {/* Mobile Slide-in Drawer Box */}
        {isOpen && (
          <>
            <div className="mobile-drawer active">
              <div className="drawer-header">
                <div className="drawer-logo">
                  <span className="logo-accent">Acet</span>Study
                </div>
                <button className="drawer-close-btn" onClick={closeMenu}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="drawer-body">
                <ul className="mobile-nav-links">
                  <li>
                    <Link to="/" onClick={closeMenu}>
                      <i className="fa-solid fa-house"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/btech" onClick={closeMenu}>
                      <i className="fa-solid fa-book-bookmark"></i> B.Tech Notes
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" onClick={closeMenu}>
                      <i className="fa-solid fa-circle-info"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" onClick={closeMenu}>
                      <i className="fa-solid fa-envelope"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="drawer-footer">
                <Link to="/btech" className="login-btn mobile-login-btn" onClick={closeMenu}>
                  <span>Explore Notes</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Dark Backdrop Overlay */}
            <div className="drawer-backdrop" onClick={closeMenu}></div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;