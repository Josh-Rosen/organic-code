import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="header-nav-links">
    <div>
      <NavLink
        to="/blog"
        activeClassName='activeNavLink'
        className="linkStyle"

      >
        Blog
      </NavLink>
    </div>
    <div>
      <NavLink
        to="/projects"
        activeClassName='activeNavLink'
        className="linkStyle"
      >
        Projects
      </NavLink>
    </div>
    <div>
      <NavLink
        to="/about"
        activeClassName='activeNavLink'
        className="linkStyle"
      >
        About
      </NavLink>
    </div>
    <div>
      <NavLink
        to="/contact"
        activeClassName='activeNavLink'
        className="linkStyle"
      >
        Contact
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
