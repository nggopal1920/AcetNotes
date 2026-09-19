import React from 'react';
import { Link } from 'react-router-dom';
import './BtechMaterial.css';

const BtechMaterial = () => {
  return (
    <div className="btech-material-container">
      <div className="btech-header">
        <span className="btech-badge">
          <i className="fa-solid fa-graduation-cap"></i> B.Tech Portal
        </span>
        <h1>Choose Your Study Material</h1>
        <p>Select the type of resource you want to access for your B.Tech semester preparation.</p>
      </div>

      <div className="material-grid">
        {/* Notes Option */}
        <Link to="/btech/notes" className="material-card">
          <div className="material-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
            <i className="fa-solid fa-book-open"></i>
          </div>
          <h3>Notes</h3>
          <p>Access subject-wise, unit-wise handwritten and printed lecture notes.</p>
          <span className="material-link">Explore Notes →</span>
        </Link>

        {/* PYQ Option */}
        <Link to="/btech/pyq" className="material-card">
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
    </div>
  );
};

export default BtechMaterial;