import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SecondBtechDrive.css';

const SecondBtechDrive = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const branchKey = searchParams.get('branch') || 'cse';
  const subjectSlug = searchParams.get('subject') || 'data-structures';

  const secondYearDriveData = {
    cse: {
      name: 'Computer Science & Engineering (CSE)',
      subjects: {
        'technical-communication': { name: 'Technical Communication', code: 'KAS-301/401' },
        'discrete-structures': { name: 'Discrete Structures & Theory of Logic', code: 'KCS-301' },
        'data-structures': { name: 'Data Structures', code: 'KCS-302' },
        'computer-organization': { name: 'Computer Organization & Architecture', code: 'KCS-303' },
        'dbms': { name: 'Database Management Systems', code: 'KCS-401' },
        'operating-systems': { name: 'Operating Systems', code: 'KCS-402' },
        'automata-theory': { name: 'Theory of Automata & Formal Languages', code: 'KCS-403' },
      }
    },
    it: {
      name: 'Information Technology (IT)',
      subjects: {
        'technical-communication': { name: 'Technical Communication', code: 'KAS-301/401' },
        'discrete-structures': { name: 'Discrete Structures & Theory of Logic', code: 'KCS-301' },
        'data-structures': { name: 'Data Structures', code: 'KCS-302' },
        'computer-organization': { name: 'Computer Organization & Architecture', code: 'KCS-303' },
        'dbms': { name: 'Database Management Systems', code: 'KCS-401' },
        'web-technology': { name: 'Web Technology', code: 'KIT-401' },
      }
    },
    ece: {
      name: 'Electronics & Communication (ECE)',
      subjects: {
        'maths-4': { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402' },
        'electronic-devices': { name: 'Electronic Devices', code: 'KEC-301' },
        'digital-system-design': { name: 'Digital System Design', code: 'KEC-302' },
        'network-analysis': { name: 'Network Analysis and Synthesis', code: 'KEC-303' },
        'signals-and-systems': { name: 'Signals and Systems', code: 'KEC-401' },
        'analog-circuits': { name: 'Analog Circuits', code: 'KEC-402' },
      }
    },
    ee: {
      name: 'Electrical Engineering (EE)',
      subjects: {
        'maths-4': { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402' },
        'electrical-machines-1': { name: 'Electrical Machines-I', code: 'KEE-301' },
        'network-analysis': { name: 'Network Analysis and Synthesis', code: 'KEC-303' },
        'measurement-instrumentation': { name: 'Measurement and Instrumentation', code: 'KEE-302' },
        'electrical-machines-2': { name: 'Electrical Machines-II', code: 'KEE-401' },
        'digital-electronics': { name: 'Digital Electronics', code: 'KEE-402' },
      }
    },
    me: {
      name: 'Mechanical Engineering (ME)',
      subjects: {
        'maths-4': { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402' },
        'applied-thermodynamics': { name: 'Applied Thermodynamics', code: 'KME-301' },
        'fluid-mechanics': { name: 'Fluid Mechanics & Fluid Machines', code: 'KME-302' },
        'material-science': { name: 'Material Science', code: 'KME-303' },
        'engineering-mechanics': { name: 'Engineering Mechanics', code: 'KME-401' },
        'manufacturing-process': { name: 'Manufacturing Process', code: 'KME-402' },
      }
    },
    civil: {
      name: 'Civil Engineering (CE)',
      subjects: {
        'maths-4': { name: 'Maths-IV (PDE, Prob & Stats)', code: 'KAS-302/402' },
        'solid-mechanics': { name: 'Solid Mechanics', code: 'KCE-301' },
        'surveying-geomatics': { name: 'Surveying & Geomatics', code: 'KCE-302' },
        'fluid-mechanics-civil': { name: 'Fluid Mechanics', code: 'KCE-303' },
        'structural-analysis-1': { name: 'Structural Analysis-I', code: 'KCE-401' },
        'geoinformatics': { name: 'Geoinformatics', code: 'KCE-402' },
      }
    }
  };

  const currentBranchObj = secondYearDriveData[branchKey] || secondYearDriveData['cse'];
  const currentSubjectObj = currentBranchObj.subjects[subjectSlug] || {
    name: 'Previous Year Question Paper',
    code: 'KCS-XXX'
  };

  const pyqYears = [
    { year: '2025-26', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2025' },
    { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2024' },
    { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2023' },
    { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2022' },
    { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2021' },
  ];

  return (
    <div className="sbd-container">
      <button className="sbd-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      <div className="sbd-header-banner">
        <span className="sbd-badge">B.Tech Second Year - {currentBranchObj.name}</span>
        <h1 className="sbd-title">{currentSubjectObj.name}</h1>
        <p className="sbd-subtitle">
          Subject Code: <strong>{currentSubjectObj.code}</strong> | Access last 5 years AKTU question papers via Google Drive below.
        </p>
      </div>

      <div className="sbd-pyq-grid">
        {pyqYears.map((item, index) => (
          <div key={index} className="sbd-pyq-card">
            <div className="sbd-card-left">
              <div className="sbd-pdf-icon">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="sbd-pyq-info">
                <h3>AKTU PYQ - Session {item.year}</h3>
                <span>{item.semester} | Verified Google Drive Link</span>
              </div>
            </div>
            <a
              href={item.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sbd-download-btn"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i> Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondBtechDrive;