import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div className="w-full h-[800px] px-2">
      <h2>Oops!!!</h2>
      <h2>Something went wrong!!!</h2>
      <h2>
        {status}: {statusText}
      </h2>
    </div>
  );
};

export default Error;
