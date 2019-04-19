import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import Dessert from './components/Dessert'
import Drinks from './components/Drinks'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <main>
              <Route exact path="/" component={Home}/>
              <Route exact path="/lunch" component={Lunch} />
              <Route exact path="/dinner" component={Dinner} />
              <Route exact path="/dessert" component={Dessert} />
              <Route exact path="/drinks" component={Drinks} />
            </main>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;