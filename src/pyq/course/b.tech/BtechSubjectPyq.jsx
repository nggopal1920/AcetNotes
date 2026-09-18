import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './B.techSubjectPyq.css'; // Apni styling ke hisab se CSS file bana sakte hain

const BtechSubjectPyq = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const course = searchParams.get('course') || 'btech';
  const year = searchParams.get('year') || '1';
  const branch = searchParams.get('branch') || 'cse';
  const subjectId = searchParams.get('subject') || 'subject';

  // Pichle 5 saal ke PYQs ka data (Yahan aap apni Google Drive links replace karenge)
  const pyqYearsData = [
    {
      year: '2025',
      title: 'AKTU 2025-26 Examination Paper',
      viewUrl: 'YOUR_GOOGLE_DRIVE_VIEW_LINK_2025',
      downloadUrl: 'YOUR_GOOGLE_DRIVE_VIEW_LINK_2025' // Safe view/download link jaisa pehle discuss kiya tha
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
      <div className="subject-pyq-header" style={{ marginBottom: '30px' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ padding: '8px 15px', cursor: 'pointer', marginBottom: '15px', background: '#eee', border: 'none', borderRadius: '5px' }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Branches & Subjects
        </button>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <span style={{ background: '#e2e8f0', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{course.toUpperCase()}</span>
          <span style={{ background: '#e2e8f0', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>Year {year}</span>
          <span style={{ background: '#e2e8f0', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{branch.toUpperCase()}</span>
        </div>
        <h1>Previous Year Question Papers (5 Years)</h1>
        <p style={{ color: '#666' }}>Subject: <strong>{subjectId.toUpperCase()}</strong> - Access previous years' AKTU question papers below.</p>
      </div>

      {/* 5 Years Cards List */}
      <div className="pyq-years-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {pyqYearsData.map((item) => (
          <div 
            key={item.year} 
            style={{ 
              background: '#fff', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '15px'
            }}
          >
            <div>
              <span style={{ background: '#007bff', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
                {item.year}
              </span>
              <h3 style={{ marginTop: '8px', color: '#333' }}>{item.title}</h3>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href={item.viewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '8px 16px', background: '#28a745', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontSize: '14px' }}
              >
                <i className="fa-solid fa-eye"></i> View PDF
              </a>
              <a 
                href={item.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '8px 16px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontSize: '14px' }}
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