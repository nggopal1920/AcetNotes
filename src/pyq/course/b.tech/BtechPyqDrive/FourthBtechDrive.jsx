import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./FourthBtechDrive.css";

const FourthYearDrive = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const branchKey = searchParams.get('branch') || 'cse';
  const subjectSlug = searchParams.get('subject') || 'artificial-intelligence';

  // 4th Year Branches with full subject objects mapping
  const fourthYearDriveData = {
    cse: {
      name: 'Computer Science & Engineering (CSE)',
      subjects: {
        'artificial-intelligence': { name: 'Artificial Intelligence', code: 'RCS-701' },
        'cloud-computing': { name: 'Cloud Computing', code: 'RCS-702' },
        'crypto-network-security': { name: 'Cryptography & Network Security', code: 'KOE-071' },
        'big-data-analytics': { name: 'Big Data Analytics', code: 'RCS-801' },
        'mobile-computing': { name: 'Mobile Computing', code: 'RCS-802' },
      }
    },
    it: {
      name: 'Information Technology (IT)',
      subjects: {
        'artificial-intelligence': { name: 'Artificial Intelligence', code: 'RCS-701' },
        'data-mining': { name: 'Data Mining & Warehousing', code: 'RIT-701' },
        'crypto-network-security': { name: 'Cryptography & Network Security', code: 'KOE-071' },
        'iot': { name: 'Internet of Things (IoT)', code: 'RIT-801' },
        'ism': { name: 'Information Storage Management', code: 'RIT-802' },
      }
    },
    ece: {
      name: 'Electronics & Communication (ECE)',
      subjects: {
        'data-comm-networks': { name: 'Data Communication Networks', code: 'REC-701' },
        'vlsi-design': { name: 'VLSI Design', code: 'REC-702' },
        'optical-comm': { name: 'Optical Communication', code: 'REC-801' },
        'radar-satellite': { name: 'Radar & Satellite Communication', code: 'REC-802' },
      }
    },
    ee: {
      name: 'Electrical Engineering (EE)',
      subjects: {
        'power-quality-facts': { name: 'Power Quality & FACTS', code: 'REE-701' },
        'smart-grid': { name: 'Smart Grid', code: 'REE-702' },
        'utilization-energy': { name: 'Utilization of Electrical Energy', code: 'REE-801' },
        'ehv-transmission': { name: 'EHV AC & DC Transmission', code: 'REE-802' },
      }
    },
    me: {
      name: 'Mechanical Engineering (ME)',
      subjects: {
        'operations-research': { name: 'Operations Research', code: 'RME-701' },
        'cad-cam-4yr': { name: 'CAD / CAM', code: 'RME-702' },
        'power-plant-engg': { name: 'Power Plant Engineering', code: 'RME-801' },
        'renewable-energy': { name: 'Renewable Energy Systems', code: 'RME-802' },
      }
    },
    civil: {
      name: 'Civil Engineering (CE)',
      subjects: {
        'concrete-structures-2': { name: 'Design of Concrete Structures-II', code: 'RCE-701' },
        'waste-water-treatment': { name: 'Waste Water Treatment', code: 'RCE-702' },
        'estimating-costing': { name: 'Estimating, Costing & Valuation', code: 'RCE-801' },
        'bridge-engg': { name: 'Bridge Engineering', code: 'RCE-802' },
      }
    }
  };

  const currentBranchObj = fourthYearDriveData[branchKey] || fourthYearDriveData['cse'];
  const currentSubjectObj = currentBranchObj.subjects[subjectSlug] || {
    name: 'Previous Year Question Paper',
    code: 'RCS-XXX'
  };

  const pyqYears = [
    { year: '2025-26', semester: '7th/8th Sem', driveLink: 'https://drive.google.com/drive/folders/your-4yr-link-2025' },
    { year: '2024-25', semester: '7th/8th Sem', driveLink: 'https://drive.google.com/drive/folders/your-4yr-link-2024' },
    { year: '2023-24', semester: '7th/8th Sem', driveLink: 'https://drive.google.com/drive/folders/your-4yr-link-2023' },
    { year: '2022-23', semester: '7th/8th Sem', driveLink: 'https://drive.google.com/drive/folders/your-4yr-link-2022' },
    { year: '2021-22', semester: '7th/8th Sem', driveLink: 'https://drive.google.com/drive/folders/your-4yr-link-2021' },
  ];

  return (
    <div className="fbd-container">
      <button className="fbd-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      <div className="fbd-header-banner">
        <span className="fbd-badge">B.Tech Fourth Year - {currentBranchObj.name}</span>
        <h1 className="fbd-title">{currentSubjectObj.name}</h1>
        <p className="fbd-subtitle">
          Subject Code: <strong>{currentSubjectObj.code}</strong> | Access last 5 years final year AKTU question papers via Google Drive below.
        </p>
      </div>

      <div className="fbd-pyq-grid">
        {pyqYears.map((item, index) => (
          <div key={index} className="fbd-pyq-card">
            <div className="fbd-card-left">
              <div className="fbd-pdf-icon">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="fbd-pyq-info">
                <h3>AKTU PYQ - Session {item.year}</h3>
                <span>{item.semester} | Verified Google Drive Link</span>
              </div>
            </div>
            <a
              href={item.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="fbd-download-btn"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i> Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthYearDrive;