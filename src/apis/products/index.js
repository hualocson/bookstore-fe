import { axiosInstance, axiosInstanceSSR } from "@/apis/configs";

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

const getProductDetails = async (slug, ssr, cookie) => {
  const instance = ssr ? axiosInstanceSSR : axiosInstance;
  instance.defaults.headers.Cookie = cookie;
  try {
    const response = await instance.get(`/products/${slug}`);
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

export { getProductDetails, getProducts };
