import React from "react";
import { DiTerminalBadge } from 'react-icons/di';
import { GoTerminal } from 'react-icons/go';
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import Navbar from "./NavBar";

export default () => (
  <header className="header">
    <div className="topHeader">
      <NavLink
        to="/"
      >
        <IconContext.Provider value={{ color: "black", size: "3em"}}>
          <DiTerminalBadge />
        </IconContext.Provider>
      </NavLink>
      <h2>Organic Code</h2>
      <h2>Search</h2>
    </div>
    <Navbar />
  </header>
);
