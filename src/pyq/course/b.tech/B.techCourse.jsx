import React from 'react';
import { useNavigate } from 'react-router-dom';
import './B.techCourse.css';

const BtechCourse = () => {
  const navigate = useNavigate();

  // Courses list jisme B.Tech sabse upar aur BCA second number par hai
  const coursesList = [
    {
      id: 'btech',
      name: 'B.Tech (Bachelor of Technology)',
      code: 'B.Tech',
      description: 'Engineering courses across all branches (CSE, IT, ECE, ME, Civil, etc.)',
      icon: 'fa-solid fa-graduation-cap',
      isAvailable: true,
      path: '/pyq/course/b.tech/year' // B.Tech click hone par year page par jayega
    },
    {
      id: 'bca',
      name: 'BCA (Bachelor of Computer Applications)',
      code: 'BCA',
      description: 'Computer applications, software development, and programming fundamentals.',
      icon: 'fa-solid fa-code',
      isAvailable: false, // Abhi ke liye coming soon ya baad ke liye
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
    if (course.id === 'btech') {
      navigate(course.path);
    } else {
      alert('Coming soon! Currently only B.Tech PYQs are available.');
    }
  };

  return (
    <div className="btech-course-container">
      {/* Header Section */}
      <div className="course-header">
        <button className="course-back-btn" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </button>
        <span className="course-badge">PYQ Portal</span>
        <h1 className="course-main-title">Select Your Course</h1>
        <p className="course-subtitle">Choose your academic degree to explore previous year question papers and syllabus.</p>
      </div>

      {/* Courses Grid */}
      <div className="course-cards-grid">
        {coursesList.map((course) => (
          <div 
            key={course.id} 
            className={`course-card ${course.id === 'btech' ? 'active-course' : 'disabled-course'}`}
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
                {course.id === 'btech' ? 'Explore PYQs →' : 'Coming Soon'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BtechCourse;