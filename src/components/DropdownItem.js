import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

class DropdownItem extends Component {


  handleClick(event){
    console.log(this.props.name)
  }

// <li onClick={event => this.handleClick(event)}>{this.props.name}</li>
  render(){

    return(
      <NavLink to={"/products/" + this.props.name }><li>{this.props.name}</li></NavLink>
    )
  }
}

export default DropdownItem;
