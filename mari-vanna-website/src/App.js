import React, { Component } from 'react';
import './App.css';
import Careers from './components/Careers'
import Info from './components/Info'
import Header from './components/Header.js'
import IconBar from './components/IconBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IconBar />
        <Info />
        <Careers />
      </div>
    );
  }
}

export default App;
