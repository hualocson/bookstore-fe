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

const updateCartItemQuantity = async ({ productId, quantity }) => {
  try {
    const response = await axiosInstance.patch(`/carts/${productId}/quantity`, {
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

const removeCartItem = async ({ productId }) => {
  try {
    await axiosInstance.delete(`/carts/${productId}`);
    return {
      data: true,
      error: null,
    };
  } catch (error) {
    return {
      data: false,
      error,
    };
  }
};

const toggleCheckedCartItem = async ({ productId }) => {
  try {
    const response = await axiosInstance.patch(`/carts/${productId}/toggle`);
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

export {
  addToCart,
  removeCartItem,
  toggleCheckedCartItem,
  updateCartItemQuantity,
};
