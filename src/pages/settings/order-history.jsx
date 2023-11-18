import MainLayout from "@/components/layout/main-layout";

import SettingLayout from "@/components/settings/layout";
import Sidebar from "@/components/settings/sidebar";

const AddressesPage = () => {
  return (
    <MainLayout>
      <SettingLayout>
        <div className="grid grid-cols-12">
          <Sidebar />
        </div>
      </SettingLayout>
    </MainLayout>
  );
};

export default AddressesPage;