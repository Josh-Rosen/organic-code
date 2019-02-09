import React from "react";
import { leftPanel, profileIcons } from "../cssModules/layout.module.css";
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
        <GoTerminal style={{fontSize: '60px'}} />
      </Link>
    </div>
    <div style={{textAlign: 'center'}}>
      <p>Josh Rosen</p>
      <p>Software Engineer</p>
    </div>
    <div>
      <Link
        to="/about"
        activeClassName=''
      >
        About
      </Link>
    </div>
    <div>
      <Link
        to="/blog"
        activeClassName=''
      >
        Blog
      </Link>
    </div>
    <div>
      <Link
        to="/contact"
        activeClassName=''
      >
        Contact
      </Link>
    </div>
    <div className={profileIcons}>
      <a href="https://github.com/Josh-Rosen">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/josh-d-rosen/">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/Rosenjd4">
        <FaTwitter />
      </a>
      <a href="https://stackoverflow.com/users/5383552/rosenjd4">
        <FaStackOverflow />
      </a>
      <a href="https://bitbucket.org/Josh-Rosen/">
        <FaBitbucket />
      </a>
    </div>
  </div>
);
