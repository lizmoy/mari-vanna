import React, { Component } from 'react';
import './App.css';
import Careers from './components/Careers'
import Info from './components/Info'
import Header from './components/Header.js'
import IconBar from './components/IconBar.js'
import MenuNav from './components/MenuNav.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuNav />
      </div>
    );
  }
}

export default App;