import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class ProductSnip extends Component{

  render(){



    return(
      <div className={'productSnip'}>
      <Link to={"/products/"+this.props.id} className={'snipLink'}>
        <img src={this.props.image} alt='' width="200px"/>
        <h3> {this.props.name} </h3>
      </Link>
      </div>
    )
  }
}

export default ProductSnip;
