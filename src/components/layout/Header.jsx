import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle';

function Header() {
  return (
    <header className="topHeader">
      <NavLink to="/" className="linkStyle">
        <div className="header-home-link">
          <h2 className="green">Organic Code</h2>
        </div>
      </NavLink>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
