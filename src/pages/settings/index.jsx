import MainLayout from "@/components/layout/main-layout";

import EditProfileForm from "@/components/settings/edit-profile-form";
import SettingLayout from "@/components/settings/layout";
import Sidebar from "@/components/settings/sidebar";

const SettingsPage = () => {
  return (
    <MainLayout>
      <SettingLayout>
        <div className="relative grid grid-cols-12">
          <Sidebar />
          <EditProfileForm />
        </div>
      </SettingLayout>
    </MainLayout>
  );
};

export default SettingsPage;
