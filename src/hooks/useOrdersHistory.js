import fetcher from "@/apis/configs";
import useSWR from "swr";

const useOrdersHistory = () => {
  const { data, error, isLoading, mutate } = useSWR("/orders", fetcher().get);

  return {
    data: {
      orders: data?.orders ?? [],
      orderItems: data?.orderItems ?? [],
    },
    isLoading,
    error,
    mutate,
  };
};

export default useOrdersHistory;
