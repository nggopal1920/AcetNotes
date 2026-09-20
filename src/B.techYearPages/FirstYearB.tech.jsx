import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstYearB.tech.css';

const FirstYearBTech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('CSE');

  const branches = ['CSE', 'IT', 'ECE', 'ME', 'CE'];

  // Subjects Data for 1st Year
  const subjectsData = {
    CSE: [
      { id: 'maths-1', title: 'Engineering Mathematics-I', code: 'BAS103', unitsCount: 5 },
      { id: 'c-prog', title: 'Programming for Problem Solving (C)', code: 'BCS101', unitsCount: 5 },
      { id: 'physics', title: 'Engineering Physics', code: 'BAS101', unitsCount: 5 },
      { id: 'ee', title: 'Basic Electrical Engineering', code: 'BEE101', unitsCount: 5 },
    ],
    IT: [
      { id: 'maths-1', title: 'Engineering Mathematics-I', code: 'BAS103', unitsCount: 5 },
      { id: 'c-prog', title: 'Programming for Problem Solving (C)', code: 'BCS101', unitsCount: 5 },
      { id: 'chemistry', title: 'Engineering Chemistry', code: 'BAS102', unitsCount: 5 },
    ],
    ECE: [
      { id: 'maths-1', title: 'Engineering Mathematics-I', code: 'BAS103', unitsCount: 5 },
      { id: 'physics', title: 'Engineering Physics', code: 'BAS101', unitsCount: 5 },
      { id: 'electronics', title: 'Basic Electronics Engineering', code: 'BEC101', unitsCount: 5 },
    ],
    ME: [
      { id: 'maths-1', title: 'Engineering Mathematics-I', code: 'BAS103', unitsCount: 5 },
      { id: 'mechanics', title: 'Engineering Mechanics', code: 'BME101', unitsCount: 5 },
    ],
    CE: [
      { id: 'maths-1', title: 'Engineering Mathematics-I', code: 'BAS103', unitsCount: 5 },
      { id: 'chemistry', title: 'Engineering Chemistry', code: 'BAS102', unitsCount: 5 },
    ],
  };

  const currentSubjects = subjectsData[selectedBranch] || [];

  const handleSubjectClick = (subjectId) => {
    navigate(`/notes/first-year?branch=${selectedBranch}&subject=${subjectId}`);
  };

  return (
    <div className="year-page-container">
      {/* Header Banner */}
      <div className="year-header">
        <span className="year-tag">First Year B.Tech</span>
        <h1 className="year-title">1st Year Syllabus & Subjects</h1>
        <p className="year-desc">
          Select your engineering branch to view subjects and download unit-wise PDF notes.
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
          <h2>Build a Strong Engineering Foundation in 1st Year</h2>
          <p>
            The first year of B.Tech under Dr. A.P.J. Abdul Kalam Technical University (AKTU) sets the foundational base for all engineering streams. 
            Whether you belong to Computer Science, Information Technology, Electronics, Mechanical, or Civil Engineering, students study core fundamental sciences 
            and basic engineering concepts designed to enhance analytical thinking. Our platform provides structured branch-wise segregation, precise subject codes, 
            and accessible unit-wise materials to help you excel in semester examinations effortlessly.
          </p>
        </div>

        <div className="btech-seo-grid">
          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <i className="fa-solid fa-book-bookmark"></i>
            </div>
            <h4>Unit-Wise Organization</h4>
            <p>Study systematically unit by unit to cover the complete university syllabus efficiently.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-hashtag"></i>
            </div>
            <h4>Accurate Subject Codes</h4>
            <p>Cross-check official curriculum codes like BAS103, BCS101 before your semester examinations.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h4>Targeted Prep</h4>
            <p>Focus directly on core concepts and high-weightage topics to maximize your GPA.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstYearBTech;