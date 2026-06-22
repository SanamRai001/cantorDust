import { Link } from 'react-router-dom';

const verticals = [
  {
    id: 1,
    icon: "⚡",
    title: "Energy & Climate",
    description:
      "Our work includes AI-based electricity demand forecasting, power generation and supply modeling, market and tariff analysis, and infrastructure planning for rapidly evolving energy systems.",
  },
  {
    id: 2,
    icon: "🏥",
    title: "Healthcare",
    description:
      "We provide pricing optimization, marketplace analytics, and supply chain intelligence for pharmaceutical and laboratory supply chains. We also develop advanced models to support clinical decision-making by integrating patient data, treatment outcomes, and real-world evidence.",
  },
  {
    id: 3,
    icon: "🏭",
    title: "Manufacturing",
    description:
      "We help modernize operations by building advanced data systems and analytical tools across the factory floor. Our work includes operational analytics, ERP and inventory system integration, production monitoring, and supply chain intelligence.",
  },
];

const serviceTypes = [
  {
    id: 1,
    icon: "📊",
    title: "Research & Analytics",
    description:
      "Deep research and data analytics catered for DFIs, MDBs, and government organizations. We deliver sector-specific insights, impact analysis, and evidence-based recommendations to support investment decisions and policy design in frontier and emerging markets.",
  },
  {
    id: 2,
    icon: "🤖",
    title: "Custom AI/ML Solutions",
    description:
      "We build tailored AI/ML solutions for private-sector organizations. From predictive maintenance and demand forecasting to clinical decision support and process optimization, we design, develop, and deploy intelligent models that seamlessly integrate with your operations and data ecosystem.",
  },
];

const dataCollection = [
  {
    id: 1,
    icon: "🗂️",
    title: "Field Surveys",
    description:
      "We work with a deep network of industrialists and policymakers to provide firm-level manufacturing surveys, healthcare facility surveys, and consumer behavior studies.",
  },
  {
    id: 2,
    icon: "🗺️",
    title: "Geospatial Data",
    description:
      "We provide power infrastructure, industrial site, transportation and logistics mapping, as well as satellite image annotation.",
  },
];

const GeneralConsulting = () => {
  return (
    <main className="gc-page">

      {/* Our Verticals */}
      <section className="gc-section">
        <div className="section-header">
          <p className="section-eyebrow">What We Cover</p>
          <h1 className="section-title">Our Verticals</h1>
          <p>Sectors where data and AI can drive the most meaningful change.</p>
        </div>
        <div className="gc-verticals">
          {verticals.map(({ id, icon, title, description }) => (
            <div key={id} className="gc-vertical-card">
              <h3 className="gc-card-title">{title}</h3>
              <p className="gc-card-desc">{description}</p>
              <Link to="/contact" className="gc-cta">Start Now →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Services */}
      <section className="gc-section gc-section--alt">
        <div className="section-header">
          <p className="section-eyebrow">How We Help</p>
          <h2 className="section-title">Types of Services</h2>
          <p>Tailored engagements for public and private sector organizations.</p>
        </div>
        <div className="gc-service-types">
          {serviceTypes.map(({ id, icon, title, description }) => (
            <div key={id} className="gc-service-card">
              <div>
                <h3 className="gc-card-title">{title}</h3>
                <p className="gc-card-desc">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Primary Data Collection */}
      <section className="gc-section">
        <div className="section-header">
          <p className="section-eyebrow">Ground Truth</p>
          <h2 className="section-title">Primary Data Collection</h2>
          <p>First-hand data from the field to power better decisions.</p>
        </div>
        <div className="gc-data-grid">
          {dataCollection.map(({ id, icon, title, description }) => (
            <div key={id} className="gc-data-card">
              <h3 className="gc-card-title">{title}</h3>
              <p className="gc-card-desc">{description}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default GeneralConsulting;