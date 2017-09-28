import React, { Component } from 'react';

import products from '../data/data';

class DetailProduct extends Component{

  render(){
    const rp = this.props.match.params.id;
    console.log(products[rp]);

    return(
      <section>
        <h2> {products[rp].name} </h2>
        <img src={products[rp].image} alt={products[rp].name} width="500px"/>
        <p> {products[rp].price} </p>

      </section>
    )
  }
}

export default DetailProduct;
