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
      const { itemId, size, quantity, pricePerPiece } = action.payload;
      const existingItem = state.itemsadded.find(
        (i) => i.itemId == itemId && i.size == size
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      }
    },
    increaseQuantity: (state, action) => {
      const { itemId, size } = action.payload;
      const existingItem = state.itemsadded.find(
        (i) => i.itemId == itemId && i.size == size
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { itemId, size } = action.payload;
      const existingItem = state.itemsadded.find(
        (i) => i.itemId == itemId && i.size == size
      );
      if (existingItem) {
        if (existingItem.quantity == 0) {
          return;
        }
        existingItem.quantity -= 1;
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
