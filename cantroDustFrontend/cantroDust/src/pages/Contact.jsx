import { useState } from "react";

const ContactInfo = ({ icon, label, value }) => (
  <div className="contact-info-item">
    <div>
      <p className="contact-info-label">{label}</p>
      <p className="contact-info-value">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="section-header">
        <p className="section-eyebrow">Get In Touch</p>
        <h1 className="section-title">Contact Us</h1>
        <p>Have a project in mind? We'd love to hear from you.</p>
      </div>

      <div className="contact-info-grid">
        <ContactInfo icon="📍" label="Location" value="Kathmandu, Nepal" />
        <ContactInfo icon="✉️" label="Email" value="hello@cantordust.ai" />
        <ContactInfo icon="📞" label="Phone" value="+977 000 000 000" />
        <ContactInfo icon="🕐" label="Office Hours" value="Mon – Fri, 9am – 6pm NPT" />
      </div>

      <div className="contact-socials">
        <p className="contact-info-label">Follow Us</p>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter / X</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;