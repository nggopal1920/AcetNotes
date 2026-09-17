import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="legal-container">
      <h1>About Us - acetStudy</h1>
      <p>Welcome to <strong>acetStudy</strong>, your ultimate mobile-first B.Tech educational and resource hub designed specifically for engineering students.</p>

      <h2>Our Mission</h2>
      <p>Our mission is to simplify engineering education by providing structured, branch-wise, and unit-wise handwritten notes, study materials, and academic guidance completely free of cost.</p>

      <h2>Why Choose acetStudy?</h2>
      <ul>
        <li><strong>Organized Learning:</strong> Easily navigate through 1st to 4th-year notes branch-wise.</li>
        <li><strong>Unit-Wise Content:</strong> Find notes neatly broken down into individual units for efficient exam preparation.</li>
        <li><strong>Mobile Friendly:</strong> Clean, fast, and lightweight interface optimized for all smartphones and devices.</li>
      </ul>

      <p>If you have any questions or feedback, feel free to reach out to us through our contact page.</p>
    </div>
  );
};

export default AboutUs;