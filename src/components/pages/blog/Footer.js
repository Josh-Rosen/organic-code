import { NavLink } from "react-router-dom";

function Footer({ props }) {
  return (
    <>
      <NavLink to="/" className="linkStyle">
        <button className="button">Back</button>
      </NavLink>
    </>
  );
}

export default Footer;
