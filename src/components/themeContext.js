import { createContext } from "react";
const themeContext = createContext({ theme: "system", settheme: () => {} });
export default themeContext;
