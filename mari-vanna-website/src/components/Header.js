import React from 'react'

const Header = () => {
    return (
        <div className="header">
          <div className="header__title">MARI VANNA</div>
          <nav className="header__navbar">
            <a className="header__atag" href='#'>HOME</a>
            <a className="header__atag" href='#'>ABOUT</a>
            <a className="header__atag" href='#'>MENU</a>
            <a className="header__atag" target='blank' href='https://www.opentable.com/r/mari-vanna-new-york'>RESERVATIONS</a>
          </nav>
        </div>
    )
}

export default Header