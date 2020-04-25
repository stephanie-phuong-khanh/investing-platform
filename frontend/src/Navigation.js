import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => <nav>
    <NavLink exact to="/"> Home </NavLink>
    <NavLink exact to="/Cats"> Cats </NavLink>
    <NavLink exact to="/Contact"> Contact </NavLink>
  </nav>

export default Navigation;