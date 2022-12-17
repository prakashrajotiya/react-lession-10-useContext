import { useState } from "react";
import StateCity from "../constant/statecity.json";
import useCities from "./useCities";
const Location = () => {
  const [stateName, setstateName] = useState("Gujarat");
  const citylist = useCities(stateName);
  // function updateState(e) {}
  return (
    <div>
      <select
        value={stateName}
        onChange={(e) => {
          setstateName(e.target.value);
        }}
      >
        {Object.keys(StateCity).map((state) => {
          return (
            <option key={state} value={state}>
              {state}
            </option>
          );
        })}
      </select>
      <select>
        {citylist.map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Location;
