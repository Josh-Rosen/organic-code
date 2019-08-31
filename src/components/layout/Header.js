import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import DarkModeToggle from "./components/DarkModeToggle"
import { MdMenu } from 'react-icons/md';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <header className="topHeader">
        <NavLink
          to="/"
          className="linkStyle"
        >
          <div className="header-home-link">
            <h2>Organic Code</h2>
          </div>
        </NavLink>
        <NavBar />
        <DarkModeToggle />
        <div className="dropdown-nav">
          <h2>
            <MdMenu />
            <div className="dropdown-nav-content">
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </div>
          </h2>
        </div>
      </header>
    )
  }
}

export default Header;
