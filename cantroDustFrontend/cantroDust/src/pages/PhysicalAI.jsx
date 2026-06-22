import annotationImg from "../assets/Annotation_edited.avif";

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

      {/* Intro */}
      <section className="pai-intro">
        <div className="pai-intro-text">
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
        </div>
        <div className="pai-intro-image">
          <img src={annotationImg} alt="Data Annotation Process" />
        </div>
      </section>

      {/* Annotation Steps */}
      <section className="pai-steps-section">
        <div className="section-header">
          <p className="section-eyebrow">Our Process</p>
          <h2 className="section-title">How We Annotate Data</h2>
          <p>A rigorous, multi-stage pipeline that produces training-ready datasets.</p>
        </div>
        <div className="pai-steps-grid">
          {annotationSteps.map(({ id, title, description }) => (
            <div key={id} className="pai-step-card">
              <span className="pai-step-number">0{id}</span>
              <h3 className="pai-step-title">{title}</h3>
              <p className="pai-step-desc">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example Video */}
      <section className="pai-video-section">
        <div className="section-header">
          <p className="section-eyebrow">See It In Action</p>
          <h2 className="section-title">Example Video</h2>
          <p>A walkthrough of our annotation pipeline on a real industrial dataset.</p>
        </div>
        <div className="pai-video-wrap">
          <video
            controls
            poster={annotationImg}
            className="pai-video"
          >
            {/* Replace src with your actual video file when ready */}
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="pai-video-placeholder">
            <span className="pai-video-placeholder-icon">▶</span>
            <p>Video coming soon</p>
          </div>
        </div>
      </section>

      {/* Annotation Example */}
      <section className="pai-annotation-section">
        <div className="section-header">
          <p className="section-eyebrow">Sample Output</p>
          <h2 className="section-title">Annotation Example</h2>
          <p>A snapshot of a completed annotation showing our labeling structure and granularity.</p>
        </div>
        <div className="pai-annotation-image-wrap">
          <img src={annotationImg} alt="Annotation example output" />
        </div>
      </section>

    </main>
  );
};

export default PhysicalAI;