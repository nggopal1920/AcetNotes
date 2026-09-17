import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Have questions, suggestions, or want to contribute notes? Get in touch with us!</p>
        </div>

        {submitted && (
          <div className="success-alert">
            <i className="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. We will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..." 
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <span>Send Message</span>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>

        {/* यहाँ है डायरेक्ट ईमेल सपोर्ट जो स्क्रीन पर दिखेगा */}
        <div className="direct-support">
          <p>Prefer direct emailing? Reach us at: <a href="mailto:support@acetstudy.com"><strong>support@acetstudy.com</strong></a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;