import {
  getCategories,
  getCategoryById,
} from "@/store/features/categories/categories-selector";
import categoriesReducer, {
  setCategories,
} from "@/store/features/categories/categories-slice";

export { categoriesReducer, getCategories, getCategoryById, setCategories };
