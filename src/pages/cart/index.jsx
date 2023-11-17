import CartPageLayout from "@/components/cart/cart";
import Footer from "@/components/landing-page/footer";
import MainLayout from "@/components/layout/main-layout";
const ProductsDetailPage = () => {
  return (
    <MainLayout>
        <CartPageLayout/>
      <Footer/>
    </MainLayout>
  );
};
export default ProductsDetailPage;