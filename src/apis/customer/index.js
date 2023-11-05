import { axiosInstance } from "@/apis/configs";
import endpoints from "@/apis/customer/endpoints";

const fillCustomerDetails = async ({ firstName, lastName, phoneNumber }) => {
  try {
    const customer = await axiosInstance.post(endpoints.fillCustomerDetails, {
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
    const customer = await axiosInstance.patch(
      endpoints.updateCustomerDetails,
      {
        firstName,
        lastName,
        phoneNumber,
      }
    );
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
