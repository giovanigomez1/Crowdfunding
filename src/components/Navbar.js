import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import closemenu from '../images/icon-close-menu.svg'
import { useState } from 'react'





function Navbar() {

  const overlay = {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: '0', 
    left: '0',
    zIndex: 20
  }

  const hide = {
    transform: 'translateX(-50%)'
  }

  const [showMenu, setShowMenu] = useState(false)

  function onOpen() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <nav className="navbar container">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar__icon" onClick={onOpen}>
          {showMenu ? 
            <img className="navbar__icon--close" src={closemenu} alt="" /> :
            <img className="navbar__icon--open" src={hamburger} alt="" />
          }          
        </div>
        <ul className={`navbar__menu ${showMenu ? 'mobileMenu' : ''}`}>
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
      {showMenu && <div className="navbar__overlay" style={overlay}></div>}
    </>
  )
}

export default Navbar