import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div className="w-full  px-2">
      <h2 className="font-bold text-xl text-gray-700">Oops!!!</h2>
      <h2 className="font-bold text-xl text-gray-700">
        Something went wrong!!!
      </h2>
      <h2 className="font-bold text-xl text-gray-700">
        {status}: {statusText}
      </h2>
    </div>
  );
};

export default Error;
