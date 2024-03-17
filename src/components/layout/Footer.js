import React from 'react';
import { FaHeart } from 'react-icons/fa';
import ProfileIcons from './components/ProfileIcons';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with
        {' '}
        <FaHeart className="heart-icon" />
        {' '}
        in LA
      </p>
      <ProfileIcons wrapperClasses="footer-profile-icons" />
    </footer>
  );
}

export default Footer;
