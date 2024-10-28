import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import Order from "./components/Order.jsx";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer.jsx";
import Details from "./components/Details.jsx";
import OrderReceived from "./components/OrderReceived.jsx";
import Signup from "./components/Signup.jsx";
import NewAccount from "./components/NewAccount.jsx";
import AdminSignin from "./components/AdminSignin.jsx";

const About = lazy(() => import("./components/About.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/order/:id",
        element: <Order />,
      },
      {
        path: "/orderdetails",
        element: <Details />,
      },
      {
        path: "/orderreceived",
        element: <OrderReceived />,
      },
      {
        path: "/newAccount",
        element: <NewAccount />,
      },
      {
        path: "/adminsignin",
        element: <AdminSignin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
