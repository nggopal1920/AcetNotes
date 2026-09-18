import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './NotesBtechFirst.css';

const NotesBtechFirst = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const branch = searchParams.get('branch') || 'CSE';
  const subjectId = searchParams.get('subject') || '';

  // First Year Subjects Database
  const firstSubjectsData = {
    'maths-1': {
      title: 'Engineering Mathematics-I',
      code: 'BAS103',
      units: [
        { number: 1, title: 'Unit 1: Differential Calculus - I', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Differential Calculus - II', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Matrix Algebra', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Multiple Integrals', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Vector Calculus', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'physics': {
      title: 'Engineering Physics',
      code: 'BAS101',
      units: [
        { number: 1, title: 'Unit 1: Relativistic Mechanics', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Electromagnetic Field Theory', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Quantum Mechanics', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Wave Optics', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Lasers & Fiber Optics', viewUrl: '#', downloadUrl: '#' },
      ],
    },
  };

  const currentSubject = firstSubjectsData[subjectId] || {
    title: 'Subject Notes',
    code: 'BTECH101',
    units: [
      { number: 1, title: 'Unit 1: Introduction & Fundamentals', viewUrl: '#', downloadUrl: '#' },
      { number: 2, title: 'Unit 2: Core Concepts & Analysis', viewUrl: '#', downloadUrl: '#' },
      { number: 3, title: 'Unit 3: Advanced Methods', viewUrl: '#', downloadUrl: '#' },
      { number: 4, title: 'Unit 4: Applications & Problems', viewUrl: '#', downloadUrl: '#' },
      { number: 5, title: 'Unit 5: Case Studies & Summary', viewUrl: '#', downloadUrl: '#' },
    ],
  };

  return (
    <div className="first-notes-container">
      <button className="first-btn-back" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      <div className="first-notes-header">
        <div className="first-notes-breadcrumbs">1st Year / {branch} / {currentSubject.code}</div>
        <h1 className="first-notes-title">{currentSubject.title}</h1>
        <p className="first-notes-desc">Access unit-wise PDF study notes, important questions, and quick revision materials.</p>
      </div>

      <div className="first-units-list">
        {currentSubject.units.map((unit) => (
          <div key={unit.number} className="first-unit-card">
            <div className="first-unit-info">
              <span className="first-unit-tag">Unit {unit.number}</span>
              <h3 className="first-unit-title">{unit.title}</h3>
            </div>
            <div className="first-unit-actions">
              <a href={unit.viewUrl} target="_blank" rel="noopener noreferrer" className="first-btn-pdf first-view">
                <i className="fa-solid fa-eye"></i> View
              </a>
              <a href={unit.downloadUrl} download className="first-btn-pdf first-download">
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesBtechFirst;