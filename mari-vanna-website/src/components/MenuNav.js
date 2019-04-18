import React, { Component } from 'react'

import Lunch from '../images/menunav pics/lunch.jpg'
import Dinner from '../images/menunav pics/dinner.jpg'
import Dessert from '../images/menunav pics/dessert.jpg'
import Drinks from '../images/menunav pics/drinks.jpg'

class MenuNav extends Component {
  render() {
    return (
      <div className="menunav">
        <a className="menunav__lunch" href='#'>LUNCH</a>
        <img id="menunav__img--lunch" alt="lunch menu" src={Lunch} />
        <a className="menunav__dinner" href='#'>DINNER</a>
        <img id="menunav__img--dinner" alt="dinner menu" src={Dinner} />
        <a className="menunav__dessert" href='#'>DESSERT</a>
        <img id="menunav__img--dessert" alt="dessert menu" src={Dessert} />
        <a className="menunav__drinks" href='#'>DRINKS</a>
        <img id="menunav__img--drinks" alt="drinks menu" src={Drinks} />
      </div>
    )
  }
}

export default MenuNav