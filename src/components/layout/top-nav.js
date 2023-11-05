import Image from "next/image";
import Link from "next/link";

import TopNavigation from "@/lib/constants/top-nav";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link as NextUILink,
} from "@nextui-org/react";
import { LogOut, Search, Settings, ShoppingCart, User2 } from "lucide-react";

import { getUser } from "@/store/features/user";
import { useSelector } from "@/store/redux-hook";

import logo from "@/resources/images/landing/books-logo.svg";

const TopNav = () => {
  const user = useSelector(getUser);
  return (
    <div className="sticky top-0 z-50 bg-light/20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between py-3">
        <Link className="h-14 w-14" href="/">
          <Image
            src={logo}
            alt="Books Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex items-center justify-around gap-x-4">
          {TopNavigation.map((item) => (
            <Button
              key={item.href}
              as={NextUILink}
              className="text-lg capitalize"
              href={item.href}
              variant="light"
              color="primary"
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-x-2">
          <Button
            className="text-lg capitalize"
            variant="light"
            isIconOnly
            startContent={<Search className="h-5 w-5" />}
          />
          <Button
            className="text-lg capitalize"
            variant="light"
            isIconOnly
            startContent={<ShoppingCart className="h-5 w-5" />}
          />
          {user.email ? (
            <Dropdown placement="bottom">
              <DropdownTrigger>
                <Avatar
                  as="button"
                  size="sm"
                  icon={<User2 size={20} />}
                  className="bg-grayscale text-lg font-bold text-light transition-transform"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem
                  key="settings"
                  as={NextUILink}
                  href="/settings"
                  className="text-grayscale"
                  startContent={<Settings size={20} />}
                >
                  Profile
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  as={NextUILink}
                  href="/api/v1/auth/logout"
                  startContent={<LogOut size={20} />}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div className="relative flex items-center gap-x-2">
              <Button variant="light">Sign Up</Button>
              <Button as={NextUILink} href="/auth/login" color="primary">
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
