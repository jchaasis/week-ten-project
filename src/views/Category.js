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

    const catParam = this.props.match.params.category;
    console.log([catParam]);
    const filteredProds = products.filter(product => product.category === catParam)

    const mappedProds = filteredProds.map(item => <ProductSnip key={item.id} id={item.id} image={item.image} name={item.name}/>)
    // const allProducts = products.map(items => items.filter( ) <ProductSnip key={item.id} id={item.id} image={item.image} name={item.name}/>)
    return(
      <section style={containerStyle}>
        {mappedProds}
      </section>
    )
  }
}

export default Category;
