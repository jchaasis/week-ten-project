import React, { Component } from 'react';

import products from '../data/data';

class Cart extends Component{

  render(){

    let cartStyle = {
      listStyle: "none",
    }

    //map through the cart and produce a li for each item present
    let items = this.props.cart.cart.map(item =>

      <li key={item.id}>
        <img src={item.image} width="100px"/>
        <h3> {item.name}, ${item.price}</h3>
      </li>)

    return(
      <section>
      <ul style={cartStyle}>

        {items}
        <li> Total: ${this.props.cart.totalCost} </li>

      </ul>
      </section>
    )
  }
}

export default Cart;
