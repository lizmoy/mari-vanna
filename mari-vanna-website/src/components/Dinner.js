import React from 'react'
import dinnerBanner from '../images/dinnerpage_banner.jpg'

function Dinner() {
    return(
        <div className="dinnerpage__container">
            <img src={dinnerBanner} alt="" className="dinnerpage__image"/>
            <div className="dinnerpage__title">Dinner</div>
            <div className="dinnerpage__menu">
            <div className="dinnerpage__menu-item-title">Caviar</div>
                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Stack of 10 Blinis with Red Caviar  $39</p>
                    <p className="dinnerpage__menu-item-text"> 
                    House Cured Salmon and Traditional Condiments
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <span className="dinnerpage__menu-item-bold">Homemade Blinis with Red Caviar  $31</span>
                    <p className="dinnerpage__menu-item-text"> 
                    Red Caviar (50gr) and Traditional Condiments
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <span className="dinnerpage__menu-item-bold">Troyka  $435</span>
                    <p className="dinnerpage__menu-item-text"> 
                    Trio of all three Black Caviars (30gr each) and a 500ml Carafe of House Infused Vodka
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <span className="dinnerpage__menu-item-bold">Red Square</span>
                    <p className="dinnerpage__menu-item-text"> 
                    Black Caviar (Platinum Ostera) 30gr, Red Caviar 50gr and round of House Infused Vodka Shots
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <span className="dinnerpage__menu-item-bold">Golden Osetra Black Caviar (30gr) $105</span>  
                </div>

                <div className="dinnerpage__menu-item">
                <span className="dinnerpage__menu-item-bold">Platinum Osetra Black Caviar (30gr) $185</span>  
                </div>

                <div className="dinnerpage__menu-item">
                <span className="dinnerpage__menu-item-bold">Palladium Osetra Black Caviar (30gr) $285</span>  
                </div>

                <div className="dinnerpage__menu-item">
                    <p className="dinnerpage__menu-item-text"> 
                    *Served with Russian Blinis and Traditional Condiments (onions, eggs and sour cream)
                    </p>
                </div>

                <hr className="dinnerpage__line-break"></hr>

                <div className="dinnerpage__menu-item-title">Salad</div>
                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Olivier Salad  $14</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Classical Russian Melange of Roasted Vegetables with a Choice of Bologna, Chicken or Vegetarian, Dressed with Mayonnaise
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Vinegret  $14</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Refreshing Salad of Roasted Beets, Sauerkraut and Green Peas (Vegan)
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Garden Salad $15</p>
                <p className="dinnerpage__menu-item-text"> 
                    Tomatoes, Cucumbers, Radishes, Sorrel, Scallions, Dill and Parsley ( Choice of Sunflower Oil, EVOO or Sour Cream)
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Sunflower Salad $15</p>
                <p className="dinnerpage__menu-item-text"> 
                    Crisp Vegetables, Arugula, Sun-dried Tomatoes, Sunflower Seeds with Sunflower Oil and Balsamic Vinegar (Vegan)
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Artichoke Salad $17</p>
                <p className="dinnerpage__menu-item-text"> 
                    Marinated Artichoke Hearts, Avocado, Tomatoes and Bell Peppers Seasoned with Fresh Basil, Lime and EVOO (vegan)
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Herring Under a Fur Coat $16</p>
                <p className="dinnerpage__menu-item-text"> 
                    Layers of Chopped Herring, Roasted Carrots, Beets, Potatoes and Scallions with a Touch of Mayonnaise, Topped with Shaved Hard Boiled Eggs
                    </p>
                </div>


                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Salmon Salad $15</p>
                <p className="dinnerpage__menu-item-text"> 
                    Poached Salmon, Lettuce, Tomatoes, Cucumbers, Red Onions, Olives and Capers (Choice of Sunflower Oil or Russian Dressing)
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Crab Salad $19</p>
                <p className="dinnerpage__menu-item-text"> 
                    Crab Meat with Baked Tomatoes, Avocad, Arugula, Garlic, Thyme and Olive Oil. Dressed with Sour Cream and Tomato Sauce
                    </p>
                </div>

                <hr className="dinnerpage__line-break"></hr>

                <div className="dinnerpage__menu-item-title">Appetizers</div>
                <div className="dinnerpage__menu-item-subtitle">Cold</div>
                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Cured Herring  $14</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Herring Fillet Marinated with Onions, Served with Boiled Potatoes and Rye Bread
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Soleniya  $13</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Assortment of Traditional Russian Pickled Vegetables (Vegan)
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Chilled Oysters $3 each</p>
                    <p className="dinnerpage__menu-item-text"> 
                    ask your server for today selection $3 each
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Salo Plate  $19</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Traditional Assortment of Salt Cured Pork Fatback with Onions, Garlic, Russian Mustard and Rye Toasts
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Smoked Fish Plate  $23</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Hot Smoked Sturgeon, House Cured Salmon and Cold Smoked Sturgeon
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Meat Plate  $19</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Assortment of Beef Tongue, Salami and Chicken Roulade, Served with Spicy Mustard and Horseradish
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Cheese Platter  $18/25</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Cheese Platter  $18/25</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Beef Tongue Platter  $23</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Kholodets  $16</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Beef Aspic Served with Horseradish, Mustard and Borodinsky bread chips
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Vegetable Caviar $14</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Mix of Roasted Vegetable Spread with Borodinsky Bread Chips
                    </p>
                </div>

                <div className="dinnerpage__menu-item-subtitle">Hot</div>
                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Cheese Pie  $18</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Baked to Order with Suluguni and Feta Cheese
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Pirozhok   $4 each</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Small Russian Pie Stuffed with Meat, Cabbage or Potato
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Homemade Blinis  $19</p>
                    <p className="dinnerpage__menu-item-text"> 
                    With House Cured Salmon
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Veal Pelmeni  $20</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Handmade Russian Dumplings in Light Herb Butter, Served with Boiled or in Chicken Broth
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Siberian Pelmeni with Pork and Beef $20</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Handmade Russian Dumplings in Light Herb Butter, Served with Boiled or in Chicken Broth
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Potato Vareniki $20</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Traditional Handmade Potato Dumplings with Caramelized Onions
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Zucchini Pancakes $23</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Fluffy Pancakes with Tomato, Egg and Sour Cream Sauce on the Side
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Stuffed Eggplant with Vegetables $15</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Roasted Eggplant Stuffed with Peppers, Carrots, Onions, Garlic and Tomato Sauce. Served with Lavash Stuffed with Cheese
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Stuffed Eggplant with Crabmeat $20</p>
                </div>

                <hr className="dinnerpage__line-break"></hr>

                <div className="dinnerpage__menu-item-title">Entrees</div>
                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Black Cod $29</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Roasted Fillet with Tomato and Ginger Sauce, Served with Potato Croquettes Filled with Black Cod
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Salmon $27</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Roasted Fillet with Tomato and Ginger Sauce, Served with Potato Croquettes Filled with Black Cod
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Beef Shashlik $30</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Grilled Filet with Pickled Vegetables
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Chicken Shashlik $26</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Served with Fresh Vegetable Salad, Dressed with Mayonnaise
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Beef Stroganoff $29</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Filet Mignon Strips in Creamy Mustard Sauce Served with Buckwheat
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Traditional Chicken Kiev $28</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Stuffed with help Herb Butter, Served with Mashed Potatoes
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Potatoes with Mushrooms and Onion $21</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Russian Style Potatoes with Oyster Mushrooms
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Grilled Lamb Chops $33</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Served with Grilled Eggplant Roulade, Cheese, Nuts and Tkemali sauce
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Golubtzi $26</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Cabbage Leaves Stuffed with Ground Veal, Rice and Braised Vegetables
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Chicken Kotletki $26</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Organic Free-Range Chicken Patties, Served with Mashed Potatoes and Garnished with Pickled Cucumber
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Branzino Fillet $26</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Poached Fillet, Served with Mache Salad, Cherry Tomatoes and Almonds
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Chicken Tapaka $28</p>
                    <p className="dinnerpage__menu-item-text"> 
                    with Pickled Cabbage and Apples
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Kotletki "Kamchatka" $25</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Russian Style Crab Cakes with Shrimp, Crabs and Black Cod. Served over Rice, Seaweed and Cashew Sauce
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Lenivie Golubtsy $26</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Mix of Veal and Chicken Patties Stuffed with Cabbage, Rice and Dill
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Lamb Shank $33</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Served with Bulgur, Raisins and Cilantro
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Duck Leg confit $36</p>
                    <p className="dinnerpage__menu-item-text"> 
                    with Roasted Cabbage and Vegetables
                    </p>
                </div>

                <hr className="dinnerpage__line-break"></hr>

                <div className="dinnerpage__menu-item-title">Soup</div>
                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Borsch  $14</p>
                    <p className="dinnerpage__menu-item-text"> 
                    The Masterpiece of Russian Cuisine: Flavorful Beet Soup with Beef, Served with Sides of Garlic, Fresh Herbs, Rye Bread and Salo
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Mushroom Soup  $14</p>
                    <p className="dinnerpage__menu-item-text"> 
                    with Carrots, Potatoes and Barley
                    </p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Sorrel Soup  $14</p>
                    <p className="dinnerpage__menu-item-text"> 
                    Chicken Broth with Sorrel, Roasted Chicken, Roasted Carrots and Onions, Potatoes, Poached Egg, Scallions and Dill. Served with Croutons on the Side. 
                    </p>
                </div>

                <hr className="dinnerpage__line-break"></hr>

                <div className="dinnerpage__menu-item-title">Sides</div>
                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Grilled Vegetables  $8</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Homestyle Potatoes $7</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Sauteed Mushrooms with Herbs  $19</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Mashed Potatoes  $6</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Buckwheat with Thyme and Garlic  $6</p>
                </div>

                <div className="dinnerpage__menu-item">
                <p className="dinnerpage__menu-item-bold">Rice $6</p>
                </div>
               
            </div>    
        </div>
    )
}
export default Dinner

