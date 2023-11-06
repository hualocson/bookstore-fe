import { axiosInstance } from "@/apis/configs";

const fillCustomerDetails = async ({ firstName, lastName, phoneNumber }) => {
  try {
    const customer = await axiosInstance.post("/profile", {
      firstName,
      lastName,
      phoneNumber,
    });
    return {
      data: customer,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

const updateCustomerDetails = async ({ firstName, lastName, phoneNumber }) => {
  try {
    const customer = await axiosInstance.patch("/profile", {
      firstName,
      lastName,
      phoneNumber,
    });
    return {
      data: customer,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export { fillCustomerDetails, updateCustomerDetails };
