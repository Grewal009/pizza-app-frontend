import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import emptycart from "../assets/emptycart.png";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { addOrder } from "../utils/orderSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.itemsadded);

  //const cItems = useSelector((store) => store.cart.itemsadded);
  console.log("cartItems: ", cartItems);
  //console.log("cItems: ", cItems);
  const totalAmount = cartItems.reduce(
    (acc, cur) => cur.pricePerPiece * cur.quantity + acc,
    0
  );

  const user = useSelector((store) => store.user.loggedInUser);

  const orderdetails = useSelector((store) => store.order.orderItems);
  console.log("orderdetails: ", orderdetails);

  const newOrder = {
    customerId: 1000, // Example customer ID
    orderDateTime: new Date().toISOString(),

    totalAmount: totalAmount,
    paymentStatus: "Pending",
    deliveryStatus: "Pending",
    orderDetails: [...cartItems],

    /* [
      {
        itemId: 1,
        size: "M",
        quantity: 2,
        pricePerPiece: 50.0,
      },
      {
        itemId: 1,
        size: "L",
        quantity: 1,
        pricePerPiece: 100.0,
      },
    ], */
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const orderHandler = async () => {
    //order request to api
    try {
      const response = await fetch("http://localhost:5122/pizzas/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        const data1 = await response.json();
        console.log("Order created successfully: ", data1);
      } else {
        const errorData1 = await response.json();
        console.error("Error => create order: ", errorData1);
      }
    } catch (error) {
      console.error("Network error:", error);
    }

    dispatch(addOrder(cartItems));
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
        {user.length == 0 ? (
          <button className="w-32 h-10  bg-green-600 text-slate-100 text-xl font-semibold rounded-lg hover:border-4 hover:border-green-700 hover:font-bold">
            <Link to="/login">Sign in</Link>
          </button>
        ) : (
          <button
            onClick={orderHandler}
            className="w-32 h-10  bg-green-600 text-slate-100 text-xl font-semibold rounded-lg hover:border-4 hover:border-green-700 hover:font-bold"
          >
            <Link to="/orderreceived">Send Order</Link>
          </button>
        )}
      </div>
      {user.length == 0 ? (
        <p className="text-center my-2">(Sign in required to place order)</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
