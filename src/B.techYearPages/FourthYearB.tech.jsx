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
    navigate(`/btech/notes-view?year=4th-year&branch=${selectedBranch}&subject=${subjectId}`);
  };

  return (
    <div className="year-page-container">
      {/* Header Banner */}
      <div className="year-header">
        <span className="year-tag">Fourth Year B.Tech</span>
        <h1 className="year-title">4th Year Syllabus & Advanced Electives</h1>
        <p className="year-desc">
          Select your engineering branch to view elective subjects and download unit-wise PDF notes.
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

export default FourthYearBTech;