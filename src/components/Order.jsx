/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import usePizzaMenu from "../utils/usePizzaMenu";
import { useState } from "react";
import { od } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const Order = () => {
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.itemsadded);
  const { id } = useParams();
  console.log(id);
  const [size1, setSize1] = useState("");
  const [quantity1, setQuantity1] = useState(0);

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
    setQuantity1(quantity1 + 1);
  };
  const minus = () => {
    if (quantity1 == 0) {
      setQuantity1(0);
      return;
    }
    setQuantity1(quantity1 - 1);
  };

  const handleAddItem = () => {
    const newError = {};
    if (size1 == "") {
      newError.size = "select item";
    }
    if (quantity1 == 0) {
      newError.quantity = "select quantity";
    }
    setError(newError);
    if (Object.keys(newError).length != 0) {
      console.log("newError ==>> ", newError);
      return;
    }
    const res = menu.menus.filter((m) => m.size == size1);
    console.log("log: ", res);
    const alreadyAdded = cartItems.filter(
      (i) => i.size == size1 && i.itemId == menu.id
    );
    console.log("alreadyAdded: ", alreadyAdded);
    const index = cartItems.indexOf(alreadyAdded[0]);
    console.log("index: ", index);

    if (index != -1) {
      console.log("log11");

      dispatch(
        updateItem({
          itemId: menu.id,
          size: size1,
          quantity: quantity1,
          pricePerPiece: res[0]?.price,
        })
      );
    } else {
      dispatch(
        addItem({
          itemId: menu.id,
          size: size1,
          quantity: quantity1,
          pricePerPiece: res[0]?.price,
        })
      );
    }
    setQuantity1(0);
    setSize1("");
  };

  if (menu == null) {
    return;
  }

  return (
    <div className="w-full  ">
      <div className="p-5 flex flex-col items-center gap-3">
        <img
          src={menu.image}
          className="w-[500px] h-80 object-cover rounded-3xl"
        />
        <div className="w-[700px]">
          <h1 className="text-5xl font-bold text-gray-700 pb-2">{menu.name}</h1>

          {menu?.ingredients == undefined || menu?.ingredients == "" ? (
            ""
          ) : (
            <div className="flex gap-4 text-xl text-gray-700 leading-6 text-justify">
              <p>
                <b>ingredients:</b>
              </p>
              <p>{menu?.ingredients}</p>
            </div>
          )}
          {menu?.allergens == undefined || menu?.allergens == "" ? (
            ""
          ) : (
            <div className="flex gap-8 text-xl text-gray-700 leading-6 text-justify">
              <p className="w-24">
                <b>allergens:</b>
              </p>
              <p>{menu?.allergens}</p>
            </div>
          )}

          <div className="flex justify-center mt-2">
            <div>
              <label className="w-auto"></label>
              <select
                value={size1}
                onChange={(e) => {
                  setSize1(e.target.value);
                }}
                className="mx-5 w-52 px-2 py-2 bg-yellow-200 text-center  rounded-xl hover:bg-yellow-300"
              >
                <option value="">Select your choice</option>
                {menu.menus.map((m, index) => (
                  <option key={index} value={m.size}>
                    {m.size} {m.price} kr
                  </option>
                ))}
              </select>
            </div>

            <div className="flex ">
              <button
                onClick={minus}
                className="ml-8 w-10 h-10 text-xl font-bold bg-yellow-200 rounded-full flex justify-center items-center hover:bg-yellow-300"
              >
                -
              </button>
              <label className="w-10 flex text-lg font-bold justify-center items-center">
                {quantity1}
              </label>
              <button
                onClick={plus}
                className="mr-5 w-10 h-10 text-lg font-bold bg-yellow-200 rounded-full flex justify-center items-center hover:bg-yellow-300"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddItem}
              className="ml-8 bg-yellow-200 px-5 py-2 rounded-2xl hover:bg-yellow-300"
            >
              Add to cart
            </button>
          </div>
          <div className="flex justify-around">
            {!error.size ? (
              <p className=" invisible text-sm -ml-20">select item</p>
            ) : (
              <p className=" text-red-500 text-sm -ml-20"> select item</p>
            )}

            {!error.quantity ? (
              <p className=" invisible text-sm -ml-96">select quantity</p>
            ) : (
              <p className=" text-red-500 text-sm -ml-96">
                &nbsp;select quantity{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
