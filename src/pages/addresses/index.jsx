import MainLayout from "@/components/layout/main-layout";

import AddressHeader from "@/components/addresses/addresses-header";
import EditAddressForm from "@/components/addresses/edit-address-form";
import Footer from "@/components/landing-page/footer";
import SettingLayout from "@/components/settings/layout";
import Sidebar from "@/components/settings/sidebar";

const SettingsPage = () => {
  return (
    <MainLayout>
      <SettingLayout>
        <AddressHeader />
        <div className="grid grid-cols-12">
          <Sidebar />
          <EditAddressForm />
        </div>
      </SettingLayout>
      <Footer />
    </MainLayout>
  );
};

export default SettingsPage;
