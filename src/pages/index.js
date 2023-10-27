import Image from "next/image";

import coverBook from "@/resources/images/landing/cover-book.jpg";

import MainLayout from "@/components/layout/main-layout";

import { Button } from "@/components/ui/button";

import bg from "@/resources/images/landing/product-bg.svg";

export default function Home() {
  return (
    <MainLayout>
      <div className="absolute inset-0 -z-10 opacity-60 blur-sm">
        <Image
          src={bg}
          alt="Product Background"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="mx-auto flex h-[calc(100vh-80px)] max-w-screen-xl items-stretch justify-around py-6">
        <div className="flex items-center justify-center">
          <Image
            src={coverBook}
            alt="Cover Book"
            width={400}
            height={"auto"}
            className="rounded-l-lg rounded-r-xl object-contain shadow-lg"
          />
        </div>
        <div className="flex flex-col items-end justify-around">
          <h1 className="flex flex-col text-7xl">
            <span className="font-semibold text-primary">books land</span>
            <span>— find your next</span>
            <span>favorite book.</span>
          </h1>
          {/* <div className="group relative cursor-pointer rounded-lg p-3 ring ring-primary">
            <p className="text-3xl font-bold text-primary">Explore</p>
          </div> */}

          <Button variant="outline" className="h-18 px-10 text-3xl">
            Explore
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-2 h-[calc(100vh-80px)] max-w-screen-xl py-6">
        <h2 className="text-3xl font-bold">Best Seller</h2>
      </div>
    </MainLayout>
  );
}
