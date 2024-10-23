import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customerDetails: [],
  },
  reducers: {
    addCustomerDetails: (state, action) => {
      state.customerDetails.push(action.payload);
    },
    clearCustomerDetails: (state) => {
      state.customerDetails.length = 0;
    },
  },
});

export const { addCustomerDetails, clearCustomerDetails } =
  customerSlice.actions;
export default customerSlice.reducer;
