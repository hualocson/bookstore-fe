import Image from "next/image";

import themebook from "@/resources/images/landing/themebook.jpg";
import { Button } from "@nextui-org/react";

const WishListLayout = () => {
  return (
    <div className="col-span-9 flex flex-col gap-3 rounded-lg bg-grayscale-50/20 px-10 py-5 shadow-lg">
      <div className="min-h-screen w-full">
        <div className="mx-20 flex ">
          <div className="w-2/5 text-lg uppercase text-gray-500">
            Product Info
          </div>
          <div className="w-1/5 text-center text-lg uppercase text-gray-500">
            Price
          </div>
          <div className="w-1/5 text-center text-lg uppercase text-gray-500">
            Status
          </div>
          <div className="w-1/5 text-center text-lg uppercase text-gray-500"></div>
        </div>
        <div className="mx-4 flex items-start py-8">
          <div className="mt-4 flex h-24 w-2/5 items-center">
            <Image
              src={themebook}
              alt="Cover Book"
              width={"auto"}
              height={160}
              className="mr-2 object-contain"
            />
            <div className="flex flex-col">
              <p className="mx-4 text-center text-lg text-primary-500">
                The KingDom Queen
              </p>
              <Button variant="link" className="mt-4 font-bold text-gray-800">
                <span className="">More Details</span>
              </Button>
            </div>
          </div>
          <div className="flex h-24  w-1/5 items-center justify-center">
            <p className="text-center font-bold text-grayscale-700">$ 400</p>
          </div>

          <div className="flex h-24 w-1/5 items-center">
            <p className="ml-4 text-left font-bold uppercase text-grayscale-700">
              InStock
            </p>
          </div>
          <div className="flex h-24 w-1/5 flex-col">
            <Button className="mt-4 font-bold text-gray-800" color="primary">
              <span className="">Add To Cart</span>
            </Button>
            <Button variant="link" className="mt-4 font-bold text-gray-800">
              <span className="">Remove</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListLayout;
