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

  // 1. All B.Tech Years, Branches & Subjects Database
  const subjectsData = {
    // ---- 2ND YEAR CSE 10 CORE SUBJECTS ----
    'dsa': {
      title: 'Data Structures & Algorithms',
      code: 'BCS301',
      units: [
        { number: 1, title: 'Unit 1: Introduction, Arrays, Stacks & Queues', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Linked Lists & Recursion', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Trees & Binary Search Trees', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Graphs & Shortest Path Algorithms', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Searching, Sorting & Hashing', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'co': {
      title: 'Computer Organization & Architecture',
      code: 'BCS302',
      units: [
        { number: 1, title: 'Unit 1: Register Transfer & Microoperations', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Basic Computer Organization & Design', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Central Processing Unit & Pipeline Organization', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Computer Arithmetic & ALU Design', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Memory Organization & Input-Output Interface', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'dstl': {
      title: 'Discrete Structures & Theory of Logic',
      code: 'BCS303',
      units: [
        { number: 1, title: 'Unit 1: Set Theory, Relations & Functions', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Propositional Logic & Predicate Calculus', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Algebraic Structures & Groups', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Lattices, Posets & Boolean Algebra', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Graph Theory & Trees Applications', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'web-tech': {
      title: 'Web Technology',
      code: 'BCS304',
      units: [
        { number: 1, title: 'Unit 1: HTML5, CSS3, & Responsive Web Design', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: JavaScript Fundamentals & DOM Manipulation', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: React.js Component Lifecycle & State Management', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Node.js & Express.js Server Setup', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Database Integration & Web Security Basics', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'maths-4': {
      title: 'Engineering Mathematics-IV',
      code: 'BAS301',
      units: [
        { 
          number: 1, 
          title: 'Unit 1: Numerical Techniques - Interpolation & Integration', 
          viewUrl: 'https://drive.google.com/file/d/1UwUC7MSL6OiW7D_H8Q4IHpxmbGvVGI6r/preview', 
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1UwUC7MSL6OiW7D_H8Q4IHpxmbGvVGI6r'
        },
        { 
          number: 2, 
          title: 'Unit 2: Numerical Methods for Differential Equations', 
          viewUrl: 'https://drive.google.com/file/d/1nju7UVLXEYk2bD9ZzQ9Wqsnv1NcDoule/preview', 
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1nju7UVLXEYk2bD9ZzQ9Wqsnv1NcDoule' 
        },
        { 
          number: 3, 
          title: 'Unit 3: Statistical Techniques - Curve Fitting & Regression', 
          viewUrl: 'https://drive.google.com/file/d/1uFSIfyX2pmbnXFGIFAmSXEn21VJfMsaw/preview', 
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1uFSIfyX2pmbnXFGIFAmSXEn21VJfMsaw' 
        },
        { 
          number: 4, 
          title: 'Unit 4: Probability & Probability Distributions', 
          viewUrl: 'https://drive.google.com/file/d/1P2seK0rAtnUg7UX0q2vuS0tcEunnIYS2/preview', 
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1P2seK0rAtnUg7UX0q2vuS0tcEunnIYS2' 
        },
        { 
          number: 5, 
          title: 'Unit 5: Statistical Quality Control & Testing of Hypothesis', 
          viewUrl: 'https://drive.google.com/file/d/1P2seK0rAtnUg7UX0q2vuS0tcEunnIYS2/preview', 
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1P2seK0rAtnUg7UX0q2vuS0tcEunnIYS2' 
        },
      ],
    },
    'dbms': {
      title: 'Database Management Systems',
      code: 'BCS401',
      units: [
        { number: 1, title: 'Unit 1: ER Diagrams & Relational Model', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: SQL Queries & Relational Algebra', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Normalization (1NF, 2NF, 3NF, BCNF)', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Transaction Processing & Concurrency Control', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Storage Strategies, Indexing & B-Trees', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'ost': {
      title: 'Operating Systems',
      code: 'BCS402',
      units: [
        { number: 1, title: 'Unit 1: Introduction, Processes & Threads', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: CPU Scheduling & Process Synchronization', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Deadlocks Characterization & Prevention', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Memory Management & Virtual Memory', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: File Systems, Secondary Storage & Disk Scheduling', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'tafl': {
      title: 'Theory of Automata & Formal Languages',
      code: 'BCS403',
      units: [
        { number: 1, title: 'Unit 1: Finite Automata & Regular Expressions', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Context Free Grammars & Pushdown Automata', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Turing Machines & Computability Theory', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Undecidability & Recursively Enumerable Languages', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Chomsky Hierarchy & Complexity Classes', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'oop': {
      title: 'Object Oriented Programming using Java',
      code: 'BCS404',
      units: [
        { number: 1, title: 'Unit 1: OOPs Concepts, Java Basics & Control Statements', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Classes, Objects, Inheritance & Polymorphism', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Packages, Interfaces & Exception Handling', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Multithreading & I/O Handling in Java', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Applets, Swings & Generic Programming', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'python-prog': {
      title: 'Python Programming',
      code: 'BCS405',
      units: [
        { number: 1, title: 'Unit 1: Introduction to Python, Data Types & Operators', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Control Flow, Functions & Scope', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Data Structures (Lists, Tuples, Dictionaries, Sets)', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Object-Oriented Programming in Python', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Exception Handling, Files & GUI Programming', viewUrl: '#', downloadUrl: '#' },
      ],
    },

    // ---- 1ST YEAR (Common Subjects) ----
    'maths-1': {
      title: 'Engineering Mathematics-I',
      code: 'BAS103',
      units: [
        { number: 1, title: 'Unit 1: Differential Calculus - I', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Differential Calculus - II', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Matrices & Linear Algebra', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Multiple Integrals', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Vector Calculus', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'physics': {
      title: 'Engineering Physics',
      code: 'BAS101',
      units: [
        { number: 1, title: 'Unit 1: Quantum Mechanics', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Wave Optics & Interference', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Coherence & Lasers', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Optical Fiber Communication', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Electromagnetics & Relativistic Mechanics', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'chemistry': {
      title: 'Engineering Chemistry',
      code: 'BAS102',
      units: [
        { number: 1, title: 'Unit 1: Atomic and Molecular Structure', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Spectroscopic Techniques and Applications', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Electrochemistry & Corrosion', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Stereochemistry & Reaction Mechanism', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Polymers and Water Treatment', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'pps': {
      title: 'Programming for Problem Solving (C)',
      code: 'BCS101',
      units: [
        { number: 1, title: 'Unit 1: Introduction to Programming & C Basics', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Decision Control & Looping Statements', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Arrays, Functions & Pointers', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Strings, Structures & Unions', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: File Handling and Dynamic Memory Allocation', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'bee': {
      title: 'Basic Electrical Engineering',
      code: 'BEE101',
      units: [
        { number: 1, title: 'Unit 1: DC Circuits & Network Theorems', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: AC Circuits (Single Phase & Three Phase)', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Transformers', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: DC and AC Machines (Motors & Generators)', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Electrical Installations & Safety', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'maths-2': {
      title: 'Engineering Mathematics-II',
      code: 'BAS203',
      units: [
        { number: 1, title: 'Unit 1: Ordinary Differential Equations', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Series Solutions of ODE & Bessel/Legendre', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Complex Variable - Differentiation', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Complex Variable - Integration', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Curve Fitting & Probability Distributions', viewUrl: '#', downloadUrl: '#' },
      ],
    },

    // ---- 3RD YEAR CSE SUBJECTS ----
    'os': {
      title: 'Operating Systems',
      code: 'BCS501',
      units: [
        { number: 1, title: 'Unit 1: Overview of Operating Systems', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Process Management & Scheduling', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Concurrency & Deadlocks', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Memory & Virtual Memory Management', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: File Systems and Protection', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'daa': {
      title: 'Design & Analysis of Algorithms',
      code: 'BCS502',
      units: [
        { number: 1, title: 'Unit 1: Asymptotic Notations & Divide and Conquer', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Greedy Methods & Dynamic Programming', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Graph Traversals & Backtracking', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Branch and Bound Algorithm', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: NP-Hard and NP-Complete Problems', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'wt': {
      title: 'Web Technology',
      code: 'BCS503',
      units: [
        { number: 1, title: 'Unit 1: HTML5, CSS3, & Responsive Design', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: JavaScript Fundamentals & DOM Manipulation', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: React.js / Frontend Frameworks Basics', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Node.js & Express.js Backend Setup', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Database Integration (MongoDB/SQL) with Web Apps', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'se': {
      title: 'Software Engineering',
      code: 'BCS601',
      units: [
        { number: 1, title: 'Unit 1: Software Development Life Cycle (SDLC) Models', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Software Requirement Analysis & Specification', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Software Design & Architecture', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Software Testing Strategies & Quality Assurance', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Project Management, Estimation & Maintenance', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'cn': {
      title: 'Computer Networks',
      code: 'BCS602',
      units: [
        { number: 1, title: 'Unit 1: Introduction to OSI & TCP/IP Reference Models', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Data Link Layer & Error Control Protocols', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Medium Access Control & Routing Algorithms', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Transport Layer (TCP, UDP, Congestion Control)', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Application Layer Protocols (DNS, HTTP, FTP)', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'compiler': {
      title: 'Compiler Design',
      code: 'BCS603',
      units: [
        { number: 1, title: 'Unit 1: Lexical Analysis & Finite Automata', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Parsing Techniques (Top-Down & Bottom-Up)', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Syntax-Directed Translation & Intermediate Code', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Run-Time Environments & Symbol Table', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Code Optimization & Code Generation', viewUrl: '#', downloadUrl: '#' },
      ],
    },

    // ---- 4TH YEAR CSE SUBJECTS ----
    'cloud-computing': {
      title: 'Cloud Computing',
      code: 'BCS701',
      units: [
        { number: 1, title: 'Unit 1: Introduction to Cloud & Virtualization', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Cloud Architecture (IaaS, PaaS, SaaS)', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Cloud Infrastructure & Storage', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Security & Resource Management', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: DevOps & Cloud Case Studies (AWS/Azure)', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'ai': {
      title: 'Artificial Intelligence',
      code: 'BCS702',
      units: [
        { number: 1, title: 'Unit 1: Introduction to AI & Search Strategies', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Knowledge Representation & Logic', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Reasoning under Uncertainty & Machine Learning basics', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Natural Language Processing & Expert Systems', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Pattern Recognition & Neural Networks', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'cyber-security': {
      title: 'Cyber Security',
      code: 'BOE701',
      units: [
        { number: 1, title: 'Unit 1: Introduction to Information Security & Threats', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: Cryptography & Network Security Protocols', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: Software Vulnerabilities & Malware', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Security Auditing & Firewall Management', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Cyber Laws, Forensics & Ethics', viewUrl: '#', downloadUrl: '#' },
      ],
    },
    'big-data': {
      title: 'Big Data Analytics',
      code: 'BCS801',
      units: [
        { number: 1, title: 'Unit 1: Introduction to Big Data & Hadoop Ecosystem', viewUrl: '#', downloadUrl: '#' },
        { number: 2, title: 'Unit 2: MapReduce Programming Model', viewUrl: '#', downloadUrl: '#' },
        { number: 3, title: 'Unit 3: NoSQL Databases (MongoDB, Cassandra)', viewUrl: '#', downloadUrl: '#' },
        { number: 4, title: 'Unit 4: Apache Spark & Data Streaming', viewUrl: '#', downloadUrl: '#' },
        { number: 5, title: 'Unit 5: Data Visualization & Analytics Tools', viewUrl: '#', downloadUrl: '#' },
      ],
    }
  };

  // 2. Select Current Subject Data (Fallback for any custom subject code)
  const currentSubjectData = subjectsData[subjectId] || {
    title: subjectId ? subjectId.replace(/-/g, ' ').toUpperCase() : 'B.Tech Study Material',
    code: 'GEN-01',
    units: [
      { number: 1, title: 'Unit 1: Introduction & Fundamental Concepts', viewUrl: '#', downloadUrl: '#' },
      { number: 2, title: 'Unit 2: Core Principles & Methodology', viewUrl: '#', downloadUrl: '#' },
      { number: 3, title: 'Unit 3: Advanced Analysis & Implementation', viewUrl: '#', downloadUrl: '#' },
      { number: 4, title: 'Unit 4: System Architecture & Framework', viewUrl: '#', downloadUrl: '#' },
      { number: 5, title: 'Unit 5: Applications, Case Studies & Future Scope', viewUrl: '#', downloadUrl: '#' },
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
          Download unit-wise handwritten notes, important questions, and previous year solutions in PDF format below.
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
              {/* View Button (Opens PDF in new tab preview) */}
              <a href={unit.viewUrl} target="_blank" rel="noreferrer" className="btn-pdf view">
                <i className="fa-solid fa-eye"></i> View PDF
              </a>
              {/* Download Button (Triggers direct download) */}
              <a href={unit.downloadUrl} download className="btn-pdf download">
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
