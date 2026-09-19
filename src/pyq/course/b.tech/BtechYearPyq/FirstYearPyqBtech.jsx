import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstYearPyqBtech.css';

const FirstYearPyqBtech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('cse');

  const branches = [
    { id: 'cse', name: 'Computer Science & Engg (CSE)', code: 'NAS / NCS', icon: 'fa-laptop-code' },
    { id: 'ece', name: 'Electronics & Comm (ECE)', code: 'NAS / NEC', icon: 'fa-microchip' },
    { id: 'me', name: 'Mechanical Engineering (ME)', code: 'NAS / NME', icon: 'fa-gears' },
    { id: 'ce', name: 'Civil Engineering (CE)', code: 'NAS / NCE', icon: 'fa-building' }
  ];

  const subjectDataMaster = {
    cse: [
      { slug: 'engineering-physics', name: 'Engineering Physics', code: 'NAS-101/201' },
      { slug: 'engineering-chemistry', name: 'Engineering Chemistry', code: 'NAS-102/202' },
      { slug: 'maths-1', name: 'Engineering Mathematics-I', code: 'NAS-103' },
      { slug: 'basic-electrical', name: 'Basic Electrical Engineering', code: 'NEE-101/201' },
      { slug: 'c-programming', name: 'Programming for Problem Solving (C)', code: 'NCS-101/201' },
    ],
    ece: [
      { slug: 'engineering-physics', name: 'Engineering Physics', code: 'NAS-101/201' },
      { slug: 'maths-1', name: 'Engineering Mathematics-I', code: 'NAS-103' },
      { slug: 'basic-electronics', name: 'Basic Electronics Engineering', code: 'NEC-101/201' },
      { slug: 'mechanical-engg', name: 'Fundamentals of Mechanical Engg.', code: 'NME-101/201' },
    ],
    me: [
      { slug: 'engineering-physics', name: 'Engineering Physics', code: 'NAS-101/201' },
      { slug: 'maths-1', name: 'Engineering Mathematics-I', code: 'NAS-103' },
      { slug: 'mechanical-engg', name: 'Fundamentals of Mechanical Engg.', code: 'NME-101/201' },
      { slug: 'engineering-drawing', name: 'Engineering Drawing', code: 'NCE-101/201' },
    ],
    ce: [
      { slug: 'engineering-chemistry', name: 'Engineering Chemistry', code: 'NAS-102/202' },
      { slug: 'maths-1', name: 'Engineering Mathematics-I', code: 'NAS-103' },
      { slug: 'basic-civil', name: 'Basic Civil Engineering', code: 'NCE-101/201' },
      { slug: 'engineering-drawing', name: 'Engineering Drawing', code: 'NCE-101/201' },
    ]
  };

  const handleBranchSelect = (branchKey) => {
    setSelectedBranch(branchKey);
  };

  const handleSubjectClick = (subjectSlug) => {
    navigate(`/pyq/course/b.tech/first-drive?year=1&branch=${selectedBranch}&subject=${subjectSlug}`);
  };

  return (
    <div className="fy-container">
      {/* Back Button */}
      <button className="fy-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to B.Tech Years
      </button>

      {/* Header Banner */}
      <div className="fy-header-banner">
        <span className="fy-badge">B.Tech - First Year (1st & 2nd Semester)</span>
        <h1 className="fy-title">Select Your Branch</h1>
        <p className="fy-subtitle">
          Choose your branch below to view semester-wise common subjects and previous year question papers instantly.
        </p>
      </div>

      {/* Branches Row / Horizontal Scrollable Bar for Mobile */}
      <div className="fy-branch-row">
        {branches.map((branch) => {
          const isSelected = selectedBranch === branch.id;
          return (
            <button
              key={branch.id}
              className={`fy-branch-card ${isSelected ? 'fy-active' : ''}`}
              onClick={() => handleBranchSelect(branch.id)}
            >
              <div className="fy-icon-box">
                <i className={`fa-solid ${branch.icon}`}></i>
              </div>
              <div className="fy-card-text">
                <h3>{branch.id.toUpperCase()}</h3>
                <span>{branch.code}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Inline Subjects Section */}
      {selectedBranch && (
        <div className="fy-subjects-section">
          <div className="fy-subjects-header">
            <h2>1st Year - {selectedBranch.toUpperCase()} Subjects</h2>
            <p>Click on any subject to view and download previous year question papers.</p>
          </div>

          <div className="fy-subjects-list">
            {(subjectDataMaster[selectedBranch] || []).map((sub, idx) => (
              <div
                key={idx}
                className="fy-subject-item"
                onClick={() => handleSubjectClick(sub.slug)}
              >
                <div className="fy-subject-info">
                  <div className="fy-sub-icon">
                    <i className="fa-solid fa-book-bookmark"></i>
                  </div>
                  <div className="fy-sub-details">
                    <h4>{sub.name}</h4>
                    <span>Subject Code: {sub.code}</span>
                  </div>
                </div>
                <button className="fy-view-pyq-btn">
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

export default FirstYearPyqBtech;