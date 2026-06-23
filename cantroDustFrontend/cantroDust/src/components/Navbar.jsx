import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import logo from "../assets/cantorDust.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/insights', label: 'Insights' },
  ];

  const mobileMenuLinks = [
    ...links,
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav className="navbar">

        {/* Brand */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {links.map(({ to, label }, index) => (
            <motion.li
              key={to}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: prefersReducedMotion ? 0 : 0.1 + index * 0.07 }}
            >
              <Link to={to} className={`nav-link-item ${pathname === to ? 'active' : ''}`}>
                {label}
                {pathname === to && (
                  <motion.span
                    className="active-underline"
                    layoutId="active-underline"
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.div
          className="cta"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
        >
          <Link to="/contact">Contact Us</Link>
        </motion.div>

        {/* Hamburger */}
        <motion.button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} />
          <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.15 }} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} />
        </motion.button>
      </nav>

      {/* Mobile menu — rendered outside nav so it sits below cleanly */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mobile-menu-inner">
              {mobileMenuLinks.map(({ to, label }, index) => (
                <motion.div
                  key={to}
                  className="mobile-menu-row"
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + index * 0.055, duration: 0.2, ease: 'easeOut' }}
                >
                  <Link
                    to={to}
                    className={`mobile-nav-link ${pathname === to ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mobile-link-label">{label}</span>
                    {pathname === to && (
                      <motion.span
                        className="mobile-active-pill"
                        layoutId="mobile-active-pill"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <span className="mobile-link-arrow">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <span>© {new Date().getFullYear()} Cantor Dust</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;