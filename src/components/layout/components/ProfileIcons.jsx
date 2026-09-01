import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './ProfileIcons.module.css';

export default function ProfileIcons({ wrapperClasses }) {
  return (
    <div className={`${wrapperClasses}`}>
      <a
        aria-label="Github"
        className={styles.icon}
        href="https://github.com/Josh-Rosen"
      >
        <FaGithub />
      </a>
      <a
        aria-label="LinkedIn"
        className={styles.icon}
        href="https://www.linkedin.com/in/josh-d-rosen/"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
