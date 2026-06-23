import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import founderImage from "../assets/founder.avif";
import partnerImage from "../assets/partner.avif";
import { AnimateIn } from '../components/AnimateIn';
import { motion, AnimatePresence } from 'framer-motion';

const Skeleton = ({ className }) => (
  <div className={`skeleton ${className || ''}`} />
);

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

const TeamImage = ({ name, alt }) => {
  const base = name.split(' ')[0].toLowerCase();
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];
  const [extIndex, setExtIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="img-skeleton-wrap">
      {!loaded && <Skeleton />}
      <img
        src={`/about/${base}.${extensions[extIndex]}`}
        alt={alt}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(false); setExtIndex(prev => prev + 1); }}
      />
    </div>
  );
};

const LeaderImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="img-skeleton-wrap">
      {!loaded && <Skeleton />}
      <img
        src={src}
        alt={alt}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const LeaderCard = ({ image, name, title, bio1, bio2 }) => {
  const [active, setActive] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div
      className={`leader-card${isMobile ? ' leader-card--mobile' : ''}`}
      onClick={() => isMobile && setActive(prev => !prev)}
      onMouseEnter={() => !isMobile && setActive(true)}
      onMouseLeave={() => !isMobile && setActive(false)}
    >
      {/* Image: on mobile x is always 0, never shifts */}
      <motion.div
        className="leader-img-wrap"
        animate={{ x: isMobile ? 0 : (active ? 0 : '50%') }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <LeaderImage src={image} alt={name} />
        <div className="leader-name-tag">
          <span className="leader-name">{name}</span>
          <span className="leader-title">{title}</span>
          {isMobile && (
            <span className="leader-tap-hint">
              {active ? 'Tap to close ↑' : 'Tap to read bio ↓'}
            </span>
          )}
        </div>
      </motion.div>

      {/* Bio: desktop slides in from right, mobile expands below with height animation */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            className="leader-bio"
            initial={isMobile ? { opacity: 0, height: 0 } : { opacity: 0, x: 30 }}
            animate={isMobile ? { opacity: 1, height: 'auto' } : { opacity: 1, x: 0 }}
            exit={isMobile ? { opacity: 0, height: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: isMobile ? 0 : 0.1 }}
            style={isMobile ? { overflow: 'hidden' } : {}}
          >
            <h2 className="leader-bio-name">{name}</h2>
            <p className="leader-bio-title">{title}</p>
            <p>{bio1}</p>
            <p>{bio2}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TeamCardSkeleton = () => (
  <div className="team-card">
    <div className="team-card-img-wrap"><Skeleton /></div>
    <div className="team-card-base">
      <Skeleton className="skeleton-line skeleton-name" />
      <Skeleton className="skeleton-line skeleton-role" />
    </div>
  </div>
);

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/team");
        if (response.data.data) setTeam(response.data.data);
      } catch (err) {
        console.error("Error while fetching Team", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="about">
      <AnimateIn>
        <LeaderCard
          image={founderImage}
          name="Shreeansh Agrawal"
          title="Founder"
          bio1="With over 5 years of experience delivering bespoke AI/ML solutions across sectors, including energy, climate, aviation, healthcare, and telecom, Shreeansh brings deep technical insight combined with strategic vision. Shreeansh graduated summa cum laude from Amherst College with a degree in Mathematics and obtained a dual MBA/MS at MIT Sloan and MIT's School of Engineering."
          bio2="Passionate about solving real-world problems through AI, Shreeansh has worked with stakeholders around the globe, deploying tailored machine learning systems that drive impact. His approach blends rigorous analytical thinking with cross-industry domain expertise."
        />
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <LeaderCard
          image={partnerImage}
          name="Prijesh Sharma"
          title="Partner"
          bio1="A Data Scientist, AI Engineer, and Software Developer with over three years of experience in building data-driven solutions and intelligent systems. Skilled in machine learning, artificial intelligence, data analytics, and full-stack development. Holds an MSc in Information Technology and Applied Security from London Metropolitan University."
          bio2="Experienced in developing end-to-end solutions, including stock market prediction models, recommendation systems, school management platforms, and data analytics applications. Recognized for strong analytical thinking and the ability to design scalable and impactful technology solutions."
        />
      </AnimateIn>

      <section className="about-team-section">
        <AnimateIn>
          <h1 className="about-section-title">Our Team</h1>
        </AnimateIn>

        <div className="team-grid">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <TeamCardSkeleton key={i} />)
            : team.map((member) => {
                const isHovered = hoveredId === member._id;
                const isBlurred = hoveredId !== null && !isHovered;
                return (
                  <AnimateIn key={member._id}>
                    <motion.div
                      className="team-card"
                      onHoverStart={() => !isMobile && setHoveredId(member._id)}
                      onHoverEnd={() => !isMobile && setHoveredId(null)}
                      onClick={() => isMobile && setHoveredId(isHovered ? null : member._id)}
                      animate={{
                        filter: isBlurred ? 'blur(3px)' : 'blur(0px)',
                        opacity: isBlurred ? 0.4 : 1,
                        scale: isHovered ? 1.03 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="team-card-img-wrap">
                        <TeamImage name={member.name} alt={member.name} />
                      </div>
                      <div className="team-card-base">
                        <h2 className="team-card-name">{member.name}</h2>
                        <p className="team-card-role">{member.role}</p>
                      </div>
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            className="team-card-overlay"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h2 className="team-card-name">{member.name}</h2>
                            <p className="team-card-role">{member.role}</p>
                            <p className="team-card-bio">{member.bio}</p>
                            {member.portfolioLink && (
                              <Link to={member.portfolioLink} className="team-card-link">
                                View Portfolio →
                              </Link>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </AnimateIn>
                );
              })}
        </div>
      </section>
    </div>
  );
};

export default About;