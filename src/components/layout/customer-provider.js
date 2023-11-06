import useUser from "@/hooks/useUser";

const CustomerProvider = ({ children }) => {
  useUser();

  return <>{children}</>;
};

export default CustomerProvider;
