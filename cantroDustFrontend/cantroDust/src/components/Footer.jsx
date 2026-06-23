import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/cantorDust.png";

const FooterLink = ({ to, children }) => (
  <Link to={to}>
    <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
      {children}
    </motion.span>
  </Link>
);

const FooterExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
      {children}
    </motion.span>
  </a>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <img src={logo} alt="Cantor Dust" className="footer-logo" />
          <p className="footer-tagline">
            Turning complexity into clarity — across Energy, Healthcare,
            Manufacturing, and Physical AI.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="col-title">Company</span>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/insights">Insights</FooterLink>
          </div>
          <div className="footer-col">
            <span className="col-title">Connect</span>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterExtLink href="https://www.linkedin.com/company/cantordust-analytics/">LinkedIn</FooterExtLink>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span className="copy">&copy; {year} Cantor Dust. All rights reserved.</span>
        <div className="status">
          <span className="status-dot" />
          <span className="status-ring" />
          All systems operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;