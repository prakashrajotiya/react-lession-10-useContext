import { createContext } from "react";
const userContext = createContext({
  email: "pk@gmail.com",
  setemail: () => {},
});
export default userContext;
