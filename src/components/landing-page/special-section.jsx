import Image from "next/image";

import themebook from "@/resources/images/landing/themebook.jpg";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import SectionLayout from "@/components/landing-page/section-layout";

const items = [
  {
    id: 1,
    name: "The Women Kingdom",
    desc: "The Women Kingdom",
  },
  {
    id: 2,
    name: "The Women Kingdom",
    desc: "The Women Kingdom",
  },

  {
    id: 3,
    name: "The Women Kingdom",
    desc: "The Women Kingdom",
  },
];
const ProductSpecialSection = () => {
  return (
    <SectionLayout className="mb-20 grid h-auto grid-cols-12 gap-8">
      <div className="col-span-2 justify-self-end">
        <div className="mb-8 truncate text-3xl font-bold text-primary-600">
          Latest News
        </div>
        <div className="flex flex-col items-end gap-5 text-lg">
          <p className="rounded-md border-r border-primary-500 bg-gradient-to-l from-primary-200 to-primary-100 p-2">
            Work Books
          </p>
          <p>Kid Books</p>
          <p>Graphic Design</p>
          <p>Photography</p>
          <p>Travel & tour</p>
          <p>Heath & beauty</p>
        </div>
      </div>
      <div className="col-span-10">
        <div className="grid grid-cols-3">
          {items.map((c) => (
            <div key={c.id} className="flex flex-col items-start gap-4">
              <span className="relative h-auto w-full">
                <Image
                  src={themebook}
                  alt={"themebook"}
                  width={"100%"}
                  className="rounded-lg object-contain"
                />
              </span>
              <p className="line-clamp-2 h-full text-left text-xl font-bold text-primary-500">
                {c.name}
              </p>
              <p className="line-clamp-3 h-full text-left text-grayscale-400">
                {c.desc}
              </p>
              <Button variant="link" className="font-bold text-gray-800">
                <span className="mr-4">Read More</span>
                {<ArrowRight size={16} />}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductSpecialSection;
