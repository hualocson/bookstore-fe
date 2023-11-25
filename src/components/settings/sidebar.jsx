import Link from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils";
import { UserCog } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="col-span-3 flex flex-col gap-y-3 text-lg">
      <div className="flex items-baseline justify-start gap-2">
        <UserCog size={20} />
        <p className="text-xl font-bold">Manage My account</p>
      </div>
      <div className="ml-6 flex flex-col gap-2">
        <Link
          href={"/settings"}
          className={cn(router.asPath === "/settings" && "text-primary-500")}
        >
          My Profile
        </Link>
        <Link
          href={"/settings/addresses"}
          className={cn(
            router.asPath === "/settings/addresses" && "text-primary-500"
          )}
        >
          Addresses
        </Link>
        <Link
          href={"/settings/order-history"}
          className={cn(
            router.asPath === "/settings/order-history" && "text-primary-500"
          )}
        >
          Order History
        </Link>
        <Link
          href={"/settings/whistlist"}
          className={cn(
            router.asPath === "/settings/whislist" && "text-primary-500"
          )}
        >
          My Whistlist
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
