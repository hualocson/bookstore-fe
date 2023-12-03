import { axiosInstance } from "@/apis/configs";

const addToFavorite = async ({ productId }) => {
  try {
    const response = await axiosInstance.post("/favorites", { productId });
    return {
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

const removeFromFavorite = async ({ productId }) => {
  try {
    const response = await axiosInstance.delete(`/favorites/${productId}`);
    return {
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export { addToFavorite, removeFromFavorite };
