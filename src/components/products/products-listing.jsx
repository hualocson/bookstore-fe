import EmptyList from "@/components/products/empty-list";
import ProductItem from "@/components/products/product-item";

const ProductsListing = ({ data }) => {
  if (!data || data.length === 0) return <EmptyList message={"No products"} />;

  return (
    <div className="grid grid-cols-9 gap-4">
      {data.map((product) => {
        return (
          <div className="col-span-3" key={product.id}>
            <ProductItem product={product} />
          </div>
        );
      })}
      {data.map((product) => {
        return (
          <div className="col-span-3" key={product.id}>
            <ProductItem product={product} />
          </div>
        );
      })}
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
