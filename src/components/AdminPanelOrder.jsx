import { useState } from "react";
import { updateAdminOrder } from "../utils/adminOrdersSlice";
import { useDispatch } from "react-redux";

const AdminPanelOrder = (prop) => {
  const [count, setCount] = useState(0);
  const {
    orderId,
    customerId,
    orderDateTime,
    totalAmount,
    paymentStatus,
    deliveryStatus,
  } = prop;

  const [payment, setPayment] = useState(paymentStatus);
  const [delivery, setDelivery] = useState(deliveryStatus);

  const dispatch = useDispatch();

  const updatedOrder = {
    orderId: orderId,
    customerId: customerId,
    orderDateTime: orderDateTime,
    totalAmount: totalAmount,
    paymentStatus: payment,
    deliveryStatus: delivery,
  };

  console.log("updatedOrder ==>> ", updatedOrder);

  const updateHandler = async () => {
    //PUT request to API
    try {
      const response = await fetch(
        "http://localhost:5122/pizzas/orders/" + orderId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
          body: JSON.stringify(updatedOrder),
        }
      );

      if (response.ok) {
        const data1 = await response.json();
        console.log("Order updated successfully: ", data1);
        setCount(count + 1);
        dispatch(updateAdminOrder(updatedOrder));
      } else {
        const errorData1 = await response.json();
        console.error("Error => update order: ", errorData1);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-50 cursor-pointer">
        <td className="border px-4 py-2 ">{orderId}</td>
        <td className="border px-4 py-2 ">{customerId}</td>

        <td className="border px-4 py-2">
          {new Date(orderDateTime + "Z").toLocaleString("no-NO")}
        </td>
        <td className="border px-4 py-2">{totalAmount}</td>
        <td className="border px-4 py-2">{paymentStatus}</td>
        <td className="border px-4 py-2">{deliveryStatus}</td>
      </tr>
      <tr className="bg-slate-200">
        <td className="border px-4 py-2" colSpan={6}>
          <label>Payment Status:</label>
          <select
            value={payment}
            onChange={(e) => {
              setPayment(e.target.value);
            }}
            className="bg-slate-50 w-28 text-center  rounded-xl"
          >
            <option value="pending">pending</option>
            <option value="paid">paid</option>
          </select>

          <label className="ml-6">Delivery Status:</label>
          <select
            value={delivery}
            onChange={(e) => {
              setDelivery(e.target.value);
            }}
            className="bg-slate-50 w-28 text-center  rounded-xl"
          >
            <option value="pending">pending</option>
            <option value="delivered">delivered</option>
          </select>

          <button
            onClick={updateHandler}
            className="ml-6 w-20  bg-gray-500 text-slate-100 text-base font-normal rounded-lg  hover:font-medium shadow-inner hover:bg-gray-600"
          >
            update
          </button>
        </td>
      </tr>
    </>
  );
};

export default AdminPanelOrder;
