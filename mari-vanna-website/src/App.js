import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Gallery from './components/Gallery';
import IconBar from './components/IconBar.js'
import Info from './components/Info'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery/>
        <IconBar />
        <Info/>
        <Footer />
      </div>
    );
  }
}

export default App;