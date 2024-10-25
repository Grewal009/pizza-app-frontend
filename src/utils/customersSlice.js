import { createSlice } from "@reduxjs/toolkit";

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    customerInfo: [],
  },
  reducers: {
    addCustomerInfo: (state, action) => {
      state.customerInfo.push(action.payload);
    },
    clearCustomerInfo: (state) => {
      state.customerInfo.length = 0;
    },
  },
});

export const { addCustomerInfo, clearCustomerInfo } = customersSlice.actions;
export default customersSlice.reducer;
