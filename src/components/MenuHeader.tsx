import React from 'react';
import { NavLink } from 'react-router-dom';
import Access from './Access';
import pages from '../pages';

const MenuHeader = () => (
  <nav className="flex h-full">
    {pages.map(({ to, title, role, icon }) => (
      <Access key={to} role={role}>
        <NavLink title={title} to={to} className={({ isActive }) => `
          ${isActive ? 'border-yellow-500' : 'border-b-transparent'}
          grid gap-[.5em] align-middle border-b-[2px] top-[2px] relative p-4 items-center text-gray-400 hover:text-cyan-600 ease-in duration-300`}
        >
          <span className="material-icons-outlined text-[2.5em] flex justify-center">{icon}</span>
          {title}
        </NavLink>
      </Access>
    ))}
  </nav>
);

export default MenuHeader;
