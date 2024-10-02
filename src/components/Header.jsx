import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { userLogin } from "../utils/constants.js";

const Header = () => {
  const [login, setLogin] = useState(userLogin.login);
  console.log(userLogin);
  console.log(login);
  return (
    <>
      <div className="bg-yellow-200 w-full h-20 flex justify-between px-5 items-center">
        <img src={LOGO_URL} className="w-14 h-12" />
        <ul className="flex items-center gap-5 text-2xl font-bold text-orange-700">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Cart</li>
        </ul>
        <div className="flex">
          {login ? (
            <button
              className="w-24 h-10  bg-red-500 text-xl font-semibold rounded-lg hover:border-4 hover:border-red-600 hover:font-bold shadow-inner "
              onClick={() => {
                setLogin(!login);
                userLogin.login = !login;
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="w-24 h-10  bg-green-600 text-xl font-semibold rounded-lg hover:border-4 hover:border-green-700 hover:font-bold"
              onClick={() => {
                setLogin(!login);
                userLogin.login = !login;
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
