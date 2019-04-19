import React from 'react';
import Gallery from './Gallery';
import IconBar from './IconBar'
import Info from './Info'

function Home(){
    return(
        <div>
            <Gallery/>
            <IconBar />
            <Info/>
        </div>
    )
}

export default Home