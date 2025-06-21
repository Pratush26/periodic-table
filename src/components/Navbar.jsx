// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const baseLinkStyle = 'hover:text-gray-200 transition';
  const activeLinkStyle = 'underline';

  return (
    <nav className="flex justify-between items-center py-3 px-8">
      {/* Left side - Logo or Home */}
      <div className="text-xl font-bold text-gray-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLinkStyle} ${isActive ? activeLinkStyle : 'text-gray-500'}`
          }
        >
          Home
        </NavLink>
      </div>

      {/* Right side - Navigation Links */}
      <div className="space-x-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseLinkStyle} ${isActive ? activeLinkStyle : 'text-gray-500'}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/table"
          className={({ isActive }) =>
            `${baseLinkStyle} ${isActive ? activeLinkStyle : 'text-gray-500'}`
          }
        >
          Table
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
