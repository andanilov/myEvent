import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuHeader = () => (
  <nav className="flex h-full">
    <NavLink to='/' className={({ isActive }) => `
      ${isActive ? 'border-yellow-500' : 'border-b-transparent'}
      flex align-middle border-b-[2px] top-[2px] relative p-4`
    }
    >
      Главная
    </NavLink>
  </nav>
);

export default MenuHeader;
