import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BtechMaterial.css';

const BtechMaterial = () => {
  // Page khulte hi scroll automatically top par ho jayega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="btech-material-container">
      {/* Top Header & Intro */}
      <div className="btech-header">
        <span className="btech-badge">
          <i className="fa-solid fa-graduation-cap"></i> B.Tech Portal
        </span>
        <h1>B.Tech Study Material, Notes, PYQs & Quantum Hub</h1>
        <p>Select the type of resource you want to access for your B.Tech semester preparation.</p>
      </div>

      <div className="material-grid">
        {/* Notes Option */}
        <Link to="/btech" className="material-card">
          <div className="material-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
            <i className="fa-solid fa-book-open"></i>
          </div>
          <h3>Notes</h3>
          <p>Access subject-wise, unit-wise handwritten and printed lecture notes.</p>
          <span className="material-link">Explore Notes →</span>
        </Link>

        {/* PYQ Option */}
        <Link to="/pyq" className="material-card">
          <div className="material-ico" style={{ color: '#16a34a', background: '#f0fdf4' }}>
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <h3>Previous Year Papers (PYQ)</h3>
          <p>Download solved and unsolved university question papers.</p>
          <span className="material-link">View PYQs →</span>
        </Link>

        {/* Syllabus Option */}
        <Link to="/btech/syllabus" className="material-card">
          <div className="material-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
            <i className="fa-solid fa-list-check"></i>
          </div>
          <h3>Syllabus</h3>
          <p>Check official university curriculum and credit structures.</p>
          <span className="material-link">View Syllabus →</span>
        </Link>

        {/* Quantum Option */}
        <Link to="/btech/quantum" className="material-card">
          <div className="material-icon" style={{ color: '#d97706', background: '#fffbeb' }}>
            <i className="fa-solid fa-cube"></i>
          </div>
          <h3>Quantum Series</h3>
          <p>All-in-one exam preparation series for high CGPA scoring.</p>
          <span className="material-link">Get Quantum →</span>
        </Link>
      </div>

      {/* Redesigned Bottom SEO Section for AdSense Approval */}
      <div className="btech-seo-section">
        <div className="btech-seo-main-card">
          <h2>Why Choose Our B.Tech Academic Hub?</h2>
          <p>
            Securing a high CGPA in Bachelor of Technology (B.Tech) semester examinations requires structured learning, 
            consistent practice, and access to authentic academic resources. Whether you are pursuing Computer Science, 
            Information Technology, Electronics, Mechanical, or Civil Engineering, our portal provides everything you need 
            to ace your university exams under AKTU and other technical curriculums.
          </p>
        </div>

        <div className="btech-seo-grid">
          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <h4>Unit-Wise Notes</h4>
            <p>Simplified notes compiled by toppers and professors to make complex technical concepts easy to understand.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-file-arrow-down"></i>
            </div>
            <h4>Exam PYQ Trends</h4>
            <p>Analyze previous years' question papers to track repeated patterns and high-weightage topics efficiently.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <h4>Last-Minute Quantum</h4>
            <p>Get direct, exam-oriented answers and crucial questions designed for rapid revision before exams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtechMaterial;
