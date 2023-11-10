import { useEffect } from "react";

import fetcher from "@/apis/configs";
import useSWR from "swr";

import { setCategories } from "@/store/features/categories/categories-slice";
import { useDispatch } from "@/store/redux-hook";

const useCategories = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/categories",
    fetcher().get
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.categories) {
      dispatch(setCategories(data.categories));
    }
  }, [dispatch, data?.categories]);

  return {
    data: data?.categories ?? [],
    isLoading,
    error,
    mutate,
  };
};

export default useCategories;
