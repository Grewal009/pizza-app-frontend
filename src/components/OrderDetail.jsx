/* eslint-disable react/prop-types */
//import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const OrderDetail = (props) => {
  /* const order = useSelector(
    (store) => store.order.orderItems[store.order.orderItems.length - 1]
  ); */

  const {
    orderId,
    orderDateTime,
    totalAmount,
    paymentStatus,
    deliveryStatus,
    orderDetails,
  } = props;

  const dateTime = new Date(orderDateTime).toLocaleString("no-NO", {
    year: "numeric",
    month: "long", // 'long' for full month names, or '2-digit'/'numeric' for numbers
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour clock format
  });

  /*   let totalAmount;
  if (order) {
    totalAmount = order.reduce(
      (acc, cur) => cur.pricePerPiece * cur.quantity + acc,
      0
    );
  } */

  /*  const orderNumber = 1001;
  const paymentStatus = "pending";
  const delivertStatus = "pending"; */

  /*   if (!order) {
    return <h3>No order found!!!</h3>;
  } */
  return (
    <div className="w-full px-2">
      <div className=" w-auto flex justify-center my-10 gap-20 ">
        <h3>Order Number: {orderId}</h3>
        <h3>Order Date: {dateTime}</h3>
        <h3>Total Amount: {totalAmount}</h3>
      </div>
      <div className=" w-auto flex justify-center -mt-8 -mb-7 gap-20 ">
        <h3>Payment Status: {paymentStatus}</h3>
        <h3>Delivery Status: {deliveryStatus}</h3>
      </div>
      <div className="w-auto flex justify-center my-10">
        <table className="shadow-lg bg-white border-collapse text-center">
          <thead>
            <tr className="">
              <th className="bg-slate-200 border text-left px-8 py-4">ITEM</th>
              <th className="bg-slate-200 border text-left px-8 py-4">SIZE</th>

              <th className="bg-slate-200 border text-left px-8 py-4">
                PRICE PER PIECE
              </th>
              <th className="bg-slate-200 border text-center px-8 py-4">
                QUANTITY
              </th>
              <th className="bg-slate-200 border text-left px-8 py-4">
                PRICE FOR ALL PIECES
              </th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((i, index) => (
              <OrderItem {...i} key={index} />
            ))}
          </tbody>
          <tfoot className="hover:bg-gray-50">
            <tr>
              <td className="border px-8 py-4" colSpan={4}>
                <b>Total amount:</b>
              </td>
              <td className="border px-8 py-4" colSpan={2}>
                <b>{totalAmount} NOK</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
