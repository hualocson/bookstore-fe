import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { HomeIcon, User2 } from "lucide-react";

import { getUser } from "@/store/features/user";
import { useSelector } from "@/store/redux-hook";

const AddressHeader = () => {
  const { firstName, lastName } = useSelector(getUser);
  return (
    <div className="my-10 flex items-center justify-between">
      <Breadcrumbs>
        <BreadcrumbItem startContent={<HomeIcon className="h-[1em]" />}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<User2 className="h-[1em]" />}>
          My account
        </BreadcrumbItem>
      </Breadcrumbs>
      <div>
        <span>Welcome!</span>{" "}
        <span className="font-bold text-primary">
          {firstName && lastName
            ? `${firstName} ${lastName}`
            : "Please update your addresses"}
        </span>
      </div>
    </div>
  );
};

export default AddressHeader;