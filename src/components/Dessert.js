import React from 'react'
import dessertBanner from '../images/dessertpage_banner.jpg'

function Dessert() {
    return(
        <div className="dessertpage__container">
            <img src={dessertBanner} alt="" className="dessertpage__image"/>
            <div className="dessertpage__title">Desserts</div>
            <div className="dessertpage__menu">
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Blinis</span>
                    <p className="dessertpage__menu-item-text"> - Crepes served with Sweet Condiments — $1</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Sirniki</span>
                    <p className="dessertpage__menu-item-text"> - Farmer's Cheese Pancakes Served with Sweet Condiments — $14</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Onegin</span>
                    <p className="dessertpage__menu-item-text"> - Sponge Cake with Layers of Pastry, Cream, Apricots, Prunes, Raisins and Almonds with Caramel Topping — $13</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Medovik</span>
                    <p className="dessertpage__menu-item-text"> – Traditional Russian Honey Layered Cake — $14</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Napolean</span>
                    <p className="dessertpage__menu-item-text"> - Layered Puff Pastry Cake with Vanilla Cream — $15</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Chocolate Roulade Prague</span>
                    <p className="dessertpage__menu-item-text"> - Chocolate Roulade Filled with Custard Buttercream and Nuts — $14</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Tatyana Larina</span>
                    <p className="dessertpage__menu-item-text"> - Fluffy dessert with whipped cream, pistachios and raspberry sauce on the side — $14</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">Apple Pie</span>
                    <p className="dessertpage__menu-item-text"> - Puff pastry pie with apples and almond cream. Served with vanilla ice cream on the top — $14</p>
                </div>
                <div className="dessertpage__menu-item"><span className="dessertpage__menu-item-bold">“Flower Pot”</span>
                    <p className="dessertpage__menu-item-text"> - Dark chocolate, vanilla mousse, vanilla ice cream, pear liquor and halva — $15</p>
                </div>
            </div>
        </div>
    )
}

export default Dessert