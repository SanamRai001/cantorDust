import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import logo from "../assets/cantorDust.png";
import { AnimateIn, HeroAnimate } from '../components/AnimateIn';
import DustParticles from '../components/DustParticles';

const privateLogos = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `/logos/private/${String(n).padStart(2, '0')}.png`);
const developmentLogos = [1, 2, 3, 4].map(n => `/logos/development/${String(n).padStart(2, '0')}.png`);

const HowWeWorkStep = ({ number, title, description, delay }) => (
  <AnimateIn delay={delay}>
    <div className="how-step">
      <span className="step-number">{number}</span>
      <div>
        <h3 className="step-title">{title}</h3>
        <p className="step-desc">{description}</p>
      </div>
    </div>
  </AnimateIn>
);

const Home = () => {
  return (
    <>
      <section className="heroSection">
        <DustParticles />
        <div className="hero-content">
          <HeroAnimate delay={0}>
            <p className="hero-eyebrow">AI / ML Consulting</p>
          </HeroAnimate>
          <HeroAnimate delay={0.1}>
            <h1 className="heroTitle">Intelligence for complex<br />real-world environments.</h1>
          </HeroAnimate>
          <HeroAnimate delay={0.2}>
            <p className="hero-sub">
              We help organizations solve hard operational and analytical challenges
              across Energy, Healthcare, Manufacturing, and Physical AI.
            </p>
          </HeroAnimate>
          <HeroAnimate delay={0.3}>
            <Link to="/contact" className="heroBtn">Contact Us</Link>
          </HeroAnimate>
        </div>
      </section>

      <section className="whoWeAre">
        <AnimateIn className="who-image-wrap">
          <video 
            src="/home/who-we-are.mp4" autoPlay loop playsInline muted className="w-[640px] h-[360px]"
          />        
        </AnimateIn>
        <AnimateIn delay={0.1} className="who-text">
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
        </AnimateIn>
      </section>

      <section className="howWeWork">
        <AnimateIn>
          <div className="section-header">
            <p className="section-eyebrow">Our Process</p>
            <h2 className="section-title">How We Work</h2>
            <p>A structured path from opportunity to lasting impact.</p>
          </div>
        </AnimateIn>
        <div className="how-steps">
          <HowWeWorkStep
            number="01"
            title="Discovery & Opportunity Mapping"
            description="We work closely with client teams to identify high-impact opportunities — focusing on efficiency, return on investment, and risk reduction."
            delay={0}
          />
          <HowWeWorkStep
            number="02"
            title="Prototype Development & Testing"
            description="We translate insights into a minimum viable product — an analysis or tool that demonstrates value — then rigorously quantify its impact."
            delay={0.1}
          />
          <HowWeWorkStep
            number="03"
            title="Deployment & Transfer"
            description="We ensure long-term sustainability by transferring tools, documentation, and know-how directly to in-house teams."
            delay={0.2}
          />
        </div>
      </section>

      <section className="pastEngagement">
        <AnimateIn>
          <div className="section-header">
            <p className="section-eyebrow">Track Record</p>
            <h2 className="section-title">Our Team's Past Engagements</h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="marquee-group">
            <p className="marquee-label">Private Sector</p>
            <Marquee gradient={false} speed={50} pauseOnHover>
              {privateLogos.map((src, i) => (
                <div key={i} className="marquee-item">
                  <img src={src} alt={`Private sector client ${i + 1}`} />
                </div>
              ))}
            </Marquee>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="marquee-group">
            <p className="marquee-label">Development Work</p>
            <Marquee gradient={false} speed={50} pauseOnHover direction="right">
              {developmentLogos.map((src, i) => (
                <div key={i} className="marquee-item">
                  <img src={src} alt={`Development work client ${i + 1}`} />
                </div>
              ))}
            </Marquee>
          </div>
        </AnimateIn>
      </section>
    </>
  );
};

export default Home;