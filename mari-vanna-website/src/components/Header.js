import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">MARI VANNA</div>
        <div className="header__navbar">
            <a className="header__atag" href='#'>HOME</a>
            <a className="header__atag" href='#'>ABOUT</a>
            <a className="header__atag" href='#'>MENU</a>
            <a className="header__atag" href='#'>RESERVATION</a>
        </div>
      </div>
    )
  }
}

export default Header