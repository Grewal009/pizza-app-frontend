const AdminPanelOrder = (prop) => {
  const {
    orderId,
    customerId,
    orderDateTime,
    totalAmount,
    paymentStatus,
    deliveryStatus,
  } = prop;
  console.log(orderId);
  return (
    <tr className="hover:bg-gray-50 cursor-pointer">
      <td className="border px-4 py-2 ">{orderId}</td>
      <td className="border px-4 py-2 ">{customerId}</td>

      <td className="border px-4 py-2">
        {new Date(orderDateTime + "Z").toLocaleString("no-NO")}
      </td>
      <td className="border px-4 py-2">{totalAmount}</td>
      <td className="border px-4 py-2">{paymentStatus}</td>
      <td className="border px-4 py-2">{deliveryStatus}</td>
      <td className="border px-4 py-2">
        <button>update</button>
      </td>
    </tr>
  );
};

export default AdminPanelOrder;
