import fetcher from "@/apis/configs";
import useSWR from "swr";

const useProducts = (search = "") => {
  const { data, error, isLoading, mutate } = useSWR(
    search && search !== "" ? `/products?search=${search}` : "/products",
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
