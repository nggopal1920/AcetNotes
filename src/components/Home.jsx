import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">
            <i className="fa-solid fa-sparkles"></i> #1 B.Tech Resource Portal
          </span>
          <h1 className="hero-title">
            Master Your Semester Exams with <span className="highlight">AcetStudy</span>
          </h1>
          <p className="hero-subtitle">
            Get high-quality year-wise & branch-wise B.Tech notes, previous year question papers (PYQs), syllabus, and exam prep guides for free.
          </p>
          <div className="hero-actions">
            <Link to="/btech" className="btn-primary">
              <i className="fa-solid fa-book-open"></i> Explore Notes
            </Link>
            <Link to="/pyq" className="btn-secondary">
              <i className="fa-solid fa-file-pdf"></i> View PYQs
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Feature Cards */}
      <section className="features-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="cards-grid">
          <div className="feature-card">
            <div className="card-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>B.Tech Notes</h3>
            <p>Organized semester-wise and unit-wise PDF notes curated for all engineering branches.</p>
            <Link to="/btech" className="card-link">Access Notes →</Link>
          </div>

          <div className="feature-card">
            <div className="card-icon alt">
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <h3>Previous Year Papers</h3>
            <p>Solved and unsolved university question papers to help you analyze exam patterns.</p>
            <Link to="/pyq" className="card-link">Download PYQs →</Link>
          </div>

          <div className="feature-card">
            <div className="card-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3>Placement Prep</h3>
            <p>Essential interview questions, coding roadmaps, and aptitude notes to crack job drives.</p>
            <Link to="/about" className="card-link">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* Banner Call To Action */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Boost Your Academic Performance?</h2>
          <p>Join thousands of students accessing free quality engineering material today.</p>
          <Link to="/btech" className="btn-cta">Start Reading Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;