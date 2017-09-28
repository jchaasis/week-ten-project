import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class ProductSnip extends Component{

  render(){

    let snipStyle = {

    }

    return(
      <div style={snipStyle}>
      <Link to={"/products/"+this.props.id}>
        <img src={this.props.image} alt='' width="200px"/>
        <h3> {this.props.name} </h3>
      </Link>
      </div>
    )
  }
}

export default ProductSnip;
