import React, { Component } from 'react';

import './styles/App.css';

import {Switch, Route} from 'react-router-dom';

//import components
import Navbar from './components/Navbar';

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
      totalCost: 0,
    }
  }

//add a new item to the shopping cart
  addItem(item){

    //take the new item that was passed up from the detailed item page and concat the info to the cart list. add the price of that item to the total cost of the order as well.
    this.setState({
      cart: this.state.cart.concat([item]),
      totalCost: this.state.totalCost + parseInt(item.price)
    });
  }

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

                <Route path="/products/:id" render={(props)=> <DetailProduct match={props.match} addItem={item=> this.addItem(item)} />} /> //add the props.match because we are using a render instead of component={} which automatically sends them down

                <Route path="/contact" component={Contact}/>
                <Route path="/cart" render={()=> <Cart cart={this.state} />}/>
                <Route path="/" component={Home}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
