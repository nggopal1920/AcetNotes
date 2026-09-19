import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThirdYearPyqBtech.css';

const ThirdYearPyqBtech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState(null);

  // 3rd Year Branches with their respective 5th & 6th Sem subjects
  const branchData = {
    cse: {
      name: 'Computer Science & Engineering (CSE)',
      code: 'KCS',
      icon: 'fa-laptop-code',
      subjects: [
        { name: 'Database Management Systems', code: 'KCS-501', slug: 'dbms-3yr' },
        { name: 'Design and Analysis of Algorithms', code: 'KCS-502', slug: 'daa' },
        { name: 'Software Engineering', code: 'KCS-503', slug: 'software-engineering' },
        { name: 'Web Technology', code: 'KCS-601', slug: 'web-technology' },
        { name: 'Compiler Design', code: 'KCS-602', slug: 'compiler-design' },
        { name: 'Computer Networks', code: 'KCS-603', slug: 'computer-networks' },
      ]
    },
    it: {
      name: 'Information Technology (IT)',
      code: 'KIT',
      icon: 'fa-network-wired',
      subjects: [
        { name: 'Database Management Systems', code: 'KCS-501', slug: 'dbms-3yr' },
        { name: 'Design and Analysis of Algorithms', code: 'KCS-502', slug: 'daa' },
        { name: 'Software Engineering', code: 'KCS-503', slug: 'software-engineering' },
        { name: 'Information Security & Cyber Laws', code: 'KIT-601', slug: 'cyber-laws' },
        { name: 'Computer Networks', code: 'KCS-603', slug: 'computer-networks' },
      ]
    },
    ece: {
      name: 'Electronics & Communication (ECE)',
      code: 'KEC',
      icon: 'fa-microchip',
      subjects: [
        { name: 'Integrated Circuits', code: 'KEC-501', slug: 'integrated-circuits' },
        { name: 'Microprocessors', code: 'KEC-502', slug: 'microprocessors' },
        { name: 'Digital Communication', code: 'KEC-503', slug: 'digital-communication' },
        { name: 'Antenna and Wave Propagation', code: 'KEC-601', slug: 'antenna' },
        { name: 'Control Systems', code: 'KEC-602', slug: 'control-systems' },
      ]
    },
    ee: {
      name: 'Electrical Engineering (EE)',
      code: 'KEE',
      icon: 'fa-bolt',
      subjects: [
        { name: 'Power Systems-I', code: 'KEE-501', slug: 'power-systems-1' },
        { name: 'Control Systems', code: 'KEE-502', slug: 'control-systems-ee' },
        { name: 'Power Electronics', code: 'KEE-503', slug: 'power-electronics' },
        { name: 'Power Systems-II', code: 'KEE-601', slug: 'power-systems-2' },
        { name: 'Electric Drives', code: 'KEE-602', slug: 'electric-drives' },
      ]
    },
    me: {
      name: 'Mechanical Engineering (ME)',
      code: 'KME',
      icon: 'fa-gears',
      subjects: [
        { name: 'Machine Design-I', code: 'KME-501', slug: 'machine-design-1' },
        { name: 'Heat Transfer', code: 'KME-502', slug: 'heat-transfer' },
        { name: 'Dynamics of Machines', code: 'KME-503', slug: 'dynamics-of-machines' },
        { name: 'Machine Design-II', code: 'KME-601', slug: 'machine-design-2' },
        { name: 'CAD / CAM', code: 'KME-602', slug: 'cad-cam' },
      ]
    },
    civil: {
      name: 'Civil Engineering (CE)',
      code: 'KCE',
      icon: 'fa-building',
      subjects: [
        { name: 'Structural Analysis-II', code: 'KCE-501', slug: 'structural-analysis-2' },
        { name: 'Geotechnical Engineering', code: 'KCE-502', slug: 'geotechnical-engg' },
        { name: 'Environmental Engineering', code: 'KCE-503', slug: 'environmental-engg' },
        { name: 'Design of Concrete Structures-I', code: 'KCE-601', slug: 'concrete-structures-1' },
        { name: 'Transportation Engineering', code: 'KCE-602', slug: 'transportation-engg' },
      ]
    }
  };

  const handleBranchSelect = (branchKey) => {
    setSelectedBranch(branchKey);
  };

  const handleSubjectClick = (subjectSlug) => {
    // Updated route to open ThirdBtechDrive page with branch and subject query parameters
    navigate(`/pyq/course/b.tech/third-drive?branch=${selectedBranch}&subject=${subjectSlug}`);
  };

  return (
    <div className="by3-container">
      {/* Back Button */}
      <button className="by3-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to B.Tech Years
      </button>

      {/* Header Banner */}
      <div className="by3-header-banner">
        <span className="by3-badge">B.Tech - Third Year (5th & 6th Semester)</span>
        <h1 className="by3-title">Select Your Branch</h1>
        <p className="by3-subtitle">
          Access advanced core subjects, departmental electives, and AKTU previous year papers for your third year.
        </p>
      </div>

      {/* Branches Row / Mobile Scrollable Bar */}
      <div className="by3-branch-row">
        {Object.keys(branchData).map((key) => {
          const branch = branchData[key];
          const isSelected = selectedBranch === key;
          return (
            <button
              key={key}
              className={`by3-branch-card ${isSelected ? 'by3-active' : ''}`}
              onClick={() => handleBranchSelect(key)}
            >
              <div className="by3-icon-box">
                <i className={`fa-solid ${branch.icon}`}></i>
              </div>
              <div className="by3-card-text">
                <h3>{key.toUpperCase()}</h3>
                <span>{branch.code}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Inline Subjects Section */}
      {selectedBranch && (
        <div className="by3-subjects-section">
          <div className="by3-subjects-header">
            <h2>{branchData[selectedBranch].name} - Subjects</h2>
            <p>Click on any subject to view and download previous year question papers.</p>
          </div>

          <div className="by3-subjects-list">
            {branchData[selectedBranch].subjects.map((sub, idx) => (
              <div
                key={idx}
                className="by3-subject-item"
                onClick={() => handleSubjectClick(sub.slug)}
              >
                <div className="by3-subject-info">
                  <div className="by3-sub-icon">
                    <i className="fa-solid fa-book-bookmark"></i>
                  </div>
                  <div className="by3-sub-details">
                    <h4>{sub.name}</h4>
                    <span>Subject Code: {sub.code}</span>
                  </div>
                </div>
                <button className="by3-view-pyq-btn">
                  View Papers <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdYearPyqBtech;