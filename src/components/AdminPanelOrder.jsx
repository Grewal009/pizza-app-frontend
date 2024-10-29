import { useState } from "react";

const AdminPanelOrder = (prop) => {
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
  const updatedOrder = {
    orderId: orderId,
    customerId: customerId,
    orderDateTime: orderDateTime,
    totalAmount: totalAmount,
    paymentStatus: payment,
    deliveryStatus: delivery,
  };

  console.log("updatedOrder ==>> ", updatedOrder);
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
            onChange={(e) => {
              setPayment(e.target.value);
            }}
            className="bg-slate-400"
          >
            <option value="pending">pending</option>
            <option value="paid">paid</option>
          </select>

          <label className="ml-6">Delivery Status:</label>
          <select
            onChange={(e) => {
              setDelivery(e.target.value);
            }}
            className="bg-slate-400"
          >
            <option value="pending">pending</option>
            <option value="delivered">delivered</option>
          </select>

          <button className="ml-6">update</button>
        </td>
      </tr>
    </>
  );
};

export default AdminPanelOrder;
