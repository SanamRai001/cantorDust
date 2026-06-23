import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import founderImage from "../assets/founder.avif";
import partnerImage from "../assets/partner.avif";
import { AnimateIn, AnimateInFromRight } from '../components/AnimateIn';

const TeamImage = ({ name, alt }) => {
  const base = name.split(' ')[0].toLowerCase();
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];
  const [extIndex, setExtIndex] = useState(0);

  return (
    <img
      src={`/about/${base}.${extensions[extIndex]}`}
      alt={alt}
      onError={() => setExtIndex(prev => prev + 1)}
    />
  );
};

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/team");
        if (response.data.data) {
          setTeam(response.data.data);
        } else {
          console.log("No team found!");
        }
      } catch (err) {
        console.error("Error while fetching Team", err.message);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="about">
      <AnimateIn>
        <div className="mainTeam">
          <img src={founderImage} alt="Image of Founder" />
          <div className="about-content">
            <h1 className="about-heading">Shreeansh Agrawal - Founder</h1>
            <div>
              <p>
                With over 5 years of experience delivering bespoke AI/ML solutions across sectors, including energy, climate, aviation, healthcare, and telecom, Shreeansh brings deep technical insight combined with strategic vision. Shreeansh graduated summa cum laude from Amherst College with a degree in Mathematics and obtained a dual MBA/MS at MIT Sloan and MIT's School of Engineering. He has previously served as an economic consultant at The Brattle Group, specializing in decarbonization modeling and investment strategy. He also worked to build ML solutions for climate mitigation and churn forecasting at Verizon.
              </p>
              <p>
                Passionate about solving real-world problems through AI, Shreeansh has worked with stakeholders around the globe, deploying tailored machine learning systems that drive impact. His approach blends rigorous analytical thinking with cross-industry domain expertise—delivering outcomes that are both innovative and grounded in practical value.
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="mainTeam">
          <img src={partnerImage} alt="Our partner Image" />
          <div className="about-content">
            <h1 className="about-heading">Prijesh Sharma - Our Partner</h1>
            <div>
              <p>
                A Data Scientist, AI Engineer, and Software Developer with over three years of experience in building data-driven solutions and intelligent systems. Skilled in machine learning, artificial intelligence, data analytics, and full-stack development. Holds an MSc in Information Technology and Applied Security and a BSc (Hons) in Computing from Islington College under London Metropolitan University.
              </p>
              <p>
                Experienced in developing end-to-end solutions, including stock market prediction models, recommendation systems, school management platforms, and data analytics applications. Recognized for strong analytical thinking, problem-solving skills, and the ability to design scalable and impactful technology solutions.
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>

      <section className="about-team-section">
        <AnimateIn>
          <h1 className="about-section-title">Our Team</h1>
        </AnimateIn>
        <div className="staffMemebers">
          {team.map((items) => (
            <AnimateInFromRight key={items._id}>
              <div className="mainTeam teamMember">
                <Link to={items.portfolioLink}>
                  <TeamImage name={items.name} alt={items.name} />
                </Link>
                <div className="about-content">
                  <h2 className="about-heading">{items.name}</h2>
                  <h3 className="team-role">({items.role})</h3>
                  <p>{items.bio}</p>
                </div>
              </div>
            </AnimateInFromRight>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
