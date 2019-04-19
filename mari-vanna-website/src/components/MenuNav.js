import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LunchPic from '../images/menunav-pics/lunch.jpg'
import DinnerPic from '../images/menunav-pics/dinner.jpg'
import DessertPic from '../images/menunav-pics/dessert.jpg'
import DrinksPic from '../images/menunav-pics/drinks.jpg'
import Lunch from './Lunch.js'
import Dinner from './Dinner.js'
import Dessert from './Dessert.js'
import Drinks from './Drinks.js'

const MenuNav = () => {
    return (
      <Router>
        <div className="menunav">
          <Link className="menunav__lunch" to="/lunch">LUNCH</Link>
          <img id="menunav__img--lunch" alt="lunch menu" src={LunchPic} />
          <Link className="menunav__dinner" to="/dinner">DINNER</Link>
          <img id="menunav__img--dinner" alt="dinner menu" src={DinnerPic} />
          <Link className="menunav__dessert" to="/dinner">DESSERT</Link>
          <img id="menunav__img--dessert" alt="dessert menu" src={DessertPic} />
          <Link className="menunav__drinks" to="/dinner">DRINKS</Link>
          <img id="menunav__img--drinks" alt="drinks menu" src={DrinksPic} />
        </div>
        <main>
          <Switch>
            <Route exact path="/lunch" component={Lunch} />
            <Route exact path="/dinner" component={Dinner} />
            <Route exact path="/dessert" component={Dessert} />
            <Route exact path="/drinks" component={Drinks} />
          </Switch>
        </main>
      </Router>
    )
}

export default MenuNav