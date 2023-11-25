import MainLayout from "@/components/layout/main-layout";

import SettingLayout from "@/components/settings/layout";
import Sidebar from "@/components/settings/sidebar";
import WhistListLayout from "@/components/settings/whistlist/whistlist";

const AddressesPage = () => {
  return (
    <MainLayout>
      <SettingLayout>
        <div className="grid grid-cols-12">
          <Sidebar />
          <WhistListLayout />
        </div>
      </SettingLayout>
    </MainLayout>
  );
};

export default AddressesPage;
