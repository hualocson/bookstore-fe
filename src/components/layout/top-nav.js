import Image from "next/image";

import TopNavigation from "@/lib/constants/top-nav";
import { Search, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

import logo from "@/resources/images/landing/books-logo.svg";

const TopNav = () => {
  return (
    <div className="sticky top-0 bg-light/20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between py-3">
        <span className="h-14 w-14">
          <Image
            src={logo}
            alt="Books Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </span>
        <div className="flex items-center justify-around gap-x-4">
          {TopNavigation.map((item) => (
            <Button key={item.href} variant="link" className="text-lg">
              {item.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-x-4">
          <Search className="h-5 w-5" />
          <ShoppingCart className="h-5 w-5" />

          <div className="relative flex items-center gap-x-1">
            <Button variant="link">Sign Up</Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
