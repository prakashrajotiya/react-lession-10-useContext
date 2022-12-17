import { NavLink } from "react-router-dom";
import { useContext } from "react";
import themeContext from "./themeContext";
const Header = () => {
  const { theme, settheme } = useContext(themeContext);
  return (
    <header
      className={`header ${theme == "light" ? "themelight" : "themedark"}`}
    >
      {/* <NavLink to="/">Home</NavLink> &nbsp; */}
      <div>
        {/* {theme} */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        {/* <userContext.Consumer>
        {(email) => {
          return <span>{email}</span>;
        }}
      </userContext.Consumer> */}
      </div>
      <div>
        <label class="switch">
          <input
            type="checkbox"
            onChange={() => {
              settheme(theme == "light" ? "dark" : "light");
            }}
          />
          <span class="slider round"></span>
        </label>
        <span className="text-white">{theme}</span>
      </div>
    </header>
  );
};
export default Header;
