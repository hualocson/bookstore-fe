import MainLayout from "@/components/layout/main-layout";

import AddressesListing from "@/components/settings/addresses/addresses-listing";
import SettingLayout from "@/components/settings/layout";
import Sidebar from "@/components/settings/sidebar";

const AddressesPage = () => {
  return (
    <MainLayout>
      <SettingLayout>
        <div className="grid grid-cols-12">
          <Sidebar />
          {/* <EditAddressForm /> */}
          <AddressesListing />
        </div>
      </SettingLayout>
    </MainLayout>
  );
};

export default AddressesPage;
