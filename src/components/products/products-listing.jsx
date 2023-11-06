import { useProducts } from "@/hooks";

import ProductItem from "@/components/products/product-item";

const ProductsListing = () => {
  const { data } = useProducts();

  return (
    <div className="grid grid-cols-9 gap-4">
      {data.map((product) => {
        return (
          <div className="col-span-3" key={product.id}>
            <ProductItem product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsListing;
