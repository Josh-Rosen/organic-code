import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './static/navLinks';

function NavBar() {
  return (
    <nav className="header-nav-links">
      {NavLinks.map((linkData) => (
        <div>
          <NavLink
            to={linkData.link}
            activeClassName="activeNavLink"
            className="linkStyle"
          >
            {linkData.text}
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default NavBar;
