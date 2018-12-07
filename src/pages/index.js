import React from "react";
import { mainContainer } from "../cssModules/layout.module.css";

import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';

export default () => (
  <div className={mainContainer}>
    <LeftPanel />
    <RightPanel />
  </div>
);
