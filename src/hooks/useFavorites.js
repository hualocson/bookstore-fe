import fetcher from "@/apis/configs";
import useSWR from "swr";

/**
 *
 * @param {object} props
 * @param {"full" | "length"} [props.type="length"]
 * @returns
 */
const useFavorites = ({ type = "full" }) => {
  const { data, error, isLoading, mutate } = useSWR(
    type === "length" ? "/favorites/length" : "/favorites",
    fetcher().get
  );

  return {
    data:
      type === "length" ? data?.favoritesLength ?? 0 : data?.favorites ?? [],
    isLoading,
    error,
    mutate,
  };
};

export default useFavorites;
