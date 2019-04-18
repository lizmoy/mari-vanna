import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import MenuPage from './MenuPage'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">MARI VANNA</div>
        <div className="header__navbar">
          <a className="header__atag" target='blank' href='#'>HOME</a>
          <a className="header__atag" target='blank' href='#'>ABOUT</a>
          <Link className="header__atag" to="/menu">MENU</Link>
          <a className="header__atag" target='blank' href='https://www.opentable.com/r/mari-vanna-new-york'>RESERVATIONS</a>
        </div>
        <main>
          <Route path="/menu" render={MenuPage} />
        </main>
      </div>
    )
  }
}

export default Header