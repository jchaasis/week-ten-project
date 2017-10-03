import React, { Component } from 'react';

import products from '../data/data';
import ProductSnip from '../components/ProductSnip';
class Products extends Component{

  render(){
    let containerStyle = {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    }

    //map through the products data and create a snip for each.
    const allProducts = products.map(item => <ProductSnip key={item.id} id={item.id} image={item.image} name={item.name} />)
    return(
      <section style={containerStyle}>
        {allProducts}
      </section>
    )
  }
}

export default Products;
