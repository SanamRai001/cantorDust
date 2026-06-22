import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import GeneralConsulting from './pages/GeneralConsulting';
import PhysicalAI from './pages/PhysicalAI';

const AnimatedRoutes = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const pageContent = (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/generalConsulting" element={<GeneralConsulting />} />
      <Route path="/physicalAI" element={<PhysicalAI />} />
    </Routes>
  );

  if (prefersReducedMotion) {
    return <div className="page-transition">{pageContent}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {pageContent}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
