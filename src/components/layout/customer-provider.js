import useCustomer from "@/hooks/useCustomer";

const CustomerProvider = ({ children }) => {
  useCustomer();

  return <>{children}</>;
};

export default CustomerProvider;
