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

    let items = this.state.visible ? this.props.children : undefined;

    return(

      <div>
        <p onMouseEnter={() => this.toggle()}>{this.props.name}</p>
        <ul className={'navDropDown'}>
          {items}
        </ul>
      </div>
    )
  }
}

export default Dropdown;
