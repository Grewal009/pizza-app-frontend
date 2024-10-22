import { items } from "../utils/constants";

const OrderItem = (prop) => {
  const { itemId, size, quantity, pricePerPiece } = prop;
  const itemInfo = items.filter((i) => i.id == itemId);
  console.log("itemInfo: ", itemInfo[0]?.name);

  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-8 py-4 text-left">{itemInfo[0]?.name}</td>
      <td className="border px-8 py-4 text-left">{size}</td>

      <td className="border px-8 py-4">{pricePerPiece}</td>
      <td className="border px-8 py-4">
        <label className="">{quantity}</label>
      </td>
      <td className="border px-8 py-4">{pricePerPiece * quantity}</td>
    </tr>
  );
};

export default OrderItem;
