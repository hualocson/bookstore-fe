import MainLayout from "@/components/layout/main-layout";

import SettingLayout from "@/components/settings/layout";
import Sidebar from "@/components/settings/sidebar";
import WishListLayout from "@/components/settings/wishlist/wishlist";

const AddressesPage = () => {
  return (
    <MainLayout>
      <SettingLayout>
        <div className="grid grid-cols-12">
          <Sidebar />
          <WishListLayout />
        </div>
      </SettingLayout>
    </MainLayout>
  );
};

export default AddressesPage;
