import React, { Component } from 'react';
import './App.css';
import MenuNav from './components/MenuNav'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <MenuNav />
          <Footer />
        </div>
    );
  }
}

export default App;