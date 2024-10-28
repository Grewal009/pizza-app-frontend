import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUser: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.loggedInUser.push(action.payload);
    },
    clearUser: (state) => {
      state.loggedInUser.length = 0;
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
