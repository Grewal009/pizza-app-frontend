import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import orderReducer from "./orderSlice.js";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});

export default appStore;
