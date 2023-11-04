import SectionLayout from "@/components/landing-page/section-layout";
import { Button } from "@/components/ui/button";
import star from "@/resources/images/icons/star.png";
import themebook from "@/resources/images/landing/themebook.jpg";
import Image from "next/image";
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
    author: "Unknow"
  },
  {
    id: 2,
    name: "The Women Kingdom",
    rating: 4.5,
    author: "Unknow"
  },

  {
    id: 3,
    name: "The Women Kingdom",
    rating: 4.5,
    author: "Unknow"
  },

  {
    id: 4,
    name: "Award Winners",
    rating: 4.5,
    author: "Unknow"
  },
];

const CategorySection = () => {
  return (
    <SectionLayout className="mt-6">
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
        <h2 className="max-w-2xl text-5xl font-bold capitalize mt-8 mx-auto text-primary">
            {"Special picks for you"}
        </h2>
        <div className="flex gap-4">
        {products.map((book, index) => (
          <div key={index} className="bg-primary-100 rounded-lg overflow-hidden shadow-md m-4 w-52 relative">
                <Image
                  src={themebook}
                  alt={book.name}
                  width = {"auto"}
                  className="object-contain"
                />
                <div className="text-base font-bold text-primary-500 text-center my-2">{book.name}</div>
              <div className="flex justify-between">
                <div className="text-light-800 bold ml-4 mb-2">by {book.author}</div>
                <div className="flex">
                  <Image
                    src={star}
                    alt={book.name}
                    width={16}
                    height={16}
                    className="object-contain mb-2 mr-3" 
                  />
                  <div className="text-base bold text-primary-600 mr-2">{book.rating}</div>
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
