import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className="center center-content">
      <h1 className={styles.heading}>404</h1>
      <p>That page doesn&apos;t exist.</p>
      <NavLink to="/">
        <button type="button" className={styles.button}>
          Back home
        </button>
      </NavLink>
    </div>
  );
}

export default NotFound;
