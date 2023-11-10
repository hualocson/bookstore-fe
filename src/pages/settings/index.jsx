import MainLayout from "@/components/layout/main-layout";

import Footer from "@/components/landing-page/footer";
import EditProfileForm from "@/components/settings/edit-profile-form";
import SettingHeader from "@/components/settings/header";
import SettingLayout from "@/components/settings/layout";
import Sidebar from "@/components/settings/sidebar";

const SettingsPage = () => {
  return (
    <MainLayout>
      <SettingLayout>
        <SettingHeader />
        <div className="grid grid-cols-12">
          <Sidebar />
          <EditProfileForm />
        </div>
      </SettingLayout>
      <Footer />
    </MainLayout>
  );
};

export default SettingsPage;
