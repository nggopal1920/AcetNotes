import React from 'react';
import { useNavigate } from 'react-router-dom';
import './B.techCourse.css';

const BtechCourse = () => {
  const navigate = useNavigate();

  const coursesList = [
    {
      id: 'btech',
      name: 'B.Tech (Bachelor of Technology)',
      code: 'B.Tech',
      description: 'Engineering courses across all branches (CSE, IT, ECE, ME, Civil, etc.)',
      icon: 'fa-solid fa-graduation-cap',
      isAvailable: true,
      path: '/pyq/course/b.tech/year'
    },
    {
      id: 'bca',
      name: 'BCA (Bachelor of Computer Applications)',
      code: 'BCA',
      description: 'Computer applications, software development, and programming fundamentals.',
      icon: 'fa-solid fa-code',
      isAvailable: false,
      path: '#'
    },
    {
      id: 'mca',
      name: 'MCA (Master of Computer Applications)',
      code: 'MCA',
      description: 'Advanced software development and computer applications.',
      icon: 'fa-solid fa-laptop',
      isAvailable: false,
      path: '#'
    },
    {
      id: 'bba',
      name: 'BBA (Bachelor of Business Administration)',
      code: 'BBA',
      description: 'Business management, marketing, and corporate administration basics.',
      icon: 'fa-solid fa-briefcase',
      isAvailable: false,
      path: '#'
    },
    {
      id: 'mba',
      name: 'MBA (Master of Business Administration)',
      code: 'MBA',
      description: 'Advanced business leadership, finance, and strategic management.',
      icon: 'fa-solid fa-chart-line',
      isAvailable: false,
      path: '#'
    },
    {
      id: 'bpharma',
      name: 'B.Pharma (Bachelor of Pharmacy)',
      code: 'B.Pharma',
      description: 'Pharmaceutical sciences, drug formulations, and medicinal chemistry.',
      icon: 'fa-solid fa-pills',
      isAvailable: false,
      path: '#'
    }
  ];

  const handleCourseClick = (course) => {
    if (course.isAvailable) {
      navigate(course.path);
    } else {
      alert('Coming soon! Currently only B.Tech PYQs are available.');
    }
  };

  return (
    <div className="btech-course-container">
      <div className="course-header">
        <button className="course-back-btn" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </button>
        <span className="course-badge">AKTU PYQ Portal & Resource Hub</span>
        <h1 className="course-main-title">Select Your Academic Course</h1>
        <p className="course-subtitle">
          Access comprehensive previous year question papers (PYQs), semester syllabus, and structured exam preparation modules tailored for Dr. A.P.J. Abdul Kalam Technical University students.
        </p>
      </div>

      <div className="course-cards-grid">
        {coursesList.map((course) => (
          <div 
            key={course.id} 
            className={`course-card ${course.isAvailable ? 'active-course' : 'disabled-course'}`}
            onClick={() => handleCourseClick(course)}
          >
            <div className="course-top-row">
              <div className="course-icon-wrap">
                <i className={course.icon}></i>
              </div>
              <span className="course-code-tag">{course.code}</span>
            </div>
            
            <div className="course-info">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </div>

            <div className="course-footer-row">
              <span className="explore-text">
                {course.isAvailable ? 'Explore PYQs →' : 'Coming Soon'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pyq-intro-banner">
        <h2>Why Practice with Previous Year Question Papers?</h2>
        <p>
          Mastering university examinations requires a strategic approach. Analyzing past question papers helps engineering and professional students understand recurring exam patterns, crucial unit weightage, and the standard of questions asked in semester exams. AktuNotes provides verified, high-resolution PDF papers to streamline your last-minute preparation and boost your SGPA.
        </p>
      </div>

      <div className="pyq-bottom-seo-section">
        <div className="pyq-seo-box">
          <h3><i className="fa-solid fa-circle-check"></i> Verified University Standards</h3>
          <p>All question papers are curated following the latest official AKTU curriculum and guidelines to ensure absolute accuracy.</p>
        </div>
        <div className="pyq-seo-box">
          <h3><i className="fa-solid fa-bolt"></i> Instant High-Speed Downloads</h3>
          <p>Optimized PDF archives ensure lightning-fast access without annoying redirects or heavy data usage for students.</p>
        </div>
        <div className="pyq-seo-box">
          <h3><i className="fa-solid fa-users-gear"></i> Built By Engineers & Alumni</h3>
          <p>Created by senior technical graduates who understand the exact scoring methodologies required for university success.</p>
        </div>
      </div>
    </div>
  );
};

export default BtechCourse;