import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
    return (
        <div className="header">
          <div className="header__title">MARI VANNA</div>
          <nav className="header__navbar">
            <a className="header__atag" href='#'>HOME</a>
            <Link className="header__atag" to="/about/#about">ABOUT</Link>
            <Link className="header__atag" to="/menu/#menu">MENU</Link>
            <a className="header__atag" target='blank' href='https://www.opentable.com/r/mari-vanna-new-york'>RESERVATIONS</a>
          </nav>
        </div>
    )
}

export default Header