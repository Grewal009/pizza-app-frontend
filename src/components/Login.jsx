/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCustomerInfo, addCustomerInfo } from "../utils/customersSlice";

import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const customers = useSelector((store) => store.customers.customerInfo);
  console.log("customers:: ", customers?.[0]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let correctId = 0;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(clearCustomerInfo());
    const data = await fetch("http://localhost:5122/pizzas/customer");
    const json = await data.json();
    console.log(json);

    dispatch(addCustomerInfo(json));
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const newError = {};

    if (email == "") {
      newError.email = "email required";
    } else if (!emailRegex.test(email)) {
      newError.email = "enter valid email";
      console.log("enter valid email");
    }

    if (password == "") {
      newError.password = "password required";
    }

    const correctUser = customers[0].filter((c) => c.email == email);
    console.log("correctUser ==>> ", correctUser);

    if (correctUser?.length == 0) {
      newError.password = "wrong email & password";
    } else {
      let correctEmail = correctUser[0].email;
      let correctPassword = correctUser[0].password;
      correctId = correctUser[0].customerId;
      console.log("cusId: ", correctId, correctEmail);

      if (correctEmail == email && correctPassword == password) {
        apiRequest();
      } else {
        newError.password = "wrong email & password";
      }
    }

    setError(newError);
    console.log("error ==>> ", error);
  };

  const apiRequest = async () => {
    try {
      const response = await fetch("http://localhost:5122/pizzas/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: "sam",
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("jwtToken", data.token); // Store token securely
        console.log("login successful");
        dispatch(addUser({ id: correctId, email: email, token: data.token }));
        navigate("/");
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

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
