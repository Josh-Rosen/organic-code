import React from 'react';

import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="postFooter">
      <NavLink to="/" className="linkStyle">
        ← All posts
      </NavLink>
    </footer>
  );
}

export default Footer;
