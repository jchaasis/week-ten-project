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
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>
              <Dropdown name="Products">
                <DropdownItem name="Accessories"/>
                 <DropdownItem name="Brass"/>
                <DropdownItem name="Furniture"/>
              </Dropdown>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/home '}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={'/cart '}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
