import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import orderReducer from "./orderSlice.js";
import customerReducers from "./customerSlice.js";
import customersReducers from "./customersSlice.js";
import userReducer from "./userSlice.js";
import adminOrdersSlice from "./adminOrdersSlice.js";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    customer: customerReducers,
    customers: customersReducers,
    user: userReducer,
    orderAdmin: adminOrdersSlice,
  },
});

export default appStore;
