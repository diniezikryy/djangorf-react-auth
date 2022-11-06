import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetRegisted: (state) => {
      state.registered = false;
    },
  },
});

export const { resetRegisted } = userSlice.actions;

export default userSlice.reducer;
