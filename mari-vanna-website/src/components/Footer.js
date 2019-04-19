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
        <a  href='#'>FOLLOW US</a>
        <div className="footerIcons">
        <div className="footericon__facebook">
        <img src={facebookIcon} alt="" />
        </div>
        <div className="footericon__instagram">
        <img src={InstagramIcon} alt="" />
        </div>
        <div className="footericon__twitter">
        <img src={TwitterIcon} alt="" />
        </div>
        </div>
       </div>
       </div>
    )
  }
}
export default Footer