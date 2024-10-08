/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import usePizzaMenu from "../utils/usePizzaMenu";

const Order = () => {
  const { id } = useParams();
  console.log(id);

  //using custom hook
  const menu = usePizzaMenu(id);

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
        </div>
      </div>
    </div>
  );
};

export default Order;
