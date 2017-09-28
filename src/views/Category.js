import React, { Component } from 'react';

import products from '../data/data';
import ProductSnip from '../components/ProductSnip';
class Category extends Component{

  render(){
    
    let containerStyle = {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    }

    const allProducts = products.map(items => items.filter( ) <ProductSnip key={item.id} id={item.id} image={item.image} name={item.name}/>)
    return(
      <section style={containerStyle}>
        {allProducts}
      </section>
    )
  }
}

export default Category;
