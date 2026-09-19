import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page-wrapper">
      <div className="privacy-container">
        
        <span className="privacy-badge">OFFICIAL PRIVACY DISCLOSURE • REVISED AUGUST 2026</span>
        <h1 className="privacy-title">Privacy Policy & Cookie Disclosure</h1>
        <p className="privacy-subtitle">
          AktuNotes is committed to protecting your personal privacy. This Privacy Policy details the types of information we collect, how Google AdSense utilizes cookies, and your rights as a site visitor.
        </p>

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            At AktuNotes.com, student privacy is paramount. We collect minimal personal data required to provide high-speed educational access, server logging, and community subscription features:
          </p>
          <ul>
            <li><strong>Non-Personal Technical Log Data:</strong> Browser type, operating system, device screen resolution, referring URLs, time stamps, and Internet Protocol (IP) addresses collected standardly by web servers for security and performance optimization.</li>
            <li><strong>Voluntary Account & Notification Data:</strong> Email addresses or push notification tokens submitted voluntarily when subscribing to AKTU circular updates or official communication channels.</li>
            <li><strong>Comments & Feedback:</strong> Name and email provided when submitting comments on academic articles or study material pages.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>2. Google AdSense & DoubleClick DART Cookies</h2>
          <p>
            AktuNotes uses Google AdSense to display advertisements across our portal. Google operates as a third-party vendor and uses cookies to serve ads based on your visit to AktuNotes and other sites across the Internet.
          </p>
          <p>
            <strong>Google DART Cookie:</strong> Google’s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our platform and/or other sites on the Internet.
          </p>
          <p>
            <strong>Opting Out of Personalized Ads:</strong> Users may opt out of personalized advertising by visiting <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>. Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Third-Party Web Analytics & Advertising Partners</h2>
          <p>
            AktuNotes partners with Google Analytics and reputable advertising networks to measure traffic trends and monetize educational content. These third-party ad servers use technology in their respective advertisements and links that appear on AktuNotes, sending directly to your browser.
          </p>
          <p>
            They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by third-party ad networks to measure advertising effectiveness and/or to personalize advertising content that you see.
          </p>
          <p><em>Note: AktuNotes has no access to or control over cookies used by third-party advertisers.</em></p>
        </section>

        <section className="privacy-section">
          <h2>4. Data Protection & Security Protocol</h2>
          <p>
            AktuNotes implements industry-standard SSL (HTTPS) encryption, firewalls, and server access restrictions to prevent unauthorized access, data alteration, or disclosure of visitor information.
          </p>
          <p>
            We do NOT sell, trade, rent, or lease any personally identifiable information of our users to third parties for commercial marketing purposes under any circumstances.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Children's Online Privacy Protection Act (COPPA)</h2>
          <p>
            Protecting children's privacy is especially important to us. AktuNotes does not knowingly collect any personally identifiable information from children under the age of 13. Our content is designed specifically for university-level college students in higher technical education.
          </p>
          <p>
            If a parent or guardian believes AktuNotes has inadvertent personal information of a child under 13 in its database, please contact us immediately, and we will promptly remove such information from our records.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. User Rights, Opt-Out Procedures & Privacy Desk</h2>
          <p>
            Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal email or comment data stored on AktuNotes servers.
          </p>
          <p>
            If you have any questions regarding this Privacy Policy or wish to request data removal, please contact our Data Protection Desk through our Contact Support Page.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;