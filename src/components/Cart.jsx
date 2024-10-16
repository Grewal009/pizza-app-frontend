import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.itemsadded);
  const totalAmount = cartItems.reduce((acc, cur) => cur.p * cur.q + acc, 0);
  return (
    <div className="w-full h-[580px] px-2">
      <div className="w-auto flex justify-center my-10">
        <table className="shadow-lg bg-white border-collapse text-center">
          <thead>
            <tr className="">
              <th className="bg-slate-200 border text-left px-8 py-4">ITEM</th>
              <th className="bg-slate-200 border text-left px-8 py-4">SIZE</th>

              <th className="bg-slate-200 border text-left px-8 py-4">
                PRICE PER PIECE
              </th>
              <th className="bg-slate-200 border text-left px-8 py-4">
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
    </div>
  );
};

export default Cart;
