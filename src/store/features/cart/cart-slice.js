import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  length: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLength: (state, action) => {
      state.length = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLength } = cartSlice.actions;

export default cartSlice.reducer;
