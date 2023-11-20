import MainLayout from "@/components/layout/main-layout";

import CategoriesListing from "@/components/products/categories-listing";

const ProductsPageLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 place-items-start gap-10">
        <aside className="sticky top-[104px] col-span-2 col-start-2 min-h-[calc(100vh-325px)]">
          <CategoriesListing />
        </aside>
        <div className="col-span-8 col-start-4 py-6">{children}</div>
      </div>
    </MainLayout>
  );
};

export default ProductsPageLayout;
