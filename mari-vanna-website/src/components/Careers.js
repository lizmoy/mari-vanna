import React, { Component } from 'react'
import banner from '../images/careers_banner.jpg'


export class Careers extends Component {
  render() {
    return (
      <div className='career--mainContainer'>
          <img className='career--banner' src={banner} alt='banner'/>
          <h1 className='career--careerOportunitiesTitle'>CAREER OPPORTUNITIES</h1>
          <br/>
          <p className='career--careerOportunitiesParagraph'>Should you be interested in joining the Mari Vanna Team, please send your resume to: marivanna@ginzaproject.us.</p>
        
      </div>
    )
  }
}

export default Careers
