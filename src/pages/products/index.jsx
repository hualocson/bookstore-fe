import { useSearchParams } from "next/navigation";

import { useProducts } from "@/hooks";

import ProductsPageLayout from "@/components/products/layout";
import ProductsListing from "@/components/products/products-listing";

const ProductsPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const { data } = useProducts(search);

  return (
    <ProductsPageLayout>
      {search && search !== "" && (
        <div className="mb-4">
          <span>Result for key word: </span>
          <span>{`"${search}"`}</span>
        </div>
      )}
      <ProductsListing data={data} />
    </ProductsPageLayout>
  );
};

export default ProductsPage;
