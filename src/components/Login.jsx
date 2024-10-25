/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCustomerInfo, addCustomerInfo } from "../utils/customersSlice";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const customers = useSelector((store) => store.customers.customerInfo);
  console.log("customers: ", customers?.[0]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const newError = {};

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5122/pizzas/customer");
    const json = await data.json();
    console.log(json);
    dispatch(clearCustomerInfo());
    dispatch(addCustomerInfo(json));
  };

  const signupHandler = (e) => {
    e.preventDefault();

    if (email == "") {
      newError.email = "email required";
    } else if (!emailRegex.test(email)) {
      newError.email = "enter valid email";
      console.log("enter valid email");
    } else {
      console.log("email valid");
      let alreadyRegistered = customers?.[0].filter((c) => c.email == email);
      if (alreadyRegistered?.length != 0) {
        console.log("email already registered");
        newError.email = "email already registered";
      }
    }

    if (password == "") {
      newError.password = "password required";
    }
    setError(newError);
  };
  console.log("error ==>> ", error);
  return (
    <div className="absolute w-full min-h-60 h-3/4 px-2 flex justify-center ">
      <div className="flex flex-col items-center justify-center flex-nowrap overflow-x-scroll ">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
          type="text"
          placeholder="Email"
        />
        {!error.email ? (
          <p className=" invisible text-sm">email</p>
        ) : (
          <p className="text-red-500 text-sm">{error.email}</p>
        )}
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
          type="password"
          placeholder="Password"
        />
        {!error.password ? (
          <p className=" invisible text-sm">password</p>
        ) : (
          <p className="text-red-500 text-sm">{error.password}</p>
        )}
        <div className="flex justify-center">
          <button
            onClick={signupHandler}
            className=" w-60 px-8 py-3 mt-3 rounded-xl bg-blue-600 text-lg font-bold text-slate-100"
          >
            Sig in
          </button>
        </div>
        <p className="text-sm text-blue-600 mt-2">
          <Link to="/signup">Create new account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
