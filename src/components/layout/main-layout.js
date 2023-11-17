import TopNav from "@/components/layout/top-nav";

import Footer from "@/components/landing-page/footer";

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
      <Footer />
    </>
  );
};

export default MainLayout;
