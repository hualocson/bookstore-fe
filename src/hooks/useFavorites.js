import fetcher from "@/apis/configs";
import useSWR from "swr";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/favorites",
    fetcher().get
  );

  return {
    data: data?.favorites ?? [],
    isLoading,
    error,
    mutate,
  };
};

export default useFavorites;
