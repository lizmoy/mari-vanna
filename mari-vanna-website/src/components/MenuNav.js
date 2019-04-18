import React, { Component } from 'react'

import Lunch from '../images/menunav pics/lunch.jpg'
import Dinner from '../images/menunav pics/dinner.jpg'
import Dessert from '../images/menunav pics/dessert.jpg'
import Drinks from '../images/menunav pics/drinks.jpg'

class MenuNav extends Component {
  render() {
    return (
      <div className="menunav">
        <img className="menunav__img" src={Lunch} />
        <div className="menunav__text">
            <a className="menunav__lunch" href='#'>LUNCH</a>
            <a className="menunav__dinner" href='#'>DINNER</a>
            <a className="menunav__dessert" href='#'>DESSERT</a>
            <a className="menunav__drinks" href='#'>DRINKS</a>
        </div>
      </div>
    )
  }
}

export default MenuNav