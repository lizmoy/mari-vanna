import React, { Component } from 'react'
import drinkBanner from '../images/cocktails_banner.jpg'

export class Drinks extends Component {
  render() {
    return (
        <div>
            <div className='drinks-mainImage'>
                <img className='drinks-image' src={drinkBanner} alt='drinksPhoto' />
            </div>
            <div className='drinks--mainContainer'>

                <h1 className='drinks--mainTitle'>DRINKS</h1>

                <div className='drinks--alcoholicDrinks'>

                    <h4 className='drinks--vodkaMenu-'>HOUSE INFUSED VODKA</h4>
                    <p className='drinks--vodkaDescription'>Proudly Infused with Russian Standard Vodka</p>
                    <ul className='drinks--vodkaFlavors1'>
                        <li>Apricot</li>
                        <li>Black Currant</li>
                        <li>Cherry</li>
                        <li>Cranberry</li>
                        <li>Cucumber and Dill</li>
                    </ul>
                    <ul className='drinks--vodkaFlavors2'>
                        <li>Horseradish</li>
                        <li>Pear and Vanilla</li>
                        <li>Pepper and Honey</li>
                        <li>Pickle and Garlic</li>
                        <li>Strawberry</li>
                    </ul>
                    <ul className='drinks-vodkaPrices'>
                        <li>Carafe 300ml $60</li>
                        <li>Carafe 500ml $100</li>
                        <li>Shot $11</li>
                    </ul>
                    <ul className='drinks--vodkaFlights'>
                        <li>Flight of 5 Shots $50</li>
                        <li>Flight of 10 Shots $90</li>
                    </ul>

                </div>

                <div className='drinks--nonAlcoholicDrinks'>
                    <ul>
                        <li>Glass of Tea $4</li>
                        <li>Cranberry Mors Homemade Berry Punch $5</li>
                        <li>Kvas Russian style Root Beer $5</li>
                        <li>Evian water $12</li>
                        <li>Badoit Sparkling Water $12</li>
                        <li>Elderflower lemonade $6</li>
                        <li>Coffee $5</li>
                        <li>Espresso $5</li>
                        <li>Double Espresso $6</li>
                        <li>Cappuccino $6</li>
                        <li>Grand Tea Pot  $14</li>

                    </ul>

                </div>

            </div>
        </div>
    )
  }
}

export default Drinks
