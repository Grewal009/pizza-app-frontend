import { useSelector } from "react-redux";
import { IoNotifications } from "react-icons/io5";
import AdminPanelOrder from "./AdminPanelOrder";

const AdminPanel = () => {
  const user = useSelector((store) => store.user.loggedInUser);
  console.log("user ==>> ", user);
  if (user.length == 0 || user?.[0]?.email != "admin@pizzas.no") {
    return <h3 className="text-center mt-5">No order found!!!</h3>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orders = useSelector((store) => store.orderAdmin.orderItems);
  console.log("orders :==>> ", orders);

  return (
    <div className="w-full  px-2 py-5">
      <div>
        <div className="flex justify-center gap-5 ">
          <div className="">
            <IoNotifications
              size={25}
              className="relative top-0 left-28 text-red-600"
            />

            <button className="min-w-64 w-auto  h-10  bg-slate-500 text-slate-100 text-lg font-medium rounded-lg hover:bg-slate-600 hover:font-semibold z-20">
              New Order Received <span className="font-bold">10</span>
            </button>
          </div>
          <div>
            <IoNotifications
              size={25}
              className="relative top-0 left-28 text-red-600"
            />
            <button className="min-w-64 w-auto h-10  bg-slate-500 text-slate-100 text-lg font-medium rounded-lg  hover:bg-slate-600 hover:font-semibold">
              Pending Payment
            </button>
          </div>

          <div>
            <IoNotifications
              size={25}
              className="relative top-0 left-28 text-red-600"
            />
            <button className="min-w-64 w-auto h-10  bg-slate-500 text-slate-100 text-lg font-medium rounded-lg  hover:bg-slate-600 hover:font-semibold">
              Pending Delivery
            </button>
          </div>
        </div>

        <div className="w-auto flex justify-center my-10">
          <table className="shadow-lg bg-white border-collapse text-center">
            <thead>
              <tr className="">
                <th className="bg-slate-200 border text-center px-4 py-2">
                  Order ID
                </th>
                <th className="bg-slate-200 border text-center px-4 py-2">
                  Customer ID
                </th>

                <th className="bg-slate-200 border text-center px-4 py-2">
                  Order Date & Time
                </th>
                <th className="bg-slate-200 border text-center px-4 py-2">
                  Total Amount (kr)
                </th>
                <th className="bg-slate-200 border text-center px-4 py-2">
                  Payment Status
                </th>
                <th className="bg-slate-200 border text-center px-4 py-2">
                  Delivery Status
                </th>
              </tr>
            </thead>
            <tbody className=" flex-col-reverse">
              {orders?.[0]?.map((i) => (
                <AdminPanelOrder {...i} key={i.orderId} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
