import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'coral'
}

export default function SideNav() {
  return(
    <nav className='side-nav'>
      <ul>
        <li>
          <NavLink
            to='/homes'
            exact
            activeStyle={activeStyle}
            className='nav-link'
          >
            Homes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/lots'
            exact
            activeStyle={activeStyle}
            className='nav-link'
          >
            Lots
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}