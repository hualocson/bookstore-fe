import { axiosInstance } from "@/apis/configs";

/**
 *
 * @typedef {Object} CartItem
 * @property {number} id
 * @property {number} productId
 * @property {number} quantity
 * @property {number} price
 * @property {string} checked
 *
 * @param {Object} props
 * @param {number} props.productId
 * @param {number} props.quantity
 * @returns {Promise<{data: CartItem?, error: any}>}
 */
const addToCart = async ({ productId, quantity = 1 }) => {
  try {
    const response = await axiosInstance.post("/carts", {
      productId,
      quantity,
    });
    return {
      data: response.cartItem,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export { addToCart };
