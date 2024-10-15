import { useSelector } from "react-redux";
import ItemLayout from "./ItemLayout";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.itemsadded);
  return (
    <div className="w-full h-[580px] px-2">
      <div className="w-auto flex justify-center my-10">
        <table className="shadow-lg bg-white border-collapse text-center">
          <thead>
            <tr>
              <th className="bg-slate-200 border text-left px-8 py-4">
                ITEM ID
              </th>
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
              <ItemLayout {...i} key={index} />
            ))}
          </tbody>
          <tfoot className="hover:bg-gray-50">
            <tr>
              <td className="border px-8 py-4" colSpan={4}>
                Total amount to paid:
              </td>
              <td className="border px-8 py-4">72183</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
