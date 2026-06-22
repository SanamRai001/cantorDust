import { Link } from "react-router-dom";
import { AnimateIn } from "../components/AnimateIn";

const services = [
  {
    id: 1,
    slug: "generalConsulting",
    title: "General Consulting",
    description:
      "Analytical solutions and insights for energy, healthcare, manufacturing, and complex operational challenges.",
  },
  {
    id: 2,
    slug: "physicalAI",
    title: "Physical AI",
    description:
      "Curated datasets for Physical AI. Reliable video and sensor datasets for robotics, embodied AI, and real-world environment training.",
  },
];

const Services = () => {
  return (
    <main className="services">
      <AnimateIn>
        <div className="section-header">
          <p className="section-eyebrow">What We Offer</p>
          <h1 className="section-title">Services</h1>
          <p>Choose a service area to learn more about how we can help.</p>
        </div>
      </AnimateIn>

      <div className="serviceList">
        {services.map(({ id, slug, title, description }, index) => (
          <AnimateIn key={id} delay={index * 0.1}>
            <Link to={`/${slug}`} className="serviceCard">
              <h2 className="service-title">{title}</h2>
              <p className="service-desc">{description}</p>
              <span className="service-link-cta">Learn more →</span>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </main>
  );
};

export default Services;
