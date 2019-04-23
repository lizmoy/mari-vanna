import React from 'react';
import Gallery from './Gallery';
import IconBar from './IconBar'
import Info from './Info'
import MenuNav from './MenuNav'

function Home(){
    return(
        <div>
            <Gallery />
            <IconBar />
            <Info />
            <MenuNav />
        </div>
    )
}

export default Home