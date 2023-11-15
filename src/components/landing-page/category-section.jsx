import Image from "next/image";

import themebook from "@/resources/images/landing/themebook.jpg";

import { Button } from "@/components/ui/button";

import SectionLayout from "@/components/landing-page/section-layout";

import star from "@/resources/images/icons/star.png";

const categories = [
  {
    id: 1,
    slug: "/fiction",
    name: "new releases",
  },
  {
    id: 2,
    slug: "/non-fiction",
    name: "Best sellers",
  },

  {
    id: 3,
    slug: "/non-fiction",
    name: "Featured",
  },

  {
    id: 4,
    slug: "/non-fiction",
    name: "Award Winners",
  },
];

const products = [
  {
    id: 1,
    name: "The Women Kingdom",
    rating: 4.5,
    author: "Unknow",
  },
  {
    id: 2,
    name: "The Women Kingdom",
    rating: 4.5,
    author: "Unknow",
  },

  {
    id: 3,
    name: "The Women Kingdom",
    rating: 4.5,
    author: "Unknow",
  },

  {
    id: 4,
    name: "Award Winners",
    rating: 4.5,
    author: "Unknow",
  },
];

const CategorySection = () => {
  return (
    <SectionLayout className="mt-6 h-auto mb-32">
      <div className="flex items-end justify-between border-b border-grayscale-300 py-4">
        <h2 className="max-w-sm text-4xl font-bold capitalize">
          {"Let's dive into thoughtful words"}
        </h2>

        <div className="flex gap-4">
          {categories.map((c, index) => (
            <Button
              key={c.id}
              className="capitalize"
              size="lg"
              variant={index !== 0 ? "outline" : "default"}
            >
              {c.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-around">
        <h2 className="mx-auto my-8 max-w-2xl text-5xl font-bold capitalize text-primary">
          {"Special picks for you"}
        </h2>
        <div className="flex w-full gap-4">
          {products.map((book, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-primary-100 shadow-md"
            >
              <Image
                src={themebook}
                alt={book.name}
                width={"auto"}
                className="object-contain"
              />
              <div className="my-2 text-center text-base font-bold text-primary-500">
                {book.name}
              </div>
              <div className="flex justify-between">
                <div className="bold mb-2 ml-4 text-light-800">
                  by {book.author}
                </div>
                <div className="flex">
                  <Image
                    src={star}
                    alt={book.name}
                    width={16}
                    height={16}
                    className="mb-2 mr-3 object-contain"
                  />
                  <div className="bold mr-2 text-base text-primary-600">
                    {book.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Present image have many book */}
    </SectionLayout>
  );
};

export default CategorySection;
