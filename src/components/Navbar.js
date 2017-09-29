import React, { Component } from 'react';

import {NavLink, Link} from 'react-router-dom';

import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

class NavBar extends Component{


  render(){
    let navBar={
      backgroundColor: ' RGB(152, 60, 171)',
      color: 'RGB(255, 239, 164)',
    }

    let navLinks = {
      color: 'RGB(255, 239, 164)',
      display: 'flex',
      justifyContent: 'space-around',
      listStyle: "none",
      alignItems: 'center',

    }

    let navLink = {
      color: 'RGB(255, 239, 164)',
      textDecoration: 'none',

    }

    return(

      <nav style={navBar}>
        <ul style={navLinks}>
          <li>
            <NavLink to={'/'} style={navLink}>Home</NavLink>
          </li>
          <li>
              <Dropdown name="Products">
                <DropdownItem name="All" style={navLink}/>
                <DropdownItem name="Accessories" style={navLink}/>
                 <DropdownItem name="Brass" style={navLink}/>
                <DropdownItem name="Furniture" style={navLink}/>
              </Dropdown>

          </li>

          <li>
            <Link to={'/contact'} style={navLink}>Contact</Link>
          </li>
          <li>
            <NavLink to={'/cart'} style={navLink}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
