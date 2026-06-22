import { AnimateIn } from "../components/AnimateIn";

const ContactInfo = ({ label, value }) => (
  <div className="contact-info-item">
    <div>
      <p className="contact-info-label">{label}</p>
      <p className="contact-info-value">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  const contactItems = [
    { label: "Location", value: "Kathmandu, Nepal" },
    { label: "Email", value: "hello@cantordust.ai" },
    { label: "Phone", value: "+977 000 000 000" },
    { label: "Office Hours", value: "Mon – Fri, 9am – 6pm NPT" },
  ];

  return (
    <section className="contact-page">
      <AnimateIn>
        <div className="section-header">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="section-title">Contact Us</h1>
          <p>Have a project in mind? We'd love to hear from you.</p>
        </div>
      </AnimateIn>

      <div className="contact-info-grid">
        {contactItems.map(({ label, value }, index) => (
          <AnimateIn key={label} delay={index * 0.08}>
            <ContactInfo label={label} value={value} />
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.2}>
        <div className="contact-socials">
          <p className="contact-info-label">Follow Us</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter / X</a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
};

export default Contact;
