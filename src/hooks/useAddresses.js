import fetcher from "@/apis/configs";
import useSWR from "swr";

const useAddresses = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/addresses",
    fetcher().get
  );
  return {
    data: data?.addresses ?? [],
    isLoading,
    error,
    mutate,
  };
};

export default useAddresses;
