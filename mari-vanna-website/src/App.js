import React, { Component } from 'react';
import './App.css';
import Careers from './components/Careers'
import Drinks from './components/Drinks'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Careers /> */}
        <Drinks />
      </div>
    );
  }
}

export default App;
