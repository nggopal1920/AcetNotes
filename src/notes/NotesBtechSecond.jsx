import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './NotesBtechSecond.css';

const NotesBtechSecond = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const branch = searchParams.get('branch') || 'CSE';
  const subjectId = searchParams.get('subject') || '';

  const secondSubjectsData = {
    'maths-4': {
      title: 'Engineering Mathematics-IV',
      code: 'BAS301',
      units: [
        { number: 1, title: 'Unit 1: Partial Differential Equations', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Application of PDE & Complex Analysis', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Statistical Techniques', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Numerical Techniques - I', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Numerical Techniques - II', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'dsa': {
      title: 'Data Structures & Algorithms',
      code: 'BCS301',
      units: [
        { number: 1, title: 'Unit 1: Introduction to Data Structures', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Stacks, Queues & Recursion', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Linked Lists & Trees', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Graphs & Traversals', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Sorting & Searching Algorithms', viewUrl: '#', downloadUrl: '#' },
      ],
    },
  };

  const currentSubject = secondSubjectsData[subjectId] || {
    title: '2nd Year Core Subject',
    code: 'BCS30X',
    units: [
      { number: 1, title: 'Unit 1: Core Fundamentals', viewUrl: '#', downloadUrl: '#' },
      { number: 2, title: 'Unit 2: Structural Implementation', viewUrl: '#', downloadUrl: '#' },
      { number: 3, title: 'Unit 3: Advanced Concepts', viewUrl: '#', downloadUrl: '#' },
      { number: 4, title: 'Unit 4: System Architecture', viewUrl: '#', downloadUrl: '#' },
      { number: 5, title: 'Unit 5: Applications & Case Studies', viewUrl: '#', downloadUrl: '#' },
    ],
  };

  return (
    <div className="second-notes-container">
      <button className="second-btn-back" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      <div className="second-notes-header">
        <div className="second-notes-breadcrumbs">2nd Year / {branch} / {currentSubject.code}</div>
        <h1 className="second-notes-title">{currentSubject.title}</h1>
        <p className="second-notes-desc">Explore comprehensive 2nd-year notes curated for semester exams and placements.</p>
      </div>

      <div className="second-units-list">
        {currentSubject.units.map((unit) => (
          <div key={unit.number} className="second-unit-card">
            <div className="second-unit-info">
              <span className="second-unit-tag">Unit {unit.number}</span>
              <h3 className="second-unit-title">{unit.title}</h3>
            </div>
            <div className="second-unit-actions">
              <a href={unit.viewUrl} target="_blank" rel="noopener noreferrer" className="second-btn-pdf second-view">
                <i className="fa-solid fa-eye"></i> View
              </a>
              <a href={unit.downloadUrl} download className="second-btn-pdf second-download">
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesBtechSecond;