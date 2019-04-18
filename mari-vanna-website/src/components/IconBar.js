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
            <img src={Location} />
        </div>
        <div className="iconbar__hours--div">
            <img src={Time} />
        </div>
        <div className="iconbar__contact--div">
            <img src={Phone} />
        </div>
        <div className="iconbar__check--div">
            <img src={Check} />
        </div>
      </div>
    )
  }
}

export default IconBar