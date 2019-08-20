import React from "react";
import { FaHeart } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaBitbucket } from 'react-icons/fa';

export default () => (
  <div className="footer">
    <div>
      Made with <FaHeart style={{color: 'red', fontSize: '12px'}}/> in LA
    </div>
    <div className="profileIconContainer">
      <div className="profileIcons">
        <a href="https://github.com/Josh-Rosen" >
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/josh-d-rosen/" >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/Rosenjd4" >
          <FaTwitter />
        </a>
        <a href="https://stackoverflow.com/users/5383552/rosenjd4" >
          <FaStackOverflow />
        </a>
        <a href="https://bitbucket.org/Josh-Rosen/" >
          <FaBitbucket />
        </a>
      </div>
    </div>
  </div>
);
