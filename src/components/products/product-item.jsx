import { useRouter } from "next/router";

import { addToCart, toggleAllCheckedCartItem } from "@/apis/cart";
import useCart from "@/hooks/useCart";
import { handleErrorResponse, priceFormatter } from "@/lib/utils";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Heart, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

import { getCategoryById } from "@/store/features/categories/categories-selector";
import { useSelector } from "@/store/redux-hook";

const ProductItem = ({
  product: { id, name, author, image, slug, price, categoryId },
}) => {
  const router = useRouter();
  const categories = useSelector(getCategoryById(categoryId));
  const { mutate } = useCart({ type: "length" });

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

  const notifyBuyNow = () => {
    toast.promise(handleOnBuyNow(), {
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

  return (
    <div onClick={() => router.push(`/products/${slug}`)} className="h-full">
      <Card
        shadow="lg"
        radius="md"
        className="h-full border-none bg-grayscale-800 outline-none hover:cursor-pointer"
      >
        <CardBody>
          <div className="relative grid grow grid-cols-12 items-center gap-6">
            <div className="col-span-5">
              <Image
                shadow="sm"
                radius="md"
                alt={name}
                width={"auto"}
                className="h-full object-cover"
                src={image}
              />
            </div>
            <div className="col-span-7 grid grid-flow-row auto-rows-[minmax(48px,48px)]">
              <div>
                <b className="line-clamp-2 text-light-200">{name}</b>
                <b className="line-clamp-1 text-sm font-normal text-grayscale-400">
                  {author}
                </b>
              </div>
              <p className="self-end text-sm text-primary">
                {priceFormatter(price)}
              </p>
              <div className="flex items-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onPress={() =>
                      router.push(`/products/categories/${category.slug}`)
                    }
                    size="sm"
                    className="rounded-md bg-primary-400/20 text-xs text-primary-400"
                    color="secondary"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-2 items-center justify-items-center gap-2">
                <Button
                  color="primary"
                  className="justify-self-stretch"
                  onPress={notifyBuyNow}
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
                  >
                    <Heart size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
