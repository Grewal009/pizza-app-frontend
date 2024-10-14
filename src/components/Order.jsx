/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import usePizzaMenu from "../utils/usePizzaMenu";
import { useState } from "react";
import { od } from "../utils/constants";

const Order = () => {
  const { id } = useParams();
  console.log(id);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [order, setOrder] = useState(od);

  //console.log(size);

  //using custom hook
  const menu = usePizzaMenu(id);
  //console.log(menu);

  /*  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []); */

  /*  const fetchData = async () => {
    const data = await fetch("http://localhost:5190/pizzas.no/" + id);
    const json = await data.json();
    console.log(json);
    setItem(json);
  }; */

  const plus = () => {
    setQuantity(quantity + 1);
  };
  const minus = () => {
    if (quantity == 0) {
      setQuantity(0);
      return;
    }
    setQuantity(quantity - 1);
  };

  const addTocart = () => {
    if (size == "" || quantity == 0) {
      return;
    }
    const res = menu.menus.filter((m) => m.size == size);
    console.log("log: ", res);
    od.push({ item: menu, s: size, q: quantity, p: res[0].price });
    setOrder(od);
    console.log("order: ", order);
    setQuantity(0);
  };

  if (menu == null) {
    return;
  }

  return (
    <div className="w-full h-[580px] p-2">
      <div className="p-5 flex justify-start gap-5">
        <img
          src={menu.image}
          className="w-[500px] h-80 object-cover rounded-3xl"
        />
        <div className="w-[700px]">
          <h1 className="text-5xl font-bold text-gray-700 pb-3">{menu.name}</h1>

          <div className="flex gap-4 text-xl text-gray-700 leading-6 pb-1 text-justify">
            <p>
              <b>ingredients:</b>
            </p>
            <p>{menu.ingredients}</p>
          </div>
          <div className="flex gap-8 text-xl text-gray-700 leading-6 pb-1 text-justify">
            <p className="w-24">
              <b>allergens:</b>
            </p>
            <p>{menu.allergens}</p>
          </div>

          <div className="flex justify-between">
            <div>
              <label className="w-auto">Select your pizza</label>
              <select
                onChange={(e) => {
                  setSize(e.target.value);
                  setQuantity(0);
                }}
                className="mx-5 w-40"
              >
                <option value="">select any</option>
                {menu.menus.map((m, index) => (
                  <option key={index} value={m.size}>
                    {m.size} {m.price} kr
                  </option>
                ))}
              </select>
            </div>

            <div className="flex">
              <button
                onClick={minus}
                className="mx-5 w-10 font-bold bg-gray-400"
              >
                -
              </button>
              <label className="w-20 bg-slate-200 text-center">
                {quantity}
              </label>
              <button
                onClick={plus}
                className="mx-5 w-10 font-bold bg-gray-400"
              >
                +
              </button>
            </div>

            <button onClick={addTocart} className="bg-slate-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
