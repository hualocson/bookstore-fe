import Image from "next/image";
import { useRouter } from "next/router";

import { addToCart, toggleAllCheckedCartItem } from "@/apis/cart";
import useCategories from "@/hooks/useCategories";
import useFavorites from "@/hooks/useFavorites";
import { cn, handleErrorResponse, priceFormatter } from "@/lib/utils";
import coverBook from "@/resources/images/landing/cover-book.jpg";
import { Button } from "@nextui-org/react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

import SectionLayout from "@/components/landing-page/section-layout";
import RatingSection from "@/components/product-details/rating-section";

import {
  getAllCategories,
  getCategoryById,
} from "@/store/features/categories/categories-selector";
import { useSelector } from "@/store/redux-hook";
import { addToFavorite, removeFromFavorite } from "@/apis/favorites";

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
  statusName,
  categoryId,
}) => {
  useCategories();
  const categories = useSelector(getAllCategories);

  const productCategories = useSelector(getCategoryById(categoryId));
  const router = useRouter();

  const { data: userFavorites, mutate: favoriteMutate } = useFavorites();

  const { mutate } = useSWRConfig();

  const handleAddToCart = async () => {
    const { error } = await addToCart({ productId: id });
    if (error) {
      const { message, statusCode } = handleErrorResponse(error);
      if (statusCode === 401) {
        toast.error("Please login to continue");
        return;
      }
      toast.error(message);
    } else {
      mutate("/carts/length");
      toast.success("Add to cart successfully");
    }
  };

  const notifyBuyNow = (fn) => {
    toast.promise(fn(), {
      loading: "Checking out ...",
      success: (message) => <b>{message}</b>,
      error: (error) => <b>{error.message}</b>,
    });
  };

  const handleOnBuyNow = async () => {
    const { error } = await toggleAllCheckedCartItem({ checked: false });

    if (error) {
      const { message, statusCode } = handleErrorResponse(error);
      if (statusCode === 401) {
        throw new Error("Please login to continue");
      }
      throw new Error(message);
    } else {
      // add to cart
      const { error } = await addToCart({ productId: id, checked: true });
      if (error) {
        const { message } = handleErrorResponse(error);
        throw new Error(message);
      }

      router.push("/checkout");
      return "Checking out successfully";
    }
  };

  const handleOnMarkFavorite = async () => {
    const { error, statusCode } = await addToFavorite({ productId: id });
    if (error) {
      if (statusCode === 401) {
        throw new Error("Please login to continue");
      } else {
        const { message } = handleErrorResponse(error);
        throw new Error(message);
      }
    } else {
      favoriteMutate();
      return "Add to favorite successfully";
    }
  };

  const handleRemoveFavorite = async () => {
    const { error, statusCode } = await removeFromFavorite({ productId: id });
    if (error) {
      if (statusCode === 401) {
        throw new Error("Please login to continue");
      } else {
        const { message } = handleErrorResponse(error);
        throw new Error(message);
      }
    } else {
      favoriteMutate();
      return "Remove favorite successfully";
    }
  };

  const isFavorite = userFavorites.find((item) => item.productId === id);

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
          <Button
            onPress={() => notifyBuyNow(handleOnBuyNow)}
            variant="solid"
            color="primary"
            className="basis-2/3"
          >
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
              onPress={() => {
                if (isFavorite) {
                  notifyBuyNow(handleRemoveFavorite);
                } else {
                  notifyBuyNow(handleOnMarkFavorite);
                }
              }}
            >
              <Heart size={22} className={cn(isFavorite && "fill-primary")} />
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-8 flex flex-col items-start gap-3">
        <p className="w-full text-4xl font-bold text-gray-700">{name}</p>
        <p className="text-xl font-semibold">{author}</p>
        <div className="flex gap-2">
          {productCategories.map((category) => (
            <Button
              key={category.id}
              onPress={() =>
                router.push(`/products/categories/${category.slug}`)
              }
              variant="flat"
              color="primary"
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="flex items-baseline justify-center gap-x-2">
          <div className="flex gap-2">
            <div className="text-lg text-primary-500">4.5</div>
            <Star className="fill-primary" />
          </div>
          <p className="text-lg">(150 Reviewer)</p>
          <p className="rounded-lg bg-success-500/10 px-2 py-1 text-sm text-success-500">
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
              <Button
                key={category.id}
                onPress={() =>
                  router.push(`/products/categories/${category.slug}`)
                }
                size="sm"
                variant="flat"
                color="secondary"
              >
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
