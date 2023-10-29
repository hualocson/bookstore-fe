import Image from "next/image";

import coverBook from "@/resources/images/landing/cover-book.jpg";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import SectionLayout from "@/components/landing-page/section-layout";

const ProductSection = () => {
  return (
    <SectionLayout className="flex items-center justify-around">
      <div className="flex items-center justify-center">
        <Image
          src={coverBook}
          alt="Cover Book"
          width={400}
          height={"auto"}
          className="rounded-l-lg rounded-r-xl object-contain shadow-lg"
        />
      </div>
      <div className="flex flex-col items-end gap-y-20">
        <h1 className="flex flex-col text-7xl">
          <span className="font-semibold text-primary">books land</span>
          <span>— find your next</span>
          <span>favorite book.</span>
        </h1>
        <Button variant="link" className="h-18 px-10 text-3xl">
          <span>Shop Now </span>
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </SectionLayout>
  );
};

export default ProductSection;
