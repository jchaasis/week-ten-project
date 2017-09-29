import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class DropdownItem extends Component {



// <li onClick={event => this.handleClick(event)}>{this.props.name}</li>
  render(){

    return(
      <Link to={"/products/" + this.props.name }><li >{this.props.name}</li></Link>
    )
  }
}

export default DropdownItem;
