import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './NotesBtechThird.css';

const NotesBtechThird = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const branch = searchParams.get('branch') || 'CSE';
  const subjectId = searchParams.get('subject') || 'dbms';

  // Unit-wise Data without Topics for 3rd Year CSE
  const unitsData = {
    dbms: {
      subjectTitle: "Database Management System",
      code: "BCS501",
      units: [
        {
          unitNo: 1,
          title: "Introduction & Entity Relationship Model",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Relational Data Model & SQL",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Database Design & Normalization",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Transaction Processing & Distributed Databases",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Concurrency Control Techniques",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    'web-tech': {
      subjectTitle: "Web Technology",
      code: "BCS502",
      units: [
        {
          unitNo: 1,
          title: "Introduction to Web & Core Java",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Web Page Designing (HTML, CSS & XML)",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Scripting & Networking",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Enterprise Java Beans & JDBC",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Servlets & Java Server Pages (JSP)",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    daa: {
      subjectTitle: "Design and Analysis of Algorithm",
      code: "BCS503",
      units: [
        {
          unitNo: 1,
          title: "Introduction & Sorting Algorithms",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Advanced Data Structures",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Divide and Conquer & Greedy Methods",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Dynamic Programming, Backtracking & Branch and Bound",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Selected Topics",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    'ood-cpp': {
      subjectTitle: "Object Oriented System Design with C++",
      code: "BCS054",
      units: [
        {
          unitNo: 1,
          title: "Introduction to Object Orientation & UML",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Structural, Behavioral & Architectural Modeling",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Object Oriented Analysis & Design",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "C++ Basics & Functions",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Objects, Classes, Inheritance & Polymorphism",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    dwm: {
      subjectTitle: "Data Warehousing & Data Mining",
      code: "BCS058",
      units: [
        {
          unitNo: 1,
          title: "Data Warehouse Fundamentals, Architecture & Storage",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Dimensional Modeling, Schema Design & OLAP Operations",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Data Mining Introduction & Association Rule Mining",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Classification & Prediction Techniques in Data Mining",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Cluster Analysis & Advanced Data Mining Applications",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    se: {
      subjectTitle: "Software Engineering",
      code: "BCS601",
      units: [
        {
          unitNo: 1,
          title: "Introduction to Software Engineering & Process Models",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Software Requirements Analysis & Specification (SRS)",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Software Design: Architectural & Detailed Design Concepts",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Software Testing Strategies & Quality Assurance",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Software Project Estimation, Maintenance & Risk Management",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    'compiler-design': {
      subjectTitle: "Compiler Design",
      code: "BCS602",
      units: [
        {
          unitNo: 1,
          title: "Introduction to Compilers, Phases & Lexical Analysis",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Syntax Analysis: Parsing Techniques (Top-Down & Bottom-Up)",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Syntax-Directed Translation & Intermediate Code Generation",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Run-Time Environment & Symbol Table Management",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Code Optimization & Code Generation",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    cn: {
      subjectTitle: "Computer Networks",
      code: "BCS603",
      units: [
        {
          unitNo: 1,
          title: "Introduction to Computer Networks & Physical Layer",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Data Link Layer, Framing & Error/Flow Control Protocols",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Medium Access Control (MAC) & Network Layer Routing",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Transport Layer: TCP, UDP & Congestion Control",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Application Layer Protocols & Network Security Basics",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    'data-compression': {
      subjectTitle: "Data Compression",
      code: "BCS064",
      units: [
        {
          unitNo: 1,
          title: "Introduction to Data Compression & Information Theory",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Lossless Compression: Huffman Coding & Arithmetic Coding",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Dictionary-based Compression Techniques (LZ77, LZ78, LZW)",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Lossy Compression: Scalar & Vector Quantization",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Transform Coding & Audio/Video Compression Standards",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    },
    spm: {
      subjectTitle: "Software Project Management",
      code: "DBOE068",
      units: [
        {
          unitNo: 1,
          title: "Introduction to Software Project Management & Lifecycle",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 2,
          title: "Project Evaluation, Estimation & Activity Planning",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 3,
          title: "Risk Management, Resource Allocation & Scheduling",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 4,
          title: "Project Monitoring, Control & Contract Management",
          viewUrl: "#",
          downloadUrl: "#"
        },
        {
          unitNo: 5,
          title: "Managing People, Team Dynamics & Software Quality Assurance",
          viewUrl: "#",
          downloadUrl: "#"
        }
      ]
    }
  };

  const currentSubjectData = unitsData[subjectId] || unitsData['dbms'];

  return (
    <div className="third-notes-container">
      {/* Back Navigation & Header */}
      <div className="third-notes-header">
        <button className="third-back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back to Subjects
        </button>
        <div className="third-subject-badge-area">
          <span className="third-branch-tag">{branch} Branch</span>
          <span className="third-code-tag">{currentSubjectData.code}</span>
        </div>
        <h1 className="third-main-title">{currentSubjectData.subjectTitle}</h1>
        <p className="third-subtitle">Explore unit-wise AKTU syllabus, view notes, and download PDFs instantly.</p>
      </div>

      {/* Units List Section */}
      <div className="third-units-wrapper">
        <h3 className="third-section-heading">All 5 Units Notes</h3>
        
        <div className="third-units-grid">
          {currentSubjectData.units.map((unit) => (
            <div key={unit.unitNo} className="third-unit-card">
              <div className="third-unit-header">
                <span className="third-unit-number">Unit {unit.unitNo}</span>
                <h4 className="third-unit-title">{unit.title}</h4>
              </div>

              {/* Anchor Tags for View & Download */}
              <div className="third-actions-row" style={{ marginTop: '20px' }}>
                <a 
                  href={unit.viewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="third-btn-action third-btn-view"
                >
                  <i className="fa-solid fa-eye"></i> View
                </a>

                <a 
                  href={unit.downloadUrl} 
                  download 
                  className="third-btn-action third-btn-download"
                >
                  <i className="fa-solid fa-download"></i> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesBtechThird;