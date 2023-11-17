import { createSelector } from "@reduxjs/toolkit";

/**
 *
 * @param {import("@/types/redux.d.ts").RootState} state
 * @returns
 */
export const getCategories = (state) => state.categories.data;

/**
 *
 * @param {import("@/types/redux.d.ts").RootState} state
 * @returns
 */
export const getAllCategories = (state) =>{
  const data = state.categories.data;

  const allCategories = data.reduce((acc, category) => {
    acc.push(category);
    acc.push(...category.children);
    return acc;
  }
  , []);

  return allCategories;
}

/**
 *
 * @param {number} categoryId
 * @returns
 */
export const getCategoryById = (categoryId) =>
  createSelector([getCategories], (categories) => {
    // First, try to find the category in parent categories
    const categoryInParent = categories.find(
      (category) => category.id === categoryId
    );

    if (categoryInParent) {
      return [categoryInParent];
    }

    // If not found in parent, search in the children arrays
    for (const category of categories) {
      const categoryInChildren = category.children.find(
        (child) => child.id === categoryId
      );
      if (categoryInChildren) {
        return [categoryInChildren, category];
      }
    }

    // Return [] if not found
    return [];
  });
