import env from "@/lib/constants/vars.js";
import axios from "axios";

/**
 * ===== Common Axios Instance
 */
export const axiosInstance = axios.create({
  baseURL: env.BASE_URL,
  withCredentials: true,
  credentials: "include",
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Check if the response contains a 'success' property
    if (response.data && response.data.success) {
      // Return only the data if the response is successful
      return response.data.data;
    } else {
      // If 'success' is false, reject the response
      return Promise.reject(response);
    }
  },
  (error) => {
    // Handle errors here (e.g., network issues)
    return Promise.reject(error);
  }
);

export const axiosInstanceSSR = axios.create({
  baseURL: env.SSR_BASE_URL,
  withCredentials: true,
});

axiosInstanceSSR.interceptors.response.use(
  (response) => {
    // Check if the response contains a 'success' property
    if (response.data && response.data.success) {
      // Return only the data if the response is successful
      return response.data.data;
    } else {
      // If 'success' is false, reject the response
      return Promise.reject(response);
    }
  },
  (error) => {
    // Handle errors here (e.g., network issues)
    return Promise.reject(error);
  }
);

/**
 *
 * @description This fetcher is used to fetch data from the API. It is used in the SWR hook. (SWR syntax)
 * @refercence https://swr.vercel.app/docs/arguments#fetcher
 *
 */
const fetcher = () => {
  const apiInstance = axiosInstance;
  return {
    get: async (...args) => apiInstance.get(...args).then((res) => res),
    // SWR ex: useSWR(['/gamer-center/rosters/get-upcoming-matches', [matchId]], fetcher().getWithParams)
    getWithParams: async ([url, params]) => {
      let paramString = `${url}/${params.join("/")}`;
      return apiInstance.get(paramString).then((res) => res);
    },

    post: async (...args) => apiInstance.post(...args).then((res) => res),
    put: async (...args) => apiInstance.put(...args).then((res) => res),
    delete: async (...args) => apiInstance.delete(...args).then((res) => res),
  };
};

export default fetcher;
