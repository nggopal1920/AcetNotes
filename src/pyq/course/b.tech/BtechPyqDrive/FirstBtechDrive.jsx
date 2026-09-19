import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FirstBtechDrive.css'; // Agar css nahi hai toh hata sakte hain ya FirstYearPyqBtech.css use kar sakte hain

const FirstBtechDrive = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const year = searchParams.get('year') || '1';
  const branchKey = searchParams.get('branch') || 'cse';
  const subjectSlug = searchParams.get('subject') || 'engineering-physics';

  const subjectDataMaster = {
    cse: {
      'engineering-physics': { name: 'Engineering Physics', code: 'NAS-101/201' },
      'engineering-chemistry': { name: 'Engineering Chemistry', code: 'NAS-102/202' },
      'maths-1': { name: 'Engineering Mathematics-I', code: 'NAS-103' },
      'basic-electrical': { name: 'Basic Electrical Engineering', code: 'NEE-101/201' },
      'c-programming': { name: 'Programming for Problem Solving (C)', code: 'NCS-101/201' },
    },
    ece: {
      'engineering-physics': { name: 'Engineering Physics', code: 'NAS-101/201' },
      'maths-1': { name: 'Engineering Mathematics-I', code: 'NAS-103' },
      'basic-electronics': { name: 'Basic Electronics Engineering', code: 'NEC-101/201' },
      'mechanical-engg': { name: 'Fundamentals of Mechanical Engg.', code: 'NME-101/201' },
    },
    me: {
      'engineering-physics': { name: 'Engineering Physics', code: 'NAS-101/201' },
      'maths-1': { name: 'Engineering Mathematics-I', code: 'NAS-103' },
      'mechanical-engg': { name: 'Fundamentals of Mechanical Engg.', code: 'NME-101/201' },
      'engineering-drawing': { name: 'Engineering Drawing', code: 'NCE-101/201' },
    },
    ce: {
      'engineering-chemistry': { name: 'Engineering Chemistry', code: 'NAS-102/202' },
      'maths-1': { name: 'Engineering Mathematics-I', code: 'NAS-103' },
      'basic-civil': { name: 'Basic Civil Engineering', code: 'NCE-101/201' },
      'engineering-drawing': { name: 'Engineering Drawing', code: 'NCE-101/201' },
    }
  };

  const currentBranchSubjects = subjectDataMaster[branchKey] || {};
  const currentSubjectObj = currentBranchSubjects[subjectSlug] || {
    name: 'Previous Year Question Paper',
    code: 'NAS-XXX'
  };

  const pyqYears = [
    { year: '2025-26', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2025' },
    { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2024' },
    { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2023' },
    { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2022' },
    { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/drive/folders/your-link-2021' },
  ];

  return (
    <div className="bsp-container" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <button className="bsp-back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      <div className="bsp-header-banner" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <span className="bsp-badge">B.Tech Year {year} - Branch: {branchKey.toUpperCase()}</span>
        <h1>{currentSubjectObj.name}</h1>
        <p>Subject Code: <strong>{currentSubjectObj.code}</strong> | Access verified AKTU previous year question papers via Google Drive.</p>
      </div>

      <div className="bsp-pyq-grid" style={{ display: 'grid', gap: '15px' }}>
        {pyqYears.map((item, index) => (
          <div key={index} className="bsp-pyq-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <i className="fa-solid fa-file-pdf" style={{ fontSize: '24px', color: '#ff4d4d' }}></i>
              <div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>AKTU PYQ - Session {item.year}</h3>
                <span style={{ fontSize: '13px', color: '#666' }}>{item.semester} | Direct Google Drive Access</span>
              </div>
            </div>
            <a
              href={item.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '8px 16px', background: '#28a745', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}
            >
              <i className="fa-solid fa-cloud-arrow-down"></i> Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBtechDrive;