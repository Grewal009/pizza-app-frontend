import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCustomerInfo, addCustomerInfo } from "../utils/customersSlice";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const customers = useSelector((store) => store.customers.customerInfo);
  console.log("customers: ", customers?.[0]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const newError = {};

  console.log("name: ", name);

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

    if (name == "") {
      newError.name = "name required";
    } else if (name.length < 5) {
      newError.name = "minimum 5 characters name required";
    }

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

    if (password == "" || password.length < 6) {
      newError.password = "six characters password required";
    }
    setError(newError);
  };
  console.log("error ==>> ", error);
  return (
    <div className="absolute w-full min-h-60 h-3/4 px-2 flex justify-center ">
      <div className="flex flex-col items-center justify-center flex-nowrap overflow-x-scroll ">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
          type="text"
          placeholder="Name"
        />
        {!error.name ? (
          <p className=" invisible text-sm">name</p>
        ) : (
          <p className="text-red-500 text-sm ">{error.name}</p>
        )}
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
            className=" w-60 px-8 py-3 mt-3 rounded-xl bg-green-600 text-lg font-bold text-slate-100"
          >
            Sign up
          </button>
        </div>
        <p className="text-sm text-blue-600 mt-2">
          <Link to="/login">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
