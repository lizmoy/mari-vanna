import React, { Component } from 'react'
import Check from '../images/icons/check.png'
import Location from '../images/icons/location.png'
import Phone from '../images/icons/phone.png'
import Time from '../images/icons/time.png'

class IconBar extends Component {
  render() {
    return (
      <div className="iconbar">
        <div className="iconbar__address--div">
            <img src={Location} alt=""/>
            <h3 className="iconbar__h3">ADDRESS</h3>
            <p className="iconbar__text">41 East 20th Street <br/> New York, NY 10003</p>
        </div>
        <div className="iconbar__hours--div">
            <img src={Time} alt=""/>
            <h3 className="iconbar__h3">HOURS OF OPERATION</h3>
            <p className="iconbar__text">Mon-Sun from 12 p.m. till 11:30 p.m.</p>
        </div>
        <div className="iconbar__contact--div">
            <img src={Phone} alt=""/>
            <h3 className="iconbar__h3">CONTACT NUMBER</h3>
            <p className="iconbar__text">+1 (212) 777-1955</p>
        </div>
        <div className="iconbar__check--div">
            <img src={Check} alt=""/>
            <h3 className="iconbar__h3">AVERAGE CHECK</h3>
            <p className="iconbar__text">$30 USD</p>
        </div>
      </div>
    )
  }
}

export default IconBar