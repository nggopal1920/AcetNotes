import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './B.techYearPyq.css'; 

const BtechYearPyq = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course') || 'btech';

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
      <div className="year-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back to Courses
        </button>
        <span className="badge">B.Tech PYQs Portal</span>
        <h1 className="main-title">Select Your Academic Year</h1>
        <p className="subtitle">Choose your current B.Tech year to access branch-wise and subject-wise previous year question papers.</p>
      </div>

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
    </div>
  );
};

export default BtechYearPyq;