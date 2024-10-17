import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import emptycart from "../assets/emptycart.png";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.itemsadded);
  const totalAmount = cartItems.reduce((acc, cur) => cur.p * cur.q + acc, 0);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  if (cartItems.length == 0) {
    return (
      <div className="flex justify-center items-center flex-col my-10">
        <h3 className="text-xl text-gray-500 font-bold">Your cart is empty</h3>
        <img src={emptycart} className="w-1/3" />
      </div>
    );
  }
  return (
    <div className="w-full px-2">
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
              <th className="bg-slate-200 border text-left px-8 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((i, index) => (
              <CartItem {...i} key={index} />
            ))}
          </tbody>
          <tfoot className="hover:bg-gray-50">
            <tr>
              <td className="border px-8 py-4" colSpan={4}>
                <b>Total amount to be paid:</b>
              </td>
              <td className="border px-8 py-4" colSpan={2}>
                <b>{totalAmount} NOK</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center gap-5">
        <button
          onClick={clearCartHandler}
          className="w-32 h-10  bg-red-600 text-slate-100 text-xl font-semibold rounded-lg hover:border-4 hover:border-red-700 hover:font-bold shadow-inner "
        >
          Clear Cart
        </button>
        <button className="w-32 h-10  bg-green-600 text-slate-100 text-xl font-semibold rounded-lg hover:border-4 hover:border-green-700 hover:font-bold">
          Send Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
