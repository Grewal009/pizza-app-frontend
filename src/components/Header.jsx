import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { userLogin } from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(userLogin.login);
  const cartItems = useSelector((store) => store.cart.itemsadded);
  console.log("cartItems: ", cartItems);
  let totalQuantity = 0;
  if (cartItems) {
    totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  }

  console.log(userLogin);
  console.log(login);

  return (
    <>
      <div className="bg-yellow-200 w-full h-20 flex justify-between px-5 items-center">
        <img src={LOGO_URL} className="w-14 h-12" />
        <ul className="flex items-center text-2xl font-bold text-orange-700">
          <li className="cursor-pointer w-20 mx-5 hover:font-extrabold hover:text-[26px] text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer w-20 mx-5 hover:font-extrabold hover:text-[26px] text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer w-20 mx-5 hover:font-extrabold hover:text-[26px] text-center">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="flex cursor-pointer w-20 mx-5 hover:font-extrabold hover:text-[26px] text-center">
            <Link to="/cart">
              Cart
              <label className="ml-1 px-2 bg-orange-700 text-white rounded-xl text-center">
                {totalQuantity}
              </label>
            </Link>
          </li>

          <li className="flex cursor-pointer w-44 mx-5 hover:font-extrabold hover:text-[26px] text-center">
            <Link to="/orderdetails">Order Details</Link>
          </li>
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
              <Link to="/">Logout</Link>
            </button>
          ) : (
            <button
              className="w-24 h-10  bg-green-600 text-xl font-semibold rounded-lg hover:border-4 hover:border-green-700 hover:font-bold"
              onClick={() => {
                setLogin(!login);
                userLogin.login = !login;
              }}
            >
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
