import Image from "next/image";

import { Facebook, Github, Instagram, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

import logo from "@/resources/images/landing/books-logo.svg";

const Footer = () => {
  return (
    <div className="bg-grayscale pb-5 pt-20 text-light">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-10">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-4">
            <span className="h-10 w-10">
              <Image
                src={logo}
                alt="Books Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </span>
            <p className="text-4xl">book-land</p>
          </div>
          <div className="flex items-center justify-around gap-x-4">
            <Button variant="link">{"About"}</Button>
            <Button variant="link">{"Jobs"}</Button>
            <Button variant="link">{"Terms of Service"}</Button>
            <Button variant="link">{"Privacy Policy"}</Button>
          </div>
          {/* social */}
          <div className="flex items-center gap-x-4">
            <Twitter className="h-4 w-4 fill-current" />
            <Facebook className="h-4 w-4 fill-current" />
            <Github className="h-4 w-4 fill-current" />
            <Instagram className="h-4 w-4" />
          </div>
        </div>

        {/* copyright */}
        <p className="border-t pt-5 text-sm text-grayscale-300">
          © copyright 2023, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
