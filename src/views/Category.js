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

    //query params
    const catParam = this.props.match.params.category;
    //filter through the products and display only the items whose category matches the one sent forward in the query

    const filteredProds = products.filter(product => product.category === catParam)

    const mappedProds = filteredProds.map(item => <ProductSnip key={item.id} item={item} addItem={(item)=>this.props.addItem(item)}/>)

    return(
      <section style={containerStyle}>
        {mappedProds}
      </section>
    )
  }
}

export default Category;
