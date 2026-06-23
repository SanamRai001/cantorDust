import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { AnimateIn } from '../components/AnimateIn';
import DustParticles from '../components/DustParticles';
import { motion, useInView } from 'framer-motion';
import logo from "../assets/cantorDust.png";

const privateLogos = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `/logos/private/${String(n).padStart(2, '0')}.png`);
const developmentLogos = [...Array(3)].flatMap(() =>
  [1, 2, 3, 4].map(n => `/logos/development/${String(n).padStart(2, '0')}.png`)
);
const HERO_TEXT = "Intelligence for complex real-world environments.";

const Home = () => {
  const step01Ref = useRef(null);
  const step01InView = useInView(step01Ref, { once: true, amount: 0.3 });
  const [step02Visible, setStep02Visible] = useState(false);
  const [step03Visible, setStep03Visible] = useState(false);

  useEffect(() => {
    if (step01InView) {
      const t1 = setTimeout(() => setStep02Visible(true), 800);
      const t2 = setTimeout(() => setStep03Visible(true), 1600);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [step01InView]);
  const [logoStart, setLogoStart] = useState({ x: 0, y: 0, scale: 0.2 });

useEffect(() => {
  // find the navbar logo by its class
  const navLogo = document.querySelector('.navbar img');
  const heroSection = document.querySelector('.heroSection');

  if (navLogo && heroSection) {
    const navRect = navLogo.getBoundingClientRect();
    const heroRect = heroSection.getBoundingClientRect();

    setLogoStart({
      x: navRect.left + navRect.width / 2 - heroRect.left - heroRect.width / 2,
      y: navRect.top - heroRect.top - 60,
      scale: navRect.width / 160, // 160 = approx final hero logo width
    });
  }
}, []);
  return (
    <>
      <section className="heroSection">
        <DustParticles />
        <div className="hero-content">

          {/* Logo falls from above */}
<motion.img
  src={logo}
  alt="Cantor Dust"
  className="hero-logo"
  initial={{ y: -150, opacity: 0, height: 20 }}
  animate={{ y: 0, opacity: 1, height: 120 }}
  transition={{
    type: 'spring',
    stiffness: 80,
    damping: 14,
    mass: 1.2,
    opacity: { duration: 0.3, ease: 'easeIn' },
    height: { duration: 0.8, ease: 'easeOut' },
  }}
/>

          {/* Text typed one character at a time */}
          <h1 className="heroTitle">
            {HERO_TEXT.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.6 + i * 0.03,
                  duration: 0.01,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Contact Us fades in after text finishes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6 + HERO_TEXT.length * 0.03 + 0.3,
              duration: 0.6,
            }}
          >
            <Link to="/contact" className="heroBtn">Contact Us</Link>
          </motion.div>

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
          <motion.div
            ref={step01Ref}
            className="how-step"
            initial={{ opacity: 0, x: 60 }}
            animate={step01InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="step-number">01</span>
            <div>
              <h3 className="step-title">Discovery & Opportunity Mapping</h3>
              <p className="step-desc">We work closely with client teams to identify high-impact opportunities — focusing on efficiency, return on investment, and risk reduction.</p>
            </div>
          </motion.div>

          <motion.div
            className="how-step"
            initial={{ opacity: 0, x: 60 }}
            animate={step02Visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="step-number">02</span>
            <div>
              <h3 className="step-title">Prototype Development & Testing</h3>
              <p className="step-desc">We translate insights into a minimum viable product — an analysis or tool that demonstrates value — then rigorously quantify its impact.</p>
            </div>
          </motion.div>

          <motion.div
            className="how-step"
            initial={{ opacity: 0, x: 60 }}
            animate={step03Visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="step-number">03</span>
            <div>
              <h3 className="step-title">Deployment & Transfer</h3>
              <p className="step-desc">We ensure long-term sustainability by transferring tools, documentation, and know-how directly to in-house teams.</p>
            </div>
          </motion.div>
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