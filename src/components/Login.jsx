/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCustomerInfo, addCustomerInfo } from "../utils/customersSlice";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const customers = useSelector((store) => store.customers.customerInfo);
  console.log("customers: ", customers?.[0]);

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
  return (
    <div className="absolute w-full min-h-60 h-2/4 px-2 flex justify-center ">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <input
          className="bg-slate-200 invisible"
          type="text"
          placeholder="Name"
        />
        <input className="bg-slate-200" type="text" placeholder="Email" />
        <input
          className="bg-slate-200"
          type="password"
          placeholder="Password"
        />
        <div className="flex justify-center">
          <button className="bg-gray-500 w-60 px-8 py-2 ">Log in</button>
        </div>
        <p
          onClick={() => setIsLoginForm(!isLoginForm)}
          className="text-sm text-blue-600 text-right"
        >
          <Link to="/signup">Create new account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
