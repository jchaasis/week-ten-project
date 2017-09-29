import React, { Component } from 'react';


import './styles/App.css';

import {Switch, Route} from 'react-router-dom';

//import components
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import DropdownItem from './components/DropdownItem';

//import data
import products from './data/data';

//import pages
import Contact from './views/Contact';
import Products from './views/Products';
import DetailProduct from './views/DetailProduct';
import Category from './views/Category';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className={'page'}>
          <Navbar />

          <main>
            <Switch>

                <Route path="/products/All" component={Products}/>
                  <Route path="/products/:category" component={Category}/>

                <Route path="/products/:id" component={DetailProduct}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart"/>
                <Route path="/"/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
