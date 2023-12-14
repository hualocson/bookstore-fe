import { useEffect } from "react";

import { useRouter } from "next/router";

import fetcher from "@/apis/configs";
import { handleErrorResponse } from "@/lib/utils";
import useSWR from "swr";

import { setUser } from "@/store/features/user";
import { setLoading } from "@/store/features/user/user-slice";
import { useDispatch } from "@/store/redux-hook";

const useUser = () => {
  const router = useRouter();
  const { data, error, isLoading, mutate } = useSWR(
    "/customers",
    fetcher().get
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.customer) {
      dispatch(setUser(data?.customer));
    }
  }, [dispatch, data?.customer]);

  useEffect(() => {
    if (error) {
      dispatch(setLoading(false));
      const { statusCode } = handleErrorResponse(error);

      if (statusCode == 401) {
      }
    } else dispatch(setLoading(isLoading));
  }, [dispatch, isLoading, error]);

  return {
    data: data?.customer ?? {},
    isLoading,
    error,
    mutate,
  };
};

export default useUser;
