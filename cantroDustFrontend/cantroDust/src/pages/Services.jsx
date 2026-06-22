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
      <div>
        <h1 className="text-4xl">We Offer:</h1>
        <div>
            {services.map( items =>(
              <div key={items._id}>{items.title}</div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Services