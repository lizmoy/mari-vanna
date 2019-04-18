import React from 'react';
import dollPhoto from '../images/about_left.jpg'
import storefront from '../images/about_right.jpg'

function Info() {
    return(
        <div className="info__container">
            <img src={dollPhoto} alt="" className="info__doll-image"/>
            <p className="info__text-right">Once upon a time in St.Petersburg lived a mythical woman – Mari Vanna. She was known for her warm hospitality – everyone was welcomed as a dear guest at her home. Her visitants were treated divine traditional Russian dishes, served on her finest china and linens. Not a single person left Mari Vanna’s home disappointed and many returned again and again back to this cozy retreat. Those, who were frequent guests in her home, were given a key of their own, thus becoming a part of Mari Vanna’s family. In present days, Mari Vanna resides hidden on a beautiful block in Manhattan's Flatiron area. As you step through her doorway, you will find yourself in a different place and era - an archetypal Russian apartment, adorned with old photographs, Matrioshka dolls, dazzling chandeliers, and an elaborate library where you can discover old Russian literature, a violin and a 1924 camera. The dim candlelight and quiet Russian music in the background will bring you to the Russian grandmother that you always wished to have – only for you she has prepared some delicious treats. And you will never want to leave.</p>
            <img src={storefront} alt="" className="info__storefront-image"/>
            <p className="info__text-left">Mari Vanna’s menu offers many classics, among which is the flavorful Borscht – a traditional Beet soup, prepared with Beef, Broth, Cabbage, Potatoes, and Carrots, garnished with Dill and Sour Cream on the side (Mari Vanna has an exceptional way of serving this masterpiece of Russian cuisine). Do not forget to sample the beloved Beef Stroganoff – Filet mignon Strips, cooked in creamy Mushroom Sauce and served with old-style Grechnaya Kasha. And what better way to end a unforgettable mean than with a stack of Blini and an assortment of sweet condiments – Homemade Jams, Honey, Sweetened Condensed Milk, and Nutella. And finally, for those who want to fully immerse in Russian culture, Mari Vanna has created an extraordinary selection of house infused vodkas. Ranging form sweet to savory to spicy, there is a perfect “ vodka match” for each guest. Naturally flavored with Horseradish, Pear {`\&`} Vanilla, or Pickle {`\&`} Garlic, Mari Vanna’s large vodka canisters cover the bar wall and dare everyone to find his favorite taste.</p>
        </div>
    )
}

export default Info