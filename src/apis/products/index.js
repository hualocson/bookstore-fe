import { axiosInstance } from "@/apis/configs";
import endpoints from "@/apis/products/endpoints";

const getProducts = async () => {
  try {
    const products = await axiosInstance.get(endpoints.getProducts);
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
