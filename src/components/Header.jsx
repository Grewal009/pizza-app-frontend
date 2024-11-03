//import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { userLogin } from "../utils/constants.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../utils/userSlice.js";
import { clearCustomerDetails } from "../utils/customerSlice.js";
import { clearAdminOrder } from "../utils/adminOrdersSlice.js";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  //const [login, setLogin] = useState(userLogin.login);
  const cartItems = useSelector((store) => store.cart.itemsadded);
  console.log("cartItems: ", cartItems);
  let totalQuantity = 0;
  if (cartItems) {
    totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  }

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.loggedInUser);

  console.log(userLogin);
  //console.log(login);

  return (
    <>
      <div className="bg-yellow-300 w-full h-20 flex justify-between px-5 items-center">
        <img src={LOGO_URL} className="w-14 h-12" />
        <ul className="flex items-center text-2xl font-bold text-red-600">
          <li className="cursor-pointer w-20 mx-5 hover:font-extrabold hover:text-[26px] text-center">
            <Link to="/">Home</Link>
          </li>

          <li className="cursor-pointer w-20 mx-5 hover:font-extrabold hover:text-[26px] text-center ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="flex cursor-pointer w-16 mx-5 hover:font-bold hover:text-[26px] text-center">
            <Link to="/cart" className="flex justify-center items-center">
              <IoCartOutline size={45} className="text-lg hover:text-2xl" />
              <label className="-ml-2 px-2 bg-red-600 text-white rounded-full text-center">
                {totalQuantity}
              </label>
            </Link>
          </li>

          {user.length != 0 ? (
            <li className="flex cursor-pointer w-[165px] ml-5  hover:font-extrabold hover:text-[26px] text-center">
              <Link to="/orderdetails">Order Details</Link>
            </li>
          ) : (
            ""
          )}

          {user?.[0]?.email == "admin@pizzas.no" ? (
            <li className="flex cursor-pointer w-40 mx-5 hover:font-extrabold hover:text-[26px] text-center">
              <Link to="/adminpanel">Admin Panel</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="flex">
          {user.length != 0 ? (
            <button
              className="w-24 h-10  bg-red-500 text-white text-xl font-semibold rounded-lg hover:border-4 hover:border-red-600 hover:font-bold shadow-inner "
              onClick={() => {
                dispatch(clearUser());
                dispatch(clearCustomerDetails());
                dispatch(clearAdminOrder());
                localStorage.removeItem("jwtToken");
              }}
            >
              <Link to="/">Sign out</Link>
            </button>
          ) : (
            <button
              className="w-24 h-10  bg-green-600 text-xl font-semibold rounded-lg text-white hover:border-4 hover:border-green-700 hover:font-bold"
              /* onClick={() => {
                setLogin(!login);
                userLogin.login = !login;
              }} */
            >
              <Link to="/login">Sign in</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
