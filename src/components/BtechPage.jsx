import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BtechPage.css';

const BtechPage = () => {
  const navigate = useNavigate();

  const yearCards = [
    {
      id: '1st-year',
      title: '1st Year',
      icon: 'fa-graduation-cap',
      route: '/btech/1st-year',
    },
    {
      id: '2nd-year',
      title: '2nd Year',
      icon: 'fa-laptop-code',
      route: '/btech/2nd-year',
    },
    {
      id: '3rd-year',
      title: '3rd Year',
      icon: 'fa-network-wired',
      route: '/btech/3rd-year',
    },
    {
      id: '4th-year',
      title: '4th Year',
      icon: 'fa-brain',
      route: '/btech/4th-year',
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="btech-container">
      {/* Article / Header Section */}
      <section className="btech-article-card">
        <span className="article-badge">
          <i className="fa-solid fa-graduation-cap"></i> B.Tech Resource Hub
        </span>
        <h1 className="article-title">Select Academic Year</h1>
        <p className="article-p">
          Welcome to the <span className="brand-highlight">acetStudy</span> engineering repository. Select your academic year to view branch-wise syllabus, handwritten notes, and semester exam resources.
        </p>
        <div className="article-tips">
          <div className="tip-item">
            <i className="fa-solid fa-circle-check"></i>
            <span>Unit-wise Handwritten Notes</span>
          </div>
          <div className="tip-item">
            <i className="fa-solid fa-circle-check"></i>
            <span>Updated Syllabus</span>
          </div>
          <div className="tip-item">
            <i className="fa-solid fa-circle-check"></i>
            <span>Free High-Speed PDF Access</span>
          </div>
        </div>
      </section>

      {/* Year Selection Section */}
      <section className="year-selection-section">
        <h2 className="section-heading">Academic Years</h2>
        <div className="year-grid">
          {yearCards.map((card) => (
            <div
              key={card.id}
              className="year-card"
              onClick={() => handleCardClick(card.route)}
            >
              <div className="year-left">
                <div className="year-icon">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <h3 className="year-title">{card.title}</h3>
              </div>

              <button
                className="btn-click-here"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(card.route);
                }}
              >
                <span>Click Here</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BtechPage;