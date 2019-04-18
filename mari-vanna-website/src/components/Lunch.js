import React from 'react';
import lunchBanner from '../images/lunchpage_banner.jpg'

function Lunch() {
    return(
        <div className="lunchpage__container">
            <img src={lunchBanner} alt="" className="lunchpage__image"/>
            <div className="lunchpage__title">Lunch</div>
            <div className="lunchpage__subtitle">Salads</div>
            <div className="lunchpage__menu">
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Olivier Salad $14</span>
                    <p className="lunchpage__menu-item-text">Classical Russian Melange of Roasted Vegetables with a Choice of Bologna, Chicken or Vegetarian, Dressed with Mayonnaise</p>
                </div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Vinegret $14</span>
                    <p className="lunchpage__menu-item-text">Refreshing Salad of Roasted Beets, Sauerkraut and Green Peas (Vegan)</p>
                </div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Garden Salad $15</span>
                    <p className="lunchpage__menu-item-text">Tomatoes, Cucumbers, Radishes, Sorrel, Scallions, Dill and Parsley ( Choice of Sunflower Oil, EVOO or Sour Cream)</p>
                </div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Sunflower Salad $15</span>
                    <p className="lunchpage__menu-item-text">Crisp Vegetables, Arugula, Sun-dried Tomatoes, Sunflower Seeds with Sunflower Oil and Balsamic Vinegar (Vegan)</p>
                </div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Artichoke Salad $17</span>
                    <p className="lunchpage__menu-item-text">Marinated Artichoke Hearts, Avocado, Tomatos and Bell Peppers Seasoned with Fresh Basil, Lime and EVOO (Vegan)</p>
                </div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Herring Under a Fur Coat  $16</span>
                    <p className="lunchpage__menu-item-text">Layers of Chopped Herring, Roasted Carrots, Beets and Potatoes, with a Touch of Mayonnaise Topped with Shaved Hard Boiled Egg</p>
                </div>
                <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Salmon Salad $15</span>
                    <p className="lunchpage__menu-item-text">Poached Salmon, Lettuce, Tomatoes, Cucumbers, Red Onions, Olives and Capers (Choice of Sunflower Oil or Russian Dressing)</p> 
                </div>
            </div>
        </div>
    )
}

export default Lunch