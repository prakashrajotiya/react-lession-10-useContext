import stateObj from "../constant/statecity.json";
const useCities = (state) => {
  console.log("state", state);
  return stateObj[state];
};
export default useCities;
