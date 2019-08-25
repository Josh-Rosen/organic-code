import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaBitbucket } from 'react-icons/fa';

export default ({wrapperClasses}) => (
  <div className={`${wrapperClasses}`}>
    <a className="linkStyle profileIcon" href="https://github.com/Josh-Rosen" >
      <FaGithub />
    </a>
    <a className="linkStyle profileIcon" href="https://www.linkedin.com/in/josh-d-rosen/" >
      <FaLinkedin />
    </a>
    <a className="linkStyle profileIcon" href="https://twitter.com/Rosenjd4" >
      <FaTwitter />
    </a>
    <a className="linkStyle profileIcon" href="https://stackoverflow.com/users/5383552/rosenjd4" >
      <FaStackOverflow />
    </a>
    <a className="linkStyle profileIcon" href="https://bitbucket.org/Josh-Rosen/" >
      <FaBitbucket />
    </a>
  </div>
)
