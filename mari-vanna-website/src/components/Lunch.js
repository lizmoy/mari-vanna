import React from 'react';
import lunchBanner from '../images/lunchpage_banner.jpg'

function Lunch() {
    return(
        <div className="lunchpage__container">
            <img src={lunchBanner} alt="" className="lunchpage__image"/>
            <div className="lunchpage__title">Lunch</div>
            <div className="lunchpage__menu">
                <div className="lunchpage__salads">
                    <div className="lunchpage__subtitle">Salads</div>
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
                <div className="lunchpage__appetizers">
                    <div className="lunchpage__subtitle">Appetizers</div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Cured Herring $14</span>
                        <p className="lunchpage__menu-item-text">Herring Fillet Marinated with Onions, Served with Boiled Potatoes and Rye Bread</p>
                    </div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Soleniya $13</span>
                        <p className="lunchpage__menu-item-text">Assortment of Traditional Russian Pickled Vegetables (Vegan)</p>
                    </div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Pirozhok $4ea</span>
                        <p className="lunchpage__menu-item-text">Small Russian Pie Stuffed with Meat, Cabbage or Potato</p>
                    </div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Homemade Blinis $31</span>
                        <p className="lunchpage__menu-item-text">Served with Red Caviar (50g) and Traditional Condiments</p>
                    </div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Homemade Blinis with House Cured Salmon — $19</span></div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Russian Style Salmon Sandwich $15</span>
                        <p className="lunchpage__menu-item-text">House Cured Salmon,Philadelphia Cheese, Cucumber, Topped with Red Caviar</p>
                    </div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Meat Plate $19</span>
                        <p className="lunchpage__menu-item-text">Assortment of Beef Tongue, Salami and Chicken Roulade, Served with Spicy Mustard and Horseradish</p>
                    </div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Smoked Fish Plate $23 </span>
                        <p className="lunchpage__menu-item-text">Hot Smoked Sturgeon, House Cured Salmon and Cold Smoked Sturgeon</p>
                    </div>
                    <div className="lunchpage__menu-item"><span className="lunchpage__menu-bold">Homemade Blinis with Beef — $16</span></div>
                </div>
            </div>
        </div>
    )
}

export default Lunch