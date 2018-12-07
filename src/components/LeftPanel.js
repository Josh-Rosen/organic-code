import React from "react";
import { leftPanel } from "../cssModules/layout.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaBitbucket } from 'react-icons/fa';

export default () => (
  <div className={leftPanel}>
    <div>
      1
    </div>
    <div>
      2
    </div>
    <div>
      2
    </div>
    <div>
      <FaGithub />
      <FaBitbucket />
      <FaLinkedin />
      <FaTwitter />
      <FaStackOverflow />
    </div>
  </div>
);
