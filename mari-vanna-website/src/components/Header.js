import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuPage from './MenuPage'

const Header = () => {
    return (
      <Router>
        <div className="header">
          <div className="header__title">MARI VANNA</div>
          <nav className="header__navbar">
            <a className="header__atag" href='#'>HOME</a>
            <a className="header__atag" href='#'>ABOUT</a>
            <Link className="header__atag" to="/menu">MENU</Link>
            <a className="header__atag" target='blank' href='https://www.opentable.com/r/mari-vanna-new-york'>RESERVATIONS</a>
          </nav>
          <main>
            <Route path="/menu" component={MenuPage} />
          </main>
        </div>
      </Router>
    )
}

export default Header