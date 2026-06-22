import { useState } from "react"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async() =>{

  }
  return (
    <>
      <h1 className="text-4xl text-center">Contact Us</h1>
      <div>
        <div>
          <h2>Get in Touch</h2>
          <p>Location</p>
          <p>Email</p>
          <p>Number</p>
          <p>Social Sites</p>
        </div>
        <div>
          <form action="" onSubmit={()=>handleSubmit()}>
            <input type="text" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <textarea placeholder="Your Message" onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact