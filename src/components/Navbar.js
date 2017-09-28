import React, { Component } from 'react';

import {NavLink, Link} from 'react-router-dom';

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
              <Dropdown name="Products">
                <DropdownItem name="All"/>
                <DropdownItem name="Accessories"/>
                 <DropdownItem name="Brass"/>
                <DropdownItem name="Furniture"/>
              </Dropdown>

          </li>

          <li>
            <Link to={'/contact'}>Contact</Link>
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
