import axios from "axios";
import { useEffect, useState } from "react"

const About = () => {
  const [team, setTeam] = useState([]);
  useEffect(()=>{
    const fetchTeam = async() =>{
      try{
        const response = await axios.get("http://localhost:5000/api/team");
        if(response.data.data){
          setTeam(response.data.data);
        }
        else{
          console.log("No team found!");
        }
      }
      catch(err){
        console.error("Error while fetching Team", err.message);
      }
    }
  },[]);
  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>Our Founder</h1>
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <h1>Our Partner</h1>
        <p></p>
      </div>
      <div>
        <h1>Our Team</h1>
        <div>
          {
            team.map(items=>(
              <div key={items._id}>
                <Link to={items.portfolioLink}>
                  <img src={items.photoUrl} alt={items.name} />
                </Link>
                <h2>{items.name}</h2>
                <h3>({items.role})</h3>
                <p>{items.bio}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default About