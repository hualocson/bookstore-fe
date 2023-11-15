import TopNav from "@/components/layout/top-nav";

/**
 *
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} [props.mainCustomClass] - custom class for main tag
 * @returns
 */
const MainLayout = ({ children, mainCustomClass }) => {
  return (
    <>
      <TopNav />
      <main className={mainCustomClass}>{children}</main>
    </>
  );
};

export default MainLayout;
