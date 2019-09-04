import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import DarkModeToggle from "./components/DarkModeToggle"
import { MdMenu } from 'react-icons/md';
import NavLinks from './static/navLinks';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownIsOpen: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({dropdownIsOpen: !this.state.dropdownIsOpen});
  }

  render() {
    return(
      <header className="topHeader">
        <NavLink
          to="/"
          className="linkStyle"
        >
          <div className="header-home-link">
            <h2 className="green">Organic Code</h2>
          </div>
        </NavLink>
        <NavBar />
        <DarkModeToggle />
        <div className="dropdown-nav">
          <h2>
            <MdMenu onClick={this.toggleDropdown} className="cursor-pointer" />
            { this.state.dropdownIsOpen &&
              <div className="dropdown-nav-content">
                {
                  NavLinks.map(linkData => {
                    return(
                      <div>
                        <NavLink
                          to={linkData.link}
                          activeClassName='activeNavLink'
                          className="linkStyle"
                          onClick={this.toggleDropdown}
                        >
                          {linkData.text}
                        </NavLink>
                      </div>
                    )
                  })
                }
              </div>
            }
          </h2>
        </div>
      </header>
    )
  }
}

export default Header;
