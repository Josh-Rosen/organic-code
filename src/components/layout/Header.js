import React from "react";
import { DiTerminalBadge } from 'react-icons/di';
import { GoTerminal } from 'react-icons/go';
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import DarkModeToggle from "./components/DarkModeToggle"

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
      </header>
    )
  }
}

export default Header;
