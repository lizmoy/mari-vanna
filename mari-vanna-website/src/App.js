import React, { Component } from 'react';
import './App.css';
import Info from './components/Info'
import Header from './components/Header.js'
import Dessert from './components/Dessert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info/>
        <Dessert/>
      </div>
    );
  }
}

export default App;
