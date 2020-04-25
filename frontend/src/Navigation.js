import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => <nav>
    <NavLink exact to="/"> Home </NavLink>
    <NavLink exact to="/interests"> Interested Companies </NavLink>
    <NavLink exact to="/dashboard"> Edit Profile </NavLink>
  </nav>

export default Navigation;