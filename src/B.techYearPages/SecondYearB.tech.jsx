import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondYearB.tech.css';

const SecondYearBTech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('CSE');

  const branches = ['CSE', 'IT', 'ECE', 'ME', 'CE'];

  // 2nd Year Branch-wise Subjects (CSE updated with 10 core subjects)
  const subjectsData = {
    CSE: [
      { id: 'dsa', title: 'Data Structures & Algorithms', code: 'BCS301', unitsCount: 5 },
      { id: 'co', title: 'Computer Organization & Architecture', code: 'BCS302', unitsCount: 5 },
      { id: 'dstl', title: 'Discrete Structures & Theory of Logic', code: 'BCS303', unitsCount: 5 },
      { id: 'web-tech', title: 'Web Technology', code: 'BCS304', unitsCount: 5 },
      { id: 'maths-4', title: 'Engineering Mathematics-IV', code: 'BAS301', unitsCount: 5 },
      { id: 'dbms', title: 'Database Management Systems', code: 'BCS401', unitsCount: 5 },
      { id: 'ost', title: 'Operating Systems', code: 'BCS402', unitsCount: 5 },
      { id: 'tafl', title: 'Theory of Automata & Formal Languages', code: 'BCS403', unitsCount: 5 },
      { id: 'oop', title: 'Object Oriented Programming using Java', code: 'BCS404', unitsCount: 5 },
      { id: 'python-prog', title: 'Python Programming', code: 'BCS405', unitsCount: 5 },
    ],
    IT: [
      { id: 'dsa', title: 'Data Structures', code: 'BIT301', unitsCount: 5 },
      { id: 'oops-java', title: 'Object Oriented Programming', code: 'BIT302', unitsCount: 5 },
      { id: 'discrete-maths', title: 'Discrete Mathematics', code: 'BIT303', unitsCount: 5 },
      { id: 'dbms-intro', title: 'Database Concepts', code: 'BIT401', unitsCount: 5 },
    ],
    ECE: [
      { id: 'electronic-devices', title: 'Electronic Devices', code: 'BEC301', unitsCount: 5 },
      { id: 'digital-system', title: 'Digital System Design', code: 'BEC302', unitsCount: 5 },
      { id: 'network-analysis', title: 'Network Analysis & Synthesis', code: 'BEC303', unitsCount: 5 },
      { id: 'signal-system', title: 'Signals & Systems', code: 'BEC401', unitsCount: 5 },
    ],
    ME: [
      { id: 'thermodynamics', title: 'Thermodynamics', code: 'BME301', unitsCount: 5 },
      { id: 'fluid-mechanics', title: 'Fluid Mechanics', code: 'BME302', unitsCount: 5 },
      { id: 'materials-eng', title: 'Materials Engineering', code: 'BME303', unitsCount: 5 },
      { id: 'som', title: 'Strength of Materials', code: 'BME401', unitsCount: 5 },
    ],
    CE: [
      { id: 'surveying', title: 'Surveying & Geomatics', code: 'BCE301', unitsCount: 5 },
      { id: 'fluid-mechanics-ce', title: 'Fluid Mechanics', code: 'BCE302', unitsCount: 5 },
      { id: 'civil-materials', title: 'Construction Materials', code: 'BCE303', unitsCount: 5 },
      { id: 'structural-analysis', title: 'Structural Analysis-I', code: 'BCE401', unitsCount: 5 },
    ],
  };

  const currentSubjects = subjectsData[selectedBranch] || [];

  const handleSubjectClick = (subjectId) => {
    // Updated route to match the new notes folder structure
    navigate(`/notes/second-year?branch=${selectedBranch}&subject=${subjectId}`);
  };

  return (
    <div className="year-page-container">
      {/* Header Banner & SEO Intro */}
      <div className="year-header">
        <span className="year-tag">
          <i className="fa-solid fa-graduation-cap"></i> Second Year B.Tech Portal
        </span>
        <h1 className="year-title">B.Tech 2nd Year Syllabus & Core Subject Notes</h1>
        <p className="year-desc">
          Select your engineering branch to explore AKTU curriculum, core semester subjects, and download comprehensive unit-wise notes for high CGPA preparation.
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
          <h2>Build a Strong Foundation in Your 2nd Year Engineering</h2>
          <p>
            The second year of B.Tech marks the transition from basic sciences to core engineering branches. 
            Subjects like Data Structures, Operating Systems, Database Management Systems, and Object-Oriented Programming form the absolute bedrock 
            of technical interviews and campus placements. Our platform provides structured, unit-wise notes tailored to AKTU guidelines 
            to ensure engineering students grasp core logic effortlessly and excel in university examinations.
          </p>
        </div>

        <div className="btech-seo-grid">
          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <i className="fa-solid fa-book-bookmark"></i>
            </div>
            <h4>Unit-Wise Breakdown</h4>
            <p>Every subject is methodically divided into 5 units containing thorough explanations, syntax examples, and core concepts.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h4>Placement Ready Core</h4>
            <p>Special focus on fundamental programming and logical subjects that are frequently tested in technical screening rounds.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h4>Exam-Oriented Prep</h4>
            <p>Direct study materials designed to simplify complex technical topics and boost overall semester CGPA performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondYearBTech;