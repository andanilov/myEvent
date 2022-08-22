import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => (
  <NavLink to="/" >
    <h1 className="font-semibold text-3xl">MyEvent</h1>
  </NavLink>);

export default Logo;
