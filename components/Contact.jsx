"use client";

import { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // show popup
    setShowPopup(true);

    // auto hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    // reset form
    e.target.reset();
  };

  return (
    <div className="contact-container">

      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>
      </div>

      <div className="contact-content">

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Address & Map */}
        <div className="contact-info">
          <h2>Our Office</h2>

          <p><strong>EduTech Pvt Ltd</strong></p>
          <p>Fraser Road, Patna</p>
          <p>Bihar, India – 800001</p>
          <p>Email: support@edutech.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="map">
            <iframe
              src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          ✅ Message Sent Successfully
        </div>
      )}
    </div>
  );
}
