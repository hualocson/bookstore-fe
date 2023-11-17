import { axiosInstance } from "@/apis/configs";

const createAddress = async ({
  name,
  streetAddress,
  city,
  state,
  postalCode,
  country,
  phoneNumber,
}) => {
  try {
    const response = await axiosInstance.post("/addresses", {
      name,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      phoneNumber,
    });
    return {
      data: response.newAddress,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

const updateAddress = async ({
  id,
  name,
  streetAddress,
  city,
  state,
  postalCode,
  country,
  phoneNumber,
}) => {
  try {
    const response = await axiosInstance.patch(`/addresses/${id}`, {
      name,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      phoneNumber,
    });
    return {
      data: response.address,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export { createAddress, updateAddress };
