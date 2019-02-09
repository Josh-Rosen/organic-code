import React from "react";
import { FaHeart } from 'react-icons/fa';
import { footer } from "../cssModules/layout.module.css";

export default () => (
  <div className={footer}>
    Made with <FaHeart style={{color: 'red', fontSize: '12px'}}/> in LA
  </div>
);
