import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">MARI VANNA</div>
        <div className="header__navbar">
            <a href='#'>HOME</a>
            <a href='#'>ABOUT</a>
            <a href='#'>MENU</a>
            <a href='#'>RESERVATION</a>
        </div>
      </div>
    )
  }
}

export default Header