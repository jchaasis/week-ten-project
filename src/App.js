import React, { Component } from 'react';

import './styles/App.css';

import {Switch, Route} from 'react-router-dom';

//import components
import Navbar from './components/Navbar';


//import data
import products from './data/data';

//import pages
import Contact from './views/Contact';
import Products from './views/Products';
import DetailProduct from './views/DetailProduct';
import Category from './views/Category';
import Home from './views/Home';
import Cart from './views/Cart';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cart: [],
    }
  }

//add a new item to the shopping cart
  addItem(item){
    console.log(item);
    console.log(this.state.cart)
    
    this.setState({
      cart: this.state.cart.concat([item]),
    });
  }
// render={()=> <DetailProduct addItem={()=> this.addItem()} />}
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className={'page'}>
          <Navbar />

          <main>
            <Switch>

                <Route path="/products/category/All" component={Products}/>
                <Route path="/products/category/:category" component={Category}/>

                <Route path="/products/:id" render={(props)=> <DetailProduct match={props.match} addItem={item=> this.addItem(item)} />} />

                <Route path="/contact" component={Contact}/>
                <Route path="/cart" render={()=> <Cart cart={this.state.cart} />}/>
                <Route path="/" component={Home}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
