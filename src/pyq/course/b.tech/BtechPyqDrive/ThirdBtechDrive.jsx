import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ThirdBtechDrive.css';

const ThirdBtechDrive = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // URL se query parameters (branch aur subject) nikalna
  const searchParams = new URLSearchParams(location.search);
  const branchKey = searchParams.get('branch') || 'cse';
  const subjectSlug = searchParams.get('subject') || 'dbms';

  // 3rd Year ke sabhi branches aur unke subjects ke Google Drive links ka data
  const thirdYearDriveData = {
    cse: {
      name: 'Computer Science & Engineering (CSE)',
      code: 'KCS',
      subjects: {
        'dbms': {
          name: 'Database Management Systems',
          code: 'BCS501',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1nB7OLxpJFH_v5Pg5Dym58S1jBb2RHorv/view?usp=drive_link' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/18PNdLGhfCrYK6mJeToht8VMfK7oYMY26/view?usp=drive_link' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1wMe3b70c46Xtj-WBvxRuEc2IdzI11-KM/view?usp=drive_link' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1RN75T0jeFZskp8APgj-GyHHBTUYcKk4k/view?usp=drive_link' },
            { year: '2020-21', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1U4_RvJIbnYiVpdF2jKqk5VxqCCx2uOan/view?usp=drive_link' },
          ]
        },
        'web-tech': {
          name: 'Web Technology',
          code: 'BCS502',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1hrop171iOwRa3lUwfpcgmQ46C8P-tKmt/view?usp=drive_link' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: '#' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1M4sikZlAsA3f5XLrEgz_YJ3JKjlEM1Ou/view?usp=drive_link' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1B-oAbBvsPIIBNeJpiBigyKl8msXJ4n72/view?usp=drive_link' },
            { year: '2020-21', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1EnOascbhC_MH0OoJGMfIPJ_H-IDHDFoy/view?usp=drive_link' },
          ]
        },
        'daa': {
          name: 'Design and Analysis of Algorithm',
          code: 'BCS503',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1SBCpU6nDZ0xGFfLeOcwjcjgwO_EFdoE8/view?usp=drive_link' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1Dd7GSFTl6__onwvQJWiIAXlKLSehojet/view?usp=drive_link' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1TkZjRWWt2W1mnvwEezFjZZFJdFkb0nOU/view?usp=drive_link' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/19RzdBjL7Sm7LlhzGtyDCzkL71A-YlqGQ/view?usp=drive_link' },
            { year: '2020-21', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1GSqKmBYSLv7KzKXi1uvGXFiOSd7hBez-/view?usp=drive_link' },
          ]
        },
        'ood-cpp': {
          name: 'Object Oriented System Design with C++',
          code: 'BCS054',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1lmbQi8K_8-um1I4P21KMfnYcqdwyfGbK/view?usp=drive_link' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1d-8yYEm6z1qnddXZRTXGmuGfe9o0ag1P/view?usp=drive_link' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: '#' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1fkHAePRDDQpjnxBgP1QkRT2Rq2foUBwh/view?usp=drive_link' },
            { year: '2020-21', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/13J8mbJN8ENMkshSN5wC9n8cf0p5g4oTJ/view?usp=drive_link' },
          ]
        },
        'constitution-india': {
          name: 'Constitution of India',
          code: 'BCS055',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1GBqaEUZvXqJyOsnq7pUvnfROMvJuGbHz/view?usp=drive_link' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1oybf3bZTde5WbSU78mhjMOXYTAmASFhq/view?usp=drive_link' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1WrPSyFjbEW_0kQnJEBDdxxXfpM0-57ao/view?usp=drive_link' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1e_TRS8F2LoeAakDe7bd7s8pPR6aP_JCO/view?usp=drive_link' },
            { year: '2020-21', semester: 'Even/Odd Sem', driveLink: 'https://drive.google.com/file/d/1R4_kK6qExYxhQCUVvTXy6P4DrnPWu75K/view?usp=drive_link' },
          ]
        },
        'dwm': {
          name: 'Data Warehousing & Data Mining',
          code: 'BCS058',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'se': {
          name: 'Software Engineering',
          code: 'BCS601',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'compiler-design': {
          name: 'Compiler Design',
          code: 'BCS602',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'cn': {
          name: 'Computer Networks',
          code: 'BCS603',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'data-compression': {
          name: 'Data Compression',
          code: 'BCS064',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'spm': {
          name: 'Software Project Management',
          code: 'DBOE068',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        }
      }
    },
    it: {
      name: 'Information Technology (IT)',
      code: 'KIT',
      subjects: {
        'dbms-3yr': {
          name: 'Database Management Systems',
          code: 'KCS-501',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'daa': {
          name: 'Design and Analysis of Algorithms',
          code: 'KCS-502',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'software-engineering': {
          name: 'Software Engineering',
          code: 'KCS-503',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'cyber-laws': {
          name: 'Information Security & Cyber Laws',
          code: 'KIT-601',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'computer-networks': {
          name: 'Computer Networks',
          code: 'KCS-603',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        }
      }
    },
    ece: {
      name: 'Electronics & Communication (ECE)',
      code: 'KEC',
      subjects: {
        'integrated-circuits': {
          name: 'Integrated Circuits',
          code: 'KEC-501',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'microprocessors': {
          name: 'Microprocessors',
          code: 'KEC-502',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'digital-communication': {
          name: 'Digital Communication',
          code: 'KEC-503',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'antenna': {
          name: 'Antenna and Wave Propagation',
          code: 'KEC-601',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'control-systems': {
          name: 'Control Systems',
          code: 'KEC-602',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        }
      }
    },
    ee: {
      name: 'Electrical Engineering (EE)',
      code: 'KEE',
      subjects: {
        'power-systems-1': {
          name: 'Power Systems-I',
          code: 'KEE-501',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'control-systems-ee': {
          name: 'Control Systems',
          code: 'KEE-502',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'power-electronics': {
          name: 'Power Electronics',
          code: 'KEE-503',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'power-systems-2': {
          name: 'Power Systems-II',
          code: 'KEE-601',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'electric-drives': {
          name: 'Electric Drives',
          code: 'KEE-602',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        }
      }
    },
    me: {
      name: 'Mechanical Engineering (ME)',
      code: 'KME',
      subjects: {
        'machine-design-1': {
          name: 'Machine Design-I',
          code: 'KME-501',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'heat-transfer': {
          name: 'Heat Transfer',
          code: 'KME-502',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'dynamics-of-machines': {
          name: 'Dynamics of Machines',
          code: 'KME-503',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'machine-design-2': {
          name: 'Machine Design-II',
          code: 'KME-601',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'cad-cam': {
          name: 'CAD / CAM',
          code: 'KME-602',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        }
      }
    },
    civil: {
      name: 'Civil Engineering (CE)',
      code: 'KCE',
      subjects: {
        'structural-analysis-2': {
          name: 'Structural Analysis-II',
          code: 'KCE-501',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'geotechnical-engg': {
          name: 'Geotechnical Engineering',
          code: 'KCE-502',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'environmental-engg': {
          name: 'Environmental Engineering',
          code: 'KCE-503',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'concrete-structures-1': {
          name: 'Design of Concrete Structures-I',
          code: 'KCE-601',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        },
        'transportation-engg': {
          name: 'Transportation Engineering',
          code: 'KCE-602',
          pyqYears: [
            { year: '2024-25', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2023-24', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2022-23', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
            { year: '2021-22', semester: 'Even/Odd Sem', driveLink: 'YOUR_DRIVE_LINK_HERE' },
          ]
        }
      }
    }
  };

  // Current branch aur subject ki details nikalna
  const currentBranchObj = thirdYearDriveData[branchKey] || thirdYearDriveData['cse'];
  const currentSubjectObj = currentBranchObj.subjects[subjectSlug] || {
    name: 'Previous Year Question Paper',
    code: 'BCS-XXX',
    pyqYears: []
  };

  return (
    <div className="tbd-container">
      {/* Back Button */}
      <button className="tbd-back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      {/* Header Banner */}
      <div className="tbd-header-banner">
        <span className="tbd-badge">B.Tech Third Year - {currentBranchObj.name}</span>
        <h1 className="tbd-title">{currentSubjectObj.name}</h1>
        <p className="tbd-subtitle">
          Subject Code: <strong>{currentSubjectObj.code}</strong> | Access last 5 years AKTU question papers via Google Drive below.
        </p>
      </div>

      {/* 5 Years Download Cards Grid */}
      <div className="tbd-pyq-grid">
        {currentSubjectObj.pyqYears && currentSubjectObj.pyqYears.length > 0 ? (
          currentSubjectObj.pyqYears.map((item, index) => (
            <div key={index} className="tbd-pyq-card">
              <div className="tbd-card-left">
                <div className="tbd-pdf-icon">
                  <i className="fa-solid fa-file-pdf"></i>
                </div>
                <div className="tbd-pyq-info">
                  <h3>AKTU PYQ - Session {item.year}</h3>
                  <span>{item.semester} | Verified Google Drive Link</span>
                </div>
              </div>
              <a
                href={item.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`tbd-download-btn ${item.driveLink === '#' ? 'disabled-link' : ''}`}
                onClick={(e) => { if(item.driveLink === '#') e.preventDefault(); }}
              >
                <i className="fa-solid fa-cloud-arrow-down"></i> {item.driveLink === '#' ? 'Coming Soon' : 'Download PDF'}
              </a>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#666' }}>
            Drive links for this subject will be updated soon!
          </p>
        )}
      </div>
    </div>
  );
};

export default ThirdBtechDrive;