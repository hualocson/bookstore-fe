import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useProducts } from "@/hooks";
import ProductStatus from "@/lib/constants/product-status";
import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react";

import SectionLayout from "@/components/landing-page/section-layout";

const categories = [
  {
    id: ProductStatus.NEW_ARRIVAL,
    name: "new arrivals",
  },
  {
    id: ProductStatus.BEST_SELLER,
    name: "Best sellers",
  },

  {
    id: ProductStatus.ON_SALE,
    name: "On Sale",
  },
];

const CategorySection = () => {
  const { data } = useProducts();

  const [filter, setFilter] = useState(ProductStatus.NEW_ARRIVAL);

  const [products, setProducts] = useState(
    data.filter((p) => p.status === ProductStatus.NEW_ARRIVAL)
  );

  const handleOnFilter = (filter) => {
    setFilter(filter);
    const filteredProducts = data
      .filter((p) => p.status === filter)
      .slice(0, 4);
    setProducts(filteredProducts);
  };
  useEffect(() => {
    setProducts(
      data.filter((p) => p.status === ProductStatus.NEW_ARRIVAL).slice(0, 4)
    );
  }, [data]);

  return (
    <SectionLayout className="h-auto py-20">
      <div className="flex items-end justify-between border-b border-grayscale-300 py-4">
        <h2 className="max-w-sm text-4xl font-bold capitalize">
          {"Let's dive into thoughtful words"}
        </h2>

        <div className="flex gap-4">
          {categories.map((c) => (
            <Button
              key={c.id}
              size="lg"
              className="capitalize"
              variant={filter !== c.id ? "ghost" : "solid"}
              color="primary"
              onPress={() => handleOnFilter(c.id)}
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
        <div className="grid w-full grid-cols-4 gap-4">
          {products.map((book, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={book.image}
                  alt={book.name}
                  width={120}
                  height={200}
                  priority
                  className="h-[450px] w-full rounded-lg object-cover"
                />
              </div>

              <div className="row-span-2 h-full p-4">
                <div className="flex items-start justify-between">
                  <Link
                    href={`/products/${book.slug}`}
                    className="my-2 line-clamp-2 text-base font-bold text-primary-500"
                  >
                    {book.name}
                  </Link>
                  <div className="flex gap-2">
                    <Heart size={20} className="fill-primary" />
                  </div>
                </div>
                <div className="flex justify-between px-2">
                  <span className="bold line-clamp-1 text-grayscale-400">
                    by {book.author}
                  </span>
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
