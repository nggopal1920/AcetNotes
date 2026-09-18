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
          Select your engineering branch below to view subjects and access unit-wise PDF study notes.
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
          {currentSubjects.map((subject) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstYearBTech;