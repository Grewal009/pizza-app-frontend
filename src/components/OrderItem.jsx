import { items } from "../utils/constants";

const OrderItem = (prop) => {
  const { itemId, s, q, p } = prop;
  const itemInfo = items.filter((i) => i.id == itemId);
  console.log("itemInfo: ", itemInfo[0]?.name);

  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-8 py-4 text-left">{itemInfo[0]?.name}</td>
      <td className="border px-8 py-4 text-left">{s}</td>

      <td className="border px-8 py-4">{p}</td>
      <td className="border px-8 py-4">
        <label className="">{q}</label>
      </td>
      <td className="border px-8 py-4">{p * q}</td>
    </tr>
  );
};

export default OrderItem;
