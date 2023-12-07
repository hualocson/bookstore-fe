import { axiosInstance } from "@/apis/configs";

/**
 *
 * @param {Object} props
 * @param {number} props.addressId
 * @param {Number} [props.shippingFee=0]
 * @param {number} [props.couponId]
 * @returns
 */
const createOrder = async ({ addressId, shippingFee = 0, couponId }) => {
  try {
    const response = await axiosInstance.post("/orders", {
      addressId,
      shippingFee,
      couponId,
    });
    return {
      data: response.newOrder,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

const createPayPalOrder = async ({ shippingFee = 0 }) => {
  try {
    const response = await axiosInstance.post("/orders/paypal", {
      shippingFee,
    });
    return {
      data: response.order,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

const createPayPalCapture = async ({ orderId }) => {
  try {
    const response = await axiosInstance.post(
      `/orders/paypal/${orderId}/capture`
    );
    return {
      data: response.order,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export { createOrder, createPayPalCapture, createPayPalOrder };
