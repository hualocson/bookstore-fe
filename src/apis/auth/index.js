const { axiosInstance } = require("@/apis/configs");

const login = async (email) => {
  try {
    await axiosInstance.post("/auth/login", { email });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

const signup = async (email) => {
  try {
    await axiosInstance.post("/auth/signup", {
      email,
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

const verifyToken = async (email, token) => {
  try {
    await axiosInstance.post("/auth/verify-email", { email, token });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export { login, signup, verifyToken };
