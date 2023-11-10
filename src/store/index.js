import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "@/store/features/cart";
import { categoriesReducer } from "@/store/features/categories";
import { userReducer } from "@/store/features/user";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
