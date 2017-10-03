import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class ProductSnip extends Component{

  handleAdd(productId){
    //add an item to the cart in app.js
    this.props.addItem(productId);

  }

    // <button onClick={()=> this.handleAdd(products[rp])}> Add to Cart </button>

  render(){


    return(
      <div className={'productSnip'}>
      <Link to={"/products/"+this.props.item.id} className={'snipLink'}>
        <img src={this.props.item.image} alt='' width="200px"/>
        <h3> {this.props.item.name} </h3>
    
      </Link>
        <button onClick={()=> this.handleAdd(this.props.item)}> Add to Cart </button>
      </div>
    )
  }
}

export default ProductSnip;
