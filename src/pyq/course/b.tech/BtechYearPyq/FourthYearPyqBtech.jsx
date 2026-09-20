import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FourthYearPyqBtech.css';

const FourthYearPyqBtech = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('cse');

  // 4th Year Branches with their respective 7th & 8th Sem subjects
  const branchData = {
    cse: {
      name: 'Computer Science & Engineering (CSE)',
      code: 'KOE / RCS',
      icon: 'fa-laptop-code',
      subjects: [
        { name: 'Artificial Intelligence', code: 'RCS-701', slug: 'artificial-intelligence' },
        { name: 'Cloud Computing', code: 'RCS-702', slug: 'cloud-computing' },
        { name: 'Cryptography & Network Security', code: 'KOE-071', slug: 'crypto-network-security' },
        { name: 'Big Data Analytics', code: 'RCS-801', slug: 'big-data-analytics' },
        { name: 'Mobile Computing', code: 'RCS-802', slug: 'mobile-computing' },
      ]
    },
    it: {
      name: 'Information Technology (IT)',
      code: 'KOE / RIT',
      icon: 'fa-network-wired',
      subjects: [
        { name: 'Artificial Intelligence', code: 'RCS-701', slug: 'artificial-intelligence' },
        { name: 'Data Mining & Warehousing', code: 'RIT-701', slug: 'data-mining' },
        { name: 'Cryptography & Network Security', code: 'KOE-071', slug: 'crypto-network-security' },
        { name: 'Internet of Things (IoT)', code: 'RIT-801', slug: 'iot' },
        { name: 'Information Storage Management', code: 'RIT-802', slug: 'ism' },
      ]
    },
    ece: {
      name: 'Electronics & Communication (ECE)',
      code: 'KOE / REC',
      icon: 'fa-microchip',
      subjects: [
        { name: 'Data Communication Networks', code: 'REC-701', slug: 'data-comm-networks' },
        { name: 'VLSI Design', code: 'REC-702', slug: 'vlsi-design' },
        { name: 'Optical Communication', code: 'REC-801', slug: 'optical-comm' },
        { name: 'Radar & Satellite Communication', code: 'REC-802', slug: 'radar-satellite' },
      ]
    },
    ee: {
      name: 'Electrical Engineering (EE)',
      code: 'KOE / REE',
      icon: 'fa-bolt',
      subjects: [
        { name: 'Power Quality & FACTS', code: 'REE-701', slug: 'power-quality-facts' },
        { name: 'Smart Grid', code: 'REE-702', slug: 'smart-grid' },
        { name: 'Utilization of Electrical Energy', code: 'REE-801', slug: 'utilization-energy' },
        { name: 'EHV AC & DC Transmission', code: 'REE-802', slug: 'ehv-transmission' },
      ]
    },
    me: {
      name: 'Mechanical Engineering (ME)',
      code: 'KOE / RME',
      icon: 'fa-gears',
      subjects: [
        { name: 'Operations Research', code: 'RME-701', slug: 'operations-research' },
        { name: 'CAD / CAM', code: 'RME-702', slug: 'cad-cam-4yr' },
        { name: 'Power Plant Engineering', code: 'RME-801', slug: 'power-plant-engg' },
        { name: 'Renewable Energy Systems', code: 'RME-802', slug: 'renewable-energy' },
      ]
    },
    civil: {
      name: 'Civil Engineering (CE)',
      code: 'KOE / RCE',
      icon: 'fa-building',
      subjects: [
        { name: 'Design of Concrete Structures-II', code: 'RCE-701', slug: 'concrete-structures-2' },
        { name: 'Waste Water Treatment', code: 'RCE-702', slug: 'waste-water-treatment' },
        { name: 'Estimating, Costing & Valuation', code: 'RCE-801', slug: 'estimating-costing' },
        { name: 'Bridge Engineering', code: 'RCE-802', slug: 'bridge-engg' },
      ]
    }
  };

  const handleBranchSelect = (branchKey) => {
    setSelectedBranch(branchKey);
  };

  const handleSubjectClick = (subjectSlug) => {
    navigate(`/pyq/course/b.tech/subject?year=4&branch=${selectedBranch}&subject=${subjectSlug}`);
  };

  return (
    <div className="by4-container">
      {/* Back Button */}
      <button className="by4-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to B.Tech Years
      </button>

      {/* Header Banner */}
      <div className="by4-header-banner">
        <span className="by4-badge">B.Tech - Fourth Year (7th & 8th Semester)</span>
        <h1 className="by4-title">Select Your Branch</h1>
        <p className="by4-subtitle">
          Find final year open electives, project guidelines, and previous semester question papers for 7th and 8th semesters.
        </p>
      </div>

      {/* Branches Row / Mobile Scrollable Bar */}
      <div className="by4-branch-row">
        {Object.keys(branchData).map((key) => {
          const branch = branchData[key];
          const isSelected = selectedBranch === key;
          return (
            <button
              key={key}
              className={`by4-branch-card ${isSelected ? 'by4-active' : ''}`}
              onClick={() => handleBranchSelect(key)}
            >
              <div className="by4-icon-box">
                <i className={`fa-solid ${branch.icon}`}></i>
              </div>
              <div className="by4-card-text">
                <h3>{key.toUpperCase()}</h3>
                <span>{branch.code.split('/')[0].trim()}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Inline Subjects Section */}
      {selectedBranch && (
        <div className="by4-subjects-section">
          <div className="by4-subjects-header">
            <h2>{branchData[selectedBranch].name} - Subjects</h2>
            <p>Click on any subject to view and download previous year question papers.</p>
          </div>

          <div className="by4-subjects-list">
            {branchData[selectedBranch].subjects.map((sub, idx) => (
              <div
                key={idx}
                className="by4-subject-item"
                onClick={() => handleSubjectClick(sub.slug)}
              >
                <div className="by4-subject-info">
                  <div className="by4-sub-icon">
                    <i className="fa-solid fa-book-bookmark"></i>
                  </div>
                  <div className="by4-sub-details">
                    <h4>{sub.name}</h4>
                    <span>Subject Code: {sub.code}</span>
                  </div>
                </div>
                <button className="by4-view-pyq-btn">
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

export default FourthYearPyqBtech;