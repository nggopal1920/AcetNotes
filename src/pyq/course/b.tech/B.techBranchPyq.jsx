import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './B.techBranchPyq.css';

const BtechBranchPyq = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course') || 'btech';
  const year = searchParams.get('year') || '3';

  // Default selected branch 'cse' rakha hai taaki page khulte hi subjects dikhein
  const [selectedBranch, setSelectedBranch] = useState('cse');

  // Branches list for pills
  const branchesData = [
    { id: 'cse', name: 'CSE', fullName: 'Computer Science and Engineering', icon: 'fa-solid fa-laptop-code' },
    { id: 'it', name: 'IT', fullName: 'Information Technology', icon: 'fa-solid fa-network-wired' },
    { id: 'ece', name: 'ECE', fullName: 'Electronics and Communication Engineering', icon: 'fa-solid fa-microchip' },
    { id: 'ee', name: 'EE', fullName: 'Electrical Engineering', icon: 'fa-solid fa-bolt' },
    { id: 'me', name: 'ME', fullName: 'Mechanical Engineering', icon: 'fa-solid fa-gears' },
    { id: 'ce', name: 'CE', fullName: 'Civil Engineering', icon: 'fa-solid fa-building' }
  ];

  // All 10 subjects data for Year 3 CSE and others
  const subjectsData = {
    cse: {
      '3': [
        { id: 'dbms', name: 'Database Management System', code: 'BCS501' },
        { id: 'web-tech', name: 'Web Technology', code: 'BCS502' },
        { id: 'daa', name: 'Design and Analysis of Algorithm', code: 'BCS503' },
        { id: 'ood-cpp', name: 'Object Oriented System Design with C++', code: 'BCS054' },
        { id: 'dwm', name: 'Data Warehousing & Data Mining', code: 'BCS058' },
        { id: 'se', name: 'Software Engineering', code: 'BCS601' },
        { id: 'compiler-design', name: 'Compiler Design', code: 'BCS602' },
        { id: 'cn', name: 'Computer Networks', code: 'BCS603' },
        { id: 'data-compression', name: 'Data Compression', code: 'BCS064' },
        { id: 'spm', name: 'Software Project Management', code: 'DBOE068' }
      ]
    },
    it: {
      '3': [
        { id: 'it-dbms', name: 'Database Management System', code: 'BIT501' },
        { id: 'os', name: 'Operating Systems', code: 'BIT502' }
      ]
    }
  };

  const handleSubjectClick = (subjectId) => {
    navigate(`/pyq/course/b.tech/pyq-years?course=${course}&year=${year}&branch=${selectedBranch}&subject=${subjectId}`);
  };

  const currentSubjects = selectedBranch ? (subjectsData[selectedBranch]?.[year] || []) : [];

  return (
    <div className="third-notes-container" style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Top Header Banner */}
      <div className="third-notes-header" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center', marginBottom: '25px', border: '1px solid #eaeaea' }}>
        <button className="third-back-btn" onClick={() => navigate(-1)} style={{ float: 'left', background: '#f1f5f9', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
          <i className="fa-solid fa-arrow-left"></i> Back to Years
        </button>
        <div style={{ clear: 'both' }}></div>
        
        <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', display: 'inline-block', marginBottom: '10px' }}>
          Third Year B.Tech
        </span>
        <h1 style={{ fontSize: '28px', color: '#0f172a', fontWeight: '800', marginBottom: '8px' }}>
          3rd Year PYQs & Core Subjects
        </h1>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          Select your engineering branch to view core subjects and access previous year question papers.
        </p>
      </div>

      {/* Branch Selector Pill Buttons Box */}
      <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center', marginBottom: '30px', border: '1px solid #eaeaea' }}>
        <h3 style={{ fontSize: '15px', color: '#334155', fontWeight: '700', marginBottom: '15px' }}>Select Your Branch</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {branchesData.map((branch) => {
            const isSelected = selectedBranch === branch.id;
            return (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(branch.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: isSelected ? '1px solid #2563eb' : '1px solid #cbd5e1',
                  background: isSelected ? '#2563eb' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#475569',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.2)' : 'none'
                }}
              >
                <i className={branch.icon}></i> {branch.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subjects List Section */}
      {selectedBranch && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', padding: '0 5px' }}>
            <h2 style={{ fontSize: '20px', color: '#1e293b', fontWeight: '700' }}>
              Subjects for <span style={{ color: '#2563eb' }}>{selectedBranch.toUpperCase()}</span>
            </h2>
            <span style={{ background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
              {currentSubjects.length} Available
            </span>
          </div>

          {currentSubjects.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentSubjects.map((sub) => (
                <div 
                  key={sub.id}
                  onClick={() => handleSubjectClick(sub.id)}
                  style={{
                    background: '#ffffff',
                    padding: '18px 22px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                  }}
                >
                  <div>
                    <span style={{ color: '#1e3a8a', background: '#eff6ff', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '700' }}>
                      {sub.code}
                    </span>
                    <h4 style={{ fontSize: '16px', color: '#1e293b', fontWeight: '700', marginTop: '6px' }}>
                      {sub.name}
                    </h4>
                  </div>

                  <button 
                    style={{
                      background: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    View PYQs <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px' }}></i>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ background: '#fff', padding: '30px', textAlign: 'center', borderRadius: '10px', color: '#64748b', border: '1px solid #e2e8f0' }}>
              <p>Subjects for this branch will be updated soon!</p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default BtechBranchPyq;