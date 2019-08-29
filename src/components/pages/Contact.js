import React from "react";
import ProfileIcons from '../layout/components/ProfileIcons';

export default () => {
  return (
    <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "column"}}>
      <h1 className="center">Contact</h1>
      <ProfileIcons wrapperClasses="contact-profile-icons" />
    </div>
  )
}
