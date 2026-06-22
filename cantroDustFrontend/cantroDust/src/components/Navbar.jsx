import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className='Navbar'>
            <div><h1>CANTOR DUST</h1></div>
            <div >
                <ul className='flex gap-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/insights">Insights</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar