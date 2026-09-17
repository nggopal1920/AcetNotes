import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThirdYearB.tech.css';

const ThirdYearBTech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('CSE');

  const branches = ['CSE', 'IT', 'ECE', 'ME', 'CE'];

  // 3rd Year Branch-wise Subjects
  const subjectsData = {
    CSE: [
      { id: 'dbms', title: 'Database Management Systems', code: 'BCS501', unitsCount: 5 },
      { id: 'web-tech', title: 'Web Technology', code: 'BCS502', unitsCount: 5 },
      { id: 'compiler-design', title: 'Compiler Design', code: 'BCS503', unitsCount: 5 },
      { id: 'cn', title: 'Computer Networks', code: 'BCS601', unitsCount: 5 },
      { id: 'se', title: 'Software Engineering', code: 'BCS602', unitsCount: 5 },
    ],
    IT: [
      { id: 'dbms', title: 'Database Management Systems', code: 'BIT501', unitsCount: 5 },
      { id: 'web-tech', title: 'Web Technology', code: 'BIT502', unitsCount: 5 },
      { id: 'cn', title: 'Computer Networks', code: 'BIT601', unitsCount: 5 },
      { id: 'daa', title: 'Design & Analysis of Algorithms', code: 'BIT602', unitsCount: 5 },
    ],
    ECE: [
      { id: 'dsp', title: 'Digital Signal Processing', code: 'BEC501', unitsCount: 5 },
      { id: 'vlsi-design', title: 'VLSI Design', code: 'BEC502', unitsCount: 5 },
      { id: 'antenna-propagation', title: 'Antenna & Wave Propagation', code: 'BEC503', unitsCount: 5 },
      { id: 'control-systems', title: 'Control Systems', code: 'BEC601', unitsCount: 5 },
    ],
    ME: [
      { id: 'heat-transfer', title: 'Heat & Mass Transfer', code: 'BME501', unitsCount: 5 },
      { id: 'machine-design', title: 'Design of Machine Elements', code: 'BME502', unitsCount: 5 },
      { id: 'ic-engines', title: 'Internal Combustion Engines', code: 'BME601', unitsCount: 5 },
      { id: 'manufacturing-tech', title: 'Advanced Manufacturing Tech', code: 'BME602', unitsCount: 5 },
    ],
    CE: [
      { id: 'geotechnical-eng', title: 'Geotechnical Engineering', code: 'BCE501', unitsCount: 5 },
      { id: 'design-concrete', title: 'Design of Concrete Structures', code: 'BCE502', unitsCount: 5 },
      { id: 'environmental-eng', title: 'Environmental Engineering', code: 'BCE601', unitsCount: 5 },
      { id: 'transportation-eng', title: 'Transportation Engineering', code: 'BCE602', unitsCount: 5 },
    ],
  };

  const currentSubjects = subjectsData[selectedBranch] || [];

  const handleSubjectClick = (subjectId) => {
    navigate(`/btech/notes-view?year=3rd-year&branch=${selectedBranch}&subject=${subjectId}`);
  };

  return (
    <div className="year-page-container">
      {/* Header Banner */}
      <div className="year-header">
        <span className="year-tag">Third Year B.Tech</span>
        <h1 className="year-title">3rd Year Syllabus & Core Subjects</h1>
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

export default ThirdYearBTech;