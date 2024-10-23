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
    if (size1 == "" || quantity1 == 0) {
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
          pricePerPiece: res[0].price,
        })
      );
    } else {
      dispatch(
        addItem({
          itemId: menu.id,
          size: size1,
          quantity: quantity1,
          pricePerPiece: res[0].price,
        })
      );
    }
    setQuantity1(0);
  };

  const addTocart = () => {
    if (size1 == "" || quantity1 == 0) {
      return;
    }
    const res = menu.menus.filter((m) => m.size == size1);
    console.log("log: ", res);

    const alreadyAdded = od.filter(
      (i) => i.size == size1 && i.itemId == menu.id
    );
    console.log("alreadyAdded: ", alreadyAdded);
    /* const alreadyAddedOtherItem = od.filter(
      (i) => i.s == size && i.itemId != menu.id
    ); */
    /* if (od.length == 0) {
      od.push({ itemId: menu.id, s: size, q: quantity, p: res[0].price });
      setOrder(od);
    } else */

    if (alreadyAdded.length != 0) {
      alreadyAdded[0].quantity += quantity1;
      console.log("log11");
    } else {
      od.push({
        itemId: menu.id,
        size: size1,
        quantity: quantity1,
        pricePerPiece: res[0].price,
      });
      //setOrder(od);
    }

    //console.log("order: ", order);
    console.log("menu: ", menu);
    setQuantity1(0);
  };

  if (menu == null) {
    return;
  }

  return (
    <div className="w-full  p-2">
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
                  setSize1(e.target.value);
                  setQuantity1(0);
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
                {quantity1}
              </label>
              <button
                onClick={plus}
                className="mx-5 w-10 font-bold bg-gray-400"
              >
                +
              </button>
            </div>

            <button onClick={handleAddItem} className="bg-slate-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
