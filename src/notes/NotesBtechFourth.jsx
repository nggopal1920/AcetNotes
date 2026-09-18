import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './NotesBtechFourth.css';

const NotesBtechFourth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const branch = searchParams.get('branch') || 'CSE';
  const subjectId = searchParams.get('subject') || '';

  const fourthSubjectsData = {
    'cloud-computing': {
      title: 'Cloud Computing',
      code: 'BCS701',
      units: [
        { number: 1, title: 'Unit 1: Cloud Architecture & Models (IaaS, PaaS, SaaS)', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Virtualization & Data Center Technology', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Cloud Security & Trust Management', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Cloud Platforms (AWS, Azure, GCP)', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Fog Computing & Emerging Trends', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'ai-ml': {
      title: 'Artificial Intelligence & Machine Learning',
      code: 'BCS702',
      units: [
        { number: 1, title: 'Unit 1: Introduction to AI & Search Strategies', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Knowledge Representation & Logic', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Supervised & Unsupervised Learning', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Neural Networks & Deep Learning Basics', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Natural Language Processing & Applications', viewUrl: '#', downloadUrl: '#' },
      ],
    },
  };

  const currentSubject = fourthSubjectsData[subjectId] || {
    title: 'Final Year Elective Subject',
    code: 'BCS70X',
    units: [
      { number: 1, title: 'Unit 1: Industry Overview & Fundamentals', viewUrl: '#', downloadUrl: '#' },
      { number: 2, title: 'Unit 2: Advanced Design & Architecture', viewUrl: '#', downloadUrl: '#' },
      { number: 3, title: 'Unit 3: Integration & Implementation', viewUrl: '#', downloadUrl: '#' },
      { number: 4, title: 'Unit 4: Security, Scale & Performance', viewUrl: '#', downloadUrl: '#' },
      { number: 5, title: 'Unit 5: Project Work & Case Studies', viewUrl: '#', downloadUrl: '#' },
    ],
  };

  return (
    <div className="fourth-notes-container">
      <button className="fourth-btn-back" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      <div className="fourth-notes-header">
        <div className="fourth-notes-breadcrumbs">4th Year / {branch} / {currentSubject.code}</div>
        <h1 className="fourth-notes-title">{currentSubject.title}</h1>
        <p className="fourth-notes-desc">Final year specialization notes, placement guides, and project resources.</p>
      </div>

      <div className="fourth-units-list">
        {currentSubject.units.map((unit) => (
          <div key={unit.number} className="fourth-unit-card">
            <div className="fourth-unit-info">
              <span className="fourth-unit-tag">Unit {unit.number}</span>
              <h3 className="fourth-unit-title">{unit.title}</h3>
            </div>
            <div className="fourth-unit-actions">
              <a href={unit.viewUrl} target="_blank" rel="noopener noreferrer" className="fourth-btn-pdf fourth-view">
                <i className="fa-solid fa-eye"></i> View
              </a>
              <a href={unit.downloadUrl} download className="fourth-btn-pdf fourth-download">
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesBtechFourth;