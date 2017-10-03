import React, { Component } from 'react';

import products from '../data/data';

class DetailProduct extends Component{

  handleAdd(productId){
    //add an item to the cart in app.js
    this.props.addItem(productId);

  }
  render(){
    //pull the route params from the match prop. note, this prop was hard coded in because we are using a render method instead of the build in component prop to display the appropriate page on the <Route> in app.js
    const rp = this.props.match.params.id;

    return(
      <section>
        <h2> {products[rp].name} </h2>
        <img src={products[rp].image} alt={products[rp].name} width="500px"/>
        <p> ${products[rp].price} </p>
        <button onClick={()=> this.handleAdd(products[rp])}> Add to Cart </button>
      </section>
    )
  }
}

export default DetailProduct;
