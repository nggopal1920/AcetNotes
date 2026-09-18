import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './B.techBranchPyq.css';

const BtechBranchPyq = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course') || 'btech';
  const year = searchParams.get('year') || '1';

  // Branches list with Google Drive links (Yahan aap apni Google Drive ki links dal sakte hain)
  const branchesData = [
    {
      id: 'cse',
      name: 'Computer Science and Engineering (CSE)',
      code: 'CSE',
      icon: 'fa-solid fa-laptop-code',
      viewUrl: 'YOUR_GOOGLE_DRIVE_VIEW_LINK_HERE',
      downloadUrl: 'YOUR_GOOGLE_DRIVE_DOWNLOAD_LINK_HERE'
    },
    {
      id: 'it',
      name: 'Information Technology (IT)',
      code: 'IT',
      icon: 'fa-solid fa-network-wired',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 'ece',
      name: 'Electronics and Communication Engineering',
      code: 'ECE',
      icon: 'fa-solid fa-microchip',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 'ee',
      name: 'Electrical Engineering',
      code: 'EE',
      icon: 'fa-solid fa-bolt',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 'me',
      name: 'Mechanical Engineering',
      code: 'ME',
      icon: 'fa-solid fa-gears',
      viewUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 'ce',
      name: 'Civil Engineering',
      code: 'CE',
      icon: 'fa-solid fa-building',
      viewUrl: '#',
      downloadUrl: '#'
    }
  ];

  return (
    <div className="btech-branch-container">
      {/* Header section */}
      <div className="branch-header">
        <button className="branch-back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back to Years
        </button>
        <div className="branch-badge-group">
          <span className="badge-item">Course: {course.toUpperCase()}</span>
          <span className="badge-item">Year {year}</span>
        </div>
        <h1 className="branch-main-title">Select Your Branch</h1>
        <p className="branch-subtitle">Download or view previous year question papers branch-wise for Year {year}.</p>
      </div>

      {/* Branches Grid */}
      <div className="branch-cards-grid">
        {branchesData.map((branch) => (
          <div key={branch.id} className="branch-card">
            <div className="branch-top-info">
              <div className="branch-icon-wrap">
                <i className={branch.icon}></i>
              </div>
              <div className="branch-text-wrap">
                <span className="branch-code-tag">{branch.code}</span>
                <h3>{branch.name}</h3>
              </div>
            </div>

            {/* Action Buttons for Drive Links */}
            <div className="branch-action-buttons">
              <a 
                href={branch.viewUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="branch-btn branch-btn-view"
              >
                <i className="fa-solid fa-eye"></i> View PDF
              </a>
              <a 
                href={branch.downloadUrl} 
                download 
                className="branch-btn branch-btn-download"
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

export default BtechBranchPyq;