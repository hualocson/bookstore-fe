import { getProductDetails } from "@/apis/products";
import dayjs from "dayjs";

import MainLayout from "@/components/layout/main-layout";

import ProductDetailSection from "@/components/product-details/product-info";

const ProductDetailPage = ({ product }) => {
  console.log(product);
  return (
    <MainLayout>
      <ProductDetailSection {...product} />
    </MainLayout>
  );
};

export default ProductDetailPage;

export const getServerSideProps = async (context) => {
  const { cookie } = context.req.headers;
  const { slug } = context.params;
  try {
    const { data } = await getProductDetails(slug, true, cookie);
    return {
      props: {
        product: {
          ...data.product,
          publicationDate: dayjs(data.product.publicationDate).format(
            "MMMM DD, YYYY"
          ),
        },
      },
    };
  } catch (error) {}
};
