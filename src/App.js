import React, { Component } from 'react';
import logo from './logo.svg';


import './styles/App.css';

import {Switch, Route} from 'react-router-dom';

//import components
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import DropdownItem from './components/DropdownItem';

//import data
import products from './data/data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <Navbar />

        <div>

        </div>
        <main>
          <Switch>
              <Route path="/"/>
              <Route path="/products/accessories"/>
              <Route path="/products/brass"/>
              <Route path="/products/furniture"/>
              <Route path="/products/:id"/>
              <Route path="/products"/>
              <Route path="/cart"/>
              

          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
