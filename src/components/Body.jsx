import Item from "./Item";
import { items } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const json = await data.json();
    console.log(json);
    //update state variable here
    setPizzaItems(items);
  };

  return (
    <div className="w-full h-[800px] p-2">
      <h1>Body</h1>
      <h1>Search</h1>
      <div className="flex justify-center gap-5 mb-5">
        <button
          className="w-32 h-10 bg-slate-300 rounded-lg text-lg cursor-pointer font-medium  hover:font-bold"
          onClick={() => {
            const filteredItems = items.filter((i) => i.vegetarian == true);
            setPizzaItems(filteredItems);
          }}
        >
          Vegan
        </button>
        <button
          className="w-32 h-10 bg-slate-300 rounded-lg text-lg cursor-pointer font-medium hover:font-bold"
          onClick={() => {
            const filteredItems = items.filter((i) => i.glutenFree == true);
            setPizzaItems(filteredItems);
          }}
        >
          Gluten-free
        </button>
        <button
          className="w-32 h-10 bg-slate-300 rounded-lg text-lg cursor-pointer font-medium hover:font-bold"
          onClick={() => {
            setPizzaItems(items);
          }}
        >
          Show All
        </button>
      </div>

      {pizzaItems.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-5">
          {pizzaItems.map((pizza) => (
            <Item {...pizza} key={pizza.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
