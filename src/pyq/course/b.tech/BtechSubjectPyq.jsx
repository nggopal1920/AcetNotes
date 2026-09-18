import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './B.techSubjectPyq.css';

const BtechSubjectPyq = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const course = searchParams.get('course') || 'btech';
  const year = searchParams.get('year') || '3';
  const branch = searchParams.get('branch') || 'cse';
  const subjectId = searchParams.get('subject') || 'subject';

  // Subject ID ko proper readable Name mein map karne ke liye object
  const subjectNamesMap = {
    'dbms': 'Database Management System (BCS501)',
    'web-tech': 'Web Technology (BCS502)',
    'daa': 'Design and Analysis of Algorithm (BCS503)',
    'ood-cpp': 'Object Oriented System Design with C++ (BCS054)',
    'dwm': 'Data Warehousing & Data Mining (BCS058)',
    'se': 'Software Engineering (BCS601)',
    'compiler-design': 'Compiler Design (BCS602)',
    'cn': 'Computer Networks (BCS603)',
    'data-compression': 'Data Compression (BCS064)',
    'spm': 'Software Project Management (DBOE068)'
  };

  const formattedSubjectName = subjectNamesMap[subjectId] || subjectId.toUpperCase();

  // Pichle 5 saal ke PYQs ka data (Yahan aap apni Google Drive links replace karenge)
  const pyqYearsData = [
    {
      year: '2025',
      title: 'AKTU 2025-26 Examination Paper',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      year: '2024',
      title: 'AKTU 2024-25 Examination Paper',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      year: '2023',
      title: 'AKTU 2023-24 Examination Paper',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      year: '2022',
      title: 'AKTU 2022-23 Examination Paper',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      year: '2021',
      title: 'AKTU 2021-22 Examination Paper',
      viewUrl: '#',
      downloadUrl: '#'
    }
  ];

  return (
    <div className="subject-pyq-container" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Header */}
      <div className="subject-pyq-header" style={{ marginBottom: '30px', background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ padding: '8px 15px', cursor: 'pointer', marginBottom: '15px', background: '#f1f5f9', border: 'none', borderRadius: '6px', fontWeight: '600', color: '#334155' }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Branches & Subjects
        </button>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{course.toUpperCase()}</span>
          <span style={{ background: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>Year {year}</span>
          <span style={{ background: '#fef3c7', color: '#b45309', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{branch.toUpperCase()}</span>
        </div>
        <h1 style={{ fontSize: '24px', color: '#0f172a', fontWeight: '800', marginBottom: '6px' }}>Previous Year Question Papers (5 Years)</h1>
        <p style={{ color: '#64748b', fontSize: '14px' }}>Subject: <strong style={{ color: '#0f172a' }}>{formattedSubjectName}</strong></p>
      </div>

      {/* 5 Years Cards List */}
      <div className="pyq-years-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {pyqYearsData.map((item) => (
          <div 
            key={item.year} 
            style={{ 
              background: '#fff', 
              padding: '20px', 
              borderRadius: '10px', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
              border: '1px solid #e2e8f0',
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '15px'
            }}
          >
            <div>
              <span style={{ background: '#2563eb', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '13px', fontWeight: '700' }}>
                {item.year}
              </span>
              <h3 style={{ marginTop: '8px', color: '#1e293b', fontSize: '17px', fontWeight: '700' }}>{item.title}</h3>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href={item.viewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '8px 16px', background: '#10b981', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <i className="fa-solid fa-eye"></i> View PDF
              </a>
              <a 
                href={item.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BtechSubjectPyq;
