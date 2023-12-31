import SettingHeader from "@/components/settings/header";

const SettingLayout = ({ children }) => {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl">
      <SettingHeader />
      {children}
    </div>
  );
};

export default SettingLayout;
