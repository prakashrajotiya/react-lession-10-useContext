import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      {/* <NavLink to="/">Home</NavLink> &nbsp; */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </header>
  );
};
export default Header;
