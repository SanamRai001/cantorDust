import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import logo from "../assets/cantorDust.png";

const API = 'http://localhost:5000/api';

const HowWeWorkStep = ({ number, title, description }) => (
  <div className="how-step">
    <span className="step-number">{number}</span>
    <div>
      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{description}</p>
    </div>
  </div>
);

const Home = () => {
  const [privateSectors, setPrivateSectors] = useState([]);
  const [developmentWorks, setDevelopmentWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [privateRes, devRes] = await Promise.all([
          axios.get(`${API}/privateWorks`),
          axios.get(`${API}/developmentWorks`),
        ]);
        setPrivateSectors(privateRes.data.data);
        setDevelopmentWorks(devRes.data.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="heroSection">
        <p className="hero-eyebrow">AI / ML Consulting</p>
        <h1 className="heroTitle">Intelligence for complex<br />real-world environments.</h1>
        <p className="hero-sub">
          We help organizations solve hard operational and analytical challenges
          across Energy, Healthcare, Manufacturing, and Physical AI.
        </p>
        <Link to="/contact" className="heroBtn">Contact Us</Link>
      </section>

      {/* Who We Are */}
      <section className="whoWeAre">
        <div className="who-image-wrap">
          <img src={logo} alt="Cantor Dust" className="who-logo" />
        </div>
        <div className="who-text">
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-title">
            Experts in turning complexity into clarity.
          </h2>
          <p>
            At Cantor Dust, our team helps organizations solve complex operational
            and analytical challenges across Energy, Healthcare, Manufacturing,
            and Physical AI — bridging rigorous research with real-world deployment.
          </p>
          <Link to="/about" className="text-link">
            Meet the team →
          </Link>
        </div>
      </section>

      {/* How We Work */}
      <section className="howWeWork">
        <div className="section-header">
          <p className="section-eyebrow">Our Process</p>
          <h2 className="section-title">How We Work</h2>
          <p>A structured path from opportunity to lasting impact.</p>
        </div>
        <div className="how-steps">
          <HowWeWorkStep
            number="01"
            title="Discovery & Opportunity Mapping"
            description="We work closely with client teams to identify high-impact opportunities — focusing on efficiency, return on investment, and risk reduction."
          />
          <HowWeWorkStep
            number="02"
            title="Prototype Development & Testing"
            description="We translate insights into a minimum viable product — an analysis or tool that demonstrates value — then rigorously quantify its impact."
          />
          <HowWeWorkStep
            number="03"
            title="Deployment & Transfer"
            description="We ensure long-term sustainability by transferring tools, documentation, and know-how directly to in-house teams."
          />
        </div>
      </section>

      {/* Past Engagements */}
      <section className="pastEngagement">
        <div className="section-header">
          <p className="section-eyebrow">Track Record</p>
          <h2 className="section-title">Our Team's Past Engagements</h2>
        </div>

        {loading ? (
          <p className="loading-text">Loading engagements…</p>
        ) : (
          <>
            <div className="marquee-group">
              <p className="marquee-label">Private Sector</p>
              <Marquee gradient={false} speed={50} pauseOnHover>
                {privateSectors.map(item => (
                  <div key={item._id} className="marquee-item">
                    <img src={item.imageUrl} alt="Private sector client" />
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="marquee-group">
              <p className="marquee-label">Development Work</p>
              <Marquee gradient={false} speed={50} pauseOnHover direction="right">
                {developmentWorks.map(item => (
                  <div key={item._id} className="marquee-item">
                    <img src={item.imageUrl} alt="Development work client" />
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Home;