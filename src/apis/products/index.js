import { axiosInstance } from "@/apis/configs";

const getProducts = async () => {
  try {
    const products = await axiosInstance.get("/products");
    return {
      data: products,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export { getProducts };
