import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h2>opps Someting went wrong {error.message}</h2>
    </>
  );
};
export default Error;
