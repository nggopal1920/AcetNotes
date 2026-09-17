import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './NotesViewPage.css';

const NotesViewPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL से Year, Branch और Subject ID लेना
  const year = searchParams.get('year') || 'B.Tech';
  const branch = searchParams.get('branch') || 'CSE';
  const subjectId = searchParams.get('subject') || '';

  // 1. हर Subject की Units का Data Store
  const subjectsData = {
    // ---- 1st Year / Common Subjects ----
    'maths-1': {
      title: 'Engineering Mathematics-I',
      code: 'BAS103',
      units: [
        { number: 1, title: 'Unit 1: Differential Calculus - I', pdfUrl: '#' },
        { number: 2, title: 'Unit 2: Differential Calculus - II', pdfUrl: '#' },
        { number: 3, title: 'Unit 3: Matrices & Linear Algebra', pdfUrl: '#' },
        { number: 4, title: 'Unit 4: Multiple Integrals', pdfUrl: '#' },
        { number: 5, title: 'Unit 5: Vector Calculus', pdfUrl: '#' },
      ],
    },
    'physics': {
      title: 'Engineering Physics',
      code: 'BAS101',
      units: [
        { number: 1, title: 'Unit 1: Quantum Mechanics', pdfUrl: '#' },
        { number: 2, title: 'Unit 2: Wave Optics & Interference', pdfUrl: '#' },
        { number: 3, title: 'Unit 3: Coherence & Lasers', pdfUrl: '#' },
        { number: 4, title: 'Unit 4: Optical Fiber Communication', pdfUrl: '#' },
        { number: 5, title: 'Unit 5: Electromagnetics & Relativistic Mechanics', pdfUrl: '#' },
      ],
    },

    // ---- 2nd Year CSE/IT Subjects ----
    'dsa': {
      title: 'Data Structures & Algorithms',
      code: 'BCS301',
      units: [
        { number: 1, title: 'Unit 1: Arrays, Stacks & Queues', pdfUrl: '#' },
        { number: 2, title: 'Unit 2: Linked Lists & Recursion', pdfUrl: '#' },
        { number: 3, title: 'Unit 3: Trees & Binary Search Trees', pdfUrl: '#' },
        { number: 4, title: 'Unit 4: Graphs & Shortest Path Algorithms', pdfUrl: '#' },
        { number: 5, title: 'Unit 5: Searching, Sorting & Hashing', pdfUrl: '#' },
      ],
    },
    'dbms': {
      title: 'Database Management Systems',
      code: 'BCS401',
      units: [
        { number: 1, title: 'Unit 1: ER Diagrams & Relational Model', pdfUrl: '#' },
        { number: 2, title: 'Unit 2: SQL & Relational Algebra', pdfUrl: '#' },
        { number: 3, title: 'Unit 3: Normalization (1NF to BCNF)', pdfUrl: '#' },
        { number: 4, title: 'Unit 4: Transaction Processing & Concurrency', pdfUrl: '#' },
        { number: 5, title: 'Unit 5: Indexing, B-Trees & Crash Recovery', pdfUrl: '#' },
      ],
    },

    // ---- 3rd Year Subjects ----
    'os': {
      title: 'Operating Systems',
      code: 'BCS501',
      units: [
        { number: 1, title: 'Unit 1: Processes & Threads Management', pdfUrl: '#' },
        { number: 2, title: 'Unit 2: CPU Scheduling & Synchronization', pdfUrl: '#' },
        { number: 3, title: 'Unit 3: Deadlocks & Memory Management', pdfUrl: '#' },
        { number: 4, title: 'Unit 4: Virtual Memory & Page Replacement', pdfUrl: '#' },
        { number: 5, title: 'Unit 5: File Systems & Disk Management', pdfUrl: '#' },
      ],
    },

    // ---- 4th Year Subjects ----
    'cloud-computing': {
      title: 'Cloud Computing',
      code: 'BCS701',
      units: [
        { number: 1, title: 'Unit 1: Introduction to Cloud & Virtualization', pdfUrl: '#' },
        { number: 2, title: 'Unit 2: Cloud Architecture (IaaS, PaaS, SaaS)', pdfUrl: '#' },
        { number: 3, title: 'Unit 3: Cloud Infrastructure & Storage', pdfUrl: '#' },
        { number: 4, title: 'Unit 4: Security & Resource Management', pdfUrl: '#' },
        { number: 5, title: 'Unit 5: DevOps & Cloud Case Studies (AWS/Azure)', pdfUrl: '#' },
      ],
    },
  };

  // 2. Select Current Subject Data (Fallback for safety)
  const currentSubjectData = subjectsData[subjectId] || {
    title: subjectId ? subjectId.replace('-', ' ').toUpperCase() : 'Subject',
    code: 'GEN-01',
    units: [
      { number: 1, title: 'Unit 1: Introduction & Fundamentals', pdfUrl: '#' },
      { number: 2, title: 'Unit 2: Core Concepts & Principles', pdfUrl: '#' },
      { number: 3, title: 'Unit 3: Advanced Topics & Analysis', pdfUrl: '#' },
      { number: 4, title: 'Unit 4: System Implementation', pdfUrl: '#' },
      { number: 5, title: 'Unit 5: Applications & Case Studies', pdfUrl: '#' },
    ],
  };

  return (
    <div className="notes-container">
      {/* Back Button */}
      <button className="btn-back" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      {/* Subject Header */}
      <div className="notes-header">
        <div className="notes-breadcrumbs">
          <span>{year.toUpperCase()}</span> • <span>{branch}</span> • <span>{currentSubjectData.code}</span>
        </div>
        <h1 className="notes-title">{currentSubjectData.title}</h1>
        <p className="notes-desc">
          Download handwritten unit-wise notes and study materials in PDF format below.
        </p>
      </div>

      {/* Dynamic Units List */}
      <div className="units-list">
        {currentSubjectData.units.map((unit) => (
          <div key={unit.number} className="unit-card">
            <div className="unit-info">
              <span className="unit-tag">Unit {unit.number}</span>
              <h3 className="unit-title">{unit.title}</h3>
            </div>

            <div className="unit-actions">
              <a href={unit.pdfUrl} target="_blank" rel="noreferrer" className="btn-pdf view">
                <i className="fa-solid fa-eye"></i> View PDF
              </a>
              <a href={unit.pdfUrl} download className="btn-pdf download">
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesViewPage;