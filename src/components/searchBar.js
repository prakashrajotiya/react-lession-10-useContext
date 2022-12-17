import { useState, useContext } from "react";
import themeContext from "./themeContext";
const SearchBar = ({ memberList, setmemberData }) => {
  // input search var
  let [searchValue, setsearchValue] = useState("");
  const { theme } = useContext(themeContext);
  //   form submit method
  const formSubmit = (e) => {
    e.preventDefault();
    let filteredData = memberList.filter((item) =>
      item.login.toLowerCase().includes(searchValue.toLowerCase())
    );

    setmemberData(filteredData);
  };

  return (
    <form
      onSubmit={formSubmit}
      className={`searchform ${theme == "light" ? "themelight" : "themedark"}`}
    >
      <input
        value={searchValue}
        onChange={(e) => {
          setsearchValue(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
};
export default SearchBar;
