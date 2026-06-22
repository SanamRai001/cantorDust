import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import GeneralConsulting from './pages/GeneralConsulting';
import PhysicalAI from './pages/PhysicalAI';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/generalConsulting' element={<GeneralConsulting/> }></Route>
            <Route path='/physicalAI' element={<PhysicalAI/>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;