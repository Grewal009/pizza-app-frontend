import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import orderReducer from "./orderSlice.js";
import customerReducers from "./customerSlice.js";
import customersReducers from "./customersSlice.js";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    customer: customerReducers,
    customers: customersReducers,
  },
});

export default appStore;
