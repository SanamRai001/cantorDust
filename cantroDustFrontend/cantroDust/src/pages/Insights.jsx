import insightimage1 from "../assets/insightImage1.avif";
import insightimage2 from "../assets/insightImage2.avif";

const Insights = () => {
  const handlePdfOpen = (pdfLink) => {
    window.open(pdfLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="insight">
        <h1 className="text-4xl text-center">Insights</h1>
        <p className="text-center">Our research combines advanced analytical techniques with thorough market research and wholistic thinking.</p>
        <div className="insights">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 
              className="text-2xl text-center cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => handlePdfOpen('/hydropower-to-compute.pdf')}
            >
              From Hydropower to Compute: Nepal's Narrow Window to Become an AI Infrastructure Export Hub
            </h2>
            <img src={insightimage1} alt="Insight image" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 
              className="text-2xl text-center cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => handlePdfOpen('/nepal-vehicle-tax.pdf')}
            >
              The Debate Over Nepal's 300% Vehicle Tax Misses the Real Issue
            </h2>
            <img src={insightimage2} alt="Insight image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;