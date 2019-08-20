import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="NavBar">
    <div>
      <NavLink
        to="/blog"
        activeClassName='activeNavLink'

      >
        Blog
      </NavLink>
    </div>
    <div>
      <NavLink
        to="/projects"
        activeClassName='activeNavLink'

      >
        Projects
      </NavLink>
    </div>
    <div>
      <NavLink
        to="/about"
        activeClassName='activeNavLink'

      >
        About
      </NavLink>
    </div>
    <div>
      <NavLink
        to="/contact"
        activeClassName='activeNavLink'

      >
        Contact
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
