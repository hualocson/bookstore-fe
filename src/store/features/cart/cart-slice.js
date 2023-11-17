import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  length: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLength: (state, action) => {
      state.length = action.payload;
    },

    setCartItems: (state, action) => {
      const { cartItems } = action.payload;
      state.cartItems = cartItems;
      state.length = cartItems.length;
      const total = cartItems
        .filter((item) => item.checked)
        .reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
      state.total = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLength, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
