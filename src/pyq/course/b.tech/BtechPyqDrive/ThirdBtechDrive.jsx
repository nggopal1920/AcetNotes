import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ThirdBtechDrive.css';

const ThirdBtechDrive = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // URL se query parameters (branch aur subject) nikalna
  const searchParams = new URLSearchParams(location.search);
  const branchKey = searchParams.get('branch') || 'cse';
  const subjectSlug = searchParams.get('subject') || 'dbms-3yr';

  // 3rd Year ke saare subjects ka data aur unke 5 saal ke Google Drive links
  const thirdYearDriveData = {
    cse: {
      name: 'Computer Science & Engineering (CSE)',
      code: 'KCS',
      subjects: {
        'dbms-3yr': { name: 'Database Management Systems', code: 'KCS-501' },
        'daa': { name: 'Design and Analysis of Algorithms', code: 'KCS-502' },
        'software-engineering': { name: 'Software Engineering', code: 'KCS-503' },
        'web-technology': { name: 'Web Technology', code: 'KCS-601' },
        'compiler-design': { name: 'Compiler Design', code: 'KCS-602' },
        'computer-networks': { name: 'Computer Networks', code: 'KCS-603' },
      }
    },
    it: {
      name: 'Information Technology (IT)',
      code: 'KIT',
      subjects: {
        'dbms-3yr': { name: 'Database Management Systems', code: 'KCS-501' },
        'daa': { name: 'Design and Analysis of Algorithms', code: 'KCS-502' },
        'software-engineering': { name: 'Software Engineering', code: 'KCS-503' },
        'cyber-laws': { name: 'Information Security & Cyber Laws', code: 'KIT-601' },
        'computer-networks': { name: 'Computer Networks', code: 'KCS-603' },
      }
    },
    ece: {
      name: 'Electronics & Communication (ECE)',
      code: 'KEC',
      subjects: {
        'integrated-circuits': { name: 'Integrated Circuits', code: 'KEC-501' },
        'microprocessors': { name: 'Microprocessors', code: 'KEC-502' },
        'digital-communication': { name: 'Digital Communication', code: 'KEC-503' },
        'antenna': { name: 'Antenna and Wave Propagation', code: 'KEC-601' },
        'control-systems': { name: 'Control Systems', code: 'KEC-602' },
      }
    },
    ee: {
      name: 'Electrical Engineering (EE)',
      code: 'KEE',
      subjects: {
        'power-systems-1': { name: 'Power Systems-I', code: 'KEE-501' },
        'control-systems-ee': { name: 'Control Systems', code: 'KEE-502' },
        'power-electronics': { name: 'Power Electronics', code: 'KEE-503' },
        'power-systems-2': { name: 'Power Systems-II', code: 'KEE-601' },
        'electric-drives': { name: 'Electric Drives', code: 'KEE-602' },
      }
    },
    me: {
      name: 'Mechanical Engineering (ME)',
      code: 'KME',
      subjects: {
        'machine-design-1': { name: 'Machine Design-I', code: 'KME-501' },
        'heat-transfer': { name: 'Heat Transfer', code: 'KME-502' },
        'dynamics-of-machines': { name: 'Dynamics of Machines', code: 'KME-503' },
        'machine-design-2': { name: 'Machine Design-II', code: 'KME-601' },
        'cad-cam': { name: 'CAD / CAM', code: 'KME-602' },
      }
    },
    civil: {
      name: 'Civil Engineering (CE)',
      code: 'KCE',
      subjects: {
        'structural-analysis-2': { name: 'Structural Analysis-II', code: 'KCE-501' },
        'geotechnical-engg': { name: 'Geotechnical Engineering', code: 'KCE-502' },
        'environmental-engg': { name: 'Environmental Engineering', code: 'KCE-503' },
        'concrete-structures-1': { name: 'Design of Concrete Structures-I', code: 'KCE-601' },
        'transportation-engg': { name: 'Transportation Engineering', code: 'KCE-602' },
      }
    }
  };

  // Current branch aur subject ki details nikalna
  const currentBranchObj = thirdYearDriveData[branchKey] || thirdYearDriveData['cse'];
  const currentSubjectObj = currentBranchObj.subjects[subjectSlug] || {
    name: 'Previous Year Question Paper',
    code: 'KCS-XXX'
  };

  // Pichle 5 saal ke sample Google Drive links (Yahan aap apne real Google Drive links daal sakti hain)
  const pyqYears = [
    { year: '2025-26', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2025' },
    { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2024' },
    { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2023' },
    { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2022' },
    { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2021' },
  ];

  return (
    <div className="tbd-container">
      {/* Back Button */}
      <button className="tbd-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      {/* Header Banner */}
      <div className="tbd-header-banner">
        <span className="tbd-badge">B.Tech Third Year - {currentBranchObj.name}</span>
        <h1 className="tbd-title">{currentSubjectObj.name}</h1>
        <p className="tbd-subtitle">
          Subject Code: <strong>{currentSubjectObj.code}</strong> | Access last 5 years AKTU question papers via Google Drive below.
        </p>
      </div>

      {/* 5 Years Download Cards Grid */}
      <div className="tbd-pyq-grid">
        {pyqYears.map((item, index) => (
          <div key={index} className="tbd-pyq-card">
            <div className="tbd-card-left">
              <div className="tbd-pdf-icon">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="tbd-pyq-info">
                <h3>AKTU PYQ - Session {item.year}</h3>
                <span>{item.semester} | Verified Google Drive Link</span>
              </div>
            </div>
            <a
              href={item.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tbd-download-btn"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i> Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdBtechDrive;