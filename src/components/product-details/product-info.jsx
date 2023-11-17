import Image from "next/image";

import { addToCart } from "@/apis/cart";
import useCategories from "@/hooks/useCategories";
import { priceFormatter } from "@/lib/utils";
import coverBook from "@/resources/images/landing/cover-book.jpg";
import { Button } from "@nextui-org/react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useSWRConfig } from "swr";

import SectionLayout from "@/components/landing-page/section-layout";
import RatingSection from "@/components/product-details/rating-section";

import { getAllCategories } from "@/store/features/categories/categories-selector";
import { useSelector } from "@/store/redux-hook";

const ProductDetailSection = ({
  id,
  name,
  image,
  price,
  author,
  description,
  pages,
  publisher,
  publicationDate,
  categoryName,
  statusName,
}) => {
  useCategories();
  const categories = useSelector(getAllCategories);

  const { mutate } = useSWRConfig();
  const handleAddToCart = async () => {
    const { error } = await addToCart({ productId: id });
    if (error) {
      console.log(error);
    } else {
      mutate("/carts/length");
    }
  };
  return (
    <SectionLayout className=" my-10 grid grid-cols-12 place-items-start">
      <div className="sticky top-[120px] col-span-4 flex flex-col items-center justify-center gap-5">
        <Image
          src={image || coverBook}
          alt="Book"
          width={300}
          height={400}
          className="rounded-l-lg rounded-r-xl object-contain shadow-lg"
        />
        <div className="flex w-full justify-between">
          <Button variant="solid" color="primary" className="basis-2/3">
            Buy Now
          </Button>
          <div className="flex items-center justify-around gap-2">
            <Button
              isIconOnly
              color="primary"
              aria-label="Like"
              size="sm"
              variant="light"
              onPress={handleAddToCart}
            >
              <ShoppingCart size={22} />
            </Button>
            <Button
              isIconOnly
              color="primary"
              aria-label="Like"
              size="sm"
              variant="light"
            >
              <Heart size={22} />
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-8 flex flex-col items-start gap-3">
        <p className="w-full text-4xl font-bold text-gray-700">{name}</p>
        <p className="text-xl font-semibold">{author}</p>
        <p className="ml-2 underline">{categoryName}</p>
        <div className="flex items-baseline justify-center gap-x-2">
          <div className="flex gap-2">
            <div className="text-lg text-primary-500">4.5</div>
            <Star className="fill-primary" />
          </div>
          <p className="text-lg">(150 Reviewer)</p>
          <p className="rounded-lg bg-primary-500/10 px-2 py-1 text-sm text-primary-500">
            {statusName}
          </p>
        </div>
        <p className="mt-4 text-3xl font-bold text-grayscale-700">
          {priceFormatter(price)}
        </p>
        <p className="text-basic mt-2 max-w-2xl text-justify">{description}</p>

        <div className="flex max-w-xl flex-col gap-2">
          <span className="font-semibold">Genres: </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category.id} size="sm" className="truncate">
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        {pages && publicationDate && publisher && (
          <div className="mt-5 text-grayscale-400">
            <p>{`${pages} pages`}</p>
            <p>{`First published ${publicationDate} by ${publisher}`}</p>
          </div>
        )}
        <RatingSection />
      </div>
    </SectionLayout>
  );
};

export default ProductDetailSection;
