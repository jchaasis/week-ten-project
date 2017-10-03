import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class DropdownItem extends Component {

  render(){

    return(
      <Link to={"/products/category/" + this.props.name }><li >{this.props.name}</li></Link>
    )
  }
}

export default DropdownItem;
