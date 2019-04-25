import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Careers from './Careers'
import facebookIcon from '../images/icons/Facebook.png'
import InstagramIcon from '../images/icons/Instagram.png'
import TwitterIcon from '../images/icons/Twitter.png'

class Footer extends Component {
    render() {
    return (
      <div className="footer">
        <nav className='footer__navbar'>
          <a href='#'>NEWS</a>
          <a href='#'>PRESS</a>
          <a href='#'>OUR GUESTS</a> 
          <Link className="footer__careers" to="/careers">CAREERS</Link>  
        </nav>

        <div className='footer__followus'>
          <div className="follow-us" href='#'>FOLLOW US</div>
            <div className="footerIcons">
              <div className="footericon__facebook">
                <a href='https://www.facebook.com/MariVannaNYC/' target='blank'>
                <img className="icon" src={facebookIcon} alt="fb-icon" />
                </a>
              </div>
              <div className="footericon__instagram">
                <a href='https://www.instagram.com/explore/locations/465545001/mari-vanna-nyc/?hl=en' target='blank'>
                <img className="icon" src={InstagramIcon} alt="ig-icon" />
                </a>
              </div>
              <div className="footericon__twitter">
                <a href='https://twitter.com/marivannany?lang=en' target='blank'>
                <img className="icon" src={TwitterIcon} alt="twitter-icon" />
                </a>
              </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Footer