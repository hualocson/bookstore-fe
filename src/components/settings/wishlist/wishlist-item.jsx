import Image from "next/image";
import Link from "next/link";

import { addToCart } from "@/apis/cart";
import { removeFromFavorite } from "@/apis/favorites";
import {
  cn,
  handleErrorResponse,
  notifyPromise,
  priceFormatter,
} from "@/lib/utils";
import coverBook from "@/resources/images/landing/cover-book.jpg";
import { Button } from "@nextui-org/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

const WishlistItem = ({ productId, slug, image, name, author, price }) => {
  const { mutate: mutateGlobal } = useSWRConfig();
  const handleAddToCart = async () => {
    const { error } = await addToCart({ productId });
    if (error) {
      const { message, statusCode } = handleErrorResponse(error);
      if (statusCode === 401) {
        toast.error("Please login to continue");
        return;
      }
      toast.error(message);
    } else {
      toast.success("Add to cart successfully");
    }
  };

  const handleRemoveFavorite = async () => {
    const { error, statusCode } = await removeFromFavorite({ productId });
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
    <div
      className={cn(
        "group relative grid grid-cols-12 rounded-lg p-4 transition-all duration-250 hover:bg-grayscale-400/30"
      )}
    >
      <div className="col-span-8 grid grid-cols-12 gap-4">
        <div className="relative col-span-3 h-44 translate-x-0 transition-all duration-250 group-hover:translate-x-2">
          <Image
            src={image ?? coverBook}
            alt="Cover Book"
            fill
            className="rounded-md object-cover shadow-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-7 flex flex-col items-start gap-4 py-4">
          <Link href={`/products/${slug}`} className="line-clamp-2 font-bold">
            {name}
          </Link>
          <p className="line-clamp-1 text-sm text-primary-600">{author}</p>

          <p className="col-span-2 text-center font-bold text-grayscale-700">
            {priceFormatter(price)}
          </p>
        </div>
      </div>
      <div className="col-span-4 flex flex-col items-end justify-between">
        <Button
          startContent={<Trash2 size={20} />}
          isIconOnly
          variant="light"
          onPress={() =>
            notifyPromise(handleRemoveFavorite, "Waiting remove favorite")
          }
        />

        <Button className="w-full" color="primary" onPress={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default WishlistItem;
