import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <NavLink to="/">← All posts</NavLink>
    </footer>
  );
}

export default Footer;
