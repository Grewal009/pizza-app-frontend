import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import orderReducer from "./orderSlice.js";
import customerReducers from "./customerSlice.js";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    customer: customerReducers,
  },
});

export default appStore;
