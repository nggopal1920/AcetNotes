import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FourthYearB.tech.css';

const FourthYearBTech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('CSE');

  const branches = ['CSE', 'IT', 'ECE', 'ME', 'CE'];

  // 4th Year Branch-wise Subjects
  const subjectsData = {
    CSE: [
      { id: 'cloud-computing', title: 'Cloud Computing', code: 'BCS701', unitsCount: 5 },
      { id: 'machine-learning', title: 'Machine Learning & AI', code: 'BCS702', unitsCount: 5 },
      { id: 'cyber-security', title: 'Cyber Security & Forensics', code: 'BCS703', unitsCount: 5 },
      { id: 'big-data', title: 'Big Data Analytics', code: 'BCS801', unitsCount: 5 },
      { id: 'deep-learning', title: 'Deep Learning', code: 'BCS802', unitsCount: 5 },
    ],
    IT: [
      { id: 'cloud-computing', title: 'Cloud Computing', code: 'BIT701', unitsCount: 5 },
      { id: 'information-security', title: 'Information Security', code: 'BIT702', unitsCount: 5 },
      { id: 'data-mining', title: 'Data Mining & Warehousing', code: 'BIT801', unitsCount: 5 },
      { id: 'devops', title: 'DevOps & Agile Methodology', code: 'BIT802', unitsCount: 5 },
    ],
    ECE: [
      { id: 'optical-comm', title: 'Optical Communication', code: 'BEC701', unitsCount: 5 },
      { id: 'embedded-systems', title: 'Embedded Systems & IoT', code: 'BEC702', unitsCount: 5 },
      { id: 'wireless-comm', title: 'Wireless & Mobile Communication', code: 'BEC801', unitsCount: 5 },
      { id: 'radar-nav', title: 'Radar & Navigational Aids', code: 'BEC802', unitsCount: 5 },
    ],
    ME: [
      { id: 'cad-cam', title: 'CAD / CAM Engineering', code: 'BME701', unitsCount: 5 },
      { id: 'automobile-eng', title: 'Automobile Engineering', code: 'BME702', unitsCount: 5 },
      { id: 'power-plant', title: 'Power Plant Engineering', code: 'BME801', unitsCount: 5 },
      { id: 'robotics', title: 'Industrial Robotics', code: 'BME802', unitsCount: 5 },
    ],
    CE: [
      { id: 'water-resource', title: 'Water Resource Engineering', code: 'BCE701', unitsCount: 5 },
      { id: 'steel-structures', title: 'Design of Steel Structures', code: 'BCE702', unitsCount: 5 },
      { id: 'construction-mgmt', title: 'Construction Planning & Mgmt', code: 'BCE801', unitsCount: 5 },
      { id: 'earthquake-eng', title: 'Earthquake Engineering', code: 'BCE802', unitsCount: 5 },
    ],
  };

  const currentSubjects = subjectsData[selectedBranch] || [];

  const handleSubjectClick = (subjectId) => {
    navigate(`/notes/fourth-year?branch=${selectedBranch}&subject=${subjectId}`);
  };

  return (
    <div className="year-page-container">
      {/* Header Banner & SEO Intro */}
      <div className="year-header">
        <span className="year-tag">
          <i className="fa-solid fa-graduation-cap"></i> Fourth Year B.Tech Portal
        </span>
        <h1 className="year-title">B.Tech 4th Year Syllabus & Advanced Electives</h1>
        <p className="year-desc">
          Select your engineering branch to explore professional electives, final-year curriculum, and download unit-wise PDF notes.
        </p>
      </div>

      {/* Branch Selector */}
      <div className="branch-section">
        <h2 className="section-title">Select Your Branch</h2>
        <div className="branch-chips-wrapper">
          {branches.map((branch) => (
            <button
              key={branch}
              className={`branch-chip ${selectedBranch === branch ? 'active' : ''}`}
              onClick={() => setSelectedBranch(branch)}
            >
              <i className="fa-solid fa-code-branch"></i>
              <span>{branch}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Subjects Display */}
      <div className="subjects-section">
        <div className="subjects-header">
          <h3>
            Subjects for <span className="highlight-text">{selectedBranch}</span>
          </h3>
          <span className="count-badge">{currentSubjects.length} Available</span>
        </div>

        <div className="subjects-list-grid">
          {currentSubjects.length > 0 ? (
            currentSubjects.map((subject) => (
              <div key={subject.id} className="subject-row-card">
                <div className="subject-info">
                  <span className="sub-code">{subject.code}</span>
                  <h4 className="sub-title">{subject.title}</h4>
                  <span className="sub-units">{subject.unitsCount} Units Available</span>
                </div>

                <button
                  className="btn-open-subject"
                  onClick={() => handleSubjectClick(subject.id)}
                >
                  <span>View Notes</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888', padding: '20px' }}>
              Subjects for this branch will be updated soon.
            </p>
          )}
        </div>
      </div>

      {/* Bottom Rich Content Section for AdSense Approval & SEO */}
      <div className="btech-seo-section">
        <div className="btech-seo-main-card">
          <h2>Conquer Your Final Year with Advanced Engineering Electives</h2>
          <p>
            The final year of B.Tech focuses on cutting-edge technologies, specialized professional electives, and industry-oriented subjects like Cloud Computing, Machine Learning, Cyber Security, and Deep Learning. 
            Balancing campus placements, final projects, and university semester exams can be challenging. Our platform provides high-quality, unit-wise notes tailored to AKTU guidelines 
            to help you score stellar marks effortlessly in your ultimate graduation year.
          </p>
        </div>

        <div className="btech-seo-grid">
          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <i className="fa-solid fa-book-bookmark"></i>
            </div>
            <h4>Advanced Electives</h4>
            <p>Comprehensive coverage of high-level professional electives mapped directly to university codes.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-microchip"></i>
            </div>
            <h4>Industry-Ready Content</h4>
            <p>Focus on modern tech stacks, automation, AI, and practical engineering methodologies.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h4>Final Semester Mastery</h4>
            <p>Streamlined notes designed to help you balance final year projects and semester exams with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthYearBTech;