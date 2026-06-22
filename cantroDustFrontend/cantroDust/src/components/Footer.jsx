import logo from "../assets/cantorDust.png"
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div>
          <h1>CANTOR DUST</h1>
          <p>&copy; Cantor  Dust. All systems operational</p>
        </div>
        <div>
          <img src={logo} alt="Cantor Dust Logo" style={{ height: '100px', width: 'auto' }} />
        </div>
      </div>
    </>
  )
}

export default Footer