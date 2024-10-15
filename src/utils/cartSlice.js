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
    updateItem: (state, action) => {
      const { itemId, s, q, p } = action.payload;
      const existingItem = state.itemsadded.find(
        (i) => i.itemId == itemId && i.s == s
      );
      if (existingItem) {
        existingItem.q += q;
      }
    },
    clearCart: (state, action) => {
      state.itemsadded.length = 0;
    },
  },
});

export const { addItem, removeItem, updateItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
