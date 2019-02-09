import React from "react";
import { mainContainer } from "../cssModules/layout.module.css";

import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';

export default ({children}) => (
  <div className={mainContainer}>
    <LeftPanel />
    <RightPanel>
      {children}
    </RightPanel>
  </div>
);
