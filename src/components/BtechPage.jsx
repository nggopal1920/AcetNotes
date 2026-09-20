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
      {/* Article / Header Section - Customized for 3rd Year Focus */}
      <section className="btech-article-card">
        <span className="article-badge">
          <i className="fa-solid fa-network-wired"></i> B.Tech Aktu Special Hub
        </span>
        <h1 className="article-title">B.Tech Advanced Engineering Resources</h1>
        <p className="article-p">
          Welcome to the <span className="brand-highlight">"AktuNotes</span> repository. This section is specially dedicated to core technical semesters featuring advanced algorithms, system design, operating systems, database management, and semester exam preparation notes.
        </p>
        <div className="article-tips">
          <div className="tip-item">
            <i className="fa-solid fa-circle-check"></i>
            <span>Core Subject Handwritten Notes</span>
          </div>
          <div className="tip-item">
            <i className="fa-solid fa-circle-check"></i>
            <span>AKTU PYQs & Previous Year Solutions</span>
          </div>
          <div className="tip-item">
            <i className="fa-solid fa-circle-check"></i>
            <span>Gate & Placement Oriented Material</span>
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

      {/* Extra SEO & AdSense Content Section */}
      <section className="btech-article-card" style={{ marginTop: '2.5rem' }}>
        <span className="article-badge">
          <i className="fa-solid fa-book-open"></i> Complete Study Guide & Overview
        </span>
        <h2 className="article-title" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
          Why B.Tech 3rd Year is Crucial for Your Engineering Career
        </h2>
        <p className="article-p">
           Engineering is widely considered the backbone of a technical degree. During this phase, students transition from foundational concepts to core engineering domains such as Computer Science, Information Technology, Electronics, and Mechanical branches. Scoring well in these semesters requires precise understanding, structured notes, and regular practice of previous years' question papers (PYQs).
        </p>
        
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.6rem' }}>
          What Resources Do We Provide for Engineering Students?
        </h3>
        <p className="article-p" style={{ marginBottom: '1rem' }}>
          At <strong>AktuNotes</strong>, our mission is to bridge the gap between quality education and accessibility. We curate unit-wise handwritten notes prepared by university toppers and experienced faculty members. Whether you are preparing for AKTU semester examinations, campus placements, or competitive exams like GATE, our repository offers structured guidance to ensure conceptual clarity.
        </p>

        <div className="article-tips" style={{ marginTop: '1rem' }}>
          <div className="tip-item">
            <i className="fa-solid fa-shield-halved"></i>
            <span>100% Verified Syllabus Content</span>
          </div>
          <div className="tip-item">
            <i className="fa-solid fa-bolt"></i>
            <span>Fast PDF Loading & Free Access</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BtechPage;
