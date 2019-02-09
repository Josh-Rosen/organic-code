import React from "react";
import { rightPanel, body } from "../cssModules/layout.module.css";

import Header from './Header';
import Footer from './Footer';

export default ({children}) => (
  <div className={rightPanel}>
    <Header />
      <div className={body}>
        {children}
      </div>
    <Footer />
  </div>
);
