import fetcher from "@/apis/configs";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, isLoading, mutate } = useSWR("/products", fetcher().get);

  return {
    data: data?.products ?? [],
    isLoading,
    error,
    mutate,
  };
};

export default useProducts;
