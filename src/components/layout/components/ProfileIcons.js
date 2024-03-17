import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaBitbucket,
} from 'react-icons/fa';

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
      <a
        aria-label="Twitter"
        className="linkStyle profileIcon"
        href="https://twitter.com/Rosenjd4"
      >
        <FaTwitter />
      </a>
      <a
        aria-label="StackOverflow"
        className="linkStyle profileIcon"
        href="https://stackoverflow.com/users/5383552/rosenjd4"
      >
        <FaStackOverflow />
      </a>
      <a
        aria-label="BitBucket"
        className="linkStyle profileIcon"
        href="https://bitbucket.org/Josh-Rosen/"
      >
        <FaBitbucket />
      </a>
    </div>
  );
}
