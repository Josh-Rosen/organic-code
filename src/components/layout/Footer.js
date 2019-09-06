import React from "react";
import { FaHeart } from 'react-icons/fa';
import ProfileIcons from './components/ProfileIcons'

export default () => (
  <footer className="footer">
    <p>
      Made with <FaHeart className="heart-icon"/> in LA
    </p>
    <ProfileIcons wrapperClasses="footer-profile-icons" />
  </footer>
);
