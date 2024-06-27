import logo from '../images/logo.svg'

function Navbar() {
  return (
    <nav className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="navbar__menu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>

    </nav>
    
  )
}

export default Navbar