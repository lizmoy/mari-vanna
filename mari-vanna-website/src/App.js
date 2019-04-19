import React, { Component } from 'react';
import './App.css';
import MenuNav from './components/MenuNav'
import Header from './components/Header'
import Gallery from './components/Gallery';
import IconBar from './components/IconBar'
import Info from './components/Info'
import Footer from './components/Footer'
import Drinks from './components/Drinks'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery/>
        <IconBar />
        <Info/>
        <Drinks />
        <Footer />
      </div>
    );
  }
}

export default App;