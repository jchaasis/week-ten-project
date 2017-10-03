import React, { Component } from 'react';

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
    //if visible, display the dropdown items.
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
