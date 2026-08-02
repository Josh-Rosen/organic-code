import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ProfileIcons({ wrapperClasses }) {
  return (
    <div className={`${wrapperClasses}`}>
      <a
        aria-label="Github"
        className="linkStyle profileIcon"
        href="https://github.com/Josh-Rosen"
      >
        <FaGithub />
      </a>
      <a
        aria-label="LinkedIn"
        className="linkStyle profileIcon"
        href="https://www.linkedin.com/in/josh-d-rosen/"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
