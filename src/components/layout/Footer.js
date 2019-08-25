import React from "react";
import { FaHeart } from 'react-icons/fa';
import ProfileIcons from './components/ProfileIcons'

export default () => (
  <footer className="footer">
    <div>
      Made with <FaHeart style={{color: 'red', fontSize: '12px'}}/> in LA
    </div>
    <ProfileIcons wrapperClasses="footer-profile-icons" />
  </footer>
);
