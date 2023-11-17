import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { HomeIcon, UserCog } from "lucide-react";

import { getUser } from "@/store/features/user";
import { useSelector } from "@/store/redux-hook";

const SettingHeader = () => {
  const { firstName, lastName } = useSelector(getUser);
  return (
    <div className="my-10 flex items-center justify-between">
      <Breadcrumbs>
        <BreadcrumbItem startContent={<HomeIcon className="h-[1em]" />}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<UserCog className="h-[1em]" />}>
          My account
        </BreadcrumbItem>
      </Breadcrumbs>
      <div>
        <span>Welcome!</span>{" "}
        <span className="font-bold text-primary">
          {firstName && lastName
            ? `${firstName} ${lastName}`
            : "Please update your profile"}
        </span>
      </div>
    </div>
  );
};

export default SettingHeader;
