import React, { Component } from 'react';
import './App.css';
import Careers from './components/Careers'
import Drinks from './components/Drinks'
import Info from './components/Info'
import Header from './components/Header.js'
import Dinner from './components/Dinner.js'
import Dessert from './components/Dessert';
import IconBar from './components/IconBar.js'
import MenuNav from './components/MenuNav.js'
import Footer from './components/Footer.js'
import Lunch from './components/Lunch';
import Gallery from './components/Gallery';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Gallery/>
        <Info/>
        <IconBar />
        <MenuNav />
        <Lunch/>
        <Dinner />
        <Drinks />
        {/* <Dessert/> */}
        {/* <Careers /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;