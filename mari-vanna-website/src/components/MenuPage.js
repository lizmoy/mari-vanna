import React, { Component } from 'react'
import Header from './Header.js'
import MenuNav from './MenuNav.js'
import Lunch from './Lunch.js'
import Dinner from './Dinner.js'
import Drinks from './Drinks.js'
import Footer from './Footer.js'

class MenuPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuNav />
        <Lunch />
        <Dinner />
        <Drinks />
        <Footer />
      </div>
    )
  }
}

export default MenuPage