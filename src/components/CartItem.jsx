import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../utils/cartSlice";
import { items } from "../utils/constants";

const CartItem = (prop) => {
  const { itemId, size, quantity, pricePerPiece } = prop;
  const orderItems = useSelector((store) => store.cart.itemsadded);
  const filterItem = orderItems.filter(
    (i) => i.itemId == itemId && i.size == size
  );

  console.log("filterItem: ", filterItem[0]?.itemId);
  const itemInfo = items.filter((i) => i.id == filterItem[0]?.itemId);
  console.log("itemInfo: ", itemInfo[0].name);

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItem(filterItem[0]));
  };

  const minusHandler = () => {
    dispatch(decreaseQuantity(filterItem[0]));
  };
  const plusHandler = () => {
    dispatch(increaseQuantity(filterItem[0]));
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-8 py-4 text-left">{itemInfo[0].name}</td>
      <td className="border px-8 py-4 text-left">{size}</td>

      <td className="border px-8 py-4">{pricePerPiece}</td>
      <td className="border px-8 py-4">
        <div className="flex">
          <button
            onClick={minusHandler}
            className=" w-10 font-bold bg-gray-400"
          >
            -
          </button>
          <label className="w-16 bg-slate-200 text-center">{quantity}</label>
          <button onClick={plusHandler} className=" w-10 font-bold bg-gray-400">
            +
          </button>
        </div>
      </td>
      <td className="border px-8 py-4">{pricePerPiece * quantity}</td>
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
