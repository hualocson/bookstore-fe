import { getProductsByCategory } from "@/apis/products";

import ProductsPageLayout from "@/components/products/layout";
import ProductsListing from "@/components/products/products-listing";

const ProductsByCategory = ({ data }) => {
  return (
    <ProductsPageLayout>
      <ProductsListing data={data} />
    </ProductsPageLayout>
  );
};

export default ProductsByCategory;

export const getServerSideProps = async (context) => {
  const { cookie } = context.req.headers;
  const { slug } = context.params;
  try {
    const { data, error } = await getProductsByCategory(slug, true, cookie);
    if (error) {
      return {
        props: {
          data: [],
        },
      };
    }
    return {
      props: {
        data: data.products,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
};
