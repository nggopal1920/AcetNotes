import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './B.techYearPyq.css'; // Apni zaroorat ke hisab se CSS file import kar sakte hain

const BtechYearPyq = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course') || 'btech';

  // B.Tech ke Years ki list
  const years = [
    { id: '1', title: '1st Year', description: 'Common for all engineering branches', icon: 'fa-solid fa-1' },
    { id: '2', title: '2nd Year', description: 'Departmental core subjects start', icon: 'fa-solid fa-2' },
    { id: '3', title: '3rd Year', description: 'Advanced core & departmental electives', icon: 'fa-solid fa-3' },
    { id: '4', title: '4th Year', description: 'Major projects & professional electives', icon: 'fa-solid fa-4' }
  ];

  const handleYearSelect = (yearId) => {
    // Year select hone ke baad user ko branch pyq page par bhejenge, sath mein course aur year bhej kar
    navigate(`/pyq/course/b.tech/branch?course=${course}&year=${yearId}`);
  };

  return (
    <div className="btech-year-container">
      {/* Header & Back Button */}
      <div className="year-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back to Courses
        </button>
        <span className="badge">B.Tech PYQs</span>
        <h1 className="main-title">Select Your Academic Year</h1>
        <p className="subtitle">Choose your current B.Tech year to access branch-wise previous year question papers.</p>
      </div>

      {/* Years Grid */}
      <div className="years-grid">
        {years.map((item) => (
          <div 
            key={item.id} 
            className="year-card"
            onClick={() => handleYearSelect(item.id)}
          >
            <div className="year-icon-box">
              <i className={item.icon}></i>
            </div>
            <div className="year-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="arrow-box">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BtechYearPyq;