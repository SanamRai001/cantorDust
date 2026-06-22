import axios from "axios";
import { useEffect, useState } from "react"

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(()=>{
    const fetchServices = async () =>{
      try{
        const response = await axios.get('http://localhost:5000/api/services');
        if(response.data.data){
          setServices(response.data.data);
        }
      }
      catch(err){
        console.error("Error while fetching services:", err.message);
      }
    }
    fetchServices();
  },[]);
  return (
    <>
      <div className="services">
        <h1 className="text-4xl text-center">Services</h1>
        <div className="serviceList">
            {services.map( items =>(
              <div key={items._id} className="serviceCard">
                <h2>{items.title}</h2>
                <p>{items.description}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Services