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
import BtechBranchPyq from './pyq/course/b.tech/B.techBranchPyq';
import BtechSubjectPyq from './pyq/course/b.tech/BtechSubjectPyq'; 

// Legal Pages (from legal folder)
import PrivacyPolicy from './legal/PrivacyPolicy';
import TermsAndConditions from './legal/TermsAndConditions';
import AboutUs from './legal/AboutUs';
import ContactUs from './legal/ContactUs';

// Coaching / BtechMaterial Page
import BtechMaterial from './materialcourse/BtechMaterial';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar har page par screen ke sabse upar permanent rahega */}
        <Navbar />

        {/* Dynamic Pages Routing */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/btech" element={<BtechPage />} />

            {/* Coaching / Material Course Route */}
            <Route path="/materialcourse/BtechMaterial" element={<BtechMaterial />} />

            {/* B.Tech Year Routes */}
            <Route path="/btech/1st-year" element={<FirstYearBTech />} />
            <Route path="/btech/2nd-year" element={<SecondYearBTech />} />
            <Route path="/btech/3rd-year" element={<ThirdYearBTech />} />
            <Route path="/btech/4th-year" element={<FourthYearBTech />} />

            {/* Subject wise Notes Routes */}
            <Route path="/notes/first-year" element={<NotesBtechFirst />} />
            <Route path="/notes/second-year" element={<NotesBtechSecond />} />
            <Route path="/notes/third-year" element={<NotesBtechThird />} />
            <Route path="/notes/fourth-year" element={<NotesBtechFourth />} />

            {/* PYQ Flow Routes */}
            <Route path="/pyq" element={<BtechCourse />} />
            <Route path="/pyq/course/b.tech/year" element={<BtechYearPyq />} />
            <Route path="/pyq/course/b.tech/branch" element={<BtechBranchPyq />} />
            <Route path="/pyq/course/b.tech/pyq-years" element={<BtechSubjectPyq />} />

            {/* Legal Pages Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer har page ke niche dikhega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
