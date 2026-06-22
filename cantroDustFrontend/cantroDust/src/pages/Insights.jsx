import insightimage1 from "../assets/insightImage1.avif";
import insightimage2 from "../assets/insightImage2.avif";
import { AnimateIn } from "../components/AnimateIn";

const insights = [
  {
    id: 1,
    title: "From Hydropower to Compute: Nepal's Narrow Window to Become an AI Infrastructure Export Hub",
    pdf: "/hydropower-to-compute.pdf",
    image: insightimage1,
  },
  {
    id: 2,
    title: "The Debate Over Nepal's 300% Vehicle Tax Misses the Real Issue",
    pdf: "/nepal-vehicle-tax.pdf",
    image: insightimage2,
  },
];

const Insights = () => {
  const handlePdfOpen = (pdfLink) => {
    window.open(pdfLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="insight">
      <AnimateIn>
        <div className="section-header">
          <p className="section-eyebrow">Research</p>
          <h1 className="section-title">Insights</h1>
          <p>Our research combines advanced analytical techniques with thorough market research and wholistic thinking.</p>
        </div>
      </AnimateIn>

      <div className="insights">
        {insights.map(({ id, title, pdf, image }, index) => (
          <AnimateIn key={id} delay={index * 0.1}>
            <div className="insight-item">
              <h2
                className="insight-title"
                onClick={() => handlePdfOpen(pdf)}
              >
                {title}
              </h2>
              <img src={image} alt={title} />
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
};

export default Insights;
