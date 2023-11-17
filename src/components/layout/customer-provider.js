import useCart from "@/hooks/useCart";
import useUser from "@/hooks/useUser";

const CustomerProvider = ({ children }) => {
  useUser();
  useCart({ type: "length" });

  return <>{children}</>;
};

export default CustomerProvider;
