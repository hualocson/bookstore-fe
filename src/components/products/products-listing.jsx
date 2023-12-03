import { useEffect, useState } from "react";

import useFavorites from "@/hooks/useFavorites";

import EmptyList from "@/components/products/empty-list";
import Filter from "@/components/products/filter";
import ProductItem from "@/components/products/product-item";

const ProductsListing = ({ data }) => {
  const { data: userFavorites } = useFavorites({
    type: "full",
  });

  const [products, setProducts] = useState(data ?? []);

  const onApplyFilter = (filterValue) => {
    if (data && data.length > 0) {
      const { priceRange, sort } = filterValue;
      const [min, max] = priceRange;
      const filteredData = data.filter((item) => {
        return (
          Number(item.price) >= min * 100 && Number(item.price) <= max * 100
        );
      });

      if (sort.size > 0) {
        const sortedData = filteredData.sort((a, b) => {
          if (sort.has("price_asc")) {
            return a.price - b.price;
          } else if (sort.has("price_desc")) {
            return b.price - a.price;
          } else if (sort.has("name_asc")) {
            return a.name.localeCompare(b.name);
          } else if (sort.has("name_desc")) {
            return b.name.localeCompare(a.name);
          }
        });
        setProducts(sortedData);
        return;
      }
      setProducts(filteredData);
      return;
    }
  };

  useEffect(() => {
    setProducts(data ?? []);
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <Filter onApplyFilter={onApplyFilter} />
      {products.length === 0 ? (
        <EmptyList message={"No products"} />
      ) : (
        <div className="grid grid-cols-9 gap-4">
          {products.map((product) => {
            return (
              <div className="col-span-3" key={product.id}>
                <ProductItem
                  product={product}
                  isFavorite={userFavorites.find(
                    (item) => item.productId === product.id
                  )}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsListing;
