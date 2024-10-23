import { useDispatch, useSelector } from "react-redux";
import OrderDetail from "./OrderDetail";
import {
  addCustomerDetails,
  clearCustomerDetails,
} from "../utils/customerSlice";
import { useEffect } from "react";

const Details = () => {
  const dispatch = useDispatch();
  let customerdetail = useSelector((store) => store.customer.customerDetails);
  console.log("customerdetail =>> ", customerdetail[0]?.orders);
  /* const allOrder = useSelector((store) => store.order.orderItems);
  console.log("allOrder =>> ", allOrder);
  console.log(allOrder); */

  const allOrder = customerdetail[0]?.orders;

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5122/pizzas/customer/1001");
    const json = await data.json();
    console.log(json);
    dispatch(clearCustomerDetails());
    dispatch(addCustomerDetails(json));
  };

  if (customerdetail == undefined || allOrder == undefined) {
    return <h3>No order found!!!!!!</h3>;
  }

  /* if (allOrder.length == 0) {
    return <h3>No order found!!!</h3>;
  } */

  return (
    <div className="w-full px-2 flex flex-col-reverse">
      {allOrder.map((o) => (
        <OrderDetail {...o} key={o.orderId} />
      ))}
    </div>
  );
};

export default Details;
