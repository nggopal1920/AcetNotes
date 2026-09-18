import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './NotesBtechThird.css';

const NotesBtechThird = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const branch = searchParams.get('branch') || 'CSE';
  const subjectId = searchParams.get('subject') || 'dbms';

  // Unit-wise Data with Safe Google Drive Links
  const unitsData = {
    dbms: {
      subjectTitle: "Database Management System",
      code: "BCS501",
      units: [
        {
          unitNo: 1,
          title: "Introduction & Entity Relationship Model",
          fileUrl: "https://drive.google.com/file/d/1kvR0JEZ0E7JVE7eGQvfKiT7FToW4WniR/view?usp=drive_link"
        },
        {
          unitNo: 2,
          title: "Relational Data Model & SQL",
          fileUrl: "https://drive.google.com/file/d/1VIlQz4BaTEm9J1AISG8PmmHu3t439Z_g/view?usp=drive_link"
        },
        {
          unitNo: 3,
          title: "Database Design & Normalization",
          fileUrl: "https://drive.google.com/file/d/15YO5bXztI2N67dWwfDb_oEHlEPqBk2ri/view?usp=drive_link"
        },
        {
          unitNo: 4,
          title: "Transaction Processing & Distributed Databases",
          fileUrl: "https://drive.google.com/file/d/1MCgfHwVVAW53vgachC5S916ZBDSST_LX/view?usp=drive_link"
        },
        {
          unitNo: 5,
          title: "Concurrency Control Techniques",
          fileUrl: "https://drive.google.com/file/d/1c7RTF9_dJdyq76FmDOwA1Vud8PPpzMB6/view?usp=drive_link"
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
          fileUrl: "https://drive.google.com/file/d/1I03lN6LmlmEpIPnKzzijhEhiZKRpxLT0/view?usp=drive_link"
        },
        {
          unitNo: 2,
          title: "Web Page Designing (HTML, CSS & XML)",
          fileUrl: "https://drive.google.com/file/d/1T9ELPHT4Vpa8vrwYt622Eg4j193vO9Ej/view?usp=drive_link"
        },
        {
          unitNo: 3,
          title: "Scripting & Networking",
          fileUrl: "https://drive.google.com/file/d/11yYUKKAta4c2oCYRDu2Ycq0f5ICyeZ8u/view?usp=drive_link"
        },
        {
          unitNo: 4,
          title: "Enterprise Java Beans & JDBC",
          fileUrl: "https://drive.google.com/file/d/1fanXDkuPPwFwK5vsRnJy3yaV-giEMbwZ/view?usp=drive_link"
        },
        {
          unitNo: 5,
          title: "Servlets & Java Server Pages (JSP)",
          fileUrl: "https://drive.google.com/file/d/18exKe67_whJNatmErJwh2i1SJp_aSaNe/view?usp=drive_link"
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
          fileUrl: "https://drive.google.com/file/d/1Y3yqraYrmgPFIPJf20gfMhu63n5DtZ2S/view?usp=drive_link"
        },
        {
          unitNo: 2,
          title: "Advanced Data Structures",
          fileUrl: "https://drive.google.com/file/d/1ZagIDsxqjHt5IEnjNQUwAbbxcj1TyfmR/view?usp=drive_link"
        },
        {
          unitNo: 3,
          title: "Divide and Conquer & Greedy Methods",
          fileUrl: "https://drive.google.com/file/d/1FinDj6Q68RY1o8bkUF0i0h8u7wKpZO7N/view?usp=drive_link"
        },
        {
          unitNo: 4,
          title: "Dynamic Programming, Backtracking & Branch and Bound",
          fileUrl: "https://drive.google.com/file/d/1PDMBhPkTLfASLjxw7DDeh3VrPjUjxkxz/view?usp=drive_link"
        },
        {
          unitNo: 5,
          title: "Selected Topics",
          fileUrl: "https://drive.google.com/file/d/1hU7i_KDQ82Qn9JD-MhUCQ-4BCUheTEwW/view?usp=drive_link"
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
          fileUrl: "https://drive.google.com/file/d/1E-Ne91IueHqSt8fJ81wWEjXyHMPA0w3V/view?usp=drive_link"
        },
        {
          unitNo: 2,
          title: "Structural, Behavioral & Architectural Modeling",
          fileUrl: "https://drive.google.com/file/d/1sGl0CX52DtpkcW3UCk5dzJyWvDliZXSB/view?usp=drive_link"
        },
        {
          unitNo: 3,
          title: "Object Oriented Analysis & Design",
          fileUrl: "https://drive.google.com/file/d/1FpAJBATT7u3Z7xf4XyhEjMgiVQ4KvhC_/view?usp=drive_link"
        },
        {
          unitNo: 4,
          title: "C++ Basics & Functions",
          fileUrl: "https://drive.google.com/file/d/1tHs05BlR-9HG4CRO9fIemWt6_TvBrffv/view?usp=drive_link"
        },
        {
          unitNo: 5,
          title: "Objects, Classes, Inheritance & Polymorphism",
          fileUrl: "https://drive.google.com/file/d/11sxxp2ml27mGMeA_OwtxedHK_RC_B7sa/view?usp=drive_link"
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
          fileUrl: "https://drive.google.com/file/d/16J1IqxaHLel5y-nLmEPwZbNTAp5GXGMI/view?usp=drive_link"
        },
        {
          unitNo: 2,
          title: "Dimensional Modeling, Schema Design & OLAP Operations",
          fileUrl: "https://drive.google.com/file/d/19kWtLMJJxsZt9_K-HyAQ89ZSxe3TwKX3/view?usp=drive_link"
        },
        {
          unitNo: 3,
          title: "Data Mining Introduction & Association Rule Mining",
          fileUrl: "https://drive.google.com/file/d/1a8y0A3csQ7Q9bb3xrwxwk0al_RjVPkAr/view?usp=drive_link"
        },
        {
          unitNo: 4,
          title: "Classification & Prediction Techniques in Data Mining",
          fileUrl: "https://drive.google.com/file/d/1gqvC1PUYOxfzIWez3jwayFAlBie7BFtM/view?usp=drive_link"
        },
        {
          unitNo: 5,
          title: "Cluster Analysis & Advanced Data Mining Applications",
          fileUrl: "https://drive.google.com/file/d/1cpjgxIS_jYg-cx6RRA544j64mPSWZMk6/view?usp=drive_link"
        }
      ]
    },
    se: {
      subjectTitle: "Software Engineering",
      code: "BCS601",
      units: [
        { unitNo: 1, title: "Introduction to Software Engineering & Process Models", fileUrl: "#" },
        { unitNo: 2, title: "Software Requirements Analysis & Specification (SRS)", fileUrl: "#" },
        { unitNo: 3, title: "Software Design: Architectural & Detailed Design Concepts", fileUrl: "#" },
        { unitNo: 4, title: "Software Testing Strategies & Quality Assurance", fileUrl: "#" },
        { unitNo: 5, title: "Software Project Estimation, Maintenance & Risk Management", fileUrl: "#" }
      ]
    },
    'compiler-design': {
      subjectTitle: "Compiler Design",
      code: "BCS602",
      units: [
        { unitNo: 1, title: "Introduction to Compilers, Phases & Lexical Analysis", fileUrl: "#" },
        { unitNo: 2, title: "Syntax Analysis: Parsing Techniques (Top-Down & Bottom-Up)", fileUrl: "#" },
        { unitNo: 3, title: "Syntax-Directed Translation & Intermediate Code Generation", fileUrl: "#" },
        { unitNo: 4, title: "Run-Time Environment & Symbol Table Management", fileUrl: "#" },
        { unitNo: 5, title: "Code Optimization & Code Generation", fileUrl: "#" }
      ]
    },
    cn: {
      subjectTitle: "Computer Networks",
      code: "BCS603",
      units: [
        { unitNo: 1, title: "Introduction to Computer Networks & Physical Layer", fileUrl: "#" },
        { unitNo: 2, title: "Data Link Layer, Framing & Error/Flow Control Protocols", fileUrl: "#" },
        { unitNo: 3, title: "Medium Access Control (MAC) & Network Layer Routing", fileUrl: "#" },
        { unitNo: 4, title: "Transport Layer: TCP, UDP & Congestion Control", fileUrl: "#" },
        { unitNo: 5, title: "Application Layer Protocols & Network Security Basics", fileUrl: "#" }
      ]
    },
    'data-compression': {
      subjectTitle: "Data Compression",
      code: "BCS064",
      units: [
        { unitNo: 1, title: "Introduction to Data Compression & Information Theory", fileUrl: "#" },
        { unitNo: 2, title: "Lossless Compression: Huffman Coding & Arithmetic Coding", fileUrl: "#" },
        { unitNo: 3, title: "Dictionary-based Compression Techniques (LZ77, LZ78, LZW)", fileUrl: "#" },
        { unitNo: 4, title: "Lossy Compression: Scalar & Vector Quantization", fileUrl: "#" },
        { unitNo: 5, title: "Transform Coding & Audio/Video Compression Standards", fileUrl: "#" }
      ]
    },
    spm: {
      subjectTitle: "Software Project Management",
      code: "DBOE068",
      units: [
        { unitNo: 1, title: "Introduction to Software Project Management & Lifecycle", fileUrl: "#" },
        { unitNo: 2, title: "Project Evaluation, Estimation & Activity Planning", fileUrl: "#" },
        { unitNo: 3, title: "Risk Management, Resource Allocation & Scheduling", fileUrl: "#" },
        { unitNo: 4, title: "Project Monitoring, Control & Contract Management", fileUrl: "#" },
        { unitNo: 5, title: "Managing People, Team Dynamics & Software Quality Assurance", fileUrl: "#" }
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

              {/* Anchor Tags for View & Download using safe Drive link */}
              <div className="third-actions-row" style={{ marginTop: '20px' }}>
                <a 
                  href={unit.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="third-btn-action third-btn-view"
                >
                  <i className="fa-solid fa-eye"></i> View
                </a>

                <a 
                  href={unit.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
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
