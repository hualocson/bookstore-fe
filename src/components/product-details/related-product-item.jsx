import NextImage from "next/image";
import { useRouter } from "next/router";

import { addToCart, toggleAllCheckedCartItem } from "@/apis/cart";
import { addToFavorite, removeFromFavorite } from "@/apis/favorites";
import useCart from "@/hooks/useCart";
import { cn, priceFormatter } from "@/lib/utils";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Heart, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

const RelatedProductItem = ({
  product: { id, name, author, image, slug, price },
  isFavorite = false,
}) => {
  const router = useRouter();
  const { mutate } = useCart({ type: "length" });

  const { mutate: mutateGlobal } = useSWRConfig();

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
      mutate();
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
      mutateGlobal("/favorites");
      mutateGlobal("/favorites/length");
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
      mutateGlobal("/favorites");
      mutateGlobal("/favorites/length");
      return "Remove favorite successfully";
    }
  };

  return (
    <div onClick={() => router.push(`/products/${slug}`)} className="h-full">
      <Card
        shadow="lg"
        radius="md"
        className="h-full border-none bg-grayscale-800 outline-none hover:cursor-pointer"
      >
        <CardBody>
          <Image
            removeWrapper
            radius="md"
            alt={name}
            width={300}
            height={450}
            className="object-cover"
            src={image}
            as={NextImage}
          />
        </CardBody>
        <CardFooter>
          <div className="flex flex-col gap-2">
            <div>
              <b className="line-clamp-2 text-light-200">{name}</b>
              <b className="line-clamp-1 text-sm font-normal text-grayscale-400">
                {author}
              </b>
            </div>
            <p className="text-sm text-primary">{priceFormatter(price)}</p>
            <div className="grid grid-cols-2 items-center justify-items-center gap-4">
              <Button
                color="primary"
                onPress={() => notifyBuyNow(handleOnBuyNow)}
              >
                Buy now
              </Button>
              <div className="flex items-center justify-around">
                <Button
                  isIconOnly
                  color="primary"
                  aria-label="Like"
                  variant="light"
                  onPress={handleAddToCart}
                >
                  <ShoppingCart size={20} />
                </Button>
                <Button
                  isIconOnly
                  color="primary"
                  aria-label="Like"
                  variant="light"
                  onPress={() => {
                    if (isFavorite) {
                      notifyBuyNow(handleRemoveFavorite);
                    } else {
                      notifyBuyNow(handleOnMarkFavorite);
                    }
                  }}
                >
                  <Heart
                    size={20}
                    className={cn(isFavorite && "fill-primary")}
                  />
                </Button>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RelatedProductItem;
