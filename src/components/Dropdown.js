import React, { Component } from 'react';

import DropdownItem from './DropdownItem'

class Dropdown extends Component {
  constructor(props){
    super(props);

    this.state = {
      visible: false,
    };
  }

  toggle(){
    this.setState({ visible: !this.state.visible})
  }

  render(){

    let items = this.state.showing ? this.props.children : undefined;

    return(

      <div>
        <p onClick={() => this.toggle()}>{this.props.name}</p>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default Dropdown;
