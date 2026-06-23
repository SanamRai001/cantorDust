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
    { label: "Email", value: "info@cantor-dust.com" },
    { label: "Phone", value: "+1 617-216-5455, +977 9851431234" },
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
            <a href="https://www.linkedin.com/company/cantordust-analytics/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
};

export default Contact;
