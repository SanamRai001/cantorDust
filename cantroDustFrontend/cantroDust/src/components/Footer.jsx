import { Link } from 'react-router-dom';
import logo from "../assets/cantorDust.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Cantor Dust" className="footer-logo" />
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="col-title">Company</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/insights">Insights</Link>
          </div>
          <div className="footer-col">
            <span className="col-title">Connect</span>
            <Link to="/contact">Contact Us</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copy">&copy; {year} Cantor Dust. All rights reserved.</span>
        <div className="status">
          <span className="status-dot" />
          All systems operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;