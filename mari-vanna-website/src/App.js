import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import IconBar from './components/IconBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <IconBar />
      </div>
    );
  }
}

export default App;
