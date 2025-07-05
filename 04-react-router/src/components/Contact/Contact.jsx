import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Info Section */}
          <div className="contact-info">
            <h1 className="contact-heading">Get in touch:</h1>
            <p className="contact-subtext">Fill in the form to start a conversation</p>

            <div className="contact-detail">
              <svg viewBox="0 0 24 24" className="contact-icon">
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="contact-text">Acme Inc, Street, State, Postal Code</div>
            </div>

            <div className="contact-detail">
              <svg viewBox="0 0 24 24" className="contact-icon">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.503 1.21l-2.257 1.13a11.042 11.042 0 005.517 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 19v1a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="contact-text">+44 1234567890</div>
            </div>

            <div className="contact-detail">
              <svg viewBox="0 0 24 24" className="contact-icon">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="contact-text">info@acme.org</div>
            </div>
          </div>

          {/* Right Form Section */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" name="tel" id="tel" placeholder="Telephone Number" required />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
