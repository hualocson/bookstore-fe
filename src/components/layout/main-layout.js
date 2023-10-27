import TopNav from "@/components/layout/top-nav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
