import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Marquee from 'react-fast-marquee';
import logo from  "../assets/cantorDust.png"

const Home = () => {
  const [privateSectors, setPrivateSectors] = useState([]);
  const [developmentWorks, setDevelopmentWorks] = useState([]);
  useEffect(()=>{
    const fetchPrivateSectors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/privateWorks');
        return response.data.data;
      } catch (err) {
        throw new Error('Failed to fetch private sectors');
      }
    };

    const fetchDevelopmentWorks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/developmentWorks');
        return response.data.data;
      } catch (err) {
        throw new Error('Failed to fetch development works');
      }
    };
    const fetchAllData = async () => {
      try{
        const [privateData, developmentData] = await Promise.all([
          fetchDevelopmentWorks(),
          fetchPrivateSectors()
        ]);
        setDevelopmentWorks(developmentData);
        setPrivateSectors(privateData);
      }
      catch(err){
        console.error('Error fetching data:', err);
      }
    }
    fetchAllData();
  },[]);
  return (
    <>
      <div className='heroSection'>
        <h1 className='heroTitle'>Intelligence for complex real-world environments.</h1>
        <div ><Link to="/contact"><p className='heroBtn'>Contact Us</p></Link></div>
      </div>
    
      <div className='whoWeAre'>
        <div className='flex justify-center'>
          <img src={logo} alt="" />
        </div>
        <div>
          <h1>Who We Are</h1>
          <p>"At Cantor Dust, our team of experts helps organizations solve complex operational and analytical challenges across Energy, Healthcare, Manufacturing, and Physical AI."</p>
        </div>
      </div>

      <div className='howWeWork'>
        <div className='flex justify-center flex-col items-center gap-4'>
          <h1 className='text-4xl'>How We Work</h1>
          <p>We make sure you get what you need!</p>
        </div>
        <div className='box'>
          <h1>1. Discovery & Opportunity Mapping</h1>
          <p>We start by working closely with client teams to identify high-impact opportunities — focusing on levers such as efficiency, return on investment, or risk reduction. </p>
        </div>
        <div className='box'>
          <h1>2. Prototype Development & Testing</h1>
          <p>
            We translate insights into a minimum viable product — an analysis or tool that demonstrates value. Then, with rigorous methods, we quantify the impact of our solutions.
          </p>
        </div>
        <div className='box'>
          <h1>3. Deployment & Transfer</h1>
          <p>We ensure long-term sustainability by transferring the tools, documentation, and know-how to in-house teams.</p>
        </div>
      </div>

      <div className='pastEngagement'>
        <h1 className='text-center text-4xl'>Our Team's Past Engagements</h1>
        <h2 className='text-center text-2xl'>Private Sectors</h2>
          <Marquee className='privateSectors' gradient={false} speed={50} pauseOnHover={true}>
            {privateSectors.map(item => (
              <div key={item._id}>
                <img src={item.imageUrl} alt="Private sector" />
              </div>
            ))}
          </Marquee>

        <h2 className='text-center text-2xl'>Development Works</h2>
          <Marquee className='developmentWorks' gradient={false} speed={50} pauseOnHover={true}>
            {developmentWorks.map(item => (
              <div key={item._id}>
                <img src={item.imageUrl} alt="Development work" />
              </div>
            ))}
          </Marquee>
      </div>
    </>
  )
}

export default Home