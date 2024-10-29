import { createSlice } from "@reduxjs/toolkit";

const adminOrdersSlice = createSlice({
  name: "orderAdmin",
  initialState: {
    orderItems: [],
  },
  reducers: {
    addAdminOrder: (state, action) => {
      state.orderItems.push(action.payload);
    },
    clearAdminOrder: (state) => {
      state.orderItems.length = 0;
    },
  },
});

export const { addAdminOrder, clearAdminOrder } = adminOrdersSlice.actions;
export default adminOrdersSlice.reducer;
