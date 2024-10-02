import Item from "./Item";
import { items } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [pizzaItems, setPizzaItems] = useState(items);

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

      <div className="flex flex-wrap justify-center gap-5">
        {pizzaItems.map((pizza) => (
          <Item {...pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
