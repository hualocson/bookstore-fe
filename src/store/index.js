import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "@/store/features/categories/categories-slice";
import { userReducer } from "@/store/features/user";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    user: userReducer,
  },
});
