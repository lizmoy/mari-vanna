import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Hamburger from '../images/hamburger.png'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggleMobileNav = this.toggleMobileNav.bind(this)
  }

  toggleMobileNav() {
    const mobileState = this.state.active
    this.setState({ active: !mobileState })
  }

  render() {
    return (
        <div className="header">
          <div className="header__title">MARI VANNA</div>
          <nav className="header__navbar">
            <Link className="header__atag" to="/">HOME</Link>
            <HashLink className="header__atag" to="/#about">ABOUT</HashLink>
            <HashLink className="header__atag" to="/#menu">MENU</HashLink>
            <a className="header__atag" target='blank' href='https://www.opentable.com/r/mari-vanna-new-york'>RESERVATIONS</a>
          </nav>
          <div className="header__mobilenav">
            <img className="hamburger" src={Hamburger} onClick={this.toggleMobileNav}></img>
            <div 
              className={this.state.active ? "header_nav--content-on" : "header_nav--content-off"}>

              <Link className="header__atag--mobile-home" to="/">HOME</Link>
              <HashLink className="header__atag--mobile-about" to="/#about">ABOUT</HashLink>
              <HashLink className="header__atag--mobile-menu" to="/#menu">MENU</HashLink>
              <a className="header__atag--mobile-reservations" target='blank' href='https://www.opentable.com/r/mari-vanna-new-york'>RESERVATIONS</a>      
            </div> 
          </div>
        </div>
    )
}
}

export default Header