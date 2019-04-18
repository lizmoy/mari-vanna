import React from 'react';
import lunchBanner from '../images/lunchpage_banner.jpg'

function Lunch() {
    return(
        <div className="lunchpage__container">
            <img src={lunchBanner} alt="" className="lunchpage__image"/>
            <div className="lunchpage__title">Lunch</div>
            <div className="lunchpage__subtitle">Salads</div>
            <div className="lunchpage__menu">
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Olivier Salad $14</span></div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Vinegret $14</span></div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Garden Salad $15</span></div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Sunflower Salad $15</span></div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Artichoke Salad $17</span></div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Herring Under a Fur Coat  $16</span></div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Salmon Salad $15</span></div>
            </div>
        </div>
    )
}

export default Lunch