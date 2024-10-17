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
      state.itemsadded.splice(action.payload, 1);

      //state.itemsadded.pop();
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
    increaseQuantity: (state, action) => {
      const { itemId, s } = action.payload;
      const existingItem = state.itemsadded.find(
        (i) => i.itemId == itemId && i.s == s
      );
      if (existingItem) {
        existingItem.q += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { itemId, s } = action.payload;
      const existingItem = state.itemsadded.find(
        (i) => i.itemId == itemId && i.s == s
      );
      if (existingItem) {
        if (existingItem.q == 0) {
          return;
        }
        existingItem.q -= 1;
      }
    },
    clearCart: (state, action) => {
      state.itemsadded.length = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
