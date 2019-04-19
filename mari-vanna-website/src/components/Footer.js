import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Careers from './Careers'

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
        <div>
        <a className='footer__followus' href='#'>FOLLOW US</a>
        {/* </div>
            <Route exact path="/careers" component={Careers} />
        </div> */}
       </div>
       </div>
    )
  }
}
export default Footer