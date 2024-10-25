import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCustomerInfo, addCustomerInfo } from "../utils/customersSlice";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const customers = useSelector((store) => store.customers.customerInfo);
  console.log("customers: ", customers?.[0]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (!emailRegex.test(email)) {
      console.log("enter valid email");
    } else {
      console.log("email valid");
      let alreadyRegistered = customers?.[0].filter((c) => c.email == email);
      if (alreadyRegistered?.length != 0) {
        console.log("email already registered");
      }
    }
  };

  return (
    <div className="absolute w-full min-h-60 h-2/4 px-2 flex justify-center ">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="bg-slate-200"
          type="text"
          placeholder="Name"
        />

        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-slate-200"
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-slate-200"
          type="password"
          placeholder="Password"
        />
        <div className="flex justify-center">
          <button
            onClick={signupHandler}
            className="bg-gray-500 w-60 px-8 py-2 "
          >
            Sign up
          </button>
        </div>
        <p className="text-sm text-blue-600 text-right">
          <Link to="/login">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
