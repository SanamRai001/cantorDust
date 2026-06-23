import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);

  return (
    <motion.footer
      ref={footerRef}
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="footer-top">
        {/* Brand */}
        <motion.div className="footer-brand" variants={itemVariants}>
          <div className="footer-logo-wrap">
            <img src={logo} alt="Cantor Dust" className="footer-logo" />
            <span className="footer-brand-name">Cantor Dust</span>
          </div>
          <p className="footer-tagline">
            Turning complexity into clarity — across Energy, Healthcare,
            Manufacturing, and Physical AI.
          </p>
        </motion.div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-col">
            <motion.span className="col-title" variants={itemVariants}>Company</motion.span>
            <motion.div variants={itemVariants}><FooterLink to="/">Home</FooterLink></motion.div>
            <motion.div variants={itemVariants}><FooterLink to="/about">About</FooterLink></motion.div>
            <motion.div variants={itemVariants}><FooterLink to="/services">Services</FooterLink></motion.div>
            <motion.div variants={itemVariants}><FooterLink to="/insights">Insights</FooterLink></motion.div>
          </div>
          <div className="footer-col">
            <motion.span className="col-title" variants={itemVariants}>Connect</motion.span>
            <motion.div variants={itemVariants}><FooterLink to="/contact">Contact Us</FooterLink></motion.div>
            <motion.div variants={itemVariants}>
              <FooterExtLink href="https://www.linkedin.com/company/cantordust-analytics/">LinkedIn</FooterExtLink>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div className="footer-bottom" variants={itemVariants}>
        <span className="copy">&copy; {year} Cantor Dust. All rights reserved.</span>
        <div className="status">
          <span className="status-dot" />
          All systems operational
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;