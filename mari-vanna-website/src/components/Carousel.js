import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import home1 from '../images/homepage_banner.jpg'
import home2 from '../images/homepage_2.jpg'
import home3 from '../images/homepage_3.jpg'
import home4 from '../images/homepage_4.jpg'

export default () => {
    return(
        <div>
            <Carousel autoPlay>
                <div className="gallery__image"><img src={home1}/></div>
                <div className="gallery__image"><img src={home2}/></div>
                <div className="gallery__image"><img src={home3}/></div>
                <div className="gallery__image"><img src={home4}/></div>
            </Carousel>
        </div>
    )
}