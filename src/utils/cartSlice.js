/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsadded: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.itemsadded.push(action.payload);
    },
    removeItem: (state, action) => {
      state.itemsadded.pop();
    },
    clearCart: (state, action) => {
      state.itemsadded.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
