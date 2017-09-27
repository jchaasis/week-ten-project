import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

class NavBar extends Component{

  render(){
    let navLinks = {
      display: 'flex',
      justifyContent: 'space-around',
      listStyle: "none"
    }

    return(

      <nav>
        <ul style={navLinks}>
          <li><NavLink to={'/home '}>Home</NavLink></li>
          <li><NavLink to={'/home '}>
          <Dropdown name="Products">
            <DropdownItem name="Product 1"/>
            <DropdownItem name="Product 2"/>
            <DropdownItem name="Product 3"/>
          </Dropdown>
          </NavLink></li>

          <li><NavLink to={'/home '}>Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
