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
    updateAdminOrder: (state, action) => {
      const order = action.payload;
      console.log("order ==>> ", order);
      const existingOrderIndex = state.orderItems[0].findIndex(
        (o) => o.orderId == order.orderId
      );
      console.log("existingOrderIndex ==>> ", existingOrderIndex);
      if (existingOrderIndex != -1) {
        state.orderItems[0].splice(existingOrderIndex, 1, order);
      }
    },
  },
});

export const { addAdminOrder, clearAdminOrder, updateAdminOrder } =
  adminOrdersSlice.actions;
export default adminOrdersSlice.reducer;
