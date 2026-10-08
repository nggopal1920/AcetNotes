import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">
            <i className="fa-solid fa-sparkles"></i> #1 B.Tech Resource Portal
          </span>
          <h1 className="hero-title">
            Master Your Semester Exams with <span className="highlight">NotesHub</span>
          </h1>
          <p className="hero-subtitle">
            Get high-quality year-wise & branch-wise B.Tech notes, previous year question papers (PYQs), syllabus, and exam prep guides for free.
          </p>
          <div className="hero-actions">
            <Link to="/btech" className="btn-primary">
              <i className="fa-solid fa-book-open"></i> Explore Notes
            </Link>
            <Link to="/pyq" className="btn-secondary">
              <i className="fa-solid fa-file-pdf"></i> View PYQs
            </Link>
          </div>
        </div>
      </section>

      {/* Added Intro Text for Google AdSense Crawler */}
      <section className="intro-text-section" style={{ padding: '2rem 5%', textAlign: 'center', background: '#f8fafc' }}>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#475569', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Welcome to <strong>NotesHub</strong>, the ultimate academic companion for engineering and pharmacy students. We provide well-structured unit-wise lecture notes, previous year solved question papers, and essential exam preparation resources to help you score high CGPA in your university exams.
        </p>
      </section>

      {/* Quick Access Feature Cards */}
      <section className="features-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="cards-grid">
          <div className="feature-card">
            <div className="card-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>B.Tech Notes</h3>
            <p>Organized semester-wise and unit-wise PDF notes curated for all engineering branches.</p>
            <Link to="/btech" className="card-link">Access Notes →</Link>
          </div>

          <div className="feature-card">
            <div className="card-icon alt">
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <h3>Previous Year Papers</h3>
            <p>Solved and unsolved university question papers to help you analyze exam patterns.</p>
            <Link to="/pyq" className="card-link">Download PYQs →</Link>
          </div>

          <div className="feature-card">
            <div className="card-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3>Placement Prep</h3>
            <p>Essential interview questions, coding roadmaps, and aptitude notes to crack job drives.</p>
            <Link to="/about" className="card-link">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* Explore Courses Grid */}
      <section className="courses-grid-section">
        <h2 className="section-title">Explore Study Material by Course</h2>
        <div className="courses-grid">
          <Link to="/materialcourse/BtechMaterial" className="course-card">
            <div className="course-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h3>B.Tech</h3>
            <span className="course-count">4,000+ Notes</span>
          </Link>

          <Link to="/bpharm" className="course-card">
            <div className="course-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-pills"></i>
            </div>
            <h3>B.Pharm</h3>
            <span className="course-count">2,500+ Notes</span>
          </Link>

          <Link to="/mca" className="course-card">
            <div className="course-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-database"></i>
            </div>
            <h3>MCA</h3>
            <span className="course-count">1,200+ Notes</span>
          </Link>

          <Link to="/mba" className="course-card">
            <div className="course-icon" style={{ color: '#d97706', background: '#fffbeb' }}>
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <h3>MBA</h3>
            <span className="course-count">1,800+ Notes</span>
          </Link>

          <Link to="/mtech" className="course-card">
            <div className="course-icon" style={{ color: '#475569', background: '#f1f5f9' }}>
              <i className="fa-solid fa-gears"></i>
            </div>
            <h3>M.Tech</h3>
            <span className="course-count">New Resources</span>
          </Link>

          <Link to="/mpharm" className="course-card">
            <div className="course-icon" style={{ color: '#0d9488', background: '#f0fdfa' }}>
              <i className="fa-solid fa-flask"></i>
            </div>
            <h3>M.Pharm</h3>
            <span className="course-count">New Syllabi</span>
          </Link>

          <Link to="/bca" className="course-card">
            <div className="course-icon" style={{ color: '#0284c7', background: '#e0f2fe' }}>
              <i className="fa-solid fa-code"></i>
            </div>
            <h3>BCA</h3>
            <span className="course-count">Verified Notes</span>
          </Link>

          <Link to="/bba" className="course-card">
            <div className="course-icon" style={{ color: '#dc2626', background: '#fef2f2' }}>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3>BBA</h3>
            <span className="course-count">Study Modules</span>
          </Link>
        </div>
      </section>

      {/* Everything You Need for a High CGPA (Quantum replaced with Exam Prep) */}
      <section className="cgpa-section">
        <div className="cgpa-header">
          <span className="cgpa-badge">ALL-IN-ONE STUDY SUITE</span>
          <h2>Everything You Need for a High CGPA & Stress-Free Semester</h2>
          <p>Free handwritten notes, exam prep series PDFs, solved papers, and live circulars in one verified place.</p>
        </div>
        <div className="cgpa-grid">
          <div className="cgpa-card">
            <div className="cgpa-icon" style={{ color: '#16a34a', background: '#f0fdf4' }}>
              <i className="fa-solid fa-book"></i>
            </div>
            <h4>Curated Study Notes</h4>
            <p>Handwritten & topper notes for B.Tech, B.Pharm, MCA, and MBA.</p>
          </div>

          <div className="cgpa-card">
            <div className="cgpa-icon" style={{ color: '#9333ea', background: '#faf5ff' }}>
              <i className="fa-solid fa-cube"></i>
            </div>
            <h4>Exam Prep Series PDFs</h4>
            <p>All-in-one exam preparation series for 1st to 8th semesters.</p>
          </div>

          <div className="cgpa-card">
            <div className="cgpa-icon" style={{ color: '#d97706', background: '#fffbeb' }}>
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <h4>AKTU PYQ Papers</h4>
            <p>Last 5-10 years university semester question papers.</p>
          </div>

          <div className="cgpa-card">
            <div className="cgpa-icon" style={{ color: '#dc2626', background: '#fef2f2' }}>
              <i className="fa-solid fa-bell"></i>
            </div>
            <h4>Instant Circulars</h4>
            <p>Realtime AKTU exam dates, admit cards, COP results & official notices.</p>
          </div>

          <div className="cgpa-card">
            <div className="cgpa-icon" style={{ color: '#0284c7', background: '#e0f2fe' }}>
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <h4>Internships & Jobs</h4>
            <p>Fresh graduate hiring alerts and verified tech internships.</p>
          </div>

          <div className="cgpa-card">
            <div className="cgpa-icon" style={{ color: '#ca8a04', background: '#fefce8' }}>
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <h4>Promotions & Ads</h4>
            <p>Promote your brand, app & services to 50K+ university students.</p>
          </div>
        </div>
      </section>

      {/* Additional SEO & AdSense Approval Content Section */}
      <section className="adsense-content-section" style={{ padding: '3rem 5%', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '1rem', textAlign: 'center' }}>
            Complete Guide for AKTU Students: How to Score 9+ CGPA
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
            Preparing for Dr. A.P.J. Abdul Kalam Technical University (AKTU) semester examinations requires a smart approach and access to the right study materials. At <strong>NotesHub</strong>, we bridge the gap between complex engineering syllabi and simple, easy-to-understand unit-wise notes. Whether you are pursuing B.Tech, B.Pharm, MCA, or MBA, having structured lecture notes and previous year question papers can drastically improve your exam preparation.
          </p>
          
          <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.8rem' }}>
            Why Proper Study Material Matters for Engineering Exams
          </h3>
          <ul style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Unit-Wise Breakdown:</strong> Studying according to the official 5-unit AKTU syllabus ensures no important topics are missed before the semester tests.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Previous Year Question Papers (PYQs):</strong> Analyzing past papers helps students understand recurring important questions and university marking schemes.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Handwritten & Topper Notes:</strong> Clear, concise diagrams and derivations written by top-performing students make last-minute revisions stress-free.</li>
          </ul>
        </div>
      </section>



      {/* Frequently Asked Questions */}
      <section className="faq-section">
        <span className="faq-top-label">HELP CENTER</span>
        <h2 className="faq-main-title">Frequently Asked Questions</h2>
        
        <div className="faq-container">
          <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
            <div className="faq-question">
              <h4>Are all study materials on NotesHub 100% free?</h4>
              <i className={`fa-solid fa-chevron-down ${openFaq === 1 ? 'rotate' : ''}`}></i>
            </div>
            {openFaq === 1 && (
              <div className="faq-answer">
                <p>Yes, all handwritten notes, syllabus breakdowns, and previous year solved question papers are completely free with zero subscription fees.</p>
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
            <div className="faq-question">
              <h4>Where can I find real-time AKTU circulars & notices?</h4>
              <i className={`fa-solid fa-chevron-down ${openFaq === 2 ? 'rotate' : ''}`}></i>
            </div>
            {openFaq === 2 && (
              <div className="faq-answer">
                <p>You can view live exam timetables, admit card release notifications, and COP results instantly on our dedicated <Link to="/circulars" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline' }}>AKTU Circulars & Notices</Link> page.</p>
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
            <div className="faq-question">
              <h4>Do study guides cover all 5 units for semester exams?</h4>
              <i className={`fa-solid fa-chevron-down ${openFaq === 3 ? 'rotate' : ''}`}></i>
            </div>
            {openFaq === 3 && (
              <div className="faq-answer">
                <p>Yes, our curated study booklets contain chapter-wise summaries, important 2-mark & 10-mark questions, and past 10-year recurring university solutions.</p>
              </div>
            )}
          </div>

          <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
            <div className="faq-question">
              <h4>How can I join the student community group?</h4>
              <i className={`fa-solid fa-chevron-down ${openFaq === 4 ? 'rotate' : ''}`}></i>
            </div>
            {openFaq === 4 && (
              <div className="faq-answer">
                <p>You can join over 50,000+ active engineering and pharmacy students on our official <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline' }}>Telegram Community Group</a> for instant discussion and doubt solving.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Banner Call To Action */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Boost Your Academic Performance?</h2>
          <p>Join thousands of students accessing free quality engineering material today.</p>
          <Link to="/btech" className="btn-cta">Start Reading Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
