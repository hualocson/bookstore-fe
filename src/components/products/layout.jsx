import MainLayout from "@/components/layout/main-layout";

import CategoriesListing from "@/components/products/categories-listing";

const ProductsPageLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-10">
        <aside className="col-span-2 col-start-2">
          <CategoriesListing />
        </aside>
        <div className="col-span-8 col-start-4">{children}</div>
      </div>
    </MainLayout>
  );
};

export default ProductsPageLayout;
