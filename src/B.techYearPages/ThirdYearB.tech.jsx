import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondYearB.tech.css'; // Aap chahein toh apna ThirdYearB.tech.css bhi use kar sakte hain

const ThirdYearBTech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('CSE');

  const branches = ['CSE', 'IT', 'ECE', 'ME', 'CE'];

  // 3rd Year Branch-wise Subjects Data (AKTU Syllabus)
  const subjectsData = {
    CSE: [
      { id: 'dbms', title: 'Database Management System', code: 'BCS501', unitsCount: 5 },
      { id: 'web-tech', title: 'Web Technology', code: 'BCS502', unitsCount: 5 },
      { id: 'daa', title: 'Design and Analysis of Algorithm', code: 'BCS503', unitsCount: 5 },
      { id: 'ood-cpp', title: 'Object Oriented System Design with C++', code: 'BCS054', unitsCount: 5 },
      { id: 'dwm', title: 'Data Warehousing & Data Mining', code: 'BCS058', unitsCount: 5 },
      { id: 'se', title: 'Software Engineering', code: 'BCS601', unitsCount: 5 },
      { id: 'compiler-design', title: 'Compiler Design', code: 'BCS602', unitsCount: 5 },
      { id: 'cn', title: 'Computer Networks', code: 'BCS603', unitsCount: 5 },
      { id: 'data-compression', title: 'Data Compression', code: 'BCS064', unitsCount: 5 },
      { id: 'spm', title: 'Software Project Management', code: 'DBOE068', unitsCount: 5 },
    ],
    IT: [
      { id: 'it-sub-1', title: 'Information Security & Cyber Laws', code: 'BIT501', unitsCount: 5 },
      { id: 'it-sub-2', title: 'Web & Internet Technology', code: 'BIT502', unitsCount: 5 },
    ],
    ECE: [
      { id: 'ece-sub-1', title: 'Microprocessors & Microcontrollers', code: 'BEC501', unitsCount: 5 },
      { id: 'ece-sub-2', title: 'Digital Communication', code: 'BEC502', unitsCount: 5 },
    ],
    ME: [
      { id: 'me-sub-1', title: 'Machine Design-I', code: 'BME501', unitsCount: 5 },
      { id: 'me-sub-2', title: 'Heat and Mass Transfer', code: 'BME502', unitsCount: 5 },
    ],
    CE: [
      { id: 'ce-sub-1', title: 'Design of Concrete Structures-I', code: 'BCE501', unitsCount: 5 },
      { id: 'ce-sub-2', title: 'Geotechnical Engineering', code: 'BCE502', unitsCount: 5 },
    ],
  };

  const currentSubjects = subjectsData[selectedBranch] || [];

  const handleSubjectClick = (subjectId) => {
    // Ye route aapko unit-wise notes page par le jayega jo humne pehle banaya tha
    navigate(`/notes/third-year?branch=${selectedBranch}&subject=${subjectId}`);
  };

  return (
    <div className="year-page-container">
      {/* Header Banner & SEO Intro */}
      <div className="year-header">
        <span className="year-tag">
          <i className="fa-solid fa-graduation-cap"></i> Third Year B.Tech Portal
        </span>
        <h1 className="year-title">B.Tech 3rd Year Syllabus & Core Subject Notes</h1>
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
          <h2>Master Your 3rd Year Engineering Curriculum</h2>
          <p>
            The third year of B.Tech is considered the most crucial phase for technical placements, internships, and core engineering mastery. 
            With advanced subjects like Database Management Systems, Compiler Design, Computer Networks, and Design & Analysis of Algorithms, 
            having structured study materials becomes mandatory. Our platform provides curated, unit-wise notes aligned with AKTU guidelines 
            to help engineering students understand core logic easily and score exceptional marks in semester exams.
          </p>
        </div>

        <div className="btech-seo-grid">
          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <i className="fa-solid fa-book-bookmark"></i>
            </div>
            <h4>Unit-Wise Breakdown</h4>
            <p>Every subject is systematically divided into 5 units containing thorough explanations, derivations, and practice problems.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h4>Core Technical Focus</h4>
            <p>Special emphasis on programming, networking architecture, and core engineering concepts frequently asked in university papers.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h4>Exam-Oriented Prep</h4>
            <p>Direct notes and reference guides designed to simplify tough university questions and maximize final CGPA performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdYearBTech;