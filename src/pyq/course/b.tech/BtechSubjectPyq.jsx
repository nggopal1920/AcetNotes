import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './B.techYearPyq.css'; 

const BtechYearPyq = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course') || 'btech';

  // Page load hote hi scroll top par ho jayega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const years = [
    { 
      id: '1', 
      title: '1st Year', 
      description: 'Common for all engineering branches', 
      icon: 'fa-solid fa-1',
      path: '/pyq/course/b.tech/first-year' 
    },
    { 
      id: '2', 
      title: '2nd Year', 
      description: 'Departmental core subjects start', 
      icon: 'fa-solid fa-2',
      path: '/pyq/course/b.tech/second-year' 
    },
    { 
      id: '3', 
      title: '3rd Year', 
      description: 'Advanced core & departmental electives', 
      icon: 'fa-solid fa-3',
      path: '/pyq/course/b.tech/third-year' 
    },
    { 
      id: '4', 
      title: '4th Year', 
      description: 'Major projects & professional electives', 
      icon: 'fa-solid fa-4',
      path: '/pyq/course/b.tech/fourth-year' 
    }
  ];

  const handleYearSelect = (yearItem) => {
    navigate(`${yearItem.path}?course=${course}&year=${yearItem.id}`);
  };

  return (
    <div className="btech-year-container">
      {/* Top Header (Compact & Clean as per requirement) */}
      <div className="year-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back to Courses
        </button>
        <span className="badge">B.Tech PYQs Portal</span>
        <h1 className="main-title">Select Your Academic Year</h1>
        <p className="subtitle">Choose your current B.Tech year to access branch-wise and subject-wise previous year question papers.</p>
      </div>

      {/* Years Grid Layout */}
      <div className="years-grid">
        {years.map((item) => (
          <div key={item.id} className="year-card" onClick={() => handleYearSelect(item)}>
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

      {/* Bottom Rich SEO Section for Google AdSense Approval */}
      <div className="btech-seo-section">
        <div className="btech-seo-main-card">
          <h2>Why Practice Previous Year Question Papers (PYQs)?</h2>
          <p>
            Scoring top grades in B.Tech university examinations under AKTU and other technical universities 
            requires more than just reading textbooks. Analyzing previous year question papers helps students 
            understand the recurring patterns, marking schemes, and high-weightage topics frequently asked by examiners. 
            Our platform compiles authentic university question papers categorized systematically by year, branch, and subject 
            to streamline your semester exam preparations.
          </p>
        </div>

        <div className="btech-seo-grid">
          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <h4>Authentic Papers</h4>
            <p>Access official semester exam papers aligned precisely with university patterns.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h4>Trend Analysis</h4>
            <p>Identify repeated questions and master high-scoring topics efficiently.</p>
          </div>

          <div className="btech-seo-feature-card">
            <div className="feature-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h4>Exam Readiness</h4>
            <p>Build confidence and improve time management before entering the examination hall.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtechYearPyq;
