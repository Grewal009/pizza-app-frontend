import { useEffect, useState } from "react";
import { items } from "./constants";

const usePizzaMenu = (id) => {
  const [item, setItem] = useState(null);

  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setItem(items?.[id - 1]);
  };

  return item;
};

export default usePizzaMenu;
