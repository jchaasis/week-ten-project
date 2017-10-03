import React, { Component } from 'react';

import products from '../data/data';

class Cart extends Component{
  constructor(props){
    super(props);

    this.state = {
      cartTotal: 0,
    }
  }

  updateTotal(){

  }

  render(){

    let cartStyle = {
      listStyle: "none",
    }

    let items = this.props.cart.map(item =>
      <li key={item.id}>
        <img src={item.image} width="100px"/>
        <h3> {item.name}, {item.price}</h3>
      </li>
      )

    return(
      <section>
      <ul style={cartStyle}>
        {items}

        <li> Total: ${this.state.cartTotal} </li>
      </ul>
      </section>
    )
  }
}

export default Cart;
