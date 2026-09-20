import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondYearPyqBtech.css';

const SecondYearPyqBtech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('cse');

  // 2nd Year Branches list with their respective subjects (3rd & 4th Semesters)
  const branchData = {
    cse: {
      name: 'Computer Science & Engineering (CSE)',
      code: 'KCS',
      icon: 'fa-laptop-code',
      subjects: [
        { name: 'Technical Communication', code: 'KAS-301/401', slug: 'technical-communication' },
        { name: 'Discrete Structures & Theory of Logic', code: 'KCS-301', slug: 'discrete-structures' },
        { name: 'Data Structures', code: 'KCS-302', slug: 'data-structures' },
        { name: 'Computer Organization & Architecture', code: 'KCS-303', slug: 'computer-organization' },
        { name: 'Database Management Systems', code: 'KCS-401', slug: 'dbms' },
        { name: 'Operating Systems', code: 'KCS-402', slug: 'operating-systems' },
        { name: 'Theory of Automata & Formal Languages', code: 'KCS-403', slug: 'automata-theory' },
      ]
    },
    it: {
      name: 'Information Technology (IT)',
      code: 'KIT',
      icon: 'fa-network-wired',
      subjects: [
        { name: 'Technical Communication', code: 'KAS-301/401', slug: 'technical-communication' },
        { name: 'Discrete Structures & Theory of Logic', code: 'KCS-301', slug: 'discrete-structures' },
        { name: 'Data Structures', code: 'KCS-302', slug: 'data-structures' },
        { name: 'Computer Organization & Architecture', code: 'KCS-303', slug: 'computer-organization' },
        { name: 'Database Management Systems', code: 'KCS-401', slug: 'dbms' },
        { name: 'Web Technology', code: 'KIT-401', slug: 'web-technology' },
      ]
    },
    ece: {
      name: 'Electronics & Communication (ECE)',
      code: 'KEC',
      icon: 'fa-microchip',
      subjects: [
        { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402', slug: 'maths-4' },
        { name: 'Electronic Devices', code: 'KEC-301', slug: 'electronic-devices' },
        { name: 'Digital System Design', code: 'KEC-302', slug: 'digital-system-design' },
        { name: 'Network Analysis and Synthesis', code: 'KEC-303', slug: 'network-analysis' },
        { name: 'Signals and Systems', code: 'KEC-401', slug: 'signals-and-systems' },
        { name: 'Analog Circuits', code: 'KEC-402', slug: 'analog-circuits' },
      ]
    },
    ee: {
      name: 'Electrical Engineering (EE)',
      code: 'KEE',
      icon: 'fa-bolt',
      subjects: [
        { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402', slug: 'maths-4' },
        { name: 'Electrical Machines-I', code: 'KEE-301', slug: 'electrical-machines-1' },
        { name: 'Network Analysis and Synthesis', code: 'KEC-303', slug: 'network-analysis' },
        { name: 'Measurement and Instrumentation', code: 'KEE-302', slug: 'measurement-instrumentation' },
        { name: 'Electrical Machines-II', code: 'KEE-401', slug: 'electrical-machines-2' },
        { name: 'Digital Electronics', code: 'KEE-402', slug: 'digital-electronics' },
      ]
    },
    me: {
      name: 'Mechanical Engineering (ME)',
      code: 'KME',
      icon: 'fa-gears',
      subjects: [
        { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402', slug: 'maths-4' },
        { name: 'Applied Thermodynamics', code: 'KME-301', slug: 'applied-thermodynamics' },
        { name: 'Fluid Mechanics & Fluid Machines', code: 'KME-302', slug: 'fluid-mechanics' },
        { name: 'Material Science', code: 'KME-303', slug: 'material-science' },
        { name: 'Engineering Mechanics', code: 'KME-401', slug: 'engineering-mechanics' },
        { name: 'Manufacturing Process', code: 'KME-402', slug: 'manufacturing-process' },
      ]
    },
    civil: {
      name: 'Civil Engineering (CE)',
      code: 'KCE',
      icon: 'fa-building',
      subjects: [
        { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402', slug: 'maths-4' },
        { name: 'Solid Mechanics', code: 'KCE-301', slug: 'solid-mechanics' },
        { name: 'Surveying & Geomatics', code: 'KCE-302', slug: 'surveying-geomatics' },
        { name: 'Fluid Mechanics', code: 'KCE-303', slug: 'fluid-mechanics-civil' },
        { name: 'Structural Analysis-I', code: 'KCE-401', slug: 'structural-analysis-1' },
        { name: 'Geoinformatics', code: 'KCE-402', slug: 'geoinformatics' },
      ]
    }
  };

  const handleBranchSelect = (branchKey) => {
    setSelectedBranch(branchKey);
  };

  const handleSubjectClick = (subjectSlug) => {
    // Redirects to Second Year Drive page with branch and subject query params
    navigate(`/pyq/course/b.tech/second-drive?branch=${selectedBranch}&subject=${subjectSlug}`);
  };

  return (
    <div className="by2-container">
      {/* Back Button */}
      <button className="by2-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to B.Tech Years
      </button>

      {/* Header Banner */}
      <div className="by2-header-banner">
        <span className="by2-badge">B.Tech - Second Year (3rd & 4th Semester)</span>
        <h1 className="by2-title">Select Your Branch</h1>
        <p className="by2-subtitle">
          Choose your branch below to view semester-wise subjects and previous year question papers instantly.
        </p>
      </div>

      {/* Branches Row / Mobile Scrollable Bar */}
      <div className="by2-branch-row">
        {Object.keys(branchData).map((key) => {
          const branch = branchData[key];
          const isSelected = selectedBranch === key;
          return (
            <button
              key={key}
              className={`by2-branch-card ${isSelected ? 'by2-active' : ''}`}
              onClick={() => handleBranchSelect(key)}
            >
              <div className="by2-icon-box">
                <i className={`fa-solid ${branch.icon}`}></i>
              </div>
              <div className="by2-card-text">
                <h3>{key.toUpperCase()}</h3>
                <span>{branch.code}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Inline Subjects Section */}
      {selectedBranch && (
        <div className="by2-subjects-section">
          <div className="by2-subjects-header">
            <h2>{branchData[selectedBranch].name} - Subjects</h2>
            <p>Click on any subject to view and download previous year question papers.</p>
          </div>

          <div className="by2-subjects-list">
            {branchData[selectedBranch].subjects.map((sub, idx) => (
              <div
                key={idx}
                className="by2-subject-item"
                onClick={() => handleSubjectClick(sub.slug)}
              >
                <div className="by2-subject-info">
                  <div className="by2-sub-icon">
                    <i className="fa-solid fa-book-bookmark"></i>
                  </div>
                  <div className="by2-sub-details">
                    <h4>{sub.name}</h4>
                    <span>Subject Code: {sub.code}</span>
                  </div>
                </div>
                <button className="by2-view-pyq-btn">
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

export default SecondYearPyqBtech;