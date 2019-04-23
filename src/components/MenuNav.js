import React from 'react'
import { Link } from "react-router-dom";
import LunchPic from '../images/menunav-pics/lunch.jpg'
import DinnerPic from '../images/menunav-pics/dinner.jpg'
import DessertPic from '../images/menunav-pics/dessert.jpg'
import DrinksPic from '../images/menunav-pics/drinks.jpg'

const MenuNav = () => {

    return (
      <div>
        <div className="menunav" id="menu">
          <Link className="menunav__lunch" to="/lunch">LUNCH</Link>
          <img id="menunav__img--lunch" alt="lunch menu" src={LunchPic} />
          <Link className="menunav__dinner" to="/dinner">DINNER</Link>
          <img id="menunav__img--dinner" alt="dinner menu" src={DinnerPic} />
          <Link className="menunav__dessert" to="/dessert">DESSERT</Link>
          <img id="menunav__img--dessert" alt="dessert menu" src={DessertPic} />
          <Link className="menunav__drinks" to="/drinks">DRINKS</Link>
          <img id="menunav__img--drinks" alt="drinks menu" src={DrinksPic} />
        </div>
      </div>
    )
}

export default MenuNav