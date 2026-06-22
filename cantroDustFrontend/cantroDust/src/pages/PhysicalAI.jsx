import annotationImg from "../assets/Annotation_edited.avif";
import { AnimateIn } from '../components/AnimateIn';

const annotationSteps = [
  {
    id: 1,
    title: "Video Segmentation",
    description:
      "We divide each video into precise time segments or individual frames to accurately capture and identify the actions and events occurring within the scene.",
  },
  {
    id: 2,
    title: "Frame-by-Frame Analysis",
    description:
      "Our annotators carefully review each frame to identify movements, object interactions, and human actions, ensuring precise and context-aware annotations.",
  },
  {
    id: 3,
    title: "Structured Time-Stamping",
    description:
      "Every annotation includes detailed metadata such as serial number, start time, stop time, and action description, allowing models to understand temporal sequences effectively.",
  },
  {
    id: 4,
    title: "Fine-Grained Annotation Granularity",
    description:
      "We use fine-grained annotation, breaking complex actions into smaller steps to improve AI learning and model accuracy.",
  },
  {
    id: 5,
    title: "Professional Annotation Tools",
    description:
      "We use industry-standard tools such as CVAT to perform scalable video annotation, enabling efficient frame navigation, object tracking, and structured labeling.",
  },
  {
    id: 6,
    title: "Multi-Level Quality Assurance",
    description:
      "All annotations go through multiple review stages to ensure accuracy, consistency, and high-quality datasets before delivery to the client.",
  },
];

const PhysicalAI = () => {
  return (
    <main className="pai-page">

      <section className="pai-intro">
        <AnimateIn className="pai-intro-text">
          <p className="section-eyebrow">Physical AI</p>
          <h1 className="section-title">Real-World Datasets for Robotics & Embodied AI</h1>
          <p className="pai-body">
            Our work focuses on building reliable datasets from real-world environments
            to support robotics and embodied AI. By collecting extensive video and sensor
            data from industrial settings, we enable the training of models capable of
            understanding and operating in complex physical environments.
          </p>
          <p className="pai-body">
            These datasets are carefully curated to ensure high accuracy, consistency,
            and scalability for machine learning applications — bridging the gap between
            digital intelligence and real-world interaction.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.15} className="pai-intro-image">
          <img src={annotationImg} alt="Data Annotation Process" />
        </AnimateIn>
      </section>

      <section className="pai-steps-section">
        <AnimateIn>
          <div className="section-header">
            <p className="section-eyebrow">Our Process</p>
            <h2 className="section-title">How We Annotate Data</h2>
            <p>A rigorous, multi-stage pipeline that produces training-ready datasets.</p>
          </div>
        </AnimateIn>
        <div className="pai-steps-grid">
          {annotationSteps.map(({ id, title, description }, index) => (
            <AnimateIn key={id} delay={(index % 3) * 0.1}>
              <div className="pai-step-card">
                <span className="pai-step-number">0{id}</span>
                <h3 className="pai-step-title">{title}</h3>
                <p className="pai-step-desc">{description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="pai-video-section">
        <AnimateIn>
          <div className="section-header">
            <p className="section-eyebrow">See It In Action</p>
            <h2 className="section-title">Example Video</h2>
            <p>A walkthrough of our annotation pipeline on a real industrial dataset.</p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div className="pai-video-wrap">
            <video
              controls
              poster={annotationImg}
              className="pai-video"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="pai-video-placeholder">
              <span className="pai-video-placeholder-icon">▶</span>
              <p>Video coming soon</p>
            </div>
          </div>
        </AnimateIn>
      </section>

      <section className="pai-annotation-section">
        <AnimateIn>
          <div className="section-header">
            <p className="section-eyebrow">Sample Output</p>
            <h2 className="section-title">Annotation Example</h2>
            <p>A snapshot of a completed annotation showing our labeling structure and granularity.</p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div className="pai-annotation-image-wrap">
            <img src={annotationImg} alt="Annotation example output" />
          </div>
        </AnimateIn>
      </section>

    </main>
  );
};

export default PhysicalAI;
