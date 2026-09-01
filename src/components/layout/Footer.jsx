import React from 'react';
import { FaHeart } from 'react-icons/fa';
import ProfileIcons from './components/ProfileIcons';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <FaHeart className={styles.heart} /> in LA+Denver
      </p>
      <ProfileIcons wrapperClasses={styles.profileIcons} />
    </footer>
  );
}

export default Footer;
