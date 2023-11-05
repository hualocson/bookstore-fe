import fetcher from "@/apis/configs";
import endpoints from "@/apis/products/endpoints";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, isLoading, mutate } = useSWR(
    endpoints.getProducts,
    fetcher().get
  );

  return {
    data: data?.products ?? [],
    isLoading,
    error,
    mutate,
  };
};

export default useProducts;
