import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import insightimage1 from "../assets/insightImage1.avif";
import insightimage2 from "../assets/insightImage2.avif";
import { AnimateIn } from "../components/AnimateIn";

const insights = [
  {
    id: 1,
    title: "From Hydropower to Compute: Nepal's Narrow Window to Become an AI Infrastructure Export Hub",
    pdf: "/hydropower-to-compute.pdf",
    image: insightimage1,
    tag: "Energy & AI",
  },
  {
    id: 2,
    title: "The Debate Over Nepal's 300% Vehicle Tax Misses the Real Issue",
    pdf: "/nepal-vehicle-tax.pdf",
    image: insightimage2,
    tag: "Policy",
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Insights = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);

  const go = (dir) => {
    setDirection(dir);
    setImgLoaded(false);
    setIndex((prev) => (prev + dir + insights.length) % insights.length);
  };

  const current = insights[index];

  return (
    <div className="insight">
      <AnimateIn>
        <div className="section-header">
          <p className="section-eyebrow">Research</p>
          <h1 className="section-title">Insights</h1>
          <p>Our research combines advanced analytical techniques with thorough market research and wholistic thinking.</p>
        </div>
      </AnimateIn>

      <div className="insight-carousel">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            className="insight-slide"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Image */}
            <div
              className="insight-img-wrap"
              onClick={() => window.open(current.pdf, '_blank', 'noopener,noreferrer')}
              role="button"
              tabIndex={0}
              aria-label={`Open PDF: ${current.title}`}
              onKeyDown={(e) => e.key === 'Enter' && window.open(current.pdf, '_blank', 'noopener,noreferrer')}
            >
              {!imgLoaded && <div className="skeleton" />}
              <img
                src={current.image}
                alt={current.title}
                style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.35s ease' }}
                onLoad={() => setImgLoaded(true)}
              />
              <div className="insight-img-overlay">
                <span className="insight-read">Read paper →</span>
              </div>
            </div>

            {/* Meta */}
            <div className="insight-meta">
              <span className="insight-tag">{current.tag}</span>
              <h2
                className="insight-title"
                onClick={() => window.open(current.pdf, '_blank', 'noopener,noreferrer')}
              >
                {current.title}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="insight-controls">
          <button className="insight-btn" onClick={() => go(-1)} aria-label="Previous">
            ←
          </button>
          <div className="insight-dots">
            {insights.map((_, i) => (
              <button
                key={i}
                className={`insight-dot ${i === index ? 'active' : ''}`}
                onClick={() => { setDirection(i > index ? 1 : -1); setImgLoaded(false); setIndex(i); }}
                aria-label={`Go to insight ${i + 1}`}
              />
            ))}
          </div>
          <button className="insight-btn" onClick={() => go(1)} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insights;