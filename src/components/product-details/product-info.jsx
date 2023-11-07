import Image from "next/image";

import coverBook from "@/resources/images/landing/cover-book.jpg";


import SectionLayout from "@/components/landing-page/section-layout";
import { Button } from "@/components/ui/button";
import { Heart, RefreshCcw, Star, Truck } from "lucide-react";

const ProductDetailSection = () => {
  return (
    <SectionLayout className="flex items-start mt-16">
      <div className="flex items-center w-1/2 justify-center">
        <Image
          src={coverBook}
          alt="Book"
          width={400}
          height={"auto"}
          className="rounded-l-lg rounded-r-xl object-contain shadow-lg"
        />
      </div>
      <div className="flex flex-col items-start w-1/2">
        <p className="font-bold text-gray-700 text-2xl w-full">Havic HV G-92 Gamepad</p>
        <div className="flex items-start mt-4 w-full">
            <div className="flex">
                <div className="text-lg text-primary-500">4.5</div>
                <Star className="text-primary-500 ml-2"></Star>
            </div>
            <div className="text-lg ml-4">(150 Reviewer)</div>
            <div className="text-lg ml-4 text-primary-400 ">Instock</div>
        </div>
        <p className="text-3xl text-grayscale-700 font-bold mt-4">$500</p>
        <p className="text-basic text-justify mt-2">
            With more than five million copies sold, Flowers for Algernon is the beloved, classic story of a mentally disabled man whose experimental quest for intelligence mirrors that of Algernon, an extraordinary lab mouse. In poignant diary entries, Charlie tells how a brain operation increases his IQ and changes his life. As the experimental procedure takes effect, Charlie's intelligence expands until it surpasses that of the doctors who engineered his metamorphosis. The experiment seems to be a scientific breakthrough of paramount importance--until Algernon begins his sudden, unexpected deterioration. Will the same happen to Charlie?
        </p>
        <div className="flex flex-row mt-4">
            <div class="flex flex-row h-10 w-1.4 rounded-lg relative bg-transparent mt-1">
                <Button variant="secondary" className ="h-full w-20 rounded-l">
                    <span class="text-3xl font-thin">-</span>
                </Button>
                <div className="h-full w-20 bg-grayscale-200 flex items-center justify-center">
                    <p className="text-lg">1</p>
                </div>
                <Button variant="default" className ="h-full w-20 rounded-l">
                    <span class="text-3xl font-thin">+</span>
                </Button>
            </div>
            <Button
              className="capitalize h-auto ml-4">
                <p className="px-8 text-lg py-1">Buy Now</p>
            </Button>
            <Button
              variant = "outline"
              className="capitalize h-auto ml-4">
                <Heart/>
            </Button>
        </div>
        <div className="flex flex-col w-5/6 mt-4 soutline-2  rounded-md border-2 border-primary-500">
            <div className="w-full h-20 border-b-2 flex items-center border-primary-500">
                <Truck className="h-10 w-1/4"/>
                <div className="flex flex-col w-3/4">
                    <p className="text-lg font-bold text-primary-500">Free Delivery</p>
                    <p className= "font-thin text-grayscale-600 underline">enter your postal code for Delivery Availability</p>
                </div>
            </div>
            <div className="w-full h-20 flex items-center ">
                <RefreshCcw className="h-10 w-1/4"/>
                <div className="flex flex-col w-3/4">
                    <p className="text-lg font-bold text-primary-500">Return Delivery</p>
                    <p className= "font-thin text-grayscale-600 underline">Free 30 Days Delivery Returns</p>
                </div>
            </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductDetailSection;