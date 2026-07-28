import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="center center-content">
      <h1 className="green">404</h1>
      <p>That page doesn&apos;t exist.</p>
      <NavLink to="/" className="linkStyle">
        <button type="button" className="button">
          Back home
        </button>
      </NavLink>
    </div>
  );
}

export default NotFound;
