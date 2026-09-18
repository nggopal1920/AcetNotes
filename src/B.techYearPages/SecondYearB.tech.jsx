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
      {/* Header Banner */}
      <div className="year-header">
        <span className="year-tag">Second Year B.Tech</span>
        <h1 className="year-title">2nd Year Syllabus & Core Subjects</h1>
        <p className="year-desc">
          Select your engineering branch to view core subjects and download unit-wise PDF notes.
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

export default SecondYearBTech;