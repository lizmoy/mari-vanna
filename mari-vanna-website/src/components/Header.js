import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <div className="header">
          <div className="header__title">MARI VANNA</div>
          <nav className="header__navbar">
            <Link className="header__atag" to="/home">HOME</Link>
            <HashLink className="header__atag" to="/#about">ABOUT</HashLink>
            <HashLink className="header__atag" to="/#menu">MENU</HashLink>
            <a className="header__atag" target='blank' href='https://www.opentable.com/r/mari-vanna-new-york'>RESERVATIONS</a>
          </nav>
        </div>
    )
}

export default Header