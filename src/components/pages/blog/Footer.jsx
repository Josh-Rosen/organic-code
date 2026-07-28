import React from 'react';

import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <NavLink to="/" className="linkStyle">
      <button type="button" className="button">
        Back
      </button>
    </NavLink>
  );
}

export default Footer;
