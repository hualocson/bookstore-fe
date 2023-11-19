import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import TopNavigation from "@/lib/constants/top-nav";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link as NextUILink,
  Skeleton,
} from "@nextui-org/react";
import { LogOut, Search, Settings, ShoppingCart, User2 } from "lucide-react";

import { getCartLength } from "@/store/features/cart/cart-selector";
import { getUser } from "@/store/features/user";
import { useSelector } from "@/store/redux-hook";

import logo from "@/resources/images/landing/books-logo.svg";

const TopNav = () => {
  const router = useRouter();
  const user = useSelector(getUser);
  const cartLength = useSelector(getCartLength);
  return (
    <div className="sticky top-0 z-50 bg-light/20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between py-3">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Books Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-semibold">
              Book
              <span className="font-bold text-primary">land</span>
            </span>
          </div>
        </Link>
        <div className="flex items-center justify-around gap-x-4">
          {TopNavigation.map((item) => (
            <Button
              key={item.href}
              className="text-lg capitalize"
              onPress={() => router.push(item.href)}
              variant="light"
              color="primary"
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-x-2">
          <Button
            radius="full"
            className="text-lg capitalize"
            variant="light"
            isIconOnly
          >
            <Search className="h-5 w-5" />
          </Button>
          <Badge
            color="primary"
            showOutline={false}
            isInvisible={cartLength === 0}
            content={cartLength}
            shape="circle"
            size="sm"
          >
            <Button
              radius="full"
              className="text-lg capitalize"
              variant="light"
              isIconOnly
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Badge>
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
          ) : user.loading ? (
            <Skeleton
              className="flex h-8 w-8 rounded-full bg-grayscale before:via-grayscale-600"
              disableAnimation
              isLoaded={!user.loading}
            />
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
