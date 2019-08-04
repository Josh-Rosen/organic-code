import React from "react";
import { leftPanel, profileIcons, linkStyle, center, blackLink } from "../cssModules/layout.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaBitbucket } from 'react-icons/fa';
import { GoTerminal } from 'react-icons/go';
import { Link } from "gatsby";

export default () => (
  <div className={leftPanel}>
    <div>
      <Link
        to="/"
        activeClassName=''
      >
        <GoTerminal style={{fontSize: '60px', color: 'green'}} />
      </Link>
    </div>
    <div className={center}>
      <p>Josh Rosen</p>
      <p>Software Engineer</p>
    </div>
    <div>
      <Link
        to="/about"
        activeClassName=''
        className={linkStyle}
      >
        About
      </Link>
    </div>
    <div>
      <Link
        to="/blog"
        activeClassName=''
        className={linkStyle}
      >
        Blog
      </Link>
    </div>
    <div>
      <Link
        to="/contact"
        activeClassName=''
        className={linkStyle}
      >
        Contact
      </Link>
    </div>
    <div className={profileIcons}>
      <a href="https://github.com/Josh-Rosen" className={blackLink}>
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/josh-d-rosen/" className={blackLink}>
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/Rosenjd4" className={blackLink}>
        <FaTwitter />
      </a>
      <a href="https://stackoverflow.com/users/5383552/rosenjd4" className={blackLink}>
        <FaStackOverflow />
      </a>
      <a href="https://bitbucket.org/Josh-Rosen/" className={blackLink}>
        <FaBitbucket />
      </a>
    </div>
  </div>
);
