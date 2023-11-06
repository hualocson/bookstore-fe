import { useEffect } from "react";

import fetcher from "@/apis/configs";
import useSWR from "swr";

import { setLength } from "@/store/features/cart";
import { useDispatch } from "@/store/redux-hook";

/**
 *
 * @param {Object} props
 * @param {"length" | "full"} props.type
 * @returns
 */
const useCart = ({ type = "length" }) => {
  const { data, error, isLoading, mutate } = useSWR(
    type === "length" ? "/carts/length" : "/carts",
    fetcher().get
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "length") {
      dispatch(setLength(data?.length ?? 0));
    }
  }, [dispatch, type, data?.length]);

  return {
    data: data?.length ?? 0,
    isLoading,
    error,
    mutate,
  };
};

export default useCart;
