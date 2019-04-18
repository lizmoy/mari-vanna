import React, { Component } from 'react';
import './App.css';
import Info from './components/Info'
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info/>
      </div>
    );
  }
}

export default App;
