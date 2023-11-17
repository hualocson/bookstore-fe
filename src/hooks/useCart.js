import { useEffect } from "react";

import fetcher from "@/apis/configs";
import useSWR from "swr";

import { setLength } from "@/store/features/cart";
import { getCart } from "@/store/features/cart/cart-selector";
import { setCartItems } from "@/store/features/cart/cart-slice";
import { useDispatch, useSelector } from "@/store/redux-hook";

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

  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "length") {
      dispatch(setLength(data?.length ?? 0));
    } else {
      dispatch(setCartItems({ cartItems: data?.cartItems ?? [] }));
    }
  }, [dispatch, type, data?.length, data?.cartItems]);

  return {
    data: type === "length" ? data?.length ?? 0 : cart,
    isLoading,
    error,
    mutate,
  };
};

export default useCart;
