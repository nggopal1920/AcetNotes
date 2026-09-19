import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import BtechPage from './components/BtechPage';

// B.techYearPages
import FirstYearBTech from './B.techYearPages/FirstYearB.tech';
import SecondYearBTech from './B.techYearPages/SecondYearB.tech';
import ThirdYearBTech from './B.techYearPages/ThirdYearB.tech';
import FourthYearBTech from './B.techYearPages/FourthYearB.tech';

// Notes Pages (from notes folder)
import NotesBtechFirst from './notes/NotesBtechFirst';
import NotesBtechSecond from './notes/NotesBtechSecond';
import NotesBtechThird from './notes/NotesBtechThird';
import NotesBtechFourth from './notes/NotesBtechFourth';

// PYQ Pages (from pyq/course/b.tech folder)
import BtechCourse from './pyq/course/b.tech/B.techCourse';
import BtechYearPyq from './pyq/course/b.tech/B.techYearPyq';

// Year-wise PYQ Components import
import FirstYearPyqBtech from './pyq/course/b.tech/BtechYearPyq/FirstYearPyqBtech';
import SecondYearPyqBtech from './pyq/course/b.tech/BtechYearPyq/SecondYearPyqBtech';
import ThirdYearPyqBtech from './pyq/course/b.tech/BtechYearPyq/ThirdYearPyqBtech';
import FourthYearPyqBtech from './pyq/course/b.tech/BtechYearPyq/FourthYearPyqBtech';

// BtechPyqDrive Components import
import FirstBtechDrive from './pyq/course/b.tech/BtechPyqDrive/FirstBtechDrive';
import SecondBtechDrive from './pyq/course/b.tech/BtechPyqDrive/SecondBtechDrive';
import ThirdBtechDrive from './pyq/course/b.tech/BtechPyqDrive/ThirdBtechDrive';

import BtechBranchPyq from './pyq/course/b.tech/B.techBranchPyq';

// Legal Pages
import PrivacyPolicy from './legal/PrivacyPolicy';
import TermsAndConditions from './legal/TermsAndConditions';
import AboutUs from './legal/AboutUs';
import ContactUs from './legal/ContactUs';

// B.tech Material Page
import BtechMaterial from './materialcourse/BtechMaterial';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/btech" element={<BtechPage />} />

            <Route path="/materialcourse/BtechMaterial" element={<BtechMaterial />} />

            <Route path="/btech/1st-year" element={<FirstYearBTech />} />
            <Route path="/btech/2nd-year" element={<SecondYearBTech />} />
            <Route path="/btech/3rd-year" element={<ThirdYearBTech />} />
            <Route path="/btech/4th-year" element={<FourthYearBTech />} />

            <Route path="/notes/first-year" element={<NotesBtechFirst />} />
            <Route path="/notes/second-year" element={<NotesBtechSecond />} />
            <Route path="/notes/third-year" element={<NotesBtechThird />} />
            <Route path="/notes/fourth-year" element={<NotesBtechFourth />} />

            <Route path="/pyq" element={<BtechCourse />} />
            <Route path="/pyq/course/b.tech/year" element={<BtechYearPyq />} />

            {/* 1st Year Branch and Drive Routes */}
            <Route path="/pyq/course/b.tech/first-year" element={<FirstYearPyqBtech />} />
            <Route path="/pyq/course/b.tech/first-drive" element={<FirstBtechDrive />} />

            <Route path="/pyq/course/b.tech/second-year" element={<SecondYearPyqBtech />} />
            <Route path="/pyq/course/b.tech/third-year" element={<ThirdYearPyqBtech />} />
            <Route path="/pyq/course/b.tech/fourth-year" element={<FourthYearPyqBtech />} />

            {/* Btech Pyq Drive / Subject Routes */}
            <Route path="/pyq/course/b.tech/second-drive" element={<SecondBtechDrive />} />
            <Route path="/pyq/course/b.tech/third-drive" element={<ThirdBtechDrive />} />
            <Route path="/pyq/course/b.tech/drive/4th-year" element={<FourthYearPyqBtech />} /> 

            <Route path="/pyq/course/b.tech/branch" element={<BtechBranchPyq />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
