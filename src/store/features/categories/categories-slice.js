import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} parentId
 *
 * @typedef {Object} CategoriesState
 * @property {Category[]} data
 */

/**
 * @type {CategoriesState}
 */
const initialState = {
  data: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
