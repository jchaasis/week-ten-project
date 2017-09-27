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
        <Dropdown name="Products">
          <DropdownItem name="Product 1"/>
          <DropdownItem name="Product 2"/>
          <DropdownItem name="Product 3"/>
        </Dropdown>
        </div>
        <div>
          <p> {products[0].name} </p>
          <img src={products[0].image} />
        </div>
        <main>
          <Switch>
              <Route path="/products/:id"/>


          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
