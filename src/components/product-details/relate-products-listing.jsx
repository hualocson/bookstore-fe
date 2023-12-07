import { useRouter } from "next/router";

import useFavorites from "@/hooks/useFavorites";
import { Button } from "@nextui-org/react";

import RelatedProductItem from "@/components/product-details/related-product-item";

const RelateProductsListing = ({ products }) => {
  const { data: userFavorites } = useFavorites({
    type: "full",
  });
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-6 border-t border-grayscale-300 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold"> Related books </h2>
        {products.length > 4 && (
          <Button
            color="primary"
            variant="flat"
            onPress={() =>
              router.push(`/products/categories/${products[0].categorySlug}`)
            }
          >
            View more
          </Button>
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products &&
          products.slice(0, 4).map((product) => {
            return (
              <RelatedProductItem
                isFavorite={userFavorites.find(
                  (item) => item.productId === product.id
                )}
                product={product}
                key={product.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RelateProductsListing;
