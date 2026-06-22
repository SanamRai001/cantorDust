import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

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
    <nav className="navbar">
      <Link to="/" className="brand">CANTOR DUST</Link>

      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className={pathname === to ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="cta">
        <Link to="/contact">Contact Us</Link>
      </div>

      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {menuOpen && (
          prefersReducedMotion ? (
            <div className="mobile-menu">
              {mobileMenuLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={pathname === to ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          ) : (
            <motion.div
              key="mobile-menu"
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {mobileMenuLinks.map(({ to, label }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    to={to}
                    className={pathname === to ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
