import { useEffect } from "react";

import fetcher from "@/apis/configs";
import endpoints from "@/apis/customer/endpoints";
import useSWR from "swr";

import { setUser } from "@/store/features/user";
import { useDispatch } from "@/store/redux-hook";

const useCustomer = () => {
  const { data, error, isLoading, mutate } = useSWR(
    endpoints.getCustomer,
    fetcher().get
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.customer) {
      dispatch(setUser(data?.customer));
    }
  }, [dispatch, data?.customer]);

  return {
    data: data?.customer ?? {},
    isLoading,
    error,
    mutate,
  };
};

export default useCustomer;
