import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <div className={styles.homeLink}>
          <span className={styles.wordmark}>Organic Code</span>
        </div>
      </NavLink>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
