import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItem = (prop) => {
  const { itemId, s, q, p } = prop;
  const orderItems = useSelector((store) => store.cart.itemsadded);
  const filterItem = orderItems.filter((i) => i.itemId == itemId && i.s == s);
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItem(filterItem[0]));
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-8 py-4">{itemId}</td>
      <td className="border px-8 py-4">{s}</td>

      <td className="border px-8 py-4">{p}</td>
      <td className="border px-8 py-4">{q}</td>
      <td className="border px-8 py-4">{p * q}</td>
      <td className="border px-8 py-4">
        <MdDelete
          size={20}
          onClick={removeItemHandler}
          className="cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default CartItem;
