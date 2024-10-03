import Item from "./Item";
//import { items } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [filteredPizza, setFilteredPizza] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("render component");
  console.log(searchText);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5190/pizzas.no/");
    const json = await data.json();
    console.log(json);
    //update state variable here
    setPizzaItems(json);
    setFilteredPizza(json);
  };

  return (
    <div className="w-full h-[800px] p-2">
      <div className="flex justify-center gap-5 mb-5">
        <button
          className="w-32 h-10 bg-slate-300 rounded-lg text-lg cursor-pointer font-medium  hover:font-bold"
          onClick={() => {
            const filteredItems = pizzaItems.filter(
              (i) => i.vegetarian == true
            );
            setFilteredPizza(filteredItems);
          }}
        >
          Vegan
        </button>
        <button
          className="w-32 h-10 bg-slate-300 rounded-lg text-lg cursor-pointer font-medium hover:font-bold"
          onClick={() => {
            const filteredItems = pizzaItems.filter(
              (i) => i.glutenFree == true
            );
            setFilteredPizza(filteredItems);
          }}
        >
          Gluten-free
        </button>
        <button
          className="w-32 h-10 bg-slate-300 rounded-lg text-lg cursor-pointer font-medium hover:font-bold"
          onClick={() => {
            setFilteredPizza(pizzaItems);
          }}
        >
          Show All
        </button>
      </div>

      {/* filter items based on search text */}
      <div className="flex justify-center mb-5 gap-3">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="w-72  border-2 pl-4 text-lg rounded-full text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-4 focus:ring-transparent focus:ring-gray-300 outline-4 outline-slate-300"
          placeholder="search..."
        />
        <button
          className="w-14 h-10 -ml-[68px] bg-white hover:bg-gray-100 text-gray-800 font-semibold border-2 border-gray-400 rounded-full shadow"
          onClick={() => {
            const filterItems = pizzaItems.filter((p) =>
              p.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredPizza(filterItems);
          }}
        >
          🔍
        </button>
      </div>

      {pizzaItems.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-5">
          {filteredPizza.map((pizza) => (
            <Item {...pizza} key={pizza.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
