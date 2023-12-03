import useFavorites from "@/hooks/useFavorites";

import WishlistItem from "@/components/settings/wishlist/wishlist-item";

const WishListLayout = () => {
  const { data } = useFavorites({
    type: "full",
  });

  return (
    <div className="col-span-9 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <div className="flex flex-col gap-y-2">
        {data.length !== 0 ? (
          data.map((item) => <WishlistItem key={item.id} {...item} />)
        ) : (
          <p className="">No items in wishlist</p>
        )}
      </div>
    </div>
  );
};

export default WishListLayout;
